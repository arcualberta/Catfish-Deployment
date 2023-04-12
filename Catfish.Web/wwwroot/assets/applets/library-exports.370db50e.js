var eT = Object.defineProperty;
var ST = (M, A, I) => A in M ? eT(M, A, { enumerable: !0, configurable: !0, writable: !0, value: I }) : M[A] = I;
var HM = (M, A, I) => (ST(M, typeof A != "symbol" ? A + "" : A, I), I);
import { defineComponent as f, ref as gM, unref as S, openBlock as T, createElementBlock as r, createElementVNode as s, normalizeClass as B, withModifiers as Sg, createCommentVNode as P, pushScopeId as Mg, popScopeId as Ag, watch as dM, createBlock as V, Transition as SL, withCtx as b, toDisplayString as F, h as rM, resolveComponent as sM, createVNode as k, Fragment as MM, renderList as aM, computed as x, withDirectives as _M, vModelCheckbox as lg, vShow as rC, shallowRef as zC, inject as aA, reactive as $A, nextTick as EI, provide as TI, onMounted as $M, createTextVNode as DM, vModelText as bN, vModelSelect as LD, withKeys as YC, isRef as sA, vModelRadio as dC, resolveDynamicComponent as EM, renderSlot as Q, toRef as y, watchEffect as CT, readonly as aT, Comment as wT, onBeforeUnmount as Xu, onActivated as Ru, useSlots as wA, normalizeStyle as RA, mergeProps as wM, getCurrentInstance as ET, normalizeProps as DA, useAttrs as mC, guardReactiveProps as nA, Teleport as TT, createSlots as UC, onUnmounted as nT, isReactive as xT } from "vue";
import { defineStore as hI, storeToRefs as CL, createPinia as aL } from "pinia";
var MD = /* @__PURE__ */ ((M) => (M.ShortAnswer = "Short Answer", M.Paragraph = "Paragraph", M.RichText = "Rich Text", M.AttachmentField = "AttachmentField", M))(MD || {}), wL = /* @__PURE__ */ ((M) => (M.Date = "Date", M.DateTime = "Date Time", M.Decimal = "Decimal", M.Integer = "Integer", M.Email = "Email", M))(wL || {}), jt = /* @__PURE__ */ ((M) => (M.Checkboxes = "Checkboxes", M.DataList = "Data List", M.RadioButtons = "Radio Buttons", M.DropDown = "Drop Down", M))(jt || {}), hC = /* @__PURE__ */ ((M) => (M.InfoSection = "Info Section", M))(hC || {}), UM = /* @__PURE__ */ ((M) => (M.ShortAnswer = "Short Answer", M.Paragraph = "Paragraph", M.RichText = "Rich Text", M.Date = "Date", M.DateTime = "Date Time", M.Decimal = "Decimal", M.Integer = "Integer", M.Email = "Email", M.Checkboxes = "Checkboxes", M.DataList = "Data List", M.RadioButtons = "Radio Buttons", M.DropDown = "Drop Down", M.InfoSection = "Info Section", M.AttachmentField = "AttachmentField", M))(UM || {});
const oT = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  TextType: MD,
  MonolingualFieldType: wL,
  OptionFieldType: jt,
  InfoSectionType: hC,
  FieldType: UM
}, Symbol.toStringTag, { value: "Module" }));
var yT = function() {
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
}(), iM = yT;
const cA = {
  googleApiKey: "Use dev credentials from https://docs.google.com/document/d/1N_y4aQupxPKPGh2eaxpOqCmc_75QionPp4U_MoY3gZQ/edit",
  googleCalendarIds: ["xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx", "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"],
  maxEvents: 10,
  initialView: "dayGridMonth",
  dataRepositoryApiRoot: "https://localhost:5020"
};
var jD = /* @__PURE__ */ ((M) => (M.Draft = "Draft", M.Active = "Active", M.Archived = "Archived", M.Inactive = "Inactive", M.Deleted = "Deleted", M))(jD || {}), EL = /* @__PURE__ */ ((M) => (M.Item = "Item", M.Collection = "Collection", M.Unknown = "Unknown", M))(EL || {}), Hj = /* @__PURE__ */ ((M) => (M.Title = "Title", M.Description = "Description", M.TitleOrDescription = "TitleOrDescription", M))(Hj || {});
const YD = hI("FormBuilderStore", {
  state: () => ({
    lang: ["en", "fr"],
    form: null,
    transientMessageModel: {},
    apiRoot: null
  }),
  actions: {
    createNewForm() {
      this.form = {
        id: iM.EMPTY,
        name: "",
        description: "",
        fields: [],
        state: jD.Draft
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
      const M = ((D = (g = this.form) == null ? void 0 : g.id) == null ? void 0 : D.toString()) === iM.EMPTY;
      let A = `${this.getApiRoot}`, I = "";
      M ? (console.log("Saving new form."), this.form.id = iM.create().toString(), I = "POST") : (console.log("Updating existing form."), A = `${A}/${this.form.id}`, I = "PUT"), fetch(
        A,
        {
          body: JSON.stringify(this.form),
          method: I,
          headers: {
            encType: "multipart/form-data",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": `${cA.dataRepositoryApiRoot}`,
            "Access-Control-Allow-Credentials": "true"
          }
        }
      ).then((t) => {
        if (t.ok)
          this.transientMessageModel.message = "The form saved successfully", this.transientMessageModel.messageClass = "success";
        else
          switch (M && this.form && (this.form.id = iM.EMPTY), this.transientMessageModel.messageClass = "danger", t.status) {
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
      }).catch((t) => {
        M && this.form && (this.form.id = iM.EMPTY), this.transientMessageModel.message = "Unknown error occurred", this.transientMessageModel.messageClass = "danger", console.error("Form Save API Error:", t);
      });
    },
    setApiRoot(M) {
      this.apiRoot = M;
    }
  },
  getters: {
    getApiRoot(M) {
      return M.apiRoot ? M.apiRoot : cA.dataRepositoryApiRoot + "/api/entity-templates";
    }
  }
}), uD = (M) => {
  const A = {
    id: iM.create().toString(),
    values: []
  };
  return (typeof M == "string" ? [M] : M).forEach((g) => {
    A.values.push({
      id: iM.create().toString(),
      lang: g
    });
  }), A;
}, OC = (M) => {
  const A = {
    id: iM.create().toString()
  };
  return M && (A.lang = M), A;
}, x4 = () => iM.create().toString(), Hu = (M, A, I) => {
  var D, t;
  let g;
  return A ? g = (D = M == null ? void 0 : M.values) == null ? void 0 : D.filter((N) => N.lang === A).map((N) => N.value) : g = (t = M == null ? void 0 : M.values) == null ? void 0 : t.map((N) => N.value), I ? g.join(I) : g;
}, lT = (M) => {
  const A = JSON.parse(JSON.stringify(M));
  return A.id = x4(), A.values.forEach((I) => {
    I.id = x4();
  }), A;
}, bC = (M, A) => {
  var D, t;
  var I = "", g = [];
  return M.multilingualTextValues && ((D = M.multilingualTextValues) == null ? void 0 : D.length) > 0 ? M.multilingualTextValues.forEach((N) => {
    I += Hu(N, null, A);
  }) : M.monolingualTextValues && ((t = M.monolingualTextValues) == null ? void 0 : t.length) > 0 && (M.monolingualTextValues.forEach((N) => {
    g.push(N.value);
  }), I = g == null ? void 0 : g.join(A)), I;
};
function sT(M, A) {
  return {
    id: iM.create().toString(),
    isExtendedInput: !1,
    isExtendedInputRequired: !1,
    optionText: A || uD(M)
  };
}
const AD = (M, A) => cT(M.optionText, A);
function cT(M, A) {
  var I, g, D;
  return A ? (g = (I = M == null ? void 0 : M.values) == null ? void 0 : I.filter((t) => t.lang === A).map((t) => t.value)) == null ? void 0 : g.at(0) : (D = M == null ? void 0 : M.values) == null ? void 0 : D.map((t) => t.value);
}
const rT = (M) => {
  const A = JSON.parse(JSON.stringify(M));
  return A.id = iM.create(), A.optionText.id = iM.create(), A.optionText.values.forEach((I) => I.id = iM.create()), A;
}, _u = (M) => (Mg("data-v-139cec3d"), M = M(), Ag(), M), zT = {
  key: 0,
  class: "row"
}, YT = /* @__PURE__ */ _u(() => /* @__PURE__ */ s("div", { class: "col-sm-2" }, [
  /* @__PURE__ */ s("h6", null, "File:")
], -1)), dT = { class: "col-sm-10" }, mT = ["onDragenter", "onDragleave", "onDrop"], UT = /* @__PURE__ */ _u(() => /* @__PURE__ */ s("div", null, "Drag or Drop File", -1)), hT = /* @__PURE__ */ _u(() => /* @__PURE__ */ s("div", null, "OR", -1)), OT = ["for"], bT = ["id"], WT = /* @__PURE__ */ f({
  __name: "AttachmentField",
  props: {
    model: null,
    elementId: null
  },
  setup(M) {
    const A = M, I = A.model.type === UM.AttachmentField, g = A.elementId;
    gM("");
    const D = gM(!1), t = () => {
      D.value = !D.value;
    };
    return (N, L) => S(I) ? (T(), r("div", zT, [
      YT,
      s("div", dT, [
        s("div", {
          class: B(["dropzone", { "active-dropzone": D.value }]),
          onDragenter: Sg(t, ["prevent"]),
          onDragleave: Sg(t, ["prevent"]),
          onDragover: L[0] || (L[0] = Sg(() => {
          }, ["prevent"])),
          onDrop: Sg(t, ["prevent"])
        }, [
          UT,
          hT,
          s("label", { for: S(g) }, "Select File ", 8, OT),
          s("input", {
            type: "file",
            id: S(g)
          }, null, 8, bT)
        ], 42, mT)
      ])
    ])) : P("", !0);
  }
});
const PM = (M, A) => {
  const I = M.__vccOpts || M;
  for (const [g, D] of A)
    I[g] = D;
  return I;
}, WC = /* @__PURE__ */ PM(WT, [["__scopeId", "data-v-139cec3d"]]), $u = (M) => Object.values(jt).map((A) => A).includes(M.type), kC = (M) => Object.values(MD).map((A) => A).includes(M.type), pC = (M) => Object.values(wL).map((A) => A).includes(M.type), QC = (M) => Object.values(wL).map((A) => A).includes(M.type), kT = (M) => Object.values(WC).map((A) => A).includes(M.type), fC = (M, A) => {
  const I = Hu(M.title, A);
  return (I == null ? void 0 : I.length) > 0 ? I[0] : null;
}, vC = (M, A) => {
  const I = Hu(M.description, A);
  return (I == null ? void 0 : I.length) > 0 ? I[0] : null;
}, pT = (M, A) => {
  var g, D;
  const I = {
    id: iM.create().toString(),
    fieldId: M.id
  };
  if ($u(M))
    I.selectedOptionIds = [], M.allowCustomOptionValues && (I.customOptionValues = []), (g = M.options) != null && g.find((t) => t.isExtendedInput) && (I.extendedOptionValues = []);
  else if (kT(M))
    I.fileReferences = [], M.allowCustomOptionValues && (I.customOptionValues = []), (D = M.options) != null && D.find((t) => t.isExtendedInput) && (I.extendedOptionValues = []);
  else if (kC(M)) {
    const t = typeof A == "string" ? [A] : A;
    I.multilingualTextValues = [uD(t)];
  } else
    pC(M) && (I.monolingualTextValues = [OC(null)]);
  return I;
}, GC = (M, A) => {
  var g;
  const I = {
    id: iM.EMPTY,
    formId: M.id,
    fieldData: []
  };
  return (g = M.fields) == null || g.forEach((D) => {
    const t = pT(D, A);
    I.fieldData.push(t);
  }), I;
}, TL = /* @__PURE__ */ f({
  __name: "TransientMessage",
  props: {
    model: null
  },
  setup(M) {
    const A = M;
    return dM(() => A.model.message, async (I) => {
      I && setTimeout(() => {
        A.model.message = null;
      }, 2e3);
    }), (I, g) => (T(), V(SL, { name: "fade" }, {
      default: b(() => [
        M.model.message ? (T(), r("p", {
          key: 0,
          class: B("alert alert-" + M.model.messageClass)
        }, F(M.model.message), 3)) : P("", !0)
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
function o4(M, A) {
  var I = Object.keys(M);
  if (Object.getOwnPropertySymbols) {
    var g = Object.getOwnPropertySymbols(M);
    A && (g = g.filter(function(D) {
      return Object.getOwnPropertyDescriptor(M, D).enumerable;
    })), I.push.apply(I, g);
  }
  return I;
}
function jI(M) {
  for (var A = 1; A < arguments.length; A++) {
    var I = arguments[A] != null ? arguments[A] : {};
    A % 2 ? o4(Object(I), !0).forEach(function(g) {
      QT(M, g, I[g]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(M, Object.getOwnPropertyDescriptors(I)) : o4(Object(I)).forEach(function(g) {
      Object.defineProperty(M, g, Object.getOwnPropertyDescriptor(I, g));
    });
  }
  return M;
}
function CN(M) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? CN = function(A) {
    return typeof A;
  } : CN = function(A) {
    return A && typeof Symbol == "function" && A.constructor === Symbol && A !== Symbol.prototype ? "symbol" : typeof A;
  }, CN(M);
}
function QT(M, A, I) {
  return A in M ? Object.defineProperty(M, A, {
    value: I,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : M[A] = I, M;
}
function sI() {
  return sI = Object.assign || function(M) {
    for (var A = 1; A < arguments.length; A++) {
      var I = arguments[A];
      for (var g in I)
        Object.prototype.hasOwnProperty.call(I, g) && (M[g] = I[g]);
    }
    return M;
  }, sI.apply(this, arguments);
}
function fT(M, A) {
  if (M == null)
    return {};
  var I = {}, g = Object.keys(M), D, t;
  for (t = 0; t < g.length; t++)
    D = g[t], !(A.indexOf(D) >= 0) && (I[D] = M[D]);
  return I;
}
function vT(M, A) {
  if (M == null)
    return {};
  var I = fT(M, A), g, D;
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(M);
    for (D = 0; D < t.length; D++)
      g = t[D], !(A.indexOf(g) >= 0) && (!Object.prototype.propertyIsEnumerable.call(M, g) || (I[g] = M[g]));
  }
  return I;
}
var GT = "1.14.0";
function nI(M) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(M);
}
var OI = nI(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), lt = nI(/Edge/i), y4 = nI(/firefox/i), BD = nI(/safari/i) && !nI(/chrome/i) && !nI(/android/i), JC = nI(/iP(ad|od|hone)/i), JT = nI(/chrome/i) && nI(/android/i), VC = {
  capture: !1,
  passive: !1
};
function pM(M, A, I) {
  M.addEventListener(A, I, !OI && VC);
}
function WM(M, A, I) {
  M.removeEventListener(A, I, !OI && VC);
}
function WN(M, A) {
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
function VT(M) {
  return M.host && M !== document && M.host.nodeType ? M.host : M.parentNode;
}
function II(M, A, I, g) {
  if (M) {
    I = I || document;
    do {
      if (A != null && (A[0] === ">" ? M.parentNode === I && WN(M, A) : WN(M, A)) || g && M === I)
        return M;
      if (M === I)
        break;
    } while (M = VT(M));
  }
  return null;
}
var l4 = /\s+/g;
function zA(M, A, I) {
  if (M && A)
    if (M.classList)
      M.classList[I ? "add" : "remove"](A);
    else {
      var g = (" " + M.className + " ").replace(l4, " ").replace(" " + A + " ", " ");
      M.className = (g + (I ? " " + A : "")).replace(l4, " ");
    }
}
function nM(M, A, I) {
  var g = M && M.style;
  if (g) {
    if (I === void 0)
      return document.defaultView && document.defaultView.getComputedStyle ? I = document.defaultView.getComputedStyle(M, "") : M.currentStyle && (I = M.currentStyle), A === void 0 ? I : I[A];
    !(A in g) && A.indexOf("webkit") === -1 && (A = "-webkit-" + A), g[A] = I + (typeof I == "string" ? "" : "px");
  }
}
function ID(M, A) {
  var I = "";
  if (typeof M == "string")
    I = M;
  else
    do {
      var g = nM(M, "transform");
      g && g !== "none" && (I = g + " " + I);
    } while (!A && (M = M.parentNode));
  var D = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return D && new D(I);
}
function ZC(M, A, I) {
  if (M) {
    var g = M.getElementsByTagName(A), D = 0, t = g.length;
    if (I)
      for (; D < t; D++)
        I(g[D], D);
    return g;
  }
  return [];
}
function NI() {
  var M = document.scrollingElement;
  return M || document.documentElement;
}
function tA(M, A, I, g, D) {
  if (!(!M.getBoundingClientRect && M !== window)) {
    var t, N, L, j, i, u, e;
    if (M !== window && M.parentNode && M !== NI() ? (t = M.getBoundingClientRect(), N = t.top, L = t.left, j = t.bottom, i = t.right, u = t.height, e = t.width) : (N = 0, L = 0, j = window.innerHeight, i = window.innerWidth, u = window.innerHeight, e = window.innerWidth), (A || I) && M !== window && (D = D || M.parentNode, !OI))
      do
        if (D && D.getBoundingClientRect && (nM(D, "transform") !== "none" || I && nM(D, "position") !== "static")) {
          var C = D.getBoundingClientRect();
          N -= C.top + parseInt(nM(D, "border-top-width")), L -= C.left + parseInt(nM(D, "border-left-width")), j = N + t.height, i = L + t.width;
          break;
        }
      while (D = D.parentNode);
    if (g && M !== window) {
      var a = ID(D || M), w = a && a.a, n = a && a.d;
      a && (N /= n, L /= w, e /= w, u /= n, j = N + u, i = L + e);
    }
    return {
      top: N,
      left: L,
      bottom: j,
      right: i,
      width: e,
      height: u
    };
  }
}
function s4(M, A, I) {
  for (var g = ZI(M, !0), D = tA(M)[A]; g; ) {
    var t = tA(g)[I], N = void 0;
    if (I === "top" || I === "left" ? N = D >= t : N = D <= t, !N)
      return g;
    if (g === NI())
      break;
    g = ZI(g, !1);
  }
  return !1;
}
function iD(M, A, I, g) {
  for (var D = 0, t = 0, N = M.children; t < N.length; ) {
    if (N[t].style.display !== "none" && N[t] !== xM.ghost && (g || N[t] !== xM.dragged) && II(N[t], I.draggable, M, !1)) {
      if (D === A)
        return N[t];
      D++;
    }
    t++;
  }
  return null;
}
function qu(M, A) {
  for (var I = M.lastElementChild; I && (I === xM.ghost || nM(I, "display") === "none" || A && !WN(I, A)); )
    I = I.previousElementSibling;
  return I || null;
}
function kA(M, A) {
  var I = 0;
  if (!M || !M.parentNode)
    return -1;
  for (; M = M.previousElementSibling; )
    M.nodeName.toUpperCase() !== "TEMPLATE" && M !== xM.clone && (!A || WN(M, A)) && I++;
  return I;
}
function c4(M) {
  var A = 0, I = 0, g = NI();
  if (M)
    do {
      var D = ID(M), t = D.a, N = D.d;
      A += M.scrollLeft * t, I += M.scrollTop * N;
    } while (M !== g && (M = M.parentNode));
  return [A, I];
}
function ZT(M, A) {
  for (var I in M)
    if (!!M.hasOwnProperty(I)) {
      for (var g in A)
        if (A.hasOwnProperty(g) && A[g] === M[I][g])
          return Number(I);
    }
  return -1;
}
function ZI(M, A) {
  if (!M || !M.getBoundingClientRect)
    return NI();
  var I = M, g = !1;
  do
    if (I.clientWidth < I.scrollWidth || I.clientHeight < I.scrollHeight) {
      var D = nM(I);
      if (I.clientWidth < I.scrollWidth && (D.overflowX == "auto" || D.overflowX == "scroll") || I.clientHeight < I.scrollHeight && (D.overflowY == "auto" || D.overflowY == "scroll")) {
        if (!I.getBoundingClientRect || I === document.body)
          return NI();
        if (g || A)
          return I;
        g = !0;
      }
    }
  while (I = I.parentNode);
  return NI();
}
function PT(M, A) {
  if (M && A)
    for (var I in A)
      A.hasOwnProperty(I) && (M[I] = A[I]);
  return M;
}
function qL(M, A) {
  return Math.round(M.top) === Math.round(A.top) && Math.round(M.left) === Math.round(A.left) && Math.round(M.height) === Math.round(A.height) && Math.round(M.width) === Math.round(A.width);
}
var FD;
function PC(M, A) {
  return function() {
    if (!FD) {
      var I = arguments, g = this;
      I.length === 1 ? M.call(g, I[0]) : M.apply(g, I), FD = setTimeout(function() {
        FD = void 0;
      }, A);
    }
  };
}
function BT() {
  clearTimeout(FD), FD = void 0;
}
function BC(M, A, I) {
  M.scrollLeft += A, M.scrollTop += I;
}
function FC(M) {
  var A = window.Polymer, I = window.jQuery || window.Zepto;
  return A && A.dom ? A.dom(M).cloneNode(!0) : I ? I(M).clone(!0)[0] : M.cloneNode(!0);
}
var dA = "Sortable" + new Date().getTime();
function FT() {
  var M = [], A;
  return {
    captureAnimationState: function() {
      if (M = [], !!this.options.animation) {
        var g = [].slice.call(this.el.children);
        g.forEach(function(D) {
          if (!(nM(D, "display") === "none" || D === xM.ghost)) {
            M.push({
              target: D,
              rect: tA(D)
            });
            var t = jI({}, M[M.length - 1].rect);
            if (D.thisAnimationDuration) {
              var N = ID(D, !0);
              N && (t.top -= N.f, t.left -= N.e);
            }
            D.fromRect = t;
          }
        });
      }
    },
    addAnimationState: function(g) {
      M.push(g);
    },
    removeAnimationState: function(g) {
      M.splice(ZT(M, {
        target: g
      }), 1);
    },
    animateAll: function(g) {
      var D = this;
      if (!this.options.animation) {
        clearTimeout(A), typeof g == "function" && g();
        return;
      }
      var t = !1, N = 0;
      M.forEach(function(L) {
        var j = 0, i = L.target, u = i.fromRect, e = tA(i), C = i.prevFromRect, a = i.prevToRect, w = L.rect, n = ID(i, !0);
        n && (e.top -= n.f, e.left -= n.e), i.toRect = e, i.thisAnimationDuration && qL(C, e) && !qL(u, e) && (w.top - e.top) / (w.left - e.left) === (u.top - e.top) / (u.left - e.left) && (j = RT(w, C, a, D.options)), qL(e, u) || (i.prevFromRect = u, i.prevToRect = e, j || (j = D.options.animation), D.animate(i, w, e, j)), j && (t = !0, N = Math.max(N, j), clearTimeout(i.animationResetTimer), i.animationResetTimer = setTimeout(function() {
          i.animationTime = 0, i.prevFromRect = null, i.fromRect = null, i.prevToRect = null, i.thisAnimationDuration = null;
        }, j), i.thisAnimationDuration = j);
      }), clearTimeout(A), t ? A = setTimeout(function() {
        typeof g == "function" && g();
      }, N) : typeof g == "function" && g(), M = [];
    },
    animate: function(g, D, t, N) {
      if (N) {
        nM(g, "transition", ""), nM(g, "transform", "");
        var L = ID(this.el), j = L && L.a, i = L && L.d, u = (D.left - t.left) / (j || 1), e = (D.top - t.top) / (i || 1);
        g.animatingX = !!u, g.animatingY = !!e, nM(g, "transform", "translate3d(" + u + "px," + e + "px,0)"), this.forRepaintDummy = XT(g), nM(g, "transition", "transform " + N + "ms" + (this.options.easing ? " " + this.options.easing : "")), nM(g, "transform", "translate3d(0,0,0)"), typeof g.animated == "number" && clearTimeout(g.animated), g.animated = setTimeout(function() {
          nM(g, "transition", ""), nM(g, "transform", ""), g.animated = !1, g.animatingX = !1, g.animatingY = !1;
        }, N);
      }
    }
  };
}
function XT(M) {
  return M.offsetWidth;
}
function RT(M, A, I, g) {
  return Math.sqrt(Math.pow(A.top - M.top, 2) + Math.pow(A.left - M.left, 2)) / Math.sqrt(Math.pow(A.top - I.top, 2) + Math.pow(A.left - I.left, 2)) * g.animation;
}
var pg = [], KL = {
  initializeByDefault: !0
}, st = {
  mount: function(A) {
    for (var I in KL)
      KL.hasOwnProperty(I) && !(I in A) && (A[I] = KL[I]);
    pg.forEach(function(g) {
      if (g.pluginName === A.pluginName)
        throw "Sortable: Cannot mount plugin ".concat(A.pluginName, " more than once");
    }), pg.push(A);
  },
  pluginEvent: function(A, I, g) {
    var D = this;
    this.eventCanceled = !1, g.cancel = function() {
      D.eventCanceled = !0;
    };
    var t = A + "Global";
    pg.forEach(function(N) {
      !I[N.pluginName] || (I[N.pluginName][t] && I[N.pluginName][t](jI({
        sortable: I
      }, g)), I.options[N.pluginName] && I[N.pluginName][A] && I[N.pluginName][A](jI({
        sortable: I
      }, g)));
    });
  },
  initializePlugins: function(A, I, g, D) {
    pg.forEach(function(L) {
      var j = L.pluginName;
      if (!(!A.options[j] && !L.initializeByDefault)) {
        var i = new L(A, I, A.options);
        i.sortable = A, i.options = A.options, A[j] = i, sI(g, i.defaults);
      }
    });
    for (var t in A.options)
      if (!!A.options.hasOwnProperty(t)) {
        var N = this.modifyOption(A, t, A.options[t]);
        typeof N < "u" && (A.options[t] = N);
      }
  },
  getEventProperties: function(A, I) {
    var g = {};
    return pg.forEach(function(D) {
      typeof D.eventProperties == "function" && sI(g, D.eventProperties.call(I[D.pluginName], A));
    }), g;
  },
  modifyOption: function(A, I, g) {
    var D;
    return pg.forEach(function(t) {
      !A[t.pluginName] || t.optionListeners && typeof t.optionListeners[I] == "function" && (D = t.optionListeners[I].call(A[t.pluginName], g));
    }), D;
  }
};
function HT(M) {
  var A = M.sortable, I = M.rootEl, g = M.name, D = M.targetEl, t = M.cloneEl, N = M.toEl, L = M.fromEl, j = M.oldIndex, i = M.newIndex, u = M.oldDraggableIndex, e = M.newDraggableIndex, C = M.originalEvent, a = M.putSortable, w = M.extraEventProperties;
  if (A = A || I && I[dA], !!A) {
    var n, o = A.options, E = "on" + g.charAt(0).toUpperCase() + g.substr(1);
    window.CustomEvent && !OI && !lt ? n = new CustomEvent(g, {
      bubbles: !0,
      cancelable: !0
    }) : (n = document.createEvent("Event"), n.initEvent(g, !0, !0)), n.to = N || I, n.from = L || I, n.item = D || I, n.clone = t, n.oldIndex = j, n.newIndex = i, n.oldDraggableIndex = u, n.newDraggableIndex = e, n.originalEvent = C, n.pullMode = a ? a.lastPutMode : void 0;
    var l = jI(jI({}, w), st.getEventProperties(g, A));
    for (var Y in l)
      n[Y] = l[Y];
    I && I.dispatchEvent(n), o[E] && o[E].call(A, n);
  }
}
var _T = ["evt"], yA = function(A, I) {
  var g = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, D = g.evt, t = vT(g, _T);
  st.pluginEvent.bind(xM)(A, I, jI({
    dragEl: K,
    parentEl: qM,
    ghostEl: cM,
    rootEl: FM,
    nextEl: ig,
    lastDownEl: aN,
    cloneEl: KM,
    cloneHidden: VI,
    dragStarted: vD,
    putSortable: eA,
    activeSortable: xM.active,
    originalEvent: D,
    oldIndex: _g,
    oldDraggableIndex: XD,
    newIndex: YA,
    newDraggableIndex: GI,
    hideGhostForTarget: _C,
    unhideGhostForTarget: $C,
    cloneNowHidden: function() {
      VI = !0;
    },
    cloneNowShown: function() {
      VI = !1;
    },
    dispatchSortableEvent: function(L) {
      EA({
        sortable: I,
        name: L,
        originalEvent: D
      });
    }
  }, t));
};
function EA(M) {
  HT(jI({
    putSortable: eA,
    cloneEl: KM,
    targetEl: K,
    rootEl: FM,
    oldIndex: _g,
    oldDraggableIndex: XD,
    newIndex: YA,
    newDraggableIndex: GI
  }, M));
}
var K, qM, cM, FM, ig, aN, KM, VI, _g, YA, XD, GI, ft, eA, Zg = !1, kN = !1, pN = [], Lg, PA, Mj, Aj, r4, z4, vD, Qg, RD, HD = !1, vt = !1, wN, CA, Ij = [], _j = !1, QN = [], nL = typeof document < "u", Gt = JC, Y4 = lt || OI ? "cssFloat" : "float", $T = nL && !JT && !JC && "draggable" in document.createElement("div"), XC = function() {
  if (!!nL) {
    if (OI)
      return !1;
    var M = document.createElement("x");
    return M.style.cssText = "pointer-events:auto", M.style.pointerEvents === "auto";
  }
}(), RC = function(A, I) {
  var g = nM(A), D = parseInt(g.width) - parseInt(g.paddingLeft) - parseInt(g.paddingRight) - parseInt(g.borderLeftWidth) - parseInt(g.borderRightWidth), t = iD(A, 0, I), N = iD(A, 1, I), L = t && nM(t), j = N && nM(N), i = L && parseInt(L.marginLeft) + parseInt(L.marginRight) + tA(t).width, u = j && parseInt(j.marginLeft) + parseInt(j.marginRight) + tA(N).width;
  if (g.display === "flex")
    return g.flexDirection === "column" || g.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (g.display === "grid")
    return g.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (t && L.float && L.float !== "none") {
    var e = L.float === "left" ? "left" : "right";
    return N && (j.clear === "both" || j.clear === e) ? "vertical" : "horizontal";
  }
  return t && (L.display === "block" || L.display === "flex" || L.display === "table" || L.display === "grid" || i >= D && g[Y4] === "none" || N && g[Y4] === "none" && i + u > D) ? "vertical" : "horizontal";
}, qT = function(A, I, g) {
  var D = g ? A.left : A.top, t = g ? A.right : A.bottom, N = g ? A.width : A.height, L = g ? I.left : I.top, j = g ? I.right : I.bottom, i = g ? I.width : I.height;
  return D === L || t === j || D + N / 2 === L + i / 2;
}, KT = function(A, I) {
  var g;
  return pN.some(function(D) {
    var t = D[dA].options.emptyInsertThreshold;
    if (!(!t || qu(D))) {
      var N = tA(D), L = A >= N.left - t && A <= N.right + t, j = I >= N.top - t && I <= N.bottom + t;
      if (L && j)
        return g = D;
    }
  }), g;
}, HC = function(A) {
  function I(t, N) {
    return function(L, j, i, u) {
      var e = L.options.group.name && j.options.group.name && L.options.group.name === j.options.group.name;
      if (t == null && (N || e))
        return !0;
      if (t == null || t === !1)
        return !1;
      if (N && t === "clone")
        return t;
      if (typeof t == "function")
        return I(t(L, j, i, u), N)(L, j, i, u);
      var C = (N ? L : j).options.group.name;
      return t === !0 || typeof t == "string" && t === C || t.join && t.indexOf(C) > -1;
    };
  }
  var g = {}, D = A.group;
  (!D || CN(D) != "object") && (D = {
    name: D
  }), g.name = D.name, g.checkPull = I(D.pull, !0), g.checkPut = I(D.put), g.revertClone = D.revertClone, A.group = g;
}, _C = function() {
  !XC && cM && nM(cM, "display", "none");
}, $C = function() {
  !XC && cM && nM(cM, "display", "");
};
nL && document.addEventListener("click", function(M) {
  if (kN)
    return M.preventDefault(), M.stopPropagation && M.stopPropagation(), M.stopImmediatePropagation && M.stopImmediatePropagation(), kN = !1, !1;
}, !0);
var jg = function(A) {
  if (K) {
    A = A.touches ? A.touches[0] : A;
    var I = KT(A.clientX, A.clientY);
    if (I) {
      var g = {};
      for (var D in A)
        A.hasOwnProperty(D) && (g[D] = A[D]);
      g.target = g.rootEl = I, g.preventDefault = void 0, g.stopPropagation = void 0, I[dA]._onDragOver(g);
    }
  }
}, Mn = function(A) {
  K && K.parentNode[dA]._isOutsideThisEl(A.target);
};
function xM(M, A) {
  if (!(M && M.nodeType && M.nodeType === 1))
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(M));
  this.el = M, this.options = A = sI({}, A), M[dA] = this;
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
      return RC(M, this.options);
    },
    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",
    ignore: "a, img",
    filter: null,
    preventOnFilter: !0,
    animation: 0,
    easing: null,
    setData: function(N, L) {
      N.setData("Text", L.textContent);
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
    supportPointer: xM.supportPointer !== !1 && "PointerEvent" in window && !BD,
    emptyInsertThreshold: 5
  };
  st.initializePlugins(this, M, I);
  for (var g in I)
    !(g in A) && (A[g] = I[g]);
  HC(A);
  for (var D in this)
    D.charAt(0) === "_" && typeof this[D] == "function" && (this[D] = this[D].bind(this));
  this.nativeDraggable = A.forceFallback ? !1 : $T, this.nativeDraggable && (this.options.touchStartThreshold = 1), A.supportPointer ? pM(M, "pointerdown", this._onTapStart) : (pM(M, "mousedown", this._onTapStart), pM(M, "touchstart", this._onTapStart)), this.nativeDraggable && (pM(M, "dragover", this), pM(M, "dragenter", this)), pN.push(this.el), A.store && A.store.get && this.sort(A.store.get(this) || []), sI(this, FT());
}
xM.prototype = {
  constructor: xM,
  _isOutsideThisEl: function(A) {
    !this.el.contains(A) && A !== this.el && (Qg = null);
  },
  _getDirection: function(A, I) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, A, I, K) : this.options.direction;
  },
  _onTapStart: function(A) {
    if (!!A.cancelable) {
      var I = this, g = this.el, D = this.options, t = D.preventOnFilter, N = A.type, L = A.touches && A.touches[0] || A.pointerType && A.pointerType === "touch" && A, j = (L || A).target, i = A.target.shadowRoot && (A.path && A.path[0] || A.composedPath && A.composedPath()[0]) || j, u = D.filter;
      if (jn(g), !K && !(/mousedown|pointerdown/.test(N) && A.button !== 0 || D.disabled) && !i.isContentEditable && !(!this.nativeDraggable && BD && j && j.tagName.toUpperCase() === "SELECT") && (j = II(j, D.draggable, g, !1), !(j && j.animated) && aN !== j)) {
        if (_g = kA(j), XD = kA(j, D.draggable), typeof u == "function") {
          if (u.call(this, A, j, this)) {
            EA({
              sortable: I,
              rootEl: i,
              name: "filter",
              targetEl: j,
              toEl: g,
              fromEl: g
            }), yA("filter", I, {
              evt: A
            }), t && A.cancelable && A.preventDefault();
            return;
          }
        } else if (u && (u = u.split(",").some(function(e) {
          if (e = II(i, e.trim(), g, !1), e)
            return EA({
              sortable: I,
              rootEl: e,
              name: "filter",
              targetEl: j,
              fromEl: g,
              toEl: g
            }), yA("filter", I, {
              evt: A
            }), !0;
        }), u)) {
          t && A.cancelable && A.preventDefault();
          return;
        }
        D.handle && !II(i, D.handle, g, !1) || this._prepareDragStart(A, L, j);
      }
    }
  },
  _prepareDragStart: function(A, I, g) {
    var D = this, t = D.el, N = D.options, L = t.ownerDocument, j;
    if (g && !K && g.parentNode === t) {
      var i = tA(g);
      if (FM = t, K = g, qM = K.parentNode, ig = K.nextSibling, aN = g, ft = N.group, xM.dragged = K, Lg = {
        target: K,
        clientX: (I || A).clientX,
        clientY: (I || A).clientY
      }, r4 = Lg.clientX - i.left, z4 = Lg.clientY - i.top, this._lastX = (I || A).clientX, this._lastY = (I || A).clientY, K.style["will-change"] = "all", j = function() {
        if (yA("delayEnded", D, {
          evt: A
        }), xM.eventCanceled) {
          D._onDrop();
          return;
        }
        D._disableDelayedDragEvents(), !y4 && D.nativeDraggable && (K.draggable = !0), D._triggerDragStart(A, I), EA({
          sortable: D,
          name: "choose",
          originalEvent: A
        }), zA(K, N.chosenClass, !0);
      }, N.ignore.split(",").forEach(function(u) {
        ZC(K, u.trim(), gj);
      }), pM(L, "dragover", jg), pM(L, "mousemove", jg), pM(L, "touchmove", jg), pM(L, "mouseup", D._onDrop), pM(L, "touchend", D._onDrop), pM(L, "touchcancel", D._onDrop), y4 && this.nativeDraggable && (this.options.touchStartThreshold = 4, K.draggable = !0), yA("delayStart", this, {
        evt: A
      }), N.delay && (!N.delayOnTouchOnly || I) && (!this.nativeDraggable || !(lt || OI))) {
        if (xM.eventCanceled) {
          this._onDrop();
          return;
        }
        pM(L, "mouseup", D._disableDelayedDrag), pM(L, "touchend", D._disableDelayedDrag), pM(L, "touchcancel", D._disableDelayedDrag), pM(L, "mousemove", D._delayedDragTouchMoveHandler), pM(L, "touchmove", D._delayedDragTouchMoveHandler), N.supportPointer && pM(L, "pointermove", D._delayedDragTouchMoveHandler), D._dragStartTimer = setTimeout(j, N.delay);
      } else
        j();
    }
  },
  _delayedDragTouchMoveHandler: function(A) {
    var I = A.touches ? A.touches[0] : A;
    Math.max(Math.abs(I.clientX - this._lastX), Math.abs(I.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag();
  },
  _disableDelayedDrag: function() {
    K && gj(K), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function() {
    var A = this.el.ownerDocument;
    WM(A, "mouseup", this._disableDelayedDrag), WM(A, "touchend", this._disableDelayedDrag), WM(A, "touchcancel", this._disableDelayedDrag), WM(A, "mousemove", this._delayedDragTouchMoveHandler), WM(A, "touchmove", this._delayedDragTouchMoveHandler), WM(A, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(A, I) {
    I = I || A.pointerType == "touch" && A, !this.nativeDraggable || I ? this.options.supportPointer ? pM(document, "pointermove", this._onTouchMove) : I ? pM(document, "touchmove", this._onTouchMove) : pM(document, "mousemove", this._onTouchMove) : (pM(K, "dragend", this), pM(FM, "dragstart", this._onDragStart));
    try {
      document.selection ? EN(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(A, I) {
    if (Zg = !1, FM && K) {
      yA("dragStarted", this, {
        evt: I
      }), this.nativeDraggable && pM(document, "dragover", Mn);
      var g = this.options;
      !A && zA(K, g.dragClass, !1), zA(K, g.ghostClass, !0), xM.active = this, A && this._appendGhost(), EA({
        sortable: this,
        name: "start",
        originalEvent: I
      });
    } else
      this._nulling();
  },
  _emulateDragOver: function() {
    if (PA) {
      this._lastX = PA.clientX, this._lastY = PA.clientY, _C();
      for (var A = document.elementFromPoint(PA.clientX, PA.clientY), I = A; A && A.shadowRoot && (A = A.shadowRoot.elementFromPoint(PA.clientX, PA.clientY), A !== I); )
        I = A;
      if (K.parentNode[dA]._isOutsideThisEl(A), I)
        do {
          if (I[dA]) {
            var g = void 0;
            if (g = I[dA]._onDragOver({
              clientX: PA.clientX,
              clientY: PA.clientY,
              target: A,
              rootEl: I
            }), g && !this.options.dragoverBubble)
              break;
          }
          A = I;
        } while (I = I.parentNode);
      $C();
    }
  },
  _onTouchMove: function(A) {
    if (Lg) {
      var I = this.options, g = I.fallbackTolerance, D = I.fallbackOffset, t = A.touches ? A.touches[0] : A, N = cM && ID(cM, !0), L = cM && N && N.a, j = cM && N && N.d, i = Gt && CA && c4(CA), u = (t.clientX - Lg.clientX + D.x) / (L || 1) + (i ? i[0] - Ij[0] : 0) / (L || 1), e = (t.clientY - Lg.clientY + D.y) / (j || 1) + (i ? i[1] - Ij[1] : 0) / (j || 1);
      if (!xM.active && !Zg) {
        if (g && Math.max(Math.abs(t.clientX - this._lastX), Math.abs(t.clientY - this._lastY)) < g)
          return;
        this._onDragStart(A, !0);
      }
      if (cM) {
        N ? (N.e += u - (Mj || 0), N.f += e - (Aj || 0)) : N = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: u,
          f: e
        };
        var C = "matrix(".concat(N.a, ",").concat(N.b, ",").concat(N.c, ",").concat(N.d, ",").concat(N.e, ",").concat(N.f, ")");
        nM(cM, "webkitTransform", C), nM(cM, "mozTransform", C), nM(cM, "msTransform", C), nM(cM, "transform", C), Mj = u, Aj = e, PA = t;
      }
      A.cancelable && A.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!cM) {
      var A = this.options.fallbackOnBody ? document.body : FM, I = tA(K, !0, Gt, !0, A), g = this.options;
      if (Gt) {
        for (CA = A; nM(CA, "position") === "static" && nM(CA, "transform") === "none" && CA !== document; )
          CA = CA.parentNode;
        CA !== document.body && CA !== document.documentElement ? (CA === document && (CA = NI()), I.top += CA.scrollTop, I.left += CA.scrollLeft) : CA = NI(), Ij = c4(CA);
      }
      cM = K.cloneNode(!0), zA(cM, g.ghostClass, !1), zA(cM, g.fallbackClass, !0), zA(cM, g.dragClass, !0), nM(cM, "transition", ""), nM(cM, "transform", ""), nM(cM, "box-sizing", "border-box"), nM(cM, "margin", 0), nM(cM, "top", I.top), nM(cM, "left", I.left), nM(cM, "width", I.width), nM(cM, "height", I.height), nM(cM, "opacity", "0.8"), nM(cM, "position", Gt ? "absolute" : "fixed"), nM(cM, "zIndex", "100000"), nM(cM, "pointerEvents", "none"), xM.ghost = cM, A.appendChild(cM), nM(cM, "transform-origin", r4 / parseInt(cM.style.width) * 100 + "% " + z4 / parseInt(cM.style.height) * 100 + "%");
    }
  },
  _onDragStart: function(A, I) {
    var g = this, D = A.dataTransfer, t = g.options;
    if (yA("dragStart", this, {
      evt: A
    }), xM.eventCanceled) {
      this._onDrop();
      return;
    }
    yA("setupClone", this), xM.eventCanceled || (KM = FC(K), KM.draggable = !1, KM.style["will-change"] = "", this._hideClone(), zA(KM, this.options.chosenClass, !1), xM.clone = KM), g.cloneId = EN(function() {
      yA("clone", g), !xM.eventCanceled && (g.options.removeCloneOnHide || FM.insertBefore(KM, K), g._hideClone(), EA({
        sortable: g,
        name: "clone"
      }));
    }), !I && zA(K, t.dragClass, !0), I ? (kN = !0, g._loopId = setInterval(g._emulateDragOver, 50)) : (WM(document, "mouseup", g._onDrop), WM(document, "touchend", g._onDrop), WM(document, "touchcancel", g._onDrop), D && (D.effectAllowed = "move", t.setData && t.setData.call(g, D, K)), pM(document, "drop", g), nM(K, "transform", "translateZ(0)")), Zg = !0, g._dragStartId = EN(g._dragStarted.bind(g, I, A)), pM(document, "selectstart", g), vD = !0, BD && nM(document.body, "user-select", "none");
  },
  _onDragOver: function(A) {
    var I = this.el, g = A.target, D, t, N, L = this.options, j = L.group, i = xM.active, u = ft === j, e = L.sort, C = eA || i, a, w = this, n = !1;
    if (_j)
      return;
    function o(bM, oM) {
      yA(bM, w, jI({
        evt: A,
        isOwner: u,
        axis: a ? "vertical" : "horizontal",
        revert: N,
        dragRect: D,
        targetRect: t,
        canSort: e,
        fromSortable: C,
        target: g,
        completed: l,
        onMove: function(GM, BM) {
          return Jt(FM, I, K, D, GM, tA(GM), A, BM);
        },
        changed: Y
      }, oM));
    }
    function E() {
      o("dragOverAnimationCapture"), w.captureAnimationState(), w !== C && C.captureAnimationState();
    }
    function l(bM) {
      return o("dragOverCompleted", {
        insertion: bM
      }), bM && (u ? i._hideClone() : i._showClone(w), w !== C && (zA(K, eA ? eA.options.ghostClass : i.options.ghostClass, !1), zA(K, L.ghostClass, !0)), eA !== w && w !== xM.active ? eA = w : w === xM.active && eA && (eA = null), C === w && (w._ignoreWhileAnimating = g), w.animateAll(function() {
        o("dragOverAnimationComplete"), w._ignoreWhileAnimating = null;
      }), w !== C && (C.animateAll(), C._ignoreWhileAnimating = null)), (g === K && !K.animated || g === I && !g.animated) && (Qg = null), !L.dragoverBubble && !A.rootEl && g !== document && (K.parentNode[dA]._isOutsideThisEl(A.target), !bM && jg(A)), !L.dragoverBubble && A.stopPropagation && A.stopPropagation(), n = !0;
    }
    function Y() {
      YA = kA(K), GI = kA(K, L.draggable), EA({
        sortable: w,
        name: "change",
        toEl: I,
        newIndex: YA,
        newDraggableIndex: GI,
        originalEvent: A
      });
    }
    if (A.preventDefault !== void 0 && A.cancelable && A.preventDefault(), g = II(g, L.draggable, I, !0), o("dragOver"), xM.eventCanceled)
      return n;
    if (K.contains(A.target) || g.animated && g.animatingX && g.animatingY || w._ignoreWhileAnimating === g)
      return l(!1);
    if (kN = !1, i && !L.disabled && (u ? e || (N = qM !== FM) : eA === this || (this.lastPutMode = ft.checkPull(this, i, K, A)) && j.checkPut(this, i, K, A))) {
      if (a = this._getDirection(A, g) === "vertical", D = tA(K), o("dragOverValid"), xM.eventCanceled)
        return n;
      if (N)
        return qM = FM, E(), this._hideClone(), o("revert"), xM.eventCanceled || (ig ? FM.insertBefore(K, ig) : FM.appendChild(K)), l(!0);
      var z = qu(I, L.draggable);
      if (!z || Dn(A, a, this) && !z.animated) {
        if (z === K)
          return l(!1);
        if (z && I === A.target && (g = z), g && (t = tA(g)), Jt(FM, I, K, D, g, t, A, !!g) !== !1)
          return E(), I.appendChild(K), qM = I, Y(), l(!0);
      } else if (z && gn(A, a, this)) {
        var m = iD(I, 0, L, !0);
        if (m === K)
          return l(!1);
        if (g = m, t = tA(g), Jt(FM, I, K, D, g, t, A, !1) !== !1)
          return E(), I.insertBefore(K, m), qM = I, Y(), l(!0);
      } else if (g.parentNode === I) {
        t = tA(g);
        var W = 0, v, d = K.parentNode !== I, U = !qT(K.animated && K.toRect || D, g.animated && g.toRect || t, a), Z = a ? "top" : "left", R = s4(g, "top", "top") || s4(K, "top", "top"), AM = R ? R.scrollTop : void 0;
        Qg !== g && (v = t[Z], HD = !1, vt = !U && L.invertSwap || d), W = tn(A, g, t, a, U ? 1 : L.swapThreshold, L.invertedSwapThreshold == null ? L.swapThreshold : L.invertedSwapThreshold, vt, Qg === g);
        var LM;
        if (W !== 0) {
          var IM = kA(K);
          do
            IM -= W, LM = qM.children[IM];
          while (LM && (nM(LM, "display") === "none" || LM === cM));
        }
        if (W === 0 || LM === g)
          return l(!1);
        Qg = g, RD = W;
        var lM = g.nextElementSibling, SM = !1;
        SM = W === 1;
        var uM = Jt(FM, I, K, D, g, t, A, SM);
        if (uM !== !1)
          return (uM === 1 || uM === -1) && (SM = uM === 1), _j = !0, setTimeout(In, 30), E(), SM && !lM ? I.appendChild(K) : g.parentNode.insertBefore(K, SM ? lM : g), R && BC(R, 0, AM - R.scrollTop), qM = K.parentNode, v !== void 0 && !vt && (wN = Math.abs(v - tA(g)[Z])), Y(), l(!0);
      }
      if (I.contains(K))
        return l(!1);
    }
    return !1;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function() {
    WM(document, "mousemove", this._onTouchMove), WM(document, "touchmove", this._onTouchMove), WM(document, "pointermove", this._onTouchMove), WM(document, "dragover", jg), WM(document, "mousemove", jg), WM(document, "touchmove", jg);
  },
  _offUpEvents: function() {
    var A = this.el.ownerDocument;
    WM(A, "mouseup", this._onDrop), WM(A, "touchend", this._onDrop), WM(A, "pointerup", this._onDrop), WM(A, "touchcancel", this._onDrop), WM(document, "selectstart", this);
  },
  _onDrop: function(A) {
    var I = this.el, g = this.options;
    if (YA = kA(K), GI = kA(K, g.draggable), yA("drop", this, {
      evt: A
    }), qM = K && K.parentNode, YA = kA(K), GI = kA(K, g.draggable), xM.eventCanceled) {
      this._nulling();
      return;
    }
    Zg = !1, vt = !1, HD = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), $j(this.cloneId), $j(this._dragStartId), this.nativeDraggable && (WM(document, "drop", this), WM(I, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), BD && nM(document.body, "user-select", ""), nM(K, "transform", ""), A && (vD && (A.cancelable && A.preventDefault(), !g.dropBubble && A.stopPropagation()), cM && cM.parentNode && cM.parentNode.removeChild(cM), (FM === qM || eA && eA.lastPutMode !== "clone") && KM && KM.parentNode && KM.parentNode.removeChild(KM), K && (this.nativeDraggable && WM(K, "dragend", this), gj(K), K.style["will-change"] = "", vD && !Zg && zA(K, eA ? eA.options.ghostClass : this.options.ghostClass, !1), zA(K, this.options.chosenClass, !1), EA({
      sortable: this,
      name: "unchoose",
      toEl: qM,
      newIndex: null,
      newDraggableIndex: null,
      originalEvent: A
    }), FM !== qM ? (YA >= 0 && (EA({
      rootEl: qM,
      name: "add",
      toEl: qM,
      fromEl: FM,
      originalEvent: A
    }), EA({
      sortable: this,
      name: "remove",
      toEl: qM,
      originalEvent: A
    }), EA({
      rootEl: qM,
      name: "sort",
      toEl: qM,
      fromEl: FM,
      originalEvent: A
    }), EA({
      sortable: this,
      name: "sort",
      toEl: qM,
      originalEvent: A
    })), eA && eA.save()) : YA !== _g && YA >= 0 && (EA({
      sortable: this,
      name: "update",
      toEl: qM,
      originalEvent: A
    }), EA({
      sortable: this,
      name: "sort",
      toEl: qM,
      originalEvent: A
    })), xM.active && ((YA == null || YA === -1) && (YA = _g, GI = XD), EA({
      sortable: this,
      name: "end",
      toEl: qM,
      originalEvent: A
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    yA("nulling", this), FM = K = qM = cM = ig = KM = aN = VI = Lg = PA = vD = YA = GI = _g = XD = Qg = RD = eA = ft = xM.dragged = xM.ghost = xM.clone = xM.active = null, QN.forEach(function(A) {
      A.checked = !0;
    }), QN.length = Mj = Aj = 0;
  },
  handleEvent: function(A) {
    switch (A.type) {
      case "drop":
      case "dragend":
        this._onDrop(A);
        break;
      case "dragenter":
      case "dragover":
        K && (this._onDragOver(A), An(A));
        break;
      case "selectstart":
        A.preventDefault();
        break;
    }
  },
  toArray: function() {
    for (var A = [], I, g = this.el.children, D = 0, t = g.length, N = this.options; D < t; D++)
      I = g[D], II(I, N.draggable, this.el, !1) && A.push(I.getAttribute(N.dataIdAttr) || Ln(I));
    return A;
  },
  sort: function(A, I) {
    var g = {}, D = this.el;
    this.toArray().forEach(function(t, N) {
      var L = D.children[N];
      II(L, this.options.draggable, D, !1) && (g[t] = L);
    }, this), I && this.captureAnimationState(), A.forEach(function(t) {
      g[t] && (D.removeChild(g[t]), D.appendChild(g[t]));
    }), I && this.animateAll();
  },
  save: function() {
    var A = this.options.store;
    A && A.set && A.set(this);
  },
  closest: function(A, I) {
    return II(A, I || this.options.draggable, this.el, !1);
  },
  option: function(A, I) {
    var g = this.options;
    if (I === void 0)
      return g[A];
    var D = st.modifyOption(this, A, I);
    typeof D < "u" ? g[A] = D : g[A] = I, A === "group" && HC(g);
  },
  destroy: function() {
    yA("destroy", this);
    var A = this.el;
    A[dA] = null, WM(A, "mousedown", this._onTapStart), WM(A, "touchstart", this._onTapStart), WM(A, "pointerdown", this._onTapStart), this.nativeDraggable && (WM(A, "dragover", this), WM(A, "dragenter", this)), Array.prototype.forEach.call(A.querySelectorAll("[draggable]"), function(I) {
      I.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), pN.splice(pN.indexOf(this.el), 1), this.el = A = null;
  },
  _hideClone: function() {
    if (!VI) {
      if (yA("hideClone", this), xM.eventCanceled)
        return;
      nM(KM, "display", "none"), this.options.removeCloneOnHide && KM.parentNode && KM.parentNode.removeChild(KM), VI = !0;
    }
  },
  _showClone: function(A) {
    if (A.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (VI) {
      if (yA("showClone", this), xM.eventCanceled)
        return;
      K.parentNode == FM && !this.options.group.revertClone ? FM.insertBefore(KM, K) : ig ? FM.insertBefore(KM, ig) : FM.appendChild(KM), this.options.group.revertClone && this.animate(K, KM), nM(KM, "display", ""), VI = !1;
    }
  }
};
function An(M) {
  M.dataTransfer && (M.dataTransfer.dropEffect = "move"), M.cancelable && M.preventDefault();
}
function Jt(M, A, I, g, D, t, N, L) {
  var j, i = M[dA], u = i.options.onMove, e;
  return window.CustomEvent && !OI && !lt ? j = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (j = document.createEvent("Event"), j.initEvent("move", !0, !0)), j.to = A, j.from = M, j.dragged = I, j.draggedRect = g, j.related = D || A, j.relatedRect = t || tA(A), j.willInsertAfter = L, j.originalEvent = N, M.dispatchEvent(j), u && (e = u.call(i, j, N)), e;
}
function gj(M) {
  M.draggable = !1;
}
function In() {
  _j = !1;
}
function gn(M, A, I) {
  var g = tA(iD(I.el, 0, I.options, !0)), D = 10;
  return A ? M.clientX < g.left - D || M.clientY < g.top && M.clientX < g.right : M.clientY < g.top - D || M.clientY < g.bottom && M.clientX < g.left;
}
function Dn(M, A, I) {
  var g = tA(qu(I.el, I.options.draggable)), D = 10;
  return A ? M.clientX > g.right + D || M.clientX <= g.right && M.clientY > g.bottom && M.clientX >= g.left : M.clientX > g.right && M.clientY > g.top || M.clientX <= g.right && M.clientY > g.bottom + D;
}
function tn(M, A, I, g, D, t, N, L) {
  var j = g ? M.clientY : M.clientX, i = g ? I.height : I.width, u = g ? I.top : I.left, e = g ? I.bottom : I.right, C = !1;
  if (!N) {
    if (L && wN < i * D) {
      if (!HD && (RD === 1 ? j > u + i * t / 2 : j < e - i * t / 2) && (HD = !0), HD)
        C = !0;
      else if (RD === 1 ? j < u + wN : j > e - wN)
        return -RD;
    } else if (j > u + i * (1 - D) / 2 && j < e - i * (1 - D) / 2)
      return Nn(A);
  }
  return C = C || N, C && (j < u + i * t / 2 || j > e - i * t / 2) ? j > u + i / 2 ? 1 : -1 : 0;
}
function Nn(M) {
  return kA(K) < kA(M) ? 1 : -1;
}
function Ln(M) {
  for (var A = M.tagName + M.className + M.src + M.href + M.textContent, I = A.length, g = 0; I--; )
    g += A.charCodeAt(I);
  return g.toString(36);
}
function jn(M) {
  QN.length = 0;
  for (var A = M.getElementsByTagName("input"), I = A.length; I--; ) {
    var g = A[I];
    g.checked && QN.push(g);
  }
}
function EN(M) {
  return setTimeout(M, 0);
}
function $j(M) {
  return clearTimeout(M);
}
nL && pM(document, "touchmove", function(M) {
  (xM.active || Zg) && M.cancelable && M.preventDefault();
});
xM.utils = {
  on: pM,
  off: WM,
  css: nM,
  find: ZC,
  is: function(A, I) {
    return !!II(A, I, A, !1);
  },
  extend: PT,
  throttle: PC,
  closest: II,
  toggleClass: zA,
  clone: FC,
  index: kA,
  nextTick: EN,
  cancelNextTick: $j,
  detectDirection: RC,
  getChild: iD
};
xM.get = function(M) {
  return M[dA];
};
xM.mount = function() {
  for (var M = arguments.length, A = new Array(M), I = 0; I < M; I++)
    A[I] = arguments[I];
  A[0].constructor === Array && (A = A[0]), A.forEach(function(g) {
    if (!g.prototype || !g.prototype.constructor)
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(g));
    g.utils && (xM.utils = jI(jI({}, xM.utils), g.utils)), st.mount(g);
  });
};
xM.create = function(M, A) {
  return new xM(M, A);
};
xM.version = GT;
var gA = [], GD, qj, Kj = !1, Dj, tj, fN, JD;
function un() {
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
      this.sortable.nativeDraggable ? pM(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? pM(document, "pointermove", this._handleFallbackAutoScroll) : g.touches ? pM(document, "touchmove", this._handleFallbackAutoScroll) : pM(document, "mousemove", this._handleFallbackAutoScroll);
    },
    dragOverCompleted: function(I) {
      var g = I.originalEvent;
      !this.options.dragOverBubble && !g.rootEl && this._handleAutoScroll(g);
    },
    drop: function() {
      this.sortable.nativeDraggable ? WM(document, "dragover", this._handleAutoScroll) : (WM(document, "pointermove", this._handleFallbackAutoScroll), WM(document, "touchmove", this._handleFallbackAutoScroll), WM(document, "mousemove", this._handleFallbackAutoScroll)), d4(), TN(), BT();
    },
    nulling: function() {
      fN = qj = GD = Kj = JD = Dj = tj = null, gA.length = 0;
    },
    _handleFallbackAutoScroll: function(I) {
      this._handleAutoScroll(I, !0);
    },
    _handleAutoScroll: function(I, g) {
      var D = this, t = (I.touches ? I.touches[0] : I).clientX, N = (I.touches ? I.touches[0] : I).clientY, L = document.elementFromPoint(t, N);
      if (fN = I, g || this.options.forceAutoScrollFallback || lt || OI || BD) {
        Nj(I, this.options, L, g);
        var j = ZI(L, !0);
        Kj && (!JD || t !== Dj || N !== tj) && (JD && d4(), JD = setInterval(function() {
          var i = ZI(document.elementFromPoint(t, N), !0);
          i !== j && (j = i, TN()), Nj(I, D.options, i, g);
        }, 10), Dj = t, tj = N);
      } else {
        if (!this.options.bubbleScroll || ZI(L, !0) === NI()) {
          TN();
          return;
        }
        Nj(I, this.options, ZI(L, !1), !1);
      }
    }
  }, sI(M, {
    pluginName: "scroll",
    initializeByDefault: !0
  });
}
function TN() {
  gA.forEach(function(M) {
    clearInterval(M.pid);
  }), gA = [];
}
function d4() {
  clearInterval(JD);
}
var Nj = PC(function(M, A, I, g) {
  if (!!A.scroll) {
    var D = (M.touches ? M.touches[0] : M).clientX, t = (M.touches ? M.touches[0] : M).clientY, N = A.scrollSensitivity, L = A.scrollSpeed, j = NI(), i = !1, u;
    qj !== I && (qj = I, TN(), GD = A.scroll, u = A.scrollFn, GD === !0 && (GD = ZI(I, !0)));
    var e = 0, C = GD;
    do {
      var a = C, w = tA(a), n = w.top, o = w.bottom, E = w.left, l = w.right, Y = w.width, z = w.height, m = void 0, W = void 0, v = a.scrollWidth, d = a.scrollHeight, U = nM(a), Z = a.scrollLeft, R = a.scrollTop;
      a === j ? (m = Y < v && (U.overflowX === "auto" || U.overflowX === "scroll" || U.overflowX === "visible"), W = z < d && (U.overflowY === "auto" || U.overflowY === "scroll" || U.overflowY === "visible")) : (m = Y < v && (U.overflowX === "auto" || U.overflowX === "scroll"), W = z < d && (U.overflowY === "auto" || U.overflowY === "scroll"));
      var AM = m && (Math.abs(l - D) <= N && Z + Y < v) - (Math.abs(E - D) <= N && !!Z), LM = W && (Math.abs(o - t) <= N && R + z < d) - (Math.abs(n - t) <= N && !!R);
      if (!gA[e])
        for (var IM = 0; IM <= e; IM++)
          gA[IM] || (gA[IM] = {});
      (gA[e].vx != AM || gA[e].vy != LM || gA[e].el !== a) && (gA[e].el = a, gA[e].vx = AM, gA[e].vy = LM, clearInterval(gA[e].pid), (AM != 0 || LM != 0) && (i = !0, gA[e].pid = setInterval(function() {
        g && this.layer === 0 && xM.active._onTouchMove(fN);
        var lM = gA[this.layer].vy ? gA[this.layer].vy * L : 0, SM = gA[this.layer].vx ? gA[this.layer].vx * L : 0;
        typeof u == "function" && u.call(xM.dragged.parentNode[dA], SM, lM, M, fN, gA[this.layer].el) !== "continue" || BC(gA[this.layer].el, SM, lM);
      }.bind({
        layer: e
      }), 24))), e++;
    } while (A.bubbleScroll && C !== j && (C = ZI(C, !1)));
    Kj = i;
  }
}, 30), qC = function(A) {
  var I = A.originalEvent, g = A.putSortable, D = A.dragEl, t = A.activeSortable, N = A.dispatchSortableEvent, L = A.hideGhostForTarget, j = A.unhideGhostForTarget;
  if (!!I) {
    var i = g || t;
    L();
    var u = I.changedTouches && I.changedTouches.length ? I.changedTouches[0] : I, e = document.elementFromPoint(u.clientX, u.clientY);
    j(), i && !i.el.contains(e) && (N("spill"), this.onSpill({
      dragEl: D,
      putSortable: g
    }));
  }
};
function Ku() {
}
Ku.prototype = {
  startIndex: null,
  dragStart: function(A) {
    var I = A.oldDraggableIndex;
    this.startIndex = I;
  },
  onSpill: function(A) {
    var I = A.dragEl, g = A.putSortable;
    this.sortable.captureAnimationState(), g && g.captureAnimationState();
    var D = iD(this.sortable.el, this.startIndex, this.options);
    D ? this.sortable.el.insertBefore(I, D) : this.sortable.el.appendChild(I), this.sortable.animateAll(), g && g.animateAll();
  },
  drop: qC
};
sI(Ku, {
  pluginName: "revertOnSpill"
});
function Mi() {
}
Mi.prototype = {
  onSpill: function(A) {
    var I = A.dragEl, g = A.putSortable, D = g || this.sortable;
    D.captureAnimationState(), I.parentNode && I.parentNode.removeChild(I), D.animateAll();
  },
  drop: qC
};
sI(Mi, {
  pluginName: "removeOnSpill"
});
xM.mount(new un());
xM.mount(Mi, Ku);
function en() {
  return typeof window < "u" ? window.console : global.console;
}
const Sn = en();
function Cn(M) {
  const A = /* @__PURE__ */ Object.create(null);
  return function(g) {
    return A[g] || (A[g] = M(g));
  };
}
const an = /-(\w)/g, m4 = Cn((M) => M.replace(an, (A, I) => I ? I.toUpperCase() : ""));
function Lj(M) {
  M.parentElement !== null && M.parentElement.removeChild(M);
}
function U4(M, A, I) {
  const g = I === 0 ? M.children[0] : M.children[I - 1].nextSibling;
  M.insertBefore(A, g);
}
function wn(M, A) {
  return Object.values(M).indexOf(A);
}
function En(M, A, I, g) {
  if (!M)
    return [];
  const D = Object.values(M), t = A.length - g;
  return [...A].map((L, j) => j >= t ? D.length : D.indexOf(L));
}
function KC(M, A) {
  this.$nextTick(() => this.$emit(M.toLowerCase(), A));
}
function Tn(M) {
  return (A) => {
    this.realList !== null && this["onDrag" + M](A), KC.call(this, M, A);
  };
}
function nn(M) {
  return ["transition-group", "TransitionGroup"].includes(M);
}
function xn(M) {
  if (!M || M.length !== 1)
    return !1;
  const [{ type: A }] = M;
  return A ? nn(A.name) : !1;
}
function on(M, A) {
  return A ? { ...A.props, ...A.attrs } : M;
}
const Mu = ["Start", "Add", "Remove", "Update", "End"], Au = ["Choose", "Unchoose", "Sort", "Filter", "Clone"], yn = ["Move", ...Mu, ...Au].map((M) => "on" + M);
let jj = null;
const ln = {
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
}, vN = f({
  name: "VueDraggableNext",
  inheritAttrs: !1,
  emits: [
    "update:modelValue",
    "move",
    "change",
    ...Mu.map((M) => M.toLowerCase()),
    ...Au.map((M) => M.toLowerCase())
  ],
  props: ln,
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
    const M = this.$slots.default ? this.$slots.default() : null, A = on(this.$attrs, this.componentData);
    return M ? (this.transitionMode = xn(M), rM(this.getTag(), A, M)) : rM(this.getTag(), A, []);
  },
  created() {
    this.list !== null && this.modelValue !== null && Sn.error("list props are mutually exclusive! Please set one.");
  },
  mounted() {
    const M = {};
    Mu.forEach((D) => {
      M["on" + D] = Tn.call(this, D);
    }), Au.forEach((D) => {
      M["on" + D] = KC.bind(this, D);
    });
    const A = Object.keys(this.$attrs).reduce((D, t) => (D[m4(t)] = this.$attrs[t], D), {}), I = Object.assign({}, A, M, {
      onMove: (D, t) => this.onDragMove(D, t)
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
      return this.component ? sM(this.component) : this.tag;
    },
    updateOptions(M) {
      for (var A in M) {
        const I = m4(A);
        yn.indexOf(I) === -1 && this._sortable.option(I, M[A]);
      }
    },
    getChildrenNodes() {
      return this.$el.children;
    },
    computeIndexes() {
      this.$nextTick(() => {
        this.visibleIndexes = En(this.getChildrenNodes(), this.$el.children, this.transitionMode, this.footerOffset);
      });
    },
    getUnderlyingVm(M) {
      const A = wn(this.getChildrenNodes() || [], M);
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
      this.context = this.getUnderlyingVm(M.item), this.context && (M.item._underlying_vm_ = this.clone(this.context.element), jj = M.item);
    },
    onDragAdd(M) {
      const A = M.item._underlying_vm_;
      if (A === void 0)
        return;
      Lj(M.item);
      const I = this.getVmIndex(M.newIndex);
      this.spliceList(I, 0, A), this.computeIndexes();
      const g = { element: A, newIndex: I };
      this.emitChanges({ added: g });
    },
    onDragRemove(M) {
      if (U4(this.$el, M.item, M.oldIndex), M.pullMode === "clone") {
        Lj(M.clone);
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
      Lj(M.item), U4(M.from, M.item, M.oldIndex);
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
      const g = this.getRelatedContextFromMoveEvent(M), D = this.context, t = this.computeFutureIndex(g, M);
      Object.assign(D, { futureIndex: t });
      const N = Object.assign({}, M, {
        relatedContext: g,
        draggedContext: D
      });
      return I(N, A);
    },
    onDragEnd() {
      this.computeIndexes(), jj = null;
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
        const t = I.getUnderlyingVm(A);
        if (t)
          return Object.assign(t, D);
      }
      return D;
    },
    computeFutureIndex(M, A) {
      const I = [...A.to.children].filter((N) => N.style.display !== "none");
      if (I.length === 0)
        return 0;
      const g = I.indexOf(A.related), D = M.component.getVmIndex(g);
      return I.indexOf(jj) !== -1 || !A.willInsertAfter ? D : D + 1;
    }
  }
}), sn = { key: 0 }, cn = /* @__PURE__ */ s("br", null, null, -1), rn = /* @__PURE__ */ s("br", null, null, -1), zn = { key: 1 }, Yn = { key: 0 }, dn = { key: 1 }, mn = /* @__PURE__ */ f({
  __name: "Text",
  props: {
    model: null,
    textType: null,
    dispLang: { type: Boolean }
  },
  setup(M) {
    return YD(), (A, I) => {
      const g = sM("b-col"), D = sM("b-form-input"), t = sM("b-row"), N = sM("b-form-textarea");
      return M.dispLang ? (T(), r("div", sn, [
        M.textType === S(MD).ShortAnswer ? (T(), V(t, { key: 0 }, {
          default: b(() => [
            k(g, { class: "col-sm-1" }, {
              default: b(() => [
                s("h6", null, F(M.model.lang) + ": ", 1)
              ]),
              _: 1
            }),
            k(g, { class: "col-sm-11" }, {
              default: b(() => [
                k(D, {
                  modelValue: M.model.value,
                  "onUpdate:modelValue": I[0] || (I[0] = (L) => M.model.value = L)
                }, null, 8, ["modelValue"]),
                cn
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : M.textType === S(MD).Paragraph ? (T(), V(t, { key: 1 }, {
          default: b(() => [
            k(g, { class: "col-sm-1" }, {
              default: b(() => [
                s("h6", null, F(M.model.lang) + ": ", 1)
              ]),
              _: 1
            }),
            k(g, { class: "col-sm-11" }, {
              default: b(() => [
                k(N, {
                  modelValue: M.model.value,
                  "onUpdate:modelValue": I[1] || (I[1] = (L) => M.model.value = L),
                  rows: "3",
                  "max-rows": "6"
                }, null, 8, ["modelValue"]),
                rn
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : P("", !0)
      ])) : (T(), r("div", zn, [
        M.textType === S(MD).ShortAnswer ? (T(), r("div", Yn, [
          k(D, {
            modelValue: M.model.value,
            "onUpdate:modelValue": I[2] || (I[2] = (L) => M.model.value = L)
          }, null, 8, ["modelValue"])
        ])) : M.textType === "Paragraph" ? (T(), r("div", dn, [
          k(N, {
            modelValue: M.model.value,
            "onUpdate:modelValue": I[3] || (I[3] = (L) => M.model.value = L),
            rows: "3",
            "max-rows": "6"
          }, null, 8, ["modelValue"])
        ])) : P("", !0)
      ]));
    };
  }
}), Iu = /* @__PURE__ */ f({
  __name: "TextCollection",
  props: {
    model: null,
    textType: null
  },
  setup(M) {
    return (A, I) => (T(!0), r(MM, null, aM(M.model.values, (g) => {
      var D;
      return T(), V(mn, {
        key: g.id,
        model: g,
        "text-type": M.textType,
        "disp-lang": ((D = M.model.values) == null ? void 0 : D.length) > 1
      }, null, 8, ["model", "text-type", "disp-lang"]);
    }), 128));
  }
}), Un = { class: "alert alert-info" }, hn = { key: 0 }, On = { key: 0 }, bn = /* @__PURE__ */ s("h6", null, "Is Extended:", -1), Wn = /* @__PURE__ */ s("br", null, null, -1), kn = { class: "toggle-button-cover" }, pn = { class: "button-cover" }, Qn = {
  class: "button r",
  id: "button-1"
}, fn = /* @__PURE__ */ s("div", { class: "knobs" }, null, -1), vn = /* @__PURE__ */ s("div", { class: "layer" }, null, -1), Gn = /* @__PURE__ */ s("h6", null, "Is Required:", -1), Jn = /* @__PURE__ */ s("br", null, null, -1), Vn = { class: "toggle-button-cover" }, Zn = { class: "button-cover" }, Pn = {
  class: "button r",
  id: "button-1"
}, Bn = /* @__PURE__ */ s("div", { class: "knobs" }, null, -1), Fn = /* @__PURE__ */ s("div", { class: "layer" }, null, -1), Xn = { key: 1 }, Rn = {
  key: 0,
  class: "option-values"
}, Hn = { key: 0 }, _n = {
  key: 0,
  style: { color: "red", "font-weight": "bold" }
}, h4 = /* @__PURE__ */ f({
  __name: "Option",
  props: {
    model: null,
    optionFieldType: null,
    disableInlineEditing: { type: Boolean }
  },
  setup(M) {
    const A = M;
    YD();
    const I = gM(!1), g = x(() => A.optionFieldType == jt.Checkboxes || A.optionFieldType == jt.RadioButtons);
    return (D, t) => {
      const N = sM("b-col"), L = sM("b-row"), j = sM("font-awesome-icon");
      return T(), r("div", Un, [
        I.value || M.disableInlineEditing ? (T(), r("div", hn, [
          k(Iu, {
            model: M.model.optionText,
            "text-type": S(UM).ShortAnswer
          }, null, 8, ["model", "text-type"]),
          S(g) ? (T(), r("span", On, [
            k(L, null, {
              default: b(() => [
                k(N, { class: "col-sm-6" }, {
                  default: b(() => [
                    k(L, null, {
                      default: b(() => [
                        k(N, { class: "col-sm-4" }, {
                          default: b(() => [
                            bn
                          ]),
                          _: 1
                        }),
                        k(N, { class: "col-sm-8" }, {
                          default: b(() => [
                            Wn,
                            s("div", kn, [
                              s("div", pn, [
                                s("div", Qn, [
                                  _M(s("input", {
                                    "onUpdate:modelValue": t[0] || (t[0] = (i) => M.model.isExtendedInput = i),
                                    type: "checkbox",
                                    class: "checkbox"
                                  }, null, 512), [
                                    [lg, M.model.isExtendedInput]
                                  ]),
                                  fn,
                                  vn
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
                k(N, { class: "col-sm-4" }, {
                  default: b(() => [
                    M.model.isExtendedInput ? (T(), V(L, { key: 0 }, {
                      default: b(() => [
                        k(N, { class: "col-sm-4" }, {
                          default: b(() => [
                            Gn
                          ]),
                          _: 1
                        }),
                        k(N, { class: "col-sm-8" }, {
                          default: b(() => [
                            Jn,
                            s("div", Vn, [
                              s("div", Zn, [
                                s("div", Pn, [
                                  _M(s("input", {
                                    "onUpdate:modelValue": t[1] || (t[1] = (i) => M.model.isExtendedInputRequired = i),
                                    type: "checkbox",
                                    class: "checkbox"
                                  }, null, 512), [
                                    [lg, M.model.isExtendedInputRequired]
                                  ]),
                                  Bn,
                                  Fn
                                ])
                              ])
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })) : P("", !0)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ])) : P("", !0),
          M.disableInlineEditing ? P("", !0) : (T(), V(j, {
            key: 1,
            icon: "fa-solid fa-circle-check",
            onClick: t[2] || (t[2] = (i) => I.value = !1),
            class: "fa-icon delete-button"
          }))
        ])) : (T(), r("div", Xn, [
          (T(!0), r(MM, null, aM(M.model.optionText.values, (i) => {
            var u;
            return T(), r("span", null, [
              ((u = i.value) == null ? void 0 : u.length) > 0 ? (T(), r("span", Rn, F(i.value), 1)) : P("", !0)
            ]);
          }), 256)),
          M.model.isExtendedInput ? (T(), r("span", Hn, [
            k(j, {
              icon: "fa fa-th-list",
              class: "fa fa-th-list"
            }),
            M.model.isExtendedInputRequired ? (T(), r("span", _n, "*")) : P("", !0)
          ])) : P("", !0),
          k(j, {
            icon: "fa-solid fa-pen-to-square",
            onClick: t[3] || (t[3] = (i) => I.value = !0),
            class: "fa-icon"
          })
        ]))
      ]);
    };
  }
});
function O4(M, A) {
  var I = Object.keys(M);
  if (Object.getOwnPropertySymbols) {
    var g = Object.getOwnPropertySymbols(M);
    A && (g = g.filter(function(D) {
      return Object.getOwnPropertyDescriptor(M, D).enumerable;
    })), I.push.apply(I, g);
  }
  return I;
}
function tM(M) {
  for (var A = 1; A < arguments.length; A++) {
    var I = arguments[A] != null ? arguments[A] : {};
    A % 2 ? O4(Object(I), !0).forEach(function(g) {
      uA(M, g, I[g]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(M, Object.getOwnPropertyDescriptors(I)) : O4(Object(I)).forEach(function(g) {
      Object.defineProperty(M, g, Object.getOwnPropertyDescriptor(I, g));
    });
  }
  return M;
}
function GN(M) {
  return GN = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(A) {
    return typeof A;
  } : function(A) {
    return A && typeof Symbol == "function" && A.constructor === Symbol && A !== Symbol.prototype ? "symbol" : typeof A;
  }, GN(M);
}
function $n(M, A) {
  if (!(M instanceof A))
    throw new TypeError("Cannot call a class as a function");
}
function b4(M, A) {
  for (var I = 0; I < A.length; I++) {
    var g = A[I];
    g.enumerable = g.enumerable || !1, g.configurable = !0, "value" in g && (g.writable = !0), Object.defineProperty(M, g.key, g);
  }
}
function qn(M, A, I) {
  return A && b4(M.prototype, A), I && b4(M, I), Object.defineProperty(M, "prototype", {
    writable: !1
  }), M;
}
function uA(M, A, I) {
  return A in M ? Object.defineProperty(M, A, {
    value: I,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : M[A] = I, M;
}
function Ai(M, A) {
  return Mx(M) || Ix(M, A) || Ma(M, A) || Dx();
}
function ct(M) {
  return Kn(M) || Ax(M) || Ma(M) || gx();
}
function Kn(M) {
  if (Array.isArray(M))
    return gu(M);
}
function Mx(M) {
  if (Array.isArray(M))
    return M;
}
function Ax(M) {
  if (typeof Symbol < "u" && M[Symbol.iterator] != null || M["@@iterator"] != null)
    return Array.from(M);
}
function Ix(M, A) {
  var I = M == null ? null : typeof Symbol < "u" && M[Symbol.iterator] || M["@@iterator"];
  if (I != null) {
    var g = [], D = !0, t = !1, N, L;
    try {
      for (I = I.call(M); !(D = (N = I.next()).done) && (g.push(N.value), !(A && g.length === A)); D = !0)
        ;
    } catch (j) {
      t = !0, L = j;
    } finally {
      try {
        !D && I.return != null && I.return();
      } finally {
        if (t)
          throw L;
      }
    }
    return g;
  }
}
function Ma(M, A) {
  if (!!M) {
    if (typeof M == "string")
      return gu(M, A);
    var I = Object.prototype.toString.call(M).slice(8, -1);
    if (I === "Object" && M.constructor && (I = M.constructor.name), I === "Map" || I === "Set")
      return Array.from(M);
    if (I === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(I))
      return gu(M, A);
  }
}
function gu(M, A) {
  (A == null || A > M.length) && (A = M.length);
  for (var I = 0, g = new Array(A); I < A; I++)
    g[I] = M[I];
  return g;
}
function gx() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Dx() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var W4 = function() {
}, Ii = {}, Aa = {}, Ia = null, ga = {
  mark: W4,
  measure: W4
};
try {
  typeof window < "u" && (Ii = window), typeof document < "u" && (Aa = document), typeof MutationObserver < "u" && (Ia = MutationObserver), typeof performance < "u" && (ga = performance);
} catch {
}
var tx = Ii.navigator || {}, k4 = tx.userAgent, p4 = k4 === void 0 ? "" : k4, RI = Ii, ZM = Aa, Q4 = Ia, Vt = ga;
RI.document;
var bI = !!ZM.documentElement && !!ZM.head && typeof ZM.addEventListener == "function" && typeof ZM.createElement == "function", Da = ~p4.indexOf("MSIE") || ~p4.indexOf("Trident/"), Zt, Pt, Bt, Ft, Xt, cI = "___FONT_AWESOME___", Du = 16, ta = "fa", Na = "svg-inline--fa", sg = "data-fa-i2svg", tu = "data-fa-pseudo-element", Nx = "data-fa-pseudo-element-pending", gi = "data-prefix", Di = "data-icon", f4 = "fontawesome-i2svg", Lx = "async", jx = ["HTML", "HEAD", "STYLE", "SCRIPT"], La = function() {
  try {
    return !0;
  } catch {
    return !1;
  }
}(), VM = "classic", AA = "sharp", ti = [VM, AA];
function rt(M) {
  return new Proxy(M, {
    get: function(I, g) {
      return g in I ? I[g] : I[VM];
    }
  });
}
var ut = rt((Zt = {}, uA(Zt, VM, {
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
}), uA(Zt, AA, {
  fa: "solid",
  fass: "solid",
  "fa-solid": "solid"
}), Zt)), it = rt((Pt = {}, uA(Pt, VM, {
  solid: "fas",
  regular: "far",
  light: "fal",
  thin: "fat",
  duotone: "fad",
  brands: "fab",
  kit: "fak"
}), uA(Pt, AA, {
  solid: "fass"
}), Pt)), et = rt((Bt = {}, uA(Bt, VM, {
  fab: "fa-brands",
  fad: "fa-duotone",
  fak: "fa-kit",
  fal: "fa-light",
  far: "fa-regular",
  fas: "fa-solid",
  fat: "fa-thin"
}), uA(Bt, AA, {
  fass: "fa-solid"
}), Bt)), ux = rt((Ft = {}, uA(Ft, VM, {
  "fa-brands": "fab",
  "fa-duotone": "fad",
  "fa-kit": "fak",
  "fa-light": "fal",
  "fa-regular": "far",
  "fa-solid": "fas",
  "fa-thin": "fat"
}), uA(Ft, AA, {
  "fa-solid": "fass"
}), Ft)), ix = /fa(s|r|l|t|d|b|k|ss)?[\-\ ]/, ja = "fa-layers-text", ex = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i, Sx = rt((Xt = {}, uA(Xt, VM, {
  900: "fas",
  400: "far",
  normal: "far",
  300: "fal",
  100: "fat"
}), uA(Xt, AA, {
  900: "fass"
}), Xt)), ua = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], Cx = ua.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), ax = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], Cg = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, St = /* @__PURE__ */ new Set();
Object.keys(it[VM]).map(St.add.bind(St));
Object.keys(it[AA]).map(St.add.bind(St));
var wx = [].concat(ti, ct(St), ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", Cg.GROUP, Cg.SWAP_OPACITY, Cg.PRIMARY, Cg.SECONDARY]).concat(ua.map(function(M) {
  return "".concat(M, "x");
})).concat(Cx.map(function(M) {
  return "w-".concat(M);
})), _D = RI.FontAwesomeConfig || {};
function Ex(M) {
  var A = ZM.querySelector("script[" + M + "]");
  if (A)
    return A.getAttribute(M);
}
function Tx(M) {
  return M === "" ? !0 : M === "false" ? !1 : M === "true" ? !0 : M;
}
if (ZM && typeof ZM.querySelector == "function") {
  var nx = [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]];
  nx.forEach(function(M) {
    var A = Ai(M, 2), I = A[0], g = A[1], D = Tx(Ex(I));
    D != null && (_D[g] = D);
  });
}
var ia = {
  styleDefault: "solid",
  familyDefault: "classic",
  cssPrefix: ta,
  replacementClass: Na,
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
_D.familyPrefix && (_D.cssPrefix = _D.familyPrefix);
var eD = tM(tM({}, ia), _D);
eD.autoReplaceSvg || (eD.observeMutations = !1);
var jM = {};
Object.keys(ia).forEach(function(M) {
  Object.defineProperty(jM, M, {
    enumerable: !0,
    set: function(I) {
      eD[M] = I, $D.forEach(function(g) {
        return g(jM);
      });
    },
    get: function() {
      return eD[M];
    }
  });
});
Object.defineProperty(jM, "familyPrefix", {
  enumerable: !0,
  set: function(A) {
    eD.cssPrefix = A, $D.forEach(function(I) {
      return I(jM);
    });
  },
  get: function() {
    return eD.cssPrefix;
  }
});
RI.FontAwesomeConfig = jM;
var $D = [];
function xx(M) {
  return $D.push(M), function() {
    $D.splice($D.indexOf(M), 1);
  };
}
var QI = Du, DI = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function ox(M) {
  if (!(!M || !bI)) {
    var A = ZM.createElement("style");
    A.setAttribute("type", "text/css"), A.innerHTML = M;
    for (var I = ZM.head.childNodes, g = null, D = I.length - 1; D > -1; D--) {
      var t = I[D], N = (t.tagName || "").toUpperCase();
      ["STYLE", "LINK"].indexOf(N) > -1 && (g = t);
    }
    return ZM.head.insertBefore(A, g), M;
  }
}
var yx = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function Ct() {
  for (var M = 12, A = ""; M-- > 0; )
    A += yx[Math.random() * 62 | 0];
  return A;
}
function dD(M) {
  for (var A = [], I = (M || []).length >>> 0; I--; )
    A[I] = M[I];
  return A;
}
function Ni(M) {
  return M.classList ? dD(M.classList) : (M.getAttribute("class") || "").split(" ").filter(function(A) {
    return A;
  });
}
function ea(M) {
  return "".concat(M).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function lx(M) {
  return Object.keys(M || {}).reduce(function(A, I) {
    return A + "".concat(I, '="').concat(ea(M[I]), '" ');
  }, "").trim();
}
function xL(M) {
  return Object.keys(M || {}).reduce(function(A, I) {
    return A + "".concat(I, ": ").concat(M[I].trim(), ";");
  }, "");
}
function Li(M) {
  return M.size !== DI.size || M.x !== DI.x || M.y !== DI.y || M.rotate !== DI.rotate || M.flipX || M.flipY;
}
function sx(M) {
  var A = M.transform, I = M.containerWidth, g = M.iconWidth, D = {
    transform: "translate(".concat(I / 2, " 256)")
  }, t = "translate(".concat(A.x * 32, ", ").concat(A.y * 32, ") "), N = "scale(".concat(A.size / 16 * (A.flipX ? -1 : 1), ", ").concat(A.size / 16 * (A.flipY ? -1 : 1), ") "), L = "rotate(".concat(A.rotate, " 0 0)"), j = {
    transform: "".concat(t, " ").concat(N, " ").concat(L)
  }, i = {
    transform: "translate(".concat(g / 2 * -1, " -256)")
  };
  return {
    outer: D,
    inner: j,
    path: i
  };
}
function cx(M) {
  var A = M.transform, I = M.width, g = I === void 0 ? Du : I, D = M.height, t = D === void 0 ? Du : D, N = M.startCentered, L = N === void 0 ? !1 : N, j = "";
  return L && Da ? j += "translate(".concat(A.x / QI - g / 2, "em, ").concat(A.y / QI - t / 2, "em) ") : L ? j += "translate(calc(-50% + ".concat(A.x / QI, "em), calc(-50% + ").concat(A.y / QI, "em)) ") : j += "translate(".concat(A.x / QI, "em, ").concat(A.y / QI, "em) "), j += "scale(".concat(A.size / QI * (A.flipX ? -1 : 1), ", ").concat(A.size / QI * (A.flipY ? -1 : 1), ") "), j += "rotate(".concat(A.rotate, "deg) "), j;
}
var rx = `:root, :host {
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
function Sa() {
  var M = ta, A = Na, I = jM.cssPrefix, g = jM.replacementClass, D = rx;
  if (I !== M || g !== A) {
    var t = new RegExp("\\.".concat(M, "\\-"), "g"), N = new RegExp("\\--".concat(M, "\\-"), "g"), L = new RegExp("\\.".concat(A), "g");
    D = D.replace(t, ".".concat(I, "-")).replace(N, "--".concat(I, "-")).replace(L, ".".concat(g));
  }
  return D;
}
var v4 = !1;
function uj() {
  jM.autoAddCss && !v4 && (ox(Sa()), v4 = !0);
}
var zx = {
  mixout: function() {
    return {
      dom: {
        css: Sa,
        insertCss: uj
      }
    };
  },
  hooks: function() {
    return {
      beforeDOMElementCreation: function() {
        uj();
      },
      beforeI2svg: function() {
        uj();
      }
    };
  }
}, rI = RI || {};
rI[cI] || (rI[cI] = {});
rI[cI].styles || (rI[cI].styles = {});
rI[cI].hooks || (rI[cI].hooks = {});
rI[cI].shims || (rI[cI].shims = []);
var XA = rI[cI], Ca = [], Yx = function M() {
  ZM.removeEventListener("DOMContentLoaded", M), JN = 1, Ca.map(function(A) {
    return A();
  });
}, JN = !1;
bI && (JN = (ZM.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(ZM.readyState), JN || ZM.addEventListener("DOMContentLoaded", Yx));
function dx(M) {
  !bI || (JN ? setTimeout(M, 0) : Ca.push(M));
}
function zt(M) {
  var A = M.tag, I = M.attributes, g = I === void 0 ? {} : I, D = M.children, t = D === void 0 ? [] : D;
  return typeof M == "string" ? ea(M) : "<".concat(A, " ").concat(lx(g), ">").concat(t.map(zt).join(""), "</").concat(A, ">");
}
function G4(M, A, I) {
  if (M && M[A] && M[A][I])
    return {
      prefix: A,
      iconName: I,
      icon: M[A][I]
    };
}
var mx = function(A, I) {
  return function(g, D, t, N) {
    return A.call(I, g, D, t, N);
  };
}, ij = function(A, I, g, D) {
  var t = Object.keys(A), N = t.length, L = D !== void 0 ? mx(I, D) : I, j, i, u;
  for (g === void 0 ? (j = 1, u = A[t[0]]) : (j = 0, u = g); j < N; j++)
    i = t[j], u = L(u, A[i], i, A);
  return u;
};
function Ux(M) {
  for (var A = [], I = 0, g = M.length; I < g; ) {
    var D = M.charCodeAt(I++);
    if (D >= 55296 && D <= 56319 && I < g) {
      var t = M.charCodeAt(I++);
      (t & 64512) == 56320 ? A.push(((D & 1023) << 10) + (t & 1023) + 65536) : (A.push(D), I--);
    } else
      A.push(D);
  }
  return A;
}
function Nu(M) {
  var A = Ux(M);
  return A.length === 1 ? A[0].toString(16) : null;
}
function hx(M, A) {
  var I = M.length, g = M.charCodeAt(A), D;
  return g >= 55296 && g <= 56319 && I > A + 1 && (D = M.charCodeAt(A + 1), D >= 56320 && D <= 57343) ? (g - 55296) * 1024 + D - 56320 + 65536 : g;
}
function J4(M) {
  return Object.keys(M).reduce(function(A, I) {
    var g = M[I], D = !!g.icon;
    return D ? A[g.iconName] = g.icon : A[I] = g, A;
  }, {});
}
function Lu(M, A) {
  var I = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, g = I.skipHooks, D = g === void 0 ? !1 : g, t = J4(A);
  typeof XA.hooks.addPack == "function" && !D ? XA.hooks.addPack(M, J4(A)) : XA.styles[M] = tM(tM({}, XA.styles[M] || {}), t), M === "fas" && Lu("fa", A);
}
var Rt, Ht, _t, $g = XA.styles, Ox = XA.shims, bx = (Rt = {}, uA(Rt, VM, Object.values(et[VM])), uA(Rt, AA, Object.values(et[AA])), Rt), ji = null, aa = {}, wa = {}, Ea = {}, Ta = {}, na = {}, Wx = (Ht = {}, uA(Ht, VM, Object.keys(ut[VM])), uA(Ht, AA, Object.keys(ut[AA])), Ht);
function kx(M) {
  return ~wx.indexOf(M);
}
function px(M, A) {
  var I = A.split("-"), g = I[0], D = I.slice(1).join("-");
  return g === M && D !== "" && !kx(D) ? D : null;
}
var xa = function() {
  var A = function(t) {
    return ij($g, function(N, L, j) {
      return N[j] = ij(L, t, {}), N;
    }, {});
  };
  aa = A(function(D, t, N) {
    if (t[3] && (D[t[3]] = N), t[2]) {
      var L = t[2].filter(function(j) {
        return typeof j == "number";
      });
      L.forEach(function(j) {
        D[j.toString(16)] = N;
      });
    }
    return D;
  }), wa = A(function(D, t, N) {
    if (D[N] = N, t[2]) {
      var L = t[2].filter(function(j) {
        return typeof j == "string";
      });
      L.forEach(function(j) {
        D[j] = N;
      });
    }
    return D;
  }), na = A(function(D, t, N) {
    var L = t[2];
    return D[N] = N, L.forEach(function(j) {
      D[j] = N;
    }), D;
  });
  var I = "far" in $g || jM.autoFetchSvg, g = ij(Ox, function(D, t) {
    var N = t[0], L = t[1], j = t[2];
    return L === "far" && !I && (L = "fas"), typeof N == "string" && (D.names[N] = {
      prefix: L,
      iconName: j
    }), typeof N == "number" && (D.unicodes[N.toString(16)] = {
      prefix: L,
      iconName: j
    }), D;
  }, {
    names: {},
    unicodes: {}
  });
  Ea = g.names, Ta = g.unicodes, ji = oL(jM.styleDefault, {
    family: jM.familyDefault
  });
};
xx(function(M) {
  ji = oL(M.styleDefault, {
    family: jM.familyDefault
  });
});
xa();
function ui(M, A) {
  return (aa[M] || {})[A];
}
function Qx(M, A) {
  return (wa[M] || {})[A];
}
function ag(M, A) {
  return (na[M] || {})[A];
}
function oa(M) {
  return Ea[M] || {
    prefix: null,
    iconName: null
  };
}
function fx(M) {
  var A = Ta[M], I = ui("fas", M);
  return A || (I ? {
    prefix: "fas",
    iconName: I
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function HI() {
  return ji;
}
var ii = function() {
  return {
    prefix: null,
    iconName: null,
    rest: []
  };
};
function oL(M) {
  var A = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, I = A.family, g = I === void 0 ? VM : I, D = ut[g][M], t = it[g][M] || it[g][D], N = M in XA.styles ? M : null;
  return t || N || null;
}
var V4 = (_t = {}, uA(_t, VM, Object.keys(et[VM])), uA(_t, AA, Object.keys(et[AA])), _t);
function yL(M) {
  var A, I = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, g = I.skipLookups, D = g === void 0 ? !1 : g, t = (A = {}, uA(A, VM, "".concat(jM.cssPrefix, "-").concat(VM)), uA(A, AA, "".concat(jM.cssPrefix, "-").concat(AA)), A), N = null, L = VM;
  (M.includes(t[VM]) || M.some(function(i) {
    return V4[VM].includes(i);
  })) && (L = VM), (M.includes(t[AA]) || M.some(function(i) {
    return V4[AA].includes(i);
  })) && (L = AA);
  var j = M.reduce(function(i, u) {
    var e = px(jM.cssPrefix, u);
    if ($g[u] ? (u = bx[L].includes(u) ? ux[L][u] : u, N = u, i.prefix = u) : Wx[L].indexOf(u) > -1 ? (N = u, i.prefix = oL(u, {
      family: L
    })) : e ? i.iconName = e : u !== jM.replacementClass && u !== t[VM] && u !== t[AA] && i.rest.push(u), !D && i.prefix && i.iconName) {
      var C = N === "fa" ? oa(i.iconName) : {}, a = ag(i.prefix, i.iconName);
      C.prefix && (N = null), i.iconName = C.iconName || a || i.iconName, i.prefix = C.prefix || i.prefix, i.prefix === "far" && !$g.far && $g.fas && !jM.autoFetchSvg && (i.prefix = "fas");
    }
    return i;
  }, ii());
  return (M.includes("fa-brands") || M.includes("fab")) && (j.prefix = "fab"), (M.includes("fa-duotone") || M.includes("fad")) && (j.prefix = "fad"), !j.prefix && L === AA && ($g.fass || jM.autoFetchSvg) && (j.prefix = "fass", j.iconName = ag(j.prefix, j.iconName) || j.iconName), (j.prefix === "fa" || N === "fa") && (j.prefix = HI() || "fas"), j;
}
var vx = /* @__PURE__ */ function() {
  function M() {
    $n(this, M), this.definitions = {};
  }
  return qn(M, [{
    key: "add",
    value: function() {
      for (var I = this, g = arguments.length, D = new Array(g), t = 0; t < g; t++)
        D[t] = arguments[t];
      var N = D.reduce(this._pullDefinitions, {});
      Object.keys(N).forEach(function(L) {
        I.definitions[L] = tM(tM({}, I.definitions[L] || {}), N[L]), Lu(L, N[L]);
        var j = et[VM][L];
        j && Lu(j, N[L]), xa();
      });
    }
  }, {
    key: "reset",
    value: function() {
      this.definitions = {};
    }
  }, {
    key: "_pullDefinitions",
    value: function(I, g) {
      var D = g.prefix && g.iconName && g.icon ? {
        0: g
      } : g;
      return Object.keys(D).map(function(t) {
        var N = D[t], L = N.prefix, j = N.iconName, i = N.icon, u = i[2];
        I[L] || (I[L] = {}), u.length > 0 && u.forEach(function(e) {
          typeof e == "string" && (I[L][e] = i);
        }), I[L][j] = i;
      }), I;
    }
  }]), M;
}(), Z4 = [], qg = {}, gD = {}, Gx = Object.keys(gD);
function Jx(M, A) {
  var I = A.mixoutsTo;
  return Z4 = M, qg = {}, Object.keys(gD).forEach(function(g) {
    Gx.indexOf(g) === -1 && delete gD[g];
  }), Z4.forEach(function(g) {
    var D = g.mixout ? g.mixout() : {};
    if (Object.keys(D).forEach(function(N) {
      typeof D[N] == "function" && (I[N] = D[N]), GN(D[N]) === "object" && Object.keys(D[N]).forEach(function(L) {
        I[N] || (I[N] = {}), I[N][L] = D[N][L];
      });
    }), g.hooks) {
      var t = g.hooks();
      Object.keys(t).forEach(function(N) {
        qg[N] || (qg[N] = []), qg[N].push(t[N]);
      });
    }
    g.provides && g.provides(gD);
  }), I;
}
function ju(M, A) {
  for (var I = arguments.length, g = new Array(I > 2 ? I - 2 : 0), D = 2; D < I; D++)
    g[D - 2] = arguments[D];
  var t = qg[M] || [];
  return t.forEach(function(N) {
    A = N.apply(null, [A].concat(g));
  }), A;
}
function cg(M) {
  for (var A = arguments.length, I = new Array(A > 1 ? A - 1 : 0), g = 1; g < A; g++)
    I[g - 1] = arguments[g];
  var D = qg[M] || [];
  D.forEach(function(t) {
    t.apply(null, I);
  });
}
function zI() {
  var M = arguments[0], A = Array.prototype.slice.call(arguments, 1);
  return gD[M] ? gD[M].apply(null, A) : void 0;
}
function uu(M) {
  M.prefix === "fa" && (M.prefix = "fas");
  var A = M.iconName, I = M.prefix || HI();
  if (!!A)
    return A = ag(I, A) || A, G4(ya.definitions, I, A) || G4(XA.styles, I, A);
}
var ya = new vx(), Vx = function() {
  jM.autoReplaceSvg = !1, jM.observeMutations = !1, cg("noAuto");
}, Zx = {
  i2svg: function() {
    var A = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return bI ? (cg("beforeI2svg", A), zI("pseudoElements2svg", A), zI("i2svg", A)) : Promise.reject("Operation requires a DOM of some kind.");
  },
  watch: function() {
    var A = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, I = A.autoReplaceSvgRoot;
    jM.autoReplaceSvg === !1 && (jM.autoReplaceSvg = !0), jM.observeMutations = !0, dx(function() {
      Bx({
        autoReplaceSvgRoot: I
      }), cg("watch", A);
    });
  }
}, Px = {
  icon: function(A) {
    if (A === null)
      return null;
    if (GN(A) === "object" && A.prefix && A.iconName)
      return {
        prefix: A.prefix,
        iconName: ag(A.prefix, A.iconName) || A.iconName
      };
    if (Array.isArray(A) && A.length === 2) {
      var I = A[1].indexOf("fa-") === 0 ? A[1].slice(3) : A[1], g = oL(A[0]);
      return {
        prefix: g,
        iconName: ag(g, I) || I
      };
    }
    if (typeof A == "string" && (A.indexOf("".concat(jM.cssPrefix, "-")) > -1 || A.match(ix))) {
      var D = yL(A.split(" "), {
        skipLookups: !0
      });
      return {
        prefix: D.prefix || HI(),
        iconName: ag(D.prefix, D.iconName) || D.iconName
      };
    }
    if (typeof A == "string") {
      var t = HI();
      return {
        prefix: t,
        iconName: ag(t, A) || A
      };
    }
  }
}, WA = {
  noAuto: Vx,
  config: jM,
  dom: Zx,
  parse: Px,
  library: ya,
  findIconDefinition: uu,
  toHtml: zt
}, Bx = function() {
  var A = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, I = A.autoReplaceSvgRoot, g = I === void 0 ? ZM : I;
  (Object.keys(XA.styles).length > 0 || jM.autoFetchSvg) && bI && jM.autoReplaceSvg && WA.dom.i2svg({
    node: g
  });
};
function lL(M, A) {
  return Object.defineProperty(M, "abstract", {
    get: A
  }), Object.defineProperty(M, "html", {
    get: function() {
      return M.abstract.map(function(g) {
        return zt(g);
      });
    }
  }), Object.defineProperty(M, "node", {
    get: function() {
      if (!!bI) {
        var g = ZM.createElement("div");
        return g.innerHTML = M.html, g.children;
      }
    }
  }), M;
}
function Fx(M) {
  var A = M.children, I = M.main, g = M.mask, D = M.attributes, t = M.styles, N = M.transform;
  if (Li(N) && I.found && !g.found) {
    var L = I.width, j = I.height, i = {
      x: L / j / 2,
      y: 0.5
    };
    D.style = xL(tM(tM({}, t), {}, {
      "transform-origin": "".concat(i.x + N.x / 16, "em ").concat(i.y + N.y / 16, "em")
    }));
  }
  return [{
    tag: "svg",
    attributes: D,
    children: A
  }];
}
function Xx(M) {
  var A = M.prefix, I = M.iconName, g = M.children, D = M.attributes, t = M.symbol, N = t === !0 ? "".concat(A, "-").concat(jM.cssPrefix, "-").concat(I) : t;
  return [{
    tag: "svg",
    attributes: {
      style: "display: none;"
    },
    children: [{
      tag: "symbol",
      attributes: tM(tM({}, D), {}, {
        id: N
      }),
      children: g
    }]
  }];
}
function ei(M) {
  var A = M.icons, I = A.main, g = A.mask, D = M.prefix, t = M.iconName, N = M.transform, L = M.symbol, j = M.title, i = M.maskId, u = M.titleId, e = M.extra, C = M.watchable, a = C === void 0 ? !1 : C, w = g.found ? g : I, n = w.width, o = w.height, E = D === "fak", l = [jM.replacementClass, t ? "".concat(jM.cssPrefix, "-").concat(t) : ""].filter(function(U) {
    return e.classes.indexOf(U) === -1;
  }).filter(function(U) {
    return U !== "" || !!U;
  }).concat(e.classes).join(" "), Y = {
    children: [],
    attributes: tM(tM({}, e.attributes), {}, {
      "data-prefix": D,
      "data-icon": t,
      class: l,
      role: e.attributes.role || "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 ".concat(n, " ").concat(o)
    })
  }, z = E && !~e.classes.indexOf("fa-fw") ? {
    width: "".concat(n / o * 16 * 0.0625, "em")
  } : {};
  a && (Y.attributes[sg] = ""), j && (Y.children.push({
    tag: "title",
    attributes: {
      id: Y.attributes["aria-labelledby"] || "title-".concat(u || Ct())
    },
    children: [j]
  }), delete Y.attributes.title);
  var m = tM(tM({}, Y), {}, {
    prefix: D,
    iconName: t,
    main: I,
    mask: g,
    maskId: i,
    transform: N,
    symbol: L,
    styles: tM(tM({}, z), e.styles)
  }), W = g.found && I.found ? zI("generateAbstractMask", m) || {
    children: [],
    attributes: {}
  } : zI("generateAbstractIcon", m) || {
    children: [],
    attributes: {}
  }, v = W.children, d = W.attributes;
  return m.children = v, m.attributes = d, L ? Xx(m) : Fx(m);
}
function P4(M) {
  var A = M.content, I = M.width, g = M.height, D = M.transform, t = M.title, N = M.extra, L = M.watchable, j = L === void 0 ? !1 : L, i = tM(tM(tM({}, N.attributes), t ? {
    title: t
  } : {}), {}, {
    class: N.classes.join(" ")
  });
  j && (i[sg] = "");
  var u = tM({}, N.styles);
  Li(D) && (u.transform = cx({
    transform: D,
    startCentered: !0,
    width: I,
    height: g
  }), u["-webkit-transform"] = u.transform);
  var e = xL(u);
  e.length > 0 && (i.style = e);
  var C = [];
  return C.push({
    tag: "span",
    attributes: i,
    children: [A]
  }), t && C.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [t]
  }), C;
}
function Rx(M) {
  var A = M.content, I = M.title, g = M.extra, D = tM(tM(tM({}, g.attributes), I ? {
    title: I
  } : {}), {}, {
    class: g.classes.join(" ")
  }), t = xL(g.styles);
  t.length > 0 && (D.style = t);
  var N = [];
  return N.push({
    tag: "span",
    attributes: D,
    children: [A]
  }), I && N.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [I]
  }), N;
}
var ej = XA.styles;
function iu(M) {
  var A = M[0], I = M[1], g = M.slice(4), D = Ai(g, 1), t = D[0], N = null;
  return Array.isArray(t) ? N = {
    tag: "g",
    attributes: {
      class: "".concat(jM.cssPrefix, "-").concat(Cg.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(jM.cssPrefix, "-").concat(Cg.SECONDARY),
        fill: "currentColor",
        d: t[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(jM.cssPrefix, "-").concat(Cg.PRIMARY),
        fill: "currentColor",
        d: t[1]
      }
    }]
  } : N = {
    tag: "path",
    attributes: {
      fill: "currentColor",
      d: t
    }
  }, {
    found: !0,
    width: A,
    height: I,
    icon: N
  };
}
var Hx = {
  found: !1,
  width: 512,
  height: 512
};
function _x(M, A) {
  !La && !jM.showMissingIcons && M && console.error('Icon with name "'.concat(M, '" and prefix "').concat(A, '" is missing.'));
}
function eu(M, A) {
  var I = A;
  return A === "fa" && jM.styleDefault !== null && (A = HI()), new Promise(function(g, D) {
    if (zI("missingIconAbstract"), I === "fa") {
      var t = oa(M) || {};
      M = t.iconName || M, A = t.prefix || A;
    }
    if (M && A && ej[A] && ej[A][M]) {
      var N = ej[A][M];
      return g(iu(N));
    }
    _x(M, A), g(tM(tM({}, Hx), {}, {
      icon: jM.showMissingIcons && M ? zI("missingIconAbstract") || {} : {}
    }));
  });
}
var B4 = function() {
}, Su = jM.measurePerformance && Vt && Vt.mark && Vt.measure ? Vt : {
  mark: B4,
  measure: B4
}, VD = 'FA "6.2.0"', $x = function(A) {
  return Su.mark("".concat(VD, " ").concat(A, " begins")), function() {
    return la(A);
  };
}, la = function(A) {
  Su.mark("".concat(VD, " ").concat(A, " ends")), Su.measure("".concat(VD, " ").concat(A), "".concat(VD, " ").concat(A, " begins"), "".concat(VD, " ").concat(A, " ends"));
}, Si = {
  begin: $x,
  end: la
}, nN = function() {
};
function F4(M) {
  var A = M.getAttribute ? M.getAttribute(sg) : null;
  return typeof A == "string";
}
function qx(M) {
  var A = M.getAttribute ? M.getAttribute(gi) : null, I = M.getAttribute ? M.getAttribute(Di) : null;
  return A && I;
}
function Kx(M) {
  return M && M.classList && M.classList.contains && M.classList.contains(jM.replacementClass);
}
function Mo() {
  if (jM.autoReplaceSvg === !0)
    return xN.replace;
  var M = xN[jM.autoReplaceSvg];
  return M || xN.replace;
}
function Ao(M) {
  return ZM.createElementNS("http://www.w3.org/2000/svg", M);
}
function Io(M) {
  return ZM.createElement(M);
}
function sa(M) {
  var A = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, I = A.ceFn, g = I === void 0 ? M.tag === "svg" ? Ao : Io : I;
  if (typeof M == "string")
    return ZM.createTextNode(M);
  var D = g(M.tag);
  Object.keys(M.attributes || []).forEach(function(N) {
    D.setAttribute(N, M.attributes[N]);
  });
  var t = M.children || [];
  return t.forEach(function(N) {
    D.appendChild(sa(N, {
      ceFn: g
    }));
  }), D;
}
function go(M) {
  var A = " ".concat(M.outerHTML, " ");
  return A = "".concat(A, "Font Awesome fontawesome.com "), A;
}
var xN = {
  replace: function(A) {
    var I = A[0];
    if (I.parentNode)
      if (A[1].forEach(function(D) {
        I.parentNode.insertBefore(sa(D), I);
      }), I.getAttribute(sg) === null && jM.keepOriginalSource) {
        var g = ZM.createComment(go(I));
        I.parentNode.replaceChild(g, I);
      } else
        I.remove();
  },
  nest: function(A) {
    var I = A[0], g = A[1];
    if (~Ni(I).indexOf(jM.replacementClass))
      return xN.replace(A);
    var D = new RegExp("".concat(jM.cssPrefix, "-.*"));
    if (delete g[0].attributes.id, g[0].attributes.class) {
      var t = g[0].attributes.class.split(" ").reduce(function(L, j) {
        return j === jM.replacementClass || j.match(D) ? L.toSvg.push(j) : L.toNode.push(j), L;
      }, {
        toNode: [],
        toSvg: []
      });
      g[0].attributes.class = t.toSvg.join(" "), t.toNode.length === 0 ? I.removeAttribute("class") : I.setAttribute("class", t.toNode.join(" "));
    }
    var N = g.map(function(L) {
      return zt(L);
    }).join(`
`);
    I.setAttribute(sg, ""), I.innerHTML = N;
  }
};
function X4(M) {
  M();
}
function ca(M, A) {
  var I = typeof A == "function" ? A : nN;
  if (M.length === 0)
    I();
  else {
    var g = X4;
    jM.mutateApproach === Lx && (g = RI.requestAnimationFrame || X4), g(function() {
      var D = Mo(), t = Si.begin("mutate");
      M.map(D), t(), I();
    });
  }
}
var Ci = !1;
function ra() {
  Ci = !0;
}
function Cu() {
  Ci = !1;
}
var VN = null;
function R4(M) {
  if (!!Q4 && !!jM.observeMutations) {
    var A = M.treeCallback, I = A === void 0 ? nN : A, g = M.nodeCallback, D = g === void 0 ? nN : g, t = M.pseudoElementsCallback, N = t === void 0 ? nN : t, L = M.observeMutationsRoot, j = L === void 0 ? ZM : L;
    VN = new Q4(function(i) {
      if (!Ci) {
        var u = HI();
        dD(i).forEach(function(e) {
          if (e.type === "childList" && e.addedNodes.length > 0 && !F4(e.addedNodes[0]) && (jM.searchPseudoElements && N(e.target), I(e.target)), e.type === "attributes" && e.target.parentNode && jM.searchPseudoElements && N(e.target.parentNode), e.type === "attributes" && F4(e.target) && ~ax.indexOf(e.attributeName))
            if (e.attributeName === "class" && qx(e.target)) {
              var C = yL(Ni(e.target)), a = C.prefix, w = C.iconName;
              e.target.setAttribute(gi, a || u), w && e.target.setAttribute(Di, w);
            } else
              Kx(e.target) && D(e.target);
        });
      }
    }), bI && VN.observe(j, {
      childList: !0,
      attributes: !0,
      characterData: !0,
      subtree: !0
    });
  }
}
function Do() {
  !VN || VN.disconnect();
}
function to(M) {
  var A = M.getAttribute("style"), I = [];
  return A && (I = A.split(";").reduce(function(g, D) {
    var t = D.split(":"), N = t[0], L = t.slice(1);
    return N && L.length > 0 && (g[N] = L.join(":").trim()), g;
  }, {})), I;
}
function No(M) {
  var A = M.getAttribute("data-prefix"), I = M.getAttribute("data-icon"), g = M.innerText !== void 0 ? M.innerText.trim() : "", D = yL(Ni(M));
  return D.prefix || (D.prefix = HI()), A && I && (D.prefix = A, D.iconName = I), D.iconName && D.prefix || (D.prefix && g.length > 0 && (D.iconName = Qx(D.prefix, M.innerText) || ui(D.prefix, Nu(M.innerText))), !D.iconName && jM.autoFetchSvg && M.firstChild && M.firstChild.nodeType === Node.TEXT_NODE && (D.iconName = M.firstChild.data)), D;
}
function Lo(M) {
  var A = dD(M.attributes).reduce(function(D, t) {
    return D.name !== "class" && D.name !== "style" && (D[t.name] = t.value), D;
  }, {}), I = M.getAttribute("title"), g = M.getAttribute("data-fa-title-id");
  return jM.autoA11y && (I ? A["aria-labelledby"] = "".concat(jM.replacementClass, "-title-").concat(g || Ct()) : (A["aria-hidden"] = "true", A.focusable = "false")), A;
}
function jo() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: DI,
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
function H4(M) {
  var A = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: !0
  }, I = No(M), g = I.iconName, D = I.prefix, t = I.rest, N = Lo(M), L = ju("parseNodeAttributes", {}, M), j = A.styleParser ? to(M) : [];
  return tM({
    iconName: g,
    title: M.getAttribute("title"),
    titleId: M.getAttribute("data-fa-title-id"),
    prefix: D,
    transform: DI,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    symbol: !1,
    extra: {
      classes: t,
      styles: j,
      attributes: N
    }
  }, L);
}
var uo = XA.styles;
function za(M) {
  var A = jM.autoReplaceSvg === "nest" ? H4(M, {
    styleParser: !1
  }) : H4(M);
  return ~A.extra.classes.indexOf(ja) ? zI("generateLayersText", M, A) : zI("generateSvgReplacementMutation", M, A);
}
var _I = /* @__PURE__ */ new Set();
ti.map(function(M) {
  _I.add("fa-".concat(M));
});
Object.keys(ut[VM]).map(_I.add.bind(_I));
Object.keys(ut[AA]).map(_I.add.bind(_I));
_I = ct(_I);
function _4(M) {
  var A = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!bI)
    return Promise.resolve();
  var I = ZM.documentElement.classList, g = function(e) {
    return I.add("".concat(f4, "-").concat(e));
  }, D = function(e) {
    return I.remove("".concat(f4, "-").concat(e));
  }, t = jM.autoFetchSvg ? _I : ti.map(function(u) {
    return "fa-".concat(u);
  }).concat(Object.keys(uo));
  t.includes("fa") || t.push("fa");
  var N = [".".concat(ja, ":not([").concat(sg, "])")].concat(t.map(function(u) {
    return ".".concat(u, ":not([").concat(sg, "])");
  })).join(", ");
  if (N.length === 0)
    return Promise.resolve();
  var L = [];
  try {
    L = dD(M.querySelectorAll(N));
  } catch {
  }
  if (L.length > 0)
    g("pending"), D("complete");
  else
    return Promise.resolve();
  var j = Si.begin("onTree"), i = L.reduce(function(u, e) {
    try {
      var C = za(e);
      C && u.push(C);
    } catch (a) {
      La || a.name === "MissingIcon" && console.error(a);
    }
    return u;
  }, []);
  return new Promise(function(u, e) {
    Promise.all(i).then(function(C) {
      ca(C, function() {
        g("active"), g("complete"), D("pending"), typeof A == "function" && A(), j(), u();
      });
    }).catch(function(C) {
      j(), e(C);
    });
  });
}
function io(M) {
  var A = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  za(M).then(function(I) {
    I && ca([I], A);
  });
}
function eo(M) {
  return function(A) {
    var I = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, g = (A || {}).icon ? A : uu(A || {}), D = I.mask;
    return D && (D = (D || {}).icon ? D : uu(D || {})), M(g, tM(tM({}, I), {}, {
      mask: D
    }));
  };
}
var So = function(A) {
  var I = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, g = I.transform, D = g === void 0 ? DI : g, t = I.symbol, N = t === void 0 ? !1 : t, L = I.mask, j = L === void 0 ? null : L, i = I.maskId, u = i === void 0 ? null : i, e = I.title, C = e === void 0 ? null : e, a = I.titleId, w = a === void 0 ? null : a, n = I.classes, o = n === void 0 ? [] : n, E = I.attributes, l = E === void 0 ? {} : E, Y = I.styles, z = Y === void 0 ? {} : Y;
  if (!!A) {
    var m = A.prefix, W = A.iconName, v = A.icon;
    return lL(tM({
      type: "icon"
    }, A), function() {
      return cg("beforeDOMElementCreation", {
        iconDefinition: A,
        params: I
      }), jM.autoA11y && (C ? l["aria-labelledby"] = "".concat(jM.replacementClass, "-title-").concat(w || Ct()) : (l["aria-hidden"] = "true", l.focusable = "false")), ei({
        icons: {
          main: iu(v),
          mask: j ? iu(j.icon) : {
            found: !1,
            width: null,
            height: null,
            icon: {}
          }
        },
        prefix: m,
        iconName: W,
        transform: tM(tM({}, DI), D),
        symbol: N,
        title: C,
        maskId: u,
        titleId: w,
        extra: {
          attributes: l,
          styles: z,
          classes: o
        }
      });
    });
  }
}, Co = {
  mixout: function() {
    return {
      icon: eo(So)
    };
  },
  hooks: function() {
    return {
      mutationObserverCallbacks: function(I) {
        return I.treeCallback = _4, I.nodeCallback = io, I;
      }
    };
  },
  provides: function(A) {
    A.i2svg = function(I) {
      var g = I.node, D = g === void 0 ? ZM : g, t = I.callback, N = t === void 0 ? function() {
      } : t;
      return _4(D, N);
    }, A.generateSvgReplacementMutation = function(I, g) {
      var D = g.iconName, t = g.title, N = g.titleId, L = g.prefix, j = g.transform, i = g.symbol, u = g.mask, e = g.maskId, C = g.extra;
      return new Promise(function(a, w) {
        Promise.all([eu(D, L), u.iconName ? eu(u.iconName, u.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then(function(n) {
          var o = Ai(n, 2), E = o[0], l = o[1];
          a([I, ei({
            icons: {
              main: E,
              mask: l
            },
            prefix: L,
            iconName: D,
            transform: j,
            symbol: i,
            maskId: e,
            title: t,
            titleId: N,
            extra: C,
            watchable: !0
          })]);
        }).catch(w);
      });
    }, A.generateAbstractIcon = function(I) {
      var g = I.children, D = I.attributes, t = I.main, N = I.transform, L = I.styles, j = xL(L);
      j.length > 0 && (D.style = j);
      var i;
      return Li(N) && (i = zI("generateAbstractTransformGrouping", {
        main: t,
        transform: N,
        containerWidth: t.width,
        iconWidth: t.width
      })), g.push(i || t.icon), {
        children: g,
        attributes: D
      };
    };
  }
}, ao = {
  mixout: function() {
    return {
      layer: function(I) {
        var g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, D = g.classes, t = D === void 0 ? [] : D;
        return lL({
          type: "layer"
        }, function() {
          cg("beforeDOMElementCreation", {
            assembler: I,
            params: g
          });
          var N = [];
          return I(function(L) {
            Array.isArray(L) ? L.map(function(j) {
              N = N.concat(j.abstract);
            }) : N = N.concat(L.abstract);
          }), [{
            tag: "span",
            attributes: {
              class: ["".concat(jM.cssPrefix, "-layers")].concat(ct(t)).join(" ")
            },
            children: N
          }];
        });
      }
    };
  }
}, wo = {
  mixout: function() {
    return {
      counter: function(I) {
        var g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, D = g.title, t = D === void 0 ? null : D, N = g.classes, L = N === void 0 ? [] : N, j = g.attributes, i = j === void 0 ? {} : j, u = g.styles, e = u === void 0 ? {} : u;
        return lL({
          type: "counter",
          content: I
        }, function() {
          return cg("beforeDOMElementCreation", {
            content: I,
            params: g
          }), Rx({
            content: I.toString(),
            title: t,
            extra: {
              attributes: i,
              styles: e,
              classes: ["".concat(jM.cssPrefix, "-layers-counter")].concat(ct(L))
            }
          });
        });
      }
    };
  }
}, Eo = {
  mixout: function() {
    return {
      text: function(I) {
        var g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, D = g.transform, t = D === void 0 ? DI : D, N = g.title, L = N === void 0 ? null : N, j = g.classes, i = j === void 0 ? [] : j, u = g.attributes, e = u === void 0 ? {} : u, C = g.styles, a = C === void 0 ? {} : C;
        return lL({
          type: "text",
          content: I
        }, function() {
          return cg("beforeDOMElementCreation", {
            content: I,
            params: g
          }), P4({
            content: I,
            transform: tM(tM({}, DI), t),
            title: L,
            extra: {
              attributes: e,
              styles: a,
              classes: ["".concat(jM.cssPrefix, "-layers-text")].concat(ct(i))
            }
          });
        });
      }
    };
  },
  provides: function(A) {
    A.generateLayersText = function(I, g) {
      var D = g.title, t = g.transform, N = g.extra, L = null, j = null;
      if (Da) {
        var i = parseInt(getComputedStyle(I).fontSize, 10), u = I.getBoundingClientRect();
        L = u.width / i, j = u.height / i;
      }
      return jM.autoA11y && !D && (N.attributes["aria-hidden"] = "true"), Promise.resolve([I, P4({
        content: I.innerHTML,
        width: L,
        height: j,
        transform: t,
        title: D,
        extra: N,
        watchable: !0
      })]);
    };
  }
}, To = new RegExp('"', "ug"), $4 = [1105920, 1112319];
function no(M) {
  var A = M.replace(To, ""), I = hx(A, 0), g = I >= $4[0] && I <= $4[1], D = A.length === 2 ? A[0] === A[1] : !1;
  return {
    value: Nu(D ? A[0] : A),
    isSecondary: g || D
  };
}
function q4(M, A) {
  var I = "".concat(Nx).concat(A.replace(":", "-"));
  return new Promise(function(g, D) {
    if (M.getAttribute(I) !== null)
      return g();
    var t = dD(M.children), N = t.filter(function(v) {
      return v.getAttribute(tu) === A;
    })[0], L = RI.getComputedStyle(M, A), j = L.getPropertyValue("font-family").match(ex), i = L.getPropertyValue("font-weight"), u = L.getPropertyValue("content");
    if (N && !j)
      return M.removeChild(N), g();
    if (j && u !== "none" && u !== "") {
      var e = L.getPropertyValue("content"), C = ~["Sharp"].indexOf(j[2]) ? AA : VM, a = ~["Solid", "Regular", "Light", "Thin", "Duotone", "Brands", "Kit"].indexOf(j[2]) ? it[C][j[2].toLowerCase()] : Sx[C][i], w = no(e), n = w.value, o = w.isSecondary, E = j[0].startsWith("FontAwesome"), l = ui(a, n), Y = l;
      if (E) {
        var z = fx(n);
        z.iconName && z.prefix && (l = z.iconName, a = z.prefix);
      }
      if (l && !o && (!N || N.getAttribute(gi) !== a || N.getAttribute(Di) !== Y)) {
        M.setAttribute(I, Y), N && M.removeChild(N);
        var m = jo(), W = m.extra;
        W.attributes[tu] = A, eu(l, a).then(function(v) {
          var d = ei(tM(tM({}, m), {}, {
            icons: {
              main: v,
              mask: ii()
            },
            prefix: a,
            iconName: Y,
            extra: W,
            watchable: !0
          })), U = ZM.createElement("svg");
          A === "::before" ? M.insertBefore(U, M.firstChild) : M.appendChild(U), U.outerHTML = d.map(function(Z) {
            return zt(Z);
          }).join(`
`), M.removeAttribute(I), g();
        }).catch(D);
      } else
        g();
    } else
      g();
  });
}
function xo(M) {
  return Promise.all([q4(M, "::before"), q4(M, "::after")]);
}
function oo(M) {
  return M.parentNode !== document.head && !~jx.indexOf(M.tagName.toUpperCase()) && !M.getAttribute(tu) && (!M.parentNode || M.parentNode.tagName !== "svg");
}
function K4(M) {
  if (!!bI)
    return new Promise(function(A, I) {
      var g = dD(M.querySelectorAll("*")).filter(oo).map(xo), D = Si.begin("searchPseudoElements");
      ra(), Promise.all(g).then(function() {
        D(), Cu(), A();
      }).catch(function() {
        D(), Cu(), I();
      });
    });
}
var yo = {
  hooks: function() {
    return {
      mutationObserverCallbacks: function(I) {
        return I.pseudoElementsCallback = K4, I;
      }
    };
  },
  provides: function(A) {
    A.pseudoElements2svg = function(I) {
      var g = I.node, D = g === void 0 ? ZM : g;
      jM.searchPseudoElements && K4(D);
    };
  }
}, Me = !1, lo = {
  mixout: function() {
    return {
      dom: {
        unwatch: function() {
          ra(), Me = !0;
        }
      }
    };
  },
  hooks: function() {
    return {
      bootstrap: function() {
        R4(ju("mutationObserverCallbacks", {}));
      },
      noAuto: function() {
        Do();
      },
      watch: function(I) {
        var g = I.observeMutationsRoot;
        Me ? Cu() : R4(ju("mutationObserverCallbacks", {
          observeMutationsRoot: g
        }));
      }
    };
  }
}, Ae = function(A) {
  var I = {
    size: 16,
    x: 0,
    y: 0,
    flipX: !1,
    flipY: !1,
    rotate: 0
  };
  return A.toLowerCase().split(" ").reduce(function(g, D) {
    var t = D.toLowerCase().split("-"), N = t[0], L = t.slice(1).join("-");
    if (N && L === "h")
      return g.flipX = !0, g;
    if (N && L === "v")
      return g.flipY = !0, g;
    if (L = parseFloat(L), isNaN(L))
      return g;
    switch (N) {
      case "grow":
        g.size = g.size + L;
        break;
      case "shrink":
        g.size = g.size - L;
        break;
      case "left":
        g.x = g.x - L;
        break;
      case "right":
        g.x = g.x + L;
        break;
      case "up":
        g.y = g.y - L;
        break;
      case "down":
        g.y = g.y + L;
        break;
      case "rotate":
        g.rotate = g.rotate + L;
        break;
    }
    return g;
  }, I);
}, so = {
  mixout: function() {
    return {
      parse: {
        transform: function(I) {
          return Ae(I);
        }
      }
    };
  },
  hooks: function() {
    return {
      parseNodeAttributes: function(I, g) {
        var D = g.getAttribute("data-fa-transform");
        return D && (I.transform = Ae(D)), I;
      }
    };
  },
  provides: function(A) {
    A.generateAbstractTransformGrouping = function(I) {
      var g = I.main, D = I.transform, t = I.containerWidth, N = I.iconWidth, L = {
        transform: "translate(".concat(t / 2, " 256)")
      }, j = "translate(".concat(D.x * 32, ", ").concat(D.y * 32, ") "), i = "scale(".concat(D.size / 16 * (D.flipX ? -1 : 1), ", ").concat(D.size / 16 * (D.flipY ? -1 : 1), ") "), u = "rotate(".concat(D.rotate, " 0 0)"), e = {
        transform: "".concat(j, " ").concat(i, " ").concat(u)
      }, C = {
        transform: "translate(".concat(N / 2 * -1, " -256)")
      }, a = {
        outer: L,
        inner: e,
        path: C
      };
      return {
        tag: "g",
        attributes: tM({}, a.outer),
        children: [{
          tag: "g",
          attributes: tM({}, a.inner),
          children: [{
            tag: g.icon.tag,
            children: g.icon.children,
            attributes: tM(tM({}, g.icon.attributes), a.path)
          }]
        }]
      };
    };
  }
}, Sj = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function Ie(M) {
  var A = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return M.attributes && (M.attributes.fill || A) && (M.attributes.fill = "black"), M;
}
function co(M) {
  return M.tag === "g" ? M.children : [M];
}
var ro = {
  hooks: function() {
    return {
      parseNodeAttributes: function(I, g) {
        var D = g.getAttribute("data-fa-mask"), t = D ? yL(D.split(" ").map(function(N) {
          return N.trim();
        })) : ii();
        return t.prefix || (t.prefix = HI()), I.mask = t, I.maskId = g.getAttribute("data-fa-mask-id"), I;
      }
    };
  },
  provides: function(A) {
    A.generateAbstractMask = function(I) {
      var g = I.children, D = I.attributes, t = I.main, N = I.mask, L = I.maskId, j = I.transform, i = t.width, u = t.icon, e = N.width, C = N.icon, a = sx({
        transform: j,
        containerWidth: e,
        iconWidth: i
      }), w = {
        tag: "rect",
        attributes: tM(tM({}, Sj), {}, {
          fill: "white"
        })
      }, n = u.children ? {
        children: u.children.map(Ie)
      } : {}, o = {
        tag: "g",
        attributes: tM({}, a.inner),
        children: [Ie(tM({
          tag: u.tag,
          attributes: tM(tM({}, u.attributes), a.path)
        }, n))]
      }, E = {
        tag: "g",
        attributes: tM({}, a.outer),
        children: [o]
      }, l = "mask-".concat(L || Ct()), Y = "clip-".concat(L || Ct()), z = {
        tag: "mask",
        attributes: tM(tM({}, Sj), {}, {
          id: l,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        }),
        children: [w, E]
      }, m = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: Y
          },
          children: co(C)
        }, z]
      };
      return g.push(m, {
        tag: "rect",
        attributes: tM({
          fill: "currentColor",
          "clip-path": "url(#".concat(Y, ")"),
          mask: "url(#".concat(l, ")")
        }, Sj)
      }), {
        children: g,
        attributes: D
      };
    };
  }
}, zo = {
  provides: function(A) {
    var I = !1;
    RI.matchMedia && (I = RI.matchMedia("(prefers-reduced-motion: reduce)").matches), A.missingIconAbstract = function() {
      var g = [], D = {
        fill: "currentColor"
      }, t = {
        attributeType: "XML",
        repeatCount: "indefinite",
        dur: "2s"
      };
      g.push({
        tag: "path",
        attributes: tM(tM({}, D), {}, {
          d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
        })
      });
      var N = tM(tM({}, t), {}, {
        attributeName: "opacity"
      }), L = {
        tag: "circle",
        attributes: tM(tM({}, D), {}, {
          cx: "256",
          cy: "364",
          r: "28"
        }),
        children: []
      };
      return I || L.children.push({
        tag: "animate",
        attributes: tM(tM({}, t), {}, {
          attributeName: "r",
          values: "28;14;28;28;14;28;"
        })
      }, {
        tag: "animate",
        attributes: tM(tM({}, N), {}, {
          values: "1;0;1;1;0;1;"
        })
      }), g.push(L), g.push({
        tag: "path",
        attributes: tM(tM({}, D), {}, {
          opacity: "1",
          d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
        }),
        children: I ? [] : [{
          tag: "animate",
          attributes: tM(tM({}, N), {}, {
            values: "1;0;0;0;0;1;"
          })
        }]
      }), I || g.push({
        tag: "path",
        attributes: tM(tM({}, D), {}, {
          opacity: "0",
          d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
        }),
        children: [{
          tag: "animate",
          attributes: tM(tM({}, N), {}, {
            values: "0;0;1;1;0;0;"
          })
        }]
      }), {
        tag: "g",
        attributes: {
          class: "missing"
        },
        children: g
      };
    };
  }
}, Yo = {
  hooks: function() {
    return {
      parseNodeAttributes: function(I, g) {
        var D = g.getAttribute("data-fa-symbol"), t = D === null ? !1 : D === "" ? !0 : D;
        return I.symbol = t, I;
      }
    };
  }
}, mo = [zx, Co, ao, wo, Eo, yo, lo, so, ro, zo, Yo];
Jx(mo, {
  mixoutsTo: WA
});
WA.noAuto;
var Ya = WA.config, IA = WA.library;
WA.dom;
var ZN = WA.parse;
WA.findIconDefinition;
WA.toHtml;
var Uo = WA.icon;
WA.layer;
var ho = WA.text;
WA.counter;
function ge(M, A) {
  var I = Object.keys(M);
  if (Object.getOwnPropertySymbols) {
    var g = Object.getOwnPropertySymbols(M);
    A && (g = g.filter(function(D) {
      return Object.getOwnPropertyDescriptor(M, D).enumerable;
    })), I.push.apply(I, g);
  }
  return I;
}
function BA(M) {
  for (var A = 1; A < arguments.length; A++) {
    var I = arguments[A] != null ? arguments[A] : {};
    A % 2 ? ge(Object(I), !0).forEach(function(g) {
      lA(M, g, I[g]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(M, Object.getOwnPropertyDescriptors(I)) : ge(Object(I)).forEach(function(g) {
      Object.defineProperty(M, g, Object.getOwnPropertyDescriptor(I, g));
    });
  }
  return M;
}
function PN(M) {
  return PN = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(A) {
    return typeof A;
  } : function(A) {
    return A && typeof Symbol == "function" && A.constructor === Symbol && A !== Symbol.prototype ? "symbol" : typeof A;
  }, PN(M);
}
function lA(M, A, I) {
  return A in M ? Object.defineProperty(M, A, {
    value: I,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : M[A] = I, M;
}
function Oo(M, A) {
  if (M == null)
    return {};
  var I = {}, g = Object.keys(M), D, t;
  for (t = 0; t < g.length; t++)
    D = g[t], !(A.indexOf(D) >= 0) && (I[D] = M[D]);
  return I;
}
function bo(M, A) {
  if (M == null)
    return {};
  var I = Oo(M, A), g, D;
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(M);
    for (D = 0; D < t.length; D++)
      g = t[D], !(A.indexOf(g) >= 0) && (!Object.prototype.propertyIsEnumerable.call(M, g) || (I[g] = M[g]));
  }
  return I;
}
function au(M) {
  return Wo(M) || ko(M) || po(M) || Qo();
}
function Wo(M) {
  if (Array.isArray(M))
    return wu(M);
}
function ko(M) {
  if (typeof Symbol < "u" && M[Symbol.iterator] != null || M["@@iterator"] != null)
    return Array.from(M);
}
function po(M, A) {
  if (!!M) {
    if (typeof M == "string")
      return wu(M, A);
    var I = Object.prototype.toString.call(M).slice(8, -1);
    if (I === "Object" && M.constructor && (I = M.constructor.name), I === "Map" || I === "Set")
      return Array.from(M);
    if (I === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(I))
      return wu(M, A);
  }
}
function wu(M, A) {
  (A == null || A > M.length) && (A = M.length);
  for (var I = 0, g = new Array(A); I < A; I++)
    g[I] = M[I];
  return g;
}
function Qo() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var fo = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, da = { exports: {} };
(function(M) {
  (function(A) {
    var I = function(E, l, Y) {
      if (!i(l) || e(l) || C(l) || a(l) || j(l))
        return l;
      var z, m = 0, W = 0;
      if (u(l))
        for (z = [], W = l.length; m < W; m++)
          z.push(I(E, l[m], Y));
      else {
        z = {};
        for (var v in l)
          Object.prototype.hasOwnProperty.call(l, v) && (z[E(v, Y)] = I(E, l[v], Y));
      }
      return z;
    }, g = function(E, l) {
      l = l || {};
      var Y = l.separator || "_", z = l.split || /(?=[A-Z])/;
      return E.split(z).join(Y);
    }, D = function(E) {
      return w(E) ? E : (E = E.replace(/[\-_\s]+(.)?/g, function(l, Y) {
        return Y ? Y.toUpperCase() : "";
      }), E.substr(0, 1).toLowerCase() + E.substr(1));
    }, t = function(E) {
      var l = D(E);
      return l.substr(0, 1).toUpperCase() + l.substr(1);
    }, N = function(E, l) {
      return g(E, l).toLowerCase();
    }, L = Object.prototype.toString, j = function(E) {
      return typeof E == "function";
    }, i = function(E) {
      return E === Object(E);
    }, u = function(E) {
      return L.call(E) == "[object Array]";
    }, e = function(E) {
      return L.call(E) == "[object Date]";
    }, C = function(E) {
      return L.call(E) == "[object RegExp]";
    }, a = function(E) {
      return L.call(E) == "[object Boolean]";
    }, w = function(E) {
      return E = E - 0, E === E;
    }, n = function(E, l) {
      var Y = l && "process" in l ? l.process : l;
      return typeof Y != "function" ? E : function(z, m) {
        return Y(z, E, m);
      };
    }, o = {
      camelize: D,
      decamelize: N,
      pascalize: t,
      depascalize: N,
      camelizeKeys: function(E, l) {
        return I(n(D, l), E);
      },
      decamelizeKeys: function(E, l) {
        return I(n(N, l), E, l);
      },
      pascalizeKeys: function(E, l) {
        return I(n(t, l), E);
      },
      depascalizeKeys: function() {
        return this.decamelizeKeys.apply(this, arguments);
      }
    };
    M.exports ? M.exports = o : A.humps = o;
  })(fo);
})(da);
var vo = da.exports, Go = ["class", "style"];
function Jo(M) {
  return M.split(";").map(function(A) {
    return A.trim();
  }).filter(function(A) {
    return A;
  }).reduce(function(A, I) {
    var g = I.indexOf(":"), D = vo.camelize(I.slice(0, g)), t = I.slice(g + 1).trim();
    return A[D] = t, A;
  }, {});
}
function Vo(M) {
  return M.split(/\s+/).reduce(function(A, I) {
    return A[I] = !0, A;
  }, {});
}
function ai(M) {
  var A = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, I = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof M == "string")
    return M;
  var g = (M.children || []).map(function(j) {
    return ai(j);
  }), D = Object.keys(M.attributes || {}).reduce(function(j, i) {
    var u = M.attributes[i];
    switch (i) {
      case "class":
        j.class = Vo(u);
        break;
      case "style":
        j.style = Jo(u);
        break;
      default:
        j.attrs[i] = u;
    }
    return j;
  }, {
    attrs: {},
    class: {},
    style: {}
  });
  I.class;
  var t = I.style, N = t === void 0 ? {} : t, L = bo(I, Go);
  return rM(M.tag, BA(BA(BA({}, A), {}, {
    class: D.class,
    style: BA(BA({}, D.style), N)
  }, D.attrs), L), g);
}
var ma = !1;
try {
  ma = !0;
} catch {
}
function Zo() {
  if (!ma && console && typeof console.error == "function") {
    var M;
    (M = console).error.apply(M, arguments);
  }
}
function qD(M, A) {
  return Array.isArray(A) && A.length > 0 || !Array.isArray(A) && A ? lA({}, M, A) : {};
}
function Po(M) {
  var A, I = (A = {
    "fa-spin": M.spin,
    "fa-pulse": M.pulse,
    "fa-fw": M.fixedWidth,
    "fa-border": M.border,
    "fa-li": M.listItem,
    "fa-inverse": M.inverse,
    "fa-flip": M.flip === !0,
    "fa-flip-horizontal": M.flip === "horizontal" || M.flip === "both",
    "fa-flip-vertical": M.flip === "vertical" || M.flip === "both"
  }, lA(A, "fa-".concat(M.size), M.size !== null), lA(A, "fa-rotate-".concat(M.rotation), M.rotation !== null), lA(A, "fa-pull-".concat(M.pull), M.pull !== null), lA(A, "fa-swap-opacity", M.swapOpacity), lA(A, "fa-bounce", M.bounce), lA(A, "fa-shake", M.shake), lA(A, "fa-beat", M.beat), lA(A, "fa-fade", M.fade), lA(A, "fa-beat-fade", M.beatFade), lA(A, "fa-flash", M.flash), lA(A, "fa-spin-pulse", M.spinPulse), lA(A, "fa-spin-reverse", M.spinReverse), A);
  return Object.keys(I).map(function(g) {
    return I[g] ? g : null;
  }).filter(function(g) {
    return g;
  });
}
function De(M) {
  if (M && PN(M) === "object" && M.prefix && M.iconName && M.icon)
    return M;
  if (ZN.icon)
    return ZN.icon(M);
  if (M === null)
    return null;
  if (PN(M) === "object" && M.prefix && M.iconName)
    return M;
  if (Array.isArray(M) && M.length === 2)
    return {
      prefix: M[0],
      iconName: M[1]
    };
  if (typeof M == "string")
    return {
      prefix: "fas",
      iconName: M
    };
}
var wg = f({
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
      validator: function(A) {
        return [!0, !1, "horizontal", "vertical", "both"].indexOf(A) > -1;
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
      validator: function(A) {
        return ["right", "left"].indexOf(A) > -1;
      }
    },
    pulse: {
      type: Boolean,
      default: !1
    },
    rotation: {
      type: [String, Number],
      default: null,
      validator: function(A) {
        return [90, 180, 270].indexOf(Number.parseInt(A, 10)) > -1;
      }
    },
    swapOpacity: {
      type: Boolean,
      default: !1
    },
    size: {
      type: String,
      default: null,
      validator: function(A) {
        return ["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"].indexOf(A) > -1;
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
  setup: function(A, I) {
    var g = I.attrs, D = x(function() {
      return De(A.icon);
    }), t = x(function() {
      return qD("classes", Po(A));
    }), N = x(function() {
      return qD("transform", typeof A.transform == "string" ? ZN.transform(A.transform) : A.transform);
    }), L = x(function() {
      return qD("mask", De(A.mask));
    }), j = x(function() {
      return Uo(D.value, BA(BA(BA(BA({}, t.value), N.value), L.value), {}, {
        symbol: A.symbol,
        title: A.title
      }));
    });
    dM(j, function(u) {
      if (!u)
        return Zo("Could not find one or more icon(s)", D.value, L.value);
    }, {
      immediate: !0
    });
    var i = x(function() {
      return j.value ? ai(j.value.abstract[0], {}, g) : null;
    });
    return function() {
      return i.value;
    };
  }
});
f({
  name: "FontAwesomeLayers",
  props: {
    fixedWidth: {
      type: Boolean,
      default: !1
    }
  },
  setup: function(A, I) {
    var g = I.slots, D = Ya.familyPrefix, t = x(function() {
      return ["".concat(D, "-layers")].concat(au(A.fixedWidth ? ["".concat(D, "-fw")] : []));
    });
    return function() {
      return rM("div", {
        class: t.value
      }, g.default ? g.default() : []);
    };
  }
});
f({
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
      validator: function(A) {
        return ["bottom-left", "bottom-right", "top-left", "top-right"].indexOf(A) > -1;
      }
    }
  },
  setup: function(A, I) {
    var g = I.attrs, D = Ya.familyPrefix, t = x(function() {
      return qD("classes", [].concat(au(A.counter ? ["".concat(D, "-layers-counter")] : []), au(A.position ? ["".concat(D, "-layers-").concat(A.position)] : [])));
    }), N = x(function() {
      return qD("transform", typeof A.transform == "string" ? ZN.transform(A.transform) : A.transform);
    }), L = x(function() {
      var i = ho(A.value.toString(), BA(BA({}, N.value), t.value)), u = i.abstract;
      return A.counter && (u[0].attributes.class = u[0].attributes.class.replace("fa-layers-text", "")), u[0];
    }), j = x(function() {
      return ai(L.value, {}, g);
    });
    return function() {
      return j.value;
    };
  }
});
var wi = {
  prefix: "fas",
  iconName: "pen-to-square",
  icon: [512, 512, ["edit"], "f044", "M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.8 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"]
}, Ei = {
  prefix: "fas",
  iconName: "circle-check",
  icon: [512, 512, [61533, "check-circle"], "f058", "M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"]
}, Bo = {
  prefix: "fas",
  iconName: "circle-question",
  icon: [512, 512, [62108, "question-circle"], "f059", "M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z"]
}, Ti = Bo, ni = {
  prefix: "fas",
  iconName: "arrow-left",
  icon: [448, 512, [8592], "f060", "M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"]
}, xi = {
  prefix: "fas",
  iconName: "circle-plus",
  icon: [512, 512, ["plus-circle"], "f055", "M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"]
}, Fo = {
  prefix: "fas",
  iconName: "table-list",
  icon: [512, 512, ["th-list"], "f00b", "M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zm64 0v64h64V96H64zm384 0H192v64H448V96zM64 224v64h64V224H64zm384 0H192v64H448V224zM64 352v64h64V352H64zm384 0H192v64H448V352z"]
}, oi = Fo, yi = {
  prefix: "fas",
  iconName: "circle-xmark",
  icon: [512, 512, [61532, "times-circle", "xmark-circle"], "f057", "M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"]
};
const Xo = /* @__PURE__ */ s("h6", null, "Title:", -1), Ro = /* @__PURE__ */ s("h6", null, "Description:", -1), Ho = /* @__PURE__ */ s("br", null, null, -1), _o = { key: 0 }, $o = /* @__PURE__ */ s("h6", null, "Options:", -1), qo = { class: "display-options" }, Ko = { class: "col-10" }, My = { class: "col-2" }, Ay = { class: "alert alert-success" }, Iy = /* @__PURE__ */ s("h6", null, "Add Option", -1), gy = { class: "row" }, Dy = /* @__PURE__ */ s("div", { class: "col-sm-2" }, [
  /* @__PURE__ */ s("h6", null, "Required Field:")
], -1), ty = { class: "col-sm-10" }, Ny = /* @__PURE__ */ s("br", null, null, -1), Ly = { class: "toggle-button-cover" }, jy = { class: "button-cover" }, uy = {
  class: "button r",
  id: "button-1"
}, iy = /* @__PURE__ */ s("div", { class: "knobs" }, null, -1), ey = /* @__PURE__ */ s("div", { class: "layer" }, null, -1), Sy = /* @__PURE__ */ s("br", null, null, -1), Cy = {
  key: 1,
  class: "row"
}, ay = /* @__PURE__ */ s("div", { class: "col-sm-2" }, [
  /* @__PURE__ */ s("h6", null, "Multiple Value Field:")
], -1), wy = { class: "col-sm-10" }, Ey = /* @__PURE__ */ s("br", null, null, -1), Ty = { class: "toggle-button-cover" }, ny = { class: "button-cover" }, xy = {
  class: "button r",
  id: "button-1"
}, oy = /* @__PURE__ */ s("div", { class: "knobs" }, null, -1), yy = /* @__PURE__ */ s("div", { class: "layer" }, null, -1), ly = /* @__PURE__ */ f({
  __name: "Field",
  props: {
    model: null
  },
  setup(M) {
    const A = M;
    IA.add(Ei), IA.add(yi), IA.add(wi), IA.add(xi), IA.add(Ti), IA.add(oi), IA.add(ni);
    const I = $u(A.model), g = YD(), D = gM(sT(g.lang, lT(uD(g.lang)))), t = () => {
      A.model.options.push(rT(D.value)), D.value.isExtendedInput = !1, D.value.isExtendedInputRequired = !1, D.value.optionText.values.forEach((L) => L.value = "");
    }, N = (L) => {
      var i, u;
      const j = (i = A.model.options) == null ? void 0 : i.findIndex((e) => e.id == L);
      (u = A.model.options) == null || u.splice(j, 1);
    };
    return A.model.type, UM.AttachmentField, (L, j) => {
      const i = sM("b-col"), u = sM("b-row");
      return T(), r(MM, null, [
        s("h5", null, F(M.model.type), 1),
        k(u, null, {
          default: b(() => [
            k(i, { class: "col-sm-2" }, {
              default: b(() => [
                Xo
              ]),
              _: 1
            }),
            k(i, { class: "col-sm-10" }, {
              default: b(() => [
                k(Iu, {
                  model: M.model.title,
                  "text-type": S(UM).ShortAnswer
                }, null, 8, ["model", "text-type"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        k(u, null, {
          default: b(() => [
            k(i, { class: "col-sm-2" }, {
              default: b(() => [
                Ro
              ]),
              _: 1
            }),
            k(i, { class: "col-sm-10" }, {
              default: b(() => [
                k(Iu, {
                  model: M.model.description,
                  "text-type": S(UM).Paragraph
                }, null, 8, ["model", "text-type"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        Ho,
        S(I) ? (T(), r("div", _o, [
          $o,
          s("div", qo, [
            k(S(vN), {
              class: "dragArea list-group w-full",
              list: M.model.options
            }, {
              default: b(() => [
                (T(!0), r(MM, null, aM(M.model.options, (e) => (T(), r("div", {
                  key: e.id,
                  class: "option-entry row"
                }, [
                  s("div", Ko, [
                    k(h4, {
                      model: e,
                      "option-field-type": M.model.type
                    }, null, 8, ["model", "option-field-type"])
                  ]),
                  s("div", My, [
                    k(S(wg), {
                      icon: "fa-solid fa-circle-xmark",
                      onClick: (C) => N(e.id),
                      class: "fa-icon delete"
                    }, null, 8, ["onClick"])
                  ])
                ]))), 128))
              ]),
              _: 1
            }, 8, ["list"])
          ]),
          s("div", Ay, [
            Iy,
            k(h4, {
              model: D.value,
              "option-field-type": M.model.type,
              "disable-inline-editing": !0
            }, null, 8, ["model", "option-field-type"]),
            k(S(wg), {
              icon: "fa-solid fa-circle-plus",
              onClick: j[0] || (j[0] = (e) => t()),
              class: "fa-icon plus add-option"
            })
          ])
        ])) : P("", !0),
        s("div", gy, [
          Dy,
          s("div", ty, [
            Ny,
            s("div", Ly, [
              s("div", jy, [
                s("div", uy, [
                  _M(s("input", {
                    "onUpdate:modelValue": j[1] || (j[1] = (e) => M.model.isRequired = e),
                    type: "checkbox",
                    class: "checkbox"
                  }, null, 512), [
                    [lg, M.model.isRequired]
                  ]),
                  iy,
                  ey
                ])
              ])
            ])
          ])
        ]),
        Sy,
        S(QC)(M.model) ? (T(), r("div", Cy, [
          ay,
          s("div", wy, [
            Ey,
            s("div", Ty, [
              s("div", ny, [
                s("div", xy, [
                  _M(s("input", {
                    "onUpdate:modelValue": j[2] || (j[2] = (e) => M.model.isMultiValued = e),
                    type: "checkbox",
                    class: "checkbox"
                  }, null, 512), [
                    [lg, M.model.isMultiValued]
                  ]),
                  oy,
                  yy
                ])
              ])
            ])
          ])
        ])) : P("", !0)
      ], 64);
    };
  }
});
const sy = { class: "tool-modal" }, cy = { class: "tool-modal-inner" }, ry = { class: "tool-modal-content" }, zy = /* @__PURE__ */ f({
  __name: "ToolBar",
  props: {
    open: { type: Boolean },
    index: null
  },
  setup(M) {
    const A = M, I = YD();
    CL(I);
    const g = (D) => {
      const t = {
        id: iM.create().toString(),
        title: uD(I.lang),
        description: uD(I.lang),
        type: D
      };
      QC(t) && (t.isMultiValued = !1, t.isRequired = !1, t.allowCustomOptionValues = !1), $u(t) && (t.options = []), I.form.fields.splice(A.index, 0, t);
    };
    return (D, t) => _M((T(), r("div", sy, [
      s("div", cy, [
        s("div", ry, [
          s("button", {
            onClick: t[0] || (t[0] = (N) => {
              g(S(UM).ShortAnswer), D.$emit("close");
            })
          }, "Short Answer"),
          s("button", {
            onClick: t[1] || (t[1] = (N) => {
              g(S(UM).Paragraph), D.$emit("close");
            })
          }, "Paragraph"),
          s("button", {
            onClick: t[2] || (t[2] = (N) => {
              g(S(UM).RichText), D.$emit("close");
            })
          }, "Rich Text"),
          s("button", {
            onClick: t[3] || (t[3] = (N) => {
              g(S(UM).Date), D.$emit("close");
            })
          }, "Date"),
          s("button", {
            onClick: t[4] || (t[4] = (N) => {
              g(S(UM).DateTime), D.$emit("close");
            })
          }, "Date/Time"),
          s("button", {
            onClick: t[5] || (t[5] = (N) => {
              g(S(UM).Decimal), D.$emit("close");
            })
          }, "Decimal"),
          s("button", {
            onClick: t[6] || (t[6] = (N) => {
              g(S(UM).Integer), D.$emit("close");
            })
          }, "Integer"),
          s("button", {
            onClick: t[7] || (t[7] = (N) => {
              g(S(UM).Email), D.$emit("close");
            })
          }, "Email"),
          s("button", {
            onClick: t[8] || (t[8] = (N) => {
              g(S(UM).Checkboxes), D.$emit("close");
            })
          }, "Checkboxes"),
          s("button", {
            onClick: t[9] || (t[9] = (N) => {
              g(S(UM).DataList), D.$emit("close");
            })
          }, "Data List"),
          s("button", {
            onClick: t[10] || (t[10] = (N) => {
              g(S(UM).RadioButtons), D.$emit("close");
            })
          }, "Radio Buttons"),
          s("button", {
            onClick: t[11] || (t[11] = (N) => {
              g(S(UM).DropDown), D.$emit("close");
            })
          }, "Drop Down"),
          s("button", {
            onClick: t[12] || (t[12] = (N) => {
              g(S(UM).InfoSection), D.$emit("close");
            })
          }, "Info Section"),
          s("button", {
            onClick: t[13] || (t[13] = (N) => {
              g(S(UM).AttachmentField), D.$emit("close");
            })
          }, "Attachment Field")
        ])
      ])
    ], 512)), [
      [rC, M.open]
    ]);
  }
});
const Yy = /* @__PURE__ */ PM(zy, [["__scopeId", "data-v-54a2a769"]]), Yt = (M) => (Mg("data-v-803b663d"), M = M(), Ag(), M), dy = /* @__PURE__ */ Yt(() => /* @__PURE__ */ s("div", null, [
  /* @__PURE__ */ s("h4", null, "Form properties")
], -1)), my = { class: "form-field-border" }, Uy = /* @__PURE__ */ Yt(() => /* @__PURE__ */ s("h6", null, "Name:", -1)), hy = /* @__PURE__ */ Yt(() => /* @__PURE__ */ s("br", null, null, -1)), Oy = /* @__PURE__ */ Yt(() => /* @__PURE__ */ s("h6", null, "Description:", -1)), by = /* @__PURE__ */ Yt(() => /* @__PURE__ */ s("h3", null, "Fields", -1)), Wy = { class: "insertFieldBtn fontSize2em" }, ky = { class: "insertFieldBtn fontSize2em" }, py = { class: "insertFieldBtn fontSize2em" }, Qy = /* @__PURE__ */ f({
  __name: "Form",
  props: {
    model: null
  },
  setup(M) {
    const A = M;
    IA.add(Ei), IA.add(yi), IA.add(wi), IA.add(xi), IA.add(Ti), IA.add(oi), IA.add(ni);
    const I = (t) => {
      var L, j;
      const N = (L = A.model.fields) == null ? void 0 : L.findIndex((i) => i.id == t);
      (j = A.model.fields) == null || j.splice(N, 1);
    }, g = gM(!1), D = gM(0);
    return (t, N) => {
      var e;
      const L = sM("b-col"), j = sM("b-form-input"), i = sM("b-row"), u = sM("b-form-textarea");
      return T(), r(MM, null, [
        dy,
        s("div", my, [
          k(i, null, {
            default: b(() => [
              k(L, { class: "col-sm-2" }, {
                default: b(() => [
                  Uy
                ]),
                _: 1
              }),
              k(L, { class: "col-sm-10" }, {
                default: b(() => [
                  k(j, {
                    modelValue: M.model.name,
                    "onUpdate:modelValue": N[0] || (N[0] = (C) => M.model.name = C)
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          hy,
          k(i, null, {
            default: b(() => [
              k(L, { class: "col-sm-2" }, {
                default: b(() => [
                  Oy
                ]),
                _: 1
              }),
              k(L, { class: "col-sm-10" }, {
                default: b(() => [
                  k(u, {
                    modelValue: M.model.description,
                    "onUpdate:modelValue": N[1] || (N[1] = (C) => M.model.description = C),
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
        by,
        s("div", Wy, [
          M.model.fields.length == 0 ? (T(), V(S(wg), {
            key: 0,
            icon: "fa-solid fa-circle-plus",
            onClick: N[2] || (N[2] = (C) => g.value = !0),
            class: "fa-icon plus"
          })) : P("", !0)
        ]),
        k(S(vN), {
          class: "dragArea list-group w-full",
          list: (e = M.model) == null ? void 0 : e.fields
        }, {
          default: b(() => {
            var C;
            return [
              (T(!0), r(MM, null, aM((C = M.model) == null ? void 0 : C.fields, (a, w) => (T(), r("div", {
                key: a.id,
                class: "form-field-border form-field"
              }, [
                s("div", ky, [
                  w == 0 ? (T(), V(S(wg), {
                    key: 0,
                    icon: "fa-solid fa-circle-plus",
                    onClick: (n) => {
                      g.value = !0, D.value = w;
                    },
                    class: "fa-icon plus"
                  }, null, 8, ["onClick"])) : P("", !0)
                ]),
                k(S(wg), {
                  icon: "fa-solid fa-circle-xmark",
                  onClick: (n) => I(a.id),
                  class: "fa-icon field-delete"
                }, null, 8, ["onClick"]),
                k(ly, { model: a }, null, 8, ["model"]),
                s("div", py, [
                  k(S(wg), {
                    icon: "fa-solid fa-circle-plus",
                    onClick: (n) => {
                      g.value = !0, D.value = w + 1;
                    },
                    class: "fa-icon plus"
                  }, null, 8, ["onClick"])
                ])
              ]))), 128))
            ];
          }),
          _: 1
        }, 8, ["list"]),
        k(Yy, {
          open: g.value,
          onClose: N[3] || (N[3] = (C) => g.value = !g.value),
          index: D.value
        }, null, 8, ["open", "index"])
      ], 64);
    };
  }
});
const fy = /* @__PURE__ */ PM(Qy, [["__scopeId", "data-v-803b663d"]]);
/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */
const Pg = typeof window < "u";
function vy(M) {
  return M.__esModule || M[Symbol.toStringTag] === "Module";
}
const QM = Object.assign;
function Cj(M, A) {
  const I = {};
  for (const g in A) {
    const D = A[g];
    I[g] = qA(D) ? D.map(M) : M(D);
  }
  return I;
}
const KD = () => {
}, qA = Array.isArray, Gy = /\/$/, Jy = (M) => M.replace(Gy, "");
function aj(M, A, I = "/") {
  let g, D = {}, t = "", N = "";
  const L = A.indexOf("#");
  let j = A.indexOf("?");
  return L < j && L >= 0 && (j = -1), j > -1 && (g = A.slice(0, j), t = A.slice(j + 1, L > -1 ? L : A.length), D = M(t)), L > -1 && (g = g || A.slice(0, L), N = A.slice(L, A.length)), g = By(g != null ? g : A, I), {
    fullPath: g + (t && "?") + t + N,
    path: g,
    query: D,
    hash: N
  };
}
function Vy(M, A) {
  const I = A.query ? M(A.query) : "";
  return A.path + (I && "?") + I + (A.hash || "");
}
function te(M, A) {
  return !A || !M.toLowerCase().startsWith(A.toLowerCase()) ? M : M.slice(A.length) || "/";
}
function Zy(M, A, I) {
  const g = A.matched.length - 1, D = I.matched.length - 1;
  return g > -1 && g === D && SD(A.matched[g], I.matched[D]) && Ua(A.params, I.params) && M(A.query) === M(I.query) && A.hash === I.hash;
}
function SD(M, A) {
  return (M.aliasOf || M) === (A.aliasOf || A);
}
function Ua(M, A) {
  if (Object.keys(M).length !== Object.keys(A).length)
    return !1;
  for (const I in M)
    if (!Py(M[I], A[I]))
      return !1;
  return !0;
}
function Py(M, A) {
  return qA(M) ? Ne(M, A) : qA(A) ? Ne(A, M) : M === A;
}
function Ne(M, A) {
  return qA(A) ? M.length === A.length && M.every((I, g) => I === A[g]) : M.length === 1 && M[0] === A;
}
function By(M, A) {
  if (M.startsWith("/"))
    return M;
  if (!M)
    return A;
  const I = A.split("/"), g = M.split("/");
  let D = I.length - 1, t, N;
  for (t = 0; t < g.length; t++)
    if (N = g[t], N !== ".")
      if (N === "..")
        D > 1 && D--;
      else
        break;
  return I.slice(0, D).join("/") + "/" + g.slice(t - (t === g.length ? 1 : 0)).join("/");
}
var at;
(function(M) {
  M.pop = "pop", M.push = "push";
})(at || (at = {}));
var Mt;
(function(M) {
  M.back = "back", M.forward = "forward", M.unknown = "";
})(Mt || (Mt = {}));
function Fy(M) {
  if (!M)
    if (Pg) {
      const A = document.querySelector("base");
      M = A && A.getAttribute("href") || "/", M = M.replace(/^\w+:\/\/[^\/]+/, "");
    } else
      M = "/";
  return M[0] !== "/" && M[0] !== "#" && (M = "/" + M), Jy(M);
}
const Xy = /^[^#]+#/;
function Ry(M, A) {
  return M.replace(Xy, "#") + A;
}
function Hy(M, A) {
  const I = document.documentElement.getBoundingClientRect(), g = M.getBoundingClientRect();
  return {
    behavior: A.behavior,
    left: g.left - I.left - (A.left || 0),
    top: g.top - I.top - (A.top || 0)
  };
}
const sL = () => ({
  left: window.pageXOffset,
  top: window.pageYOffset
});
function _y(M) {
  let A;
  if ("el" in M) {
    const I = M.el, g = typeof I == "string" && I.startsWith("#"), D = typeof I == "string" ? g ? document.getElementById(I.slice(1)) : document.querySelector(I) : I;
    if (!D)
      return;
    A = Hy(D, M);
  } else
    A = M;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(A) : window.scrollTo(A.left != null ? A.left : window.pageXOffset, A.top != null ? A.top : window.pageYOffset);
}
function Le(M, A) {
  return (history.state ? history.state.position - A : -1) + M;
}
const Eu = /* @__PURE__ */ new Map();
function $y(M, A) {
  Eu.set(M, A);
}
function qy(M) {
  const A = Eu.get(M);
  return Eu.delete(M), A;
}
let Ky = () => location.protocol + "//" + location.host;
function ha(M, A) {
  const { pathname: I, search: g, hash: D } = A, t = M.indexOf("#");
  if (t > -1) {
    let L = D.includes(M.slice(t)) ? M.slice(t).length : 1, j = D.slice(L);
    return j[0] !== "/" && (j = "/" + j), te(j, "");
  }
  return te(I, M) + g + D;
}
function Ml(M, A, I, g) {
  let D = [], t = [], N = null;
  const L = ({ state: C }) => {
    const a = ha(M, location), w = I.value, n = A.value;
    let o = 0;
    if (C) {
      if (I.value = a, A.value = C, N && N === w) {
        N = null;
        return;
      }
      o = n ? C.position - n.position : 0;
    } else
      g(a);
    D.forEach((E) => {
      E(I.value, w, {
        delta: o,
        type: at.pop,
        direction: o ? o > 0 ? Mt.forward : Mt.back : Mt.unknown
      });
    });
  };
  function j() {
    N = I.value;
  }
  function i(C) {
    D.push(C);
    const a = () => {
      const w = D.indexOf(C);
      w > -1 && D.splice(w, 1);
    };
    return t.push(a), a;
  }
  function u() {
    const { history: C } = window;
    !C.state || C.replaceState(QM({}, C.state, { scroll: sL() }), "");
  }
  function e() {
    for (const C of t)
      C();
    t = [], window.removeEventListener("popstate", L), window.removeEventListener("beforeunload", u);
  }
  return window.addEventListener("popstate", L), window.addEventListener("beforeunload", u), {
    pauseListeners: j,
    listen: i,
    destroy: e
  };
}
function je(M, A, I, g = !1, D = !1) {
  return {
    back: M,
    current: A,
    forward: I,
    replaced: g,
    position: window.history.length,
    scroll: D ? sL() : null
  };
}
function Al(M) {
  const { history: A, location: I } = window, g = {
    value: ha(M, I)
  }, D = { value: A.state };
  D.value || t(g.value, {
    back: null,
    current: g.value,
    forward: null,
    position: A.length - 1,
    replaced: !0,
    scroll: null
  }, !0);
  function t(j, i, u) {
    const e = M.indexOf("#"), C = e > -1 ? (I.host && document.querySelector("base") ? M : M.slice(e)) + j : Ky() + M + j;
    try {
      A[u ? "replaceState" : "pushState"](i, "", C), D.value = i;
    } catch (a) {
      console.error(a), I[u ? "replace" : "assign"](C);
    }
  }
  function N(j, i) {
    const u = QM({}, A.state, je(
      D.value.back,
      j,
      D.value.forward,
      !0
    ), i, { position: D.value.position });
    t(j, u, !0), g.value = j;
  }
  function L(j, i) {
    const u = QM(
      {},
      D.value,
      A.state,
      {
        forward: j,
        scroll: sL()
      }
    );
    t(u.current, u, !0);
    const e = QM({}, je(g.value, j, null), { position: u.position + 1 }, i);
    t(j, e, !1), g.value = j;
  }
  return {
    location: g,
    state: D,
    push: L,
    replace: N
  };
}
function Il(M) {
  M = Fy(M);
  const A = Al(M), I = Ml(M, A.state, A.location, A.replace);
  function g(t, N = !0) {
    N || I.pauseListeners(), history.go(t);
  }
  const D = QM({
    location: "",
    base: M,
    go: g,
    createHref: Ry.bind(null, M)
  }, A, I);
  return Object.defineProperty(D, "location", {
    enumerable: !0,
    get: () => A.location.value
  }), Object.defineProperty(D, "state", {
    enumerable: !0,
    get: () => A.state.value
  }), D;
}
function gl(M) {
  return M = location.host ? M || location.pathname + location.search : "", M.includes("#") || (M += "#"), Il(M);
}
function Dl(M) {
  return typeof M == "string" || M && typeof M == "object";
}
function Oa(M) {
  return typeof M == "string" || typeof M == "symbol";
}
const fI = {
  path: "/",
  name: void 0,
  params: {},
  query: {},
  hash: "",
  fullPath: "/",
  matched: [],
  meta: {},
  redirectedFrom: void 0
}, ba = Symbol("");
var ue;
(function(M) {
  M[M.aborted = 4] = "aborted", M[M.cancelled = 8] = "cancelled", M[M.duplicated = 16] = "duplicated";
})(ue || (ue = {}));
function CD(M, A) {
  return QM(new Error(), {
    type: M,
    [ba]: !0
  }, A);
}
function SI(M, A) {
  return M instanceof Error && ba in M && (A == null || !!(M.type & A));
}
const ie = "[^/]+?", tl = {
  sensitive: !1,
  strict: !1,
  start: !0,
  end: !0
}, Nl = /[.+*?^${}()[\]/\\]/g;
function Ll(M, A) {
  const I = QM({}, tl, A), g = [];
  let D = I.start ? "^" : "";
  const t = [];
  for (const i of M) {
    const u = i.length ? [] : [90];
    I.strict && !i.length && (D += "/");
    for (let e = 0; e < i.length; e++) {
      const C = i[e];
      let a = 40 + (I.sensitive ? 0.25 : 0);
      if (C.type === 0)
        e || (D += "/"), D += C.value.replace(Nl, "\\$&"), a += 40;
      else if (C.type === 1) {
        const { value: w, repeatable: n, optional: o, regexp: E } = C;
        t.push({
          name: w,
          repeatable: n,
          optional: o
        });
        const l = E || ie;
        if (l !== ie) {
          a += 10;
          try {
            new RegExp(`(${l})`);
          } catch (z) {
            throw new Error(`Invalid custom RegExp for param "${w}" (${l}): ` + z.message);
          }
        }
        let Y = n ? `((?:${l})(?:/(?:${l}))*)` : `(${l})`;
        e || (Y = o && i.length < 2 ? `(?:/${Y})` : "/" + Y), o && (Y += "?"), D += Y, a += 20, o && (a += -8), n && (a += -20), l === ".*" && (a += -50);
      }
      u.push(a);
    }
    g.push(u);
  }
  if (I.strict && I.end) {
    const i = g.length - 1;
    g[i][g[i].length - 1] += 0.7000000000000001;
  }
  I.strict || (D += "/?"), I.end ? D += "$" : I.strict && (D += "(?:/|$)");
  const N = new RegExp(D, I.sensitive ? "" : "i");
  function L(i) {
    const u = i.match(N), e = {};
    if (!u)
      return null;
    for (let C = 1; C < u.length; C++) {
      const a = u[C] || "", w = t[C - 1];
      e[w.name] = a && w.repeatable ? a.split("/") : a;
    }
    return e;
  }
  function j(i) {
    let u = "", e = !1;
    for (const C of M) {
      (!e || !u.endsWith("/")) && (u += "/"), e = !1;
      for (const a of C)
        if (a.type === 0)
          u += a.value;
        else if (a.type === 1) {
          const { value: w, repeatable: n, optional: o } = a, E = w in i ? i[w] : "";
          if (qA(E) && !n)
            throw new Error(`Provided param "${w}" is an array but it is not repeatable (* or + modifiers)`);
          const l = qA(E) ? E.join("/") : E;
          if (!l)
            if (o)
              C.length < 2 && (u.endsWith("/") ? u = u.slice(0, -1) : e = !0);
            else
              throw new Error(`Missing required param "${w}"`);
          u += l;
        }
    }
    return u || "/";
  }
  return {
    re: N,
    score: g,
    keys: t,
    parse: L,
    stringify: j
  };
}
function jl(M, A) {
  let I = 0;
  for (; I < M.length && I < A.length; ) {
    const g = A[I] - M[I];
    if (g)
      return g;
    I++;
  }
  return M.length < A.length ? M.length === 1 && M[0] === 40 + 40 ? -1 : 1 : M.length > A.length ? A.length === 1 && A[0] === 40 + 40 ? 1 : -1 : 0;
}
function ul(M, A) {
  let I = 0;
  const g = M.score, D = A.score;
  for (; I < g.length && I < D.length; ) {
    const t = jl(g[I], D[I]);
    if (t)
      return t;
    I++;
  }
  if (Math.abs(D.length - g.length) === 1) {
    if (ee(g))
      return 1;
    if (ee(D))
      return -1;
  }
  return D.length - g.length;
}
function ee(M) {
  const A = M[M.length - 1];
  return M.length > 0 && A[A.length - 1] < 0;
}
const il = {
  type: 0,
  value: ""
}, el = /[a-zA-Z0-9_]/;
function Sl(M) {
  if (!M)
    return [[]];
  if (M === "/")
    return [[il]];
  if (!M.startsWith("/"))
    throw new Error(`Invalid path "${M}"`);
  function A(a) {
    throw new Error(`ERR (${I})/"${i}": ${a}`);
  }
  let I = 0, g = I;
  const D = [];
  let t;
  function N() {
    t && D.push(t), t = [];
  }
  let L = 0, j, i = "", u = "";
  function e() {
    !i || (I === 0 ? t.push({
      type: 0,
      value: i
    }) : I === 1 || I === 2 || I === 3 ? (t.length > 1 && (j === "*" || j === "+") && A(`A repeatable param (${i}) must be alone in its segment. eg: '/:ids+.`), t.push({
      type: 1,
      value: i,
      regexp: u,
      repeatable: j === "*" || j === "+",
      optional: j === "*" || j === "?"
    })) : A("Invalid state to consume buffer"), i = "");
  }
  function C() {
    i += j;
  }
  for (; L < M.length; ) {
    if (j = M[L++], j === "\\" && I !== 2) {
      g = I, I = 4;
      continue;
    }
    switch (I) {
      case 0:
        j === "/" ? (i && e(), N()) : j === ":" ? (e(), I = 1) : C();
        break;
      case 4:
        C(), I = g;
        break;
      case 1:
        j === "(" ? I = 2 : el.test(j) ? C() : (e(), I = 0, j !== "*" && j !== "?" && j !== "+" && L--);
        break;
      case 2:
        j === ")" ? u[u.length - 1] == "\\" ? u = u.slice(0, -1) + j : I = 3 : u += j;
        break;
      case 3:
        e(), I = 0, j !== "*" && j !== "?" && j !== "+" && L--, u = "";
        break;
      default:
        A("Unknown state");
        break;
    }
  }
  return I === 2 && A(`Unfinished custom RegExp for param "${i}"`), e(), N(), D;
}
function Cl(M, A, I) {
  const g = Ll(Sl(M.path), I), D = QM(g, {
    record: M,
    parent: A,
    children: [],
    alias: []
  });
  return A && !D.record.aliasOf == !A.record.aliasOf && A.children.push(D), D;
}
function al(M, A) {
  const I = [], g = /* @__PURE__ */ new Map();
  A = ae({ strict: !1, end: !0, sensitive: !1 }, A);
  function D(u) {
    return g.get(u);
  }
  function t(u, e, C) {
    const a = !C, w = wl(u);
    w.aliasOf = C && C.record;
    const n = ae(A, u), o = [
      w
    ];
    if ("alias" in u) {
      const Y = typeof u.alias == "string" ? [u.alias] : u.alias;
      for (const z of Y)
        o.push(QM({}, w, {
          components: C ? C.record.components : w.components,
          path: z,
          aliasOf: C ? C.record : w
        }));
    }
    let E, l;
    for (const Y of o) {
      const { path: z } = Y;
      if (e && z[0] !== "/") {
        const m = e.record.path, W = m[m.length - 1] === "/" ? "" : "/";
        Y.path = e.record.path + (z && W + z);
      }
      if (E = Cl(Y, e, n), C ? C.alias.push(E) : (l = l || E, l !== E && l.alias.push(E), a && u.name && !Ce(E) && N(u.name)), w.children) {
        const m = w.children;
        for (let W = 0; W < m.length; W++)
          t(m[W], E, C && C.children[W]);
      }
      C = C || E, (E.record.components && Object.keys(E.record.components).length || E.record.name || E.record.redirect) && j(E);
    }
    return l ? () => {
      N(l);
    } : KD;
  }
  function N(u) {
    if (Oa(u)) {
      const e = g.get(u);
      e && (g.delete(u), I.splice(I.indexOf(e), 1), e.children.forEach(N), e.alias.forEach(N));
    } else {
      const e = I.indexOf(u);
      e > -1 && (I.splice(e, 1), u.record.name && g.delete(u.record.name), u.children.forEach(N), u.alias.forEach(N));
    }
  }
  function L() {
    return I;
  }
  function j(u) {
    let e = 0;
    for (; e < I.length && ul(u, I[e]) >= 0 && (u.record.path !== I[e].record.path || !Wa(u, I[e])); )
      e++;
    I.splice(e, 0, u), u.record.name && !Ce(u) && g.set(u.record.name, u);
  }
  function i(u, e) {
    let C, a = {}, w, n;
    if ("name" in u && u.name) {
      if (C = g.get(u.name), !C)
        throw CD(1, {
          location: u
        });
      n = C.record.name, a = QM(
        Se(
          e.params,
          C.keys.filter((l) => !l.optional).map((l) => l.name)
        ),
        u.params && Se(u.params, C.keys.map((l) => l.name))
      ), w = C.stringify(a);
    } else if ("path" in u)
      w = u.path, C = I.find((l) => l.re.test(w)), C && (a = C.parse(w), n = C.record.name);
    else {
      if (C = e.name ? g.get(e.name) : I.find((l) => l.re.test(e.path)), !C)
        throw CD(1, {
          location: u,
          currentLocation: e
        });
      n = C.record.name, a = QM({}, e.params, u.params), w = C.stringify(a);
    }
    const o = [];
    let E = C;
    for (; E; )
      o.unshift(E.record), E = E.parent;
    return {
      name: n,
      path: w,
      params: a,
      matched: o,
      meta: Tl(o)
    };
  }
  return M.forEach((u) => t(u)), { addRoute: t, resolve: i, removeRoute: N, getRoutes: L, getRecordMatcher: D };
}
function Se(M, A) {
  const I = {};
  for (const g of A)
    g in M && (I[g] = M[g]);
  return I;
}
function wl(M) {
  return {
    path: M.path,
    redirect: M.redirect,
    name: M.name,
    meta: M.meta || {},
    aliasOf: void 0,
    beforeEnter: M.beforeEnter,
    props: El(M),
    children: M.children || [],
    instances: {},
    leaveGuards: /* @__PURE__ */ new Set(),
    updateGuards: /* @__PURE__ */ new Set(),
    enterCallbacks: {},
    components: "components" in M ? M.components || null : M.component && { default: M.component }
  };
}
function El(M) {
  const A = {}, I = M.props || !1;
  if ("component" in M)
    A.default = I;
  else
    for (const g in M.components)
      A[g] = typeof I == "boolean" ? I : I[g];
  return A;
}
function Ce(M) {
  for (; M; ) {
    if (M.record.aliasOf)
      return !0;
    M = M.parent;
  }
  return !1;
}
function Tl(M) {
  return M.reduce((A, I) => QM(A, I.meta), {});
}
function ae(M, A) {
  const I = {};
  for (const g in M)
    I[g] = g in A ? A[g] : M[g];
  return I;
}
function Wa(M, A) {
  return A.children.some((I) => I === M || Wa(M, I));
}
const ka = /#/g, nl = /&/g, xl = /\//g, ol = /=/g, yl = /\?/g, pa = /\+/g, ll = /%5B/g, sl = /%5D/g, Qa = /%5E/g, cl = /%60/g, fa = /%7B/g, rl = /%7C/g, va = /%7D/g, zl = /%20/g;
function li(M) {
  return encodeURI("" + M).replace(rl, "|").replace(ll, "[").replace(sl, "]");
}
function Yl(M) {
  return li(M).replace(fa, "{").replace(va, "}").replace(Qa, "^");
}
function Tu(M) {
  return li(M).replace(pa, "%2B").replace(zl, "+").replace(ka, "%23").replace(nl, "%26").replace(cl, "`").replace(fa, "{").replace(va, "}").replace(Qa, "^");
}
function dl(M) {
  return Tu(M).replace(ol, "%3D");
}
function ml(M) {
  return li(M).replace(ka, "%23").replace(yl, "%3F");
}
function Ul(M) {
  return M == null ? "" : ml(M).replace(xl, "%2F");
}
function BN(M) {
  try {
    return decodeURIComponent("" + M);
  } catch {
  }
  return "" + M;
}
function hl(M) {
  const A = {};
  if (M === "" || M === "?")
    return A;
  const g = (M[0] === "?" ? M.slice(1) : M).split("&");
  for (let D = 0; D < g.length; ++D) {
    const t = g[D].replace(pa, " "), N = t.indexOf("="), L = BN(N < 0 ? t : t.slice(0, N)), j = N < 0 ? null : BN(t.slice(N + 1));
    if (L in A) {
      let i = A[L];
      qA(i) || (i = A[L] = [i]), i.push(j);
    } else
      A[L] = j;
  }
  return A;
}
function we(M) {
  let A = "";
  for (let I in M) {
    const g = M[I];
    if (I = dl(I), g == null) {
      g !== void 0 && (A += (A.length ? "&" : "") + I);
      continue;
    }
    (qA(g) ? g.map((t) => t && Tu(t)) : [g && Tu(g)]).forEach((t) => {
      t !== void 0 && (A += (A.length ? "&" : "") + I, t != null && (A += "=" + t));
    });
  }
  return A;
}
function Ol(M) {
  const A = {};
  for (const I in M) {
    const g = M[I];
    g !== void 0 && (A[I] = qA(g) ? g.map((D) => D == null ? null : "" + D) : g == null ? g : "" + g);
  }
  return A;
}
const bl = Symbol(""), Ee = Symbol(""), cL = Symbol(""), si = Symbol(""), nu = Symbol("");
function pD() {
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
function JI(M, A, I, g, D) {
  const t = g && (g.enterCallbacks[D] = g.enterCallbacks[D] || []);
  return () => new Promise((N, L) => {
    const j = (e) => {
      e === !1 ? L(CD(4, {
        from: I,
        to: A
      })) : e instanceof Error ? L(e) : Dl(e) ? L(CD(2, {
        from: A,
        to: e
      })) : (t && g.enterCallbacks[D] === t && typeof e == "function" && t.push(e), N());
    }, i = M.call(g && g.instances[D], A, I, j);
    let u = Promise.resolve(i);
    M.length < 3 && (u = u.then(j)), u.catch((e) => L(e));
  });
}
function wj(M, A, I, g) {
  const D = [];
  for (const t of M)
    for (const N in t.components) {
      let L = t.components[N];
      if (!(A !== "beforeRouteEnter" && !t.instances[N]))
        if (Wl(L)) {
          const i = (L.__vccOpts || L)[A];
          i && D.push(JI(i, I, g, t, N));
        } else {
          let j = L();
          D.push(() => j.then((i) => {
            if (!i)
              return Promise.reject(new Error(`Couldn't resolve component "${N}" at "${t.path}"`));
            const u = vy(i) ? i.default : i;
            t.components[N] = u;
            const C = (u.__vccOpts || u)[A];
            return C && JI(C, I, g, t, N)();
          }));
        }
    }
  return D;
}
function Wl(M) {
  return typeof M == "object" || "displayName" in M || "props" in M || "__vccOpts" in M;
}
function Te(M) {
  const A = aA(cL), I = aA(si), g = x(() => A.resolve(S(M.to))), D = x(() => {
    const { matched: j } = g.value, { length: i } = j, u = j[i - 1], e = I.matched;
    if (!u || !e.length)
      return -1;
    const C = e.findIndex(SD.bind(null, u));
    if (C > -1)
      return C;
    const a = ne(j[i - 2]);
    return i > 1 && ne(u) === a && e[e.length - 1].path !== a ? e.findIndex(SD.bind(null, j[i - 2])) : C;
  }), t = x(() => D.value > -1 && fl(I.params, g.value.params)), N = x(() => D.value > -1 && D.value === I.matched.length - 1 && Ua(I.params, g.value.params));
  function L(j = {}) {
    return Ql(j) ? A[S(M.replace) ? "replace" : "push"](
      S(M.to)
    ).catch(KD) : Promise.resolve();
  }
  return {
    route: g,
    href: x(() => g.value.href),
    isActive: t,
    isExactActive: N,
    navigate: L
  };
}
const kl = /* @__PURE__ */ f({
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
  useLink: Te,
  setup(M, { slots: A }) {
    const I = $A(Te(M)), { options: g } = aA(cL), D = x(() => ({
      [xe(M.activeClass, g.linkActiveClass, "router-link-active")]: I.isActive,
      [xe(M.exactActiveClass, g.linkExactActiveClass, "router-link-exact-active")]: I.isExactActive
    }));
    return () => {
      const t = A.default && A.default(I);
      return M.custom ? t : rM("a", {
        "aria-current": I.isExactActive ? M.ariaCurrentValue : null,
        href: I.href,
        onClick: I.navigate,
        class: D.value
      }, t);
    };
  }
}), pl = kl;
function Ql(M) {
  if (!(M.metaKey || M.altKey || M.ctrlKey || M.shiftKey) && !M.defaultPrevented && !(M.button !== void 0 && M.button !== 0)) {
    if (M.currentTarget && M.currentTarget.getAttribute) {
      const A = M.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(A))
        return;
    }
    return M.preventDefault && M.preventDefault(), !0;
  }
}
function fl(M, A) {
  for (const I in A) {
    const g = A[I], D = M[I];
    if (typeof g == "string") {
      if (g !== D)
        return !1;
    } else if (!qA(D) || D.length !== g.length || g.some((t, N) => t !== D[N]))
      return !1;
  }
  return !0;
}
function ne(M) {
  return M ? M.aliasOf ? M.aliasOf.path : M.path : "";
}
const xe = (M, A, I) => M != null ? M : A != null ? A : I, vl = /* @__PURE__ */ f({
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
    const g = aA(nu), D = x(() => M.route || g.value), t = aA(Ee, 0), N = x(() => {
      let i = S(t);
      const { matched: u } = D.value;
      let e;
      for (; (e = u[i]) && !e.components; )
        i++;
      return i;
    }), L = x(() => D.value.matched[N.value]);
    TI(Ee, x(() => N.value + 1)), TI(bl, L), TI(nu, D);
    const j = gM();
    return dM(() => [j.value, L.value, M.name], ([i, u, e], [C, a, w]) => {
      u && (u.instances[e] = i, a && a !== u && i && i === C && (u.leaveGuards.size || (u.leaveGuards = a.leaveGuards), u.updateGuards.size || (u.updateGuards = a.updateGuards))), i && u && (!a || !SD(u, a) || !C) && (u.enterCallbacks[e] || []).forEach((n) => n(i));
    }, { flush: "post" }), () => {
      const i = D.value, u = M.name, e = L.value, C = e && e.components[u];
      if (!C)
        return oe(I.default, { Component: C, route: i });
      const a = e.props[u], w = a ? a === !0 ? i.params : typeof a == "function" ? a(i) : a : null, o = rM(C, QM({}, w, A, {
        onVnodeUnmounted: (E) => {
          E.component.isUnmounted && (e.instances[u] = null);
        },
        ref: j
      }));
      return oe(I.default, { Component: o, route: i }) || o;
    };
  }
});
function oe(M, A) {
  if (!M)
    return null;
  const I = M(A);
  return I.length === 1 ? I[0] : I;
}
const Gl = vl;
function Jl(M) {
  const A = al(M.routes, M), I = M.parseQuery || hl, g = M.stringifyQuery || we, D = M.history, t = pD(), N = pD(), L = pD(), j = zC(fI);
  let i = fI;
  Pg && M.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const u = Cj.bind(null, (J) => "" + J), e = Cj.bind(null, Ul), C = Cj.bind(null, BN);
  function a(J, _) {
    let $, NM;
    return Oa(J) ? ($ = A.getRecordMatcher(J), NM = _) : NM = J, A.addRoute(NM, $);
  }
  function w(J) {
    const _ = A.getRecordMatcher(J);
    _ && A.removeRoute(_);
  }
  function n() {
    return A.getRoutes().map((J) => J.record);
  }
  function o(J) {
    return !!A.getRecordMatcher(J);
  }
  function E(J, _) {
    if (_ = QM({}, _ || j.value), typeof J == "string") {
      const p = aj(I, J, _.path), q = A.resolve({ path: p.path }, _), mM = D.createHref(p.fullPath);
      return QM(p, q, {
        params: C(q.params),
        hash: BN(p.hash),
        redirectedFrom: void 0,
        href: mM
      });
    }
    let $;
    if ("path" in J)
      $ = QM({}, J, {
        path: aj(I, J.path, _.path).path
      });
    else {
      const p = QM({}, J.params);
      for (const q in p)
        p[q] == null && delete p[q];
      $ = QM({}, J, {
        params: e(J.params)
      }), _.params = e(_.params);
    }
    const NM = A.resolve($, _), kM = J.hash || "";
    NM.params = u(C(NM.params));
    const RM = Vy(g, QM({}, J, {
      hash: Yl(kM),
      path: NM.path
    })), yM = D.createHref(RM);
    return QM({
      fullPath: RM,
      hash: kM,
      query: g === we ? Ol(J.query) : J.query || {}
    }, NM, {
      redirectedFrom: void 0,
      href: yM
    });
  }
  function l(J) {
    return typeof J == "string" ? aj(I, J, j.value.path) : QM({}, J);
  }
  function Y(J, _) {
    if (i !== J)
      return CD(8, {
        from: _,
        to: J
      });
  }
  function z(J) {
    return v(J);
  }
  function m(J) {
    return z(QM(l(J), { replace: !0 }));
  }
  function W(J) {
    const _ = J.matched[J.matched.length - 1];
    if (_ && _.redirect) {
      const { redirect: $ } = _;
      let NM = typeof $ == "function" ? $(J) : $;
      return typeof NM == "string" && (NM = NM.includes("?") || NM.includes("#") ? NM = l(NM) : { path: NM }, NM.params = {}), QM({
        query: J.query,
        hash: J.hash,
        params: "path" in NM ? {} : J.params
      }, NM);
    }
  }
  function v(J, _) {
    const $ = i = E(J), NM = j.value, kM = J.state, RM = J.force, yM = J.replace === !0, p = W($);
    if (p)
      return v(
        QM(l(p), {
          state: typeof p == "object" ? QM({}, kM, p.state) : kM,
          force: RM,
          replace: yM
        }),
        _ || $
      );
    const q = $;
    q.redirectedFrom = _;
    let mM;
    return !RM && Zy(g, NM, $) && (mM = CD(16, { to: q, from: NM }), hM(
      NM,
      NM,
      !0,
      !1
    )), (mM ? Promise.resolve(mM) : U(q, NM)).catch((H) => SI(H) ? SI(H, 2) ? H : oM(H) : uM(H, q, NM)).then((H) => {
      if (H) {
        if (SI(H, 2))
          return v(
            QM({
              replace: yM
            }, l(H.to), {
              state: typeof H.to == "object" ? QM({}, kM, H.to.state) : kM,
              force: RM
            }),
            _ || q
          );
      } else
        H = R(q, NM, !0, yM, kM);
      return Z(q, NM, H), H;
    });
  }
  function d(J, _) {
    const $ = Y(J, _);
    return $ ? Promise.reject($) : Promise.resolve();
  }
  function U(J, _) {
    let $;
    const [NM, kM, RM] = Vl(J, _);
    $ = wj(NM.reverse(), "beforeRouteLeave", J, _);
    for (const p of NM)
      p.leaveGuards.forEach((q) => {
        $.push(JI(q, J, _));
      });
    const yM = d.bind(null, J, _);
    return $.push(yM), fg($).then(() => {
      $ = [];
      for (const p of t.list())
        $.push(JI(p, J, _));
      return $.push(yM), fg($);
    }).then(() => {
      $ = wj(kM, "beforeRouteUpdate", J, _);
      for (const p of kM)
        p.updateGuards.forEach((q) => {
          $.push(JI(q, J, _));
        });
      return $.push(yM), fg($);
    }).then(() => {
      $ = [];
      for (const p of J.matched)
        if (p.beforeEnter && !_.matched.includes(p))
          if (qA(p.beforeEnter))
            for (const q of p.beforeEnter)
              $.push(JI(q, J, _));
          else
            $.push(JI(p.beforeEnter, J, _));
      return $.push(yM), fg($);
    }).then(() => (J.matched.forEach((p) => p.enterCallbacks = {}), $ = wj(RM, "beforeRouteEnter", J, _), $.push(yM), fg($))).then(() => {
      $ = [];
      for (const p of N.list())
        $.push(JI(p, J, _));
      return $.push(yM), fg($);
    }).catch((p) => SI(p, 8) ? p : Promise.reject(p));
  }
  function Z(J, _, $) {
    for (const NM of L.list())
      NM(J, _, $);
  }
  function R(J, _, $, NM, kM) {
    const RM = Y(J, _);
    if (RM)
      return RM;
    const yM = _ === fI, p = Pg ? history.state : {};
    $ && (NM || yM ? D.replace(J.fullPath, QM({
      scroll: yM && p && p.scroll
    }, kM)) : D.push(J.fullPath, kM)), j.value = J, hM(J, _, $, yM), oM();
  }
  let AM;
  function LM() {
    AM || (AM = D.listen((J, _, $) => {
      if (!YM.listening)
        return;
      const NM = E(J), kM = W(NM);
      if (kM) {
        v(QM(kM, { replace: !0 }), NM).catch(KD);
        return;
      }
      i = NM;
      const RM = j.value;
      Pg && $y(Le(RM.fullPath, $.delta), sL()), U(NM, RM).catch((yM) => SI(yM, 12) ? yM : SI(yM, 2) ? (v(
        yM.to,
        NM
      ).then((p) => {
        SI(p, 20) && !$.delta && $.type === at.pop && D.go(-1, !1);
      }).catch(KD), Promise.reject()) : ($.delta && D.go(-$.delta, !1), uM(yM, NM, RM))).then((yM) => {
        yM = yM || R(
          NM,
          RM,
          !1
        ), yM && ($.delta && !SI(yM, 8) ? D.go(-$.delta, !1) : $.type === at.pop && SI(yM, 20) && D.go(-1, !1)), Z(NM, RM, yM);
      }).catch(KD);
    }));
  }
  let IM = pD(), lM = pD(), SM;
  function uM(J, _, $) {
    oM(J);
    const NM = lM.list();
    return NM.length ? NM.forEach((kM) => kM(J, _, $)) : console.error(J), Promise.reject(J);
  }
  function bM() {
    return SM && j.value !== fI ? Promise.resolve() : new Promise((J, _) => {
      IM.add([J, _]);
    });
  }
  function oM(J) {
    return SM || (SM = !J, LM(), IM.list().forEach(([_, $]) => J ? $(J) : _()), IM.reset()), J;
  }
  function hM(J, _, $, NM) {
    const { scrollBehavior: kM } = M;
    if (!Pg || !kM)
      return Promise.resolve();
    const RM = !$ && qy(Le(J.fullPath, 0)) || (NM || !$) && history.state && history.state.scroll || null;
    return EI().then(() => kM(J, _, RM)).then((yM) => yM && _y(yM)).catch((yM) => uM(yM, J, _));
  }
  const GM = (J) => D.go(J);
  let BM;
  const CM = /* @__PURE__ */ new Set(), YM = {
    currentRoute: j,
    listening: !0,
    addRoute: a,
    removeRoute: w,
    hasRoute: o,
    getRoutes: n,
    resolve: E,
    options: M,
    push: z,
    replace: m,
    go: GM,
    back: () => GM(-1),
    forward: () => GM(1),
    beforeEach: t.add,
    beforeResolve: N.add,
    afterEach: L.add,
    onError: lM.add,
    isReady: bM,
    install(J) {
      const _ = this;
      J.component("RouterLink", pl), J.component("RouterView", Gl), J.config.globalProperties.$router = _, Object.defineProperty(J.config.globalProperties, "$route", {
        enumerable: !0,
        get: () => S(j)
      }), Pg && !BM && j.value === fI && (BM = !0, z(D.location).catch((kM) => {
      }));
      const $ = {};
      for (const kM in fI)
        $[kM] = x(() => j.value[kM]);
      J.provide(cL, _), J.provide(si, $A($)), J.provide(nu, j);
      const NM = J.unmount;
      CM.add(J), J.unmount = function() {
        CM.delete(J), CM.size < 1 && (i = fI, AM && AM(), AM = null, j.value = fI, BM = !1, SM = !1), NM();
      };
    }
  };
  return YM;
}
function fg(M) {
  return M.reduce((A, I) => A.then(() => I()), Promise.resolve());
}
function Vl(M, A) {
  const I = [], g = [], D = [], t = Math.max(A.matched.length, M.matched.length);
  for (let N = 0; N < t; N++) {
    const L = A.matched[N];
    L && (M.matched.find((i) => SD(i, L)) ? g.push(L) : I.push(L));
    const j = M.matched[N];
    j && (A.matched.find((i) => SD(i, j)) || D.push(j));
  }
  return [I, g, D];
}
function Zl() {
  return aA(cL);
}
function rL() {
  return aA(si);
}
const Pl = (M) => (Mg("data-v-c42f56b8"), M = M(), Ag(), M), Bl = { class: "control" }, Fl = ["disabled"], Xl = /* @__PURE__ */ Pl(() => /* @__PURE__ */ s("hr", null, null, -1)), Rl = /* @__PURE__ */ f({
  __name: "App",
  props: {
    dataAttributes: null,
    queryParameters: null,
    formId: null,
    apiRoot: null
  },
  setup(M) {
    const A = M, I = YD(), g = rL(), D = A.formId ? A.formId : g.params.id;
    A.apiRoot && I.setApiRoot(A.apiRoot), D && I.loadForm(D);
    const t = () => I.saveForm(), N = x(() => !I.form);
    return $M(() => {
      I.createNewForm();
    }), (L, j) => (T(), r(MM, null, [
      s("div", Bl, [
        s("button", {
          type: "button",
          class: "btn btn-success",
          disabled: S(N),
          onClick: t
        }, "Save", 8, Fl)
      ]),
      k(TL, {
        model: S(I).transientMessageModel
      }, null, 8, ["model"]),
      S(I).form ? (T(), V(fy, {
        key: 0,
        model: S(I).form
      }, null, 8, ["model"])) : P("", !0),
      Xl
    ], 64));
  }
});
const xu = /* @__PURE__ */ PM(Rl, [["__scopeId", "data-v-c42f56b8"]]), mA = hI("FormSubmissionStore", {
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
      let I = `${cA.dataRepositoryApiRoot}/api/forms/${M}`;
      console.log(I), fetch(I, {
        method: "GET"
      }).then((g) => g.json()).then((g) => {
        this.form = g, A || (this.formData = GC(this.form, this.lang));
      }).catch((g) => {
        console.error("Load Form API Error:", g);
      });
    },
    loadSubmission(M) {
      let A = `${cA.dataRepositoryApiRoot}/api/form-submissions/${M}`;
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
      const M = ((D = (g = this.formData) == null ? void 0 : g.id) == null ? void 0 : D.toString()) === iM.EMPTY;
      let A = `${cA.dataRepositoryApiRoot}/api/form-submissions`, I = "";
      M ? (I = "POST", this.formData.state = jD.Draft) : (A = `${A}/${this.formData.id}`, I = "PUT"), fetch(
        A,
        {
          body: JSON.stringify(this.formData),
          method: I,
          headers: {
            encType: "multipart/form-data",
            "Content-Type": "application/json"
          }
        }
      ).then(async (t) => {
        if (t.ok) {
          if (M) {
            const N = await t.json();
            this.formData.id = N;
          }
          this.transientMessage = "Success", this.transientMessageClass = "success", console.log("Form submission successfull.");
        } else
          switch (this.transientMessageClass = "danger", t.status) {
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
      }).catch((t) => {
        M && this.formData && (this.formData.id = iM.EMPTY), this.transientMessage = "Unknown error occurred", this.transientMessageClass = "danger", console.error("FormData Submit API Error:", t);
      });
    },
    saveForm() {
      var g, D;
      if (!this.form) {
        console.error("Cannot save null form.");
        return;
      }
      const M = ((D = (g = this.form) == null ? void 0 : g.id) == null ? void 0 : D.toString()) === iM.EMPTY;
      let A = `${cA.dataRepositoryApiRoot}/api/forms`, I = "";
      M ? (console.log("Saving new form."), this.form.id = iM.create().toString(), I = "POST", this.form.state = jD.Draft) : (console.log("Updating existing form."), A = `${A}/${this.form.id}`, I = "PUT"), fetch(
        A,
        {
          body: JSON.stringify(this.form),
          method: I,
          headers: {
            encType: "multipart/form-data",
            "Content-Type": "application/json"
          }
        }
      ).then((t) => {
        if (t.ok)
          this.transientMessage = "The form saved successfully", this.transientMessageClass = "success";
        else
          switch (this.transientMessageClass = "danger", t.status) {
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
      }).catch((t) => {
        this.transientMessage = "Unknown error occurred", this.transientMessageClass = "danger", console.error("Form Save API Error:", t);
      });
    },
    clearMessages() {
      this.transientMessage = null;
    },
    addFile(M, A) {
      var I, g;
      (I = this.files) == null || I.push(M), (g = this.fileKeys) == null || g.push(A.toString());
    },
    putFile(M, A) {
      Array.from(M).forEach((I) => {
        console.log("fieldId:" + A), this.addFile(I, A);
      });
    }
  }
}), Ga = (M) => (Mg("data-v-7ad75a89"), M = M(), Ag(), M), Hl = /* @__PURE__ */ Ga(() => /* @__PURE__ */ s("h2", null, "Form Submission", -1)), _l = /* @__PURE__ */ Ga(() => /* @__PURE__ */ s("hr", null, null, -1)), $l = { class: "control" }, ql = ["disabled"], Kl = /* @__PURE__ */ f({
  __name: "App",
  props: {
    piniaInstance: null,
    repositoryRoot: null,
    formId: null,
    submissionId: null
  },
  setup(M) {
    const A = M, I = mA(A.piniaInstance);
    A.formId ? I.loadForm(A.formId) : A.submissionId && I.loadSubmission(A.submissionId), dM(() => I.transientMessage, async (t) => {
      t && setTimeout(() => {
        I.transientMessage = null;
      }, 2e3);
    });
    const g = () => I.submitForm(), D = x(() => !!I.form);
    return (t, N) => {
      const L = sM("Form");
      return T(), r(MM, null, [
        k(SL, { name: "fade" }, {
          default: b(() => [
            S(I).transientMessage ? (T(), r("p", {
              key: 0,
              class: B("alert alert-" + S(I).transientMessageClass)
            }, F(S(I).transientMessage), 3)) : P("", !0)
          ]),
          _: 1
        }),
        Hl,
        _l,
        S(I).form ? (T(), V(L, {
          key: 0,
          model: S(I).form
        }, null, 8, ["model"])) : P("", !0),
        s("div", $l, [
          s("button", {
            type: "button",
            class: "btn btn-primary",
            disabled: !S(D),
            onClick: g
          }, "Submit", 8, ql)
        ])
      ], 64);
    };
  }
});
const Ms = /* @__PURE__ */ PM(Kl, [["__scopeId", "data-v-7ad75a89"]]), Ja = hI("LoginStore", {
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
}), As = /* @__PURE__ */ s("h2", null, "Login", -1), Is = /* @__PURE__ */ s("br", null, null, -1), gs = /* @__PURE__ */ s("br", null, null, -1), Ds = /* @__PURE__ */ f({
  __name: "App",
  props: {
    piniaInstance: null,
    authorizationRoot: null
  },
  setup(M) {
    const A = M, I = Ja(A.piniaInstance);
    $M(() => {
      I.authorizationApiRoot = A.authorizationRoot;
    });
    const g = (D) => {
      I.authorize(D.credential);
    };
    return (D, t) => {
      const N = sM("GoogleLogin");
      return T(), r(MM, null, [
        As,
        Is,
        k(N, { callback: g }),
        gs
      ], 64);
    };
  }
}), Va = hI("WorkflowBuilderStore", {
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
      const M = ((D = (g = this.workflow) == null ? void 0 : g.id) == null ? void 0 : D.toString()) === iM.EMPTY;
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
      ).then((t) => {
        if (t.ok)
          this.transientMessage = "The form saved successfully", this.transientMessageClass = "success";
        else
          switch (this.transientMessageClass = "danger", t.status) {
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
      }).catch((t) => {
        this.transientMessage = "Unknown error occurred", this.transientMessageClass = "danger", console.error("Workflow Save API Error:", t);
      });
    }
  }
}), ts = (M) => (Mg("data-v-a2d9971d"), M = M(), Ag(), M), Ns = { class: "action" }, Ls = /* @__PURE__ */ ts(() => /* @__PURE__ */ s("select", null, [
  /* @__PURE__ */ s("option", { value: "b01e8c95-abef-4db2-ac3a-9ab35c4f6e11" }, "TO DO Form 1"),
  /* @__PURE__ */ s("option", { value: "139e7084-20ba-4268-9396-61bac78cda52" }, "TO DO Form 2")
], -1)), js = /* @__PURE__ */ f({
  __name: "WorkflowAction",
  props: {
    model: null
  },
  setup(M) {
    return (A, I) => (T(), r("div", Ns, [
      DM(" Workflow Action: " + F(M.model.id) + " ", 1),
      s("div", null, [
        s("h4", null, F(M.model.name), 1),
        DM(" Name: "),
        _M(s("input", {
          type: "text",
          "onUpdate:modelValue": I[0] || (I[0] = (g) => M.model.name = g)
        }, null, 512), [
          [bN, M.model.name]
        ])
      ]),
      s("div", null, [
        s("p", null, F(M.model.description), 1),
        DM(" Description: "),
        _M(s("textarea", {
          "onUpdate:modelValue": I[1] || (I[1] = (g) => M.model.description = g)
        }, null, 512), [
          [bN, M.model.description]
        ])
      ]),
      s("div", null, [
        s("p", null, F(M.model.description), 1),
        DM(" Form: "),
        Ls
      ])
    ]));
  }
});
const us = /* @__PURE__ */ PM(js, [["__scopeId", "data-v-a2d9971d"]]), is = /* @__PURE__ */ f({
  __name: "Workflow",
  props: {
    model: null
  },
  setup(M) {
    return (A, I) => (T(!0), r(MM, null, aM(M.model.actions, (g) => (T(), V(us, {
      key: g.id,
      model: g
    }, null, 8, ["model"]))), 128));
  }
}), Za = (M) => (Mg("data-v-52fc6feb"), M = M(), Ag(), M), es = /* @__PURE__ */ Za(() => /* @__PURE__ */ s("h2", null, "Workflow Builder", -1)), Ss = { class: "control" }, Cs = ["disabled"], as = ["disabled"], ws = { class: "toolbar" }, Es = ["disabled"], Ts = /* @__PURE__ */ Za(() => /* @__PURE__ */ s("hr", null, null, -1)), ns = /* @__PURE__ */ f({
  __name: "App",
  props: {
    piniaInstance: null,
    repositoryRoot: null,
    workflowId: null
  },
  setup(M) {
    const A = M, I = Va(A.piniaInstance);
    A.workflowId && I.loadWorkflow(A.workflowId), dM(() => I.transientMessage, async (L) => {
      L && setTimeout(() => {
        I.transientMessage = null;
      }, 2e3);
    });
    const g = () => {
      I.workflow = {
        id: iM.EMPTY,
        name: "",
        description: "",
        states: []
      };
    }, D = () => I.saveWorkflow(), t = x(() => !I.workflow), N = () => {
      if (!I.workflow) {
        console.error("Cannot add action to null workflow");
        return;
      }
      const L = {
        id: iM.create().toString(),
        title: "",
        description: "",
        formId: iM.createEmpty()
      };
      I.workflow.actions ? I.workflow.actions.push(L) : I.workflow.actions = [L];
    };
    return (L, j) => (T(), r(MM, null, [
      k(SL, { name: "fade" }, {
        default: b(() => [
          S(I).transientMessage ? (T(), r("p", {
            key: 0,
            class: B("alert alert-" + S(I).transientMessageClass)
          }, F(S(I).transientMessage), 3)) : P("", !0)
        ]),
        _: 1
      }),
      es,
      s("div", Ss, [
        s("button", {
          type: "button",
          class: "btn btn-primary",
          disabled: !S(t),
          onClick: g
        }, "New Workflow", 8, Cs),
        s("button", {
          type: "button",
          class: "btn btn-success",
          disabled: S(t),
          onClick: D
        }, "Save", 8, as)
      ]),
      s("div", ws, [
        s("button", {
          disabled: S(t),
          onClick: j[0] || (j[0] = (i) => N())
        }, "+ Form Submission Action", 8, Es)
      ]),
      Ts,
      S(I).workflow ? (T(), V(is, {
        key: 0,
        model: S(I).workflow
      }, null, 8, ["model"])) : P("", !0)
    ], 64));
  }
});
const xs = /* @__PURE__ */ PM(ns, [["__scopeId", "data-v-52fc6feb"]]), ci = hI("EntityTemplateBuilderStore", {
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
        id: iM.EMPTY,
        name: "New Entity Template",
        description: "Description about this new Entity Template",
        created: new Date(),
        updated: new Date(),
        state: jD.Draft,
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
      if (M.toString() !== iM.EMPTY && this.forms.findIndex((A) => A.id === M) < 0) {
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
      const A = `${"https://" + this.getApiRoot.split("/")[2]}/api/forms`;
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
      var g, D, t, N, L;
      const M = ((D = (g = this.template) == null ? void 0 : g.id) == null ? void 0 : D.toString()) === iM.EMPTY;
      let A = this.getApiRoot, I = "";
      M ? (console.log("Saving new template."), ((N = (t = this.template) == null ? void 0 : t.id) == null ? void 0 : N.toString()) === iM.EMPTY && (this.template.id = iM.create().toString()), I = "POST") : (console.log("Updating existing template."), A = `${A}/${(L = this.template) == null ? void 0 : L.id}`, I = "PUT"), fetch(A, {
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
          switch (M && this.template && (this.template.id = iM.EMPTY), this.transientMessageModel.messageClass = "danger", j.status) {
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
        M && this.template && (this.template.id = iM.EMPTY), this.transientMessageModel.message = "Unknown error occurred", this.transientMessageModel.messageClass = "danger", console.error("Save/Update Entity Template API Error:", j);
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
      return M.apiRoot ? M.apiRoot : cA.dataRepositoryApiRoot + "/api/entity-templates";
    }
  }
}), Pa = (M) => (Mg("data-v-6261062f"), M = M(), Ag(), M), os = /* @__PURE__ */ Pa(() => /* @__PURE__ */ s("h6", null, "Name :", -1)), ys = /* @__PURE__ */ Pa(() => /* @__PURE__ */ s("br", null, null, -1)), ls = ["for"], ss = ["name"], cs = ["value"], rs = /* @__PURE__ */ f({
  __name: "FormEntry",
  props: {
    model: null
  },
  setup(M) {
    IA.add(Ei), IA.add(yi), IA.add(wi), IA.add(xi), IA.add(Ti), IA.add(oi), IA.add(ni);
    const A = ci();
    return (I, g) => {
      const D = sM("b-col"), t = sM("b-form-input"), N = sM("b-row");
      return T(), V(N, { class: "mb-2" }, {
        default: b(() => [
          k(D, { class: "col-sm-11" }, {
            default: b(() => [
              k(N, null, {
                default: b(() => [
                  k(D, { class: "col-sm-2" }, {
                    default: b(() => [
                      os
                    ]),
                    _: 1
                  }),
                  k(D, { class: "col-sm-10" }, {
                    default: b(() => [
                      k(t, {
                        modelValue: M.model.name,
                        "onUpdate:modelValue": g[0] || (g[0] = (L) => M.model.name = L)
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              ys,
              k(N, null, {
                default: b(() => [
                  k(D, { class: "col-sm-2" }, {
                    default: b(() => [
                      s("label", {
                        for: M.model.id.toString()
                      }, "Form:", 8, ls)
                    ]),
                    _: 1
                  }),
                  k(D, { class: "col-sm-10" }, {
                    default: b(() => [
                      _M(s("select", {
                        "onUpdate:modelValue": g[1] || (g[1] = (L) => M.model.id = L),
                        name: M.model.id.toString(),
                        class: "form-select"
                      }, [
                        (T(!0), r(MM, null, aM(S(A).formEntries, (L) => (T(), r("option", {
                          key: L.id.toString(),
                          value: L.id
                        }, F(L.name), 9, cs))), 128))
                      ], 8, ss), [
                        [LD, M.model.id]
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
                  "onUpdate:modelValue": g[2] || (g[2] = (L) => M.model.isRequired = L)
                }, null, 512), [
                  [lg, M.model.isRequired]
                ]),
                DM(" Is Required? ")
              ])
            ]),
            _: 1
          }),
          k(D, { class: "col-sm-1" }, {
            default: b(() => [
              k(S(wg), {
                icon: "fa-solid fa-circle-xmark",
                onClick: g[3] || (g[3] = (L) => S(A).deleteFormEntry(M.model.id)),
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
const ye = /* @__PURE__ */ PM(rs, [["__scopeId", "data-v-6261062f"]]), zs = { class: "row" }, Ys = { class: "col-6" }, ds = { class: "col-6" }, Ej = /* @__PURE__ */ f({
  __name: "FormFieldSelectionDropdown",
  props: {
    model: null,
    optionSource: null,
    forms: null
  },
  setup(M) {
    const A = M, I = x(() => {
      const D = [{ value: null, text: "Please select a form" }];
      return A.optionSource.forEach((t) => {
        const N = {
          label: t.formGroupName,
          options: []
        };
        t.formGroup.forEach((L) => {
          N.options.push({
            value: L.id,
            text: L.name
          });
        }), D.push(N);
      }), D;
    }), g = x(() => {
      var t, N, L, j, i;
      return ((t = A.model) == null ? void 0 : t.formId) === null || ((L = (N = A.model) == null ? void 0 : N.formId) == null ? void 0 : L.toString()) === "" ? [{ value: null, text: "Please select a form first." }] : (i = (j = A.forms) == null ? void 0 : j.filter((u) => {
        var e;
        return u.id === ((e = A.model) == null ? void 0 : e.formId);
      })[0]) == null ? void 0 : i.fields.map((u) => ({
        value: u.id,
        text: fC(u, null)
      }));
    });
    return dM(() => A.optionSource, (D) => {
      let t = !1;
      D.forEach((N) => {
        N.formGroup.filter((L) => L.id === A.model.formId).length > 0 && (t = !0);
      }), t || (console.log("Resetting fields ", D), A.model.formId = iM.EMPTY, A.model.fieldId = iM.EMPTY);
    }, { deep: !0 }), (D, t) => {
      const N = sM("b-form-select");
      return T(), r("div", zs, [
        s("div", Ys, [
          k(N, {
            modelValue: M.model.formId,
            "onUpdate:modelValue": t[0] || (t[0] = (L) => M.model.formId = L),
            options: S(I)
          }, null, 8, ["modelValue", "options"])
        ]),
        s("div", ds, [
          k(N, {
            modelValue: M.model.fieldId,
            "onUpdate:modelValue": t[1] || (t[1] = (L) => M.model.fieldId = L),
            options: S(g)
          }, null, 8, ["modelValue", "options"])
        ])
      ]);
    };
  }
}), Tj = /* @__PURE__ */ new Map(), ms = (M) => (Tj.has(M) || Tj.set(M, Us(M)), Tj.get(M));
function Us(M) {
  return hI(`entitySelectStore/${M}`, {
    state: () => ({
      selectedEntityIds: [],
      entitySearchResult: null
    }),
    actions: {
      seach(A, I, g) {
        let D = 0, t = 10, N = cA.dataRepositoryApiRoot + "/api/entities/" + A + "/" + I + "/" + g + "/" + D + "/" + t;
        fetch(N, {
          method: "GET"
        }).then((L) => L.json()).then((L) => {
          this.entitySearchResult = L;
        }).catch((L) => {
          console.error("Load Entities API Error:", L);
        });
      }
    }
  });
}
const zL = (M) => ms(M)(), hs = { class: "row mt-2" }, Os = { class: "col-sm-6" }, bs = /* @__PURE__ */ s("label", null, "Search Target:", -1), Ws = ["value"], ks = { class: "col-sm-6" }, ps = /* @__PURE__ */ s("label", null, " Search Text ", -1), Qs = ["onKeydown"], fs = /* @__PURE__ */ f({
  __name: "EntitySearchBox",
  props: {
    storeId: null,
    entityType: null
  },
  setup(M) {
    const A = M, I = gM(Hj), g = gM(""), D = zL(A.storeId), t = () => D.seach(A.entityType, I.value, g.value);
    return (N, L) => (T(), r("div", hs, [
      s("div", Os, [
        bs,
        _M(s("select", {
          "onUpdate:modelValue": L[0] || (L[0] = (j) => I.value = j),
          class: "form-select"
        }, [
          (T(!0), r(MM, null, aM(S(Hj), (j) => (T(), r("option", {
            key: j,
            value: j
          }, F(j), 9, Ws))), 128))
        ], 512), [
          [LD, I.value]
        ])
      ]),
      s("div", ks, [
        ps,
        _M(s("input", {
          type: "text",
          "onUpdate:modelValue": L[1] || (L[1] = (j) => g.value = j),
          class: "form-control",
          onBlur: t,
          onKeydown: YC(t, ["enter"])
        }, null, 40, Qs), [
          [bN, g.value]
        ])
      ])
    ]));
  }
}), vs = /* @__PURE__ */ s("h4", null, "Entity Selection List", -1), Gs = ["value"], Js = /* @__PURE__ */ f({
  __name: "EntityList",
  props: {
    storeId: null
  },
  setup(M) {
    const I = zL(M.storeId), { entitySearchResult: g, selectedEntityIds: D } = CL(I);
    return (t, N) => {
      var L;
      return T(), r(MM, null, [
        vs,
        (T(!0), r(MM, null, aM((L = S(g)) == null ? void 0 : L.result, (j) => (T(), r("div", {
          key: j.id.toString(),
          class: "form-control"
        }, [
          _M(s("input", {
            type: "checkbox",
            value: j.id,
            "onUpdate:modelValue": N[0] || (N[0] = (i) => sA(D) ? D.value = i : null)
          }, null, 8, Gs), [
            [lg, S(D)]
          ]),
          s("span", null, F(j.title) + " => " + F(j.description), 1)
        ]))), 128))
      ], 64);
    };
  }
}), Vs = /* @__PURE__ */ f({
  __name: "EntitySelectionList",
  props: {
    storeId: null,
    entityType: null
  },
  setup(M) {
    const A = M;
    zL(A.storeId);
    const I = gM(A.entityType);
    return (g, D) => (T(), r(MM, null, [
      k(fs, {
        storeId: M.storeId,
        entityType: I.value
      }, null, 8, ["storeId", "entityType"]),
      k(Js, { storeId: M.storeId }, null, 8, ["storeId"])
    ], 64));
  }
}), JA = (M) => (Mg("data-v-669d5b02"), M = M(), Ag(), M), Zs = /* @__PURE__ */ JA(() => /* @__PURE__ */ s("br", null, null, -1)), Ps = { key: 0 }, Bs = { class: "form-field-border" }, Fs = /* @__PURE__ */ JA(() => /* @__PURE__ */ s("h6", null, "Name :", -1)), Xs = /* @__PURE__ */ JA(() => /* @__PURE__ */ s("br", null, null, -1)), Rs = /* @__PURE__ */ JA(() => /* @__PURE__ */ s("h6", null, "Description :", -1)), Hs = /* @__PURE__ */ JA(() => /* @__PURE__ */ s("br", null, null, -1)), _s = /* @__PURE__ */ JA(() => /* @__PURE__ */ s("h6", null, "State:", -1)), $s = { class: "form-field-border blue" }, qs = /* @__PURE__ */ JA(() => /* @__PURE__ */ s("h5", null, "Metadata Forms", -1)), Ks = { class: "form-field-border red" }, Mc = /* @__PURE__ */ JA(() => /* @__PURE__ */ s("h5", null, "Data Forms", -1)), Ac = { key: 0 }, Ic = /* @__PURE__ */ JA(() => /* @__PURE__ */ s("h5", null, "Field Mappings", -1)), gc = { class: "row" }, Dc = /* @__PURE__ */ JA(() => /* @__PURE__ */ s("div", { class: "col-2" }, " Title ", -1)), tc = { class: "col-10" }, Nc = { class: "row" }, Lc = /* @__PURE__ */ JA(() => /* @__PURE__ */ s("div", { class: "col-2" }, " Description ", -1)), jc = { class: "col-10" }, uc = { class: "row" }, ic = /* @__PURE__ */ JA(() => /* @__PURE__ */ s("div", { class: "col-2" }, " Media ", -1)), ec = { class: "col-10" }, Sc = /* @__PURE__ */ f({
  __name: "App",
  props: {
    dataAttributes: null,
    queryParameters: null,
    apiRoot: null
  },
  setup(M) {
    const A = M, I = ci();
    A.apiRoot && I.setApiRoot(A.apiRoot);
    const g = x(() => I.template), D = x(() => {
      var a;
      return (a = g.value) == null ? void 0 : a.entityTemplateSettings.titleField;
    }), t = x(() => {
      var a;
      return (a = g.value) == null ? void 0 : a.entityTemplateSettings.descriptionField;
    }), N = x(() => {
      var a;
      return (a = g.value) == null ? void 0 : a.entityTemplateSettings.mediaField;
    }), L = x(() => {
      var a, w, n, o;
      return [
        { formGroupName: "Matadata Form", formGroup: (w = (a = g.value) == null ? void 0 : a.entityTemplateSettings.metadataForms) == null ? void 0 : w.filter((E) => E.isRequired) },
        { formGroupName: "Data Form", formGroup: (o = (n = g.value) == null ? void 0 : n.entityTemplateSettings.dataForms) == null ? void 0 : o.filter((E) => E.isRequired) }
      ];
    });
    Zl();
    const j = () => {
      var a, w;
      (w = (a = I.template) == null ? void 0 : a.entityTemplateSettings.metadataForms) == null || w.push({ id: iM.create().toString(), formId: iM.createEmpty(), name: "" });
    }, i = () => {
      var a, w;
      (w = (a = I.template) == null ? void 0 : a.entityTemplateSettings.dataForms) == null || w.push({ id: iM.create().toString(), formId: iM.createEmpty(), name: "" });
    }, u = () => I.saveTemplate(), C = rL().params.id;
    return C && I.loadTemplate(C), dM(() => {
      var a;
      return (a = D == null ? void 0 : D.value) == null ? void 0 : a.formId;
    }, (a) => {
      I.associateForm(a);
    }), dM(() => {
      var a;
      return (a = t == null ? void 0 : t.value) == null ? void 0 : a.formId;
    }, (a) => {
      I.associateForm(a);
    }), dM(() => {
      var a;
      return (a = N == null ? void 0 : N.value) == null ? void 0 : a.formId;
    }, (a) => {
      I.associateForm(a);
    }), $M(() => {
      var a;
      I.newTemplate(), I.loadFormEntries(), g.value && ((a = g.value.id) == null ? void 0 : a.toString()) !== iM.EMPTY && I.loadTemplate(g.value.id);
    }), (a, w) => {
      const n = sM("b-col"), o = sM("b-form-input"), E = sM("b-row"), l = sM("b-form-textarea");
      return T(), r(MM, null, [
        k(TL, {
          model: S(I).transientMessageModel
        }, null, 8, ["model"]),
        s("div", { class: "control" }, [
          s("button", {
            class: "btn btn-success",
            onClick: u
          }, "Save")
        ]),
        Zs,
        S(g) ? (T(), r("div", Ps, [
          s("div", Bs, [
            k(E, null, {
              default: b(() => [
                k(n, { class: "col-sm-2" }, {
                  default: b(() => [
                    Fs
                  ]),
                  _: 1
                }),
                k(n, { class: "col-sm-10" }, {
                  default: b(() => [
                    k(o, {
                      modelValue: S(g).name,
                      "onUpdate:modelValue": w[0] || (w[0] = (Y) => S(g).name = Y)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            Xs,
            k(E, null, {
              default: b(() => [
                k(n, { class: "col-sm-2" }, {
                  default: b(() => [
                    Rs
                  ]),
                  _: 1
                }),
                k(n, { class: "col-sm-10" }, {
                  default: b(() => [
                    k(l, {
                      modelValue: S(g).description,
                      "onUpdate:modelValue": w[1] || (w[1] = (Y) => S(g).description = Y)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            Hs,
            k(E, null, {
              default: b(() => [
                k(n, { class: "col-sm-2" }, {
                  default: b(() => [
                    _s
                  ]),
                  _: 1
                }),
                k(n, { class: "col-sm-10" }, {
                  default: b(() => [
                    s("h6", null, F(S(g).state), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          s("div", null, [
            s("div", $s, [
              qs,
              k(S(vN), {
                class: "dragArea list-group w-full",
                list: S(g).entityTemplateSettings.metadataForms
              }, {
                default: b(() => [
                  (T(!0), r(MM, null, aM(S(g).entityTemplateSettings.metadataForms, (Y) => (T(), r("div", {
                    key: Y.id.toString()
                  }, [
                    k(ye, {
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
          s("div", Ks, [
            Mc,
            k(S(vN), {
              class: "dragArea list-group w-full",
              list: S(g).entityTemplateSettings.dataForms
            }, {
              default: b(() => [
                (T(!0), r(MM, null, aM(S(g).entityTemplateSettings.dataForms, (Y) => (T(), r("div", {
                  key: Y.id.toString()
                }, [
                  k(ye, {
                    model: Y,
                    class: "form-field-border form-field red"
                  }, null, 8, ["model"])
                ]))), 128))
              ]),
              _: 1
            }, 8, ["list"]),
            s("button", {
              class: "btn btn-warning btn-red",
              onClick: i
            }, "+ Add")
          ]),
          S(g).forms ? (T(), r("div", Ac, [
            Ic,
            s("div", gc, [
              Dc,
              s("div", tc, [
                k(S(Ej), {
                  model: S(D),
                  "option-source": S(L),
                  forms: S(I).forms
                }, null, 8, ["model", "option-source", "forms"])
              ])
            ]),
            s("div", Nc, [
              Lc,
              s("div", jc, [
                k(S(Ej), {
                  model: S(t),
                  "option-source": S(L),
                  forms: S(I).forms
                }, null, 8, ["model", "option-source", "forms"])
              ])
            ]),
            s("div", uc, [
              ic,
              s("div", ec, [
                k(S(Ej), {
                  model: S(N),
                  "option-source": S(L),
                  forms: S(I).forms
                }, null, 8, ["model", "option-source", "forms"])
              ])
            ])
          ])) : P("", !0)
        ])) : P("", !0)
      ], 64);
    };
  }
});
const ou = /* @__PURE__ */ PM(Sc, [["__scopeId", "data-v-669d5b02"]]), Cc = (M, A) => M == null ? void 0 : M.data.find((I) => I.formId === A), oN = (M, A) => {
  var I;
  return (I = Cc(M, A == null ? void 0 : A.formId)) == null ? void 0 : I.fieldData.find((g) => g.fieldId === (A == null ? void 0 : A.fieldId));
}, nj = (M, A) => {
  var I, g;
  return (g = (I = M == null ? void 0 : M.forms) == null ? void 0 : I.find((D) => (D == null ? void 0 : D.id) === A.formId)) == null ? void 0 : g.fields.find((D) => D.id === (A == null ? void 0 : A.fieldId));
}, ac = (M, A) => {
  le(M, A.entityTemplateSettings.metadataForms, A.forms), le(M, A.entityTemplateSettings.dataForms, A.forms);
}, le = (M, A, I) => {
  A.filter((g) => g.isRequired).forEach((g) => {
    if (M.data.filter((D) => D.formId == g.id).length == 0) {
      const D = I.filter((N) => N.id === g.id)[0], t = GC(D, "");
      t.id = iM.create().toString(), M.data.push(t);
    }
  });
}, wc = (M, A, I) => {
  var g = A.entityTemplateSettings.titleField, D = M.data.filter((t) => t.formId == (g == null ? void 0 : g.formId))[0].fieldData.filter((t) => t.fieldId == (g == null ? void 0 : g.fieldId))[0];
  return bC(D, I);
}, Ec = (M, A, I) => {
  var g = A.entityTemplateSettings.descriptionField, D = M.data.filter((t) => t.formId == (g == null ? void 0 : g.formId))[0].fieldData.filter((t) => t.fieldId == (g == null ? void 0 : g.fieldId))[0];
  return bC(D, I);
}, dt = hI("EntityEditorStore", {
  state: () => ({
    id: null,
    templates: [],
    entityTemplate: null,
    entity: null,
    transientMessageModel: {},
    updatedFileKeys: [],
    entitySearchResult: null,
    storeId: iM.create().toString(),
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
        id: iM.createEmpty().toString(),
        templateId: iM.createEmpty().toString(),
        entityType: EL.Unknown,
        data: [],
        subjectRelationships: [],
        objectRelationships: [],
        files: [],
        created: new Date(),
        updated: new Date(),
        title: "",
        description: "",
        state: jD.Active
      };
    },
    loadTemplate(M) {
      if (M.toString() === iM.EMPTY)
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
        D.fieldData.forEach((t) => {
          var N, L;
          if (t.fieldId.toString() === A.toString()) {
            t.fileReferences || (t.fileReferences = []), I = this.entity.id + "_" + t.id + "_" + t.fieldId, (N = this.updatedFileKeys) == null || N.push(I);
            let j = I + "_" + M.name;
            (L = t.fileReferences) == null || L.push({
              id: iM.create().toString(),
              fileName: j,
              originalFileName: M.name,
              thumbnail: "",
              contentType: M.type,
              size: M.size,
              created: new Date(),
              updated: new Date(),
              fieldId: A.toString()
            });
          }
        });
      });
    },
    saveEntity() {
      var j, i, u, e, C, a;
      const M = ((i = (j = this.entity) == null ? void 0 : j.id) == null ? void 0 : i.toString()) === iM.EMPTY;
      this.entity.title = wc(this.entity, this.entityTemplate, " | "), this.entity.description = Ec(this.entity, this.entityTemplate, " | ");
      let A = this.getApiRoot, I = "";
      M ? (console.log("Saving new entity."), ((e = (u = this.entity) == null ? void 0 : u.id) == null ? void 0 : e.toString()) === iM.EMPTY && (this.entity.id = iM.create().toString()), I = "POST") : (console.log("Updating existing entity."), A = `${A}/${(C = this.entity) == null ? void 0 : C.id}`, I = "PUT");
      const g = mA();
      let D = g.files, t = g.fileKeys;
      var N = new FormData();
      let L = 0;
      D == null || D.forEach((w) => {
        this.addFileReference(w, iM.parse(t[L])), L++;
      }), N.append("value", JSON.stringify(this.entity)), D == null || D.forEach((w) => {
        N.append("files", w);
      }), (a = this.updatedFileKeys) == null || a.forEach((w) => {
        N.append("fileKeys", w);
      }), fetch(A, {
        body: N,
        method: I,
        headers: {
          encType: "multipart/form-data"
        }
      }).then((w) => {
        if (w.ok)
          this.transientMessageModel.message = "The entity saved successfully", this.transientMessageModel.messageClass = "success";
        else
          switch (M && this.entity && (this.entity.id = iM.EMPTY), this.transientMessageModel.messageClass = "danger", w.status) {
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
      }).catch((w) => {
        M && this.entity && (this.entity.id = iM.EMPTY), this.transientMessageModel.message = "Unknown error occurred", this.transientMessageModel.messageClass = "danger", console.error("Save/Update Entity API Error:", w);
      });
    },
    loadEntity(M) {
      const A = `${cA.dataRepositoryApiRoot}/api/entities/${M}`;
      fetch(A, {
        method: "GET"
      }).then((I) => I.json()).then((I) => {
        this.entity = I;
      }).catch((I) => {
        console.error("Load Entity API Error:", I);
      });
    },
    loadEntities(M, A, I, g, D) {
      let t = cA.dataRepositoryApiRoot + "/api/entities/" + M + "/" + A + "/" + I + "/" + g + "/" + D;
      fetch(t, {
        method: "GET"
      }).then((N) => N.json()).then((N) => {
        this.entitySearchResult = N;
      }).catch((N) => {
        console.error("Load Entities API Error:", N);
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
      var g, D, t, N, L;
      const A = (D = (g = M == null ? void 0 : M.entityTemplate) == null ? void 0 : g.entityTemplateSettings) == null ? void 0 : D.titleField;
      return (L = (N = (t = M.entityTemplate) == null ? void 0 : t.forms) == null ? void 0 : N.filter((j) => j.id === (A == null ? void 0 : A.formId))[0]) == null ? void 0 : L.fields.filter((j) => j.id == (A == null ? void 0 : A.fieldId))[0];
    },
    descriptionField: (M) => {
      var g, D, t, N, L;
      const A = (D = (g = M == null ? void 0 : M.entityTemplate) == null ? void 0 : g.entityTemplateSettings) == null ? void 0 : D.descriptionField;
      return (L = (N = (t = M.entityTemplate) == null ? void 0 : t.forms) == null ? void 0 : N.filter((j) => j.id === (A == null ? void 0 : A.formId))[0]) == null ? void 0 : L.fields.filter((j) => j.id == (A == null ? void 0 : A.fieldId))[0];
    },
    mediaField: (M) => {
      var g, D, t, N, L;
      const A = (D = (g = M == null ? void 0 : M.entityTemplate) == null ? void 0 : g.entityTemplateSettings) == null ? void 0 : D.mediaField;
      return (L = (N = (t = M.entityTemplate) == null ? void 0 : t.forms) == null ? void 0 : N.filter((j) => j.id === (A == null ? void 0 : A.formId))[0]) == null ? void 0 : L.fields.filter((j) => j.id == (A == null ? void 0 : A.fieldId))[0];
    },
    getFiles: (M) => mA().files,
    getSelectedEntityIds: (M) => (console.log("entity editor store id: " + M.storeId), zL(M.storeId).selectedEntityIds),
    getApiRoot: (M) => M.apiRoot ? M.apiRoot : cA.dataRepositoryApiRoot + "/api/entities"
  }
}), Tc = ["onUpdate:modelValue"], nc = { class: "col-sm-2" }, Ba = /* @__PURE__ */ f({
  __name: "CustomOptions",
  props: {
    model: null,
    modelData: null
  },
  setup(M) {
    const A = M, I = mA(), g = x(() => {
      var N;
      return A.modelData ? A.modelData : (N = I.formData.fieldData) == null ? void 0 : N.find((L) => L.fieldId == A.model.id);
    }), D = (N) => {
      var L;
      console.log(N), (L = g.value.customOptionValues) == null || L.splice(N, 1);
    }, t = () => {
      g.value.customOptionValues || (g.value.customOptionValues = []), g.value.customOptionValues.push("");
    };
    return (N, L) => {
      const j = sM("font-awesome-icon");
      return T(), r(MM, null, [
        s("div", null, [
          (T(!0), r(MM, null, aM(S(g).customOptionValues, (i, u) => (T(), r("span", {
            class: "custom-option",
            key: u
          }, [
            _M(s("input", {
              type: "text",
              "onUpdate:modelValue": (e) => S(g).customOptionValues[u] = e
            }, null, 8, Tc), [
              [bN, S(g).customOptionValues[u]]
            ]),
            k(j, {
              icon: "fa-solid fa-circle-xmark",
              onClick: (e) => D(u),
              class: "fa-icon delete"
            }, null, 8, ["onClick"])
          ]))), 128))
        ]),
        s("div", nc, [
          k(j, {
            icon: "fa-solid fa-circle-plus",
            onClick: L[0] || (L[0] = (i) => t()),
            class: "fa-icon plus add-option"
          })
        ])
      ], 64);
    };
  }
}), xc = ["checked", "onChange"], oc = { key: 0 }, yc = /* @__PURE__ */ f({
  __name: "Checkboxes",
  props: {
    model: null,
    modelData: null
  },
  setup(M) {
    const A = M, I = mA(), g = x(() => {
      var N;
      return A.modelData ? A.modelData : (N = I.formData.fieldData) == null ? void 0 : N.find((L) => L.fieldId == A.model.id);
    }), D = (N) => {
      var L;
      return (L = g.value.selectedOptionIds) == null ? void 0 : L.includes(N);
    }, t = (N, L) => {
      var j, i, u;
      return L ? (j = g.value.selectedOptionIds) == null ? void 0 : j.push(N) : (u = g.value.selectedOptionIds) == null ? void 0 : u.splice((i = g.value.selectedOptionIds) == null ? void 0 : i.indexOf(N), 1);
    };
    return (N, L) => (T(), r(MM, null, [
      (T(!0), r(MM, null, aM(M.model.options, (j) => (T(), r("div", {
        key: j.id,
        class: "option-field"
      }, [
        s("input", {
          type: "checkbox",
          checked: D(j.id),
          onChange: (i) => t(j.id, i.target.checked)
        }, null, 40, xc),
        DM(" " + F(AD(j, S(I).lang)) + " ", 1),
        j.isExtendedInput ? (T(), r("span", oc)) : P("", !0)
      ]))), 128)),
      k(Ba, { model: M.model }, null, 8, ["model"])
    ], 64));
  }
}), lc = { class: "col-sm-8" }, sc = { id: "dataOptions" }, cc = { class: "col-sm-2" }, rc = /* @__PURE__ */ f({
  __name: "DataList",
  props: {
    model: null,
    modelData: null
  },
  setup(M) {
    const A = M, I = mA(), g = x(() => {
      var L;
      return A.modelData ? A.modelData : (L = I.formData.fieldData) == null ? void 0 : L.find((j) => j.fieldId == A.model.id);
    }), D = (L) => {
      var i, u;
      const j = (u = (i = A.model) == null ? void 0 : i.options) == null ? void 0 : u.filter((e) => e.id === L).at(0);
      return j ? AD(j, I.lang) : "";
    }, t = (L) => {
      var i, u;
      const j = (u = (i = A.model) == null ? void 0 : i.options) == null ? void 0 : u.filter((e) => AD(e, I.lang) === L).at(0);
      return j == null ? void 0 : j.id;
    }, N = x({
      get: () => {
        var L, j;
        return D((j = (L = g == null ? void 0 : g.value) == null ? void 0 : L.selectedOptionIds) == null ? void 0 : j.at(0));
      },
      set: (L) => {
        const j = t(L);
        j ? g.value.selectedOptionIds = [j] : g.value.selectedOptionIds = [];
      }
    });
    return (L, j) => {
      const i = sM("b-form-input");
      return T(), r(MM, null, [
        s("div", lc, [
          k(i, {
            list: "dataOptions",
            id: "model.id",
            name: "model.id",
            modelValue: S(N),
            "onUpdate:modelValue": j[0] || (j[0] = (u) => sA(N) ? N.value = u : null)
          }, null, 8, ["modelValue"]),
          s("datalist", sc, [
            (T(!0), r(MM, null, aM(M.model.options, (u) => (T(), r("option", {
              key: u.id
            }, F(AD(u, S(I).lang)), 1))), 128))
          ])
        ]),
        s("div", cc, [
          k(Ba, { model: M.model }, null, 8, ["model"])
        ])
      ], 64);
    };
  }
}), zc = { class: "col-sm-3" }, Yc = ["value"], dc = /* @__PURE__ */ f({
  __name: "DropDown",
  props: {
    model: null,
    modelData: null
  },
  setup(M) {
    const A = M, I = mA(), g = x(() => {
      var t;
      return A.modelData ? A.modelData : (t = I.formData.fieldData) == null ? void 0 : t.find((N) => N.fieldId == A.model.id);
    }), D = x({
      get: () => {
        var t;
        return ((t = g == null ? void 0 : g.value) == null ? void 0 : t.selectedOptionIds) && g.value.selectedOptionIds.length > 0 ? g.value.selectedOptionIds[0] : iM.EMPTY;
      },
      set: (t) => g.value.selectedOptionIds = [t]
    });
    return (t, N) => (T(), r("div", zc, [
      _M(s("select", {
        "onUpdate:modelValue": N[0] || (N[0] = (L) => sA(D) ? D.value = L : null),
        class: "form-select"
      }, [
        (T(!0), r(MM, null, aM(M.model.options, (L) => (T(), r("option", {
          key: L.id,
          value: L.id
        }, F(AD(L, S(I).lang)), 9, Yc))), 128))
      ], 512), [
        [LD, S(D)]
      ])
    ]));
  }
}), mc = ["value"], Uc = /* @__PURE__ */ f({
  __name: "RadioButtons",
  props: {
    model: null,
    modelData: null
  },
  setup(M) {
    const A = M, I = mA(), g = x(() => {
      var t;
      return A.modelData ? A.modelData : (t = I.formData.fieldData) == null ? void 0 : t.find((N) => N.fieldId == A.model.id);
    }), D = x({
      get: () => {
        var t;
        return ((t = g == null ? void 0 : g.value) == null ? void 0 : t.selectedOptionIds) && g.value.selectedOptionIds.length > 0 ? g.value.selectedOptionIds[0] : iM.EMPTY;
      },
      set: (t) => g.value.selectedOptionIds = [t]
    });
    return (t, N) => (T(!0), r(MM, null, aM(M.model.options, (L) => (T(), r("div", {
      key: L.id,
      class: "option-field"
    }, [
      _M(s("input", {
        type: "radio",
        name: "model.id",
        value: L.id,
        "onUpdate:modelValue": N[0] || (N[0] = (j) => sA(D) ? D.value = j : null)
      }, null, 8, mc), [
        [dC, S(D)]
      ]),
      DM(" " + F(AD(L, S(I).lang)), 1)
    ]))), 128));
  }
}), hc = { key: 0 }, Oc = { key: 1 }, bc = { key: 2 }, Wc = { key: 3 }, kc = { key: 4 }, pc = { key: 5 }, Qc = { key: 6 }, fc = { key: 7 }, Fa = /* @__PURE__ */ f({
  __name: "Text",
  props: {
    model: null,
    textType: null,
    decimalPoints: null
  },
  setup(M) {
    const A = M, I = A.decimalPoints ? A.decimalPoints : 2;
    return (g, D) => {
      const t = sM("b-form-input"), N = sM("b-form-textarea");
      return T(), r(MM, null, [
        M.textType === S(UM).ShortAnswer ? (T(), r("div", hc, [
          k(t, {
            modelValue: M.model.value,
            "onUpdate:modelValue": D[0] || (D[0] = (L) => M.model.value = L)
          }, null, 8, ["modelValue"])
        ])) : M.textType === S(UM).Paragraph ? (T(), r("div", Oc, [
          k(N, {
            modelValue: M.model.value,
            "onUpdate:modelValue": D[1] || (D[1] = (L) => M.model.value = L),
            rows: "3",
            "max-rows": "6"
          }, null, 8, ["modelValue"])
        ])) : M.textType === S(UM).RichText ? (T(), r("div", bc, [
          k(N, {
            modelValue: M.model.value,
            "onUpdate:modelValue": D[2] || (D[2] = (L) => M.model.value = L),
            rows: "3",
            "max-rows": "6"
          }, null, 8, ["modelValue"])
        ])) : P("", !0),
        M.textType === S(UM).Email ? (T(), r("div", Wc, [
          k(t, {
            modelValue: M.model.value,
            "onUpdate:modelValue": D[3] || (D[3] = (L) => M.model.value = L),
            type: "email"
          }, null, 8, ["modelValue"])
        ])) : P("", !0),
        M.textType === S(UM).Integer ? (T(), r("div", kc, [
          k(t, {
            type: "number",
            step: "1",
            modelValue: M.model.value,
            "onUpdate:modelValue": D[4] || (D[4] = (L) => M.model.value = L)
          }, null, 8, ["modelValue"])
        ])) : P("", !0),
        M.textType === S(UM).Decimal ? (T(), r("div", pc, [
          k(t, {
            type: "number",
            step: Math.pow(10, -S(I)),
            modelValue: M.model.value,
            "onUpdate:modelValue": D[5] || (D[5] = (L) => M.model.value = L)
          }, null, 8, ["step", "modelValue"])
        ])) : P("", !0),
        M.textType === S(UM).Date ? (T(), r("div", Qc, [
          k(t, {
            modelValue: M.model.value,
            "onUpdate:modelValue": D[6] || (D[6] = (L) => M.model.value = L),
            type: "date"
          }, null, 8, ["modelValue"])
        ])) : P("", !0),
        M.textType === S(UM).DateTime ? (T(), r("div", fc, [
          k(t, {
            type: "datetime-local",
            modelValue: M.model.value,
            "onUpdate:modelValue": D[7] || (D[7] = (L) => M.model.value = L)
          }, null, 8, ["modelValue"])
        ])) : P("", !0)
      ], 64);
    };
  }
}), vc = /* @__PURE__ */ f({
  __name: "TextCollection",
  props: {
    model: null,
    textType: null
  },
  setup(M) {
    return (A, I) => (T(!0), r(MM, null, aM(M.model.values, (g) => (T(), V(Fa, {
      key: g.id,
      model: g,
      "text-type": M.textType
    }, null, 8, ["model", "text-type"]))), 128));
  }
}), Gc = ["model"], Jc = { class: "col col-sm-11" }, Vc = { class: "col col-sm-1" }, Zc = { key: 0 }, Pc = /* @__PURE__ */ f({
  __name: "MultilingualTextInput",
  props: {
    model: null,
    modelData: null
  },
  setup(M) {
    const A = M, I = mA(), g = x(() => {
      var N;
      return A.modelData ? A.modelData : (N = I.formData.fieldData) == null ? void 0 : N.find((L) => L.fieldId == A.model.id);
    }), D = () => {
      var N;
      return (N = g.value.multilingualTextValues) == null ? void 0 : N.push(uD(I.lang));
    }, t = (N) => {
      var L;
      console.log(N), (L = g.value.multilingualTextValues) == null || L.splice(N, 1);
    };
    return (N, L) => {
      var i;
      const j = sM("font-awesome-icon");
      return T(), r(MM, null, [
        (T(!0), r(MM, null, aM((i = S(g)) == null ? void 0 : i.multilingualTextValues, (u, e) => (T(), r("div", {
          key: u.id,
          model: u,
          class: "row mb-3"
        }, [
          s("div", Jc, [
            k(vc, {
              model: u,
              "text-type": M.model.type
            }, null, 8, ["model", "text-type"])
          ]),
          s("div", Vc, [
            S(g).multilingualTextValues.length > 1 ? (T(), r("div", Zc, [
              k(j, {
                icon: "fa-solid fa-circle-xmark",
                onClick: (C) => t(e),
                class: "fa-icon delete"
              }, null, 8, ["onClick"])
            ])) : P("", !0)
          ])
        ], 8, Gc))), 128)),
        s("div", null, [
          k(j, {
            icon: "fa-solid fa-circle-plus",
            onClick: L[0] || (L[0] = (u) => D()),
            class: "fa-icon plus add-option"
          })
        ])
      ], 64);
    };
  }
}), Bc = ["model"], Fc = { class: "col col-sm-11" }, Xc = {
  key: 0,
  class: "col-sm-1"
}, Rc = { class: "col-sm-1" }, Hc = /* @__PURE__ */ f({
  __name: "MonolingualTextInput",
  props: {
    model: null,
    modelData: null
  },
  setup(M) {
    const A = M, I = mA(), g = x(() => {
      var N;
      return A.modelData ? A.modelData : (N = I.formData.fieldData) == null ? void 0 : N.find((L) => L.fieldId == A.model.id);
    }), D = () => {
      var N;
      return (N = g.value.monolingualTextValues) == null ? void 0 : N.push(OC(null));
    }, t = (N) => {
      var L;
      (L = g.value.monolingualTextValues) == null || L.splice(N, 1);
    };
    return (N, L) => {
      const j = sM("font-awesome-icon");
      return T(), r(MM, null, [
        (T(!0), r(MM, null, aM(S(g).monolingualTextValues, (i, u) => (T(), r("div", {
          key: i.id,
          model: i,
          class: "row mb-3"
        }, [
          s("div", Fc, [
            k(Fa, {
              model: i,
              "text-type": M.model.type
            }, null, 8, ["model", "text-type"])
          ]),
          S(g).monolingualTextValues.length > 1 ? (T(), r("div", Xc, [
            k(j, {
              icon: "fa-solid fa-circle-xmark",
              onClick: (e) => t(u),
              class: "fa-icon delete"
            }, null, 8, ["onClick"])
          ])) : P("", !0)
        ], 8, Bc))), 128)),
        s("div", Rc, [
          k(j, {
            icon: "fa-solid fa-circle-plus",
            onClick: L[0] || (L[0] = (i) => D()),
            class: "fa-icon plus add-option"
          })
        ])
      ], 64);
    };
  }
}), _c = /* @__PURE__ */ s("br", null, null, -1), $c = ["innerHTML"], qc = /* @__PURE__ */ f({
  __name: "InfoSection",
  props: {
    model: null
  },
  setup(M) {
    const A = M, I = mA(), g = vC(A.model, I.lang);
    return (D, t) => (T(), r("div", null, [
      _c,
      s("div", {
        innerHTML: S(g),
        class: "alert alert-info"
      }, null, 8, $c)
    ]));
  }
}), Kc = {
  key: 0,
  class: "alert alert-info"
}, Mr = { class: "text-field-label" }, Ar = ["data-hover"], Ir = { key: 7 }, gr = /* @__PURE__ */ s("br", null, null, -1), yN = /* @__PURE__ */ f({
  __name: "Field",
  props: {
    model: null,
    modelData: null
  },
  setup(M) {
    const A = M, I = mA(), g = fC(A.model, I.lang), D = vC(A.model, I.lang), t = kC(A.model), N = pC(A.model), L = A.model.type === UM.AttachmentField, j = A.model.id.toString(), i = (e) => {
      I.putFile(e.dataTransfer.files, A.model.id);
    }, u = (e) => {
      const C = document.getElementById(e);
      I.putFile(C == null ? void 0 : C.files, A.model.id);
    };
    return (e, C) => {
      const a = sM("font-awesome-icon"), w = sM("b-col"), n = sM("b-row"), o = sM("b-container");
      return T(), V(o, null, {
        default: b(() => [
          k(n, null, {
            default: b(() => [
              M.model.type === S(UM).InfoSection ? (T(), r("div", Kc, [
                s("h3", Mr, F(S(g)), 1)
              ])) : (T(), V(w, {
                key: 1,
                class: "col-sm-2"
              }, {
                default: b(() => [
                  DM(F(S(g)) + " ", 1),
                  S(D) ? (T(), r("span", {
                    key: 0,
                    class: "hovertext",
                    "data-hover": S(D)
                  }, [
                    k(a, {
                      icon: "fas fa-question-circle",
                      class: "fas fa-question-circle"
                    })
                  ], 8, Ar)) : P("", !0),
                  DM(" : ")
                ]),
                _: 1
              })),
              k(w, { class: "col-sm-10" }, {
                default: b(() => [
                  M.model.type === S(UM).Checkboxes ? (T(), V(yc, {
                    key: 0,
                    model: M.model,
                    modelData: M.modelData
                  }, null, 8, ["model", "modelData"])) : P("", !0),
                  M.model.type === S(UM).DataList ? (T(), V(rc, {
                    key: 1,
                    model: M.model,
                    modelData: M.modelData
                  }, null, 8, ["model", "modelData"])) : P("", !0),
                  M.model.type === S(UM).DropDown ? (T(), V(dc, {
                    key: 2,
                    model: M.model,
                    modelData: M.modelData
                  }, null, 8, ["model", "modelData"])) : P("", !0),
                  M.model.type === S(UM).RadioButtons ? (T(), V(Uc, {
                    key: 3,
                    model: M.model,
                    modelData: M.modelData
                  }, null, 8, ["model", "modelData"])) : P("", !0),
                  S(t) ? (T(), V(Pc, {
                    key: 4,
                    model: M.model,
                    modelData: M.modelData
                  }, null, 8, ["model", "modelData"])) : P("", !0),
                  S(N) ? (T(), V(Hc, {
                    key: 5,
                    model: M.model,
                    modelData: M.modelData
                  }, null, 8, ["model", "modelData"])) : P("", !0),
                  M.model.type === S(UM).InfoSection ? (T(), V(qc, {
                    key: 6,
                    model: M.model
                  }, null, 8, ["model"])) : P("", !0),
                  S(L) ? (T(), r("div", Ir, [
                    k(WC, {
                      model: M.model,
                      elementId: S(j),
                      onDrop: i,
                      onChange: C[0] || (C[0] = (E) => u(S(j)))
                    }, null, 8, ["model", "elementId"])
                  ])) : P("", !0)
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          gr
        ]),
        _: 1
      });
    };
  }
}), Dr = { class: "pt-2 mt-2" }, tr = { class: "row" }, Nr = { class: "col-sm-7" }, Lr = { class: "row mt-2" }, jr = /* @__PURE__ */ s("div", { class: "col-sm-2" }, [
  /* @__PURE__ */ s("label", null, "EntityType:")
], -1), ur = { class: "col-sm-10" }, ir = ["value"], er = { key: 1 }, Sr = { class: "row mt-2" }, Cr = /* @__PURE__ */ s("div", { class: "col-sm-2" }, [
  /* @__PURE__ */ s("label", null, "Template:")
], -1), ar = { class: "col-sm-10" }, wr = ["value"], Er = { key: 1 }, Tr = /* @__PURE__ */ s("br", null, null, -1), nr = /* @__PURE__ */ s("h5", null, "Form Fields", -1), xr = { key: 3 }, or = { class: "col-sm-5" }, yr = /* @__PURE__ */ s("legend", null, " Right side ", -1), lr = { class: "col-sm-8" }, sr = /* @__PURE__ */ s("div", { class: "col-sm-4" }, [
  /* @__PURE__ */ s("img", { src: "#" })
], -1), cr = /* @__PURE__ */ f({
  __name: "entity-summary-editor",
  setup(M) {
    var a;
    gM(!1);
    const A = dt(), { entity: I } = CL(A);
    dM(() => {
      var w;
      return (w = I.value) == null ? void 0 : w.templateId;
    }, async (w) => {
      A.loadTemplate(w);
    }), A.loadTemplate((a = I.value) == null ? void 0 : a.templateId);
    const g = x(() => A.entity.id.toString() === iM.EMPTY), D = x(() => A.templates), t = x(() => A.entityTemplate), N = Object.values(EL), L = x(() => {
      var w;
      return nj(t.value, (w = t.value) == null ? void 0 : w.entityTemplateSettings.titleField);
    }), j = x(() => {
      var w;
      return oN(I.value, (w = t.value) == null ? void 0 : w.entityTemplateSettings.titleField);
    }), i = x(() => {
      var w;
      return nj(t.value, (w = t.value) == null ? void 0 : w.entityTemplateSettings.descriptionField);
    }), u = x(() => {
      var w;
      return oN(I.value, (w = t.value) == null ? void 0 : w.entityTemplateSettings.descriptionField);
    }), e = x(() => {
      var w;
      return nj(t.value, (w = t.value) == null ? void 0 : w.entityTemplateSettings.mediaField);
    }), C = x(() => {
      var w;
      return oN(I.value, (w = t.value) == null ? void 0 : w.entityTemplateSettings.mediaField);
    });
    return dM(() => t.value, async (w) => {
      ac(I.value, w);
    }), (w, n) => {
      var o, E, l, Y, z, m, W, v, d, U, Z, R, AM, LM, IM, lM, SM, uM, bM;
      return T(), r("div", Dr, [
        s("div", tr, [
          s("fieldset", Nr, [
            s("div", Lr, [
              jr,
              s("div", ur, [
                S(g) ? _M((T(), r("select", {
                  key: 0,
                  "onUpdate:modelValue": n[0] || (n[0] = (oM) => S(I).entityType = oM),
                  class: "form-select"
                }, [
                  (T(!0), r(MM, null, aM(S(N), (oM) => (T(), r("option", {
                    key: oM,
                    value: oM
                  }, F(oM), 9, ir))), 128))
                ], 512)), [
                  [LD, S(I).entityType]
                ]) : (T(), r("span", er, F((o = S(I)) == null ? void 0 : o.entityType), 1))
              ])
            ]),
            s("div", Sr, [
              Cr,
              s("div", ar, [
                S(g) ? _M((T(), r("select", {
                  key: 0,
                  "onUpdate:modelValue": n[1] || (n[1] = (oM) => S(I).templateId = oM),
                  class: "form-select"
                }, [
                  (T(!0), r(MM, null, aM(S(D), (oM) => {
                    var hM;
                    return T(), r("option", {
                      key: oM.id.toString(),
                      value: (hM = oM.id) == null ? void 0 : hM.toString()
                    }, F(oM.name), 9, wr);
                  }), 128))
                ], 512)), [
                  [LD, S(I).templateId]
                ]) : (T(), r("span", Er, F((E = S(t)) == null ? void 0 : E.name), 1))
              ])
            ]),
            Tr,
            nr,
            S(A).titleField ? (T(), V(yN, {
              key: 0,
              model: S(L),
              "model-data": S(j)
            }, null, 8, ["model", "model-data"])) : P("", !0),
            S(A).descriptionField ? (T(), V(yN, {
              key: 1,
              model: S(i),
              "model-data": S(u)
            }, null, 8, ["model", "model-data"])) : P("", !0),
            S(A).mediaField ? (T(), V(yN, {
              key: 2,
              model: S(e),
              "model-data": S(C)
            }, null, 8, ["model", "model-data"])) : P("", !0),
            S(A).mediaField && ((Y = (l = S(C)) == null ? void 0 : l.fileReferences) == null ? void 0 : Y.length) > 0 ? (T(), r("div", xr, [
              (T(!0), r(MM, null, aM((z = S(C)) == null ? void 0 : z.fileReferences, (oM) => (T(), r("div", {
                key: oM.id
              }, [
                s("div", null, F(oM.originalFileName), 1)
              ]))), 128))
            ])) : P("", !0)
          ]),
          s("fieldset", or, [
            yr,
            s("div", lr, [
              s("div", null, F((v = (W = (m = S(L)) == null ? void 0 : m.title) == null ? void 0 : W.values[0]) == null ? void 0 : v.value) + ": " + F((Z = (U = (d = S(j)) == null ? void 0 : d.multilingualTextValues[0]) == null ? void 0 : U.values[0]) == null ? void 0 : Z.value), 1),
              s("div", null, F((LM = (AM = (R = S(i)) == null ? void 0 : R.title) == null ? void 0 : AM.values[0]) == null ? void 0 : LM.value) + ": " + F((SM = (lM = (IM = S(u)) == null ? void 0 : IM.multilingualTextValues[0]) == null ? void 0 : lM.values[0]) == null ? void 0 : SM.value), 1),
              s("div", null, F((bM = (uM = S(C)) == null ? void 0 : uM.fileReferences[0]) == null ? void 0 : bM.originalFileName), 1)
            ]),
            sr
          ])
        ])
      ]);
    };
  }
}), rr = /* @__PURE__ */ f({
  __name: "Form",
  props: {
    model: null,
    entity: null
  },
  setup(M) {
    const A = M, I = (g) => oN(A.entity, { formId: A.model.id, fieldId: g });
    return (g, D) => {
      var t;
      return T(!0), r(MM, null, aM((t = M.model) == null ? void 0 : t.fields, (N) => (T(), V(yN, {
        key: N.id,
        model: N,
        modelData: I(N.id)
      }, null, 8, ["model", "modelData"]))), 128);
    };
  }
}), zr = { key: 0 }, Yr = ["onClick"], se = /* @__PURE__ */ f({
  __name: "FormList",
  props: {
    formEntries: null,
    entity: null
  },
  setup(M) {
    var t;
    const A = M, I = dt(), g = gM((t = A.formEntries[0]) == null ? void 0 : t.id.toString()), D = x(() => {
      var N, L;
      return (L = (N = I.entityTemplate) == null ? void 0 : N.forms) == null ? void 0 : L.find((j) => j.id.toString() === g.value);
    });
    return (N, L) => M.formEntries ? (T(), r("div", zr, [
      (T(!0), r(MM, null, aM(M.formEntries, (j) => (T(), r("span", {
        key: j.id.toString()
      }, [
        s("a", {
          href: "#",
          onClick: (i) => g.value = j.id
        }, F(j.name) + " | ", 9, Yr)
      ]))), 128)),
      S(D) ? (T(), V(rr, {
        key: 0,
        model: S(D),
        entity: M.entity
      }, null, 8, ["model", "entity"])) : P("", !0)
    ])) : P("", !0);
  }
}), dr = { class: "form-field-border" }, mr = { key: 0 }, Ur = { class: "form-field-border" }, ce = /* @__PURE__ */ f({
  __name: "EntityAssociationPanel",
  props: {
    entity: null,
    relationshipType: null,
    panelTitle: null
  },
  setup(M) {
    const A = M, I = dt(), { entity: g, storeId: D } = CL(I);
    x(() => {
      var N;
      return (N = A.entity) == null ? void 0 : N.subjectRelationships.filter((L) => L.name == A.relationshipType);
    });
    const t = () => {
      I.AddToRelationObject();
    };
    return (N, L) => {
      const j = sM("b-col"), i = sM("b-row"), u = sM("font-awesome-icon");
      return T(), r(MM, null, [
        k(i, null, {
          default: b(() => [
            k(j, { class: "col-sm-5" }, {
              default: b(() => [
                s("h6", null, F(M.relationshipType), 1)
              ]),
              _: 1
            }),
            k(j, { class: "col-sm-2" }),
            k(j, { class: "col-sm-5" }, {
              default: b(() => [
                s("h6", null, F(M.panelTitle), 1)
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        k(i, null, {
          default: b(() => [
            k(j, { class: "col-sm-5" }, {
              default: b(() => [
                s("div", dr, [
                  S(g).subjectRelationships ? (T(), r("div", mr, [
                    (T(!0), r(MM, null, aM(S(g).subjectRelationships, (e) => (T(), r("div", {
                      key: e.subjectEntityId
                    }, F(e.subjectEntityId), 1))), 128))
                  ])) : P("", !0)
                ])
              ]),
              _: 1
            }),
            k(j, { class: "col-sm-2" }, {
              default: b(() => [
                k(i, null, {
                  default: b(() => [
                    k(j, { class: "col-sm-4" }),
                    k(j, { class: "col-sm-4" }, {
                      default: b(() => [
                        s("button", {
                          class: "btn btn-primary",
                          onClick: t
                        }, [
                          k(u, { icon: "fa-solid fa-arrow-left" })
                        ])
                      ]),
                      _: 1
                    }),
                    k(j, { class: "col-sm-4" })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            k(j, { class: "col-sm-5" }, {
              default: b(() => [
                s("div", Ur, [
                  k(S(Vs), {
                    storeId: S(D).toString(),
                    entityType: S(EL).Item
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
}), hr = { class: "control" }, Or = { class: "form-field-border" }, br = { key: 1 }, Wr = { key: 2 }, kr = { key: 3 }, pr = { key: 4 }, Qr = { key: 5 }, fr = /* @__PURE__ */ f({
  __name: "App",
  props: {
    apiRoot: null
  },
  setup(M) {
    const A = M, I = gM("Member of"), g = gM("Collections"), D = gM("Relationship"), t = gM("Items"), N = dt();
    A.apiRoot && N.setApiRoot(A.apiRoot);
    const L = x(() => N.entityTemplate);
    let j = gM("summary");
    const u = rL().params.id;
    $M(() => {
      u ? (console.log("entity Id: " + u.toString()), N.loadEntity(u)) : (console.log("load empty template"), N.loadTemplates());
    }), x(() => N.templates);
    const e = () => {
      N.createNewEntity();
    };
    let C = gM(!0);
    u && (N.loadEntity(u), C.value = !1);
    const a = x(() => N.entity), w = x(() => {
      var l;
      return (l = N.entityTemplate) == null ? void 0 : l.entityTemplateSettings.metadataForms;
    }), n = x(() => {
      var l;
      return (l = N.entityTemplate) == null ? void 0 : l.entityTemplateSettings.dataForms;
    }), o = () => {
      N.saveEntity(), C.value = !1;
    }, E = x(() => N.getFiles);
    return $M(() => {
      e();
    }), (l, Y) => {
      const z = sM("b-col"), m = sM("b-row");
      return T(), r(MM, null, [
        k(TL, {
          model: S(N).transientMessageModel
        }, null, 8, ["model"]),
        s("div", hr, [
          s("button", {
            class: "btn btn-success",
            onClick: Y[0] || (Y[0] = (W) => o())
          }, "Save")
        ]),
        s("div", Or, [
          S(L) ? (T(), V(m, { key: 0 }, {
            default: b(() => [
              k(z, {
                class: "btn-group",
                role: "group",
                id: "toolBtns"
              }, {
                default: b(() => [
                  s("button", {
                    class: B(["pannel-buttons", { active: S(j) === "summary" }]),
                    onClick: Y[1] || (Y[1] = (W) => sA(j) ? j.value = "summary" : j = "summary")
                  }, "Summary", 2),
                  s("button", {
                    class: B(["pannel-buttons", { active: S(j) === "data" }]),
                    onClick: Y[2] || (Y[2] = (W) => sA(j) ? j.value = "data" : j = "data")
                  }, "Data", 2),
                  s("button", {
                    class: B(["pannel-buttons", { active: S(j) === "metadata" }]),
                    onClick: Y[3] || (Y[3] = (W) => sA(j) ? j.value = "metadata" : j = "metadata")
                  }, "Metadata", 2),
                  s("button", {
                    class: B(["pannel-buttons", { active: S(j) === "collections" }]),
                    onClick: Y[4] || (Y[4] = (W) => sA(j) ? j.value = "collections" : j = "collections")
                  }, "Collection(s)", 2),
                  s("button", {
                    class: B(["pannel-buttons", { active: S(j) === "related" }]),
                    onClick: Y[5] || (Y[5] = (W) => sA(j) ? j.value = "related" : j = "related")
                  }, "Related", 2)
                ]),
                _: 1
              })
            ]),
            _: 1
          })) : P("", !0),
          S(j) === "summary" ? (T(), r("div", br, [
            S(a) !== null ? (T(), V(cr, { key: 0 })) : P("", !0),
            DM("Summary ")
          ])) : P("", !0),
          S(j) === "data" ? (T(), r("div", Wr, [
            k(se, {
              "form-entries": S(n),
              entity: S(a)
            }, null, 8, ["form-entries", "entity"])
          ])) : P("", !0),
          S(j) === "metadata" ? (T(), r("div", kr, [
            k(se, {
              "form-entries": S(w),
              entity: S(a)
            }, null, 8, ["form-entries", "entity"])
          ])) : P("", !0),
          S(j) === "collections" ? (T(), r("div", pr, [
            k(ce, {
              entity: S(a),
              relationshipType: I.value,
              panelTitle: g.value
            }, null, 8, ["entity", "relationshipType", "panelTitle"])
          ])) : P("", !0),
          S(j) === "related" ? (T(), r("div", Qr, [
            k(ce, {
              entity: S(a),
              relationshipType: D.value,
              panelTitle: t.value
            }, null, 8, ["entity", "relationshipType", "panelTitle"])
          ])) : P("", !0)
        ]),
        (T(!0), r(MM, null, aM(S(E), (W) => (T(), r("div", {
          key: W.name
        }, F(W.name), 1))), 128))
      ], 64);
    };
  }
});
const wt = /* @__PURE__ */ PM(fr, [["__scopeId", "data-v-685bad7e"]]), Lv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  FormModels: oT,
  FormBuilder: xu,
  useFormBuilderStore: YD,
  FormSubmission: Ms,
  useFormSubmissionStore: mA,
  Login: Ds,
  useLoginStore: Ja,
  WorkflowBuilder: xs,
  useWorkflowBuilderStore: Va,
  EntityTemplateBuilder: ou,
  useEntityTemplateBuilderStore: ci,
  EntityEditor: wt,
  useEntityEditorStore: dt
}, Symbol.toStringTag, { value: "Module" })), vr = [
  {
    path: "/",
    name: "List",
    component: () => import("./List.742814e5.js")
  },
  {
    path: "/create",
    name: "Create",
    component: () => import("./Create.3fbd92c2.js")
  },
  {
    path: "/read/:id",
    name: "Read",
    component: () => import("./Read.20933146.js")
  },
  {
    path: "/update/:id",
    name: "Update",
    component: () => import("./Update.c936a780.js")
  },
  {
    path: "/delete/:id",
    name: "Delete",
    component: () => import("./Delete.5c7b92ef.js")
  }
], YL = Jl({
  history: gl(),
  routes: vr
}), Gr = hI("CRUDManagerStore", {
  state: () => ({
    entries: {},
    transientMessageModel: {},
    apiRoot: null
  }),
  actions: {
    loadEntries(M) {
      const A = `${M}`;
      console.log("LoadApi", A), fetch(A, {
        method: "GET"
      }).then((I) => I.json()).then((I) => {
        this.entries = I;
      }).catch((I) => {
        console.error("Listing entities API Error:", I);
      });
    },
    deleteObject(M, A) {
      const I = `${M}`;
      console.log("api", I), fetch(I, {
        method: "DELETE"
      }).then((g) => {
        if (g.ok) {
          let D = this.entries.findIndex((t) => t.id === A);
          this.entries.splice(D, 1), this.transientMessageModel.message = "The form saved successfully", this.transientMessageModel.messageClass = "success";
        } else
          switch (this.transientMessageModel.messageClass = "danger", g.status) {
            case 400:
              this.transientMessageModel.message = "Bad request. Failed to save the form";
              break;
            case 404:
              this.transientMessageModel.message = "Item not found";
              break;
            case 500:
              this.transientMessageModel.message = "An internal server error occurred. Failed to save the form";
              break;
            default:
              this.transientMessageModel.message = "Unknown error occured. Failed to save the form";
              break;
          }
      }).catch((g) => {
        this.transientMessageModel.message = "Unknown error occurred", this.transientMessageModel.messageClass = "danger", console.error("Delete entities API Error:", g);
      });
    },
    changeStatus(M, A, I) {
      console.log("change state started");
      const g = `${M}`;
      console.log("api", g), fetch(g, {
        body: JSON.stringify(I),
        method: "POST",
        headers: {
          encType: "multipart/form-data",
          "Content-Type": "application/json"
        }
      }).then((D) => {
        if (D.ok)
          this.transientMessageModel.message = "The form status changed successfully", this.transientMessageModel.messageClass = "success";
        else
          switch (this.transientMessageModel.messageClass = "danger", D.status) {
            case 400:
              this.transientMessageModel.message = "Bad request. Failed to save the form";
              break;
            case 404:
              this.transientMessageModel.message = "Item not found";
              break;
            case 500:
              this.transientMessageModel.message = "An internal server error occurred. Failed to save the form";
              break;
            default:
              this.transientMessageModel.message = "Unknown error occured. Failed to save the form";
              break;
          }
      }).catch((D) => {
        this.transientMessageModel.message = "Unknown error occurred", this.transientMessageModel.messageClass = "danger", console.error("Change State API Error:", D);
      });
    }
  }
}), Jr = { class: "m-2" }, Vr = { class: "header" }, dL = /* @__PURE__ */ f({
  __name: "App",
  props: {
    apiRoot: null
  },
  setup(M) {
    const A = M, I = Gr(), g = x(() => A.apiRoot);
    return $M(() => {
      I.apiRoot = g.value, I.loadEntries(g == null ? void 0 : g.value);
    }), (D, t) => {
      const N = sM("router-link"), L = sM("router-view");
      return T(), r(MM, null, [
        k(TL, {
          model: S(I).transientMessageModel
        }, null, 8, ["model"]),
        s("div", Jr, [
          s("div", Vr, [
            k(N, {
              to: "/",
              class: "navigation-menu-box"
            }, {
              default: b(() => [
                DM("List")
              ]),
              _: 1
            }),
            DM(" | "),
            k(N, {
              to: "/create",
              class: "navigation-menu-box"
            }, {
              default: b(() => [
                DM("Create")
              ]),
              _: 1
            })
          ]),
          k(L, null, {
            default: b(({ Component: j, route: i }) => [
              (T(), V(EM(j), null, {
                "object-type": b(() => [
                  Q(D.$slots, "object-type")
                ]),
                "list-entry-delegate": b(() => [
                  Q(D.$slots, "list-entry-delegate")
                ]),
                "create-delegate": b(() => [
                  Q(D.$slots, "create-delegate")
                ]),
                "read-delegate": b(() => [
                  Q(D.$slots, "read-delegate")
                ]),
                "update-delegate": b(() => [
                  Q(D.$slots, "update-delegate")
                ]),
                "delete-delegate": b(() => [
                  Q(D.$slots, "delete-delegate")
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
}), Zr = /* @__PURE__ */ f({
  __name: "App",
  props: {
    dataAttributes: null
  },
  setup(M) {
    const A = M, I = x(() => (A.dataAttributes ? A.dataAttributes.RepositoryMicroserviceUrl : "") + "/api/collections");
    return (g, D) => (T(), V(dL, { "api-root": S(I) }, {
      "object-type": b(() => [
        DM("Collection")
      ]),
      "create-delegate": b(() => [
        k(S(wt), { "api-root": S(I) }, null, 8, ["api-root"])
      ]),
      "read-delegate": b(() => [
        DM("ReadCollectionComponent")
      ]),
      "update-delegate": b(() => [
        k(S(wt), { "api-root": S(I) }, null, 8, ["api-root"])
      ]),
      "delete-delegate": b(() => [
        DM("Delete")
      ]),
      _: 1
    }, 8, ["api-root"]));
  }
}), Pr = aL(), Br = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  pinia: Pr,
  router: YL,
  App: Zr
}, Symbol.toStringTag, { value: "Module" })), Fr = /* @__PURE__ */ f({
  __name: "App",
  props: {
    dataAttributes: null
  },
  setup(M) {
    const A = M, I = x(() => (A.dataAttributes ? A.dataAttributes.RepositoryMicroserviceUrl : "") + "/api/items");
    return (g, D) => (T(), V(dL, { "api-root": S(I) }, {
      "object-type": b(() => [
        DM("Item")
      ]),
      "create-delegate": b(() => [
        k(S(wt), { "api-root": S(I) }, null, 8, ["api-root"])
      ]),
      "read-delegate": b(() => [
        DM("ReadItemComponent")
      ]),
      "update-delegate": b(() => [
        k(S(wt), { "api-root": S(I) }, null, 8, ["api-root"])
      ]),
      "delete-delegate": b(() => [
        DM("Delete")
      ]),
      _: 1
    }, 8, ["api-root"]));
  }
}), Xr = aL(), Rr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  pinia: Xr,
  router: YL,
  App: Fr
}, Symbol.toStringTag, { value: "Module" })), Hr = /* @__PURE__ */ f({
  __name: "App",
  props: {
    dataAttributes: null
  },
  setup(M) {
    const A = M, I = x(() => (A.dataAttributes ? A.dataAttributes.RepositoryMicroserviceUrl : "") + "/api/entity-templates");
    return rL().params.id, (D, t) => (T(), V(dL, { "api-root": S(I) }, {
      "object-type": b(() => [
        DM("Entity Template")
      ]),
      "create-delegate": b(() => [
        k(S(ou), { "api-root": S(I) }, null, 8, ["api-root"])
      ]),
      "read-delegate": b(() => [
        DM("ReadEntityTemplateComponent")
      ]),
      "update-delegate": b(() => [
        k(S(ou), { "api-root": S(I) }, null, 8, ["api-root"])
      ]),
      "delete-delegate": b(() => [
        DM("Delete")
      ]),
      _: 1
    }, 8, ["api-root"]));
  }
}), _r = aL(), $r = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  pinia: _r,
  router: YL,
  App: Hr
}, Symbol.toStringTag, { value: "Module" })), qr = /* @__PURE__ */ f({
  __name: "App",
  props: {
    dataAttributes: null
  },
  setup(M) {
    const A = M, I = x(() => (A.dataAttributes ? A.dataAttributes.RepositoryMicroserviceUrl : "") + "/api/forms");
    return (g, D) => (T(), V(dL, { "api-root": S(I) }, {
      "object-type": b(() => [
        DM("Form Template")
      ]),
      "create-delegate": b(() => [
        k(S(xu), { "api-root": S(I) }, null, 8, ["api-root"])
      ]),
      "read-delegate": b(() => [
        DM("ReadFormComponent")
      ]),
      "update-delegate": b(() => [
        k(S(xu), { "api-root": S(I) }, null, 8, ["api-root"])
      ]),
      "delete-delegate": b(() => [
        DM("Delete")
      ]),
      _: 1
    }, 8, ["api-root"]));
  }
}), Kr = aL(), M1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  pinia: Kr,
  router: YL,
  App: qr
}, Symbol.toStringTag, { value: "Module" }));
var yu = function(M, A) {
  return yu = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(I, g) {
    I.__proto__ = g;
  } || function(I, g) {
    for (var D in g)
      Object.prototype.hasOwnProperty.call(g, D) && (I[D] = g[D]);
  }, yu(M, A);
};
function TM(M, A) {
  if (typeof A != "function" && A !== null)
    throw new TypeError("Class extends value " + String(A) + " is not a constructor or null");
  yu(M, A);
  function I() {
    this.constructor = M;
  }
  M.prototype = A === null ? Object.create(A) : (I.prototype = A.prototype, new I());
}
var h = function() {
  return h = Object.assign || function(A) {
    for (var I, g = 1, D = arguments.length; g < D; g++) {
      I = arguments[g];
      for (var t in I)
        Object.prototype.hasOwnProperty.call(I, t) && (A[t] = I[t]);
    }
    return A;
  }, h.apply(this, arguments);
};
function MA(M, A, I) {
  if (I || arguments.length === 2)
    for (var g = 0, D = A.length, t; g < D; g++)
      (t || !(g in A)) && (t || (t = Array.prototype.slice.call(A, 0, g)), t[g] = A[g]);
  return M.concat(t || Array.prototype.slice.call(A));
}
var mL, eM, Xa, At, re, Ra, FN = {}, Ha = [], A1 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function PI(M, A) {
  for (var I in A)
    M[I] = A[I];
  return M;
}
function _a(M) {
  var A = M.parentNode;
  A && A.removeChild(M);
}
function $I(M, A, I) {
  var g, D, t, N = {};
  for (t in A)
    t == "key" ? g = A[t] : t == "ref" ? D = A[t] : N[t] = A[t];
  if (arguments.length > 2 && (N.children = arguments.length > 3 ? mL.call(arguments, 2) : I), typeof M == "function" && M.defaultProps != null)
    for (t in M.defaultProps)
      N[t] === void 0 && (N[t] = M.defaultProps[t]);
  return lN(M, N, g, D, null);
}
function lN(M, A, I, g, D) {
  var t = { type: M, props: A, key: I, ref: g, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: D == null ? ++Xa : D };
  return D == null && eM.vnode != null && eM.vnode(t), t;
}
function I1() {
  return { current: null };
}
function rg(M) {
  return M.children;
}
function HA(M, A) {
  this.props = M, this.context = A;
}
function Et(M, A) {
  if (A == null)
    return M.__ ? Et(M.__, M.__.__k.indexOf(M) + 1) : null;
  for (var I; A < M.__k.length; A++)
    if ((I = M.__k[A]) != null && I.__e != null)
      return I.__e;
  return typeof M.type == "function" ? Et(M) : null;
}
function $a(M) {
  var A, I;
  if ((M = M.__) != null && M.__c != null) {
    for (M.__e = M.__c.base = null, A = 0; A < M.__k.length; A++)
      if ((I = M.__k[A]) != null && I.__e != null) {
        M.__e = M.__c.base = I.__e;
        break;
      }
    return $a(M);
  }
}
function lu(M) {
  (!M.__d && (M.__d = !0) && At.push(M) && !XN.__r++ || re !== eM.debounceRendering) && ((re = eM.debounceRendering) || setTimeout)(XN);
}
function XN() {
  for (var M; XN.__r = At.length; )
    M = At.sort(function(A, I) {
      return A.__v.__b - I.__v.__b;
    }), At = [], M.some(function(A) {
      var I, g, D, t, N, L;
      A.__d && (N = (t = (I = A).__v).__e, (L = I.__P) && (g = [], (D = PI({}, t)).__v = t.__v + 1, ri(L, t, D, I.__n, L.ownerSVGElement !== void 0, t.__h != null ? [N] : null, g, N == null ? Et(t) : N, t.__h), Aw(g, t), t.__e != N && $a(t)));
    });
}
function qa(M, A, I, g, D, t, N, L, j, i) {
  var u, e, C, a, w, n, o, E = g && g.__k || Ha, l = E.length;
  for (I.__k = [], u = 0; u < A.length; u++)
    if ((a = I.__k[u] = (a = A[u]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? lN(null, a, null, null, a) : Array.isArray(a) ? lN(rg, { children: a }, null, null, null) : a.__b > 0 ? lN(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = I, a.__b = I.__b + 1, (C = E[u]) === null || C && a.key == C.key && a.type === C.type)
        E[u] = void 0;
      else
        for (e = 0; e < l; e++) {
          if ((C = E[e]) && a.key == C.key && a.type === C.type) {
            E[e] = void 0;
            break;
          }
          C = null;
        }
      ri(M, a, C = C || FN, D, t, N, L, j, i), w = a.__e, (e = a.ref) && C.ref != e && (o || (o = []), C.ref && o.push(C.ref, null, a), o.push(e, a.__c || w, a)), w != null ? (n == null && (n = w), typeof a.type == "function" && a.__k === C.__k ? a.__d = j = Ka(a, j, M) : j = Mw(M, a, C, E, w, j), typeof I.type == "function" && (I.__d = j)) : j && C.__e == j && j.parentNode != M && (j = Et(C));
    }
  for (I.__e = n, u = l; u--; )
    E[u] != null && gw(E[u], E[u]);
  if (o)
    for (u = 0; u < o.length; u++)
      Iw(o[u], o[++u], o[++u]);
}
function Ka(M, A, I) {
  for (var g, D = M.__k, t = 0; D && t < D.length; t++)
    (g = D[t]) && (g.__ = M, A = typeof g.type == "function" ? Ka(g, A, I) : Mw(I, g, g, D, g.__e, A));
  return A;
}
function RN(M, A) {
  return A = A || [], M == null || typeof M == "boolean" || (Array.isArray(M) ? M.some(function(I) {
    RN(I, A);
  }) : A.push(M)), A;
}
function Mw(M, A, I, g, D, t) {
  var N, L, j;
  if (A.__d !== void 0)
    N = A.__d, A.__d = void 0;
  else if (I == null || D != t || D.parentNode == null)
    M:
      if (t == null || t.parentNode !== M)
        M.appendChild(D), N = null;
      else {
        for (L = t, j = 0; (L = L.nextSibling) && j < g.length; j += 2)
          if (L == D)
            break M;
        M.insertBefore(D, t), N = t;
      }
  return N !== void 0 ? N : D.nextSibling;
}
function g1(M, A, I, g, D) {
  var t;
  for (t in I)
    t === "children" || t === "key" || t in A || HN(M, t, null, I[t], g);
  for (t in A)
    D && typeof A[t] != "function" || t === "children" || t === "key" || t === "value" || t === "checked" || I[t] === A[t] || HN(M, t, A[t], I[t], g);
}
function ze(M, A, I) {
  A[0] === "-" ? M.setProperty(A, I) : M[A] = I == null ? "" : typeof I != "number" || A1.test(A) ? I : I + "px";
}
function HN(M, A, I, g, D) {
  var t;
  M:
    if (A === "style")
      if (typeof I == "string")
        M.style.cssText = I;
      else {
        if (typeof g == "string" && (M.style.cssText = g = ""), g)
          for (A in g)
            I && A in I || ze(M.style, A, "");
        if (I)
          for (A in I)
            g && I[A] === g[A] || ze(M.style, A, I[A]);
      }
    else if (A[0] === "o" && A[1] === "n")
      t = A !== (A = A.replace(/Capture$/, "")), A = A.toLowerCase() in M ? A.toLowerCase().slice(2) : A.slice(2), M.l || (M.l = {}), M.l[A + t] = I, I ? g || M.addEventListener(A, t ? de : Ye, t) : M.removeEventListener(A, t ? de : Ye, t);
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
function Ye(M) {
  this.l[M.type + !1](eM.event ? eM.event(M) : M);
}
function de(M) {
  this.l[M.type + !0](eM.event ? eM.event(M) : M);
}
function ri(M, A, I, g, D, t, N, L, j) {
  var i, u, e, C, a, w, n, o, E, l, Y, z, m, W, v, d = A.type;
  if (A.constructor !== void 0)
    return null;
  I.__h != null && (j = I.__h, L = A.__e = I.__e, A.__h = null, t = [L]), (i = eM.__b) && i(A);
  try {
    M:
      if (typeof d == "function") {
        if (o = A.props, E = (i = d.contextType) && g[i.__c], l = i ? E ? E.props.value : i.__ : g, I.__c ? n = (u = A.__c = I.__c).__ = u.__E : ("prototype" in d && d.prototype.render ? A.__c = u = new d(o, l) : (A.__c = u = new HA(o, l), u.constructor = d, u.render = t1), E && E.sub(u), u.props = o, u.state || (u.state = {}), u.context = l, u.__n = g, e = u.__d = !0, u.__h = [], u._sb = []), u.__s == null && (u.__s = u.state), d.getDerivedStateFromProps != null && (u.__s == u.state && (u.__s = PI({}, u.__s)), PI(u.__s, d.getDerivedStateFromProps(o, u.__s))), C = u.props, a = u.state, e)
          d.getDerivedStateFromProps == null && u.componentWillMount != null && u.componentWillMount(), u.componentDidMount != null && u.__h.push(u.componentDidMount);
        else {
          if (d.getDerivedStateFromProps == null && o !== C && u.componentWillReceiveProps != null && u.componentWillReceiveProps(o, l), !u.__e && u.shouldComponentUpdate != null && u.shouldComponentUpdate(o, u.__s, l) === !1 || A.__v === I.__v) {
            for (u.props = o, u.state = u.__s, A.__v !== I.__v && (u.__d = !1), u.__v = A, A.__e = I.__e, A.__k = I.__k, A.__k.forEach(function(U) {
              U && (U.__ = A);
            }), Y = 0; Y < u._sb.length; Y++)
              u.__h.push(u._sb[Y]);
            u._sb = [], u.__h.length && N.push(u);
            break M;
          }
          u.componentWillUpdate != null && u.componentWillUpdate(o, u.__s, l), u.componentDidUpdate != null && u.__h.push(function() {
            u.componentDidUpdate(C, a, w);
          });
        }
        if (u.context = l, u.props = o, u.__v = A, u.__P = M, z = eM.__r, m = 0, "prototype" in d && d.prototype.render) {
          for (u.state = u.__s, u.__d = !1, z && z(A), i = u.render(u.props, u.state, u.context), W = 0; W < u._sb.length; W++)
            u.__h.push(u._sb[W]);
          u._sb = [];
        } else
          do
            u.__d = !1, z && z(A), i = u.render(u.props, u.state, u.context), u.state = u.__s;
          while (u.__d && ++m < 25);
        u.state = u.__s, u.getChildContext != null && (g = PI(PI({}, g), u.getChildContext())), e || u.getSnapshotBeforeUpdate == null || (w = u.getSnapshotBeforeUpdate(C, a)), v = i != null && i.type === rg && i.key == null ? i.props.children : i, qa(M, Array.isArray(v) ? v : [v], A, I, g, D, t, N, L, j), u.base = A.__e, A.__h = null, u.__h.length && N.push(u), n && (u.__E = u.__ = null), u.__e = !1;
      } else
        t == null && A.__v === I.__v ? (A.__k = I.__k, A.__e = I.__e) : A.__e = D1(I.__e, A, I, g, D, t, N, j);
    (i = eM.diffed) && i(A);
  } catch (U) {
    A.__v = null, (j || t != null) && (A.__e = L, A.__h = !!j, t[t.indexOf(L)] = null), eM.__e(U, A, I);
  }
}
function Aw(M, A) {
  eM.__c && eM.__c(A, M), M.some(function(I) {
    try {
      M = I.__h, I.__h = [], M.some(function(g) {
        g.call(I);
      });
    } catch (g) {
      eM.__e(g, I.__v);
    }
  });
}
function D1(M, A, I, g, D, t, N, L) {
  var j, i, u, e = I.props, C = A.props, a = A.type, w = 0;
  if (a === "svg" && (D = !0), t != null) {
    for (; w < t.length; w++)
      if ((j = t[w]) && "setAttribute" in j == !!a && (a ? j.localName === a : j.nodeType === 3)) {
        M = j, t[w] = null;
        break;
      }
  }
  if (M == null) {
    if (a === null)
      return document.createTextNode(C);
    M = D ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, C.is && C), t = null, L = !1;
  }
  if (a === null)
    e === C || L && M.data === C || (M.data = C);
  else {
    if (t = t && mL.call(M.childNodes), i = (e = I.props || FN).dangerouslySetInnerHTML, u = C.dangerouslySetInnerHTML, !L) {
      if (t != null)
        for (e = {}, w = 0; w < M.attributes.length; w++)
          e[M.attributes[w].name] = M.attributes[w].value;
      (u || i) && (u && (i && u.__html == i.__html || u.__html === M.innerHTML) || (M.innerHTML = u && u.__html || ""));
    }
    if (g1(M, C, e, D, L), u)
      A.__k = [];
    else if (w = A.props.children, qa(M, Array.isArray(w) ? w : [w], A, I, g, D && a !== "foreignObject", t, N, t ? t[0] : I.__k && Et(I, 0), L), t != null)
      for (w = t.length; w--; )
        t[w] != null && _a(t[w]);
    L || ("value" in C && (w = C.value) !== void 0 && (w !== M.value || a === "progress" && !w || a === "option" && w !== e.value) && HN(M, "value", w, e.value, !1), "checked" in C && (w = C.checked) !== void 0 && w !== M.checked && HN(M, "checked", w, e.checked, !1));
  }
  return M;
}
function Iw(M, A, I) {
  try {
    typeof M == "function" ? M(A) : M.current = A;
  } catch (g) {
    eM.__e(g, I);
  }
}
function gw(M, A, I) {
  var g, D;
  if (eM.unmount && eM.unmount(M), (g = M.ref) && (g.current && g.current !== M.__e || Iw(g, null, A)), (g = M.__c) != null) {
    if (g.componentWillUnmount)
      try {
        g.componentWillUnmount();
      } catch (t) {
        eM.__e(t, A);
      }
    g.base = g.__P = null, M.__c = void 0;
  }
  if (g = M.__k)
    for (D = 0; D < g.length; D++)
      g[D] && gw(g[D], A, I || typeof M.type != "function");
  I || M.__e == null || _a(M.__e), M.__ = M.__e = M.__d = void 0;
}
function t1(M, A, I) {
  return this.constructor(M, I);
}
function Tt(M, A, I) {
  var g, D, t;
  eM.__ && eM.__(M, A), D = (g = typeof I == "function") ? null : I && I.__k || A.__k, t = [], ri(A, M = (!g && I || A).__k = $I(rg, null, [M]), D || FN, FN, A.ownerSVGElement !== void 0, !g && I ? [I] : D ? null : A.firstChild ? mL.call(A.childNodes) : null, t, !g && I ? I : D ? D.__e : A.firstChild, g), Aw(t, M);
}
function N1(M, A) {
  var I = { __c: A = "__cC" + Ra++, __: M, Consumer: function(g, D) {
    return g.children(D);
  }, Provider: function(g) {
    var D, t;
    return this.getChildContext || (D = [], (t = {})[A] = this, this.getChildContext = function() {
      return t;
    }, this.shouldComponentUpdate = function(N) {
      this.props.value !== N.value && D.some(lu);
    }, this.sub = function(N) {
      D.push(N);
      var L = N.componentWillUnmount;
      N.componentWillUnmount = function() {
        D.splice(D.indexOf(N), 1), L && L.call(N);
      };
    }), g.children;
  } };
  return I.Provider.__ = I.Consumer.contextType = I;
}
mL = Ha.slice, eM = { __e: function(M, A, I, g) {
  for (var D, t, N; A = A.__; )
    if ((D = A.__c) && !D.__)
      try {
        if ((t = D.constructor) && t.getDerivedStateFromError != null && (D.setState(t.getDerivedStateFromError(M)), N = D.__d), D.componentDidCatch != null && (D.componentDidCatch(M, g || {}), N = D.__d), N)
          return D.__E = D;
      } catch (L) {
        M = L;
      }
  throw M;
} }, Xa = 0, HA.prototype.setState = function(M, A) {
  var I;
  I = this.__s != null && this.__s !== this.state ? this.__s : this.__s = PI({}, this.state), typeof M == "function" && (M = M(PI({}, I), this.props)), M && PI(I, M), M != null && this.__v && (A && this._sb.push(A), lu(this));
}, HA.prototype.forceUpdate = function(M) {
  this.__v && (this.__e = !0, M && this.__h.push(M), lu(this));
}, HA.prototype.render = rg, At = [], XN.__r = 0, Ra = 0;
var gI, xj, me, Dw = [], oj = [], Ue = eM.__b, he = eM.__r, Oe = eM.diffed, be = eM.__c, We = eM.unmount;
function L1() {
  for (var M; M = Dw.shift(); )
    if (M.__P && M.__H)
      try {
        M.__H.__h.forEach(sN), M.__H.__h.forEach(su), M.__H.__h = [];
      } catch (A) {
        M.__H.__h = [], eM.__e(A, M.__v);
      }
}
eM.__b = function(M) {
  typeof M.type != "function" || M.__m || M.__ === null ? M.__m || (M.__m = M.__ && M.__.__m ? M.__.__m : "") : M.__m = (M.__ && M.__.__m ? M.__.__m : "") + (M.__ && M.__.__k ? M.__.__k.indexOf(M) : 0), gI = null, Ue && Ue(M);
}, eM.__r = function(M) {
  he && he(M);
  var A = (gI = M.__c).__H;
  A && (xj === gI ? (A.__h = [], gI.__h = [], A.__.forEach(function(I) {
    I.__N && (I.__ = I.__N), I.__V = oj, I.__N = I.i = void 0;
  })) : (A.__h.forEach(sN), A.__h.forEach(su), A.__h = [])), xj = gI;
}, eM.diffed = function(M) {
  Oe && Oe(M);
  var A = M.__c;
  A && A.__H && (A.__H.__h.length && (Dw.push(A) !== 1 && me === eM.requestAnimationFrame || ((me = eM.requestAnimationFrame) || j1)(L1)), A.__H.__.forEach(function(I) {
    I.i && (I.__H = I.i), I.__V !== oj && (I.__ = I.__V), I.i = void 0, I.__V = oj;
  })), xj = gI = null;
}, eM.__c = function(M, A) {
  A.some(function(I) {
    try {
      I.__h.forEach(sN), I.__h = I.__h.filter(function(g) {
        return !g.__ || su(g);
      });
    } catch (g) {
      A.some(function(D) {
        D.__h && (D.__h = []);
      }), A = [], eM.__e(g, I.__v);
    }
  }), be && be(M, A);
}, eM.unmount = function(M) {
  We && We(M);
  var A, I = M.__c;
  I && I.__H && (I.__H.__.forEach(function(g) {
    try {
      sN(g);
    } catch (D) {
      A = D;
    }
  }), I.__H = void 0, A && eM.__e(A, I.__v));
};
var ke = typeof requestAnimationFrame == "function";
function j1(M) {
  var A, I = function() {
    clearTimeout(g), ke && cancelAnimationFrame(A), setTimeout(M);
  }, g = setTimeout(I, 100);
  ke && (A = requestAnimationFrame(I));
}
function sN(M) {
  var A = gI, I = M.__c;
  typeof I == "function" && (M.__c = void 0, I()), gI = A;
}
function su(M) {
  var A = gI;
  M.__c = M.__(), gI = A;
}
function u1(M, A) {
  for (var I in A)
    M[I] = A[I];
  return M;
}
function pe(M, A) {
  for (var I in M)
    if (I !== "__source" && !(I in A))
      return !0;
  for (var g in A)
    if (g !== "__source" && M[g] !== A[g])
      return !0;
  return !1;
}
function Qe(M) {
  this.props = M;
}
(Qe.prototype = new HA()).isPureReactComponent = !0, Qe.prototype.shouldComponentUpdate = function(M, A) {
  return pe(this.props, M) || pe(this.state, A);
};
var fe = eM.__b;
eM.__b = function(M) {
  M.type && M.type.__f && M.ref && (M.props.ref = M.ref, M.ref = null), fe && fe(M);
};
var i1 = eM.__e;
eM.__e = function(M, A, I, g) {
  if (M.then) {
    for (var D, t = A; t = t.__; )
      if ((D = t.__c) && D.__c)
        return A.__e == null && (A.__e = I.__e, A.__k = I.__k), D.__c(M, A);
  }
  i1(M, A, I, g);
};
var ve = eM.unmount;
function tw(M, A, I) {
  return M && (M.__c && M.__c.__H && (M.__c.__H.__.forEach(function(g) {
    typeof g.__c == "function" && g.__c();
  }), M.__c.__H = null), (M = u1({}, M)).__c != null && (M.__c.__P === I && (M.__c.__P = A), M.__c = null), M.__k = M.__k && M.__k.map(function(g) {
    return tw(g, A, I);
  })), M;
}
function Nw(M, A, I) {
  return M && (M.__v = null, M.__k = M.__k && M.__k.map(function(g) {
    return Nw(g, A, I);
  }), M.__c && M.__c.__P === A && (M.__e && I.insertBefore(M.__e, M.__d), M.__c.__e = !0, M.__c.__P = I)), M;
}
function yj() {
  this.__u = 0, this.t = null, this.__b = null;
}
function Lw(M) {
  var A = M.__.__c;
  return A && A.__a && A.__a(M);
}
function $t() {
  this.u = null, this.o = null;
}
eM.unmount = function(M) {
  var A = M.__c;
  A && A.__R && A.__R(), A && M.__h === !0 && (M.type = null), ve && ve(M);
}, (yj.prototype = new HA()).__c = function(M, A) {
  var I = A.__c, g = this;
  g.t == null && (g.t = []), g.t.push(I);
  var D = Lw(g.__v), t = !1, N = function() {
    t || (t = !0, I.__R = null, D ? D(L) : L());
  };
  I.__R = N;
  var L = function() {
    if (!--g.__u) {
      if (g.state.__a) {
        var i = g.state.__a;
        g.__v.__k[0] = Nw(i, i.__c.__P, i.__c.__O);
      }
      var u;
      for (g.setState({ __a: g.__b = null }); u = g.t.pop(); )
        u.forceUpdate();
    }
  }, j = A.__h === !0;
  g.__u++ || j || g.setState({ __a: g.__b = g.__v.__k[0] }), M.then(N, N);
}, yj.prototype.componentWillUnmount = function() {
  this.t = [];
}, yj.prototype.render = function(M, A) {
  if (this.__b) {
    if (this.__v.__k) {
      var I = document.createElement("div"), g = this.__v.__k[0].__c;
      this.__v.__k[0] = tw(this.__b, I, g.__O = g.__P);
    }
    this.__b = null;
  }
  var D = A.__a && $I(rg, null, M.fallback);
  return D && (D.__h = null), [$I(rg, null, A.__a ? null : M.children), D];
};
var Ge = function(M, A, I) {
  if (++I[1] === I[0] && M.o.delete(A), M.props.revealOrder && (M.props.revealOrder[0] !== "t" || !M.o.size))
    for (I = M.u; I; ) {
      for (; I.length > 3; )
        I.pop()();
      if (I[1] < I[0])
        break;
      M.u = I = I[2];
    }
};
function e1(M) {
  return this.getChildContext = function() {
    return M.context;
  }, M.children;
}
function S1(M) {
  var A = this, I = M.i;
  A.componentWillUnmount = function() {
    Tt(null, A.l), A.l = null, A.i = null;
  }, A.i && A.i !== I && A.componentWillUnmount(), M.__v ? (A.l || (A.i = I, A.l = { nodeType: 1, parentNode: I, childNodes: [], appendChild: function(g) {
    this.childNodes.push(g), A.i.appendChild(g);
  }, insertBefore: function(g, D) {
    this.childNodes.push(g), A.i.appendChild(g);
  }, removeChild: function(g) {
    this.childNodes.splice(this.childNodes.indexOf(g) >>> 1, 1), A.i.removeChild(g);
  } }), Tt($I(e1, { context: A.context }, M.__v), A.l)) : A.l && A.componentWillUnmount();
}
function C1(M, A) {
  var I = $I(S1, { __v: M, i: A });
  return I.containerInfo = A, I;
}
($t.prototype = new HA()).__a = function(M) {
  var A = this, I = Lw(A.__v), g = A.o.get(M);
  return g[0]++, function(D) {
    var t = function() {
      A.props.revealOrder ? (g.push(D), Ge(A, M, g)) : D();
    };
    I ? I(t) : t();
  };
}, $t.prototype.render = function(M) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var A = RN(M.children);
  M.revealOrder && M.revealOrder[0] === "b" && A.reverse();
  for (var I = A.length; I--; )
    this.o.set(A[I], this.u = [1, 0, this.u]);
  return M.children;
}, $t.prototype.componentDidUpdate = $t.prototype.componentDidMount = function() {
  var M = this;
  this.o.forEach(function(A, I) {
    Ge(M, I, A);
  });
};
var a1 = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, w1 = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, E1 = typeof document < "u", T1 = function(M) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/i : /fil|che|ra/i).test(M);
};
HA.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(M) {
  Object.defineProperty(HA.prototype, M, { configurable: !0, get: function() {
    return this["UNSAFE_" + M];
  }, set: function(A) {
    Object.defineProperty(this, M, { configurable: !0, writable: !0, value: A });
  } });
});
var Je = eM.event;
function n1() {
}
function x1() {
  return this.cancelBubble;
}
function o1() {
  return this.defaultPrevented;
}
eM.event = function(M) {
  return Je && (M = Je(M)), M.persist = n1, M.isPropagationStopped = x1, M.isDefaultPrevented = o1, M.nativeEvent = M;
};
var Ve = { configurable: !0, get: function() {
  return this.class;
} }, Ze = eM.vnode;
eM.vnode = function(M) {
  var A = M.type, I = M.props, g = I;
  if (typeof A == "string") {
    var D = A.indexOf("-") === -1;
    for (var t in g = {}, I) {
      var N = I[t];
      E1 && t === "children" && A === "noscript" || t === "value" && "defaultValue" in I && N == null || (t === "defaultValue" && "value" in I && I.value == null ? t = "value" : t === "download" && N === !0 ? N = "" : /ondoubleclick/i.test(t) ? t = "ondblclick" : /^onchange(textarea|input)/i.test(t + A) && !T1(I.type) ? t = "oninput" : /^onfocus$/i.test(t) ? t = "onfocusin" : /^onblur$/i.test(t) ? t = "onfocusout" : /^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(t) ? t = t.toLowerCase() : D && w1.test(t) ? t = t.replace(/[A-Z0-9]/g, "-$&").toLowerCase() : N === null && (N = void 0), /^oninput$/i.test(t) && (t = t.toLowerCase(), g[t] && (t = "oninputCapture")), g[t] = N);
    }
    A == "select" && g.multiple && Array.isArray(g.value) && (g.value = RN(I.children).forEach(function(L) {
      L.props.selected = g.value.indexOf(L.props.value) != -1;
    })), A == "select" && g.defaultValue != null && (g.value = RN(I.children).forEach(function(L) {
      L.props.selected = g.multiple ? g.defaultValue.indexOf(L.props.value) != -1 : g.defaultValue == L.props.value;
    })), M.props = g, I.class != I.className && (Ve.enumerable = "className" in I, I.className != null && (g.class = I.className), Object.defineProperty(g, "className", Ve));
  }
  M.$$typeof = a1, Ze && Ze(M);
};
var Pe = eM.__r;
eM.__r = function(M) {
  Pe && Pe(M), M.__c;
};
var Be = typeof globalThis < "u" ? globalThis : window;
Be.FullCalendarVDom ? console.warn("FullCalendar VDOM already loaded") : Be.FullCalendarVDom = {
  Component: HA,
  createElement: $I,
  render: Tt,
  createRef: I1,
  Fragment: rg,
  createContext: s1,
  createPortal: C1,
  flushSync: y1,
  unmountComponentAtNode: c1
};
function y1(M) {
  M();
  var A = eM.debounceRendering, I = [];
  function g(D) {
    I.push(D);
  }
  for (eM.debounceRendering = g, Tt($I(l1, {}), document.createElement("div")); I.length; )
    I.shift()();
  eM.debounceRendering = A;
}
var l1 = function(M) {
  TM(A, M);
  function A() {
    return M !== null && M.apply(this, arguments) || this;
  }
  return A.prototype.render = function() {
    return $I("div", {});
  }, A.prototype.componentDidMount = function() {
    this.setState({});
  }, A;
}(HA);
function s1(M) {
  var A = N1(M), I = A.Provider;
  return A.Provider = function() {
    var g = this, D = !this.getChildContext, t = I.apply(this, arguments);
    if (D) {
      var N = [];
      this.shouldComponentUpdate = function(L) {
        g.props.value !== L.value && N.forEach(function(j) {
          j.context = L.value, j.forceUpdate();
        });
      }, this.sub = function(L) {
        N.push(L);
        var j = L.componentWillUnmount;
        L.componentWillUnmount = function() {
          N.splice(N.indexOf(L), 1), j && j.call(L);
        };
      };
    }
    return t;
  }, A;
}
function c1(M) {
  Tt(null, M);
}
if (typeof FullCalendarVDom > "u")
  throw new Error("Please import the top-level fullcalendar lib before attempting to import a plugin.");
var zi = FullCalendarVDom.Component, O = FullCalendarVDom.createElement, r1 = FullCalendarVDom.render, vA = FullCalendarVDom.createRef, TA = FullCalendarVDom.Fragment, jw = FullCalendarVDom.createContext, z1 = FullCalendarVDom.createPortal, Fe = FullCalendarVDom.flushSync, Y1 = FullCalendarVDom.unmountComponentAtNode;
/*!
FullCalendar v5.11.3
Docs & License: https://fullcalendar.io/
(c) 2022 Adam Shaw
*/
var Bg = function() {
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
function d1(M) {
  M.parentNode && M.parentNode.removeChild(M);
}
function CI(M, A) {
  if (M.closest)
    return M.closest(A);
  if (!document.documentElement.contains(M))
    return null;
  do {
    if (m1(M, A))
      return M;
    M = M.parentElement || M.parentNode;
  } while (M !== null && M.nodeType === 1);
  return null;
}
function m1(M, A) {
  var I = M.matches || M.matchesSelector || M.msMatchesSelector;
  return I.call(M, A);
}
function U1(M, A) {
  for (var I = M instanceof HTMLElement ? [M] : M, g = [], D = 0; D < I.length; D += 1)
    for (var t = I[D].querySelectorAll(A), N = 0; N < t.length; N += 1)
      g.push(t[N]);
  return g;
}
var h1 = /(top|left|right|bottom|width|height)$/i;
function O1(M, A) {
  for (var I in A)
    uw(M, I, A[I]);
}
function uw(M, A, I) {
  I == null ? M.style[A] = "" : typeof I == "number" && h1.test(A) ? M.style[A] = I + "px" : M.style[A] = I;
}
function b1(M) {
  var A, I;
  return (I = (A = M.composedPath) === null || A === void 0 ? void 0 : A.call(M)[0]) !== null && I !== void 0 ? I : M.target;
}
var Xe = 0;
function XI() {
  return Xe += 1, "fc-dom-" + Xe;
}
function W1(M, A) {
  return function(I) {
    var g = CI(I.target, M);
    g && A.call(g, I, g);
  };
}
function iw(M, A, I, g) {
  var D = W1(I, g);
  return M.addEventListener(A, D), function() {
    M.removeEventListener(A, D);
  };
}
function k1(M, A, I, g) {
  var D;
  return iw(M, "mouseover", A, function(t, N) {
    if (N !== D) {
      D = N, I(t, N);
      var L = function(j) {
        D = null, g(j, N), N.removeEventListener("mouseleave", L);
      };
      N.addEventListener("mouseleave", L);
    }
  });
}
function ew(M) {
  return h({ onClick: M }, Sw(M));
}
function Sw(M) {
  return {
    tabIndex: 0,
    onKeyDown: function(A) {
      (A.key === "Enter" || A.key === " ") && (M(A), A.preventDefault());
    }
  };
}
var Re = 0;
function mD() {
  return Re += 1, String(Re);
}
function p1(M) {
  var A = [], I = [], g, D;
  for (typeof M == "string" ? I = M.split(/\s*,\s*/) : typeof M == "function" ? I = [M] : Array.isArray(M) && (I = M), g = 0; g < I.length; g += 1)
    D = I[g], typeof D == "string" ? A.push(D.charAt(0) === "-" ? { field: D.substring(1), order: -1 } : { field: D, order: 1 }) : typeof D == "function" && A.push({ func: D });
  return A;
}
function Q1(M, A, I) {
  var g, D;
  for (g = 0; g < I.length; g += 1)
    if (D = f1(M, A, I[g]), D)
      return D;
  return 0;
}
function f1(M, A, I) {
  return I.func ? I.func(M, A) : v1(M[I.field], A[I.field]) * (I.order || 1);
}
function v1(M, A) {
  return !M && !A ? 0 : A == null ? -1 : M == null ? 1 : typeof M == "string" || typeof A == "string" ? String(M).localeCompare(String(A)) : M - A;
}
function lj(M, A) {
  var I = String(M);
  return "000".substr(0, A - I.length) + I;
}
function It(M, A, I) {
  return typeof M == "function" ? M.apply(void 0, A) : typeof M == "string" ? A.reduce(function(g, D, t) {
    return g.replace("$" + t, D || "");
  }, M) : I;
}
function sj(M) {
  return M % 1 === 0;
}
function G1(M) {
  var A = M.querySelector(".fc-scrollgrid-shrink-frame"), I = M.querySelector(".fc-scrollgrid-shrink-cushion");
  if (!A)
    throw new Error("needs fc-scrollgrid-shrink-frame className");
  if (!I)
    throw new Error("needs fc-scrollgrid-shrink-cushion className");
  return M.getBoundingClientRect().width - A.getBoundingClientRect().width + I.getBoundingClientRect().width;
}
var J1 = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
function He(M, A) {
  var I = BI(M);
  return I[2] += A * 7, rA(I);
}
function jA(M, A) {
  var I = BI(M);
  return I[2] += A, rA(I);
}
function zg(M, A) {
  var I = BI(M);
  return I[6] += A, rA(I);
}
function V1(M, A) {
  return Ug(M, A) / 7;
}
function Ug(M, A) {
  return (A.valueOf() - M.valueOf()) / (1e3 * 60 * 60 * 24);
}
function Z1(M, A) {
  return (A.valueOf() - M.valueOf()) / (1e3 * 60 * 60);
}
function P1(M, A) {
  return (A.valueOf() - M.valueOf()) / (1e3 * 60);
}
function B1(M, A) {
  return (A.valueOf() - M.valueOf()) / 1e3;
}
function F1(M, A) {
  var I = XM(M), g = XM(A);
  return {
    years: 0,
    months: 0,
    days: Math.round(Ug(I, g)),
    milliseconds: A.valueOf() - g.valueOf() - (M.valueOf() - I.valueOf())
  };
}
function X1(M, A) {
  var I = _N(M, A);
  return I !== null && I % 7 === 0 ? I / 7 : null;
}
function _N(M, A) {
  return FI(M) === FI(A) ? Math.round(Ug(M, A)) : null;
}
function XM(M) {
  return rA([
    M.getUTCFullYear(),
    M.getUTCMonth(),
    M.getUTCDate()
  ]);
}
function R1(M) {
  return rA([
    M.getUTCFullYear(),
    M.getUTCMonth(),
    M.getUTCDate(),
    M.getUTCHours()
  ]);
}
function H1(M) {
  return rA([
    M.getUTCFullYear(),
    M.getUTCMonth(),
    M.getUTCDate(),
    M.getUTCHours(),
    M.getUTCMinutes()
  ]);
}
function _1(M) {
  return rA([
    M.getUTCFullYear(),
    M.getUTCMonth(),
    M.getUTCDate(),
    M.getUTCHours(),
    M.getUTCMinutes(),
    M.getUTCSeconds()
  ]);
}
function $1(M, A, I) {
  var g = M.getUTCFullYear(), D = cj(M, g, A, I);
  if (D < 1)
    return cj(M, g - 1, A, I);
  var t = cj(M, g + 1, A, I);
  return t >= 1 ? Math.min(D, t) : D;
}
function cj(M, A, I, g) {
  var D = rA([A, 0, 1 + q1(A, I, g)]), t = XM(M), N = Math.round(Ug(D, t));
  return Math.floor(N / 7) + 1;
}
function q1(M, A, I) {
  var g = 7 + A - I, D = (7 + rA([M, 0, g]).getUTCDay() - A) % 7;
  return -D + g - 1;
}
function _e(M) {
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
function $e(M) {
  return new Date(
    M[0],
    M[1] || 0,
    M[2] == null ? 1 : M[2],
    M[3] || 0,
    M[4] || 0,
    M[5] || 0
  );
}
function BI(M) {
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
function rA(M) {
  return M.length === 1 && (M = M.concat([0])), new Date(Date.UTC.apply(Date, M));
}
function Cw(M) {
  return !isNaN(M.valueOf());
}
function FI(M) {
  return M.getUTCHours() * 1e3 * 60 * 60 + M.getUTCMinutes() * 1e3 * 60 + M.getUTCSeconds() * 1e3 + M.getUTCMilliseconds();
}
function Yi(M, A, I, g) {
  return {
    instanceId: mD(),
    defId: M,
    range: A,
    forcedStartTzo: I == null ? null : I,
    forcedEndTzo: g == null ? null : g
  };
}
var $N = Object.prototype.hasOwnProperty;
function di(M, A) {
  var I = {};
  if (A)
    for (var g in A) {
      for (var D = [], t = M.length - 1; t >= 0; t -= 1) {
        var N = M[t][g];
        if (typeof N == "object" && N)
          D.unshift(N);
        else if (N !== void 0) {
          I[g] = N;
          break;
        }
      }
      D.length && (I[g] = di(D));
    }
  for (var t = M.length - 1; t >= 0; t -= 1) {
    var L = M[t];
    for (var j in L)
      j in I || (I[j] = L[j]);
  }
  return I;
}
function aD(M, A) {
  var I = {};
  for (var g in M)
    A(M[g], g) && (I[g] = M[g]);
  return I;
}
function mt(M, A) {
  var I = {};
  for (var g in M)
    I[g] = A(M[g], g);
  return I;
}
function aw(M) {
  for (var A = {}, I = 0, g = M; I < g.length; I++) {
    var D = g[I];
    A[D] = !0;
  }
  return A;
}
function mi(M) {
  var A = [];
  for (var I in M)
    A.push(M[I]);
  return A;
}
function YI(M, A) {
  if (M === A)
    return !0;
  for (var I in M)
    if ($N.call(M, I) && !(I in A))
      return !1;
  for (var I in A)
    if ($N.call(A, I) && M[I] !== A[I])
      return !1;
  return !0;
}
function qe(M, A) {
  var I = [];
  for (var g in M)
    $N.call(M, g) && (g in A || I.push(g));
  for (var g in A)
    $N.call(A, g) && M[g] !== A[g] && I.push(g);
  return I;
}
function rj(M, A, I) {
  if (I === void 0 && (I = {}), M === A)
    return !0;
  for (var g in A)
    if (!(g in M && K1(M[g], A[g], I[g])))
      return !1;
  for (var g in M)
    if (!(g in A))
      return !1;
  return !0;
}
function K1(M, A, I) {
  return M === A || I === !0 ? !0 : I ? I(M, A) : !1;
}
function Mz(M, A, I, g) {
  A === void 0 && (A = 0), g === void 0 && (g = 1);
  var D = [];
  I == null && (I = Object.keys(M).length);
  for (var t = A; t < I; t += g) {
    var N = M[t];
    N !== void 0 && D.push(N);
  }
  return D;
}
function Az(M, A, I, g) {
  for (var D = 0; D < g.length; D += 1) {
    var t = g[D].parse(M, I);
    if (t) {
      var N = M.allDay;
      return N == null && (N = A, N == null && (N = t.allDayGuess, N == null && (N = !1))), {
        allDay: N,
        duration: t.duration,
        typeData: t.typeData,
        typeId: D
      };
    }
  }
  return null;
}
function UL(M, A, I) {
  var g = I.dateEnv, D = I.pluginHooks, t = I.options, N = M.defs, L = M.instances;
  L = aD(L, function(o) {
    return !N[o.defId].recurringDef;
  });
  for (var j in N) {
    var i = N[j];
    if (i.recurringDef) {
      var u = i.recurringDef.duration;
      u || (u = i.allDay ? t.defaultAllDayEventDuration : t.defaultTimedEventDuration);
      for (var e = Iz(i, u, A, g, D.recurringTypes), C = 0, a = e; C < a.length; C++) {
        var w = a[C], n = Yi(j, {
          start: w,
          end: g.add(w, u)
        });
        L[n.instanceId] = n;
      }
    }
  }
  return { defs: N, instances: L };
}
function Iz(M, A, I, g, D) {
  var t = D[M.recurringDef.typeId], N = t.expand(M.recurringDef.typeData, {
    start: g.subtract(I.start, A),
    end: I.end
  }, g);
  return M.allDay && (N = N.map(XM)), N;
}
var gz = /^(-?)(?:(\d+)\.)?(\d+):(\d\d)(?::(\d\d)(?:\.(\d\d\d))?)?/;
function fM(M, A) {
  var I;
  return typeof M == "string" ? Dz(M) : typeof M == "object" && M ? Ke(M) : typeof M == "number" ? Ke((I = {}, I[A || "milliseconds"] = M, I)) : null;
}
function Dz(M) {
  var A = gz.exec(M);
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
function Ke(M) {
  var A = {
    years: M.years || M.year || 0,
    months: M.months || M.month || 0,
    days: M.days || M.day || 0,
    milliseconds: (M.hours || M.hour || 0) * 60 * 60 * 1e3 + (M.minutes || M.minute || 0) * 60 * 1e3 + (M.seconds || M.second || 0) * 1e3 + (M.milliseconds || M.millisecond || M.ms || 0)
  }, I = M.weeks || M.week;
  return I && (A.days += I * 7, A.specifiedWeeks = !0), A;
}
function tz(M, A) {
  return M.years === A.years && M.months === A.months && M.days === A.days && M.milliseconds === A.milliseconds;
}
function Nz(M, A) {
  return {
    years: M.years - A.years,
    months: M.months - A.months,
    days: M.days - A.days,
    milliseconds: M.milliseconds - A.milliseconds
  };
}
function Lz(M) {
  return DD(M) / 365;
}
function jz(M) {
  return DD(M) / 30;
}
function DD(M) {
  return nt(M) / 864e5;
}
function nt(M) {
  return M.years * (365 * 864e5) + M.months * (30 * 864e5) + M.days * 864e5 + M.milliseconds;
}
function cu(M) {
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
function uz(M, A, I) {
  I === void 0 && (I = !1);
  var g = M.toISOString();
  return g = g.replace(".000", ""), I && (g = g.replace("T00:00:00Z", "")), g.length > 10 && (A == null ? g = g.replace("Z", "") : A !== 0 && (g = g.replace("Z", Ui(A, !0)))), g;
}
function hL(M) {
  return M.toISOString().replace(/T.*$/, "");
}
function Ui(M, A) {
  A === void 0 && (A = !1);
  var I = M < 0 ? "-" : "+", g = Math.abs(M), D = Math.floor(g / 60), t = Math.round(g % 60);
  return A ? I + lj(D, 2) + ":" + lj(t, 2) : "GMT" + I + D + (t ? ":" + lj(t, 2) : "");
}
function wD(M, A, I) {
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
function OM(M, A, I) {
  var g, D;
  return function() {
    for (var t = [], N = 0; N < arguments.length; N++)
      t[N] = arguments[N];
    if (!g)
      D = M.apply(this, t);
    else if (!wD(g, t)) {
      I && I(D);
      var L = M.apply(this, t);
      (!A || !A(L, D)) && (D = L);
    }
    return g = t, D;
  };
}
function cN(M, A, I) {
  var g = this, D, t;
  return function(N) {
    if (!D)
      t = M.call(g, N);
    else if (!YI(D, N)) {
      I && I(t);
      var L = M.call(g, N);
      (!A || !A(L, t)) && (t = L);
    }
    return D = N, t;
  };
}
var MS = {
  week: 3,
  separator: 0,
  omitZeroMinute: 0,
  meridiem: 0,
  omitCommas: 0
}, qN = {
  timeZoneName: 7,
  era: 6,
  year: 5,
  month: 4,
  day: 2,
  weekday: 2,
  hour: 1,
  minute: 1,
  second: 1
}, qt = /\s*([ap])\.?m\.?/i, iz = /,/g, ez = /\s+/g, Sz = /\u200e/g, Cz = /UTC|GMT/, az = function() {
  function M(A) {
    var I = {}, g = {}, D = 0;
    for (var t in A)
      t in MS ? (g[t] = A[t], D = Math.max(MS[t], D)) : (I[t] = A[t], t in qN && (D = Math.max(qN[t], D)));
    this.standardDateProps = I, this.extendedSettings = g, this.severity = D, this.buildFormattingFunc = OM(AS);
  }
  return M.prototype.format = function(A, I) {
    return this.buildFormattingFunc(this.standardDateProps, this.extendedSettings, I)(A);
  }, M.prototype.formatRange = function(A, I, g, D) {
    var t = this, N = t.standardDateProps, L = t.extendedSettings, j = oz(A.marker, I.marker, g.calendarSystem);
    if (!j)
      return this.format(A, g);
    var i = j;
    i > 1 && (N.year === "numeric" || N.year === "2-digit") && (N.month === "numeric" || N.month === "2-digit") && (N.day === "numeric" || N.day === "2-digit") && (i = 1);
    var u = this.format(A, g), e = this.format(I, g);
    if (u === e)
      return u;
    var C = yz(N, i), a = AS(C, L, g), w = a(A), n = a(I), o = lz(u, w, e, n), E = L.separator || D || g.defaultSeparator || "";
    return o ? o.before + w + E + n + o.after : u + E + e;
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
function AS(M, A, I) {
  var g = Object.keys(M).length;
  return g === 1 && M.timeZoneName === "short" ? function(D) {
    return Ui(D.timeZoneOffset);
  } : g === 0 && A.week ? function(D) {
    return xz(I.computeWeekNumber(D.marker), I.weekText, I.weekTextLong, I.locale, A.week);
  } : wz(M, A, I);
}
function wz(M, A, I) {
  M = h({}, M), A = h({}, A), Ez(M, A), M.timeZone = "UTC";
  var g = new Intl.DateTimeFormat(I.locale.codes, M), D;
  if (A.omitZeroMinute) {
    var t = h({}, M);
    delete t.minute, D = new Intl.DateTimeFormat(I.locale.codes, t);
  }
  return function(N) {
    var L = N.marker, j;
    D && !L.getUTCMinutes() ? j = D : j = g;
    var i = j.format(L);
    return Tz(i, N, M, A, I);
  };
}
function Ez(M, A) {
  M.timeZoneName && (M.hour || (M.hour = "2-digit"), M.minute || (M.minute = "2-digit")), M.timeZoneName === "long" && (M.timeZoneName = "short"), A.omitZeroMinute && (M.second || M.millisecond) && delete A.omitZeroMinute;
}
function Tz(M, A, I, g, D) {
  return M = M.replace(Sz, ""), I.timeZoneName === "short" && (M = nz(M, D.timeZone === "UTC" || A.timeZoneOffset == null ? "UTC" : Ui(A.timeZoneOffset))), g.omitCommas && (M = M.replace(iz, "").trim()), g.omitZeroMinute && (M = M.replace(":00", "")), g.meridiem === !1 ? M = M.replace(qt, "").trim() : g.meridiem === "narrow" ? M = M.replace(qt, function(t, N) {
    return N.toLocaleLowerCase();
  }) : g.meridiem === "short" ? M = M.replace(qt, function(t, N) {
    return N.toLocaleLowerCase() + "m";
  }) : g.meridiem === "lowercase" && (M = M.replace(qt, function(t) {
    return t.toLocaleLowerCase();
  })), M = M.replace(ez, " "), M = M.trim(), M;
}
function nz(M, A) {
  var I = !1;
  return M = M.replace(Cz, function() {
    return I = !0, A;
  }), I || (M += " " + A), M;
}
function xz(M, A, I, g, D) {
  var t = [];
  return D === "long" ? t.push(I) : (D === "short" || D === "narrow") && t.push(A), (D === "long" || D === "short") && t.push(" "), t.push(g.simpleNumberFormat.format(M)), g.options.direction === "rtl" && t.reverse(), t.join("");
}
function oz(M, A, I) {
  return I.getMarkerYear(M) !== I.getMarkerYear(A) ? 5 : I.getMarkerMonth(M) !== I.getMarkerMonth(A) ? 4 : I.getMarkerDay(M) !== I.getMarkerDay(A) ? 2 : FI(M) !== FI(A) ? 1 : 0;
}
function yz(M, A) {
  var I = {};
  for (var g in M)
    (!(g in qN) || qN[g] <= A) && (I[g] = M[g]);
  return I;
}
function lz(M, A, I, g) {
  for (var D = 0; D < M.length; ) {
    var t = M.indexOf(A, D);
    if (t === -1)
      break;
    var N = M.substr(0, t);
    D = t + A.length;
    for (var L = M.substr(D), j = 0; j < I.length; ) {
      var i = I.indexOf(g, j);
      if (i === -1)
        break;
      var u = I.substr(0, i);
      j = i + g.length;
      var e = I.substr(j);
      if (N === u && L === e)
        return {
          before: N,
          after: L
        };
    }
  }
  return null;
}
function IS(M, A) {
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
function KN(M, A, I, g) {
  var D = IS(M, I.calendarSystem), t = A ? IS(A, I.calendarSystem) : null;
  return {
    date: D,
    start: D,
    end: t,
    timeZone: I.timeZone,
    localeCodes: I.locale.codes,
    defaultSeparator: g || I.defaultSeparator
  };
}
var sz = function() {
  function M(A) {
    this.cmdStr = A;
  }
  return M.prototype.format = function(A, I, g) {
    return I.cmdFormatter(this.cmdStr, KN(A, null, I, g));
  }, M.prototype.formatRange = function(A, I, g, D) {
    return g.cmdFormatter(this.cmdStr, KN(A, I, g, D));
  }, M;
}(), cz = function() {
  function M(A) {
    this.func = A;
  }
  return M.prototype.format = function(A, I, g) {
    return this.func(KN(A, null, I, g));
  }, M.prototype.formatRange = function(A, I, g, D) {
    return this.func(KN(A, I, g, D));
  }, M;
}();
function LA(M) {
  return typeof M == "object" && M ? new az(M) : typeof M == "string" ? new sz(M) : typeof M == "function" ? new cz(M) : null;
}
var gS = {
  navLinkDayClick: G,
  navLinkWeekClick: G,
  duration: fM,
  bootstrapFontAwesome: G,
  buttonIcons: G,
  customButtons: G,
  defaultAllDayEventDuration: fM,
  defaultTimedEventDuration: fM,
  nextDayThreshold: fM,
  scrollTime: fM,
  scrollTimeReset: Boolean,
  slotMinTime: fM,
  slotMaxTime: fM,
  dayPopoverFormat: LA,
  slotDuration: fM,
  snapDuration: fM,
  headerToolbar: G,
  footerToolbar: G,
  defaultRangeSeparator: String,
  titleRangeSeparator: String,
  forceEventDuration: Boolean,
  dayHeaders: Boolean,
  dayHeaderFormat: LA,
  dayHeaderClassNames: G,
  dayHeaderContent: G,
  dayHeaderDidMount: G,
  dayHeaderWillUnmount: G,
  dayCellClassNames: G,
  dayCellContent: G,
  dayCellDidMount: G,
  dayCellWillUnmount: G,
  initialView: String,
  aspectRatio: Number,
  weekends: Boolean,
  weekNumberCalculation: G,
  weekNumbers: Boolean,
  weekNumberClassNames: G,
  weekNumberContent: G,
  weekNumberDidMount: G,
  weekNumberWillUnmount: G,
  editable: Boolean,
  viewClassNames: G,
  viewDidMount: G,
  viewWillUnmount: G,
  nowIndicator: Boolean,
  nowIndicatorClassNames: G,
  nowIndicatorContent: G,
  nowIndicatorDidMount: G,
  nowIndicatorWillUnmount: G,
  showNonCurrentDates: Boolean,
  lazyFetching: Boolean,
  startParam: String,
  endParam: String,
  timeZoneParam: String,
  timeZone: String,
  locales: G,
  locale: G,
  themeSystem: String,
  dragRevertDuration: Number,
  dragScroll: Boolean,
  allDayMaintainDuration: Boolean,
  unselectAuto: Boolean,
  dropAccept: G,
  eventOrder: p1,
  eventOrderStrict: Boolean,
  handleWindowResize: Boolean,
  windowResizeDelay: Number,
  longPressDelay: Number,
  eventDragMinDistance: Number,
  expandRows: Boolean,
  height: G,
  contentHeight: G,
  direction: String,
  weekNumberFormat: LA,
  eventResizableFromStart: Boolean,
  displayEventTime: Boolean,
  displayEventEnd: Boolean,
  weekText: String,
  weekTextLong: String,
  progressiveEventRendering: Boolean,
  businessHours: G,
  initialDate: G,
  now: G,
  eventDataTransform: G,
  stickyHeaderDates: G,
  stickyFooterScrollbar: G,
  viewHeight: G,
  defaultAllDay: Boolean,
  eventSourceFailure: G,
  eventSourceSuccess: G,
  eventDisplay: String,
  eventStartEditable: Boolean,
  eventDurationEditable: Boolean,
  eventOverlap: G,
  eventConstraint: G,
  eventAllow: G,
  eventBackgroundColor: String,
  eventBorderColor: String,
  eventTextColor: String,
  eventColor: String,
  eventClassNames: G,
  eventContent: G,
  eventDidMount: G,
  eventWillUnmount: G,
  selectConstraint: G,
  selectOverlap: G,
  selectAllow: G,
  droppable: Boolean,
  unselectCancel: String,
  slotLabelFormat: G,
  slotLaneClassNames: G,
  slotLaneContent: G,
  slotLaneDidMount: G,
  slotLaneWillUnmount: G,
  slotLabelClassNames: G,
  slotLabelContent: G,
  slotLabelDidMount: G,
  slotLabelWillUnmount: G,
  dayMaxEvents: G,
  dayMaxEventRows: G,
  dayMinWidth: Number,
  slotLabelInterval: fM,
  allDayText: String,
  allDayClassNames: G,
  allDayContent: G,
  allDayDidMount: G,
  allDayWillUnmount: G,
  slotMinWidth: Number,
  navLinks: Boolean,
  eventTimeFormat: LA,
  rerenderDelay: Number,
  moreLinkText: G,
  moreLinkHint: G,
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
  plugins: G,
  firstDay: Number,
  dayCount: Number,
  dateAlignment: String,
  dateIncrement: fM,
  hiddenDays: G,
  monthMode: Boolean,
  fixedWeekCount: Boolean,
  validRange: G,
  visibleRange: G,
  titleFormat: G,
  eventInteractive: Boolean,
  noEventsText: String,
  viewHint: G,
  navLinkHint: G,
  closeHint: String,
  timeHint: String,
  eventHint: String,
  moreLinkClick: G,
  moreLinkClassNames: G,
  moreLinkContent: G,
  moreLinkDidMount: G,
  moreLinkWillUnmount: G
}, gt = {
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
}, DS = {
  datesSet: G,
  eventsSet: G,
  eventAdd: G,
  eventChange: G,
  eventRemove: G,
  windowResize: G,
  eventClick: G,
  eventMouseEnter: G,
  eventMouseLeave: G,
  select: G,
  unselect: G,
  loading: G,
  _unmount: G,
  _beforeprint: G,
  _afterprint: G,
  _noEventDrop: G,
  _noEventResize: G,
  _resize: G,
  _scrollRequest: G
}, tS = {
  buttonText: G,
  buttonHints: G,
  views: G,
  plugins: G,
  initialEvents: G,
  events: G,
  eventSources: G
}, eg = {
  headerToolbar: vg,
  footerToolbar: vg,
  buttonText: vg,
  buttonHints: vg,
  buttonIcons: vg,
  dateIncrement: vg
};
function vg(M, A) {
  return typeof M == "object" && typeof A == "object" && M && A ? YI(M, A) : M === A;
}
var rz = {
  type: String,
  component: G,
  buttonText: String,
  buttonTextKey: String,
  dateProfileGeneratorClass: G,
  usesMinMaxTime: Boolean,
  classNames: G,
  content: G,
  didMount: G,
  willUnmount: G
};
function zj(M) {
  return di(M, eg);
}
function hi(M, A) {
  var I = {}, g = {};
  for (var D in A)
    D in M && (I[D] = A[D](M[D]));
  for (var D in M)
    D in A || (g[D] = M[D]);
  return { refined: I, extra: g };
}
function G(M) {
  return M;
}
function ML(M, A, I, g) {
  for (var D = Yg(), t = Wi(I), N = 0, L = M; N < L.length; N++) {
    var j = L[N], i = Ew(j, A, I, g, t);
    i && ru(i, D);
  }
  return D;
}
function ru(M, A) {
  return A === void 0 && (A = Yg()), A.defs[M.def.defId] = M.def, M.instance && (A.instances[M.instance.instanceId] = M.instance), A;
}
function zz(M, A) {
  var I = M.instances[A];
  if (I) {
    var g = M.defs[I.defId], D = bi(M, function(t) {
      return Yz(g, t);
    });
    return D.defs[g.defId] = g, D.instances[I.instanceId] = I, D;
  }
  return Yg();
}
function Yz(M, A) {
  return Boolean(M.groupId && M.groupId === A.groupId);
}
function Yg() {
  return { defs: {}, instances: {} };
}
function Oi(M, A) {
  return {
    defs: h(h({}, M.defs), A.defs),
    instances: h(h({}, M.instances), A.instances)
  };
}
function bi(M, A) {
  var I = aD(M.defs, A), g = aD(M.instances, function(D) {
    return I[D.defId];
  });
  return { defs: I, instances: g };
}
function dz(M, A) {
  var I = M.defs, g = M.instances, D = {}, t = {};
  for (var N in I)
    A.defs[N] || (D[N] = I[N]);
  for (var L in g)
    !A.instances[L] && D[g[L].defId] && (t[L] = g[L]);
  return {
    defs: D,
    instances: t
  };
}
function mz(M, A) {
  return Array.isArray(M) ? ML(M, null, A, !0) : typeof M == "object" && M ? ML([M], null, A, !0) : M != null ? String(M) : null;
}
function zu(M) {
  return Array.isArray(M) ? M : typeof M == "string" ? M.split(/\s+/) : [];
}
var AL = {
  display: String,
  editable: Boolean,
  startEditable: Boolean,
  durationEditable: Boolean,
  constraint: G,
  overlap: G,
  allow: G,
  className: zu,
  classNames: zu,
  color: String,
  backgroundColor: String,
  borderColor: String,
  textColor: String
}, Uz = {
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
function IL(M, A) {
  var I = mz(M.constraint, A);
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
function hz(M) {
  return M.reduce(Oz, Uz);
}
function Oz(M, A) {
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
var rN = {
  id: String,
  groupId: String,
  title: String,
  url: String,
  interactive: Boolean
}, ww = {
  start: G,
  end: G,
  date: G,
  allDay: Boolean
}, bz = h(h(h({}, rN), ww), { extendedProps: G });
function Ew(M, A, I, g, D) {
  D === void 0 && (D = Wi(I));
  var t = Tw(M, I, D), N = t.refined, L = t.extra, j = kz(A, I), i = Az(N, j, I.dateEnv, I.pluginHooks.recurringTypes);
  if (i) {
    var u = Yu(N, L, A ? A.sourceId : "", i.allDay, Boolean(i.duration), I);
    return u.recurringDef = {
      typeId: i.typeId,
      typeData: i.typeData,
      duration: i.duration
    }, { def: u, instance: null };
  }
  var e = Wz(N, j, I, g);
  if (e) {
    var u = Yu(N, L, A ? A.sourceId : "", e.allDay, e.hasEnd, I), C = Yi(u.defId, e.range, e.forcedStartTzo, e.forcedEndTzo);
    return { def: u, instance: C };
  }
  return null;
}
function Tw(M, A, I) {
  return I === void 0 && (I = Wi(A)), hi(M, I);
}
function Wi(M) {
  return h(h(h({}, AL), bz), M.pluginHooks.eventRefiners);
}
function Yu(M, A, I, g, D, t) {
  for (var N = {
    title: M.title || "",
    groupId: M.groupId || "",
    publicId: M.id || "",
    url: M.url || "",
    recurringDef: null,
    defId: mD(),
    sourceId: I,
    allDay: g,
    hasEnd: D,
    interactive: M.interactive,
    ui: IL(M, t),
    extendedProps: h(h({}, M.extendedProps || {}), A)
  }, L = 0, j = t.pluginHooks.eventDefMemberAdders; L < j.length; L++) {
    var i = j[L];
    h(N, i(M));
  }
  return Object.freeze(N.ui.classNames), Object.freeze(N.extendedProps), N;
}
function Wz(M, A, I, g) {
  var D = M.allDay, t, N = null, L = !1, j, i = null, u = M.start != null ? M.start : M.date;
  if (t = I.dateEnv.createMarkerMeta(u), t)
    N = t.marker;
  else if (!g)
    return null;
  return M.end != null && (j = I.dateEnv.createMarkerMeta(M.end)), D == null && (A != null ? D = A : D = (!t || t.isTimeUnspecified) && (!j || j.isTimeUnspecified)), D && N && (N = XM(N)), j && (i = j.marker, D && (i = XM(i)), N && i <= N && (i = null)), i ? L = !0 : g || (L = I.options.forceEventDuration || !1, i = I.dateEnv.add(N, D ? I.options.defaultAllDayEventDuration : I.options.defaultTimedEventDuration)), {
    allDay: D,
    hasEnd: L,
    range: { start: N, end: i },
    forcedStartTzo: t ? t.forcedTzo : null,
    forcedEndTzo: j ? j.forcedTzo : null
  };
}
function kz(M, A) {
  var I = null;
  return M && (I = M.defaultAllDay), I == null && (I = A.options.defaultAllDay), I;
}
function nw(M) {
  var A = Math.floor(Ug(M.start, M.end)) || 1, I = XM(M.start), g = jA(I, A);
  return { start: I, end: g };
}
function ki(M, A) {
  A === void 0 && (A = fM(0));
  var I = null, g = null;
  if (M.end) {
    g = XM(M.end);
    var D = M.end.valueOf() - g.valueOf();
    D && D >= nt(A) && (g = jA(g, 1));
  }
  return M.start && (I = XM(M.start), g && g <= I && (g = jA(I, 1))), { start: I, end: g };
}
function pz(M) {
  var A = ki(M);
  return Ug(A.start, A.end) > 1;
}
function Kt(M, A, I, g) {
  return g === "year" ? fM(I.diffWholeYears(M, A), "year") : g === "month" ? fM(I.diffWholeMonths(M, A), "month") : F1(M, A);
}
function Qz(M, A) {
  var I = null, g = null;
  return M.start && (I = A.createMarker(M.start)), M.end && (g = A.createMarker(M.end)), !I && !g || I && g && g < I ? null : { start: I, end: g };
}
function NS(M, A) {
  var I = [], g = A.start, D, t;
  for (M.sort(fz), D = 0; D < M.length; D += 1)
    t = M[D], t.start > g && I.push({ start: g, end: t.start }), t.end > g && (g = t.end);
  return g < A.end && I.push({ start: g, end: A.end }), I;
}
function fz(M, A) {
  return M.start.valueOf() - A.start.valueOf();
}
function ED(M, A) {
  var I = M.start, g = M.end, D = null;
  return A.start !== null && (I === null ? I = A.start : I = new Date(Math.max(I.valueOf(), A.start.valueOf()))), A.end != null && (g === null ? g = A.end : g = new Date(Math.min(g.valueOf(), A.end.valueOf()))), (I === null || g === null || I < g) && (D = { start: I, end: g }), D;
}
function vz(M, A) {
  return (M.end === null || A.start === null || M.end > A.start) && (M.start === null || A.end === null || M.start < A.end);
}
function xg(M, A) {
  return (M.start === null || A >= M.start) && (M.end === null || A < M.end);
}
function Gz(M, A) {
  return A.start != null && M < A.start ? A.start : A.end != null && M >= A.end ? new Date(A.end.valueOf() - 1) : M;
}
function du(M, A, I, g) {
  var D = {}, t = {}, N = {}, L = [], j = [], i = xw(M.defs, A);
  for (var u in M.defs) {
    var e = M.defs[u], C = i[e.defId];
    C.display === "inverse-background" && (e.groupId ? (D[e.groupId] = [], N[e.groupId] || (N[e.groupId] = e)) : t[u] = []);
  }
  for (var a in M.instances) {
    var w = M.instances[a], e = M.defs[w.defId], C = i[e.defId], n = w.range, o = !e.allDay && g ? ki(n, g) : n, E = ED(o, I);
    E && (C.display === "inverse-background" ? e.groupId ? D[e.groupId].push(E) : t[w.defId].push(E) : C.display !== "none" && (C.display === "background" ? L : j).push({
      def: e,
      ui: C,
      instance: w,
      range: E,
      isStart: o.start && o.start.valueOf() === E.start.valueOf(),
      isEnd: o.end && o.end.valueOf() === E.end.valueOf()
    }));
  }
  for (var l in D)
    for (var Y = D[l], z = NS(Y, I), m = 0, W = z; m < W.length; m++) {
      var v = W[m], e = N[l], C = i[e.defId];
      L.push({
        def: e,
        ui: C,
        instance: null,
        range: v,
        isStart: !1,
        isEnd: !1
      });
    }
  for (var u in t)
    for (var Y = t[u], z = NS(Y, I), d = 0, U = z; d < U.length; d++) {
      var v = U[d];
      L.push({
        def: M.defs[u],
        ui: i[u],
        instance: null,
        range: v,
        isStart: !1,
        isEnd: !1
      });
    }
  return { bg: L, fg: j };
}
function LS(M, A) {
  M.fcSeg = A;
}
function mu(M) {
  return M.fcSeg || M.parentNode.fcSeg || null;
}
function xw(M, A) {
  return mt(M, function(I) {
    return ow(I, A);
  });
}
function ow(M, A) {
  var I = [];
  return A[""] && I.push(A[""]), A[M.defId] && I.push(A[M.defId]), I.push(M.ui), hz(I);
}
function yw(M, A) {
  var I = M.map(Jz);
  return I.sort(function(g, D) {
    return Q1(g, D, A);
  }), I.map(function(g) {
    return g._seg;
  });
}
function Jz(M) {
  var A = M.eventRange, I = A.def, g = A.instance ? A.instance.range : A.range, D = g.start ? g.start.valueOf() : 0, t = g.end ? g.end.valueOf() : 0;
  return h(h(h({}, I.extendedProps), I), {
    id: I.publicId,
    start: D,
    end: t,
    duration: t - D,
    allDay: Number(I.allDay),
    _seg: M
  });
}
function Vz(M, A) {
  for (var I = A.pluginHooks, g = I.isDraggableTransformers, D = M.eventRange, t = D.def, N = D.ui, L = N.startEditable, j = 0, i = g; j < i.length; j++) {
    var u = i[j];
    L = u(L, t, N, A);
  }
  return L;
}
function Zz(M, A) {
  return M.isStart && M.eventRange.ui.durationEditable && A.options.eventResizableFromStart;
}
function Pz(M, A) {
  return M.isEnd && M.eventRange.ui.durationEditable;
}
function Dt(M, A, I, g, D, t, N) {
  var L = I.dateEnv, j = I.options, i = j.displayEventTime, u = j.displayEventEnd, e = M.eventRange.def, C = M.eventRange.instance;
  i == null && (i = g !== !1), u == null && (u = D !== !1);
  var a = C.range.start, w = C.range.end, n = t || M.start || M.eventRange.range.start, o = N || M.end || M.eventRange.range.end, E = XM(a).valueOf() === XM(n).valueOf(), l = XM(zg(w, -1)).valueOf() === XM(zg(o, -1)).valueOf();
  return i && !e.allDay && (E || l) ? (n = E ? a : n, o = l ? w : o, u && e.hasEnd ? L.formatRange(n, o, A, {
    forcedStartTzo: t ? null : C.forcedStartTzo,
    forcedEndTzo: N ? null : C.forcedEndTzo
  }) : L.format(n, A, {
    forcedTzo: t ? null : C.forcedStartTzo
  })) : "";
}
function tD(M, A, I) {
  var g = M.eventRange.range;
  return {
    isPast: g.end < (I || A.start),
    isFuture: g.start >= (I || A.end),
    isToday: A && xg(A, g.start)
  };
}
function Bz(M) {
  var A = ["fc-event"];
  return M.isMirror && A.push("fc-event-mirror"), M.isDraggable && A.push("fc-event-draggable"), (M.isStartResizable || M.isEndResizable) && A.push("fc-event-resizable"), M.isDragging && A.push("fc-event-dragging"), M.isResizing && A.push("fc-event-resizing"), M.isSelected && A.push("fc-event-selected"), M.isStart && A.push("fc-event-start"), M.isEnd && A.push("fc-event-end"), M.isPast && A.push("fc-event-past"), M.isToday && A.push("fc-event-today"), M.isFuture && A.push("fc-event-future"), A;
}
function Fz(M) {
  return M.instance ? M.instance.instanceId : M.def.defId + ":" + M.range.start.toISOString();
}
function pi(M, A) {
  var I = M.eventRange, g = I.def, D = I.instance, t = g.url;
  if (t)
    return { href: t };
  var N = A.emitter, L = A.options, j = L.eventInteractive;
  return j == null && (j = g.interactive, j == null && (j = Boolean(N.hasHandlers("eventClick")))), j ? Sw(function(i) {
    N.trigger("eventClick", {
      el: i.target,
      event: new tI(A, g, D),
      jsEvent: i,
      view: A.viewApi
    });
  }) : {};
}
var Xz = {
  start: G,
  end: G,
  allDay: Boolean
};
function Rz(M, A, I) {
  var g = Hz(M, A), D = g.range;
  if (!D.start)
    return null;
  if (!D.end) {
    if (I == null)
      return null;
    D.end = A.add(D.start, I);
  }
  return g;
}
function Hz(M, A) {
  var I = hi(M, Xz), g = I.refined, D = I.extra, t = g.start ? A.createMarkerMeta(g.start) : null, N = g.end ? A.createMarkerMeta(g.end) : null, L = g.allDay;
  return L == null && (L = t && t.isTimeUnspecified && (!N || N.isTimeUnspecified)), h({ range: {
    start: t ? t.marker : null,
    end: N ? N.marker : null
  }, allDay: L }, D);
}
function _z(M, A) {
  return h(h({}, sw(M.range, A, M.allDay)), { allDay: M.allDay });
}
function lw(M, A, I) {
  return h(h({}, sw(M, A, I)), { timeZone: A.timeZone });
}
function sw(M, A, I) {
  return {
    start: A.toDate(M.start),
    end: A.toDate(M.end),
    startStr: A.formatIso(M.start, { omitTime: I }),
    endStr: A.formatIso(M.end, { omitTime: I })
  };
}
function $z(M, A, I) {
  var g = Tw({ editable: !1 }, I), D = Yu(
    g.refined,
    g.extra,
    "",
    M.allDay,
    !0,
    I
  );
  return {
    def: D,
    ui: ow(D, A),
    instance: Yi(D.defId, M.range),
    range: M.range,
    isStart: !0,
    isEnd: !0
  };
}
function qz(M, A, I) {
  I.emitter.trigger("select", h(h({}, MY(M, I)), { jsEvent: A ? A.origEvent : null, view: I.viewApi || I.calendarApi.view }));
}
function Kz(M, A) {
  A.emitter.trigger("unselect", {
    jsEvent: M ? M.origEvent : null,
    view: A.viewApi || A.calendarApi.view
  });
}
function MY(M, A) {
  for (var I = {}, g = 0, D = A.pluginHooks.dateSpanTransforms; g < D.length; g++) {
    var t = D[g];
    h(I, t(M, A));
  }
  return h(I, _z(M, A.dateEnv)), I;
}
function jS(M, A, I) {
  var g = I.dateEnv, D = I.options, t = A;
  return M ? (t = XM(t), t = g.add(t, D.defaultAllDayEventDuration)) : t = g.add(t, D.defaultTimedEventDuration), t;
}
function AY(M, A, I, g) {
  var D = xw(M.defs, A), t = Yg();
  for (var N in M.defs) {
    var L = M.defs[N];
    t.defs[N] = IY(L, D[N], I, g);
  }
  for (var j in M.instances) {
    var i = M.instances[j], L = t.defs[i.defId];
    t.instances[j] = gY(i, L, D[i.defId], I, g);
  }
  return t;
}
function IY(M, A, I, g) {
  var D = I.standardProps || {};
  D.hasEnd == null && A.durationEditable && (I.startDelta || I.endDelta) && (D.hasEnd = !0);
  var t = h(h(h({}, M), D), { ui: h(h({}, M.ui), D.ui) });
  I.extendedProps && (t.extendedProps = h(h({}, t.extendedProps), I.extendedProps));
  for (var N = 0, L = g.pluginHooks.eventDefMutationAppliers; N < L.length; N++) {
    var j = L[N];
    j(t, I, g);
  }
  return !t.hasEnd && g.options.forceEventDuration && (t.hasEnd = !0), t;
}
function gY(M, A, I, g, D) {
  var t = D.dateEnv, N = g.standardProps && g.standardProps.allDay === !0, L = g.standardProps && g.standardProps.hasEnd === !1, j = h({}, M);
  return N && (j.range = nw(j.range)), g.datesDelta && I.startEditable && (j.range = {
    start: t.add(j.range.start, g.datesDelta),
    end: t.add(j.range.end, g.datesDelta)
  }), g.startDelta && I.durationEditable && (j.range = {
    start: t.add(j.range.start, g.startDelta),
    end: j.range.end
  }), g.endDelta && I.durationEditable && (j.range = {
    start: j.range.start,
    end: t.add(j.range.end, g.endDelta)
  }), L && (j.range = {
    start: j.range.start,
    end: jS(A.allDay, j.range.start, D)
  }), A.allDay && (j.range = {
    start: XM(j.range.start),
    end: XM(j.range.end)
  }), j.range.end < j.range.start && (j.range.end = jS(A.allDay, j.range.start, D)), j;
}
var DY = function() {
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
}(), tY = {
  id: String,
  defaultAllDay: Boolean,
  url: String,
  format: String,
  events: G,
  eventDataTransform: G,
  success: G,
  failure: G
};
function cw(M, A, I) {
  I === void 0 && (I = rw(A));
  var g;
  if (typeof M == "string" ? g = { url: M } : typeof M == "function" || Array.isArray(M) ? g = { events: M } : typeof M == "object" && M && (g = M), g) {
    var D = hi(g, I), t = D.refined, N = D.extra, L = NY(t, A);
    if (L)
      return {
        _raw: M,
        isFetching: !1,
        latestFetchId: "",
        fetchRange: null,
        defaultAllDay: t.defaultAllDay,
        eventDataTransform: t.eventDataTransform,
        success: t.success,
        failure: t.failure,
        publicId: t.id || "",
        sourceId: mD(),
        sourceDefId: L.sourceDefId,
        meta: L.meta,
        ui: IL(t, A),
        extendedProps: N
      };
  }
  return null;
}
function rw(M) {
  return h(h(h({}, AL), tY), M.pluginHooks.eventSourceRefiners);
}
function NY(M, A) {
  for (var I = A.pluginHooks.eventSourceDefs, g = I.length - 1; g >= 0; g -= 1) {
    var D = I[g], t = D.parseMeta(M);
    if (t)
      return { sourceDefId: g, meta: t };
  }
  return null;
}
function LY(M, A) {
  switch (A.type) {
    case "CHANGE_DATE":
      return A.dateMarker;
    default:
      return M;
  }
}
function jY(M, A) {
  var I = M.initialDate;
  return I != null ? A.createMarker(I) : Ut(M.now, A);
}
function Ut(M, A) {
  return typeof M == "function" && (M = M()), M == null ? A.createNowMarker() : A.createMarker(M);
}
var uY = function() {
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
    (I = this.currentDataManager.emitter).trigger.apply(I, MA([A], g));
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
    var I = this.getCurrentData(), g = I.viewSpecs, D = I.toolbarConfig, t = [].concat(D.header ? D.header.viewsWithButtons : [], D.footer ? D.footer.viewsWithButtons : []), N, L;
    for (var j in g)
      t.push(j);
    for (N = 0; N < t.length; N += 1)
      if (L = g[t[N]], L && L.singleUnit === A)
        return L;
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
      dateMarker: Ut(A.calendarOptions.now, A.dateEnv)
    });
  }, M.prototype.gotoDate = function(A) {
    var I = this.getCurrentData();
    this.unselect(), this.dispatch({
      type: "CHANGE_DATE",
      dateMarker: I.dateEnv.createMarker(A)
    });
  }, M.prototype.incrementDate = function(A) {
    var I = this.getCurrentData(), g = fM(A);
    g && (this.unselect(), this.dispatch({
      type: "CHANGE_DATE",
      dateMarker: I.dateEnv.add(I.currentDate, g)
    }));
  }, M.prototype.getDate = function() {
    var A = this.getCurrentData();
    return A.dateEnv.toDate(A.currentDate);
  }, M.prototype.formatDate = function(A, I) {
    var g = this.getCurrentData().dateEnv;
    return g.format(g.createMarker(A), LA(I));
  }, M.prototype.formatRange = function(A, I, g) {
    var D = this.getCurrentData().dateEnv;
    return D.formatRange(D.createMarker(A), D.createMarker(I), LA(g), g);
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
    var D = this.getCurrentData(), t = Rz(g, D.dateEnv, fM({ days: 1 }));
    t && (this.dispatch({ type: "SELECT_DATES", selection: t }), qz(t, null, D));
  }, M.prototype.unselect = function(A) {
    var I = this.getCurrentData();
    I.dateSelection && (this.dispatch({ type: "UNSELECT_DATES" }), Kz(A, I));
  }, M.prototype.addEvent = function(A, I) {
    if (A instanceof tI) {
      var g = A._def, D = A._instance, t = this.getCurrentData();
      return t.eventStore.defs[g.defId] || (this.dispatch({
        type: "ADD_EVENTS",
        eventStore: ru({ def: g, instance: D })
      }), this.triggerEventAdd(A)), A;
    }
    var N = this.getCurrentData(), L;
    if (I instanceof Bg)
      L = I.internalEventSource;
    else if (typeof I == "boolean")
      I && (L = mi(N.eventSources)[0]);
    else if (I != null) {
      var j = this.getEventSourceById(I);
      if (!j)
        return console.warn('Could not find an event source with ID "' + I + '"'), null;
      L = j.internalEventSource;
    }
    var i = Ew(A, L, N, !1);
    if (i) {
      var u = new tI(N, i.def, i.def.recurringDef ? null : i.instance);
      return this.dispatch({
        type: "ADD_EVENTS",
        eventStore: ru(i)
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
          eventStore: zw(A)
        });
      }
    });
  }, M.prototype.getEventById = function(A) {
    var I = this.getCurrentData(), g = I.eventStore, D = g.defs, t = g.instances;
    A = String(A);
    for (var N in D) {
      var L = D[N];
      if (L.publicId === A) {
        if (L.recurringDef)
          return new tI(I, L, null);
        for (var j in t) {
          var i = t[j];
          if (i.defId === L.defId)
            return new tI(I, L, i);
        }
      }
    }
    return null;
  }, M.prototype.getEvents = function() {
    var A = this.getCurrentData();
    return Qi(A.eventStore, A);
  }, M.prototype.removeAllEvents = function() {
    this.dispatch({ type: "REMOVE_ALL_EVENTS" });
  }, M.prototype.getEventSources = function() {
    var A = this.getCurrentData(), I = A.eventSources, g = [];
    for (var D in I)
      g.push(new Bg(A, I[D]));
    return g;
  }, M.prototype.getEventSourceById = function(A) {
    var I = this.getCurrentData(), g = I.eventSources;
    A = String(A);
    for (var D in g)
      if (g[D].publicId === A)
        return new Bg(I, g[D]);
    return null;
  }, M.prototype.addEventSource = function(A) {
    var I = this.getCurrentData();
    if (A instanceof Bg)
      return I.eventSources[A.internalEventSource.sourceId] || this.dispatch({
        type: "ADD_EVENT_SOURCES",
        sources: [A.internalEventSource]
      }), A;
    var g = cw(A, I);
    return g ? (this.dispatch({ type: "ADD_EVENT_SOURCES", sources: [g] }), new Bg(I, g)) : null;
  }, M.prototype.removeAllEventSources = function() {
    this.dispatch({ type: "REMOVE_ALL_EVENT_SOURCES" });
  }, M.prototype.refetchEvents = function() {
    this.dispatch({ type: "FETCH_EVENT_SOURCES", isRefetch: !0 });
  }, M.prototype.scrollToTime = function(A) {
    var I = fM(A);
    I && this.trigger("_scrollRequest", { time: I });
  }, M;
}(), tI = function() {
  function M(A, I, g) {
    this._context = A, this._def = I, this._instance = g || null;
  }
  return M.prototype.setProp = function(A, I) {
    var g, D;
    if (A in ww)
      console.warn("Could not set date-related prop 'name'. Use one of the date-related methods instead.");
    else if (A === "id")
      I = rN[A](I), this.mutate({
        standardProps: { publicId: I }
      });
    else if (A in rN)
      I = rN[A](I), this.mutate({
        standardProps: (g = {}, g[A] = I, g)
      });
    else if (A in AL) {
      var t = AL[A](I);
      A === "color" ? t = { backgroundColor: I, borderColor: I } : A === "editable" ? t = { startEditable: I, durationEditable: I } : t = (D = {}, D[A] = I, D), this.mutate({
        standardProps: { ui: t }
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
      var t = this._instance.range, N = Kt(t.start, D, g, I.granularity);
      I.maintainDuration ? this.mutate({ datesDelta: N }) : this.mutate({ startDelta: N });
    }
  }, M.prototype.setEnd = function(A, I) {
    I === void 0 && (I = {});
    var g = this._context.dateEnv, D;
    if (!(A != null && (D = g.createMarker(A), !D)) && this._instance)
      if (D) {
        var t = Kt(this._instance.range.end, D, g, I.granularity);
        this.mutate({ endDelta: t });
      } else
        this.mutate({ standardProps: { hasEnd: !1 } });
  }, M.prototype.setDates = function(A, I, g) {
    g === void 0 && (g = {});
    var D = this._context.dateEnv, t = { allDay: g.allDay }, N = D.createMarker(A), L;
    if (!!N && !(I != null && (L = D.createMarker(I), !L)) && this._instance) {
      var j = this._instance.range;
      g.allDay === !0 && (j = nw(j));
      var i = Kt(j.start, N, D, g.granularity);
      if (L) {
        var u = Kt(j.end, L, D, g.granularity);
        tz(i, u) ? this.mutate({ datesDelta: i, standardProps: t }) : this.mutate({ startDelta: i, endDelta: u, standardProps: t });
      } else
        t.hasEnd = !1, this.mutate({ datesDelta: i, standardProps: t });
    }
  }, M.prototype.moveStart = function(A) {
    var I = fM(A);
    I && this.mutate({ startDelta: I });
  }, M.prototype.moveEnd = function(A) {
    var I = fM(A);
    I && this.mutate({ endDelta: I });
  }, M.prototype.moveDates = function(A) {
    var I = fM(A);
    I && this.mutate({ datesDelta: I });
  }, M.prototype.setAllDay = function(A, I) {
    I === void 0 && (I = {});
    var g = { allDay: A }, D = I.maintainDuration;
    D == null && (D = this._context.options.allDayMaintainDuration), this._def.allDay !== A && (g.hasEnd = D), this.mutate({ standardProps: g });
  }, M.prototype.formatRange = function(A) {
    var I = this._context.dateEnv, g = this._instance, D = LA(A);
    return this._def.hasEnd ? I.formatRange(g.range.start, g.range.end, D, {
      forcedStartTzo: g.forcedStartTzo,
      forcedEndTzo: g.forcedEndTzo
    }) : I.format(g.range.start, D, {
      forcedTzo: g.forcedStartTzo
    });
  }, M.prototype.mutate = function(A) {
    var I = this._instance;
    if (I) {
      var g = this._def, D = this._context, t = D.getCurrentData().eventStore, N = zz(t, I.instanceId), L = {
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
      N = AY(N, L, A, D);
      var j = new M(D, g, I);
      this._def = N.defs[g.defId], this._instance = N.instances[I.instanceId], D.dispatch({
        type: "MERGE_EVENTS",
        eventStore: N
      }), D.emitter.trigger("eventChange", {
        oldEvent: j,
        event: this,
        relatedEvents: Qi(N, D, I),
        revert: function() {
          D.dispatch({
            type: "RESET_EVENTS",
            eventStore: t
          });
        }
      });
    }
  }, M.prototype.remove = function() {
    var A = this._context, I = zw(this);
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
      return A ? new Bg(this._context, this._context.getCurrentData().eventSources[A]) : null;
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
    var I = this._def, g = I.ui, D = this, t = D.startStr, N = D.endStr, L = {};
    return I.title && (L.title = I.title), t && (L.start = t), N && (L.end = N), I.publicId && (L.id = I.publicId), I.groupId && (L.groupId = I.groupId), I.url && (L.url = I.url), g.display && g.display !== "auto" && (L.display = g.display), A.collapseColor && g.backgroundColor && g.backgroundColor === g.borderColor ? L.color = g.backgroundColor : (g.backgroundColor && (L.backgroundColor = g.backgroundColor), g.borderColor && (L.borderColor = g.borderColor)), g.textColor && (L.textColor = g.textColor), g.classNames.length && (L.classNames = g.classNames), Object.keys(I.extendedProps).length && (A.collapseExtendedProps ? h(L, I.extendedProps) : L.extendedProps = I.extendedProps), L;
  }, M.prototype.toJSON = function() {
    return this.toPlainObject();
  }, M;
}();
function zw(M) {
  var A, I, g = M._def, D = M._instance;
  return {
    defs: (A = {}, A[g.defId] = g, A),
    instances: D ? (I = {}, I[D.instanceId] = D, I) : {}
  };
}
function Qi(M, A, I) {
  var g = M.defs, D = M.instances, t = [], N = I ? I.instanceId : "";
  for (var L in D) {
    var j = D[L], i = g[j.defId];
    j.instanceId !== N && t.push(new tI(A, i, j));
  }
  return t;
}
var Yw = {};
function iY(M, A) {
  Yw[M] = A;
}
function eY(M) {
  return new Yw[M]();
}
var SY = function() {
  function M() {
  }
  return M.prototype.getMarkerYear = function(A) {
    return A.getUTCFullYear();
  }, M.prototype.getMarkerMonth = function(A) {
    return A.getUTCMonth();
  }, M.prototype.getMarkerDay = function(A) {
    return A.getUTCDate();
  }, M.prototype.arrayToMarker = function(A) {
    return rA(A);
  }, M.prototype.markerToArray = function(A) {
    return BI(A);
  }, M;
}();
iY("gregory", SY);
var CY = /^\s*(\d{4})(-?(\d{2})(-?(\d{2})([T ](\d{2}):?(\d{2})(:?(\d{2})(\.(\d+))?)?(Z|(([-+])(\d{2})(:?(\d{2}))?))?)?)?)?$/;
function aY(M) {
  var A = CY.exec(M);
  if (A) {
    var I = new Date(Date.UTC(Number(A[1]), A[3] ? Number(A[3]) - 1 : 0, Number(A[5] || 1), Number(A[7] || 0), Number(A[8] || 0), Number(A[10] || 0), A[12] ? Number("0." + A[12]) * 1e3 : 0));
    if (Cw(I)) {
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
var wY = function() {
  function M(A) {
    var I = this.timeZone = A.timeZone, g = I !== "local" && I !== "UTC";
    A.namedTimeZoneImpl && g && (this.namedTimeZoneImpl = new A.namedTimeZoneImpl(I)), this.canComputeOffset = Boolean(!g || this.namedTimeZoneImpl), this.calendarSystem = eY(A.calendarSystem), this.locale = A.locale, this.weekDow = A.locale.week.dow, this.weekDoy = A.locale.week.doy, A.weekNumberCalculation === "ISO" && (this.weekDow = 1, this.weekDoy = 4), typeof A.firstDay == "number" && (this.weekDow = A.firstDay), typeof A.weekNumberCalculation == "function" && (this.weekNumberFunc = A.weekNumberCalculation), this.weekText = A.weekText != null ? A.weekText : A.locale.options.weekText, this.weekTextLong = (A.weekTextLong != null ? A.weekTextLong : A.locale.options.weekTextLong) || this.weekText, this.cmdFormatter = A.cmdFormatter, this.defaultSeparator = A.defaultSeparator;
  }
  return M.prototype.createMarker = function(A) {
    var I = this.createMarkerMeta(A);
    return I === null ? null : I.marker;
  }, M.prototype.createNowMarker = function() {
    return this.canComputeOffset ? this.timestampToMarker(new Date().valueOf()) : rA(_e(new Date()));
  }, M.prototype.createMarkerMeta = function(A) {
    if (typeof A == "string")
      return this.parse(A);
    var I = null;
    return typeof A == "number" ? I = this.timestampToMarker(A) : A instanceof Date ? (A = A.valueOf(), isNaN(A) || (I = this.timestampToMarker(A))) : Array.isArray(A) && (I = rA(A)), I === null || !Cw(I) ? null : { marker: I, isTimeUnspecified: !1, forcedTzo: null };
  }, M.prototype.parse = function(A) {
    var I = aY(A);
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
    return FI(A) === FI(I) && g.getMarkerDay(A) === g.getMarkerDay(I) && g.getMarkerMonth(A) === g.getMarkerMonth(I) ? g.getMarkerYear(I) - g.getMarkerYear(A) : null;
  }, M.prototype.diffWholeMonths = function(A, I) {
    var g = this.calendarSystem;
    return FI(A) === FI(I) && g.getMarkerDay(A) === g.getMarkerDay(I) ? g.getMarkerMonth(I) - g.getMarkerMonth(A) + (g.getMarkerYear(I) - g.getMarkerYear(A)) * 12 : null;
  }, M.prototype.greatestWholeUnit = function(A, I) {
    var g = this.diffWholeYears(A, I);
    return g !== null ? { unit: "year", value: g } : (g = this.diffWholeMonths(A, I), g !== null ? { unit: "month", value: g } : (g = X1(A, I), g !== null ? { unit: "week", value: g } : (g = _N(A, I), g !== null ? { unit: "day", value: g } : (g = Z1(A, I), sj(g) ? { unit: "hour", value: g } : (g = P1(A, I), sj(g) ? { unit: "minute", value: g } : (g = B1(A, I), sj(g) ? { unit: "second", value: g } : { unit: "millisecond", value: I.valueOf() - A.valueOf() }))))));
  }, M.prototype.countDurationsBetween = function(A, I, g) {
    var D;
    return g.years && (D = this.diffWholeYears(A, I), D !== null) ? D / Lz(g) : g.months && (D = this.diffWholeMonths(A, I), D !== null) ? D / jz(g) : g.days && (D = _N(A, I), D !== null) ? D / DD(g) : (I.valueOf() - A.valueOf()) / nt(g);
  }, M.prototype.startOf = function(A, I) {
    return I === "year" ? this.startOfYear(A) : I === "month" ? this.startOfMonth(A) : I === "week" ? this.startOfWeek(A) : I === "day" ? XM(A) : I === "hour" ? R1(A) : I === "minute" ? H1(A) : I === "second" ? _1(A) : null;
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
    return this.weekNumberFunc ? this.weekNumberFunc(this.toDate(A)) : $1(A, this.weekDow, this.weekDoy);
  }, M.prototype.format = function(A, I, g) {
    return g === void 0 && (g = {}), I.format({
      marker: A,
      timeZoneOffset: g.forcedTzo != null ? g.forcedTzo : this.offsetForMarker(A)
    }, this);
  }, M.prototype.formatRange = function(A, I, g, D) {
    return D === void 0 && (D = {}), D.isEndExclusive && (I = zg(I, -1)), g.formatRange({
      marker: A,
      timeZoneOffset: D.forcedStartTzo != null ? D.forcedStartTzo : this.offsetForMarker(A)
    }, {
      marker: I,
      timeZoneOffset: D.forcedEndTzo != null ? D.forcedEndTzo : this.offsetForMarker(I)
    }, this, D.defaultSeparator);
  }, M.prototype.formatIso = function(A, I) {
    I === void 0 && (I = {});
    var g = null;
    return I.omitTimeZoneOffset || (I.forcedTzo != null ? g = I.forcedTzo : g = this.offsetForMarker(A)), uz(A, g, I.omitTime);
  }, M.prototype.timestampToMarker = function(A) {
    return this.timeZone === "local" ? rA(_e(new Date(A))) : this.timeZone === "UTC" || !this.namedTimeZoneImpl ? new Date(A) : rA(this.namedTimeZoneImpl.timestampToArray(A));
  }, M.prototype.offsetForMarker = function(A) {
    return this.timeZone === "local" ? -$e(BI(A)).getTimezoneOffset() : this.timeZone === "UTC" ? 0 : this.namedTimeZoneImpl ? this.namedTimeZoneImpl.offsetForArray(BI(A)) : null;
  }, M.prototype.toDate = function(A, I) {
    return this.timeZone === "local" ? $e(BI(A)) : this.timeZone === "UTC" ? new Date(A.valueOf()) : this.namedTimeZoneImpl ? new Date(A.valueOf() - this.namedTimeZoneImpl.offsetForArray(BI(A)) * 1e3 * 60) : new Date(A.valueOf() - (I || 0));
  }, M;
}(), EY = [], dw = {
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
}, mw = h(h({}, dw), {
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
function TY(M) {
  for (var A = M.length > 0 ? M[0].code : "en", I = EY.concat(M), g = {
    en: mw
  }, D = 0, t = I; D < t.length; D++) {
    var N = t[D];
    g[N.code] = N;
  }
  return {
    map: g,
    defaultCode: A
  };
}
function Uw(M, A) {
  return typeof M == "object" && !Array.isArray(M) ? hw(M.code, [M.code], M) : nY(M, A);
}
function nY(M, A) {
  var I = [].concat(M || []), g = xY(I, A) || mw;
  return hw(M, I, g);
}
function xY(M, A) {
  for (var I = 0; I < M.length; I += 1)
    for (var g = M[I].toLocaleLowerCase().split("-"), D = g.length; D > 0; D -= 1) {
      var t = g.slice(0, D).join("-");
      if (A[t])
        return A[t];
    }
  return null;
}
function hw(M, A, I) {
  var g = di([dw, I], ["buttonText"]);
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
var oY = {
  startTime: "09:00",
  endTime: "17:00",
  daysOfWeek: [1, 2, 3, 4, 5],
  display: "inverse-background",
  classNames: "fc-non-business",
  groupId: "_businessHours"
};
function yY(M, A) {
  return ML(lY(M), null, A);
}
function lY(M) {
  var A;
  return M === !0 ? A = [{}] : Array.isArray(M) ? A = M.filter(function(I) {
    return I.daysOfWeek;
  }) : typeof M == "object" && M ? A = [M] : A = [], A = A.map(function(I) {
    return h(h({}, oY), I);
  }), A;
}
function sY(M, A) {
  var I = {
    left: Math.max(M.left, A.left),
    right: Math.min(M.right, A.right),
    top: Math.max(M.top, A.top),
    bottom: Math.min(M.bottom, A.bottom)
  };
  return I.left < I.right && I.top < I.bottom ? I : !1;
}
var Yj;
function Ow() {
  return Yj == null && (Yj = cY()), Yj;
}
function cY() {
  if (typeof document > "u")
    return !0;
  var M = document.createElement("div");
  M.style.position = "absolute", M.style.top = "0px", M.style.left = "0px", M.innerHTML = "<table><tr><td><div></div></td></tr></table>", M.querySelector("table").style.height = "100px", M.querySelector("div").style.height = "100%", document.body.appendChild(M);
  var A = M.querySelector("div"), I = A.offsetHeight > 0;
  return document.body.removeChild(M), I;
}
function fi(M, A, I, g) {
  return {
    dow: M.getUTCDay(),
    isDisabled: Boolean(g && !xg(g.activeRange, M)),
    isOther: Boolean(g && !xg(g.currentRange, M)),
    isToday: Boolean(A && xg(A, M)),
    isPast: Boolean(I ? M < I : A ? M < A.start : !1),
    isFuture: Boolean(I ? M > I : A ? M >= A.end : !1)
  };
}
function OL(M, A) {
  var I = [
    "fc-day",
    "fc-day-" + J1[M.dow]
  ];
  return M.isDisabled ? I.push("fc-day-disabled") : (M.isToday && (I.push("fc-day-today"), I.push(A.getClass("today"))), M.isPast && I.push("fc-day-past"), M.isFuture && I.push("fc-day-future"), M.isOther && I.push("fc-day-other")), I;
}
var rY = LA({ year: "numeric", month: "long", day: "numeric" }), zY = LA({ week: "long" });
function xt(M, A, I, g) {
  I === void 0 && (I = "day"), g === void 0 && (g = !0);
  var D = M.dateEnv, t = M.options, N = M.calendarApi, L = D.format(A, I === "week" ? zY : rY);
  if (t.navLinks) {
    var j = D.toDate(A), i = function(u) {
      var e = I === "day" ? t.navLinkDayClick : I === "week" ? t.navLinkWeekClick : null;
      typeof e == "function" ? e.call(N, D.toDate(A), u) : (typeof e == "string" && (I = e), N.zoomTo(A, I));
    };
    return h({ title: It(t.navLinkHint, [L, j], L), "data-navlink": "" }, g ? ew(i) : { onClick: i });
  }
  return { "aria-label": L };
}
var dj;
function YY() {
  return dj || (dj = dY()), dj;
}
function dY() {
  var M = document.createElement("div");
  M.style.overflow = "scroll", M.style.position = "absolute", M.style.top = "-9999px", M.style.left = "-9999px", document.body.appendChild(M);
  var A = mY(M);
  return document.body.removeChild(M), A;
}
function mY(M) {
  return {
    x: M.offsetHeight - M.clientHeight,
    y: M.offsetWidth - M.clientWidth
  };
}
function UY(M) {
  for (var A = hY(M), I = M.getBoundingClientRect(), g = 0, D = A; g < D.length; g++) {
    var t = D[g], N = sY(I, t.getBoundingClientRect());
    if (N)
      I = N;
    else
      return null;
  }
  return I;
}
function hY(M) {
  for (var A = []; M instanceof HTMLElement; ) {
    var I = window.getComputedStyle(M);
    if (I.position === "fixed")
      break;
    /(auto|scroll)/.test(I.overflow + I.overflowY + I.overflowX) && A.push(M), M = M.parentNode;
  }
  return A;
}
function OY(M, A, I) {
  var g = !1, D = function() {
    g || (g = !0, A.apply(this, arguments));
  }, t = function() {
    g || (g = !0, I && I.apply(this, arguments));
  }, N = M(D, t);
  N && typeof N.then == "function" && N.then(D, t);
}
var bY = function() {
  function M() {
    this.handlers = {}, this.thisContext = null;
  }
  return M.prototype.setThisContext = function(A) {
    this.thisContext = A;
  }, M.prototype.setOptions = function(A) {
    this.options = A;
  }, M.prototype.on = function(A, I) {
    WY(this.handlers, A, I);
  }, M.prototype.off = function(A, I) {
    kY(this.handlers, A, I);
  }, M.prototype.trigger = function(A) {
    for (var I = [], g = 1; g < arguments.length; g++)
      I[g - 1] = arguments[g];
    for (var D = this.handlers[A] || [], t = this.options && this.options[A], N = [].concat(t || [], D), L = 0, j = N; L < j.length; L++) {
      var i = j[L];
      i.apply(this.thisContext, I);
    }
  }, M.prototype.hasHandlers = function(A) {
    return Boolean(this.handlers[A] && this.handlers[A].length || this.options && this.options[A]);
  }, M;
}();
function WY(M, A, I) {
  (M[A] || (M[A] = [])).push(I);
}
function kY(M, A, I) {
  I ? M[A] && (M[A] = M[A].filter(function(g) {
    return g !== I;
  })) : delete M[A];
}
var Uu = function() {
  function M(A, I, g, D) {
    this.els = I;
    var t = this.originClientRect = A.getBoundingClientRect();
    g && this.buildElHorizontals(t.left), D && this.buildElVerticals(t.top);
  }
  return M.prototype.buildElHorizontals = function(A) {
    for (var I = [], g = [], D = 0, t = this.els; D < t.length; D++) {
      var N = t[D], L = N.getBoundingClientRect();
      I.push(L.left - A), g.push(L.right - A);
    }
    this.lefts = I, this.rights = g;
  }, M.prototype.buildElVerticals = function(A) {
    for (var I = [], g = [], D = 0, t = this.els; D < t.length; D++) {
      var N = t[D], L = N.getBoundingClientRect();
      I.push(L.top - A), g.push(L.bottom - A);
    }
    this.tops = I, this.bottoms = g;
  }, M.prototype.leftToIndex = function(A) {
    var I = this, g = I.lefts, D = I.rights, t = g.length, N;
    for (N = 0; N < t; N += 1)
      if (A >= g[N] && A < D[N])
        return N;
  }, M.prototype.topToIndex = function(A) {
    var I = this, g = I.tops, D = I.bottoms, t = g.length, N;
    for (N = 0; N < t; N += 1)
      if (A >= g[N] && A < D[N])
        return N;
  }, M.prototype.getWidth = function(A) {
    return this.rights[A] - this.lefts[A];
  }, M.prototype.getHeight = function(A) {
    return this.bottoms[A] - this.tops[A];
  }, M;
}(), bw = function() {
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
})(bw);
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
})(bw);
var ht = function() {
  function M(A) {
    this.iconOverrideOption && this.setIconOverride(A[this.iconOverrideOption]);
  }
  return M.prototype.setIconOverride = function(A) {
    var I, g;
    if (typeof A == "object" && A) {
      I = h({}, this.iconClasses);
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
ht.prototype.classes = {};
ht.prototype.iconClasses = {};
ht.prototype.baseIconClass = "";
ht.prototype.iconOverridePrefix = "";
var pY = function() {
  function M(A, I, g, D) {
    var t = this;
    this.execFunc = A, this.emitter = I, this.scrollTime = g, this.scrollTimeReset = D, this.handleScrollRequest = function(N) {
      t.queuedRequest = h({}, t.queuedRequest || {}, N), t.drain();
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
}(), hg = jw({});
function QY(M, A, I, g, D, t, N, L, j, i, u, e, C) {
  return {
    dateEnv: D,
    options: I,
    pluginHooks: N,
    emitter: i,
    dispatch: L,
    getCurrentData: j,
    calendarApi: u,
    viewSpec: M,
    viewApi: A,
    dateProfileGenerator: g,
    theme: t,
    isRtl: I.direction === "rtl",
    addResizeHandler: function(a) {
      i.on("_resize", a);
    },
    removeResizeHandler: function(a) {
      i.off("_resize", a);
    },
    createScrollResponder: function(a) {
      return new pY(a, i, fM(I.scrollTime), I.scrollTimeReset);
    },
    registerInteractiveComponent: e,
    unregisterInteractiveComponent: C
  };
}
var bL = function(M) {
  TM(A, M);
  function A() {
    return M !== null && M.apply(this, arguments) || this;
  }
  return A.prototype.shouldComponentUpdate = function(I, g) {
    return this.debug && console.log(qe(I, this.props), qe(g, this.state)), !rj(this.props, I, this.propEquality) || !rj(this.state, g, this.stateEquality);
  }, A.prototype.safeSetState = function(I) {
    rj(this.state, h(h({}, this.state), I), this.stateEquality) || this.setState(I);
  }, A.addPropsEquality = fY, A.addStateEquality = vY, A.contextType = hg, A;
}(zi);
bL.prototype.propEquality = {};
bL.prototype.stateEquality = {};
var JM = function(M) {
  TM(A, M);
  function A() {
    return M !== null && M.apply(this, arguments) || this;
  }
  return A.contextType = hg, A;
}(bL);
function fY(M) {
  var A = Object.create(this.prototype.propEquality);
  h(A, M), this.prototype.propEquality = A;
}
function vY(M) {
  var A = Object.create(this.prototype.stateEquality);
  h(A, M), this.prototype.stateEquality = A;
}
function dI(M, A) {
  typeof M == "function" ? M(A) : M && (M.current = A);
}
var Og = function(M) {
  TM(A, M);
  function A() {
    var I = M !== null && M.apply(this, arguments) || this;
    return I.uid = mD(), I;
  }
  return A.prototype.prepareHits = function() {
  }, A.prototype.queryHit = function(I, g, D, t) {
    return null;
  }, A.prototype.isValidSegDownEl = function(I) {
    return !this.props.eventDrag && !this.props.eventResize && !CI(I, ".fc-event-mirror");
  }, A.prototype.isValidDateDownEl = function(I) {
    return !CI(I, ".fc-event:not(.fc-bg-event)") && !CI(I, ".fc-more-link") && !CI(I, "a[data-navlink]") && !CI(I, ".fc-popover");
  }, A;
}(JM);
function WI(M) {
  return {
    id: mD(),
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
function GY(M, A) {
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
  function D(t) {
    for (var N = 0, L = t; N < L.length; N++) {
      var j = L[N];
      I[j.id] || (I[j.id] = !0, D(j.deps), g = VY(g, j));
    }
  }
  return M && D(M), D(A), g;
}
function JY() {
  var M = [], A = [], I;
  return function(g, D) {
    return (!I || !wD(g, M) || !wD(D, A)) && (I = GY(g, D)), M = g, A = D, I;
  };
}
function VY(M, A) {
  return {
    reducers: M.reducers.concat(A.reducers),
    isLoadingFuncs: M.isLoadingFuncs.concat(A.isLoadingFuncs),
    contextInit: M.contextInit.concat(A.contextInit),
    eventRefiners: h(h({}, M.eventRefiners), A.eventRefiners),
    eventDefMemberAdders: M.eventDefMemberAdders.concat(A.eventDefMemberAdders),
    eventSourceRefiners: h(h({}, M.eventSourceRefiners), A.eventSourceRefiners),
    isDraggableTransformers: M.isDraggableTransformers.concat(A.isDraggableTransformers),
    eventDragMutationMassagers: M.eventDragMutationMassagers.concat(A.eventDragMutationMassagers),
    eventDefMutationAppliers: M.eventDefMutationAppliers.concat(A.eventDefMutationAppliers),
    dateSelectionTransformers: M.dateSelectionTransformers.concat(A.dateSelectionTransformers),
    datePointTransforms: M.datePointTransforms.concat(A.datePointTransforms),
    dateSpanTransforms: M.dateSpanTransforms.concat(A.dateSpanTransforms),
    views: h(h({}, M.views), A.views),
    viewPropsTransformers: M.viewPropsTransformers.concat(A.viewPropsTransformers),
    isPropsValid: A.isPropsValid || M.isPropsValid,
    externalDefTransforms: M.externalDefTransforms.concat(A.externalDefTransforms),
    viewContainerAppends: M.viewContainerAppends.concat(A.viewContainerAppends),
    eventDropTransformers: M.eventDropTransformers.concat(A.eventDropTransformers),
    calendarInteractions: M.calendarInteractions.concat(A.calendarInteractions),
    componentInteractions: M.componentInteractions.concat(A.componentInteractions),
    themeClasses: h(h({}, M.themeClasses), A.themeClasses),
    eventSourceDefs: M.eventSourceDefs.concat(A.eventSourceDefs),
    cmdFormatter: A.cmdFormatter || M.cmdFormatter,
    recurringTypes: M.recurringTypes.concat(A.recurringTypes),
    namedTimeZonedImpl: A.namedTimeZonedImpl || M.namedTimeZonedImpl,
    initialView: M.initialView || A.initialView,
    elementDraggingImpl: M.elementDraggingImpl || A.elementDraggingImpl,
    optionChangeHandlers: h(h({}, M.optionChangeHandlers), A.optionChangeHandlers),
    scrollGridImpl: A.scrollGridImpl || M.scrollGridImpl,
    contentTypeHandlers: h(h({}, M.contentTypeHandlers), A.contentTypeHandlers),
    listenerRefiners: h(h({}, M.listenerRefiners), A.listenerRefiners),
    optionRefiners: h(h({}, M.optionRefiners), A.optionRefiners),
    propSetHandlers: h(h({}, M.propSetHandlers), A.propSetHandlers)
  };
}
var Ig = function(M) {
  TM(A, M);
  function A() {
    return M !== null && M.apply(this, arguments) || this;
  }
  return A;
}(ht);
Ig.prototype.classes = {
  root: "fc-theme-standard",
  tableCellShaded: "fc-cell-shaded",
  buttonGroup: "fc-button-group",
  button: "fc-button fc-button-primary",
  buttonActive: "fc-button-active"
};
Ig.prototype.baseIconClass = "fc-icon";
Ig.prototype.iconClasses = {
  close: "fc-icon-x",
  prev: "fc-icon-chevron-left",
  next: "fc-icon-chevron-right",
  prevYear: "fc-icon-chevrons-left",
  nextYear: "fc-icon-chevrons-right"
};
Ig.prototype.rtlIconClasses = {
  prev: "fc-icon-chevron-right",
  next: "fc-icon-chevron-left",
  prevYear: "fc-icon-chevrons-right",
  nextYear: "fc-icon-chevrons-left"
};
Ig.prototype.iconOverrideOption = "buttonIcons";
Ig.prototype.iconOverrideCustomButtonOption = "icon";
Ig.prototype.iconOverridePrefix = "fc-icon-";
function ZY(M, A) {
  var I = {}, g;
  for (g in M)
    hu(g, I, M, A);
  for (g in A)
    hu(g, I, M, A);
  return I;
}
function hu(M, A, I, g) {
  if (A[M])
    return A[M];
  var D = PY(M, A, I, g);
  return D && (A[M] = D), D;
}
function PY(M, A, I, g) {
  var D = I[M], t = g[M], N = function(u) {
    return D && D[u] !== null ? D[u] : t && t[u] !== null ? t[u] : null;
  }, L = N("component"), j = N("superType"), i = null;
  if (j) {
    if (j === M)
      throw new Error("Can't have a custom view type that references itself");
    i = hu(j, A, I, g);
  }
  return !L && i && (L = i.component), L ? {
    type: M,
    component: L,
    defaults: h(h({}, i ? i.defaults : {}), D ? D.rawOptions : {}),
    overrides: h(h({}, i ? i.overrides : {}), t ? t.rawOptions : {})
  } : null;
}
var kI = function(M) {
  TM(A, M);
  function A() {
    var I = M !== null && M.apply(this, arguments) || this;
    return I.rootElRef = vA(), I.handleRootEl = function(g) {
      dI(I.rootElRef, g), I.props.elRef && dI(I.props.elRef, g);
    }, I;
  }
  return A.prototype.render = function() {
    var I = this, g = this.props, D = g.hookProps;
    return O(vi, { hookProps: D, didMount: g.didMount, willUnmount: g.willUnmount, elRef: this.handleRootEl }, function(t) {
      return O(kw, { hookProps: D, content: g.content, defaultContent: g.defaultContent, backupElRef: I.rootElRef }, function(N, L) {
        return g.children(t, Qw(g.classNames, D), N, L);
      });
    });
  }, A;
}(JM), Ww = jw(0);
function kw(M) {
  return O(Ww.Consumer, null, function(A) {
    return O(BY, h({ renderId: A }, M));
  });
}
var BY = function(M) {
  TM(A, M);
  function A() {
    var I = M !== null && M.apply(this, arguments) || this;
    return I.innerElRef = vA(), I;
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
    return !I || I.contentKey !== D.contentKey ? (I && (I.destroy && I.destroy(), I = this.customContentInfo = null), D.contentKey && (I = this.customContentInfo = h({ contentKey: D.contentKey, contentVal: g[D.contentKey] }, D.buildLifecycleFuncs()))) : I && (I.contentVal = g[D.contentKey]), I ? [] : g;
  }, A.prototype.getInnerContent = function() {
    var I = this.props, g = uS(I.content, I.hookProps);
    return g === void 0 && (g = uS(I.defaultContent, I.hookProps)), g == null ? null : g;
  }, A.prototype.getContentMeta = function(I) {
    var g = this.context.pluginHooks.contentTypeHandlers, D = "", t = null;
    if (I) {
      for (var N in g)
        if (I[N] !== void 0) {
          D = N, t = g[N];
          break;
        }
    }
    return { contentKey: D, buildLifecycleFuncs: t };
  }, A.prototype.updateCustomContent = function() {
    this.customContentInfo && this.customContentInfo.render(
      this.innerElRef.current || this.props.backupElRef.current,
      this.customContentInfo.contentVal
    );
  }, A;
}(JM), vi = function(M) {
  TM(A, M);
  function A() {
    var I = M !== null && M.apply(this, arguments) || this;
    return I.handleRootEl = function(g) {
      I.rootEl = g, I.props.elRef && dI(I.props.elRef, g);
    }, I;
  }
  return A.prototype.render = function() {
    return this.props.children(this.handleRootEl);
  }, A.prototype.componentDidMount = function() {
    var I = this.props.didMount;
    I && I(h(h({}, this.props.hookProps), { el: this.rootEl }));
  }, A.prototype.componentWillUnmount = function() {
    var I = this.props.willUnmount;
    I && I(h(h({}, this.props.hookProps), { el: this.rootEl }));
  }, A;
}(JM);
function pw() {
  var M, A, I = [];
  return function(g, D) {
    return (!A || !YI(A, D) || g !== M) && (M = g, A = D, I = Qw(g, D)), I;
  };
}
function Qw(M, A) {
  return typeof M == "function" && (M = M(A)), zu(M);
}
function uS(M, A) {
  return typeof M == "function" ? M(A, O) : M;
}
var gL = function(M) {
  TM(A, M);
  function A() {
    var I = M !== null && M.apply(this, arguments) || this;
    return I.normalizeClassNames = pw(), I;
  }
  return A.prototype.render = function() {
    var I = this, g = I.props, D = I.context, t = D.options, N = { view: D.viewApi }, L = this.normalizeClassNames(t.viewClassNames, N);
    return O(vi, { hookProps: N, didMount: t.viewDidMount, willUnmount: t.viewWillUnmount, elRef: g.elRef }, function(j) {
      return g.children(j, ["fc-" + g.viewSpec.type + "-view", "fc-view"].concat(L));
    });
  }, A;
}(JM);
function iS(M) {
  return mt(M, FY);
}
function FY(M) {
  var A = typeof M == "function" ? { component: M } : M, I = A.component;
  return A.content && (I = XY(A)), {
    superType: A.type,
    component: I,
    rawOptions: A
  };
}
function XY(M) {
  return function(A) {
    return O(hg.Consumer, null, function(I) {
      return O(gL, { viewSpec: I.viewSpec }, function(g, D) {
        var t = h(h({}, A), { nextDayThreshold: I.options.nextDayThreshold });
        return O(kI, { hookProps: t, classNames: M.classNames, content: M.content, didMount: M.didMount, willUnmount: M.willUnmount, elRef: g }, function(N, L, j, i) {
          return O("div", { className: D.concat(L).join(" "), ref: N }, i);
        });
      });
    });
  };
}
function RY(M, A, I, g) {
  var D = iS(M), t = iS(A.views), N = ZY(D, t);
  return mt(N, function(L) {
    return HY(L, t, A, I, g);
  });
}
function HY(M, A, I, g, D) {
  var t = M.overrides.duration || M.defaults.duration || g.duration || I.duration, N = null, L = "", j = "", i = {};
  if (t && (N = _Y(t), N)) {
    var u = cu(N);
    L = u.unit, u.value === 1 && (j = L, i = A[L] ? A[L].rawOptions : {});
  }
  var e = function(a) {
    var w = a.buttonText || {}, n = M.defaults.buttonTextKey;
    return n != null && w[n] != null ? w[n] : w[M.type] != null ? w[M.type] : w[j] != null ? w[j] : null;
  }, C = function(a) {
    var w = a.buttonHints || {}, n = M.defaults.buttonTextKey;
    return n != null && w[n] != null ? w[n] : w[M.type] != null ? w[M.type] : w[j] != null ? w[j] : null;
  };
  return {
    type: M.type,
    component: M.component,
    duration: N,
    durationUnit: L,
    singleUnit: j,
    optionDefaults: M.defaults,
    optionOverrides: h(h({}, i), M.overrides),
    buttonTextOverride: e(g) || e(I) || M.overrides.buttonText,
    buttonTextDefault: e(D) || M.defaults.buttonText || e(gt) || M.type,
    buttonTitleOverride: C(g) || C(I) || M.overrides.buttonHint,
    buttonTitleDefault: C(D) || M.defaults.buttonHint || C(gt)
  };
}
var eS = {};
function _Y(M) {
  var A = JSON.stringify(M), I = eS[A];
  return I === void 0 && (I = fM(M), eS[A] = I), I;
}
var fw = function() {
  function M(A) {
    this.props = A, this.nowDate = Ut(A.nowInput, A.dateEnv), this.initHiddenDays();
  }
  return M.prototype.buildPrev = function(A, I, g) {
    var D = this.props.dateEnv, t = D.subtract(
      D.startOf(I, A.currentRangeUnit),
      A.dateIncrement
    );
    return this.build(t, -1, g);
  }, M.prototype.buildNext = function(A, I, g) {
    var D = this.props.dateEnv, t = D.add(
      D.startOf(I, A.currentRangeUnit),
      A.dateIncrement
    );
    return this.build(t, 1, g);
  }, M.prototype.build = function(A, I, g) {
    g === void 0 && (g = !0);
    var D = this.props, t, N, L, j, i, u;
    return t = this.buildValidRange(), t = this.trimHiddenDays(t), g && (A = Gz(A, t)), N = this.buildCurrentRangeInfo(A, I), L = /^(year|month|week|day)$/.test(N.unit), j = this.buildRenderRange(this.trimHiddenDays(N.range), N.unit, L), j = this.trimHiddenDays(j), i = j, D.showNonCurrentDates || (i = ED(i, N.range)), i = this.adjustActiveRange(i), i = ED(i, t), u = vz(N.range, t), {
      validRange: t,
      currentRange: N.range,
      currentRangeUnit: N.unit,
      isRangeAllDay: L,
      activeRange: i,
      renderRange: j,
      slotMinTime: D.slotMinTime,
      slotMaxTime: D.slotMaxTime,
      isValid: u,
      dateIncrement: this.buildDateIncrement(N.duration)
    };
  }, M.prototype.buildValidRange = function() {
    var A = this.props.validRangeInput, I = typeof A == "function" ? A.call(this.props.calendarApi, this.nowDate) : A;
    return this.refineRange(I) || { start: null, end: null };
  }, M.prototype.buildCurrentRangeInfo = function(A, I) {
    var g = this.props, D = null, t = null, N = null, L;
    return g.duration ? (D = g.duration, t = g.durationUnit, N = this.buildRangeFromDuration(A, I, D, t)) : (L = this.props.dayCount) ? (t = "day", N = this.buildRangeFromDayCount(A, I, L)) : (N = this.buildCustomVisibleRange(A)) ? t = g.dateEnv.greatestWholeUnit(N.start, N.end).unit : (D = this.getFallbackDuration(), t = cu(D).unit, N = this.buildRangeFromDuration(A, I, D, t)), { duration: D, unit: t, range: N };
  }, M.prototype.getFallbackDuration = function() {
    return fM({ day: 1 });
  }, M.prototype.adjustActiveRange = function(A) {
    var I = this.props, g = I.dateEnv, D = I.usesMinMaxTime, t = I.slotMinTime, N = I.slotMaxTime, L = A.start, j = A.end;
    return D && (DD(t) < 0 && (L = XM(L), L = g.add(L, t)), DD(N) > 1 && (j = XM(j), j = jA(j, -1), j = g.add(j, N))), { start: L, end: j };
  }, M.prototype.buildRangeFromDuration = function(A, I, g, D) {
    var t = this.props, N = t.dateEnv, L = t.dateAlignment, j, i, u;
    if (!L) {
      var e = this.props.dateIncrement;
      e && nt(e) < nt(g) ? L = cu(e).unit : L = D;
    }
    DD(g) <= 1 && this.isHiddenDay(j) && (j = this.skipHiddenDays(j, I), j = XM(j));
    function C() {
      j = N.startOf(A, L), i = N.add(j, g), u = { start: j, end: i };
    }
    return C(), this.trimHiddenDays(u) || (A = this.skipHiddenDays(A, I), C()), u;
  }, M.prototype.buildRangeFromDayCount = function(A, I, g) {
    var D = this.props, t = D.dateEnv, N = D.dateAlignment, L = 0, j = A, i;
    N && (j = t.startOf(j, N)), j = XM(j), j = this.skipHiddenDays(j, I), i = j;
    do
      i = jA(i, 1), this.isHiddenDay(i) || (L += 1);
    while (L < g);
    return { start: j, end: i };
  }, M.prototype.buildCustomVisibleRange = function(A) {
    var I = this.props, g = I.visibleRangeInput, D = typeof g == "function" ? g.call(I.calendarApi, I.dateEnv.toDate(A)) : g, t = this.refineRange(D);
    return t && (t.start == null || t.end == null) ? null : t;
  }, M.prototype.buildRenderRange = function(A, I, g) {
    return A;
  }, M.prototype.buildDateIncrement = function(A) {
    var I = this.props.dateIncrement, g;
    return I || ((g = this.props.dateAlignment) ? fM(1, g) : A || fM({ days: 1 }));
  }, M.prototype.refineRange = function(A) {
    if (A) {
      var I = Qz(A, this.props.dateEnv);
      return I && (I = ki(I)), I;
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
      A = jA(A, I);
    return A;
  }, M;
}();
function $Y(M, A) {
  switch (A.type) {
    case "CHANGE_VIEW_TYPE":
      M = A.viewType;
  }
  return M;
}
function qY(M, A) {
  var I;
  switch (A.type) {
    case "SET_OPTION":
      return h(h({}, M), (I = {}, I[A.optionName] = A.rawOptionValue, I));
    default:
      return M;
  }
}
function KY(M, A, I, g) {
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
function Md(M, A, I) {
  var g = A ? A.activeRange : null;
  return Gw({}, Ld(M, I), g, I);
}
function Ad(M, A, I, g) {
  var D = I ? I.activeRange : null;
  switch (A.type) {
    case "ADD_EVENT_SOURCES":
      return Gw(M, A.sources, D, g);
    case "REMOVE_EVENT_SOURCE":
      return gd(M, A.sourceId);
    case "PREV":
    case "NEXT":
    case "CHANGE_DATE":
    case "CHANGE_VIEW_TYPE":
      return I ? Jw(M, D, g) : M;
    case "FETCH_EVENT_SOURCES":
      return Gi(M, A.sourceIds ? aw(A.sourceIds) : Vw(M, g), D, A.isRefetch || !1, g);
    case "RECEIVE_EVENTS":
    case "RECEIVE_EVENT_ERROR":
      return Nd(M, A.sourceId, A.fetchId, A.fetchRange);
    case "REMOVE_ALL_EVENT_SOURCES":
      return {};
    default:
      return M;
  }
}
function Id(M, A, I) {
  var g = A ? A.activeRange : null;
  return Gi(M, Vw(M, I), g, !0, I);
}
function vw(M) {
  for (var A in M)
    if (M[A].isFetching)
      return !0;
  return !1;
}
function Gw(M, A, I, g) {
  for (var D = {}, t = 0, N = A; t < N.length; t++) {
    var L = N[t];
    D[L.sourceId] = L;
  }
  return I && (D = Jw(D, I, g)), h(h({}, M), D);
}
function gd(M, A) {
  return aD(M, function(I) {
    return I.sourceId !== A;
  });
}
function Jw(M, A, I) {
  return Gi(M, aD(M, function(g) {
    return Dd(g, A, I);
  }), A, !1, I);
}
function Dd(M, A, I) {
  return Zw(M, I) ? !I.options.lazyFetching || !M.fetchRange || M.isFetching || A.start < M.fetchRange.start || A.end > M.fetchRange.end : !M.latestFetchId;
}
function Gi(M, A, I, g, D) {
  var t = {};
  for (var N in M) {
    var L = M[N];
    A[N] ? t[N] = td(L, I, g, D) : t[N] = L;
  }
  return t;
}
function td(M, A, I, g) {
  var D = g.options, t = g.calendarApi, N = g.pluginHooks.eventSourceDefs[M.sourceDefId], L = mD();
  return N.fetch({
    eventSource: M,
    range: A,
    isRefetch: I,
    context: g
  }, function(j) {
    var i = j.rawEvents;
    D.eventSourceSuccess && (i = D.eventSourceSuccess.call(t, i, j.xhr) || i), M.success && (i = M.success.call(t, i, j.xhr) || i), g.dispatch({
      type: "RECEIVE_EVENTS",
      sourceId: M.sourceId,
      fetchId: L,
      fetchRange: A,
      rawEvents: i
    });
  }, function(j) {
    console.warn(j.message, j), D.eventSourceFailure && D.eventSourceFailure.call(t, j), M.failure && M.failure(j), g.dispatch({
      type: "RECEIVE_EVENT_ERROR",
      sourceId: M.sourceId,
      fetchId: L,
      fetchRange: A,
      error: j
    });
  }), h(h({}, M), { isFetching: !0, latestFetchId: L });
}
function Nd(M, A, I, g) {
  var D, t = M[A];
  return t && I === t.latestFetchId ? h(h({}, M), (D = {}, D[A] = h(h({}, t), { isFetching: !1, fetchRange: g }), D)) : M;
}
function Vw(M, A) {
  return aD(M, function(I) {
    return Zw(I, A);
  });
}
function Ld(M, A) {
  var I = rw(A), g = [].concat(M.eventSources || []), D = [];
  M.initialEvents && g.unshift(M.initialEvents), M.events && g.unshift(M.events);
  for (var t = 0, N = g; t < N.length; t++) {
    var L = N[t], j = cw(L, A, I);
    j && D.push(j);
  }
  return D;
}
function Zw(M, A) {
  var I = A.pluginHooks.eventSourceDefs;
  return !I[M.sourceDefId].ignoreRange;
}
function jd(M, A, I, g, D) {
  switch (A.type) {
    case "RECEIVE_EVENTS":
      return ud(M, I[A.sourceId], A.fetchId, A.fetchRange, A.rawEvents, D);
    case "ADD_EVENTS":
      return ed(
        M,
        A.eventStore,
        g ? g.activeRange : null,
        D
      );
    case "RESET_EVENTS":
      return A.eventStore;
    case "MERGE_EVENTS":
      return Oi(M, A.eventStore);
    case "PREV":
    case "NEXT":
    case "CHANGE_DATE":
    case "CHANGE_VIEW_TYPE":
      return g ? UL(M, g.activeRange, D) : M;
    case "REMOVE_EVENTS":
      return dz(M, A.eventStore);
    case "REMOVE_EVENT_SOURCE":
      return Pw(M, A.sourceId);
    case "REMOVE_ALL_EVENT_SOURCES":
      return bi(M, function(t) {
        return !t.sourceId;
      });
    case "REMOVE_ALL_EVENTS":
      return Yg();
    default:
      return M;
  }
}
function ud(M, A, I, g, D, t) {
  if (A && I === A.latestFetchId) {
    var N = ML(id(D, A, t), A, t);
    return g && (N = UL(N, g, t)), Oi(Pw(M, A.sourceId), N);
  }
  return M;
}
function id(M, A, I) {
  var g = I.options.eventDataTransform, D = A ? A.eventDataTransform : null;
  return D && (M = SS(M, D)), g && (M = SS(M, g)), M;
}
function SS(M, A) {
  var I;
  if (!A)
    I = M;
  else {
    I = [];
    for (var g = 0, D = M; g < D.length; g++) {
      var t = D[g], N = A(t);
      N ? I.push(N) : N == null && I.push(t);
    }
  }
  return I;
}
function ed(M, A, I, g) {
  return I && (A = UL(A, I, g)), Oi(M, A);
}
function Sd(M, A, I) {
  var g = M.defs, D = mt(M.instances, function(t) {
    var N = g[t.defId];
    return N.allDay || N.recurringDef ? t : h(h({}, t), { range: {
      start: I.createMarker(A.toDate(t.range.start, t.forcedStartTzo)),
      end: I.createMarker(A.toDate(t.range.end, t.forcedEndTzo))
    }, forcedStartTzo: I.canComputeOffset ? null : t.forcedStartTzo, forcedEndTzo: I.canComputeOffset ? null : t.forcedEndTzo });
  });
  return { defs: g, instances: D };
}
function Pw(M, A) {
  return bi(M, function(I) {
    return I.sourceId !== A;
  });
}
function Cd(M, A) {
  switch (A.type) {
    case "UNSELECT_DATES":
      return null;
    case "SELECT_DATES":
      return A.selection;
    default:
      return M;
  }
}
function ad(M, A) {
  switch (A.type) {
    case "UNSELECT_EVENT":
      return "";
    case "SELECT_EVENT":
      return A.eventInstanceId;
    default:
      return M;
  }
}
function wd(M, A) {
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
function Ed(M, A) {
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
function Td(M, A, I, g, D) {
  var t = M.headerToolbar ? CS(M.headerToolbar, M, A, I, g, D) : null, N = M.footerToolbar ? CS(M.footerToolbar, M, A, I, g, D) : null;
  return { header: t, footer: N };
}
function CS(M, A, I, g, D, t) {
  var N = {}, L = [], j = !1;
  for (var i in M) {
    var u = M[i], e = nd(u, A, I, g, D, t);
    N[i] = e.widgets, L.push.apply(L, e.viewsWithButtons), j = j || e.hasTitle;
  }
  return { sectionWidgets: N, viewsWithButtons: L, hasTitle: j };
}
function nd(M, A, I, g, D, t) {
  var N = A.direction === "rtl", L = A.customButtons || {}, j = I.buttonText || {}, i = A.buttonText || {}, u = I.buttonHints || {}, e = A.buttonHints || {}, C = M ? M.split(" ") : [], a = [], w = !1, n = C.map(function(o) {
    return o.split(",").map(function(E) {
      if (E === "title")
        return w = !0, { buttonName: E };
      var l, Y, z, m, W, v;
      if (l = L[E])
        z = function(Z) {
          l.click && l.click.call(Z.target, Z, Z.target);
        }, (m = g.getCustomButtonIconClass(l)) || (m = g.getIconClass(E, N)) || (W = l.text), v = l.hint || l.text;
      else if (Y = D[E]) {
        a.push(E), z = function() {
          t.changeView(E);
        }, (W = Y.buttonTextOverride) || (m = g.getIconClass(E, N)) || (W = Y.buttonTextDefault);
        var d = Y.buttonTextOverride || Y.buttonTextDefault;
        v = It(
          Y.buttonTitleOverride || Y.buttonTitleDefault || A.viewHint,
          [d, E],
          d
        );
      } else if (t[E])
        if (z = function() {
          t[E]();
        }, (W = j[E]) || (m = g.getIconClass(E, N)) || (W = i[E]), E === "prevYear" || E === "nextYear") {
          var U = E === "prevYear" ? "prev" : "next";
          v = It(u[U] || e[U], [
            i.year || "year",
            "year"
          ], i[E]);
        } else
          v = function(Z) {
            return It(u[E] || e[E], [
              i[Z] || Z,
              Z
            ], i[E]);
          };
      return { buttonName: E, buttonClick: z, buttonIcon: m, buttonText: W, buttonHint: v };
    });
  });
  return { widgets: n, viewsWithButtons: a, hasTitle: w };
}
var xd = {
  ignoreRange: !0,
  parseMeta: function(M) {
    return Array.isArray(M.events) ? M.events : null;
  },
  fetch: function(M, A) {
    A({
      rawEvents: M.eventSource.meta
    });
  }
}, od = WI({
  eventSourceDefs: [xd]
}), yd = {
  parseMeta: function(M) {
    return typeof M.events == "function" ? M.events : null;
  },
  fetch: function(M, A, I) {
    var g = M.context.dateEnv, D = M.eventSource.meta;
    OY(D.bind(null, lw(M.range, g)), function(t) {
      A({ rawEvents: t });
    }, I);
  }
}, ld = WI({
  eventSourceDefs: [yd]
});
function Bw(M, A, I, g, D) {
  M = M.toUpperCase();
  var t = null;
  M === "GET" ? A = sd(A, I) : t = Fw(I);
  var N = new XMLHttpRequest();
  N.open(M, A, !0), M !== "GET" && N.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), N.onload = function() {
    if (N.status >= 200 && N.status < 400) {
      var L = !1, j = void 0;
      try {
        j = JSON.parse(N.responseText), L = !0;
      } catch {
      }
      L ? g(j, N) : D("Failure parsing JSON", N);
    } else
      D("Request failed", N);
  }, N.onerror = function() {
    D("Request failed", N);
  }, N.send(t);
}
function sd(M, A) {
  return M + (M.indexOf("?") === -1 ? "?" : "&") + Fw(A);
}
function Fw(M) {
  var A = [];
  for (var I in M)
    A.push(encodeURIComponent(I) + "=" + encodeURIComponent(M[I]));
  return A.join("&");
}
var cd = {
  method: String,
  extraParams: G,
  startParam: String,
  endParam: String,
  timeZoneParam: String
}, rd = {
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
    var g = M.eventSource.meta, D = Yd(g, M.range, M.context);
    Bw(g.method, g.url, D, function(t, N) {
      A({ rawEvents: t, xhr: N });
    }, function(t, N) {
      I({ message: t, xhr: N });
    });
  }
}, zd = WI({
  eventSourceRefiners: cd,
  eventSourceDefs: [rd]
});
function Yd(M, A, I) {
  var g = I.dateEnv, D = I.options, t, N, L, j, i = {};
  return t = M.startParam, t == null && (t = D.startParam), N = M.endParam, N == null && (N = D.endParam), L = M.timeZoneParam, L == null && (L = D.timeZoneParam), typeof M.extraParams == "function" ? j = M.extraParams() : j = M.extraParams || {}, h(i, j), i[t] = g.formatIso(A.start), i[N] = g.formatIso(A.end), g.timeZone !== "local" && (i[L] = g.timeZone), i;
}
var dd = {
  daysOfWeek: G,
  startTime: fM,
  endTime: fM,
  duration: fM,
  startRecur: G,
  endRecur: G
}, md = {
  parse: function(M, A) {
    if (M.daysOfWeek || M.startTime || M.endTime || M.startRecur || M.endRecur) {
      var I = {
        daysOfWeek: M.daysOfWeek || null,
        startTime: M.startTime || null,
        endTime: M.endTime || null,
        startRecur: M.startRecur ? A.createMarker(M.startRecur) : null,
        endRecur: M.endRecur ? A.createMarker(M.endRecur) : null
      }, g = void 0;
      return M.duration && (g = M.duration), !g && M.startTime && M.endTime && (g = Nz(M.endTime, M.startTime)), {
        allDayGuess: Boolean(!M.startTime && !M.endTime),
        duration: g,
        typeData: I
      };
    }
    return null;
  },
  expand: function(M, A, I) {
    var g = ED(A, { start: M.startRecur, end: M.endRecur });
    return g ? hd(M.daysOfWeek, M.startTime, g, I) : [];
  }
}, Ud = WI({
  recurringTypes: [md],
  eventRefiners: dd
});
function hd(M, A, I, g) {
  for (var D = M ? aw(M) : null, t = XM(I.start), N = I.end, L = []; t < N; ) {
    var j = void 0;
    (!D || D[t.getUTCDay()]) && (A ? j = g.add(t, A) : j = t, L.push(j)), t = jA(t, 1);
  }
  return L;
}
var Od = WI({
  optionChangeHandlers: {
    events: function(M, A) {
      aS([M], A);
    },
    eventSources: aS
  }
});
function aS(M, A) {
  for (var I = mi(A.getCurrentData().eventSources), g = [], D = 0, t = M; D < t.length; D++) {
    for (var N = t[D], L = !1, j = 0; j < I.length; j += 1)
      if (I[j]._raw === N) {
        I.splice(j, 1), L = !0;
        break;
      }
    L || g.push(N);
  }
  for (var i = 0, u = I; i < u.length; i++) {
    var e = u[i];
    A.dispatch({
      type: "REMOVE_EVENT_SOURCE",
      sourceId: e.sourceId
    });
  }
  for (var C = 0, a = g; C < a.length; C++) {
    var w = a[C];
    A.calendarApi.addEventSource(w);
  }
}
function bd(M, A) {
  A.emitter.trigger("datesSet", h(h({}, lw(M.activeRange, A.dateEnv)), { view: A.viewApi }));
}
function Wd(M, A) {
  var I = A.emitter;
  I.hasHandlers("eventsSet") && I.trigger("eventsSet", Qi(M, A));
}
var kd = [
  od,
  ld,
  zd,
  Ud,
  Od,
  WI({
    isLoadingFuncs: [
      function(M) {
        return vw(M.eventSources);
      }
    ],
    contentTypeHandlers: {
      html: pd,
      domNodes: Qd
    },
    propSetHandlers: {
      dateProfile: bd,
      eventStore: Wd
    }
  })
];
function pd() {
  var M = null, A = "";
  function I(D, t) {
    (D !== M || t !== A) && (D.innerHTML = t), M = D, A = t;
  }
  function g() {
    M.innerHTML = "", M = null, A = "";
  }
  return { render: I, destroy: g };
}
function Qd() {
  var M = null, A = [];
  function I(D, t) {
    var N = Array.prototype.slice.call(t);
    if (D !== M || !wD(A, N)) {
      for (var L = 0, j = N; L < j.length; L++) {
        var i = j[L];
        D.appendChild(i);
      }
      g();
    }
    M = D, A = N;
  }
  function g() {
    A.forEach(d1), A = [], M = null;
  }
  return { render: I, destroy: g };
}
var Ji = function() {
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
}(), fd = function() {
  function M(A, I) {
    this.runTaskOption = A, this.drainedOption = I, this.queue = [], this.delayedRunner = new Ji(this.drain.bind(this));
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
function vd(M, A, I) {
  var g;
  return /^(year|month)$/.test(M.currentRangeUnit) ? g = M.currentRange : g = M.activeRange, I.formatRange(g.start, g.end, LA(A.titleFormat || Gd(M)), {
    isEndExclusive: M.isRangeAllDay,
    defaultSeparator: A.titleRangeSeparator
  });
}
function Gd(M) {
  var A = M.currentRangeUnit;
  if (A === "year")
    return { year: "numeric" };
  if (A === "month")
    return { year: "numeric", month: "long" };
  var I = _N(M.currentRange.start, M.currentRange.end);
  return I !== null && I > 1 ? { year: "numeric", month: "short", day: "numeric" } : { year: "numeric", month: "long", day: "numeric" };
}
var Xw = function() {
  function M(A) {
    var I = this;
    this.computeOptionsData = OM(this._computeOptionsData), this.computeCurrentViewData = OM(this._computeCurrentViewData), this.organizeRawLocales = OM(TY), this.buildLocale = OM(Uw), this.buildPluginHooks = JY(), this.buildDateEnv = OM(Jd), this.buildTheme = OM(Vd), this.parseToolbars = OM(Td), this.buildViewSpecs = OM(RY), this.buildDateProfileGenerator = cN(Zd), this.buildViewApi = OM(Pd), this.buildViewUiProps = cN(Xd), this.buildEventUiBySource = OM(Bd, YI), this.buildEventUiBases = OM(Fd), this.parseContextBusinessHours = cN(Rd), this.buildTitle = OM(vd), this.emitter = new bY(), this.actionRunner = new fd(this._handleAction.bind(this), this.updateData.bind(this)), this.currentCalendarOptionsInput = {}, this.currentCalendarOptionsRefined = {}, this.currentViewOptionsInput = {}, this.currentViewOptionsRefined = {}, this.currentCalendarOptionsRefiners = {}, this.getCurrentData = function() {
      return I.data;
    }, this.dispatch = function(Y) {
      I.actionRunner.request(Y);
    }, this.props = A, this.actionRunner.pause();
    var g = {}, D = this.computeOptionsData(A.optionOverrides, g, A.calendarApi), t = D.calendarOptions.initialView || D.pluginHooks.initialView, N = this.computeCurrentViewData(t, D, A.optionOverrides, g);
    A.calendarApi.currentDataManager = this, this.emitter.setThisContext(A.calendarApi), this.emitter.setOptions(N.options);
    var L = jY(D.calendarOptions, D.dateEnv), j = N.dateProfileGenerator.build(L);
    xg(j.activeRange, L) || (L = j.currentRange.start);
    for (var i = {
      dateEnv: D.dateEnv,
      options: D.calendarOptions,
      pluginHooks: D.pluginHooks,
      calendarApi: A.calendarApi,
      dispatch: this.dispatch,
      emitter: this.emitter,
      getCurrentData: this.getCurrentData
    }, u = 0, e = D.pluginHooks.contextInit; u < e.length; u++) {
      var C = e[u];
      C(i);
    }
    for (var a = Md(D.calendarOptions, j, i), w = {
      dynamicOptionOverrides: g,
      currentViewType: t,
      currentDate: L,
      dateProfile: j,
      businessHours: this.parseContextBusinessHours(i),
      eventSources: a,
      eventUiBases: {},
      eventStore: Yg(),
      renderableEventStore: Yg(),
      dateSelection: null,
      eventSelection: "",
      eventDrag: null,
      eventResize: null,
      selectionConfig: this.buildViewUiProps(i).selectionConfig
    }, n = h(h({}, i), w), o = 0, E = D.pluginHooks.reducers; o < E.length; o++) {
      var l = E[o];
      h(w, l(null, null, n));
    }
    mj(w, i) && this.emitter.trigger("loading", !0), this.state = w, this.updateData(), this.actionRunner.resume();
  }
  return M.prototype.resetOptions = function(A, I) {
    var g = this.props;
    g.optionOverrides = I ? h(h({}, g.optionOverrides), A) : A, this.actionRunner.request({
      type: "NOTHING"
    });
  }, M.prototype._handleAction = function(A) {
    var I = this, g = I.props, D = I.state, t = I.emitter, N = qY(D.dynamicOptionOverrides, A), L = this.computeOptionsData(g.optionOverrides, N, g.calendarApi), j = $Y(D.currentViewType, A), i = this.computeCurrentViewData(j, L, g.optionOverrides, N);
    g.calendarApi.currentDataManager = this, t.setThisContext(g.calendarApi), t.setOptions(i.options);
    var u = {
      dateEnv: L.dateEnv,
      options: L.calendarOptions,
      pluginHooks: L.pluginHooks,
      calendarApi: g.calendarApi,
      dispatch: this.dispatch,
      emitter: t,
      getCurrentData: this.getCurrentData
    }, e = D.currentDate, C = D.dateProfile;
    this.data && this.data.dateProfileGenerator !== i.dateProfileGenerator && (C = i.dateProfileGenerator.build(e)), e = LY(e, A), C = KY(C, A, e, i.dateProfileGenerator), (A.type === "PREV" || A.type === "NEXT" || !xg(C.currentRange, e)) && (e = C.currentRange.start);
    for (var a = Ad(D.eventSources, A, C, u), w = jd(D.eventStore, A, a, C, u), n = vw(a), o = n && !i.options.progressiveEventRendering && D.renderableEventStore || w, E = this.buildViewUiProps(u), l = E.eventUiSingleBase, Y = E.selectionConfig, z = this.buildEventUiBySource(a), m = this.buildEventUiBases(o.defs, l, z), W = {
      dynamicOptionOverrides: N,
      currentViewType: j,
      currentDate: e,
      dateProfile: C,
      eventSources: a,
      eventStore: w,
      renderableEventStore: o,
      selectionConfig: Y,
      eventUiBases: m,
      businessHours: this.parseContextBusinessHours(u),
      dateSelection: Cd(D.dateSelection, A),
      eventSelection: ad(D.eventSelection, A),
      eventDrag: wd(D.eventDrag, A),
      eventResize: Ed(D.eventResize, A)
    }, v = h(h({}, u), W), d = 0, U = L.pluginHooks.reducers; d < U.length; d++) {
      var Z = U[d];
      h(W, Z(D, A, v));
    }
    var R = mj(D, u), AM = mj(W, u);
    !R && AM ? t.trigger("loading", !0) : R && !AM && t.trigger("loading", !1), this.state = W, g.onAction && g.onAction(A);
  }, M.prototype.updateData = function() {
    var A = this, I = A.props, g = A.state, D = this.data, t = this.computeOptionsData(I.optionOverrides, g.dynamicOptionOverrides, I.calendarApi), N = this.computeCurrentViewData(g.currentViewType, t, I.optionOverrides, g.dynamicOptionOverrides), L = this.data = h(h(h({ viewTitle: this.buildTitle(g.dateProfile, N.options, t.dateEnv), calendarApi: I.calendarApi, dispatch: this.dispatch, emitter: this.emitter, getCurrentData: this.getCurrentData }, t), N), g), j = t.pluginHooks.optionChangeHandlers, i = D && D.calendarOptions, u = t.calendarOptions;
    if (i && i !== u) {
      i.timeZone !== u.timeZone && (g.eventSources = L.eventSources = Id(L.eventSources, g.dateProfile, L), g.eventStore = L.eventStore = Sd(L.eventStore, D.dateEnv, L.dateEnv));
      for (var e in j)
        i[e] !== u[e] && j[e](u[e], L);
    }
    I.onData && I.onData(L);
  }, M.prototype._computeOptionsData = function(A, I, g) {
    var D = this.processRawCalendarOptions(A, I), t = D.refinedOptions, N = D.pluginHooks, L = D.localeDefaults, j = D.availableLocaleData, i = D.extra;
    wS(i);
    var u = this.buildDateEnv(t.timeZone, t.locale, t.weekNumberCalculation, t.firstDay, t.weekText, N, j, t.defaultRangeSeparator), e = this.buildViewSpecs(N.views, A, I, L), C = this.buildTheme(t, N), a = this.parseToolbars(t, A, C, e, g);
    return {
      calendarOptions: t,
      pluginHooks: N,
      dateEnv: u,
      viewSpecs: e,
      theme: C,
      toolbarConfig: a,
      localeDefaults: L,
      availableRawLocales: j.map
    };
  }, M.prototype.processRawCalendarOptions = function(A, I) {
    var g = zj([
      gt,
      A,
      I
    ]), D = g.locales, t = g.locale, N = this.organizeRawLocales(D), L = N.map, j = this.buildLocale(t || N.defaultCode, L).options, i = this.buildPluginHooks(A.plugins || [], kd), u = this.currentCalendarOptionsRefiners = h(h(h(h(h({}, gS), DS), tS), i.listenerRefiners), i.optionRefiners), e = {}, C = zj([
      gt,
      j,
      A,
      I
    ]), a = {}, w = this.currentCalendarOptionsInput, n = this.currentCalendarOptionsRefined, o = !1;
    for (var E in C)
      E !== "plugins" && (C[E] === w[E] || eg[E] && E in w && eg[E](w[E], C[E]) ? a[E] = n[E] : u[E] ? (a[E] = u[E](C[E]), o = !0) : e[E] = w[E]);
    return o && (this.currentCalendarOptionsInput = C, this.currentCalendarOptionsRefined = a), {
      rawOptions: this.currentCalendarOptionsInput,
      refinedOptions: this.currentCalendarOptionsRefined,
      pluginHooks: i,
      availableLocaleData: N,
      localeDefaults: j,
      extra: e
    };
  }, M.prototype._computeCurrentViewData = function(A, I, g, D) {
    var t = I.viewSpecs[A];
    if (!t)
      throw new Error('viewType "' + A + `" is not available. Please make sure you've loaded all neccessary plugins`);
    var N = this.processRawViewOptions(t, I.pluginHooks, I.localeDefaults, g, D), L = N.refinedOptions, j = N.extra;
    wS(j);
    var i = this.buildDateProfileGenerator({
      dateProfileGeneratorClass: t.optionDefaults.dateProfileGeneratorClass,
      duration: t.duration,
      durationUnit: t.durationUnit,
      usesMinMaxTime: t.optionDefaults.usesMinMaxTime,
      dateEnv: I.dateEnv,
      calendarApi: this.props.calendarApi,
      slotMinTime: L.slotMinTime,
      slotMaxTime: L.slotMaxTime,
      showNonCurrentDates: L.showNonCurrentDates,
      dayCount: L.dayCount,
      dateAlignment: L.dateAlignment,
      dateIncrement: L.dateIncrement,
      hiddenDays: L.hiddenDays,
      weekends: L.weekends,
      nowInput: L.now,
      validRangeInput: L.validRange,
      visibleRangeInput: L.visibleRange,
      monthMode: L.monthMode,
      fixedWeekCount: L.fixedWeekCount
    }), u = this.buildViewApi(A, this.getCurrentData, I.dateEnv);
    return { viewSpec: t, options: L, dateProfileGenerator: i, viewApi: u };
  }, M.prototype.processRawViewOptions = function(A, I, g, D, t) {
    var N = zj([
      gt,
      A.optionDefaults,
      g,
      D,
      A.optionOverrides,
      t
    ]), L = h(h(h(h(h(h({}, gS), DS), tS), rz), I.listenerRefiners), I.optionRefiners), j = {}, i = this.currentViewOptionsInput, u = this.currentViewOptionsRefined, e = !1, C = {};
    for (var a in N)
      N[a] === i[a] || eg[a] && eg[a](N[a], i[a]) ? j[a] = u[a] : (N[a] === this.currentCalendarOptionsInput[a] || eg[a] && eg[a](N[a], this.currentCalendarOptionsInput[a]) ? a in this.currentCalendarOptionsRefined && (j[a] = this.currentCalendarOptionsRefined[a]) : L[a] ? j[a] = L[a](N[a]) : C[a] = N[a], e = !0);
    return e && (this.currentViewOptionsInput = N, this.currentViewOptionsRefined = j), {
      rawOptions: this.currentViewOptionsInput,
      refinedOptions: this.currentViewOptionsRefined,
      extra: C
    };
  }, M;
}();
function Jd(M, A, I, g, D, t, N, L) {
  var j = Uw(A || N.defaultCode, N.map);
  return new wY({
    calendarSystem: "gregory",
    timeZone: M,
    namedTimeZoneImpl: t.namedTimeZonedImpl,
    locale: j,
    weekNumberCalculation: I,
    firstDay: g,
    weekText: D,
    cmdFormatter: t.cmdFormatter,
    defaultSeparator: L
  });
}
function Vd(M, A) {
  var I = A.themeClasses[M.themeSystem] || Ig;
  return new I(M);
}
function Zd(M) {
  var A = M.dateProfileGeneratorClass || fw;
  return new A(M);
}
function Pd(M, A, I) {
  return new DY(M, A, I);
}
function Bd(M) {
  return mt(M, function(A) {
    return A.ui;
  });
}
function Fd(M, A, I) {
  var g = { "": A };
  for (var D in M) {
    var t = M[D];
    t.sourceId && I[t.sourceId] && (g[D] = I[t.sourceId]);
  }
  return g;
}
function Xd(M) {
  var A = M.options;
  return {
    eventUiSingleBase: IL({
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
    selectionConfig: IL({
      constraint: A.selectConstraint,
      overlap: typeof A.selectOverlap == "boolean" ? A.selectOverlap : void 0,
      allow: A.selectAllow
    }, M)
  };
}
function mj(M, A) {
  for (var I = 0, g = A.pluginHooks.isLoadingFuncs; I < g.length; I++) {
    var D = g[I];
    if (D(M))
      return !0;
  }
  return !1;
}
function Rd(M) {
  return yY(M.options.businessHours, M);
}
function wS(M, A) {
  for (var I in M)
    console.warn("Unknown option '" + I + "'" + (A ? " for view '" + A + "'" : ""));
}
(function(M) {
  TM(A, M);
  function A(I) {
    var g = M.call(this, I) || this;
    return g.handleData = function(D) {
      g.dataManager ? g.setState(D) : g.state = D;
    }, g.dataManager = new Xw({
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
})(zi);
var Hd = function() {
  function M() {
    this.strictOrder = !1, this.allowReslicing = !1, this.maxCoord = -1, this.maxStackCnt = -1, this.levelCoords = [], this.entriesByLevel = [], this.stackCnts = {};
  }
  return M.prototype.addSegs = function(A) {
    for (var I = [], g = 0, D = A; g < D.length; g++) {
      var t = D[g];
      this.insertEntry(t, I);
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
    var D = 0, t = [], N = A.span, L = I.span;
    return N.start < L.start && (D += this.insertEntry({
      index: A.index,
      thickness: A.thickness,
      span: { start: N.start, end: L.start }
    }, t)), N.end > L.end && (D += this.insertEntry({
      index: A.index,
      thickness: A.thickness,
      span: { start: L.end, end: N.end }
    }, t)), D ? (g.push.apply(g, MA([{
      index: A.index,
      thickness: A.thickness,
      span: Rw(L, N)
    }], t)), D) : (g.push(A), 0);
  }, M.prototype.insertEntryAt = function(A, I) {
    var g = this, D = g.entriesByLevel, t = g.levelCoords;
    I.lateral === -1 ? (Uj(t, I.level, I.levelCoord), Uj(D, I.level, [A])) : Uj(D[I.level], I.lateral, A), this.stackCnts[tt(A)] = I.stackCnt;
  }, M.prototype.findInsertion = function(A) {
    for (var I = this, g = I.levelCoords, D = I.entriesByLevel, t = I.strictOrder, N = I.stackCnts, L = g.length, j = 0, i = -1, u = -1, e = null, C = 0, a = 0; a < L; a += 1) {
      var w = g[a];
      if (!t && w >= j + A.thickness)
        break;
      for (var n = D[a], o = void 0, E = TS(n, A.span.start, ES), l = E[0] + E[1]; (o = n[l]) && o.span.start < A.span.end; ) {
        var Y = w + o.thickness;
        Y > j && (j = Y, e = o, i = a, u = l), Y === j && (C = Math.max(C, N[tt(o)] + 1)), l += 1;
      }
    }
    var z = 0;
    if (e)
      for (z = i + 1; z < L && g[z] < j; )
        z += 1;
    var m = -1;
    return z < L && g[z] === j && (m = TS(D[z], A.span.end, ES)[0]), {
      touchingLevel: i,
      touchingLateral: u,
      touchingEntry: e,
      stackCnt: C,
      levelCoord: j,
      level: z,
      lateral: m
    };
  }, M.prototype.toRects = function() {
    for (var A = this, I = A.entriesByLevel, g = A.levelCoords, D = I.length, t = [], N = 0; N < D; N += 1)
      for (var L = I[N], j = g[N], i = 0, u = L; i < u.length; i++) {
        var e = u[i];
        t.push(h(h({}, e), { levelCoord: j }));
      }
    return t;
  }, M;
}();
function ES(M) {
  return M.span.end;
}
function tt(M) {
  return M.index + ":" + M.span.start;
}
function Rw(M, A) {
  var I = Math.max(M.start, A.start), g = Math.min(M.end, A.end);
  return I < g ? { start: I, end: g } : null;
}
function Uj(M, A, I) {
  M.splice(A, 0, I);
}
function TS(M, A, I) {
  var g = 0, D = M.length;
  if (!D || A < I(M[g]))
    return [0, 0];
  if (A > I(M[D - 1]))
    return [D, 0];
  for (; g < D; ) {
    var t = Math.floor(g + (D - g) / 2), N = I(M[t]);
    if (A < N)
      D = t;
    else if (A > N)
      g = t + 1;
    else
      return [t, 1];
  }
  return [g, 0];
}
var Hw = function() {
  function M(A) {
    this.component = A.component, this.isHitComboAllowed = A.isHitComboAllowed || null;
  }
  return M.prototype.destroy = function() {
  }, M;
}();
function _d(M, A) {
  return {
    component: M,
    el: A.el,
    useEventCenter: A.useEventCenter != null ? A.useEventCenter : !0,
    isHitComboAllowed: A.isHitComboAllowed || null
  };
}
var nS = {}, $d = function(M) {
  TM(A, M);
  function A() {
    return M !== null && M.apply(this, arguments) || this;
  }
  return A.prototype.render = function() {
    var I = this, g = this.props.widgetGroups.map(function(D) {
      return I.renderWidgetGroup(D);
    });
    return O.apply(void 0, MA(["div", { className: "fc-toolbar-chunk" }], g));
  }, A.prototype.renderWidgetGroup = function(I) {
    for (var g = this.props, D = this.context.theme, t = [], N = !0, L = 0, j = I; L < j.length; L++) {
      var i = j[L], u = i.buttonName, e = i.buttonClick, C = i.buttonText, a = i.buttonIcon, w = i.buttonHint;
      if (u === "title")
        N = !1, t.push(O("h2", { className: "fc-toolbar-title", id: g.titleId }, g.title));
      else {
        var n = u === g.activeButton, o = !g.isTodayEnabled && u === "today" || !g.isPrevEnabled && u === "prev" || !g.isNextEnabled && u === "next", E = ["fc-" + u + "-button", D.getClass("button")];
        n && E.push(D.getClass("buttonActive")), t.push(O("button", { type: "button", title: typeof w == "function" ? w(g.navUnit) : w, disabled: o, "aria-pressed": n, className: E.join(" "), onClick: e }, C || (a ? O("span", { className: a }) : "")));
      }
    }
    if (t.length > 1) {
      var l = N && D.getClass("buttonGroup") || "";
      return O.apply(void 0, MA(["div", { className: l }], t));
    }
    return t[0];
  }, A;
}(JM), xS = function(M) {
  TM(A, M);
  function A() {
    return M !== null && M.apply(this, arguments) || this;
  }
  return A.prototype.render = function() {
    var I = this.props, g = I.model, D = I.extraClassName, t = !1, N, L, j = g.sectionWidgets, i = j.center;
    j.left ? (t = !0, N = j.left) : N = j.start, j.right ? (t = !0, L = j.right) : L = j.end;
    var u = [
      D || "",
      "fc-toolbar",
      t ? "fc-toolbar-ltr" : ""
    ];
    return O(
      "div",
      { className: u.join(" ") },
      this.renderSection("start", N || []),
      this.renderSection("center", i || []),
      this.renderSection("end", L || [])
    );
  }, A.prototype.renderSection = function(I, g) {
    var D = this.props;
    return O($d, { key: I, widgetGroups: g, title: D.title, navUnit: D.navUnit, activeButton: D.activeButton, isTodayEnabled: D.isTodayEnabled, isPrevEnabled: D.isPrevEnabled, isNextEnabled: D.isNextEnabled, titleId: D.titleId });
  }, A;
}(JM), qd = function(M) {
  TM(A, M);
  function A() {
    var I = M !== null && M.apply(this, arguments) || this;
    return I.state = {
      availableWidth: null
    }, I.handleEl = function(g) {
      I.el = g, dI(I.props.elRef, g), I.updateAvailableWidth();
    }, I.handleResize = function() {
      I.updateAvailableWidth();
    }, I;
  }
  return A.prototype.render = function() {
    var I = this, g = I.props, D = I.state, t = g.aspectRatio, N = [
      "fc-view-harness",
      t || g.liquid || g.height ? "fc-view-harness-active" : "fc-view-harness-passive"
    ], L = "", j = "";
    return t ? D.availableWidth !== null ? L = D.availableWidth / t : j = 1 / t * 100 + "%" : L = g.height || "", O("div", { "aria-labelledby": g.labeledById, ref: this.handleEl, className: N.join(" "), style: { height: L, paddingBottom: j } }, g.children);
  }, A.prototype.componentDidMount = function() {
    this.context.addResizeHandler(this.handleResize);
  }, A.prototype.componentWillUnmount = function() {
    this.context.removeResizeHandler(this.handleResize);
  }, A.prototype.updateAvailableWidth = function() {
    this.el && this.props.aspectRatio && this.setState({ availableWidth: this.el.offsetWidth });
  }, A;
}(JM), Kd = function(M) {
  TM(A, M);
  function A(I) {
    var g = M.call(this, I) || this;
    return g.handleSegClick = function(D, t) {
      var N = g.component, L = N.context, j = mu(t);
      if (j && N.isValidSegDownEl(D.target)) {
        var i = CI(D.target, ".fc-event-forced-url"), u = i ? i.querySelector("a[href]").href : "";
        L.emitter.trigger("eventClick", {
          el: t,
          event: new tI(N.context, j.eventRange.def, j.eventRange.instance),
          jsEvent: D,
          view: L.viewApi
        }), u && !D.defaultPrevented && (window.location.href = u);
      }
    }, g.destroy = iw(
      I.el,
      "click",
      ".fc-event",
      g.handleSegClick
    ), g;
  }
  return A;
}(Hw), M2 = function(M) {
  TM(A, M);
  function A(I) {
    var g = M.call(this, I) || this;
    return g.handleEventElRemove = function(D) {
      D === g.currentSegEl && g.handleSegLeave(null, g.currentSegEl);
    }, g.handleSegEnter = function(D, t) {
      mu(t) && (g.currentSegEl = t, g.triggerEvent("eventMouseEnter", D, t));
    }, g.handleSegLeave = function(D, t) {
      g.currentSegEl && (g.currentSegEl = null, g.triggerEvent("eventMouseLeave", D, t));
    }, g.removeHoverListeners = k1(
      I.el,
      ".fc-event",
      g.handleSegEnter,
      g.handleSegLeave
    ), g;
  }
  return A.prototype.destroy = function() {
    this.removeHoverListeners();
  }, A.prototype.triggerEvent = function(I, g, D) {
    var t = this.component, N = t.context, L = mu(D);
    (!g || t.isValidSegDownEl(g.target)) && N.emitter.trigger(I, {
      el: D,
      event: new tI(N, L.eventRange.def, L.eventRange.instance),
      jsEvent: g,
      view: N.viewApi
    });
  }, A;
}(Hw), A2 = function(M) {
  TM(A, M);
  function A() {
    var I = M !== null && M.apply(this, arguments) || this;
    return I.buildViewContext = OM(QY), I.buildViewPropTransformers = OM(g2), I.buildToolbarProps = OM(I2), I.headerRef = vA(), I.footerRef = vA(), I.interactionsStore = {}, I.state = {
      viewLabelId: XI()
    }, I.registerInteractiveComponent = function(g, D) {
      var t = _d(g, D), N = [
        Kd,
        M2
      ], L = N.concat(I.props.pluginHooks.componentInteractions), j = L.map(function(i) {
        return new i(t);
      });
      I.interactionsStore[g.uid] = j, nS[g.uid] = t;
    }, I.unregisterInteractiveComponent = function(g) {
      var D = I.interactionsStore[g.uid];
      if (D) {
        for (var t = 0, N = D; t < N.length; t++) {
          var L = N[t];
          L.destroy();
        }
        delete I.interactionsStore[g.uid];
      }
      delete nS[g.uid];
    }, I.resizeRunner = new Ji(function() {
      I.props.emitter.trigger("_resize", !0), I.props.emitter.trigger("windowResize", { view: I.props.viewApi });
    }), I.handleWindowResize = function(g) {
      var D = I.props.options;
      D.handleWindowResize && g.target === window && I.resizeRunner.request(D.windowResizeDelay);
    }, I;
  }
  return A.prototype.render = function() {
    var I = this.props, g = I.toolbarConfig, D = I.options, t = this.buildToolbarProps(
      I.viewSpec,
      I.dateProfile,
      I.dateProfileGenerator,
      I.currentDate,
      Ut(I.options.now, I.dateEnv),
      I.viewTitle
    ), N = !1, L = "", j;
    I.isHeightAuto || I.forPrint ? L = "" : D.height != null ? N = !0 : D.contentHeight != null ? L = D.contentHeight : j = Math.max(D.aspectRatio, 0.5);
    var i = this.buildViewContext(I.viewSpec, I.viewApi, I.options, I.dateProfileGenerator, I.dateEnv, I.theme, I.pluginHooks, I.dispatch, I.getCurrentData, I.emitter, I.calendarApi, this.registerInteractiveComponent, this.unregisterInteractiveComponent), u = g.header && g.header.hasTitle ? this.state.viewLabelId : "";
    return O(
      hg.Provider,
      { value: i },
      g.header && O(xS, h({ ref: this.headerRef, extraClassName: "fc-header-toolbar", model: g.header, titleId: u }, t)),
      O(
        qd,
        { liquid: N, height: L, aspectRatio: j, labeledById: u },
        this.renderView(I),
        this.buildAppendContent()
      ),
      g.footer && O(xS, h({ ref: this.footerRef, extraClassName: "fc-footer-toolbar", model: g.footer, titleId: "" }, t))
    );
  }, A.prototype.componentDidMount = function() {
    var I = this.props;
    this.calendarInteractions = I.pluginHooks.calendarInteractions.map(function(t) {
      return new t(I);
    }), window.addEventListener("resize", this.handleWindowResize);
    var g = I.pluginHooks.propSetHandlers;
    for (var D in g)
      g[D](I[D], I);
  }, A.prototype.componentDidUpdate = function(I) {
    var g = this.props, D = g.pluginHooks.propSetHandlers;
    for (var t in D)
      g[t] !== I[t] && D[t](g[t], g);
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
    return O.apply(void 0, MA([TA, {}], g));
  }, A.prototype.renderView = function(I) {
    for (var g = I.pluginHooks, D = I.viewSpec, t = {
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
    }, N = this.buildViewPropTransformers(g.viewPropsTransformers), L = 0, j = N; L < j.length; L++) {
      var i = j[L];
      h(t, i.transform(t, I));
    }
    var u = D.component;
    return O(u, h({}, t));
  }, A;
}(bL);
function I2(M, A, I, g, D, t) {
  var N = I.build(D, void 0, !1), L = I.buildPrev(A, g, !1), j = I.buildNext(A, g, !1);
  return {
    title: t,
    activeButton: M.type,
    navUnit: M.singleUnit,
    isTodayEnabled: N.isValid && !xg(A.currentRange, D),
    isPrevEnabled: L.isValid,
    isNextEnabled: j.isValid
  };
}
function g2(M) {
  return M.map(function(A) {
    return new A();
  });
}
var D2 = function(M) {
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
    var I = this.props, g = I.options, D = this.state.forPrint, t = D || g.height === "auto" || g.contentHeight === "auto", N = !t && g.height != null ? g.height : "", L = [
      "fc",
      D ? "fc-media-print" : "fc-media-screen",
      "fc-direction-" + g.direction,
      I.theme.getClass("root")
    ];
    return Ow() || L.push("fc-liquid-hack"), I.children(L, N, t, D);
  }, A.prototype.componentDidMount = function() {
    var I = this.props.emitter;
    I.on("_beforeprint", this.handleBeforePrint), I.on("_afterprint", this.handleAfterPrint);
  }, A.prototype.componentWillUnmount = function() {
    var I = this.props.emitter;
    I.off("_beforeprint", this.handleBeforePrint), I.off("_afterprint", this.handleAfterPrint);
  }, A;
}(JM);
function t2(M, A) {
  return !M || A > 10 ? LA({ weekday: "short" }) : A > 1 ? LA({ weekday: "short", month: "numeric", day: "numeric", omitCommas: !0 }) : LA({ weekday: "long" });
}
var _w = "fc-col-header-cell";
function $w(M) {
  return M.text;
}
var N2 = function(M) {
  TM(A, M);
  function A() {
    return M !== null && M.apply(this, arguments) || this;
  }
  return A.prototype.render = function() {
    var I = this.context, g = I.dateEnv, D = I.options, t = I.theme, N = I.viewApi, L = this.props, j = L.date, i = L.dateProfile, u = fi(j, L.todayRange, null, i), e = [_w].concat(OL(u, t)), C = g.format(j, L.dayHeaderFormat), a = !u.isDisabled && L.colCnt > 1 ? xt(this.context, j) : {}, w = h(h(h({ date: g.toDate(j), view: N }, L.extraHookProps), { text: C }), u);
    return O(kI, { hookProps: w, classNames: D.dayHeaderClassNames, content: D.dayHeaderContent, defaultContent: $w, didMount: D.dayHeaderDidMount, willUnmount: D.dayHeaderWillUnmount }, function(n, o, E, l) {
      return O(
        "th",
        h({ ref: n, role: "columnheader", className: e.concat(o).join(" "), "data-date": u.isDisabled ? void 0 : hL(j), colSpan: L.colSpan }, L.extraDataAttrs),
        O("div", { className: "fc-scrollgrid-sync-inner" }, !u.isDisabled && O("a", h({ ref: E, className: [
          "fc-col-header-cell-cushion",
          L.isSticky ? "fc-sticky" : ""
        ].join(" ") }, a), l))
      );
    });
  }, A;
}(JM), L2 = LA({ weekday: "long" }), j2 = function(M) {
  TM(A, M);
  function A() {
    return M !== null && M.apply(this, arguments) || this;
  }
  return A.prototype.render = function() {
    var I = this.props, g = this.context, D = g.dateEnv, t = g.theme, N = g.viewApi, L = g.options, j = jA(new Date(2592e5), I.dow), i = {
      dow: I.dow,
      isDisabled: !1,
      isFuture: !1,
      isPast: !1,
      isToday: !1,
      isOther: !1
    }, u = [_w].concat(OL(i, t), I.extraClassNames || []), e = D.format(j, I.dayHeaderFormat), C = h(h(h(h({
      date: j
    }, i), { view: N }), I.extraHookProps), { text: e });
    return O(kI, { hookProps: C, classNames: L.dayHeaderClassNames, content: L.dayHeaderContent, defaultContent: $w, didMount: L.dayHeaderDidMount, willUnmount: L.dayHeaderWillUnmount }, function(a, w, n, o) {
      return O(
        "th",
        h({ ref: a, role: "columnheader", className: u.concat(w).join(" "), colSpan: I.colSpan }, I.extraDataAttrs),
        O(
          "div",
          { className: "fc-scrollgrid-sync-inner" },
          O("a", { "aria-label": D.format(j, L2), className: [
            "fc-col-header-cell-cushion",
            I.isSticky ? "fc-sticky" : ""
          ].join(" "), ref: n }, o)
        )
      );
    });
  }, A;
}(JM), Vi = function(M) {
  TM(A, M);
  function A(I, g) {
    var D = M.call(this, I, g) || this;
    return D.initialNowDate = Ut(g.options.now, g.dateEnv), D.initialNowQueriedMs = new Date().valueOf(), D.state = D.computeTiming().currentState, D;
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
    var I = this, g = I.props, D = I.context, t = zg(this.initialNowDate, new Date().valueOf() - this.initialNowQueriedMs), N = D.dateEnv.startOf(t, g.unit), L = D.dateEnv.add(N, fM(1, g.unit)), j = L.valueOf() - t.valueOf();
    return j = Math.min(1e3 * 60 * 60 * 24, j), {
      currentState: { nowDate: N, todayRange: oS(N) },
      nextState: { nowDate: L, todayRange: oS(L) },
      waitMs: j
    };
  }, A.prototype.setTimeout = function() {
    var I = this, g = this.computeTiming(), D = g.nextState, t = g.waitMs;
    this.timeoutId = setTimeout(function() {
      I.setState(D, function() {
        I.setTimeout();
      });
    }, t);
  }, A.prototype.clearTimeout = function() {
    this.timeoutId && clearTimeout(this.timeoutId);
  }, A.contextType = hg, A;
}(zi);
function oS(M) {
  var A = XM(M), I = jA(A, 1);
  return { start: A, end: I };
}
var u2 = function(M) {
  TM(A, M);
  function A() {
    var I = M !== null && M.apply(this, arguments) || this;
    return I.createDayHeaderFormatter = OM(i2), I;
  }
  return A.prototype.render = function() {
    var I = this.context, g = this.props, D = g.dates, t = g.dateProfile, N = g.datesRepDistinctDays, L = g.renderIntro, j = this.createDayHeaderFormatter(I.options.dayHeaderFormat, N, D.length);
    return O(Vi, { unit: "day" }, function(i, u) {
      return O(
        "tr",
        { role: "row" },
        L && L("day"),
        D.map(function(e) {
          return N ? O(N2, { key: e.toISOString(), date: e, dateProfile: t, todayRange: u, colCnt: D.length, dayHeaderFormat: j }) : O(j2, { key: e.getUTCDay(), dow: e.getUTCDay(), dayHeaderFormat: j });
        })
      );
    });
  }, A;
}(JM);
function i2(M, A, I) {
  return M || t2(A, I);
}
var e2 = function() {
  function M(A, I) {
    for (var g = A.start, D = A.end, t = [], N = [], L = -1; g < D; )
      I.isHiddenDay(g) ? t.push(L + 0.5) : (L += 1, t.push(L), N.push(g)), g = jA(g, 1);
    this.dates = N, this.indices = t, this.cnt = N.length;
  }
  return M.prototype.sliceRange = function(A) {
    var I = this.getDateDayIndex(A.start), g = this.getDateDayIndex(jA(A.end, -1)), D = Math.max(0, I), t = Math.min(this.cnt - 1, g);
    return D = Math.ceil(D), t = Math.floor(t), D <= t ? {
      firstIndex: D,
      lastIndex: t,
      isStart: I === D,
      isEnd: g === t
    } : null;
  }, M.prototype.getDateDayIndex = function(A) {
    var I = this.indices, g = Math.floor(Ug(this.dates[0], A));
    return g < 0 ? I[0] - 1 : g >= I.length ? I[I.length - 1] + 1 : I[g];
  }, M;
}(), S2 = function() {
  function M(A, I) {
    var g = A.dates, D, t, N;
    if (I) {
      for (t = g[0].getUTCDay(), D = 1; D < g.length && g[D].getUTCDay() !== t; D += 1)
        ;
      N = Math.ceil(g.length / D);
    } else
      N = 1, D = g.length;
    this.rowCnt = N, this.colCnt = D, this.daySeries = A, this.cells = this.buildCells(), this.headerDates = this.buildHeaderDates();
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
      for (var t = g.firstIndex, N = g.lastIndex, L = t; L <= N; ) {
        var j = Math.floor(L / I), i = Math.min((j + 1) * I, N + 1);
        D.push({
          row: j,
          firstCol: L % I,
          lastCol: (i - 1) % I,
          isStart: g.isStart && L === t,
          isEnd: g.isEnd && i - 1 === N
        }), L = i;
      }
    return D;
  }, M;
}(), C2 = function() {
  function M() {
    this.sliceBusinessHours = OM(this._sliceBusinessHours), this.sliceDateSelection = OM(this._sliceDateSpan), this.sliceEventStore = OM(this._sliceEventStore), this.sliceEventDrag = OM(this._sliceInteraction), this.sliceEventResize = OM(this._sliceInteraction), this.forceDayIfListItem = !1;
  }
  return M.prototype.sliceProps = function(A, I, g, D) {
    for (var t = [], N = 4; N < arguments.length; N++)
      t[N - 4] = arguments[N];
    var L = A.eventUiBases, j = this.sliceEventStore.apply(this, MA([A.eventStore, L, I, g], t));
    return {
      dateSelectionSegs: this.sliceDateSelection.apply(this, MA([A.dateSelection, L, D], t)),
      businessHourSegs: this.sliceBusinessHours.apply(this, MA([A.businessHours, I, g, D], t)),
      fgEventSegs: j.fg,
      bgEventSegs: j.bg,
      eventDrag: this.sliceEventDrag.apply(this, MA([A.eventDrag, L, I, g], t)),
      eventResize: this.sliceEventResize.apply(this, MA([A.eventResize, L, I, g], t)),
      eventSelection: A.eventSelection
    };
  }, M.prototype.sliceNowDate = function(A, I) {
    for (var g = [], D = 2; D < arguments.length; D++)
      g[D - 2] = arguments[D];
    return this._sliceDateSpan.apply(this, MA([
      { range: { start: A, end: zg(A, 1) }, allDay: !1 },
      {},
      I
    ], g));
  }, M.prototype._sliceBusinessHours = function(A, I, g, D) {
    for (var t = [], N = 4; N < arguments.length; N++)
      t[N - 4] = arguments[N];
    return A ? this._sliceEventStore.apply(this, MA([
      UL(A, hj(I, Boolean(g)), D),
      {},
      I,
      g
    ], t)).bg : [];
  }, M.prototype._sliceEventStore = function(A, I, g, D) {
    for (var t = [], N = 4; N < arguments.length; N++)
      t[N - 4] = arguments[N];
    if (A) {
      var L = du(A, I, hj(g, Boolean(D)), D);
      return {
        bg: this.sliceEventRanges(L.bg, t),
        fg: this.sliceEventRanges(L.fg, t)
      };
    }
    return { bg: [], fg: [] };
  }, M.prototype._sliceInteraction = function(A, I, g, D) {
    for (var t = [], N = 4; N < arguments.length; N++)
      t[N - 4] = arguments[N];
    if (!A)
      return null;
    var L = du(A.mutatedEvents, I, hj(g, Boolean(D)), D);
    return {
      segs: this.sliceEventRanges(L.fg, t),
      affectedInstances: A.affectedEvents.instances,
      isEvent: A.isEvent
    };
  }, M.prototype._sliceDateSpan = function(A, I, g) {
    for (var D = [], t = 3; t < arguments.length; t++)
      D[t - 3] = arguments[t];
    if (!A)
      return [];
    for (var N = $z(A, I, g), L = this.sliceRange.apply(this, MA([A.range], D)), j = 0, i = L; j < i.length; j++) {
      var u = i[j];
      u.eventRange = N;
    }
    return L;
  }, M.prototype.sliceEventRanges = function(A, I) {
    for (var g = [], D = 0, t = A; D < t.length; D++) {
      var N = t[D];
      g.push.apply(g, this.sliceEventRange(N, I));
    }
    return g;
  }, M.prototype.sliceEventRange = function(A, I) {
    var g = A.range;
    this.forceDayIfListItem && A.ui.display === "list-item" && (g = {
      start: g.start,
      end: jA(g.start, 1)
    });
    for (var D = this.sliceRange.apply(this, MA([g], I)), t = 0, N = D; t < N.length; t++) {
      var L = N[t];
      L.eventRange = A, L.isStart = A.isStart && L.isStart, L.isEnd = A.isEnd && L.isEnd;
    }
    return D;
  }, M;
}();
function hj(M, A) {
  var I = M.activeRange;
  return A ? I : {
    start: zg(I.start, M.slotMinTime.milliseconds),
    end: zg(I.end, M.slotMaxTime.milliseconds - 864e5)
  };
}
var MN = /^(visible|hidden)$/, qw = function(M) {
  TM(A, M);
  function A() {
    var I = M !== null && M.apply(this, arguments) || this;
    return I.handleEl = function(g) {
      I.el = g, dI(I.props.elRef, g);
    }, I;
  }
  return A.prototype.render = function() {
    var I = this.props, g = I.liquid, D = I.liquidIsAbsolute, t = g && D, N = ["fc-scroller"];
    return g && (D ? N.push("fc-scroller-liquid-absolute") : N.push("fc-scroller-liquid")), O("div", { ref: this.handleEl, className: N.join(" "), style: {
      overflowX: I.overflowX,
      overflowY: I.overflowY,
      left: t && -(I.overcomeLeft || 0) || "",
      right: t && -(I.overcomeRight || 0) || "",
      bottom: t && -(I.overcomeBottom || 0) || "",
      marginLeft: !t && -(I.overcomeLeft || 0) || "",
      marginRight: !t && -(I.overcomeRight || 0) || "",
      marginBottom: !t && -(I.overcomeBottom || 0) || "",
      maxHeight: I.maxHeight || ""
    } }, I.children);
  }, A.prototype.needsXScrolling = function() {
    if (MN.test(this.props.overflowX))
      return !1;
    for (var I = this.el, g = this.el.getBoundingClientRect().width - this.getYScrollbarWidth(), D = I.children, t = 0; t < D.length; t += 1) {
      var N = D[t];
      if (N.getBoundingClientRect().width > g)
        return !0;
    }
    return !1;
  }, A.prototype.needsYScrolling = function() {
    if (MN.test(this.props.overflowY))
      return !1;
    for (var I = this.el, g = this.el.getBoundingClientRect().height - this.getXScrollbarWidth(), D = I.children, t = 0; t < D.length; t += 1) {
      var N = D[t];
      if (N.getBoundingClientRect().height > g)
        return !0;
    }
    return !1;
  }, A.prototype.getXScrollbarWidth = function() {
    return MN.test(this.props.overflowX) ? 0 : this.el.offsetHeight - this.el.clientHeight;
  }, A.prototype.getYScrollbarWidth = function() {
    return MN.test(this.props.overflowY) ? 0 : this.el.offsetWidth - this.el.clientWidth;
  }, A;
}(JM), Eg = function() {
  function M(A) {
    var I = this;
    this.masterCallback = A, this.currentMap = {}, this.depths = {}, this.callbackMap = {}, this.handleValue = function(g, D) {
      var t = I, N = t.depths, L = t.currentMap, j = !1, i = !1;
      g !== null ? (j = D in L, L[D] = g, N[D] = (N[D] || 0) + 1, i = !0) : (N[D] -= 1, N[D] || (delete L[D], delete I.callbackMap[D], j = !0)), I.masterCallback && (j && I.masterCallback(null, String(D)), i && I.masterCallback(g, String(D)));
    };
  }
  return M.prototype.createRef = function(A) {
    var I = this, g = this.callbackMap[A];
    return g || (g = this.callbackMap[A] = function(D) {
      I.handleValue(D, String(A));
    }), g;
  }, M.prototype.collect = function(A, I, g) {
    return Mz(this.currentMap, A, I, g);
  }, M.prototype.getAll = function() {
    return mi(this.currentMap);
  }, M;
}();
function a2(M) {
  for (var A = U1(M, ".fc-scrollgrid-shrink"), I = 0, g = 0, D = A; g < D.length; g++) {
    var t = D[g];
    I = Math.max(I, G1(t));
  }
  return Math.ceil(I);
}
function Kw(M, A) {
  return M.liquid && A.liquid;
}
function w2(M, A) {
  return A.maxHeight != null || Kw(M, A);
}
function E2(M, A, I, g) {
  var D = I.expandRows, t = typeof A.content == "function" ? A.content(I) : O("table", {
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
  return t;
}
function T2(M, A) {
  return wD(M, A, YI);
}
function n2(M, A) {
  for (var I = [], g = 0, D = M; g < D.length; g++)
    for (var t = D[g], N = t.span || 1, L = 0; L < N; L += 1)
      I.push(O("col", { style: {
        width: t.width === "shrink" ? x2(A) : t.width || "",
        minWidth: t.minWidth || ""
      } }));
  return O.apply(void 0, MA(["colgroup", {}], I));
}
function x2(M) {
  return M == null ? 4 : M;
}
function o2(M) {
  for (var A = 0, I = M; A < I.length; A++) {
    var g = I[A];
    if (g.width === "shrink")
      return !0;
  }
  return !1;
}
function y2(M, A) {
  var I = [
    "fc-scrollgrid",
    A.theme.getClass("table")
  ];
  return M && I.push("fc-scrollgrid-liquid"), I;
}
function l2(M, A) {
  var I = [
    "fc-scrollgrid-section",
    "fc-scrollgrid-section-" + M.type,
    M.className
  ];
  return A && M.liquid && M.maxHeight == null && I.push("fc-scrollgrid-section-liquid"), M.isSticky && I.push("fc-scrollgrid-section-sticky"), I;
}
function s2(M) {
  return O("div", { className: "fc-scrollgrid-sticky-shim", style: {
    width: M.clientWidth,
    minWidth: M.tableMinWidth
  } });
}
function yS(M) {
  var A = M.stickyHeaderDates;
  return (A == null || A === "auto") && (A = M.height === "auto" || M.viewHeight === "auto"), A;
}
function c2(M) {
  var A = M.stickyFooterScrollbar;
  return (A == null || A === "auto") && (A = M.height === "auto" || M.viewHeight === "auto"), A;
}
var M0 = function(M) {
  TM(A, M);
  function A() {
    var I = M !== null && M.apply(this, arguments) || this;
    return I.processCols = OM(function(g) {
      return g;
    }, T2), I.renderMicroColGroup = OM(n2), I.scrollerRefs = new Eg(), I.scrollerElRefs = new Eg(I._handleScrollerEl.bind(I)), I.state = {
      shrinkWidth: null,
      forceYScrollbars: !1,
      scrollerClientWidths: {},
      scrollerClientHeights: {}
    }, I.handleSizing = function() {
      I.safeSetState(h({ shrinkWidth: I.computeShrinkWidth() }, I.computeScrollerDims()));
    }, I;
  }
  return A.prototype.render = function() {
    var I = this, g = I.props, D = I.state, t = I.context, N = g.sections || [], L = this.processCols(g.cols), j = this.renderMicroColGroup(L, D.shrinkWidth), i = y2(g.liquid, t);
    g.collapsibleWidth && i.push("fc-scrollgrid-collapsible");
    for (var u = N.length, e = 0, C, a = [], w = [], n = []; e < u && (C = N[e]).type === "header"; )
      a.push(this.renderSection(C, j, !0)), e += 1;
    for (; e < u && (C = N[e]).type === "body"; )
      w.push(this.renderSection(C, j, !1)), e += 1;
    for (; e < u && (C = N[e]).type === "footer"; )
      n.push(this.renderSection(C, j, !0)), e += 1;
    var o = !Ow(), E = { role: "rowgroup" };
    return O("table", {
      role: "grid",
      className: i.join(" "),
      style: { height: g.height }
    }, Boolean(!o && a.length) && O.apply(void 0, MA(["thead", E], a)), Boolean(!o && w.length) && O.apply(void 0, MA(["tbody", E], w)), Boolean(!o && n.length) && O.apply(void 0, MA(["tfoot", E], n)), o && O.apply(void 0, MA(MA(MA(["tbody", E], a), w), n)));
  }, A.prototype.renderSection = function(I, g, D) {
    return "outerContent" in I ? O(TA, { key: I.key }, I.outerContent) : O("tr", { key: I.key, role: "presentation", className: l2(I, this.props.liquid).join(" ") }, this.renderChunkTd(I, g, I.chunk, D));
  }, A.prototype.renderChunkTd = function(I, g, D, t) {
    if ("outerContent" in D)
      return D.outerContent;
    var N = this.props, L = this.state, j = L.forceYScrollbars, i = L.scrollerClientWidths, u = L.scrollerClientHeights, e = w2(N, I), C = Kw(N, I), a = N.liquid ? j ? "scroll" : e ? "auto" : "hidden" : "visible", w = I.key, n = E2(I, D, {
      tableColGroupNode: g,
      tableMinWidth: "",
      clientWidth: !N.collapsibleWidth && i[w] !== void 0 ? i[w] : null,
      clientHeight: u[w] !== void 0 ? u[w] : null,
      expandRows: I.expandRows,
      syncRowHeights: !1,
      rowSyncHeights: [],
      reportRowHeightChange: function() {
      }
    }, t);
    return O(t ? "th" : "td", {
      ref: D.elRef,
      role: "presentation"
    }, O(
      "div",
      { className: "fc-scroller-harness" + (C ? " fc-scroller-harness-liquid" : "") },
      O(qw, { ref: this.scrollerRefs.createRef(w), elRef: this.scrollerElRefs.createRef(w), overflowY: a, overflowX: N.liquid ? "hidden" : "visible", maxHeight: I.maxHeight, liquid: C, liquidIsAbsolute: !0 }, n)
    ));
  }, A.prototype._handleScrollerEl = function(I, g) {
    var D = r2(this.props.sections, g);
    D && dI(D.chunk.scrollerElRef, I);
  }, A.prototype.componentDidMount = function() {
    this.handleSizing(), this.context.addResizeHandler(this.handleSizing);
  }, A.prototype.componentDidUpdate = function() {
    this.handleSizing();
  }, A.prototype.componentWillUnmount = function() {
    this.context.removeResizeHandler(this.handleSizing);
  }, A.prototype.computeShrinkWidth = function() {
    return o2(this.props.cols) ? a2(this.scrollerElRefs.getAll()) : 0;
  }, A.prototype.computeScrollerDims = function() {
    var I = YY(), g = this, D = g.scrollerRefs, t = g.scrollerElRefs, N = !1, L = {}, j = {};
    for (var i in D.currentMap) {
      var u = D.currentMap[i];
      if (u && u.needsYScrolling()) {
        N = !0;
        break;
      }
    }
    for (var e = 0, C = this.props.sections; e < C.length; e++) {
      var a = C[e], i = a.key, w = t.currentMap[i];
      if (w) {
        var n = w.parentNode;
        L[i] = Math.floor(n.getBoundingClientRect().width - (N ? I.y : 0)), j[i] = Math.floor(n.getBoundingClientRect().height);
      }
    }
    return { forceYScrollbars: N, scrollerClientWidths: L, scrollerClientHeights: j };
  }, A;
}(JM);
M0.addStateEquality({
  scrollerClientWidths: YI,
  scrollerClientHeights: YI
});
function r2(M, A) {
  for (var I = 0, g = M; I < g.length; I++) {
    var D = g[I];
    if (D.key === A)
      return D;
  }
  return null;
}
var WL = function(M) {
  TM(A, M);
  function A() {
    var I = M !== null && M.apply(this, arguments) || this;
    return I.elRef = vA(), I;
  }
  return A.prototype.render = function() {
    var I = this, g = I.props, D = I.context, t = D.options, N = g.seg, L = N.eventRange, j = L.ui, i = {
      event: new tI(D, L.def, L.instance),
      view: D.viewApi,
      timeText: g.timeText,
      textColor: j.textColor,
      backgroundColor: j.backgroundColor,
      borderColor: j.borderColor,
      isDraggable: !g.disableDragging && Vz(N, D),
      isStartResizable: !g.disableResizing && Zz(N, D),
      isEndResizable: !g.disableResizing && Pz(N),
      isMirror: Boolean(g.isDragging || g.isResizing || g.isDateSelecting),
      isStart: Boolean(N.isStart),
      isEnd: Boolean(N.isEnd),
      isPast: Boolean(g.isPast),
      isFuture: Boolean(g.isFuture),
      isToday: Boolean(g.isToday),
      isSelected: Boolean(g.isSelected),
      isDragging: Boolean(g.isDragging),
      isResizing: Boolean(g.isResizing)
    }, u = Bz(i).concat(j.classNames);
    return O(kI, { hookProps: i, classNames: t.eventClassNames, content: t.eventContent, defaultContent: g.defaultContent, didMount: t.eventDidMount, willUnmount: t.eventWillUnmount, elRef: this.elRef }, function(e, C, a, w) {
      return g.children(e, u.concat(C), a, w, i);
    });
  }, A.prototype.componentDidMount = function() {
    LS(this.elRef.current, this.props.seg);
  }, A.prototype.componentDidUpdate = function(I) {
    var g = this.props.seg;
    g !== I.seg && LS(this.elRef.current, g);
  }, A;
}(JM), z2 = function(M) {
  TM(A, M);
  function A() {
    return M !== null && M.apply(this, arguments) || this;
  }
  return A.prototype.render = function() {
    var I = this, g = I.props, D = I.context, t = g.seg, N = D.options.eventTimeFormat || g.defaultTimeFormat, L = Dt(t, N, D, g.defaultDisplayEventTime, g.defaultDisplayEventEnd);
    return O(WL, { seg: t, timeText: L, disableDragging: g.disableDragging, disableResizing: g.disableResizing, defaultContent: g.defaultContent || Y2, isDragging: g.isDragging, isResizing: g.isResizing, isDateSelecting: g.isDateSelecting, isSelected: g.isSelected, isPast: g.isPast, isFuture: g.isFuture, isToday: g.isToday }, function(j, i, u, e, C) {
      return O(
        "a",
        h({ className: g.extraClassNames.concat(i).join(" "), style: {
          borderColor: C.borderColor,
          backgroundColor: C.backgroundColor
        }, ref: j }, pi(t, D)),
        O("div", { className: "fc-event-main", ref: u, style: { color: C.textColor } }, e),
        C.isStartResizable && O("div", { className: "fc-event-resizer fc-event-resizer-start" }),
        C.isEndResizable && O("div", { className: "fc-event-resizer fc-event-resizer-end" })
      );
    });
  }, A;
}(JM);
function Y2(M) {
  return O(
    "div",
    { className: "fc-event-main-frame" },
    M.timeText && O("div", { className: "fc-event-time" }, M.timeText),
    O(
      "div",
      { className: "fc-event-title-container" },
      O("div", { className: "fc-event-title fc-sticky" }, M.event.title || O(TA, null, "\xA0"))
    )
  );
}
var d2 = LA({ day: "numeric" }), A0 = function(M) {
  TM(A, M);
  function A() {
    return M !== null && M.apply(this, arguments) || this;
  }
  return A.prototype.render = function() {
    var I = this, g = I.props, D = I.context, t = D.options, N = I0({
      date: g.date,
      dateProfile: g.dateProfile,
      todayRange: g.todayRange,
      showDayNumber: g.showDayNumber,
      extraProps: g.extraHookProps,
      viewApi: D.viewApi,
      dateEnv: D.dateEnv
    });
    return O(kw, { hookProps: N, content: t.dayCellContent, defaultContent: g.defaultContent }, g.children);
  }, A;
}(JM);
function I0(M) {
  var A = M.date, I = M.dateEnv, g = fi(A, M.todayRange, null, M.dateProfile);
  return h(h(h({ date: I.toDate(A), view: M.viewApi }, g), { dayNumberText: M.showDayNumber ? I.format(A, d2) : "" }), M.extraProps);
}
var g0 = function(M) {
  TM(A, M);
  function A() {
    var I = M !== null && M.apply(this, arguments) || this;
    return I.refineHookProps = cN(I0), I.normalizeClassNames = pw(), I;
  }
  return A.prototype.render = function() {
    var I = this, g = I.props, D = I.context, t = D.options, N = this.refineHookProps({
      date: g.date,
      dateProfile: g.dateProfile,
      todayRange: g.todayRange,
      showDayNumber: g.showDayNumber,
      extraProps: g.extraHookProps,
      viewApi: D.viewApi,
      dateEnv: D.dateEnv
    }), L = OL(N, D.theme).concat(N.isDisabled ? [] : this.normalizeClassNames(t.dayCellClassNames, N)), j = N.isDisabled ? {} : {
      "data-date": hL(g.date)
    };
    return O(vi, { hookProps: N, didMount: t.dayCellDidMount, willUnmount: t.dayCellWillUnmount, elRef: g.elRef }, function(i) {
      return g.children(i, L, j, N.isDisabled);
    });
  }, A;
}(JM);
function m2(M) {
  return O("div", { className: "fc-" + M });
}
var U2 = function(M) {
  return O(WL, { defaultContent: h2, seg: M.seg, timeText: "", disableDragging: !0, disableResizing: !0, isDragging: !1, isResizing: !1, isDateSelecting: !1, isSelected: !1, isPast: M.isPast, isFuture: M.isFuture, isToday: M.isToday }, function(A, I, g, D, t) {
    return O("div", { ref: A, className: ["fc-bg-event"].concat(I).join(" "), style: {
      backgroundColor: t.backgroundColor
    } }, D);
  });
};
function h2(M) {
  var A = M.event.title;
  return A && O("div", { className: "fc-event-title" }, M.event.title);
}
var O2 = function(M) {
  return O(hg.Consumer, null, function(A) {
    var I = A.dateEnv, g = A.options, D = M.date, t = g.weekNumberFormat || M.defaultFormat, N = I.computeWeekNumber(D), L = I.format(D, t), j = { num: N, text: L, date: D };
    return O(kI, { hookProps: j, classNames: g.weekNumberClassNames, content: g.weekNumberContent, defaultContent: b2, didMount: g.weekNumberDidMount, willUnmount: g.weekNumberWillUnmount }, M.children);
  });
};
function b2(M) {
  return M.text;
}
var Oj = 10, W2 = function(M) {
  TM(A, M);
  function A() {
    var I = M !== null && M.apply(this, arguments) || this;
    return I.state = {
      titleId: XI()
    }, I.handleRootEl = function(g) {
      I.rootEl = g, I.props.elRef && dI(I.props.elRef, g);
    }, I.handleDocumentMouseDown = function(g) {
      var D = b1(g);
      I.rootEl.contains(D) || I.handleCloseClick();
    }, I.handleDocumentKeyDown = function(g) {
      g.key === "Escape" && I.handleCloseClick();
    }, I.handleCloseClick = function() {
      var g = I.props.onClose;
      g && g();
    }, I;
  }
  return A.prototype.render = function() {
    var I = this.context, g = I.theme, D = I.options, t = this, N = t.props, L = t.state, j = [
      "fc-popover",
      g.getClass("popover")
    ].concat(N.extraClassNames || []);
    return z1(O(
      "div",
      h({ id: N.id, className: j.join(" "), "aria-labelledby": L.titleId }, N.extraAttrs, { ref: this.handleRootEl }),
      O(
        "div",
        { className: "fc-popover-header " + g.getClass("popoverHeader") },
        O("span", { className: "fc-popover-title", id: L.titleId }, N.title),
        O("span", { className: "fc-popover-close " + g.getIconClass("close"), title: D.closeHint, onClick: this.handleCloseClick })
      ),
      O("div", { className: "fc-popover-body " + g.getClass("popoverContent") }, N.children)
    ), N.parentEl);
  }, A.prototype.componentDidMount = function() {
    document.addEventListener("mousedown", this.handleDocumentMouseDown), document.addEventListener("keydown", this.handleDocumentKeyDown), this.updateSize();
  }, A.prototype.componentWillUnmount = function() {
    document.removeEventListener("mousedown", this.handleDocumentMouseDown), document.removeEventListener("keydown", this.handleDocumentKeyDown);
  }, A.prototype.updateSize = function() {
    var I = this.context.isRtl, g = this.props, D = g.alignmentEl, t = g.alignGridTop, N = this.rootEl, L = UY(D);
    if (L) {
      var j = N.getBoundingClientRect(), i = t ? CI(D, ".fc-scrollgrid").getBoundingClientRect().top : L.top, u = I ? L.right - j.width : L.left;
      i = Math.max(i, Oj), u = Math.min(u, document.documentElement.clientWidth - Oj - j.width), u = Math.max(u, Oj);
      var e = N.offsetParent.getBoundingClientRect();
      O1(N, {
        top: i - e.top,
        left: u - e.left
      });
    }
  }, A;
}(JM), k2 = function(M) {
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
    var I = this.context, g = I.options, D = I.dateEnv, t = this.props, N = t.startDate, L = t.todayRange, j = t.dateProfile, i = D.format(N, g.dayPopoverFormat);
    return O(g0, { date: N, dateProfile: j, todayRange: L, elRef: this.handleRootEl }, function(u, e, C) {
      return O(
        W2,
        { elRef: u, id: t.id, title: i, extraClassNames: ["fc-more-popover"].concat(e), extraAttrs: C, parentEl: t.parentEl, alignmentEl: t.alignmentEl, alignGridTop: t.alignGridTop, onClose: t.onClose },
        O(A0, { date: N, dateProfile: j, todayRange: L }, function(a, w) {
          return w && O("div", { className: "fc-more-popover-misc", ref: a }, w);
        }),
        t.children
      );
    });
  }, A.prototype.queryHit = function(I, g, D, t) {
    var N = this, L = N.rootEl, j = N.props;
    return I >= 0 && I < D && g >= 0 && g < t ? {
      dateProfile: j.dateProfile,
      dateSpan: h({ allDay: !0, range: {
        start: j.startDate,
        end: j.endDate
      } }, j.extraDateSpan),
      dayEl: L,
      rect: {
        left: 0,
        top: 0,
        right: D,
        bottom: t
      },
      layer: 1
    } : null;
  }, A;
}(Og), p2 = function(M) {
  TM(A, M);
  function A() {
    var I = M !== null && M.apply(this, arguments) || this;
    return I.linkElRef = vA(), I.state = {
      isPopoverOpen: !1,
      popoverId: XI()
    }, I.handleClick = function(g) {
      var D = I, t = D.props, N = D.context, L = N.options.moreLinkClick, j = lS(t).start;
      function i(u) {
        var e = u.eventRange, C = e.def, a = e.instance, w = e.range;
        return {
          event: new tI(N, C, a),
          start: N.dateEnv.toDate(w.start),
          end: N.dateEnv.toDate(w.end),
          isStart: u.isStart,
          isEnd: u.isEnd
        };
      }
      typeof L == "function" && (L = L({
        date: j,
        allDay: Boolean(t.allDayDate),
        allSegs: t.allSegs.map(i),
        hiddenSegs: t.hiddenSegs.map(i),
        jsEvent: g,
        view: N.viewApi
      })), !L || L === "popover" ? I.setState({ isPopoverOpen: !0 }) : typeof L == "string" && N.calendarApi.zoomTo(j, L);
    }, I.handlePopoverClose = function() {
      I.setState({ isPopoverOpen: !1 });
    }, I;
  }
  return A.prototype.render = function() {
    var I = this, g = this, D = g.props, t = g.state;
    return O(hg.Consumer, null, function(N) {
      var L = N.viewApi, j = N.options, i = N.calendarApi, u = j.moreLinkText, e = D.moreCnt, C = lS(D), a = typeof u == "function" ? u.call(i, e) : "+" + e + " " + u, w = It(j.moreLinkHint, [e], a), n = {
        num: e,
        shortText: "+" + e,
        text: a,
        view: L
      };
      return O(
        TA,
        null,
        Boolean(D.moreCnt) && O(kI, { elRef: I.linkElRef, hookProps: n, classNames: j.moreLinkClassNames, content: j.moreLinkContent, defaultContent: D.defaultContent || Q2, didMount: j.moreLinkDidMount, willUnmount: j.moreLinkWillUnmount }, function(o, E, l, Y) {
          return D.children(o, ["fc-more-link"].concat(E), l, Y, I.handleClick, w, t.isPopoverOpen, t.isPopoverOpen ? t.popoverId : "");
        }),
        t.isPopoverOpen && O(k2, { id: t.popoverId, startDate: C.start, endDate: C.end, dateProfile: D.dateProfile, todayRange: D.todayRange, extraDateSpan: D.extraDateSpan, parentEl: I.parentEl, alignmentEl: D.alignmentElRef.current, alignGridTop: D.alignGridTop, onClose: I.handlePopoverClose }, D.popoverContent())
      );
    });
  }, A.prototype.componentDidMount = function() {
    this.updateParentEl();
  }, A.prototype.componentDidUpdate = function() {
    this.updateParentEl();
  }, A.prototype.updateParentEl = function() {
    this.linkElRef.current && (this.parentEl = CI(this.linkElRef.current, ".fc-view-harness"));
  }, A;
}(JM);
function Q2(M) {
  return M.text;
}
function lS(M) {
  if (M.allDayDate)
    return {
      start: M.allDayDate,
      end: jA(M.allDayDate, 1)
    };
  var A = M.hiddenSegs;
  return {
    start: f2(A),
    end: G2(A)
  };
}
function f2(M) {
  return M.reduce(v2).eventRange.range.start;
}
function v2(M, A) {
  return M.eventRange.range.start < A.eventRange.range.start ? M : A;
}
function G2(M) {
  return M.reduce(J2).eventRange.range.end;
}
function J2(M, A) {
  return M.eventRange.range.end > A.eventRange.range.end ? M : A;
}
/*!
FullCalendar v5.11.3
Docs & License: https://fullcalendar.io/
(c) 2022 Adam Shaw
*/
var V2 = function(M) {
  TM(A, M);
  function A(I, g) {
    g === void 0 && (g = {});
    var D = M.call(this) || this;
    return D.isRendering = !1, D.isRendered = !1, D.currentClassNames = [], D.customContentRenderId = 0, D.handleAction = function(t) {
      switch (t.type) {
        case "SET_EVENT_DRAG":
        case "SET_EVENT_RESIZE":
          D.renderRunner.tryDrain();
      }
    }, D.handleData = function(t) {
      D.currentData = t, D.renderRunner.request(t.calendarOptions.rerenderDelay);
    }, D.handleRenderRequest = function() {
      if (D.isRendering) {
        D.isRendered = !0;
        var t = D.currentData;
        Fe(function() {
          r1(O(D2, { options: t.calendarOptions, theme: t.theme, emitter: t.emitter }, function(N, L, j, i) {
            return D.setClassNames(N), D.setHeight(L), O(
              Ww.Provider,
              { value: D.customContentRenderId },
              O(A2, h({ isHeightAuto: j, forPrint: i }, t))
            );
          }), D.el);
        });
      } else
        D.isRendered && (D.isRendered = !1, Y1(D.el), D.setClassNames([]), D.setHeight(""));
    }, D.el = I, D.renderRunner = new Ji(D.handleRenderRequest), new Xw({
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
    Fe(function() {
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
    if (!wD(I, this.currentClassNames)) {
      for (var g = this.el.classList, D = 0, t = this.currentClassNames; D < t.length; D++) {
        var N = t[D];
        g.remove(N);
      }
      for (var L = 0, j = I; L < j.length; L++) {
        var N = j[L];
        g.add(N);
      }
      this.currentClassNames = I;
    }
  }, A.prototype.setHeight = function(I) {
    uw(this.el, "height", I);
  }, A;
}(uY);
/*!
FullCalendar v5.11.3
Docs & License: https://fullcalendar.io/
(c) 2022 Adam Shaw
*/
var Z2 = {
  googleCalendarApiKey: String
}, P2 = {
  googleCalendarApiKey: String,
  googleCalendarId: String,
  googleCalendarApiBase: String,
  extraParams: G
}, B2 = "https://www.googleapis.com/calendar/v3/calendars", F2 = {
  parseMeta: function(M) {
    var A = M.googleCalendarId;
    return !A && M.url && (A = X2(M.url)), A ? {
      googleCalendarId: A,
      googleCalendarApiKey: M.googleCalendarApiKey,
      googleCalendarApiBase: M.googleCalendarApiBase,
      extraParams: M.extraParams
    } : null;
  },
  fetch: function(M, A, I) {
    var g = M.context, D = g.dateEnv, t = g.options, N = M.eventSource.meta, L = N.googleCalendarApiKey || t.googleCalendarApiKey;
    if (!L)
      I({
        message: "Specify a googleCalendarApiKey. See http://fullcalendar.io/docs/google_calendar/"
      });
    else {
      var j = R2(N), i = N.extraParams, u = typeof i == "function" ? i() : i, e = H2(M.range, L, u, D);
      Bw("GET", j, e, function(C, a) {
        C.error ? I({
          message: "Google Calendar API: " + C.error.message,
          errors: C.error.errors,
          xhr: a
        }) : A({
          rawEvents: _2(C.items, e.timeZone),
          xhr: a
        });
      }, function(C, a) {
        I({ message: C, xhr: a });
      });
    }
  }
};
function X2(M) {
  var A;
  return /^[^/]+@([^/.]+\.)*(google|googlemail|gmail)\.com$/.test(M) ? M : (A = /^https:\/\/www.googleapis.com\/calendar\/v3\/calendars\/([^/]*)/.exec(M)) || (A = /^https?:\/\/www.google.com\/calendar\/feeds\/([^/]*)/.exec(M)) ? decodeURIComponent(A[1]) : null;
}
function R2(M) {
  var A = M.googleCalendarApiBase;
  return A || (A = B2), A + "/" + encodeURIComponent(M.googleCalendarId) + "/events";
}
function H2(M, A, I, g) {
  var D, t, N;
  return g.canComputeOffset ? (t = g.formatIso(M.start), N = g.formatIso(M.end)) : (t = jA(M.start, -1).toISOString(), N = jA(M.end, 1).toISOString()), D = h(h({}, I || {}), { key: A, timeMin: t, timeMax: N, singleEvents: !0, maxResults: 9999 }), g.timeZone !== "local" && (D.timeZone = g.timeZone), D;
}
function _2(M, A) {
  return M.map(function(I) {
    return $2(I, A);
  });
}
function $2(M, A) {
  var I = M.htmlLink || null;
  return I && A && (I = q2(I, "ctz=" + A)), {
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
function q2(M, A) {
  return M.replace(/(\?.*?)?(#|$)/, function(I, g, D) {
    return (g ? g + "&" : "?") + A + D;
  });
}
var K2 = WI({
  eventSourceDefs: [F2],
  optionRefiners: Z2,
  eventSourceRefiners: P2
});
/*!
FullCalendar v5.11.3
Docs & License: https://fullcalendar.io/
(c) 2022 Adam Shaw
*/
var Mm = function(M) {
  TM(A, M);
  function A() {
    var I = M !== null && M.apply(this, arguments) || this;
    return I.headerElRef = vA(), I;
  }
  return A.prototype.renderSimpleLayout = function(I, g) {
    var D = this, t = D.props, N = D.context, L = [], j = yS(N.options);
    return I && L.push({
      type: "header",
      key: "header",
      isSticky: j,
      chunk: {
        elRef: this.headerElRef,
        tableClassName: "fc-col-header",
        rowContent: I
      }
    }), L.push({
      type: "body",
      key: "body",
      liquid: !0,
      chunk: { content: g }
    }), O(gL, { viewSpec: N.viewSpec }, function(i, u) {
      return O(
        "div",
        { ref: i, className: ["fc-daygrid"].concat(u).join(" ") },
        O(M0, { liquid: !t.isHeightAuto && !t.forPrint, collapsibleWidth: t.forPrint, cols: [], sections: L })
      );
    });
  }, A.prototype.renderHScrollLayout = function(I, g, D, t) {
    var N = this.context.pluginHooks.scrollGridImpl;
    if (!N)
      throw new Error("No ScrollGrid implementation");
    var L = this, j = L.props, i = L.context, u = !j.forPrint && yS(i.options), e = !j.forPrint && c2(i.options), C = [];
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
    }), e && C.push({
      type: "footer",
      key: "footer",
      isSticky: !0,
      chunks: [{
        key: "main",
        content: s2
      }]
    }), O(gL, { viewSpec: i.viewSpec }, function(a, w) {
      return O(
        "div",
        { ref: a, className: ["fc-daygrid"].concat(w).join(" ") },
        O(N, { liquid: !j.isHeightAuto && !j.forPrint, collapsibleWidth: j.forPrint, colGroups: [{ cols: [{ span: D, minWidth: t }] }], sections: C })
      );
    });
  }, A;
}(Og);
function AN(M, A) {
  for (var I = [], g = 0; g < A; g += 1)
    I[g] = [];
  for (var D = 0, t = M; D < t.length; D++) {
    var N = t[D];
    I[N.row].push(N);
  }
  return I;
}
function IN(M, A) {
  for (var I = [], g = 0; g < A; g += 1)
    I[g] = [];
  for (var D = 0, t = M; D < t.length; D++) {
    var N = t[D];
    I[N.firstCol].push(N);
  }
  return I;
}
function sS(M, A) {
  var I = [];
  if (M) {
    for (var g = 0; g < A; g += 1)
      I[g] = {
        affectedInstances: M.affectedInstances,
        isEvent: M.isEvent,
        segs: []
      };
    for (var D = 0, t = M.segs; D < t.length; D++) {
      var N = t[D];
      I[N.row].segs.push(N);
    }
  } else
    for (var g = 0; g < A; g += 1)
      I[g] = null;
  return I;
}
var Am = function(M) {
  TM(A, M);
  function A() {
    return M !== null && M.apply(this, arguments) || this;
  }
  return A.prototype.render = function() {
    var I = this.props, g = xt(this.context, I.date);
    return O(A0, { date: I.date, dateProfile: I.dateProfile, todayRange: I.todayRange, showDayNumber: I.showDayNumber, extraHookProps: I.extraHookProps, defaultContent: Im }, function(D, t) {
      return (t || I.forceDayTop) && O(
        "div",
        { className: "fc-daygrid-day-top", ref: D },
        O("a", h({ id: I.dayNumberId, className: "fc-daygrid-day-number" }, g), t || O(TA, null, "\xA0"))
      );
    });
  }, A;
}(JM);
function Im(M) {
  return M.dayNumberText;
}
var D0 = LA({
  hour: "numeric",
  minute: "2-digit",
  omitZeroMinute: !0,
  meridiem: "narrow"
});
function t0(M) {
  var A = M.eventRange.ui.display;
  return A === "list-item" || A === "auto" && !M.eventRange.def.allDay && M.firstCol === M.lastCol && M.isStart && M.isEnd;
}
var N0 = function(M) {
  TM(A, M);
  function A() {
    return M !== null && M.apply(this, arguments) || this;
  }
  return A.prototype.render = function() {
    var I = this.props;
    return O(z2, h({}, I, { extraClassNames: ["fc-daygrid-event", "fc-daygrid-block-event", "fc-h-event"], defaultTimeFormat: D0, defaultDisplayEventEnd: I.defaultDisplayEventEnd, disableResizing: !I.seg.eventRange.def.allDay }));
  }, A;
}(JM), L0 = function(M) {
  TM(A, M);
  function A() {
    return M !== null && M.apply(this, arguments) || this;
  }
  return A.prototype.render = function() {
    var I = this, g = I.props, D = I.context, t = D.options.eventTimeFormat || D0, N = Dt(g.seg, t, D, !0, g.defaultDisplayEventEnd);
    return O(WL, { seg: g.seg, timeText: N, defaultContent: gm, isDragging: g.isDragging, isResizing: !1, isDateSelecting: !1, isSelected: g.isSelected, isPast: g.isPast, isFuture: g.isFuture, isToday: g.isToday }, function(L, j, i, u) {
      return O("a", h({ className: ["fc-daygrid-event", "fc-daygrid-dot-event"].concat(j).join(" "), ref: L }, pi(g.seg, D)), u);
    });
  }, A;
}(JM);
function gm(M) {
  return O(
    TA,
    null,
    O("div", { className: "fc-daygrid-event-dot", style: { borderColor: M.borderColor || M.backgroundColor } }),
    M.timeText && O("div", { className: "fc-event-time" }, M.timeText),
    O("div", { className: "fc-event-title" }, M.event.title || O(TA, null, "\xA0"))
  );
}
var Dm = function(M) {
  TM(A, M);
  function A() {
    var I = M !== null && M.apply(this, arguments) || this;
    return I.compileSegs = OM(tm), I;
  }
  return A.prototype.render = function() {
    var I = this.props, g = this.compileSegs(I.singlePlacements), D = g.allSegs, t = g.invisibleSegs;
    return O(p2, { dateProfile: I.dateProfile, todayRange: I.todayRange, allDayDate: I.allDayDate, moreCnt: I.moreCnt, allSegs: D, hiddenSegs: t, alignmentElRef: I.alignmentElRef, alignGridTop: I.alignGridTop, extraDateSpan: I.extraDateSpan, popoverContent: function() {
      var N = (I.eventDrag ? I.eventDrag.affectedInstances : null) || (I.eventResize ? I.eventResize.affectedInstances : null) || {};
      return O(TA, null, D.map(function(L) {
        var j = L.eventRange.instance.instanceId;
        return O("div", { className: "fc-daygrid-event-harness", key: j, style: {
          visibility: N[j] ? "hidden" : ""
        } }, t0(L) ? O(L0, h({ seg: L, isDragging: !1, isSelected: j === I.eventSelection, defaultDisplayEventEnd: !1 }, tD(L, I.todayRange))) : O(N0, h({ seg: L, isDragging: !1, isResizing: !1, isDateSelecting: !1, isSelected: j === I.eventSelection, defaultDisplayEventEnd: !1 }, tD(L, I.todayRange))));
      }));
    } }, function(N, L, j, i, u, e, C, a) {
      return O("a", h({ ref: N, className: ["fc-daygrid-more-link"].concat(L).join(" "), title: e, "aria-expanded": C, "aria-controls": a }, ew(u)), i);
    });
  }, A;
}(JM);
function tm(M) {
  for (var A = [], I = [], g = 0, D = M; g < D.length; g++) {
    var t = D[g];
    A.push(t.seg), t.isVisible || I.push(t.seg);
  }
  return { allSegs: A, invisibleSegs: I };
}
var Nm = LA({ week: "narrow" }), Lm = function(M) {
  TM(A, M);
  function A() {
    var I = M !== null && M.apply(this, arguments) || this;
    return I.rootElRef = vA(), I.state = {
      dayNumberId: XI()
    }, I.handleRootEl = function(g) {
      dI(I.rootElRef, g), dI(I.props.elRef, g);
    }, I;
  }
  return A.prototype.render = function() {
    var I = this, g = I.context, D = I.props, t = I.state, N = I.rootElRef, L = D.date, j = D.dateProfile, i = xt(g, L, "week");
    return O(g0, { date: L, dateProfile: j, todayRange: D.todayRange, showDayNumber: D.showDayNumber, extraHookProps: D.extraHookProps, elRef: this.handleRootEl }, function(u, e, C, a) {
      return O(
        "td",
        h({ ref: u, role: "gridcell", className: ["fc-daygrid-day"].concat(e, D.extraClassNames || []).join(" ") }, C, D.extraDataAttrs, D.showDayNumber ? { "aria-labelledby": t.dayNumberId } : {}),
        O(
          "div",
          { className: "fc-daygrid-day-frame fc-scrollgrid-sync-inner", ref: D.innerElRef },
          D.showWeekNumber && O(O2, { date: L, defaultFormat: Nm }, function(w, n, o, E) {
            return O("a", h({ ref: w, className: ["fc-daygrid-week-number"].concat(n).join(" ") }, i), E);
          }),
          !a && O(Am, { date: L, dateProfile: j, showDayNumber: D.showDayNumber, dayNumberId: t.dayNumberId, forceDayTop: D.forceDayTop, todayRange: D.todayRange, extraHookProps: D.extraHookProps }),
          O(
            "div",
            { className: "fc-daygrid-day-events", ref: D.fgContentElRef },
            D.fgContent,
            O(
              "div",
              { className: "fc-daygrid-day-bottom", style: { marginTop: D.moreMarginTop } },
              O(Dm, { allDayDate: L, singlePlacements: D.singlePlacements, moreCnt: D.moreCnt, alignmentElRef: N, alignGridTop: !D.showDayNumber, extraDateSpan: D.extraDateSpan, dateProfile: D.dateProfile, eventSelection: D.eventSelection, eventDrag: D.eventDrag, eventResize: D.eventResize, todayRange: D.todayRange })
            )
          ),
          O("div", { className: "fc-daygrid-day-bg" }, D.bgContent)
        )
      );
    });
  }, A;
}(Og);
function jm(M, A, I, g, D, t, N) {
  var L = new em();
  L.allowReslicing = !0, L.strictOrder = g, A === !0 || I === !0 ? (L.maxCoord = t, L.hiddenConsumes = !0) : typeof A == "number" ? L.maxStackCnt = A : typeof I == "number" && (L.maxStackCnt = I, L.hiddenConsumes = !0);
  for (var j = [], i = [], u = 0; u < M.length; u += 1) {
    var e = M[u], C = e.eventRange.instance.instanceId, a = D[C];
    a != null ? j.push({
      index: u,
      thickness: a,
      span: {
        start: e.firstCol,
        end: e.lastCol + 1
      }
    }) : i.push(e);
  }
  for (var w = L.addSegs(j), n = L.toRects(), o = um(n, M, N), E = o.singleColPlacements, l = o.multiColPlacements, Y = o.leftoverMargins, z = [], m = [], W = 0, v = i; W < v.length; W++) {
    var e = v[W];
    l[e.firstCol].push({
      seg: e,
      isVisible: !1,
      isAbsolute: !0,
      absoluteTop: 0,
      marginTop: 0
    });
    for (var d = e.firstCol; d <= e.lastCol; d += 1)
      E[d].push({
        seg: ND(e, d, d + 1, N),
        isVisible: !1,
        isAbsolute: !1,
        absoluteTop: 0,
        marginTop: 0
      });
  }
  for (var d = 0; d < N.length; d += 1)
    z.push(0);
  for (var U = 0, Z = w; U < Z.length; U++) {
    var R = Z[U], e = M[R.index], AM = R.span;
    l[AM.start].push({
      seg: ND(e, AM.start, AM.end, N),
      isVisible: !1,
      isAbsolute: !0,
      absoluteTop: 0,
      marginTop: 0
    });
    for (var d = AM.start; d < AM.end; d += 1)
      z[d] += 1, E[d].push({
        seg: ND(e, d, d + 1, N),
        isVisible: !1,
        isAbsolute: !1,
        absoluteTop: 0,
        marginTop: 0
      });
  }
  for (var d = 0; d < N.length; d += 1)
    m.push(Y[d]);
  return { singleColPlacements: E, multiColPlacements: l, moreCnts: z, moreMarginTops: m };
}
function um(M, A, I) {
  for (var g = im(M, I.length), D = [], t = [], N = [], L = 0; L < I.length; L += 1) {
    for (var j = g[L], i = [], u = 0, e = 0, C = 0, a = j; C < a.length; C++) {
      var w = a[C], n = A[w.index];
      i.push({
        seg: ND(n, L, L + 1, I),
        isVisible: !0,
        isAbsolute: !1,
        absoluteTop: w.levelCoord,
        marginTop: w.levelCoord - u
      }), u = w.levelCoord + w.thickness;
    }
    var o = [];
    u = 0, e = 0;
    for (var E = 0, l = j; E < l.length; E++) {
      var w = l[E], n = A[w.index], Y = w.span.end - w.span.start > 1, z = w.span.start === L;
      e += w.levelCoord - u, u = w.levelCoord + w.thickness, Y ? (e += w.thickness, z && o.push({
        seg: ND(n, w.span.start, w.span.end, I),
        isVisible: !0,
        isAbsolute: !0,
        absoluteTop: w.levelCoord,
        marginTop: 0
      })) : z && (o.push({
        seg: ND(n, w.span.start, w.span.end, I),
        isVisible: !0,
        isAbsolute: !1,
        absoluteTop: w.levelCoord,
        marginTop: e
      }), e = 0);
    }
    D.push(i), t.push(o), N.push(e);
  }
  return { singleColPlacements: D, multiColPlacements: t, leftoverMargins: N };
}
function im(M, A) {
  for (var I = [], g = 0; g < A; g += 1)
    I.push([]);
  for (var D = 0, t = M; D < t.length; D++)
    for (var N = t[D], g = N.span.start; g < N.span.end; g += 1)
      I[g].push(N);
  return I;
}
function ND(M, A, I, g) {
  if (M.firstCol === A && M.lastCol === I - 1)
    return M;
  var D = M.eventRange, t = D.range, N = ED(t, {
    start: g[A].date,
    end: jA(g[I - 1].date, 1)
  });
  return h(h({}, M), { firstCol: A, lastCol: I - 1, eventRange: {
    def: D.def,
    ui: h(h({}, D.ui), { durationEditable: !1 }),
    instance: D.instance,
    range: N
  }, isStart: M.isStart && N.start.valueOf() === t.start.valueOf(), isEnd: M.isEnd && N.end.valueOf() === t.end.valueOf() });
}
var em = function(M) {
  TM(A, M);
  function A() {
    var I = M !== null && M.apply(this, arguments) || this;
    return I.hiddenConsumes = !1, I.forceHidden = {}, I;
  }
  return A.prototype.addSegs = function(I) {
    for (var g = this, D = M.prototype.addSegs.call(this, I), t = this.entriesByLevel, N = function(j) {
      return !g.forceHidden[tt(j)];
    }, L = 0; L < t.length; L += 1)
      t[L] = t[L].filter(N);
    return D;
  }, A.prototype.handleInvalidInsertion = function(I, g, D) {
    var t = this, N = t.entriesByLevel, L = t.forceHidden, j = I.touchingEntry, i = I.touchingLevel, u = I.touchingLateral;
    if (this.hiddenConsumes && j) {
      var e = tt(j);
      if (!L[e])
        if (this.allowReslicing) {
          var C = h(h({}, j), { span: Rw(j.span, g.span) }), a = tt(C);
          L[a] = !0, N[i][u] = C, this.splitEntry(j, g, D);
        } else
          L[e] = !0, D.push(j);
    }
    return M.prototype.handleInvalidInsertion.call(this, I, g, D);
  }, A;
}(Hd), j0 = function(M) {
  TM(A, M);
  function A() {
    var I = M !== null && M.apply(this, arguments) || this;
    return I.cellElRefs = new Eg(), I.frameElRefs = new Eg(), I.fgElRefs = new Eg(), I.segHarnessRefs = new Eg(), I.rootElRef = vA(), I.state = {
      framePositions: null,
      maxContentHeight: null,
      eventInstanceHeights: {}
    }, I;
  }
  return A.prototype.render = function() {
    var I = this, g = this, D = g.props, t = g.state, N = g.context, L = N.options, j = D.cells.length, i = IN(D.businessHourSegs, j), u = IN(D.bgEventSegs, j), e = IN(this.getHighlightSegs(), j), C = IN(this.getMirrorSegs(), j), a = jm(yw(D.fgEventSegs, L.eventOrder), D.dayMaxEvents, D.dayMaxEventRows, L.eventOrderStrict, t.eventInstanceHeights, t.maxContentHeight, D.cells), w = a.singleColPlacements, n = a.multiColPlacements, o = a.moreCnts, E = a.moreMarginTops, l = D.eventDrag && D.eventDrag.affectedInstances || D.eventResize && D.eventResize.affectedInstances || {};
    return O(
      "tr",
      { ref: this.rootElRef, role: "row" },
      D.renderIntro && D.renderIntro(),
      D.cells.map(function(Y, z) {
        var m = I.renderFgSegs(z, D.forPrint ? w[z] : n[z], D.todayRange, l), W = I.renderFgSegs(z, Sm(C[z], n), D.todayRange, {}, Boolean(D.eventDrag), Boolean(D.eventResize), !1);
        return O(Lm, { key: Y.key, elRef: I.cellElRefs.createRef(Y.key), innerElRef: I.frameElRefs.createRef(Y.key), dateProfile: D.dateProfile, date: Y.date, showDayNumber: D.showDayNumbers, showWeekNumber: D.showWeekNumbers && z === 0, forceDayTop: D.showWeekNumbers, todayRange: D.todayRange, eventSelection: D.eventSelection, eventDrag: D.eventDrag, eventResize: D.eventResize, extraHookProps: Y.extraHookProps, extraDataAttrs: Y.extraDataAttrs, extraClassNames: Y.extraClassNames, extraDateSpan: Y.extraDateSpan, moreCnt: o[z], moreMarginTop: E[z], singlePlacements: w[z], fgContentElRef: I.fgElRefs.createRef(Y.key), fgContent: O(
          TA,
          null,
          O(TA, null, m),
          O(TA, null, W)
        ), bgContent: O(
          TA,
          null,
          I.renderFillSegs(e[z], "highlight"),
          I.renderFillSegs(i[z], "non-business"),
          I.renderFillSegs(u[z], "bg-event")
        ) });
      })
    );
  }, A.prototype.componentDidMount = function() {
    this.updateSizing(!0);
  }, A.prototype.componentDidUpdate = function(I, g) {
    var D = this.props;
    this.updateSizing(!YI(I, D));
  }, A.prototype.getHighlightSegs = function() {
    var I = this.props;
    return I.eventDrag && I.eventDrag.segs.length ? I.eventDrag.segs : I.eventResize && I.eventResize.segs.length ? I.eventResize.segs : I.dateSelectionSegs;
  }, A.prototype.getMirrorSegs = function() {
    var I = this.props;
    return I.eventResize && I.eventResize.segs.length ? I.eventResize.segs : [];
  }, A.prototype.renderFgSegs = function(I, g, D, t, N, L, j) {
    var i = this.context, u = this.props.eventSelection, e = this.state.framePositions, C = this.props.cells.length === 1, a = N || L || j, w = [];
    if (e)
      for (var n = 0, o = g; n < o.length; n++) {
        var E = o[n], l = E.seg, Y = l.eventRange.instance.instanceId, z = Y + ":" + I, m = E.isVisible && !t[Y], W = E.isAbsolute, v = "", d = "";
        W && (i.isRtl ? (d = 0, v = e.lefts[l.lastCol] - e.lefts[l.firstCol]) : (v = 0, d = e.rights[l.firstCol] - e.rights[l.lastCol])), w.push(O("div", { className: "fc-daygrid-event-harness" + (W ? " fc-daygrid-event-harness-abs" : ""), key: z, ref: a ? null : this.segHarnessRefs.createRef(z), style: {
          visibility: m ? "" : "hidden",
          marginTop: W ? "" : E.marginTop,
          top: W ? E.absoluteTop : "",
          left: v,
          right: d
        } }, t0(l) ? O(L0, h({ seg: l, isDragging: N, isSelected: Y === u, defaultDisplayEventEnd: C }, tD(l, D))) : O(N0, h({ seg: l, isDragging: N, isResizing: L, isDateSelecting: j, isSelected: Y === u, defaultDisplayEventEnd: C }, tD(l, D)))));
      }
    return w;
  }, A.prototype.renderFillSegs = function(I, g) {
    var D = this.context.isRtl, t = this.props.todayRange, N = this.state.framePositions, L = [];
    if (N)
      for (var j = 0, i = I; j < i.length; j++) {
        var u = i[j], e = D ? {
          right: 0,
          left: N.lefts[u.lastCol] - N.lefts[u.firstCol]
        } : {
          left: 0,
          right: N.rights[u.firstCol] - N.rights[u.lastCol]
        };
        L.push(O("div", { key: Fz(u.eventRange), className: "fc-daygrid-bg-harness", style: e }, g === "bg-event" ? O(U2, h({ seg: u }, tD(u, t))) : m2(g)));
      }
    return O.apply(void 0, MA([TA, {}], L));
  }, A.prototype.updateSizing = function(I) {
    var g = this, D = g.props, t = g.frameElRefs;
    if (!D.forPrint && D.clientWidth !== null) {
      if (I) {
        var N = D.cells.map(function(e) {
          return t.currentMap[e.key];
        });
        if (N.length) {
          var L = this.rootElRef.current;
          this.setState({
            framePositions: new Uu(
              L,
              N,
              !0,
              !1
            )
          });
        }
      }
      var j = this.state.eventInstanceHeights, i = this.queryEventInstanceHeights(), u = D.dayMaxEvents === !0 || D.dayMaxEventRows === !0;
      this.safeSetState({
        eventInstanceHeights: h(h({}, j), i),
        maxContentHeight: u ? this.computeMaxContentHeight() : null
      });
    }
  }, A.prototype.queryEventInstanceHeights = function() {
    var I = this.segHarnessRefs.currentMap, g = {};
    for (var D in I) {
      var t = Math.round(I[D].getBoundingClientRect().height), N = D.split(":")[0];
      g[N] = Math.max(g[N] || 0, t);
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
}(Og);
j0.addStateEquality({
  eventInstanceHeights: YI
});
function Sm(M, A) {
  if (!M.length)
    return [];
  var I = Cm(A);
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
function Cm(M) {
  for (var A = {}, I = 0, g = M; I < g.length; I++)
    for (var D = g[I], t = 0, N = D; t < N.length; t++) {
      var L = N[t];
      A[L.seg.eventRange.instance.instanceId] = L.absoluteTop;
    }
  return A;
}
var am = function(M) {
  TM(A, M);
  function A() {
    var I = M !== null && M.apply(this, arguments) || this;
    return I.splitBusinessHourSegs = OM(AN), I.splitBgEventSegs = OM(AN), I.splitFgEventSegs = OM(AN), I.splitDateSelectionSegs = OM(AN), I.splitEventDrag = OM(sS), I.splitEventResize = OM(sS), I.rowRefs = new Eg(), I.handleRootEl = function(g) {
      I.rootEl = g, g ? I.context.registerInteractiveComponent(I, {
        el: g,
        isHitComboAllowed: I.props.isHitComboAllowed
      }) : I.context.unregisterInteractiveComponent(I);
    }, I;
  }
  return A.prototype.render = function() {
    var I = this, g = this.props, D = g.dateProfile, t = g.dayMaxEventRows, N = g.dayMaxEvents, L = g.expandRows, j = g.cells.length, i = this.splitBusinessHourSegs(g.businessHourSegs, j), u = this.splitBgEventSegs(g.bgEventSegs, j), e = this.splitFgEventSegs(g.fgEventSegs, j), C = this.splitDateSelectionSegs(g.dateSelectionSegs, j), a = this.splitEventDrag(g.eventDrag, j), w = this.splitEventResize(g.eventResize, j), n = N === !0 || t === !0;
    n && !L && (n = !1, t = null, N = null);
    var o = [
      "fc-daygrid-body",
      n ? "fc-daygrid-body-balanced" : "fc-daygrid-body-unbalanced",
      L ? "" : "fc-daygrid-body-natural"
    ];
    return O(
      "div",
      { className: o.join(" "), ref: this.handleRootEl, style: {
        width: g.clientWidth,
        minWidth: g.tableMinWidth
      } },
      O(Vi, { unit: "day" }, function(E, l) {
        return O(
          TA,
          null,
          O(
            "table",
            { role: "presentation", className: "fc-scrollgrid-sync-table", style: {
              width: g.clientWidth,
              minWidth: g.tableMinWidth,
              height: L ? g.clientHeight : ""
            } },
            g.colGroupNode,
            O("tbody", { role: "presentation" }, g.cells.map(function(Y, z) {
              return O(j0, {
                ref: I.rowRefs.createRef(z),
                key: Y.length ? Y[0].date.toISOString() : z,
                showDayNumbers: j > 1,
                showWeekNumbers: g.showWeekNumbers,
                todayRange: l,
                dateProfile: D,
                cells: Y,
                renderIntro: g.renderRowIntro,
                businessHourSegs: i[z],
                eventSelection: g.eventSelection,
                bgEventSegs: u[z].filter(wm),
                fgEventSegs: e[z],
                dateSelectionSegs: C[z],
                eventDrag: a[z],
                eventResize: w[z],
                dayMaxEvents: N,
                dayMaxEventRows: t,
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
    this.rowPositions = new Uu(
      this.rootEl,
      this.rowRefs.collect().map(function(I) {
        return I.getCellEls()[0];
      }),
      !1,
      !0
    ), this.colPositions = new Uu(
      this.rootEl,
      this.rowRefs.currentMap[0].getCellEls(),
      !0,
      !1
    );
  }, A.prototype.queryHit = function(I, g) {
    var D = this, t = D.colPositions, N = D.rowPositions, L = t.leftToIndex(I), j = N.topToIndex(g);
    if (j != null && L != null) {
      var i = this.props.cells[j][L];
      return {
        dateProfile: this.props.dateProfile,
        dateSpan: h({ range: this.getCellRange(j, L), allDay: !0 }, i.extraDateSpan),
        dayEl: this.getCellEl(j, L),
        rect: {
          left: t.lefts[L],
          right: t.rights[L],
          top: N.tops[j],
          bottom: N.bottoms[j]
        },
        layer: 0
      };
    }
    return null;
  }, A.prototype.getCellEl = function(I, g) {
    return this.rowRefs.currentMap[I].getCellEls()[g];
  }, A.prototype.getCellRange = function(I, g) {
    var D = this.props.cells[I][g].date, t = jA(D, 1);
    return { start: D, end: t };
  }, A;
}(Og);
function wm(M) {
  return M.eventRange.def.allDay;
}
var Em = function(M) {
  TM(A, M);
  function A() {
    var I = M !== null && M.apply(this, arguments) || this;
    return I.forceDayIfListItem = !0, I;
  }
  return A.prototype.sliceRange = function(I, g) {
    return g.sliceRange(I);
  }, A;
}(C2), Tm = function(M) {
  TM(A, M);
  function A() {
    var I = M !== null && M.apply(this, arguments) || this;
    return I.slicer = new Em(), I.tableRef = vA(), I;
  }
  return A.prototype.render = function() {
    var I = this, g = I.props, D = I.context;
    return O(am, h({ ref: this.tableRef }, this.slicer.sliceProps(g, g.dateProfile, g.nextDayThreshold, D, g.dayTableModel), { dateProfile: g.dateProfile, cells: g.dayTableModel.cells, colGroupNode: g.colGroupNode, tableMinWidth: g.tableMinWidth, renderRowIntro: g.renderRowIntro, dayMaxEvents: g.dayMaxEvents, dayMaxEventRows: g.dayMaxEventRows, showWeekNumbers: g.showWeekNumbers, expandRows: g.expandRows, headerAlignElRef: g.headerAlignElRef, clientWidth: g.clientWidth, clientHeight: g.clientHeight, forPrint: g.forPrint }));
  }, A;
}(Og), nm = function(M) {
  TM(A, M);
  function A() {
    var I = M !== null && M.apply(this, arguments) || this;
    return I.buildDayTableModel = OM(xm), I.headerRef = vA(), I.tableRef = vA(), I;
  }
  return A.prototype.render = function() {
    var I = this, g = this.context, D = g.options, t = g.dateProfileGenerator, N = this.props, L = this.buildDayTableModel(N.dateProfile, t), j = D.dayHeaders && O(u2, { ref: this.headerRef, dateProfile: N.dateProfile, dates: L.headerDates, datesRepDistinctDays: L.rowCnt === 1 }), i = function(u) {
      return O(Tm, { ref: I.tableRef, dateProfile: N.dateProfile, dayTableModel: L, businessHours: N.businessHours, dateSelection: N.dateSelection, eventStore: N.eventStore, eventUiBases: N.eventUiBases, eventSelection: N.eventSelection, eventDrag: N.eventDrag, eventResize: N.eventResize, nextDayThreshold: D.nextDayThreshold, colGroupNode: u.tableColGroupNode, tableMinWidth: u.tableMinWidth, dayMaxEvents: D.dayMaxEvents, dayMaxEventRows: D.dayMaxEventRows, showWeekNumbers: D.weekNumbers, expandRows: !N.isHeightAuto, headerAlignElRef: I.headerElRef, clientWidth: u.clientWidth, clientHeight: u.clientHeight, forPrint: N.forPrint });
    };
    return D.dayMinWidth ? this.renderHScrollLayout(j, i, L.colCnt, D.dayMinWidth) : this.renderSimpleLayout(j, i);
  }, A;
}(Mm);
function xm(M, A) {
  var I = new e2(M.renderRange, A);
  return new S2(I, /year|month|week/.test(M.currentRangeUnit));
}
var om = function(M) {
  TM(A, M);
  function A() {
    return M !== null && M.apply(this, arguments) || this;
  }
  return A.prototype.buildRenderRange = function(I, g, D) {
    var t = this.props.dateEnv, N = M.prototype.buildRenderRange.call(this, I, g, D), L = N.start, j = N.end, i;
    if (/^(year|month)$/.test(g) && (L = t.startOfWeek(L), i = t.startOfWeek(j), i.valueOf() !== j.valueOf() && (j = He(i, 1))), this.props.monthMode && this.props.fixedWeekCount) {
      var u = Math.ceil(
        V1(L, j)
      );
      j = He(j, 6 - u);
    }
    return { start: L, end: j };
  }, A;
}(fw), ym = WI({
  initialView: "dayGridMonth",
  views: {
    dayGrid: {
      component: nm,
      dateProfileGeneratorClass: om
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
var lm = function(M) {
  TM(A, M);
  function A() {
    var I = M !== null && M.apply(this, arguments) || this;
    return I.state = {
      textId: XI()
    }, I;
  }
  return A.prototype.render = function() {
    var I = this.context, g = I.theme, D = I.dateEnv, t = I.options, N = I.viewApi, L = this.props, j = L.cellId, i = L.dayDate, u = L.todayRange, e = this.state.textId, C = fi(i, u), a = t.listDayFormat ? D.format(i, t.listDayFormat) : "", w = t.listDaySideFormat ? D.format(i, t.listDaySideFormat) : "", n = h({
      date: D.toDate(i),
      view: N,
      textId: e,
      text: a,
      sideText: w,
      navLinkAttrs: xt(this.context, i),
      sideNavLinkAttrs: xt(this.context, i, "day", !1)
    }, C), o = ["fc-list-day"].concat(OL(C, g));
    return O(kI, { hookProps: n, classNames: t.dayHeaderClassNames, content: t.dayHeaderContent, defaultContent: sm, didMount: t.dayHeaderDidMount, willUnmount: t.dayHeaderWillUnmount }, function(E, l, Y, z) {
      return O(
        "tr",
        { ref: E, className: o.concat(l).join(" "), "data-date": hL(i) },
        O(
          "th",
          { scope: "colgroup", colSpan: 3, id: j, "aria-labelledby": e },
          O("div", { className: "fc-list-day-cushion " + g.getClass("tableCellShaded"), ref: Y }, z)
        )
      );
    });
  }, A;
}(JM);
function sm(M) {
  return O(
    TA,
    null,
    M.text && O("a", h({ id: M.textId, className: "fc-list-day-text" }, M.navLinkAttrs), M.text),
    M.sideText && O("a", h({ "aria-hidden": !0, className: "fc-list-day-side-text" }, M.sideNavLinkAttrs), M.sideText)
  );
}
var cm = LA({
  hour: "numeric",
  minute: "2-digit",
  meridiem: "short"
}), rm = function(M) {
  TM(A, M);
  function A() {
    return M !== null && M.apply(this, arguments) || this;
  }
  return A.prototype.render = function() {
    var I = this, g = I.props, D = I.context, t = g.seg, N = g.timeHeaderId, L = g.eventHeaderId, j = g.dateHeaderId, i = D.options.eventTimeFormat || cm;
    return O(WL, {
      seg: t,
      timeText: "",
      disableDragging: !0,
      disableResizing: !0,
      defaultContent: function() {
        return zm(t, D);
      },
      isPast: g.isPast,
      isFuture: g.isFuture,
      isToday: g.isToday,
      isSelected: g.isSelected,
      isDragging: g.isDragging,
      isResizing: g.isResizing,
      isDateSelecting: g.isDateSelecting
    }, function(u, e, C, a, w) {
      return O(
        "tr",
        { className: ["fc-list-event", w.event.url ? "fc-event-forced-url" : ""].concat(e).join(" "), ref: u },
        Ym(t, i, D, N, j),
        O(
          "td",
          { "aria-hidden": !0, className: "fc-list-event-graphic" },
          O("span", { className: "fc-list-event-dot", style: { borderColor: w.borderColor || w.backgroundColor } })
        ),
        O("td", { ref: C, headers: L + " " + j, className: "fc-list-event-title" }, a)
      );
    });
  }, A;
}(JM);
function zm(M, A) {
  var I = pi(M, A);
  return O("a", h({}, I), M.eventRange.def.title);
}
function Ym(M, A, I, g, D) {
  var t = I.options;
  if (t.displayEventTime !== !1) {
    var N = M.eventRange.def, L = M.eventRange.instance, j = !1, i = void 0;
    if (N.allDay ? j = !0 : pz(M.eventRange.range) ? M.isStart ? i = Dt(M, A, I, null, null, L.range.start, M.end) : M.isEnd ? i = Dt(M, A, I, null, null, M.start, L.range.end) : j = !0 : i = Dt(M, A, I), j) {
      var u = {
        text: I.options.allDayText,
        view: I.viewApi
      };
      return O(kI, { hookProps: u, classNames: t.allDayClassNames, content: t.allDayContent, defaultContent: dm, didMount: t.allDayDidMount, willUnmount: t.allDayWillUnmount }, function(e, C, a, w) {
        return O("td", { ref: e, headers: g + " " + D, className: ["fc-list-event-time"].concat(C).join(" ") }, w);
      });
    }
    return O("td", { className: "fc-list-event-time" }, i);
  }
  return null;
}
function dm(M) {
  return M.text;
}
var mm = function(M) {
  TM(A, M);
  function A() {
    var I = M !== null && M.apply(this, arguments) || this;
    return I.computeDateVars = OM(hm), I.eventStoreToSegs = OM(I._eventStoreToSegs), I.state = {
      timeHeaderId: XI(),
      eventHeaderId: XI(),
      dateHeaderIdRoot: XI()
    }, I.setRootEl = function(g) {
      g ? I.context.registerInteractiveComponent(I, {
        el: g
      }) : I.context.unregisterInteractiveComponent(I);
    }, I;
  }
  return A.prototype.render = function() {
    var I = this, g = this, D = g.props, t = g.context, N = [
      "fc-list",
      t.theme.getClass("table"),
      t.options.stickyHeaderDates !== !1 ? "fc-list-sticky" : ""
    ], L = this.computeDateVars(D.dateProfile), j = L.dayDates, i = L.dayRanges, u = this.eventStoreToSegs(D.eventStore, D.eventUiBases, i);
    return O(gL, { viewSpec: t.viewSpec, elRef: this.setRootEl }, function(e, C) {
      return O(
        "div",
        { ref: e, className: N.concat(C).join(" ") },
        O(qw, { liquid: !D.isHeightAuto, overflowX: D.isHeightAuto ? "visible" : "hidden", overflowY: D.isHeightAuto ? "visible" : "auto" }, u.length > 0 ? I.renderSegList(u, j) : I.renderEmptyMessage())
      );
    });
  }, A.prototype.renderEmptyMessage = function() {
    var I = this.context, g = I.options, D = I.viewApi, t = {
      text: g.noEventsText,
      view: D
    };
    return O(kI, { hookProps: t, classNames: g.noEventsClassNames, content: g.noEventsContent, defaultContent: Um, didMount: g.noEventsDidMount, willUnmount: g.noEventsWillUnmount }, function(N, L, j, i) {
      return O(
        "div",
        { className: ["fc-list-empty"].concat(L).join(" "), ref: N },
        O("div", { className: "fc-list-empty-cushion", ref: j }, i)
      );
    });
  }, A.prototype.renderSegList = function(I, g) {
    var D = this.context, t = D.theme, N = D.options, L = this.state, j = L.timeHeaderId, i = L.eventHeaderId, u = L.dateHeaderIdRoot, e = Om(I);
    return O(Vi, { unit: "day" }, function(C, a) {
      for (var w = [], n = 0; n < e.length; n += 1) {
        var o = e[n];
        if (o) {
          var E = hL(g[n]), l = u + "-" + E;
          w.push(O(lm, { key: E, cellId: l, dayDate: g[n], todayRange: a })), o = yw(o, N.eventOrder);
          for (var Y = 0, z = o; Y < z.length; Y++) {
            var m = z[Y];
            w.push(O(rm, h({ key: E + ":" + m.eventRange.instance.instanceId, seg: m, isDragging: !1, isResizing: !1, isDateSelecting: !1, isSelected: !1, timeHeaderId: j, eventHeaderId: i, dateHeaderId: l }, tD(m, a, C))));
          }
        }
      }
      return O(
        "table",
        { className: "fc-list-table " + t.getClass("table") },
        O(
          "thead",
          null,
          O(
            "tr",
            null,
            O("th", { scope: "col", id: j }, N.timeHint),
            O("th", { scope: "col", "aria-hidden": !0 }),
            O("th", { scope: "col", id: i }, N.eventHint)
          )
        ),
        O("tbody", null, w)
      );
    });
  }, A.prototype._eventStoreToSegs = function(I, g, D) {
    return this.eventRangesToSegs(du(I, g, this.props.dateProfile.activeRange, this.context.options.nextDayThreshold).fg, D);
  }, A.prototype.eventRangesToSegs = function(I, g) {
    for (var D = [], t = 0, N = I; t < N.length; t++) {
      var L = N[t];
      D.push.apply(D, this.eventRangeToSegs(L, g));
    }
    return D;
  }, A.prototype.eventRangeToSegs = function(I, g) {
    var D = this.context.dateEnv, t = this.context.options.nextDayThreshold, N = I.range, L = I.def.allDay, j, i, u, e = [];
    for (j = 0; j < g.length; j += 1)
      if (i = ED(N, g[j]), i && (u = {
        component: this,
        eventRange: I,
        start: i.start,
        end: i.end,
        isStart: I.isStart && i.start.valueOf() === N.start.valueOf(),
        isEnd: I.isEnd && i.end.valueOf() === N.end.valueOf(),
        dayIndex: j
      }, e.push(u), !u.isEnd && !L && j + 1 < g.length && N.end < D.add(g[j + 1].start, t))) {
        u.end = N.end, u.isEnd = !0;
        break;
      }
    return e;
  }, A;
}(Og);
function Um(M) {
  return M.text;
}
function hm(M) {
  for (var A = XM(M.renderRange.start), I = M.renderRange.end, g = [], D = []; A < I; )
    g.push(A), D.push({
      start: A,
      end: jA(A, 1)
    }), A = jA(A, 1);
  return { dayDates: g, dayRanges: D };
}
function Om(M) {
  var A = [], I, g;
  for (I = 0; I < M.length; I += 1)
    g = M[I], (A[g.dayIndex] || (A[g.dayIndex] = [])).push(g);
  return A;
}
var bm = {
  listDayFormat: cS,
  listDaySideFormat: cS,
  noEventsClassNames: G,
  noEventsContent: G,
  noEventsDidMount: G,
  noEventsWillUnmount: G
};
function cS(M) {
  return M === !1 ? null : LA(M);
}
var Wm = WI({
  optionRefiners: bm,
  views: {
    list: {
      component: mm,
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
const u0 = hI("GoogleCalendarStore", {
  state: () => ({
    id: null,
    events: null,
    upcomingEvents: null,
    calendarIds: null
  }),
  actions: {}
}), km = {
  key: 0,
  class: "title"
}, pm = {
  key: 1,
  class: "description"
}, Qm = ["id"], fm = /* @__PURE__ */ f({
  __name: "App",
  props: {
    dataAttributes: null,
    queryParameters: null
  },
  setup(M) {
    const I = y(M, "dataAttributes");
    let g = I && (I == null ? void 0 : I.value) ? I.value["css-class"] : null;
    const D = g ? "google-calendar " + g : "google-calendar";
    console.log(D);
    const t = I && (I == null ? void 0 : I.value) ? I.value["calendar-title"] : null, N = I && (I == null ? void 0 : I.value) ? I.value["calendar-description"] : null;
    u0();
    const L = iM.create().toString();
    return $M(() => {
      let j = document.getElementById(L), i = [], u = I && (I == null ? void 0 : I.value) ? I == null ? void 0 : I.value["calendar-ids"] : Array();
      (!u || !u.length) && (u = cA.googleCalendarIds), u.map(function(n) {
        let o = { googleCalendarId: n.trim(), className: "gcal-event" };
        i == null || i.push(o);
      });
      let e = I && (I == null ? void 0 : I.value) ? I == null ? void 0 : I.value["display-style"] : null;
      e || (e = cA.initialView);
      const C = I && (I == null ? void 0 : I.value) ? I == null ? void 0 : I.value["api-key"] : null;
      let a = C || cA.googleApiKey;
      new V2(j, {
        plugins: [K2, ym, Wm],
        googleCalendarApiKey: a,
        eventSources: i,
        initialView: e
      }).render();
    }), (j, i) => (T(), r("div", {
      class: B(S(D))
    }, [
      S(t) ? (T(), r("div", km, F(S(t)), 1)) : P("", !0),
      S(N) ? (T(), r("div", pm, F(S(N)), 1)) : P("", !0),
      s("div", {
        id: S(L),
        class: "reder-target"
      }, null, 8, Qm)
    ], 2));
  }
});
const vm = /* @__PURE__ */ PM(fm, [["__scopeId", "data-v-22801c8c"]]), jv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CollectionManager: Br,
  ItemManager: Rr,
  EntityTemplateManager: $r,
  FormTemplateManager: M1,
  GoogleCalendar: vm,
  useGoogleCalendarStore: u0
}, Symbol.toStringTag, { value: "Module" })), Gm = (M, A) => {
  var g;
  const I = zC();
  return CT(
    () => {
      I.value = M();
    },
    {
      ...A,
      flush: (g = A == null ? void 0 : A.flush) != null ? g : "sync"
    }
  ), aT(I);
}, Jm = (M) => x(
  () => M.value === "center" ? "justify-content-center" : M.value === "end" ? "justify-content-end" : "justify-content-start"
), kL = (M, A) => Object.keys(M).filter((I) => !A.includes(I)).reduce((I, g) => ({ ...I, [g]: M[g] }), {}), ug = () => ({ enumerable: !0, configurable: !1, writable: !1 }), DL = (M) => Array.isArray(M) ? M.map((A) => DL(A)) : M instanceof Date ? new Date(M.getTime()) : M && typeof M == "object" ? Object.getOwnPropertyNames(M).reduce((A, I) => {
  var g;
  return Object.defineProperty(A, I, (g = Object.getOwnPropertyDescriptor(M, I)) != null ? g : {}), A[I] = DL(M[I]), A;
}, Object.create(Object.getPrototypeOf(M))) : M, Ou = (M) => new Promise((A) => A(DL(M)));
class pL {
  constructor(A, I = {}) {
    HM(this, "cancelable", !0);
    HM(this, "componentId", null);
    HM(this, "defaultPrevented", !1);
    HM(this, "nativeEvent", null);
    HM(this, "preventDefault");
    HM(this, "relatedTarget", null);
    HM(this, "target", null);
    HM(this, "eventType", "");
    HM(this, "vueTarget", null);
    if (!A)
      throw new TypeError(
        `Failed to construct '${this.constructor.name}'. 1 argument required, ${arguments.length} given.`
      );
    Object.assign(this, pL.Defaults, this.constructor.Defaults, I, { eventType: A }), Object.defineProperties(this, {
      type: ug(),
      cancelable: ug(),
      nativeEvent: ug(),
      target: ug(),
      relatedTarget: ug(),
      vueTarget: ug(),
      componentId: ug()
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
const Vm = (M) => M !== null && typeof M == "object", i0 = (M) => /^[0-9]*\.?[0-9]+$/.test(String(M)), Zm = (M) => Object.prototype.toString.call(M) === "[object Object]", e0 = /_/g, S0 = /([a-z])([A-Z])/g, Pm = /(\s|^)(\w)/g, Bm = /(\s|^)(\w)/, zN = /\s+/, Fm = /^#/, Xm = /^#[A-Za-z]+[\w\-:.]*$/, bu = (M, A = 2) => typeof M == "string" ? M : M == null ? "" : Array.isArray(M) || Zm(M) && M.toString === Object.prototype.toString ? JSON.stringify(M, null, A) : String(M), rS = (M) => M.replace(e0, " ").replace(S0, (A, I, g) => `${I} ${g}`).replace(Bm, (A, I, g) => I + g.toUpperCase()), zS = (M) => M.replace(e0, " ").replace(S0, (A, I, g) => `${I} ${g}`).replace(Pm, (A, I, g) => I + g.toUpperCase()), Rm = (M) => {
  const A = M.trim();
  return A.charAt(0).toUpperCase() + A.slice(1);
}, bj = (M) => `\\${M}`, Hm = (M) => {
  const A = bu(M), { length: I } = A, g = A.charCodeAt(0);
  return A.split("").reduce((D, t, N) => {
    const L = A.charCodeAt(N);
    return L === 0 ? `${D}\uFFFD` : L === 127 || L >= 1 && L <= 31 || N === 0 && L >= 48 && L <= 57 || N === 1 && L >= 48 && L <= 57 && g === 45 ? D + bj(`${L.toString(16)} `) : N === 0 && L === 45 && I === 1 ? D + bj(t) : L >= 128 || L === 45 || L === 95 || L >= 48 && L <= 57 || L >= 65 && L <= 90 || L >= 97 && L <= 122 ? D + t : D + bj(t);
  }, "");
}, C0 = typeof window < "u", _m = typeof document < "u", $m = typeof navigator < "u", qm = C0 && _m && $m, a0 = typeof window < "u", w0 = typeof document < "u", Km = typeof Element < "u", E0 = typeof navigator < "u", QL = a0 && w0 && E0, og = a0 ? window : {}, fL = w0 ? document : {}, T0 = E0 ? navigator : {}, n0 = (T0.userAgent || "").toLowerCase();
n0.indexOf("jsdom") > 0;
/msie|trident/.test(n0);
(() => {
  let M = !1;
  if (QL)
    try {
      const A = {
        get passive() {
          return M = !0, M;
        }
      };
      og.addEventListener("test", A, A), og.removeEventListener("test", A, A);
    } catch {
      M = !1;
    }
  return M;
})();
QL && ("ontouchstart" in fL.documentElement || T0.maxTouchPoints > 0);
QL && Boolean(og.PointerEvent || og.MSPointerEvent);
QL && "IntersectionObserver" in og && "IntersectionObserverEntry" in og && "intersectionRatio" in og.IntersectionObserverEntry.prototype;
const pA = Km ? Element.prototype : void 0, MU = (pA == null ? void 0 : pA.matches) || (pA == null ? void 0 : pA.msMatchesSelector) || (pA == null ? void 0 : pA.webkitMatchesSelector), iI = (M) => !!(M && M.nodeType === Node.ELEMENT_NODE), AU = (M) => iI(M) ? M.getBoundingClientRect() : null, IU = (M = []) => {
  const { activeElement: A } = document;
  return A && !M.some((I) => I === A) ? A : null;
}, gU = (M) => iI(M) && M === IU(), DU = (M, A = {}) => {
  try {
    M.focus(A);
  } catch (I) {
    console.error(I);
  }
  return gU(M);
}, tU = (M, A) => A && iI(M) && M.getAttribute(A) || null, NU = (M) => {
  if (tU(M, "display") === "none")
    return !1;
  const A = AU(M);
  return !!(A && A.height > 0 && A.width > 0);
}, UA = (M, A) => !M || M(A).filter((I) => I.type !== wT).length < 1, x0 = (M, A) => (iI(A) ? A : fL).querySelector(M) || null, LU = (M, A) => Array.from([(iI(A) ? A : fL).querySelectorAll(M)]), Zi = (M, A) => A && iI(M) ? M.getAttribute(A) : null, jU = (M) => fL.getElementById(/^#/.test(M) ? M.slice(1) : M) || null, uU = (M, A, I) => {
  A && iI(M) && M.setAttribute(A, I);
}, iU = (M, A) => {
  A && iI(M) && M.removeAttribute(A);
}, eU = (M, A) => bu(M).toLowerCase() === bu(A).toLowerCase(), gN = C0 ? window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame || ((M) => setTimeout(M, 16)) : (M) => setTimeout(M, 0), o0 = (M, A) => iI(M) ? MU.call(M, A) : !1, SU = (pA == null ? void 0 : pA.closest) || function(M) {
  let A = this;
  if (!A)
    return null;
  do {
    if (o0(A, M))
      return A;
    A = A.parentElement || A.parentNode;
  } while (A !== null && A.nodeType === Node.ELEMENT_NODE);
  return null;
}, YS = (M, A, I = !1) => {
  if (!iI(A))
    return null;
  const g = SU.call(A, M);
  return I ? g : g === A ? null : g;
}, vL = (M, A, I) => A.concat(["sm", "md", "lg", "xl", "xxl"]).reduce((g, D) => (g[M ? `${M}${D.charAt(0).toUpperCase() + D.slice(1)}` : D] = I, g), /* @__PURE__ */ Object.create(null)), y0 = (M, A, I, g = I) => Object.keys(A).reduce((D, t) => (M[t] && D.push(
  [g, t.replace(I, ""), M[t]].filter((N) => N && typeof N != "boolean").join("-").toLowerCase()
), D), []), wI = (M = "") => `__BVID__${Math.random().toString().slice(2, 8)}___BV_${M}__`, GL = (M, A) => M === !0 || M === "true" || M === "" ? "true" : M === "grammar" || M === "spelling" ? M : A === !1 ? "true" : M === !1 || M === "false" ? "false" : void 0, Wj = (M) => !!M && typeof M == "object" && M.constructor === Object, Wu = (M, A, I = !0) => {
  const g = M instanceof Date && typeof M.getMonth == "function" ? new Date(M.getTime()) : Object.assign({}, M);
  return Wj(M) && Wj(A) && Object.keys(A).forEach((D) => {
    Wj(A[D]) ? D in M ? g[D] = Wu(M[D], A[D], I) : Object.assign(g, { [D]: A[D] }) : Array.isArray(A[D]) && Array.isArray(M[D]) ? Object.assign(g, {
      [D]: I ? M[D].concat(
        A[D].filter((t) => !M[D].includes(t))
      ) : A[D]
    }) : Object.assign(g, { [D]: A[D] });
  }), g;
}, FA = (M, A = {}, I = {}) => {
  const g = [M];
  let D;
  for (let t = 0; t < g.length && !D; t++) {
    const N = g[t];
    D = I[N];
  }
  return D && typeof D == "function" ? D(A) : D;
}, TD = (M, A = NaN) => Number.isInteger(M) ? M : A, ZD = (M, A = NaN) => {
  const I = Number.parseInt(M, 10);
  return Number.isNaN(I) ? A : I;
}, l0 = (M, A = NaN) => {
  const I = Number.parseFloat(M.toString());
  return Number.isNaN(I) ? A : I;
}, dS = (M, A) => A + (M ? Rm(M) : ""), Pi = (M, A) => (Array.isArray(A) ? A.slice() : Object.keys(A)).reduce(
  (I, g) => (I[g] = M[g], I),
  {}
), CU = (M) => typeof M == "boolean" ? M : M === "" ? !0 : M === "true", ot = (M) => !!(M.href || M.to);
function c(M) {
  return Gm(() => M.value === void 0 ? void 0 : CU(M.value));
}
const s0 = Symbol(), c0 = {
  items: $A([]),
  reset() {
    this.items = $A([]);
  }
}, aU = (M) => {
  M.provide(s0, c0);
}, wU = () => {
  const M = aA(s0);
  return M || c0;
}, NA = (M, A, I) => {
  $M(() => {
    var g;
    (g = M == null ? void 0 : M.value) == null || g.addEventListener(A, I);
  }), Xu(() => {
    var g;
    (g = M == null ? void 0 : M.value) == null || g.removeEventListener(A, I);
  });
}, r0 = (M) => x(() => ({
  "form-check": !M.plain && !M.button,
  "form-check-inline": M.inline === !0,
  "form-switch": M.switch === !0,
  [`form-control-${M.size}`]: M.size !== void 0 && M.size !== "md"
})), z0 = (M) => x(() => ({
  "form-check-input": !M.plain && !M.button,
  "is-valid": M.state === !0,
  "is-invalid": M.state === !1,
  "btn-check": M.button === !0
})), Y0 = (M) => x(() => ({
  "form-check-label": !M.plain && !M.button,
  btn: M.button === !0,
  [`btn-${M.buttonVariant}`]: M.button === !0 && M.buttonVariant !== void 0,
  [`btn-${M.size}`]: M.button && M.size && M.size !== "md"
})), d0 = (M) => x(() => ({
  "aria-invalid": GL(M.ariaInvalid, M.state),
  "aria-required": M.required === !0 ? !0 : void 0
})), m0 = (M) => x(() => ({
  "was-validated": M.validated === !0,
  "btn-group": M.buttons === !0 && !M.stacked,
  "btn-group-vertical": M.stacked === !0,
  [`btn-group-${M.size}`]: M.size !== void 0
})), tL = (M, A, I) => M.reduce(
  (g, D) => D.type.toString() === "Symbol(Fragment)" ? g.concat(D.children) : g.concat([D]),
  []
).filter((g) => (g.type.__name || g.type.name) === A).map((g) => {
  const D = (g.children.default ? g.children.default() : []).find(
    (t) => t.type.toString() === "Symbol(Text)"
  );
  return {
    props: {
      disabled: I,
      ...g.props
    },
    text: D ? D.children : ""
  };
}), U0 = (M, A) => typeof M == "string" ? {
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
}, h0 = (M, A, I, g, D) => ({
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
}), SA = (M, A) => x(() => (M == null ? void 0 : M.value) || wI(A)), O0 = {
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
}, b0 = (M, A) => {
  const I = gM();
  let g = null, D = !0;
  const t = SA(y(M, "id"), "input"), N = (n, o, E = !1) => (n = String(n), typeof M.formatter == "function" && (!M.lazyFormatter || E) ? (D = !1, M.formatter(n, o)) : n), L = (n) => M.trim ? n.trim() : M.number ? Number.parseFloat(n) : n, j = () => {
    EI(() => {
      var n;
      M.autofocus && ((n = I.value) == null || n.focus());
    });
  };
  $M(j), $M(() => {
    I.value && (I.value.value = M.modelValue);
  }), Ru(j);
  const i = x(
    () => {
      var n;
      return GL(M.ariaInvalid, (n = M.state) != null ? n : void 0);
    }
  ), u = (n) => {
    const { value: o } = n.target, E = N(o, n);
    if (E === !1 || n.defaultPrevented) {
      n.preventDefault();
      return;
    }
    if (M.lazy)
      return;
    const l = L(E);
    M.modelValue !== l && (g = o, A("update:modelValue", l)), A("input", E);
  }, e = (n) => {
    const { value: o } = n.target, E = N(o, n);
    if (E === !1 || n.defaultPrevented) {
      n.preventDefault();
      return;
    }
    if (!M.lazy)
      return;
    g = o, A("update:modelValue", E);
    const l = L(E);
    M.modelValue !== l && A("change", E);
  }, C = (n) => {
    if (A("blur", n), !M.lazy && !M.lazyFormatter)
      return;
    const { value: o } = n.target, E = N(o, n, !0);
    g = o, A("update:modelValue", E);
  }, a = () => {
    var n;
    M.disabled || (n = I.value) == null || n.focus();
  }, w = () => {
    var n;
    M.disabled || (n = I.value) == null || n.blur();
  };
  return dM(
    () => M.modelValue,
    (n) => {
      !I.value || (I.value.value = g && D ? g : n, g = null, D = !0);
    }
  ), {
    input: I,
    computedId: t,
    computedAriaInvalid: i,
    onInput: u,
    onChange: e,
    onBlur: C,
    focus: a,
    blur: w
  };
}, Fg = (M, A) => {
  if (!M)
    return M;
  if (A in M)
    return M[A];
  const I = A.split(".");
  return Fg(M[I[0]], I.splice(1).join("."));
}, kj = (M, A = null, I, g) => {
  if (Object.prototype.toString.call(M) === "[object Object]") {
    const D = Fg(M, g.valueField), t = Fg(M, g.textField), N = Fg(M, g.htmlField), L = Fg(M, g.disabledField), j = M[g.optionsField] || null;
    return j !== null ? {
      label: String(Fg(M, g.labelField) || t),
      options: Bi(j, I, g)
    } : {
      value: typeof D > "u" ? A || t : D,
      text: String(typeof t > "u" ? A : t),
      html: N,
      disabled: Boolean(L)
    };
  }
  return {
    value: A || M,
    text: String(M),
    disabled: !1
  };
}, Bi = (M, A, I) => Array.isArray(M) ? M.map((g) => kj(g, null, A, I)) : Object.prototype.toString.call(M) === "[object Object]" ? (console.warn(
  `[BootstrapVue warn]: ${A} - Setting prop "options" to an object is deprecated. Use the array format instead.`
), Object.keys(M).map((g) => {
  const D = M[g];
  switch (typeof D) {
    case "object":
      return kj(D.text, String(D.value), A, I);
    default:
      return kj(D, String(g), A, I);
  }
})) : [], EU = ["id"], W0 = Symbol(), TU = /* @__PURE__ */ f({
  __name: "BAccordion",
  props: {
    flush: { default: !1 },
    free: { default: !1 },
    id: null
  },
  setup(M) {
    const A = M, I = SA(y(A, "id"), "accordion"), g = c(y(A, "flush")), D = c(y(A, "free")), t = x(() => ({
      "accordion-flush": g.value
    }));
    return D.value || TI(W0, I.value), (N, L) => (T(), r("div", {
      id: S(I),
      class: B(["accordion", S(t)])
    }, [
      Q(N.$slots, "default")
    ], 10, EU));
  }
});
var xA = "top", hA = "bottom", OA = "right", oA = "left", JL = "auto", UD = [xA, hA, OA, oA], dg = "start", nD = "end", k0 = "clippingParents", Fi = "viewport", Xg = "popper", p0 = "reference", ku = /* @__PURE__ */ UD.reduce(function(M, A) {
  return M.concat([A + "-" + dg, A + "-" + nD]);
}, []), Xi = /* @__PURE__ */ [].concat(UD, [JL]).reduce(function(M, A) {
  return M.concat([A, A + "-" + dg, A + "-" + nD]);
}, []), Q0 = "beforeRead", f0 = "read", v0 = "afterRead", G0 = "beforeMain", J0 = "main", V0 = "afterMain", Z0 = "beforeWrite", P0 = "write", B0 = "afterWrite", F0 = [Q0, f0, v0, G0, J0, V0, Z0, P0, B0];
function uI(M) {
  return M ? (M.nodeName || "").toLowerCase() : null;
}
function VA(M) {
  if (M == null)
    return window;
  if (M.toString() !== "[object Window]") {
    var A = M.ownerDocument;
    return A && A.defaultView || window;
  }
  return M;
}
function mg(M) {
  var A = VA(M).Element;
  return M instanceof A || M instanceof Element;
}
function fA(M) {
  var A = VA(M).HTMLElement;
  return M instanceof A || M instanceof HTMLElement;
}
function Ri(M) {
  if (typeof ShadowRoot > "u")
    return !1;
  var A = VA(M).ShadowRoot;
  return M instanceof A || M instanceof ShadowRoot;
}
function nU(M) {
  var A = M.state;
  Object.keys(A.elements).forEach(function(I) {
    var g = A.styles[I] || {}, D = A.attributes[I] || {}, t = A.elements[I];
    !fA(t) || !uI(t) || (Object.assign(t.style, g), Object.keys(D).forEach(function(N) {
      var L = D[N];
      L === !1 ? t.removeAttribute(N) : t.setAttribute(N, L === !0 ? "" : L);
    }));
  });
}
function xU(M) {
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
      var D = A.elements[g], t = A.attributes[g] || {}, N = Object.keys(A.styles.hasOwnProperty(g) ? A.styles[g] : I[g]), L = N.reduce(function(j, i) {
        return j[i] = "", j;
      }, {});
      !fA(D) || !uI(D) || (Object.assign(D.style, L), Object.keys(t).forEach(function(j) {
        D.removeAttribute(j);
      }));
    });
  };
}
const Hi = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: nU,
  effect: xU,
  requires: ["computeStyles"]
};
function LI(M) {
  return M.split("-")[0];
}
var yg = Math.max, NL = Math.min, xD = Math.round;
function pu() {
  var M = navigator.userAgentData;
  return M != null && M.brands ? M.brands.map(function(A) {
    return A.brand + "/" + A.version;
  }).join(" ") : navigator.userAgent;
}
function X0() {
  return !/^((?!chrome|android).)*safari/i.test(pu());
}
function oD(M, A, I) {
  A === void 0 && (A = !1), I === void 0 && (I = !1);
  var g = M.getBoundingClientRect(), D = 1, t = 1;
  A && fA(M) && (D = M.offsetWidth > 0 && xD(g.width) / M.offsetWidth || 1, t = M.offsetHeight > 0 && xD(g.height) / M.offsetHeight || 1);
  var N = mg(M) ? VA(M) : window, L = N.visualViewport, j = !X0() && I, i = (g.left + (j && L ? L.offsetLeft : 0)) / D, u = (g.top + (j && L ? L.offsetTop : 0)) / t, e = g.width / D, C = g.height / t;
  return {
    width: e,
    height: C,
    top: u,
    right: i + e,
    bottom: u + C,
    left: i,
    x: i,
    y: u
  };
}
function _i(M) {
  var A = oD(M), I = M.offsetWidth, g = M.offsetHeight;
  return Math.abs(A.width - I) <= 1 && (I = A.width), Math.abs(A.height - g) <= 1 && (g = A.height), {
    x: M.offsetLeft,
    y: M.offsetTop,
    width: I,
    height: g
  };
}
function R0(M, A) {
  var I = A.getRootNode && A.getRootNode();
  if (M.contains(A))
    return !0;
  if (I && Ri(I)) {
    var g = A;
    do {
      if (g && M.isSameNode(g))
        return !0;
      g = g.parentNode || g.host;
    } while (g);
  }
  return !1;
}
function mI(M) {
  return VA(M).getComputedStyle(M);
}
function oU(M) {
  return ["table", "td", "th"].indexOf(uI(M)) >= 0;
}
function gg(M) {
  return ((mg(M) ? M.ownerDocument : M.document) || window.document).documentElement;
}
function VL(M) {
  return uI(M) === "html" ? M : M.assignedSlot || M.parentNode || (Ri(M) ? M.host : null) || gg(M);
}
function mS(M) {
  return !fA(M) || mI(M).position === "fixed" ? null : M.offsetParent;
}
function yU(M) {
  var A = /firefox/i.test(pu()), I = /Trident/i.test(pu());
  if (I && fA(M)) {
    var g = mI(M);
    if (g.position === "fixed")
      return null;
  }
  var D = VL(M);
  for (Ri(D) && (D = D.host); fA(D) && ["html", "body"].indexOf(uI(D)) < 0; ) {
    var t = mI(D);
    if (t.transform !== "none" || t.perspective !== "none" || t.contain === "paint" || ["transform", "perspective"].indexOf(t.willChange) !== -1 || A && t.willChange === "filter" || A && t.filter && t.filter !== "none")
      return D;
    D = D.parentNode;
  }
  return null;
}
function Ot(M) {
  for (var A = VA(M), I = mS(M); I && oU(I) && mI(I).position === "static"; )
    I = mS(I);
  return I && (uI(I) === "html" || uI(I) === "body" && mI(I).position === "static") ? A : I || yU(M) || A;
}
function $i(M) {
  return ["top", "bottom"].indexOf(M) >= 0 ? "x" : "y";
}
function Nt(M, A, I) {
  return yg(M, NL(A, I));
}
function lU(M, A, I) {
  var g = Nt(M, A, I);
  return g > I ? I : g;
}
function H0() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function _0(M) {
  return Object.assign({}, H0(), M);
}
function $0(M, A) {
  return A.reduce(function(I, g) {
    return I[g] = M, I;
  }, {});
}
var sU = function(A, I) {
  return A = typeof A == "function" ? A(Object.assign({}, I.rects, {
    placement: I.placement
  })) : A, _0(typeof A != "number" ? A : $0(A, UD));
};
function cU(M) {
  var A, I = M.state, g = M.name, D = M.options, t = I.elements.arrow, N = I.modifiersData.popperOffsets, L = LI(I.placement), j = $i(L), i = [oA, OA].indexOf(L) >= 0, u = i ? "height" : "width";
  if (!(!t || !N)) {
    var e = sU(D.padding, I), C = _i(t), a = j === "y" ? xA : oA, w = j === "y" ? hA : OA, n = I.rects.reference[u] + I.rects.reference[j] - N[j] - I.rects.popper[u], o = N[j] - I.rects.reference[j], E = Ot(t), l = E ? j === "y" ? E.clientHeight || 0 : E.clientWidth || 0 : 0, Y = n / 2 - o / 2, z = e[a], m = l - C[u] - e[w], W = l / 2 - C[u] / 2 + Y, v = Nt(z, W, m), d = j;
    I.modifiersData[g] = (A = {}, A[d] = v, A.centerOffset = v - W, A);
  }
}
function rU(M) {
  var A = M.state, I = M.options, g = I.element, D = g === void 0 ? "[data-popper-arrow]" : g;
  D != null && (typeof D == "string" && (D = A.elements.popper.querySelector(D), !D) || !R0(A.elements.popper, D) || (A.elements.arrow = D));
}
const q0 = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: cU,
  effect: rU,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function yD(M) {
  return M.split("-")[1];
}
var zU = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function YU(M) {
  var A = M.x, I = M.y, g = window, D = g.devicePixelRatio || 1;
  return {
    x: xD(A * D) / D || 0,
    y: xD(I * D) / D || 0
  };
}
function US(M) {
  var A, I = M.popper, g = M.popperRect, D = M.placement, t = M.variation, N = M.offsets, L = M.position, j = M.gpuAcceleration, i = M.adaptive, u = M.roundOffsets, e = M.isFixed, C = N.x, a = C === void 0 ? 0 : C, w = N.y, n = w === void 0 ? 0 : w, o = typeof u == "function" ? u({
    x: a,
    y: n
  }) : {
    x: a,
    y: n
  };
  a = o.x, n = o.y;
  var E = N.hasOwnProperty("x"), l = N.hasOwnProperty("y"), Y = oA, z = xA, m = window;
  if (i) {
    var W = Ot(I), v = "clientHeight", d = "clientWidth";
    if (W === VA(I) && (W = gg(I), mI(W).position !== "static" && L === "absolute" && (v = "scrollHeight", d = "scrollWidth")), W = W, D === xA || (D === oA || D === OA) && t === nD) {
      z = hA;
      var U = e && W === m && m.visualViewport ? m.visualViewport.height : W[v];
      n -= U - g.height, n *= j ? 1 : -1;
    }
    if (D === oA || (D === xA || D === hA) && t === nD) {
      Y = OA;
      var Z = e && W === m && m.visualViewport ? m.visualViewport.width : W[d];
      a -= Z - g.width, a *= j ? 1 : -1;
    }
  }
  var R = Object.assign({
    position: L
  }, i && zU), AM = u === !0 ? YU({
    x: a,
    y: n
  }) : {
    x: a,
    y: n
  };
  if (a = AM.x, n = AM.y, j) {
    var LM;
    return Object.assign({}, R, (LM = {}, LM[z] = l ? "0" : "", LM[Y] = E ? "0" : "", LM.transform = (m.devicePixelRatio || 1) <= 1 ? "translate(" + a + "px, " + n + "px)" : "translate3d(" + a + "px, " + n + "px, 0)", LM));
  }
  return Object.assign({}, R, (A = {}, A[z] = l ? n + "px" : "", A[Y] = E ? a + "px" : "", A.transform = "", A));
}
function dU(M) {
  var A = M.state, I = M.options, g = I.gpuAcceleration, D = g === void 0 ? !0 : g, t = I.adaptive, N = t === void 0 ? !0 : t, L = I.roundOffsets, j = L === void 0 ? !0 : L, i = {
    placement: LI(A.placement),
    variation: yD(A.placement),
    popper: A.elements.popper,
    popperRect: A.rects.popper,
    gpuAcceleration: D,
    isFixed: A.options.strategy === "fixed"
  };
  A.modifiersData.popperOffsets != null && (A.styles.popper = Object.assign({}, A.styles.popper, US(Object.assign({}, i, {
    offsets: A.modifiersData.popperOffsets,
    position: A.options.strategy,
    adaptive: N,
    roundOffsets: j
  })))), A.modifiersData.arrow != null && (A.styles.arrow = Object.assign({}, A.styles.arrow, US(Object.assign({}, i, {
    offsets: A.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: j
  })))), A.attributes.popper = Object.assign({}, A.attributes.popper, {
    "data-popper-placement": A.placement
  });
}
const qi = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: dU,
  data: {}
};
var DN = {
  passive: !0
};
function mU(M) {
  var A = M.state, I = M.instance, g = M.options, D = g.scroll, t = D === void 0 ? !0 : D, N = g.resize, L = N === void 0 ? !0 : N, j = VA(A.elements.popper), i = [].concat(A.scrollParents.reference, A.scrollParents.popper);
  return t && i.forEach(function(u) {
    u.addEventListener("scroll", I.update, DN);
  }), L && j.addEventListener("resize", I.update, DN), function() {
    t && i.forEach(function(u) {
      u.removeEventListener("scroll", I.update, DN);
    }), L && j.removeEventListener("resize", I.update, DN);
  };
}
const Ki = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: mU,
  data: {}
};
var UU = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function YN(M) {
  return M.replace(/left|right|bottom|top/g, function(A) {
    return UU[A];
  });
}
var hU = {
  start: "end",
  end: "start"
};
function hS(M) {
  return M.replace(/start|end/g, function(A) {
    return hU[A];
  });
}
function M4(M) {
  var A = VA(M), I = A.pageXOffset, g = A.pageYOffset;
  return {
    scrollLeft: I,
    scrollTop: g
  };
}
function A4(M) {
  return oD(gg(M)).left + M4(M).scrollLeft;
}
function OU(M, A) {
  var I = VA(M), g = gg(M), D = I.visualViewport, t = g.clientWidth, N = g.clientHeight, L = 0, j = 0;
  if (D) {
    t = D.width, N = D.height;
    var i = X0();
    (i || !i && A === "fixed") && (L = D.offsetLeft, j = D.offsetTop);
  }
  return {
    width: t,
    height: N,
    x: L + A4(M),
    y: j
  };
}
function bU(M) {
  var A, I = gg(M), g = M4(M), D = (A = M.ownerDocument) == null ? void 0 : A.body, t = yg(I.scrollWidth, I.clientWidth, D ? D.scrollWidth : 0, D ? D.clientWidth : 0), N = yg(I.scrollHeight, I.clientHeight, D ? D.scrollHeight : 0, D ? D.clientHeight : 0), L = -g.scrollLeft + A4(M), j = -g.scrollTop;
  return mI(D || I).direction === "rtl" && (L += yg(I.clientWidth, D ? D.clientWidth : 0) - t), {
    width: t,
    height: N,
    x: L,
    y: j
  };
}
function I4(M) {
  var A = mI(M), I = A.overflow, g = A.overflowX, D = A.overflowY;
  return /auto|scroll|overlay|hidden/.test(I + D + g);
}
function K0(M) {
  return ["html", "body", "#document"].indexOf(uI(M)) >= 0 ? M.ownerDocument.body : fA(M) && I4(M) ? M : K0(VL(M));
}
function Lt(M, A) {
  var I;
  A === void 0 && (A = []);
  var g = K0(M), D = g === ((I = M.ownerDocument) == null ? void 0 : I.body), t = VA(g), N = D ? [t].concat(t.visualViewport || [], I4(g) ? g : []) : g, L = A.concat(N);
  return D ? L : L.concat(Lt(VL(N)));
}
function Qu(M) {
  return Object.assign({}, M, {
    left: M.x,
    top: M.y,
    right: M.x + M.width,
    bottom: M.y + M.height
  });
}
function WU(M, A) {
  var I = oD(M, !1, A === "fixed");
  return I.top = I.top + M.clientTop, I.left = I.left + M.clientLeft, I.bottom = I.top + M.clientHeight, I.right = I.left + M.clientWidth, I.width = M.clientWidth, I.height = M.clientHeight, I.x = I.left, I.y = I.top, I;
}
function OS(M, A, I) {
  return A === Fi ? Qu(OU(M, I)) : mg(A) ? WU(A, I) : Qu(bU(gg(M)));
}
function kU(M) {
  var A = Lt(VL(M)), I = ["absolute", "fixed"].indexOf(mI(M).position) >= 0, g = I && fA(M) ? Ot(M) : M;
  return mg(g) ? A.filter(function(D) {
    return mg(D) && R0(D, g) && uI(D) !== "body";
  }) : [];
}
function pU(M, A, I, g) {
  var D = A === "clippingParents" ? kU(M) : [].concat(A), t = [].concat(D, [I]), N = t[0], L = t.reduce(function(j, i) {
    var u = OS(M, i, g);
    return j.top = yg(u.top, j.top), j.right = NL(u.right, j.right), j.bottom = NL(u.bottom, j.bottom), j.left = yg(u.left, j.left), j;
  }, OS(M, N, g));
  return L.width = L.right - L.left, L.height = L.bottom - L.top, L.x = L.left, L.y = L.top, L;
}
function ME(M) {
  var A = M.reference, I = M.element, g = M.placement, D = g ? LI(g) : null, t = g ? yD(g) : null, N = A.x + A.width / 2 - I.width / 2, L = A.y + A.height / 2 - I.height / 2, j;
  switch (D) {
    case xA:
      j = {
        x: N,
        y: A.y - I.height
      };
      break;
    case hA:
      j = {
        x: N,
        y: A.y + A.height
      };
      break;
    case OA:
      j = {
        x: A.x + A.width,
        y: L
      };
      break;
    case oA:
      j = {
        x: A.x - I.width,
        y: L
      };
      break;
    default:
      j = {
        x: A.x,
        y: A.y
      };
  }
  var i = D ? $i(D) : null;
  if (i != null) {
    var u = i === "y" ? "height" : "width";
    switch (t) {
      case dg:
        j[i] = j[i] - (A[u] / 2 - I[u] / 2);
        break;
      case nD:
        j[i] = j[i] + (A[u] / 2 - I[u] / 2);
        break;
    }
  }
  return j;
}
function lD(M, A) {
  A === void 0 && (A = {});
  var I = A, g = I.placement, D = g === void 0 ? M.placement : g, t = I.strategy, N = t === void 0 ? M.strategy : t, L = I.boundary, j = L === void 0 ? k0 : L, i = I.rootBoundary, u = i === void 0 ? Fi : i, e = I.elementContext, C = e === void 0 ? Xg : e, a = I.altBoundary, w = a === void 0 ? !1 : a, n = I.padding, o = n === void 0 ? 0 : n, E = _0(typeof o != "number" ? o : $0(o, UD)), l = C === Xg ? p0 : Xg, Y = M.rects.popper, z = M.elements[w ? l : C], m = pU(mg(z) ? z : z.contextElement || gg(M.elements.popper), j, u, N), W = oD(M.elements.reference), v = ME({
    reference: W,
    element: Y,
    strategy: "absolute",
    placement: D
  }), d = Qu(Object.assign({}, Y, v)), U = C === Xg ? d : W, Z = {
    top: m.top - U.top + E.top,
    bottom: U.bottom - m.bottom + E.bottom,
    left: m.left - U.left + E.left,
    right: U.right - m.right + E.right
  }, R = M.modifiersData.offset;
  if (C === Xg && R) {
    var AM = R[D];
    Object.keys(Z).forEach(function(LM) {
      var IM = [OA, hA].indexOf(LM) >= 0 ? 1 : -1, lM = [xA, hA].indexOf(LM) >= 0 ? "y" : "x";
      Z[LM] += AM[lM] * IM;
    });
  }
  return Z;
}
function QU(M, A) {
  A === void 0 && (A = {});
  var I = A, g = I.placement, D = I.boundary, t = I.rootBoundary, N = I.padding, L = I.flipVariations, j = I.allowedAutoPlacements, i = j === void 0 ? Xi : j, u = yD(g), e = u ? L ? ku : ku.filter(function(w) {
    return yD(w) === u;
  }) : UD, C = e.filter(function(w) {
    return i.indexOf(w) >= 0;
  });
  C.length === 0 && (C = e);
  var a = C.reduce(function(w, n) {
    return w[n] = lD(M, {
      placement: n,
      boundary: D,
      rootBoundary: t,
      padding: N
    })[LI(n)], w;
  }, {});
  return Object.keys(a).sort(function(w, n) {
    return a[w] - a[n];
  });
}
function fU(M) {
  if (LI(M) === JL)
    return [];
  var A = YN(M);
  return [hS(M), A, hS(A)];
}
function vU(M) {
  var A = M.state, I = M.options, g = M.name;
  if (!A.modifiersData[g]._skip) {
    for (var D = I.mainAxis, t = D === void 0 ? !0 : D, N = I.altAxis, L = N === void 0 ? !0 : N, j = I.fallbackPlacements, i = I.padding, u = I.boundary, e = I.rootBoundary, C = I.altBoundary, a = I.flipVariations, w = a === void 0 ? !0 : a, n = I.allowedAutoPlacements, o = A.options.placement, E = LI(o), l = E === o, Y = j || (l || !w ? [YN(o)] : fU(o)), z = [o].concat(Y).reduce(function(YM, J) {
      return YM.concat(LI(J) === JL ? QU(A, {
        placement: J,
        boundary: u,
        rootBoundary: e,
        padding: i,
        flipVariations: w,
        allowedAutoPlacements: n
      }) : J);
    }, []), m = A.rects.reference, W = A.rects.popper, v = /* @__PURE__ */ new Map(), d = !0, U = z[0], Z = 0; Z < z.length; Z++) {
      var R = z[Z], AM = LI(R), LM = yD(R) === dg, IM = [xA, hA].indexOf(AM) >= 0, lM = IM ? "width" : "height", SM = lD(A, {
        placement: R,
        boundary: u,
        rootBoundary: e,
        altBoundary: C,
        padding: i
      }), uM = IM ? LM ? OA : oA : LM ? hA : xA;
      m[lM] > W[lM] && (uM = YN(uM));
      var bM = YN(uM), oM = [];
      if (t && oM.push(SM[AM] <= 0), L && oM.push(SM[uM] <= 0, SM[bM] <= 0), oM.every(function(YM) {
        return YM;
      })) {
        U = R, d = !1;
        break;
      }
      v.set(R, oM);
    }
    if (d)
      for (var hM = w ? 3 : 1, GM = function(J) {
        var _ = z.find(function($) {
          var NM = v.get($);
          if (NM)
            return NM.slice(0, J).every(function(kM) {
              return kM;
            });
        });
        if (_)
          return U = _, "break";
      }, BM = hM; BM > 0; BM--) {
        var CM = GM(BM);
        if (CM === "break")
          break;
      }
    A.placement !== U && (A.modifiersData[g]._skip = !0, A.placement = U, A.reset = !0);
  }
}
const AE = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: vU,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function bS(M, A, I) {
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
function WS(M) {
  return [xA, OA, hA, oA].some(function(A) {
    return M[A] >= 0;
  });
}
function GU(M) {
  var A = M.state, I = M.name, g = A.rects.reference, D = A.rects.popper, t = A.modifiersData.preventOverflow, N = lD(A, {
    elementContext: "reference"
  }), L = lD(A, {
    altBoundary: !0
  }), j = bS(N, g), i = bS(L, D, t), u = WS(j), e = WS(i);
  A.modifiersData[I] = {
    referenceClippingOffsets: j,
    popperEscapeOffsets: i,
    isReferenceHidden: u,
    hasPopperEscaped: e
  }, A.attributes.popper = Object.assign({}, A.attributes.popper, {
    "data-popper-reference-hidden": u,
    "data-popper-escaped": e
  });
}
const IE = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: GU
};
function JU(M, A, I) {
  var g = LI(M), D = [oA, xA].indexOf(g) >= 0 ? -1 : 1, t = typeof I == "function" ? I(Object.assign({}, A, {
    placement: M
  })) : I, N = t[0], L = t[1];
  return N = N || 0, L = (L || 0) * D, [oA, OA].indexOf(g) >= 0 ? {
    x: L,
    y: N
  } : {
    x: N,
    y: L
  };
}
function VU(M) {
  var A = M.state, I = M.options, g = M.name, D = I.offset, t = D === void 0 ? [0, 0] : D, N = Xi.reduce(function(u, e) {
    return u[e] = JU(e, A.rects, t), u;
  }, {}), L = N[A.placement], j = L.x, i = L.y;
  A.modifiersData.popperOffsets != null && (A.modifiersData.popperOffsets.x += j, A.modifiersData.popperOffsets.y += i), A.modifiersData[g] = N;
}
const gE = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: VU
};
function ZU(M) {
  var A = M.state, I = M.name;
  A.modifiersData[I] = ME({
    reference: A.rects.reference,
    element: A.rects.popper,
    strategy: "absolute",
    placement: A.placement
  });
}
const g4 = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: ZU,
  data: {}
};
function PU(M) {
  return M === "x" ? "y" : "x";
}
function BU(M) {
  var A = M.state, I = M.options, g = M.name, D = I.mainAxis, t = D === void 0 ? !0 : D, N = I.altAxis, L = N === void 0 ? !1 : N, j = I.boundary, i = I.rootBoundary, u = I.altBoundary, e = I.padding, C = I.tether, a = C === void 0 ? !0 : C, w = I.tetherOffset, n = w === void 0 ? 0 : w, o = lD(A, {
    boundary: j,
    rootBoundary: i,
    padding: e,
    altBoundary: u
  }), E = LI(A.placement), l = yD(A.placement), Y = !l, z = $i(E), m = PU(z), W = A.modifiersData.popperOffsets, v = A.rects.reference, d = A.rects.popper, U = typeof n == "function" ? n(Object.assign({}, A.rects, {
    placement: A.placement
  })) : n, Z = typeof U == "number" ? {
    mainAxis: U,
    altAxis: U
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, U), R = A.modifiersData.offset ? A.modifiersData.offset[A.placement] : null, AM = {
    x: 0,
    y: 0
  };
  if (!!W) {
    if (t) {
      var LM, IM = z === "y" ? xA : oA, lM = z === "y" ? hA : OA, SM = z === "y" ? "height" : "width", uM = W[z], bM = uM + o[IM], oM = uM - o[lM], hM = a ? -d[SM] / 2 : 0, GM = l === dg ? v[SM] : d[SM], BM = l === dg ? -d[SM] : -v[SM], CM = A.elements.arrow, YM = a && CM ? _i(CM) : {
        width: 0,
        height: 0
      }, J = A.modifiersData["arrow#persistent"] ? A.modifiersData["arrow#persistent"].padding : H0(), _ = J[IM], $ = J[lM], NM = Nt(0, v[SM], YM[SM]), kM = Y ? v[SM] / 2 - hM - NM - _ - Z.mainAxis : GM - NM - _ - Z.mainAxis, RM = Y ? -v[SM] / 2 + hM + NM + $ + Z.mainAxis : BM + NM + $ + Z.mainAxis, yM = A.elements.arrow && Ot(A.elements.arrow), p = yM ? z === "y" ? yM.clientTop || 0 : yM.clientLeft || 0 : 0, q = (LM = R == null ? void 0 : R[z]) != null ? LM : 0, mM = uM + kM - q - p, H = uM + RM - q, iA = Nt(a ? NL(bM, mM) : bM, uM, a ? yg(oM, H) : oM);
      W[z] = iA, AM[z] = iA - uM;
    }
    if (L) {
      var vM, kD = z === "x" ? xA : oA, eI = z === "x" ? hA : OA, Ng = W[m], Qt = m === "y" ? "height" : "width", C4 = Ng + o[kD], a4 = Ng - o[eI], $L = [xA, oA].indexOf(E) !== -1, w4 = (vM = R == null ? void 0 : R[m]) != null ? vM : 0, E4 = $L ? C4 : Ng - v[Qt] - d[Qt] - w4 + Z.altAxis, T4 = $L ? Ng + v[Qt] + d[Qt] - w4 - Z.altAxis : a4, n4 = a && $L ? lU(E4, Ng, T4) : Nt(a ? E4 : C4, Ng, a ? T4 : a4);
      W[m] = n4, AM[m] = n4 - Ng;
    }
    A.modifiersData[g] = AM;
  }
}
const DE = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: BU,
  requiresIfExists: ["offset"]
};
function FU(M) {
  return {
    scrollLeft: M.scrollLeft,
    scrollTop: M.scrollTop
  };
}
function XU(M) {
  return M === VA(M) || !fA(M) ? M4(M) : FU(M);
}
function RU(M) {
  var A = M.getBoundingClientRect(), I = xD(A.width) / M.offsetWidth || 1, g = xD(A.height) / M.offsetHeight || 1;
  return I !== 1 || g !== 1;
}
function HU(M, A, I) {
  I === void 0 && (I = !1);
  var g = fA(A), D = fA(A) && RU(A), t = gg(A), N = oD(M, D, I), L = {
    scrollLeft: 0,
    scrollTop: 0
  }, j = {
    x: 0,
    y: 0
  };
  return (g || !g && !I) && ((uI(A) !== "body" || I4(t)) && (L = XU(A)), fA(A) ? (j = oD(A, !0), j.x += A.clientLeft, j.y += A.clientTop) : t && (j.x = A4(t))), {
    x: N.left + L.scrollLeft - j.x,
    y: N.top + L.scrollTop - j.y,
    width: N.width,
    height: N.height
  };
}
function _U(M) {
  var A = /* @__PURE__ */ new Map(), I = /* @__PURE__ */ new Set(), g = [];
  M.forEach(function(t) {
    A.set(t.name, t);
  });
  function D(t) {
    I.add(t.name);
    var N = [].concat(t.requires || [], t.requiresIfExists || []);
    N.forEach(function(L) {
      if (!I.has(L)) {
        var j = A.get(L);
        j && D(j);
      }
    }), g.push(t);
  }
  return M.forEach(function(t) {
    I.has(t.name) || D(t);
  }), g;
}
function $U(M) {
  var A = _U(M);
  return F0.reduce(function(I, g) {
    return I.concat(A.filter(function(D) {
      return D.phase === g;
    }));
  }, []);
}
function qU(M) {
  var A;
  return function() {
    return A || (A = new Promise(function(I) {
      Promise.resolve().then(function() {
        A = void 0, I(M());
      });
    })), A;
  };
}
function KU(M) {
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
var kS = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function pS() {
  for (var M = arguments.length, A = new Array(M), I = 0; I < M; I++)
    A[I] = arguments[I];
  return !A.some(function(g) {
    return !(g && typeof g.getBoundingClientRect == "function");
  });
}
function ZL(M) {
  M === void 0 && (M = {});
  var A = M, I = A.defaultModifiers, g = I === void 0 ? [] : I, D = A.defaultOptions, t = D === void 0 ? kS : D;
  return function(L, j, i) {
    i === void 0 && (i = t);
    var u = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, kS, t),
      modifiersData: {},
      elements: {
        reference: L,
        popper: j
      },
      attributes: {},
      styles: {}
    }, e = [], C = !1, a = {
      state: u,
      setOptions: function(E) {
        var l = typeof E == "function" ? E(u.options) : E;
        n(), u.options = Object.assign({}, t, u.options, l), u.scrollParents = {
          reference: mg(L) ? Lt(L) : L.contextElement ? Lt(L.contextElement) : [],
          popper: Lt(j)
        };
        var Y = $U(KU([].concat(g, u.options.modifiers)));
        return u.orderedModifiers = Y.filter(function(z) {
          return z.enabled;
        }), w(), a.update();
      },
      forceUpdate: function() {
        if (!C) {
          var E = u.elements, l = E.reference, Y = E.popper;
          if (!!pS(l, Y)) {
            u.rects = {
              reference: HU(l, Ot(Y), u.options.strategy === "fixed"),
              popper: _i(Y)
            }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(Z) {
              return u.modifiersData[Z.name] = Object.assign({}, Z.data);
            });
            for (var z = 0; z < u.orderedModifiers.length; z++) {
              if (u.reset === !0) {
                u.reset = !1, z = -1;
                continue;
              }
              var m = u.orderedModifiers[z], W = m.fn, v = m.options, d = v === void 0 ? {} : v, U = m.name;
              typeof W == "function" && (u = W({
                state: u,
                options: d,
                name: U,
                instance: a
              }) || u);
            }
          }
        }
      },
      update: qU(function() {
        return new Promise(function(o) {
          a.forceUpdate(), o(u);
        });
      }),
      destroy: function() {
        n(), C = !0;
      }
    };
    if (!pS(L, j))
      return a;
    a.setOptions(i).then(function(o) {
      !C && i.onFirstUpdate && i.onFirstUpdate(o);
    });
    function w() {
      u.orderedModifiers.forEach(function(o) {
        var E = o.name, l = o.options, Y = l === void 0 ? {} : l, z = o.effect;
        if (typeof z == "function") {
          var m = z({
            state: u,
            name: E,
            instance: a,
            options: Y
          }), W = function() {
          };
          e.push(m || W);
        }
      });
    }
    function n() {
      e.forEach(function(o) {
        return o();
      }), e = [];
    }
    return a;
  };
}
var Mh = /* @__PURE__ */ ZL(), Ah = [Ki, g4, qi, Hi], Ih = /* @__PURE__ */ ZL({
  defaultModifiers: Ah
}), gh = [Ki, g4, qi, Hi, gE, AE, DE, q0, IE], D4 = /* @__PURE__ */ ZL({
  defaultModifiers: gh
});
const tE = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  popperGenerator: ZL,
  detectOverflow: lD,
  createPopperBase: Mh,
  createPopper: D4,
  createPopperLite: Ih,
  top: xA,
  bottom: hA,
  right: OA,
  left: oA,
  auto: JL,
  basePlacements: UD,
  start: dg,
  end: nD,
  clippingParents: k0,
  viewport: Fi,
  popper: Xg,
  reference: p0,
  variationPlacements: ku,
  placements: Xi,
  beforeRead: Q0,
  read: f0,
  afterRead: v0,
  beforeMain: G0,
  main: J0,
  afterMain: V0,
  beforeWrite: Z0,
  write: P0,
  afterWrite: B0,
  modifierPhases: F0,
  applyStyles: Hi,
  arrow: q0,
  computeStyles: qi,
  eventListeners: Ki,
  flip: AE,
  hide: IE,
  offset: gE,
  popperOffsets: g4,
  preventOverflow: DE
}, Symbol.toStringTag, { value: "Module" }));
/*!
  * Bootstrap v5.2.2 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
const Dh = 1e6, th = 1e3, fu = "transitionend", Nh = (M) => M == null ? `${M}` : Object.prototype.toString.call(M).match(/\s([a-z]+)/i)[1].toLowerCase(), Lh = (M) => {
  do
    M += Math.floor(Math.random() * Dh);
  while (document.getElementById(M));
  return M;
}, NE = (M) => {
  let A = M.getAttribute("data-bs-target");
  if (!A || A === "#") {
    let I = M.getAttribute("href");
    if (!I || !I.includes("#") && !I.startsWith("."))
      return null;
    I.includes("#") && !I.startsWith("#") && (I = `#${I.split("#")[1]}`), A = I && I !== "#" ? I.trim() : null;
  }
  return A;
}, LE = (M) => {
  const A = NE(M);
  return A && document.querySelector(A) ? A : null;
}, xI = (M) => {
  const A = NE(M);
  return A ? document.querySelector(A) : null;
}, jh = (M) => {
  if (!M)
    return 0;
  let {
    transitionDuration: A,
    transitionDelay: I
  } = window.getComputedStyle(M);
  const g = Number.parseFloat(A), D = Number.parseFloat(I);
  return !g && !D ? 0 : (A = A.split(",")[0], I = I.split(",")[0], (Number.parseFloat(A) + Number.parseFloat(I)) * th);
}, jE = (M) => {
  M.dispatchEvent(new Event(fu));
}, oI = (M) => !M || typeof M != "object" ? !1 : (typeof M.jquery < "u" && (M = M[0]), typeof M.nodeType < "u"), qI = (M) => oI(M) ? M.jquery ? M[0] : M : typeof M == "string" && M.length > 0 ? document.querySelector(M) : null, hD = (M) => {
  if (!oI(M) || M.getClientRects().length === 0)
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
}, KI = (M) => !M || M.nodeType !== Node.ELEMENT_NODE || M.classList.contains("disabled") ? !0 : typeof M.disabled < "u" ? M.disabled : M.hasAttribute("disabled") && M.getAttribute("disabled") !== "false", uE = (M) => {
  if (!document.documentElement.attachShadow)
    return null;
  if (typeof M.getRootNode == "function") {
    const A = M.getRootNode();
    return A instanceof ShadowRoot ? A : null;
  }
  return M instanceof ShadowRoot ? M : M.parentNode ? uE(M.parentNode) : null;
}, LL = () => {
}, bt = (M) => {
  M.offsetHeight;
}, iE = () => window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null, pj = [], uh = (M) => {
  document.readyState === "loading" ? (pj.length || document.addEventListener("DOMContentLoaded", () => {
    for (const A of pj)
      A();
  }), pj.push(M)) : M();
}, GA = () => document.documentElement.dir === "rtl", ZA = (M) => {
  uh(() => {
    const A = iE();
    if (A) {
      const I = M.NAME, g = A.fn[I];
      A.fn[I] = M.jQueryInterface, A.fn[I].Constructor = M, A.fn[I].noConflict = () => (A.fn[I] = g, M.jQueryInterface);
    }
  });
}, aI = (M) => {
  typeof M == "function" && M();
}, eE = (M, A, I = !0) => {
  if (!I) {
    aI(M);
    return;
  }
  const g = 5, D = jh(A) + g;
  let t = !1;
  const N = ({
    target: L
  }) => {
    L === A && (t = !0, A.removeEventListener(fu, N), aI(M));
  };
  A.addEventListener(fu, N), setTimeout(() => {
    t || jE(A);
  }, D);
}, t4 = (M, A, I, g) => {
  const D = M.length;
  let t = M.indexOf(A);
  return t === -1 ? !I && g ? M[D - 1] : M[0] : (t += I ? 1 : -1, g && (t = (t + D) % D), M[Math.max(0, Math.min(t, D - 1))]);
}, ih = /[^.]*(?=\..*)\.|.*/, eh = /\..*/, Sh = /::\d+$/, Qj = {};
let QS = 1;
const SE = {
  mouseenter: "mouseover",
  mouseleave: "mouseout"
}, Ch = /* @__PURE__ */ new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);
function CE(M, A) {
  return A && `${A}::${QS++}` || M.uidEvent || QS++;
}
function aE(M) {
  const A = CE(M);
  return M.uidEvent = A, Qj[A] = Qj[A] || {}, Qj[A];
}
function ah(M, A) {
  return function I(g) {
    return N4(g, {
      delegateTarget: M
    }), I.oneOff && X.off(M, g.type, A), A.apply(M, [g]);
  };
}
function wh(M, A, I) {
  return function g(D) {
    const t = M.querySelectorAll(A);
    for (let {
      target: N
    } = D; N && N !== this; N = N.parentNode)
      for (const L of t)
        if (L === N)
          return N4(D, {
            delegateTarget: N
          }), g.oneOff && X.off(M, D.type, A, I), I.apply(N, [D]);
  };
}
function wE(M, A, I = null) {
  return Object.values(M).find((g) => g.callable === A && g.delegationSelector === I);
}
function EE(M, A, I) {
  const g = typeof A == "string", D = g ? I : A || I;
  let t = TE(M);
  return Ch.has(t) || (t = M), [g, D, t];
}
function fS(M, A, I, g, D) {
  if (typeof A != "string" || !M)
    return;
  let [t, N, L] = EE(A, I, g);
  A in SE && (N = ((w) => function(n) {
    if (!n.relatedTarget || n.relatedTarget !== n.delegateTarget && !n.delegateTarget.contains(n.relatedTarget))
      return w.call(this, n);
  })(N));
  const j = aE(M), i = j[L] || (j[L] = {}), u = wE(i, N, t ? I : null);
  if (u) {
    u.oneOff = u.oneOff && D;
    return;
  }
  const e = CE(N, A.replace(ih, "")), C = t ? wh(M, I, N) : ah(M, N);
  C.delegationSelector = t ? I : null, C.callable = N, C.oneOff = D, C.uidEvent = e, i[e] = C, M.addEventListener(L, C, t);
}
function vu(M, A, I, g, D) {
  const t = wE(A[I], g, D);
  !t || (M.removeEventListener(I, t, Boolean(D)), delete A[I][t.uidEvent]);
}
function Eh(M, A, I, g) {
  const D = A[I] || {};
  for (const t of Object.keys(D))
    if (t.includes(g)) {
      const N = D[t];
      vu(M, A, I, N.callable, N.delegationSelector);
    }
}
function TE(M) {
  return M = M.replace(eh, ""), SE[M] || M;
}
const X = {
  on(M, A, I, g) {
    fS(M, A, I, g, !1);
  },
  one(M, A, I, g) {
    fS(M, A, I, g, !0);
  },
  off(M, A, I, g) {
    if (typeof A != "string" || !M)
      return;
    const [D, t, N] = EE(A, I, g), L = N !== A, j = aE(M), i = j[N] || {}, u = A.startsWith(".");
    if (typeof t < "u") {
      if (!Object.keys(i).length)
        return;
      vu(M, j, N, t, D ? I : null);
      return;
    }
    if (u)
      for (const e of Object.keys(j))
        Eh(M, j, e, A.slice(1));
    for (const e of Object.keys(i)) {
      const C = e.replace(Sh, "");
      if (!L || A.includes(C)) {
        const a = i[e];
        vu(M, j, N, a.callable, a.delegationSelector);
      }
    }
  },
  trigger(M, A, I) {
    if (typeof A != "string" || !M)
      return null;
    const g = iE(), D = TE(A), t = A !== D;
    let N = null, L = !0, j = !0, i = !1;
    t && g && (N = g.Event(A, I), g(M).trigger(N), L = !N.isPropagationStopped(), j = !N.isImmediatePropagationStopped(), i = N.isDefaultPrevented());
    let u = new Event(A, {
      bubbles: L,
      cancelable: !0
    });
    return u = N4(u, I), i && u.preventDefault(), j && M.dispatchEvent(u), u.defaultPrevented && N && N.preventDefault(), u;
  }
};
function N4(M, A) {
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
const vI = /* @__PURE__ */ new Map(), fj = {
  set(M, A, I) {
    vI.has(M) || vI.set(M, /* @__PURE__ */ new Map());
    const g = vI.get(M);
    if (!g.has(A) && g.size !== 0) {
      console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(g.keys())[0]}.`);
      return;
    }
    g.set(A, I);
  },
  get(M, A) {
    return vI.has(M) && vI.get(M).get(A) || null;
  },
  remove(M, A) {
    if (!vI.has(M))
      return;
    const I = vI.get(M);
    I.delete(A), I.size === 0 && vI.delete(M);
  }
};
function vS(M) {
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
function vj(M) {
  return M.replace(/[A-Z]/g, (A) => `-${A.toLowerCase()}`);
}
const yI = {
  setDataAttribute(M, A, I) {
    M.setAttribute(`data-bs-${vj(A)}`, I);
  },
  removeDataAttribute(M, A) {
    M.removeAttribute(`data-bs-${vj(A)}`);
  },
  getDataAttributes(M) {
    if (!M)
      return {};
    const A = {}, I = Object.keys(M.dataset).filter((g) => g.startsWith("bs") && !g.startsWith("bsConfig"));
    for (const g of I) {
      let D = g.replace(/^bs/, "");
      D = D.charAt(0).toLowerCase() + D.slice(1, D.length), A[D] = vS(M.dataset[g]);
    }
    return A;
  },
  getDataAttribute(M, A) {
    return vS(M.getAttribute(`data-bs-${vj(A)}`));
  }
};
class Wt {
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
    const g = oI(I) ? yI.getDataAttribute(I, "config") : {};
    return {
      ...this.constructor.Default,
      ...typeof g == "object" ? g : {},
      ...oI(I) ? yI.getDataAttributes(I) : {},
      ...typeof A == "object" ? A : {}
    };
  }
  _typeCheckConfig(A, I = this.constructor.DefaultType) {
    for (const g of Object.keys(I)) {
      const D = I[g], t = A[g], N = oI(t) ? "element" : Nh(t);
      if (!new RegExp(D).test(N))
        throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${g}" provided type "${N}" but expected type "${D}".`);
    }
  }
}
const Th = "5.2.2";
class KA extends Wt {
  constructor(A, I) {
    super(), A = qI(A), A && (this._element = A, this._config = this._getConfig(I), fj.set(this._element, this.constructor.DATA_KEY, this));
  }
  dispose() {
    fj.remove(this._element, this.constructor.DATA_KEY), X.off(this._element, this.constructor.EVENT_KEY);
    for (const A of Object.getOwnPropertyNames(this))
      this[A] = null;
  }
  _queueCallback(A, I, g = !0) {
    eE(A, I, g);
  }
  _getConfig(A) {
    return A = this._mergeConfigObj(A, this._element), A = this._configAfterMerge(A), this._typeCheckConfig(A), A;
  }
  static getInstance(A) {
    return fj.get(qI(A), this.DATA_KEY);
  }
  static getOrCreateInstance(A, I = {}) {
    return this.getInstance(A) || new this(A, typeof I == "object" ? I : null);
  }
  static get VERSION() {
    return Th;
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
const PL = (M, A = "hide") => {
  const I = `click.dismiss${M.EVENT_KEY}`, g = M.NAME;
  X.on(document, I, `[data-bs-dismiss="${g}"]`, function(D) {
    if (["A", "AREA"].includes(this.tagName) && D.preventDefault(), KI(this))
      return;
    const t = xI(this) || this.closest(`.${g}`);
    M.getOrCreateInstance(t)[A]();
  });
}, nh = "alert", xh = "bs.alert", nE = `.${xh}`, oh = `close${nE}`, yh = `closed${nE}`, lh = "fade", sh = "show";
class kt extends KA {
  static get NAME() {
    return nh;
  }
  close() {
    if (X.trigger(this._element, oh).defaultPrevented)
      return;
    this._element.classList.remove(sh);
    const I = this._element.classList.contains(lh);
    this._queueCallback(() => this._destroyElement(), this._element, I);
  }
  _destroyElement() {
    this._element.remove(), X.trigger(this._element, yh), this.dispose();
  }
  static jQueryInterface(A) {
    return this.each(function() {
      const I = kt.getOrCreateInstance(this);
      if (typeof A == "string") {
        if (I[A] === void 0 || A.startsWith("_") || A === "constructor")
          throw new TypeError(`No method named "${A}"`);
        I[A](this);
      }
    });
  }
}
PL(kt, "close");
ZA(kt);
const ch = "button", rh = "bs.button", zh = `.${rh}`, Yh = ".data-api", dh = "active", GS = '[data-bs-toggle="button"]', mh = `click${zh}${Yh}`;
class BL extends KA {
  static get NAME() {
    return ch;
  }
  toggle() {
    this._element.setAttribute("aria-pressed", this._element.classList.toggle(dh));
  }
  static jQueryInterface(A) {
    return this.each(function() {
      const I = BL.getOrCreateInstance(this);
      A === "toggle" && I[A]();
    });
  }
}
X.on(document, mh, GS, (M) => {
  M.preventDefault();
  const A = M.target.closest(GS);
  BL.getOrCreateInstance(A).toggle();
});
ZA(BL);
const zM = {
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
    return this.find(A, M).filter((I) => !KI(I) && hD(I));
  }
}, Uh = "swipe", OD = ".bs.swipe", hh = `touchstart${OD}`, Oh = `touchmove${OD}`, bh = `touchend${OD}`, Wh = `pointerdown${OD}`, kh = `pointerup${OD}`, ph = "touch", Qh = "pen", fh = "pointer-event", vh = 40, Gh = {
  endCallback: null,
  leftCallback: null,
  rightCallback: null
}, Jh = {
  endCallback: "(function|null)",
  leftCallback: "(function|null)",
  rightCallback: "(function|null)"
};
class jL extends Wt {
  constructor(A, I) {
    super(), this._element = A, !(!A || !jL.isSupported()) && (this._config = this._getConfig(I), this._deltaX = 0, this._supportPointerEvents = Boolean(window.PointerEvent), this._initEvents());
  }
  static get Default() {
    return Gh;
  }
  static get DefaultType() {
    return Jh;
  }
  static get NAME() {
    return Uh;
  }
  dispose() {
    X.off(this._element, OD);
  }
  _start(A) {
    if (!this._supportPointerEvents) {
      this._deltaX = A.touches[0].clientX;
      return;
    }
    this._eventIsPointerPenTouch(A) && (this._deltaX = A.clientX);
  }
  _end(A) {
    this._eventIsPointerPenTouch(A) && (this._deltaX = A.clientX - this._deltaX), this._handleSwipe(), aI(this._config.endCallback);
  }
  _move(A) {
    this._deltaX = A.touches && A.touches.length > 1 ? 0 : A.touches[0].clientX - this._deltaX;
  }
  _handleSwipe() {
    const A = Math.abs(this._deltaX);
    if (A <= vh)
      return;
    const I = A / this._deltaX;
    this._deltaX = 0, I && aI(I > 0 ? this._config.rightCallback : this._config.leftCallback);
  }
  _initEvents() {
    this._supportPointerEvents ? (X.on(this._element, Wh, (A) => this._start(A)), X.on(this._element, kh, (A) => this._end(A)), this._element.classList.add(fh)) : (X.on(this._element, hh, (A) => this._start(A)), X.on(this._element, Oh, (A) => this._move(A)), X.on(this._element, bh, (A) => this._end(A)));
  }
  _eventIsPointerPenTouch(A) {
    return this._supportPointerEvents && (A.pointerType === Qh || A.pointerType === ph);
  }
  static isSupported() {
    return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
  }
}
const Vh = "carousel", Zh = "bs.carousel", Dg = `.${Zh}`, xE = ".data-api", Ph = "ArrowLeft", Bh = "ArrowRight", Fh = 500, QD = "next", Gg = "prev", Rg = "left", dN = "right", Xh = `slide${Dg}`, Gj = `slid${Dg}`, Rh = `keydown${Dg}`, Hh = `mouseenter${Dg}`, _h = `mouseleave${Dg}`, $h = `dragstart${Dg}`, qh = `load${Dg}${xE}`, Kh = `click${Dg}${xE}`, oE = "carousel", tN = "active", MO = "slide", AO = "carousel-item-end", IO = "carousel-item-start", gO = "carousel-item-next", DO = "carousel-item-prev", yE = ".active", lE = ".carousel-item", tO = yE + lE, NO = ".carousel-item img", LO = ".carousel-indicators", jO = "[data-bs-slide], [data-bs-slide-to]", uO = '[data-bs-ride="carousel"]', iO = {
  [Ph]: dN,
  [Bh]: Rg
}, eO = {
  interval: 5e3,
  keyboard: !0,
  pause: "hover",
  ride: !1,
  touch: !0,
  wrap: !0
}, SO = {
  interval: "(number|boolean)",
  keyboard: "boolean",
  pause: "(string|boolean)",
  ride: "(boolean|string)",
  touch: "boolean",
  wrap: "boolean"
};
class bD extends KA {
  constructor(A, I) {
    super(A, I), this._interval = null, this._activeElement = null, this._isSliding = !1, this.touchTimeout = null, this._swipeHelper = null, this._indicatorsElement = zM.findOne(LO, this._element), this._addEventListeners(), this._config.ride === oE && this.cycle();
  }
  static get Default() {
    return eO;
  }
  static get DefaultType() {
    return SO;
  }
  static get NAME() {
    return Vh;
  }
  next() {
    this._slide(QD);
  }
  nextWhenVisible() {
    !document.hidden && hD(this._element) && this.next();
  }
  prev() {
    this._slide(Gg);
  }
  pause() {
    this._isSliding && jE(this._element), this._clearInterval();
  }
  cycle() {
    this._clearInterval(), this._updateInterval(), this._interval = setInterval(() => this.nextWhenVisible(), this._config.interval);
  }
  _maybeEnableCycle() {
    if (!!this._config.ride) {
      if (this._isSliding) {
        X.one(this._element, Gj, () => this.cycle());
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
      X.one(this._element, Gj, () => this.to(A));
      return;
    }
    const g = this._getItemIndex(this._getActive());
    if (g === A)
      return;
    const D = A > g ? QD : Gg;
    this._slide(D, I[A]);
  }
  dispose() {
    this._swipeHelper && this._swipeHelper.dispose(), super.dispose();
  }
  _configAfterMerge(A) {
    return A.defaultInterval = A.interval, A;
  }
  _addEventListeners() {
    this._config.keyboard && X.on(this._element, Rh, (A) => this._keydown(A)), this._config.pause === "hover" && (X.on(this._element, Hh, () => this.pause()), X.on(this._element, _h, () => this._maybeEnableCycle())), this._config.touch && jL.isSupported() && this._addTouchEventListeners();
  }
  _addTouchEventListeners() {
    for (const g of zM.find(NO, this._element))
      X.on(g, $h, (D) => D.preventDefault());
    const I = {
      leftCallback: () => this._slide(this._directionToOrder(Rg)),
      rightCallback: () => this._slide(this._directionToOrder(dN)),
      endCallback: () => {
        this._config.pause === "hover" && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout(() => this._maybeEnableCycle(), Fh + this._config.interval));
      }
    };
    this._swipeHelper = new jL(this._element, I);
  }
  _keydown(A) {
    if (/input|textarea/i.test(A.target.tagName))
      return;
    const I = iO[A.key];
    I && (A.preventDefault(), this._slide(this._directionToOrder(I)));
  }
  _getItemIndex(A) {
    return this._getItems().indexOf(A);
  }
  _setActiveIndicatorElement(A) {
    if (!this._indicatorsElement)
      return;
    const I = zM.findOne(yE, this._indicatorsElement);
    I.classList.remove(tN), I.removeAttribute("aria-current");
    const g = zM.findOne(`[data-bs-slide-to="${A}"]`, this._indicatorsElement);
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
    const g = this._getActive(), D = A === QD, t = I || t4(this._getItems(), g, D, this._config.wrap);
    if (t === g)
      return;
    const N = this._getItemIndex(t), L = (a) => X.trigger(this._element, a, {
      relatedTarget: t,
      direction: this._orderToDirection(A),
      from: this._getItemIndex(g),
      to: N
    });
    if (L(Xh).defaultPrevented || !g || !t)
      return;
    const i = Boolean(this._interval);
    this.pause(), this._isSliding = !0, this._setActiveIndicatorElement(N), this._activeElement = t;
    const u = D ? IO : AO, e = D ? gO : DO;
    t.classList.add(e), bt(t), g.classList.add(u), t.classList.add(u);
    const C = () => {
      t.classList.remove(u, e), t.classList.add(tN), g.classList.remove(tN, e, u), this._isSliding = !1, L(Gj);
    };
    this._queueCallback(C, g, this._isAnimated()), i && this.cycle();
  }
  _isAnimated() {
    return this._element.classList.contains(MO);
  }
  _getActive() {
    return zM.findOne(tO, this._element);
  }
  _getItems() {
    return zM.find(lE, this._element);
  }
  _clearInterval() {
    this._interval && (clearInterval(this._interval), this._interval = null);
  }
  _directionToOrder(A) {
    return GA() ? A === Rg ? Gg : QD : A === Rg ? QD : Gg;
  }
  _orderToDirection(A) {
    return GA() ? A === Gg ? Rg : dN : A === Gg ? dN : Rg;
  }
  static jQueryInterface(A) {
    return this.each(function() {
      const I = bD.getOrCreateInstance(this, A);
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
X.on(document, Kh, jO, function(M) {
  const A = xI(this);
  if (!A || !A.classList.contains(oE))
    return;
  M.preventDefault();
  const I = bD.getOrCreateInstance(A), g = this.getAttribute("data-bs-slide-to");
  if (g) {
    I.to(g), I._maybeEnableCycle();
    return;
  }
  if (yI.getDataAttribute(this, "slide") === "next") {
    I.next(), I._maybeEnableCycle();
    return;
  }
  I.prev(), I._maybeEnableCycle();
});
X.on(window, qh, () => {
  const M = zM.find(uO);
  for (const A of M)
    bD.getOrCreateInstance(A);
});
ZA(bD);
const CO = "collapse", aO = "bs.collapse", pt = `.${aO}`, wO = ".data-api", EO = `show${pt}`, TO = `shown${pt}`, nO = `hide${pt}`, xO = `hidden${pt}`, oO = `click${pt}${wO}`, Jj = "show", Kg = "collapse", NN = "collapsing", yO = "collapsed", lO = `:scope .${Kg} .${Kg}`, sO = "collapse-horizontal", cO = "width", rO = "height", zO = ".collapse.show, .collapse.collapsing", Gu = '[data-bs-toggle="collapse"]', YO = {
  parent: null,
  toggle: !0
}, dO = {
  parent: "(null|element)",
  toggle: "boolean"
};
class sD extends KA {
  constructor(A, I) {
    super(A, I), this._isTransitioning = !1, this._triggerArray = [];
    const g = zM.find(Gu);
    for (const D of g) {
      const t = LE(D), N = zM.find(t).filter((L) => L === this._element);
      t !== null && N.length && this._triggerArray.push(D);
    }
    this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle();
  }
  static get Default() {
    return YO;
  }
  static get DefaultType() {
    return dO;
  }
  static get NAME() {
    return CO;
  }
  toggle() {
    this._isShown() ? this.hide() : this.show();
  }
  show() {
    if (this._isTransitioning || this._isShown())
      return;
    let A = [];
    if (this._config.parent && (A = this._getFirstLevelChildren(zO).filter((L) => L !== this._element).map((L) => sD.getOrCreateInstance(L, {
      toggle: !1
    }))), A.length && A[0]._isTransitioning || X.trigger(this._element, EO).defaultPrevented)
      return;
    for (const L of A)
      L.hide();
    const g = this._getDimension();
    this._element.classList.remove(Kg), this._element.classList.add(NN), this._element.style[g] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
    const D = () => {
      this._isTransitioning = !1, this._element.classList.remove(NN), this._element.classList.add(Kg, Jj), this._element.style[g] = "", X.trigger(this._element, TO);
    }, N = `scroll${g[0].toUpperCase() + g.slice(1)}`;
    this._queueCallback(D, this._element, !0), this._element.style[g] = `${this._element[N]}px`;
  }
  hide() {
    if (this._isTransitioning || !this._isShown() || X.trigger(this._element, nO).defaultPrevented)
      return;
    const I = this._getDimension();
    this._element.style[I] = `${this._element.getBoundingClientRect()[I]}px`, bt(this._element), this._element.classList.add(NN), this._element.classList.remove(Kg, Jj);
    for (const D of this._triggerArray) {
      const t = xI(D);
      t && !this._isShown(t) && this._addAriaAndCollapsedClass([D], !1);
    }
    this._isTransitioning = !0;
    const g = () => {
      this._isTransitioning = !1, this._element.classList.remove(NN), this._element.classList.add(Kg), X.trigger(this._element, xO);
    };
    this._element.style[I] = "", this._queueCallback(g, this._element, !0);
  }
  _isShown(A = this._element) {
    return A.classList.contains(Jj);
  }
  _configAfterMerge(A) {
    return A.toggle = Boolean(A.toggle), A.parent = qI(A.parent), A;
  }
  _getDimension() {
    return this._element.classList.contains(sO) ? cO : rO;
  }
  _initializeChildren() {
    if (!this._config.parent)
      return;
    const A = this._getFirstLevelChildren(Gu);
    for (const I of A) {
      const g = xI(I);
      g && this._addAriaAndCollapsedClass([I], this._isShown(g));
    }
  }
  _getFirstLevelChildren(A) {
    const I = zM.find(lO, this._config.parent);
    return zM.find(A, this._config.parent).filter((g) => !I.includes(g));
  }
  _addAriaAndCollapsedClass(A, I) {
    if (!!A.length)
      for (const g of A)
        g.classList.toggle(yO, !I), g.setAttribute("aria-expanded", I);
  }
  static jQueryInterface(A) {
    const I = {};
    return typeof A == "string" && /show|hide/.test(A) && (I.toggle = !1), this.each(function() {
      const g = sD.getOrCreateInstance(this, I);
      if (typeof A == "string") {
        if (typeof g[A] > "u")
          throw new TypeError(`No method named "${A}"`);
        g[A]();
      }
    });
  }
}
X.on(document, oO, Gu, function(M) {
  (M.target.tagName === "A" || M.delegateTarget && M.delegateTarget.tagName === "A") && M.preventDefault();
  const A = LE(this), I = zM.find(A);
  for (const g of I)
    sD.getOrCreateInstance(g, {
      toggle: !1
    }).toggle();
});
ZA(sD);
const JS = "dropdown", mO = "bs.dropdown", bg = `.${mO}`, L4 = ".data-api", UO = "Escape", VS = "Tab", hO = "ArrowUp", ZS = "ArrowDown", OO = 2, bO = `hide${bg}`, WO = `hidden${bg}`, kO = `show${bg}`, pO = `shown${bg}`, sE = `click${bg}${L4}`, cE = `keydown${bg}${L4}`, QO = `keyup${bg}${L4}`, Hg = "show", fO = "dropup", vO = "dropend", GO = "dropstart", JO = "dropup-center", VO = "dropdown-center", Tg = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)', ZO = `${Tg}.${Hg}`, mN = ".dropdown-menu", PO = ".navbar", BO = ".navbar-nav", FO = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", XO = GA() ? "top-end" : "top-start", RO = GA() ? "top-start" : "top-end", HO = GA() ? "bottom-end" : "bottom-start", _O = GA() ? "bottom-start" : "bottom-end", $O = GA() ? "left-start" : "right-start", qO = GA() ? "right-start" : "left-start", KO = "top", Mb = "bottom", Ab = {
  autoClose: !0,
  boundary: "clippingParents",
  display: "dynamic",
  offset: [0, 2],
  popperConfig: null,
  reference: "toggle"
}, Ib = {
  autoClose: "(boolean|string)",
  boundary: "(string|element)",
  display: "string",
  offset: "(array|string|function)",
  popperConfig: "(null|object|function)",
  reference: "(string|element|object)"
};
class _A extends KA {
  constructor(A, I) {
    super(A, I), this._popper = null, this._parent = this._element.parentNode, this._menu = zM.next(this._element, mN)[0] || zM.prev(this._element, mN)[0] || zM.findOne(mN, this._parent), this._inNavbar = this._detectNavbar();
  }
  static get Default() {
    return Ab;
  }
  static get DefaultType() {
    return Ib;
  }
  static get NAME() {
    return JS;
  }
  toggle() {
    return this._isShown() ? this.hide() : this.show();
  }
  show() {
    if (KI(this._element) || this._isShown())
      return;
    const A = {
      relatedTarget: this._element
    };
    if (!X.trigger(this._element, kO, A).defaultPrevented) {
      if (this._createPopper(), "ontouchstart" in document.documentElement && !this._parent.closest(BO))
        for (const g of [].concat(...document.body.children))
          X.on(g, "mouseover", LL);
      this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add(Hg), this._element.classList.add(Hg), X.trigger(this._element, pO, A);
    }
  }
  hide() {
    if (KI(this._element) || !this._isShown())
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
    if (!X.trigger(this._element, bO, A).defaultPrevented) {
      if ("ontouchstart" in document.documentElement)
        for (const g of [].concat(...document.body.children))
          X.off(g, "mouseover", LL);
      this._popper && this._popper.destroy(), this._menu.classList.remove(Hg), this._element.classList.remove(Hg), this._element.setAttribute("aria-expanded", "false"), yI.removeDataAttribute(this._menu, "popper"), X.trigger(this._element, WO, A);
    }
  }
  _getConfig(A) {
    if (A = super._getConfig(A), typeof A.reference == "object" && !oI(A.reference) && typeof A.reference.getBoundingClientRect != "function")
      throw new TypeError(`${JS.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
    return A;
  }
  _createPopper() {
    if (typeof tE > "u")
      throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
    let A = this._element;
    this._config.reference === "parent" ? A = this._parent : oI(this._config.reference) ? A = qI(this._config.reference) : typeof this._config.reference == "object" && (A = this._config.reference);
    const I = this._getPopperConfig();
    this._popper = D4(A, this._menu, I);
  }
  _isShown() {
    return this._menu.classList.contains(Hg);
  }
  _getPlacement() {
    const A = this._parent;
    if (A.classList.contains(vO))
      return $O;
    if (A.classList.contains(GO))
      return qO;
    if (A.classList.contains(JO))
      return KO;
    if (A.classList.contains(VO))
      return Mb;
    const I = getComputedStyle(this._menu).getPropertyValue("--bs-position").trim() === "end";
    return A.classList.contains(fO) ? I ? RO : XO : I ? _O : HO;
  }
  _detectNavbar() {
    return this._element.closest(PO) !== null;
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
    return (this._inNavbar || this._config.display === "static") && (yI.setDataAttribute(this._menu, "popper", "static"), A.modifiers = [{
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
    const g = zM.find(FO, this._menu).filter((D) => hD(D));
    !g.length || t4(g, I, A === ZS, !g.includes(I)).focus();
  }
  static jQueryInterface(A) {
    return this.each(function() {
      const I = _A.getOrCreateInstance(this, A);
      if (typeof A == "string") {
        if (typeof I[A] > "u")
          throw new TypeError(`No method named "${A}"`);
        I[A]();
      }
    });
  }
  static clearMenus(A) {
    if (A.button === OO || A.type === "keyup" && A.key !== VS)
      return;
    const I = zM.find(ZO);
    for (const g of I) {
      const D = _A.getInstance(g);
      if (!D || D._config.autoClose === !1)
        continue;
      const t = A.composedPath(), N = t.includes(D._menu);
      if (t.includes(D._element) || D._config.autoClose === "inside" && !N || D._config.autoClose === "outside" && N || D._menu.contains(A.target) && (A.type === "keyup" && A.key === VS || /input|select|option|textarea|form/i.test(A.target.tagName)))
        continue;
      const L = {
        relatedTarget: D._element
      };
      A.type === "click" && (L.clickEvent = A), D._completeHide(L);
    }
  }
  static dataApiKeydownHandler(A) {
    const I = /input|textarea/i.test(A.target.tagName), g = A.key === UO, D = [hO, ZS].includes(A.key);
    if (!D && !g || I && !g)
      return;
    A.preventDefault();
    const t = this.matches(Tg) ? this : zM.prev(this, Tg)[0] || zM.next(this, Tg)[0] || zM.findOne(Tg, A.delegateTarget.parentNode), N = _A.getOrCreateInstance(t);
    if (D) {
      A.stopPropagation(), N.show(), N._selectMenuItem(A);
      return;
    }
    N._isShown() && (A.stopPropagation(), N.hide(), t.focus());
  }
}
X.on(document, cE, Tg, _A.dataApiKeydownHandler);
X.on(document, cE, mN, _A.dataApiKeydownHandler);
X.on(document, sE, _A.clearMenus);
X.on(document, QO, _A.clearMenus);
X.on(document, sE, Tg, function(M) {
  M.preventDefault(), _A.getOrCreateInstance(this).toggle();
});
ZA(_A);
const PS = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", BS = ".sticky-top", LN = "padding-right", FS = "margin-right";
class Ju {
  constructor() {
    this._element = document.body;
  }
  getWidth() {
    const A = document.documentElement.clientWidth;
    return Math.abs(window.innerWidth - A);
  }
  hide() {
    const A = this.getWidth();
    this._disableOverFlow(), this._setElementAttributes(this._element, LN, (I) => I + A), this._setElementAttributes(PS, LN, (I) => I + A), this._setElementAttributes(BS, FS, (I) => I - A);
  }
  reset() {
    this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, LN), this._resetElementAttributes(PS, LN), this._resetElementAttributes(BS, FS);
  }
  isOverflowing() {
    return this.getWidth() > 0;
  }
  _disableOverFlow() {
    this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden";
  }
  _setElementAttributes(A, I, g) {
    const D = this.getWidth(), t = (N) => {
      if (N !== this._element && window.innerWidth > N.clientWidth + D)
        return;
      this._saveInitialAttribute(N, I);
      const L = window.getComputedStyle(N).getPropertyValue(I);
      N.style.setProperty(I, `${g(Number.parseFloat(L))}px`);
    };
    this._applyManipulationCallback(A, t);
  }
  _saveInitialAttribute(A, I) {
    const g = A.style.getPropertyValue(I);
    g && yI.setDataAttribute(A, I, g);
  }
  _resetElementAttributes(A, I) {
    const g = (D) => {
      const t = yI.getDataAttribute(D, I);
      if (t === null) {
        D.style.removeProperty(I);
        return;
      }
      yI.removeDataAttribute(D, I), D.style.setProperty(I, t);
    };
    this._applyManipulationCallback(A, g);
  }
  _applyManipulationCallback(A, I) {
    if (oI(A)) {
      I(A);
      return;
    }
    for (const g of zM.find(A, this._element))
      I(g);
  }
}
const rE = "backdrop", gb = "fade", XS = "show", RS = `mousedown.bs.${rE}`, Db = {
  className: "modal-backdrop",
  clickCallback: null,
  isAnimated: !1,
  isVisible: !0,
  rootElement: "body"
}, tb = {
  className: "string",
  clickCallback: "(function|null)",
  isAnimated: "boolean",
  isVisible: "boolean",
  rootElement: "(element|string)"
};
class zE extends Wt {
  constructor(A) {
    super(), this._config = this._getConfig(A), this._isAppended = !1, this._element = null;
  }
  static get Default() {
    return Db;
  }
  static get DefaultType() {
    return tb;
  }
  static get NAME() {
    return rE;
  }
  show(A) {
    if (!this._config.isVisible) {
      aI(A);
      return;
    }
    this._append();
    const I = this._getElement();
    this._config.isAnimated && bt(I), I.classList.add(XS), this._emulateAnimation(() => {
      aI(A);
    });
  }
  hide(A) {
    if (!this._config.isVisible) {
      aI(A);
      return;
    }
    this._getElement().classList.remove(XS), this._emulateAnimation(() => {
      this.dispose(), aI(A);
    });
  }
  dispose() {
    !this._isAppended || (X.off(this._element, RS), this._element.remove(), this._isAppended = !1);
  }
  _getElement() {
    if (!this._element) {
      const A = document.createElement("div");
      A.className = this._config.className, this._config.isAnimated && A.classList.add(gb), this._element = A;
    }
    return this._element;
  }
  _configAfterMerge(A) {
    return A.rootElement = qI(A.rootElement), A;
  }
  _append() {
    if (this._isAppended)
      return;
    const A = this._getElement();
    this._config.rootElement.append(A), X.on(A, RS, () => {
      aI(this._config.clickCallback);
    }), this._isAppended = !0;
  }
  _emulateAnimation(A) {
    eE(A, this._getElement(), this._config.isAnimated);
  }
}
const Nb = "focustrap", Lb = "bs.focustrap", uL = `.${Lb}`, jb = `focusin${uL}`, ub = `keydown.tab${uL}`, ib = "Tab", eb = "forward", HS = "backward", Sb = {
  autofocus: !0,
  trapElement: null
}, Cb = {
  autofocus: "boolean",
  trapElement: "element"
};
class YE extends Wt {
  constructor(A) {
    super(), this._config = this._getConfig(A), this._isActive = !1, this._lastTabNavDirection = null;
  }
  static get Default() {
    return Sb;
  }
  static get DefaultType() {
    return Cb;
  }
  static get NAME() {
    return Nb;
  }
  activate() {
    this._isActive || (this._config.autofocus && this._config.trapElement.focus(), X.off(document, uL), X.on(document, jb, (A) => this._handleFocusin(A)), X.on(document, ub, (A) => this._handleKeydown(A)), this._isActive = !0);
  }
  deactivate() {
    !this._isActive || (this._isActive = !1, X.off(document, uL));
  }
  _handleFocusin(A) {
    const {
      trapElement: I
    } = this._config;
    if (A.target === document || A.target === I || I.contains(A.target))
      return;
    const g = zM.focusableChildren(I);
    g.length === 0 ? I.focus() : this._lastTabNavDirection === HS ? g[g.length - 1].focus() : g[0].focus();
  }
  _handleKeydown(A) {
    A.key === ib && (this._lastTabNavDirection = A.shiftKey ? HS : eb);
  }
}
const ab = "modal", wb = "bs.modal", MI = `.${wb}`, Eb = ".data-api", Tb = "Escape", nb = `hide${MI}`, xb = `hidePrevented${MI}`, dE = `hidden${MI}`, mE = `show${MI}`, ob = `shown${MI}`, yb = `resize${MI}`, lb = `click.dismiss${MI}`, sb = `mousedown.dismiss${MI}`, cb = `keydown.dismiss${MI}`, rb = `click${MI}${Eb}`, _S = "modal-open", zb = "fade", $S = "show", Vj = "modal-static", Yb = ".modal.show", db = ".modal-dialog", mb = ".modal-body", Ub = '[data-bs-toggle="modal"]', hb = {
  backdrop: !0,
  focus: !0,
  keyboard: !0
}, Ob = {
  backdrop: "(boolean|string)",
  focus: "boolean",
  keyboard: "boolean"
};
class cD extends KA {
  constructor(A, I) {
    super(A, I), this._dialog = zM.findOne(db, this._element), this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = !1, this._isTransitioning = !1, this._scrollBar = new Ju(), this._addEventListeners();
  }
  static get Default() {
    return hb;
  }
  static get DefaultType() {
    return Ob;
  }
  static get NAME() {
    return ab;
  }
  toggle(A) {
    return this._isShown ? this.hide() : this.show(A);
  }
  show(A) {
    this._isShown || this._isTransitioning || X.trigger(this._element, mE, {
      relatedTarget: A
    }).defaultPrevented || (this._isShown = !0, this._isTransitioning = !0, this._scrollBar.hide(), document.body.classList.add(_S), this._adjustDialog(), this._backdrop.show(() => this._showElement(A)));
  }
  hide() {
    !this._isShown || this._isTransitioning || X.trigger(this._element, nb).defaultPrevented || (this._isShown = !1, this._isTransitioning = !0, this._focustrap.deactivate(), this._element.classList.remove($S), this._queueCallback(() => this._hideModal(), this._element, this._isAnimated()));
  }
  dispose() {
    for (const A of [window, this._dialog])
      X.off(A, MI);
    this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
  }
  handleUpdate() {
    this._adjustDialog();
  }
  _initializeBackDrop() {
    return new zE({
      isVisible: Boolean(this._config.backdrop),
      isAnimated: this._isAnimated()
    });
  }
  _initializeFocusTrap() {
    return new YE({
      trapElement: this._element
    });
  }
  _showElement(A) {
    document.body.contains(this._element) || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0;
    const I = zM.findOne(mb, this._dialog);
    I && (I.scrollTop = 0), bt(this._element), this._element.classList.add($S);
    const g = () => {
      this._config.focus && this._focustrap.activate(), this._isTransitioning = !1, X.trigger(this._element, ob, {
        relatedTarget: A
      });
    };
    this._queueCallback(g, this._dialog, this._isAnimated());
  }
  _addEventListeners() {
    X.on(this._element, cb, (A) => {
      if (A.key === Tb) {
        if (this._config.keyboard) {
          A.preventDefault(), this.hide();
          return;
        }
        this._triggerBackdropTransition();
      }
    }), X.on(window, yb, () => {
      this._isShown && !this._isTransitioning && this._adjustDialog();
    }), X.on(this._element, sb, (A) => {
      X.one(this._element, lb, (I) => {
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
      document.body.classList.remove(_S), this._resetAdjustments(), this._scrollBar.reset(), X.trigger(this._element, dE);
    });
  }
  _isAnimated() {
    return this._element.classList.contains(zb);
  }
  _triggerBackdropTransition() {
    if (X.trigger(this._element, xb).defaultPrevented)
      return;
    const I = this._element.scrollHeight > document.documentElement.clientHeight, g = this._element.style.overflowY;
    g === "hidden" || this._element.classList.contains(Vj) || (I || (this._element.style.overflowY = "hidden"), this._element.classList.add(Vj), this._queueCallback(() => {
      this._element.classList.remove(Vj), this._queueCallback(() => {
        this._element.style.overflowY = g;
      }, this._dialog);
    }, this._dialog), this._element.focus());
  }
  _adjustDialog() {
    const A = this._element.scrollHeight > document.documentElement.clientHeight, I = this._scrollBar.getWidth(), g = I > 0;
    if (g && !A) {
      const D = GA() ? "paddingLeft" : "paddingRight";
      this._element.style[D] = `${I}px`;
    }
    if (!g && A) {
      const D = GA() ? "paddingRight" : "paddingLeft";
      this._element.style[D] = `${I}px`;
    }
  }
  _resetAdjustments() {
    this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
  }
  static jQueryInterface(A, I) {
    return this.each(function() {
      const g = cD.getOrCreateInstance(this, A);
      if (typeof A == "string") {
        if (typeof g[A] > "u")
          throw new TypeError(`No method named "${A}"`);
        g[A](I);
      }
    });
  }
}
X.on(document, rb, Ub, function(M) {
  const A = xI(this);
  ["A", "AREA"].includes(this.tagName) && M.preventDefault(), X.one(A, mE, (D) => {
    D.defaultPrevented || X.one(A, dE, () => {
      hD(this) && this.focus();
    });
  });
  const I = zM.findOne(Yb);
  I && cD.getInstance(I).hide(), cD.getOrCreateInstance(A).toggle(this);
});
PL(cD);
ZA(cD);
const bb = "offcanvas", Wb = "bs.offcanvas", pI = `.${Wb}`, UE = ".data-api", kb = `load${pI}${UE}`, pb = "Escape", qS = "show", KS = "showing", MC = "hiding", Qb = "offcanvas-backdrop", hE = ".offcanvas.show", fb = `show${pI}`, vb = `shown${pI}`, Gb = `hide${pI}`, AC = `hidePrevented${pI}`, OE = `hidden${pI}`, Jb = `resize${pI}`, Vb = `click${pI}${UE}`, Zb = `keydown.dismiss${pI}`, Pb = '[data-bs-toggle="offcanvas"]', Bb = {
  backdrop: !0,
  keyboard: !0,
  scroll: !1
}, Fb = {
  backdrop: "(boolean|string)",
  keyboard: "boolean",
  scroll: "boolean"
};
class UI extends KA {
  constructor(A, I) {
    super(A, I), this._isShown = !1, this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._addEventListeners();
  }
  static get Default() {
    return Bb;
  }
  static get DefaultType() {
    return Fb;
  }
  static get NAME() {
    return bb;
  }
  toggle(A) {
    return this._isShown ? this.hide() : this.show(A);
  }
  show(A) {
    if (this._isShown || X.trigger(this._element, fb, {
      relatedTarget: A
    }).defaultPrevented)
      return;
    this._isShown = !0, this._backdrop.show(), this._config.scroll || new Ju().hide(), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add(KS);
    const g = () => {
      (!this._config.scroll || this._config.backdrop) && this._focustrap.activate(), this._element.classList.add(qS), this._element.classList.remove(KS), X.trigger(this._element, vb, {
        relatedTarget: A
      });
    };
    this._queueCallback(g, this._element, !0);
  }
  hide() {
    if (!this._isShown || X.trigger(this._element, Gb).defaultPrevented)
      return;
    this._focustrap.deactivate(), this._element.blur(), this._isShown = !1, this._element.classList.add(MC), this._backdrop.hide();
    const I = () => {
      this._element.classList.remove(qS, MC), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._config.scroll || new Ju().reset(), X.trigger(this._element, OE);
    };
    this._queueCallback(I, this._element, !0);
  }
  dispose() {
    this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
  }
  _initializeBackDrop() {
    const A = () => {
      if (this._config.backdrop === "static") {
        X.trigger(this._element, AC);
        return;
      }
      this.hide();
    }, I = Boolean(this._config.backdrop);
    return new zE({
      className: Qb,
      isVisible: I,
      isAnimated: !0,
      rootElement: this._element.parentNode,
      clickCallback: I ? A : null
    });
  }
  _initializeFocusTrap() {
    return new YE({
      trapElement: this._element
    });
  }
  _addEventListeners() {
    X.on(this._element, Zb, (A) => {
      if (A.key === pb) {
        if (!this._config.keyboard) {
          X.trigger(this._element, AC);
          return;
        }
        this.hide();
      }
    });
  }
  static jQueryInterface(A) {
    return this.each(function() {
      const I = UI.getOrCreateInstance(this, A);
      if (typeof A == "string") {
        if (I[A] === void 0 || A.startsWith("_") || A === "constructor")
          throw new TypeError(`No method named "${A}"`);
        I[A](this);
      }
    });
  }
}
X.on(document, Vb, Pb, function(M) {
  const A = xI(this);
  if (["A", "AREA"].includes(this.tagName) && M.preventDefault(), KI(this))
    return;
  X.one(A, OE, () => {
    hD(this) && this.focus();
  });
  const I = zM.findOne(hE);
  I && I !== A && UI.getInstance(I).hide(), UI.getOrCreateInstance(A).toggle(this);
});
X.on(window, kb, () => {
  for (const M of zM.find(hE))
    UI.getOrCreateInstance(M).show();
});
X.on(window, Jb, () => {
  for (const M of zM.find("[aria-modal][class*=show][class*=offcanvas-]"))
    getComputedStyle(M).position !== "fixed" && UI.getOrCreateInstance(M).hide();
});
PL(UI);
ZA(UI);
const Xb = /* @__PURE__ */ new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]), Rb = /^aria-[\w-]*$/i, Hb = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i, _b = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i, $b = (M, A) => {
  const I = M.nodeName.toLowerCase();
  return A.includes(I) ? Xb.has(I) ? Boolean(Hb.test(M.nodeValue) || _b.test(M.nodeValue)) : !0 : A.filter((g) => g instanceof RegExp).some((g) => g.test(I));
}, bE = {
  "*": ["class", "dir", "id", "lang", "role", Rb],
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
function qb(M, A, I) {
  if (!M.length)
    return M;
  if (I && typeof I == "function")
    return I(M);
  const D = new window.DOMParser().parseFromString(M, "text/html"), t = [].concat(...D.body.querySelectorAll("*"));
  for (const N of t) {
    const L = N.nodeName.toLowerCase();
    if (!Object.keys(A).includes(L)) {
      N.remove();
      continue;
    }
    const j = [].concat(...N.attributes), i = [].concat(A["*"] || [], A[L] || []);
    for (const u of j)
      $b(u, i) || N.removeAttribute(u.nodeName);
  }
  return D.body.innerHTML;
}
const Kb = "TemplateFactory", M3 = {
  allowList: bE,
  content: {},
  extraClass: "",
  html: !1,
  sanitize: !0,
  sanitizeFn: null,
  template: "<div></div>"
}, A3 = {
  allowList: "object",
  content: "object",
  extraClass: "(string|function)",
  html: "boolean",
  sanitize: "boolean",
  sanitizeFn: "(null|function)",
  template: "string"
}, I3 = {
  entry: "(string|element|function|null)",
  selector: "(string|element)"
};
class g3 extends Wt {
  constructor(A) {
    super(), this._config = this._getConfig(A);
  }
  static get Default() {
    return M3;
  }
  static get DefaultType() {
    return A3;
  }
  static get NAME() {
    return Kb;
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
    for (const [D, t] of Object.entries(this._config.content))
      this._setContent(A, t, D);
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
      }, I3);
  }
  _setContent(A, I, g) {
    const D = zM.findOne(g, A);
    if (!!D) {
      if (I = this._resolvePossibleFunction(I), !I) {
        D.remove();
        return;
      }
      if (oI(I)) {
        this._putElementInTemplate(qI(I), D);
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
    return this._config.sanitize ? qb(A, this._config.allowList, this._config.sanitizeFn) : A;
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
const D3 = "tooltip", t3 = /* @__PURE__ */ new Set(["sanitize", "allowList", "sanitizeFn"]), Zj = "fade", N3 = "modal", jN = "show", L3 = ".tooltip-inner", IC = `.${N3}`, gC = "hide.bs.modal", fD = "hover", Pj = "focus", j3 = "click", u3 = "manual", i3 = "hide", e3 = "hidden", S3 = "show", C3 = "shown", a3 = "inserted", w3 = "click", E3 = "focusin", T3 = "focusout", n3 = "mouseenter", x3 = "mouseleave", o3 = {
  AUTO: "auto",
  TOP: "top",
  RIGHT: GA() ? "left" : "right",
  BOTTOM: "bottom",
  LEFT: GA() ? "right" : "left"
}, y3 = {
  allowList: bE,
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
}, l3 = {
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
class lI extends KA {
  constructor(A, I) {
    if (typeof tE > "u")
      throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
    super(A, I), this._isEnabled = !0, this._timeout = 0, this._isHovered = null, this._activeTrigger = {}, this._popper = null, this._templateFactory = null, this._newContent = null, this.tip = null, this._setListeners(), this._config.selector || this._fixTitle();
  }
  static get Default() {
    return y3;
  }
  static get DefaultType() {
    return l3;
  }
  static get NAME() {
    return D3;
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
    clearTimeout(this._timeout), X.off(this._element.closest(IC), gC, this._hideModalHandler), this.tip && this.tip.remove(), this._element.getAttribute("data-bs-original-title") && this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title")), this._disposePopper(), super.dispose();
  }
  show() {
    if (this._element.style.display === "none")
      throw new Error("Please use show on visible elements");
    if (!(this._isWithContent() && this._isEnabled))
      return;
    const A = X.trigger(this._element, this.constructor.eventName(S3)), g = (uE(this._element) || this._element.ownerDocument.documentElement).contains(this._element);
    if (A.defaultPrevented || !g)
      return;
    this.tip && (this.tip.remove(), this.tip = null);
    const D = this._getTipElement();
    this._element.setAttribute("aria-describedby", D.getAttribute("id"));
    const {
      container: t
    } = this._config;
    if (this._element.ownerDocument.documentElement.contains(this.tip) || (t.append(D), X.trigger(this._element, this.constructor.eventName(a3))), this._popper ? this._popper.update() : this._popper = this._createPopper(D), D.classList.add(jN), "ontouchstart" in document.documentElement)
      for (const L of [].concat(...document.body.children))
        X.on(L, "mouseover", LL);
    const N = () => {
      X.trigger(this._element, this.constructor.eventName(C3)), this._isHovered === !1 && this._leave(), this._isHovered = !1;
    };
    this._queueCallback(N, this.tip, this._isAnimated());
  }
  hide() {
    if (!this._isShown() || X.trigger(this._element, this.constructor.eventName(i3)).defaultPrevented)
      return;
    const I = this._getTipElement();
    if (I.classList.remove(jN), "ontouchstart" in document.documentElement)
      for (const D of [].concat(...document.body.children))
        X.off(D, "mouseover", LL);
    this._activeTrigger[j3] = !1, this._activeTrigger[Pj] = !1, this._activeTrigger[fD] = !1, this._isHovered = null;
    const g = () => {
      this._isWithActiveTrigger() || (this._isHovered || I.remove(), this._element.removeAttribute("aria-describedby"), X.trigger(this._element, this.constructor.eventName(e3)), this._disposePopper());
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
    I.classList.remove(Zj, jN), I.classList.add(`bs-${this.constructor.NAME}-auto`);
    const g = Lh(this.constructor.NAME).toString();
    return I.setAttribute("id", g), this._isAnimated() && I.classList.add(Zj), I;
  }
  setContent(A) {
    this._newContent = A, this._isShown() && (this._disposePopper(), this.show());
  }
  _getTemplateFactory(A) {
    return this._templateFactory ? this._templateFactory.changeContent(A) : this._templateFactory = new g3({
      ...this._config,
      content: A,
      extraClass: this._resolvePossibleFunction(this._config.customClass)
    }), this._templateFactory;
  }
  _getContentForTemplate() {
    return {
      [L3]: this._getTitle()
    };
  }
  _getTitle() {
    return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute("data-bs-original-title");
  }
  _initializeOnDelegatedTarget(A) {
    return this.constructor.getOrCreateInstance(A.delegateTarget, this._getDelegateConfig());
  }
  _isAnimated() {
    return this._config.animation || this.tip && this.tip.classList.contains(Zj);
  }
  _isShown() {
    return this.tip && this.tip.classList.contains(jN);
  }
  _createPopper(A) {
    const I = typeof this._config.placement == "function" ? this._config.placement.call(this, A, this._element) : this._config.placement, g = o3[I.toUpperCase()];
    return D4(this._element, A, this._getPopperConfig(g));
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
        X.on(this._element, this.constructor.eventName(w3), this._config.selector, (g) => {
          this._initializeOnDelegatedTarget(g).toggle();
        });
      else if (I !== u3) {
        const g = I === fD ? this.constructor.eventName(n3) : this.constructor.eventName(E3), D = I === fD ? this.constructor.eventName(x3) : this.constructor.eventName(T3);
        X.on(this._element, g, this._config.selector, (t) => {
          const N = this._initializeOnDelegatedTarget(t);
          N._activeTrigger[t.type === "focusin" ? Pj : fD] = !0, N._enter();
        }), X.on(this._element, D, this._config.selector, (t) => {
          const N = this._initializeOnDelegatedTarget(t);
          N._activeTrigger[t.type === "focusout" ? Pj : fD] = N._element.contains(t.relatedTarget), N._leave();
        });
      }
    this._hideModalHandler = () => {
      this._element && this.hide();
    }, X.on(this._element.closest(IC), gC, this._hideModalHandler);
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
    const I = yI.getDataAttributes(this._element);
    for (const g of Object.keys(I))
      t3.has(g) && delete I[g];
    return A = {
      ...I,
      ...typeof A == "object" && A ? A : {}
    }, A = this._mergeConfigObj(A), A = this._configAfterMerge(A), this._typeCheckConfig(A), A;
  }
  _configAfterMerge(A) {
    return A.container = A.container === !1 ? document.body : qI(A.container), typeof A.delay == "number" && (A.delay = {
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
      const I = lI.getOrCreateInstance(this, A);
      if (typeof A == "string") {
        if (typeof I[A] > "u")
          throw new TypeError(`No method named "${A}"`);
        I[A]();
      }
    });
  }
}
ZA(lI);
const s3 = "popover", c3 = ".popover-header", r3 = ".popover-body", z3 = {
  ...lI.Default,
  content: "",
  offset: [0, 8],
  placement: "right",
  template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
  trigger: "click"
}, Y3 = {
  ...lI.DefaultType,
  content: "(null|string|element|function)"
};
class rD extends lI {
  static get Default() {
    return z3;
  }
  static get DefaultType() {
    return Y3;
  }
  static get NAME() {
    return s3;
  }
  _isWithContent() {
    return this._getTitle() || this._getContent();
  }
  _getContentForTemplate() {
    return {
      [c3]: this._getTitle(),
      [r3]: this._getContent()
    };
  }
  _getContent() {
    return this._resolvePossibleFunction(this._config.content);
  }
  static jQueryInterface(A) {
    return this.each(function() {
      const I = rD.getOrCreateInstance(this, A);
      if (typeof A == "string") {
        if (typeof I[A] > "u")
          throw new TypeError(`No method named "${A}"`);
        I[A]();
      }
    });
  }
}
ZA(rD);
const d3 = "scrollspy", m3 = "bs.scrollspy", j4 = `.${m3}`, U3 = ".data-api", h3 = `activate${j4}`, DC = `click${j4}`, O3 = `load${j4}${U3}`, b3 = "dropdown-item", Jg = "active", W3 = '[data-bs-spy="scroll"]', Bj = "[href]", k3 = ".nav, .list-group", tC = ".nav-link", p3 = ".nav-item", Q3 = ".list-group-item", f3 = `${tC}, ${p3} > ${tC}, ${Q3}`, v3 = ".dropdown", G3 = ".dropdown-toggle", J3 = {
  offset: null,
  rootMargin: "0px 0px -25%",
  smoothScroll: !1,
  target: null,
  threshold: [0.1, 0.5, 1]
}, V3 = {
  offset: "(number|null)",
  rootMargin: "string",
  smoothScroll: "boolean",
  target: "element",
  threshold: "array"
};
class FL extends KA {
  constructor(A, I) {
    super(A, I), this._targetLinks = /* @__PURE__ */ new Map(), this._observableSections = /* @__PURE__ */ new Map(), this._rootElement = getComputedStyle(this._element).overflowY === "visible" ? null : this._element, this._activeTarget = null, this._observer = null, this._previousScrollData = {
      visibleEntryTop: 0,
      parentScrollTop: 0
    }, this.refresh();
  }
  static get Default() {
    return J3;
  }
  static get DefaultType() {
    return V3;
  }
  static get NAME() {
    return d3;
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
    return A.target = qI(A.target) || document.body, A.rootMargin = A.offset ? `${A.offset}px 0px -30%` : A.rootMargin, typeof A.threshold == "string" && (A.threshold = A.threshold.split(",").map((I) => Number.parseFloat(I))), A;
  }
  _maybeEnableSmoothScroll() {
    !this._config.smoothScroll || (X.off(this._config.target, DC), X.on(this._config.target, DC, Bj, (A) => {
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
    const I = (N) => this._targetLinks.get(`#${N.target.id}`), g = (N) => {
      this._previousScrollData.visibleEntryTop = N.target.offsetTop, this._process(I(N));
    }, D = (this._rootElement || document.documentElement).scrollTop, t = D >= this._previousScrollData.parentScrollTop;
    this._previousScrollData.parentScrollTop = D;
    for (const N of A) {
      if (!N.isIntersecting) {
        this._activeTarget = null, this._clearActiveClass(I(N));
        continue;
      }
      const L = N.target.offsetTop >= this._previousScrollData.visibleEntryTop;
      if (t && L) {
        if (g(N), !D)
          return;
        continue;
      }
      !t && !L && g(N);
    }
  }
  _initializeTargetsAndObservables() {
    this._targetLinks = /* @__PURE__ */ new Map(), this._observableSections = /* @__PURE__ */ new Map();
    const A = zM.find(Bj, this._config.target);
    for (const I of A) {
      if (!I.hash || KI(I))
        continue;
      const g = zM.findOne(I.hash, this._element);
      hD(g) && (this._targetLinks.set(I.hash, I), this._observableSections.set(I.hash, g));
    }
  }
  _process(A) {
    this._activeTarget !== A && (this._clearActiveClass(this._config.target), this._activeTarget = A, A.classList.add(Jg), this._activateParents(A), X.trigger(this._element, h3, {
      relatedTarget: A
    }));
  }
  _activateParents(A) {
    if (A.classList.contains(b3)) {
      zM.findOne(G3, A.closest(v3)).classList.add(Jg);
      return;
    }
    for (const I of zM.parents(A, k3))
      for (const g of zM.prev(I, f3))
        g.classList.add(Jg);
  }
  _clearActiveClass(A) {
    A.classList.remove(Jg);
    const I = zM.find(`${Bj}.${Jg}`, A);
    for (const g of I)
      g.classList.remove(Jg);
  }
  static jQueryInterface(A) {
    return this.each(function() {
      const I = FL.getOrCreateInstance(this, A);
      if (typeof A == "string") {
        if (I[A] === void 0 || A.startsWith("_") || A === "constructor")
          throw new TypeError(`No method named "${A}"`);
        I[A]();
      }
    });
  }
}
X.on(window, O3, () => {
  for (const M of zM.find(W3))
    FL.getOrCreateInstance(M);
});
ZA(FL);
const Z3 = "tab", P3 = "bs.tab", Wg = `.${P3}`, B3 = `hide${Wg}`, F3 = `hidden${Wg}`, X3 = `show${Wg}`, R3 = `shown${Wg}`, H3 = `click${Wg}`, _3 = `keydown${Wg}`, $3 = `load${Wg}`, q3 = "ArrowLeft", NC = "ArrowRight", K3 = "ArrowUp", LC = "ArrowDown", ng = "active", jC = "fade", Fj = "show", MW = "dropdown", AW = ".dropdown-toggle", IW = ".dropdown-menu", Xj = ":not(.dropdown-toggle)", gW = '.list-group, .nav, [role="tablist"]', DW = ".nav-item, .list-group-item", tW = `.nav-link${Xj}, .list-group-item${Xj}, [role="tab"]${Xj}`, WE = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', Rj = `${tW}, ${WE}`, NW = `.${ng}[data-bs-toggle="tab"], .${ng}[data-bs-toggle="pill"], .${ng}[data-bs-toggle="list"]`;
class zD extends KA {
  constructor(A) {
    super(A), this._parent = this._element.closest(gW), this._parent && (this._setInitialAttributes(this._parent, this._getChildren()), X.on(this._element, _3, (I) => this._keydown(I)));
  }
  static get NAME() {
    return Z3;
  }
  show() {
    const A = this._element;
    if (this._elemIsActive(A))
      return;
    const I = this._getActiveElem(), g = I ? X.trigger(I, B3, {
      relatedTarget: A
    }) : null;
    X.trigger(A, X3, {
      relatedTarget: I
    }).defaultPrevented || g && g.defaultPrevented || (this._deactivate(I, A), this._activate(A, I));
  }
  _activate(A, I) {
    if (!A)
      return;
    A.classList.add(ng), this._activate(xI(A));
    const g = () => {
      if (A.getAttribute("role") !== "tab") {
        A.classList.add(Fj);
        return;
      }
      A.removeAttribute("tabindex"), A.setAttribute("aria-selected", !0), this._toggleDropDown(A, !0), X.trigger(A, R3, {
        relatedTarget: I
      });
    };
    this._queueCallback(g, A, A.classList.contains(jC));
  }
  _deactivate(A, I) {
    if (!A)
      return;
    A.classList.remove(ng), A.blur(), this._deactivate(xI(A));
    const g = () => {
      if (A.getAttribute("role") !== "tab") {
        A.classList.remove(Fj);
        return;
      }
      A.setAttribute("aria-selected", !1), A.setAttribute("tabindex", "-1"), this._toggleDropDown(A, !1), X.trigger(A, F3, {
        relatedTarget: I
      });
    };
    this._queueCallback(g, A, A.classList.contains(jC));
  }
  _keydown(A) {
    if (![q3, NC, K3, LC].includes(A.key))
      return;
    A.stopPropagation(), A.preventDefault();
    const I = [NC, LC].includes(A.key), g = t4(this._getChildren().filter((D) => !KI(D)), A.target, I, !0);
    g && (g.focus({
      preventScroll: !0
    }), zD.getOrCreateInstance(g).show());
  }
  _getChildren() {
    return zM.find(Rj, this._parent);
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
    const I = xI(A);
    !I || (this._setAttributeIfNotExists(I, "role", "tabpanel"), A.id && this._setAttributeIfNotExists(I, "aria-labelledby", `#${A.id}`));
  }
  _toggleDropDown(A, I) {
    const g = this._getOuterElement(A);
    if (!g.classList.contains(MW))
      return;
    const D = (t, N) => {
      const L = zM.findOne(t, g);
      L && L.classList.toggle(N, I);
    };
    D(AW, ng), D(IW, Fj), g.setAttribute("aria-expanded", I);
  }
  _setAttributeIfNotExists(A, I, g) {
    A.hasAttribute(I) || A.setAttribute(I, g);
  }
  _elemIsActive(A) {
    return A.classList.contains(ng);
  }
  _getInnerElement(A) {
    return A.matches(Rj) ? A : zM.findOne(Rj, A);
  }
  _getOuterElement(A) {
    return A.closest(DW) || A;
  }
  static jQueryInterface(A) {
    return this.each(function() {
      const I = zD.getOrCreateInstance(this);
      if (typeof A == "string") {
        if (I[A] === void 0 || A.startsWith("_") || A === "constructor")
          throw new TypeError(`No method named "${A}"`);
        I[A]();
      }
    });
  }
}
X.on(document, H3, WE, function(M) {
  ["A", "AREA"].includes(this.tagName) && M.preventDefault(), !KI(this) && zD.getOrCreateInstance(this).show();
});
X.on(window, $3, () => {
  for (const M of zM.find(NW))
    zD.getOrCreateInstance(M);
});
ZA(zD);
const LW = "toast", jW = "bs.toast", tg = `.${jW}`, uW = `mouseover${tg}`, iW = `mouseout${tg}`, eW = `focusin${tg}`, SW = `focusout${tg}`, CW = `hide${tg}`, aW = `hidden${tg}`, wW = `show${tg}`, EW = `shown${tg}`, TW = "fade", uC = "hide", uN = "show", iN = "showing", nW = {
  animation: "boolean",
  autohide: "boolean",
  delay: "number"
}, xW = {
  animation: !0,
  autohide: !0,
  delay: 5e3
};
class XL extends KA {
  constructor(A, I) {
    super(A, I), this._timeout = null, this._hasMouseInteraction = !1, this._hasKeyboardInteraction = !1, this._setListeners();
  }
  static get Default() {
    return xW;
  }
  static get DefaultType() {
    return nW;
  }
  static get NAME() {
    return LW;
  }
  show() {
    if (X.trigger(this._element, wW).defaultPrevented)
      return;
    this._clearTimeout(), this._config.animation && this._element.classList.add(TW);
    const I = () => {
      this._element.classList.remove(iN), X.trigger(this._element, EW), this._maybeScheduleHide();
    };
    this._element.classList.remove(uC), bt(this._element), this._element.classList.add(uN, iN), this._queueCallback(I, this._element, this._config.animation);
  }
  hide() {
    if (!this.isShown() || X.trigger(this._element, CW).defaultPrevented)
      return;
    const I = () => {
      this._element.classList.add(uC), this._element.classList.remove(iN, uN), X.trigger(this._element, aW);
    };
    this._element.classList.add(iN), this._queueCallback(I, this._element, this._config.animation);
  }
  dispose() {
    this._clearTimeout(), this.isShown() && this._element.classList.remove(uN), super.dispose();
  }
  isShown() {
    return this._element.classList.contains(uN);
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
    X.on(this._element, uW, (A) => this._onInteraction(A, !0)), X.on(this._element, iW, (A) => this._onInteraction(A, !1)), X.on(this._element, eW, (A) => this._onInteraction(A, !0)), X.on(this._element, SW, (A) => this._onInteraction(A, !1));
  }
  _clearTimeout() {
    clearTimeout(this._timeout), this._timeout = null;
  }
  static jQueryInterface(A) {
    return this.each(function() {
      const I = XL.getOrCreateInstance(this, A);
      if (typeof A == "string") {
        if (typeof I[A] > "u")
          throw new TypeError(`No method named "${A}"`);
        I[A](this);
      }
    });
  }
}
PL(XL);
ZA(XL);
const kE = /* @__PURE__ */ f({
  __name: "BCollapse",
  props: {
    accordion: null,
    id: { default: wI() },
    modelValue: { default: !1 },
    tag: { default: "div" },
    toggle: { default: !1 },
    visible: { default: !1 },
    isNav: { default: !1 }
  },
  emits: ["update:modelValue", "show", "shown", "hide", "hidden"],
  setup(M, { emit: A }) {
    const I = M, g = c(y(I, "modelValue")), D = c(y(I, "toggle")), t = c(y(I, "visible")), N = c(y(I, "isNav")), L = gM(), j = gM(), i = x(() => ({
      show: g.value,
      "navbar-collapse": N.value
    })), u = () => A("update:modelValue", !1);
    return dM(
      () => g.value,
      (e) => {
        var C, a;
        e ? (C = j.value) == null || C.show() : (a = j.value) == null || a.hide();
      }
    ), dM(
      () => t.value,
      (e) => {
        var C, a;
        e ? (A("update:modelValue", !!e), (C = j.value) == null || C.show()) : (A("update:modelValue", !!e), (a = j.value) == null || a.hide());
      }
    ), NA(L, "show.bs.collapse", () => {
      A("show"), A("update:modelValue", !0);
    }), NA(L, "hide.bs.collapse", () => {
      A("hide"), A("update:modelValue", !1);
    }), NA(L, "shown.bs.collapse", () => A("shown")), NA(L, "hidden.bs.collapse", () => A("hidden")), $M(() => {
      var e;
      j.value = new sD(L.value, {
        parent: I.accordion ? `#${I.accordion}` : void 0,
        toggle: D.value
      }), (t.value || g.value) && (A("update:modelValue", !0), (e = j.value) == null || e.show());
    }), (e, C) => (T(), V(EM(M.tag), {
      id: M.id,
      ref_key: "element",
      ref: L,
      class: B(["collapse", S(i)]),
      "data-bs-parent": M.accordion || null,
      "is-nav": S(N)
    }, {
      default: b(() => [
        Q(e.$slots, "default", {
          visible: S(g),
          close: u
        })
      ]),
      _: 3
    }, 8, ["id", "class", "data-bs-parent", "is-nav"]));
  }
}), oW = {
  mounted(M, A) {
    let I = A.value;
    Object.keys(A.modifiers).length > 0 && ([I] = Object.keys(A.modifiers)), M.setAttribute("data-bs-toggle", "modal"), M.setAttribute("data-bs-target", `#${I}`);
  }
}, yW = {
  mounted(M, A) {
    let I = "right";
    const g = [];
    A.modifiers.left ? I = "left" : A.modifiers.right ? I = "right" : A.modifiers.bottom ? I = "bottom" : A.modifiers.top && (I = "top"), A.modifiers.manual ? g.push("manual") : (A.modifiers.click && g.push("click"), A.modifiers.hover && g.push("hover"), A.modifiers.focus && g.push("focus")), M.setAttribute("data-bs-toggle", "popover"), new rD(M, {
      trigger: g.length === 0 ? "click" : g.join(" "),
      placement: I,
      content: A.value
    });
  },
  unmounted(M) {
    const A = rD.getInstance(M);
    A == null || A.dispose();
  }
}, lW = (M) => {
  if (M.classList.contains("offcanvas"))
    return "offcanvas";
  if (M.classList.contains("collapse"))
    return "collapse";
  throw Error("Couldn't resolve toggle type");
}, sW = (M, A) => {
  const { modifiers: I, arg: g, value: D } = M, t = Object.keys(I || {}), N = typeof D == "string" ? D.split(zN) : D;
  if (eU(A.tagName, "a")) {
    const L = Zi(A, "href") || "";
    Xm.test(L) && t.push(L.replace(Fm, ""));
  }
  return Array.prototype.concat.apply([], [g, N]).forEach((L) => typeof L == "string" && t.push(L)), t.filter((L, j, i) => L && i.indexOf(L) === j);
}, u4 = {
  mounted(M, A) {
    const I = sW(A, M), g = [];
    let D = "data-bs-target";
    M.tagName === "a" && (D = "href");
    for (let t = 0; t < I.length; t++) {
      const N = I[t], L = document.getElementById(N);
      L && (M.setAttribute("data-bs-toggle", lW(L)), g.push(`#${N}`));
    }
    g.length > 0 && M.setAttribute(D, g.join(","));
  }
}, cW = (M, A) => {
  if (A != null && A.trigger)
    return A.trigger;
  if (M.manual)
    return "manual";
  const I = [];
  return M.click && I.push("click"), M.hover && I.push("hover"), M.focus && I.push("focus"), I.length > 0 ? I.join(" ") : "hover focus";
}, rW = (M, A) => A != null && A.placement ? A.placement : M.left ? "left" : M.right ? "right" : M.bottom ? "bottom" : "top", zW = (M) => M != null && M.delay ? M.delay : 0, iC = (M) => typeof M == "object" ? M == null ? void 0 : M.title : M, YW = {
  beforeMount(M, A) {
    M.setAttribute("data-bs-toggle", "tooltip"), M.getAttribute("title") || M.setAttribute("title", iC(A.value).toString());
    const I = /<("[^"]*"|'[^']*'|[^'">])*>/.test(M.title), g = cW(A.modifiers, A.value), D = rW(A.modifiers, A.value), t = zW(A.value), N = M.getAttribute("title");
    new lI(M, {
      trigger: g,
      placement: D,
      delay: t,
      html: I
    }), N && M.setAttribute("data-bs-original-title", N);
  },
  updated(M, A) {
    M.getAttribute("title") || M.setAttribute("title", iC(A.value).toString());
    const I = M.getAttribute("title"), g = M.getAttribute("data-bs-original-title"), D = lI.getInstance(M);
    M.removeAttribute("title"), I && I !== g && (D == null || D.setContent({ ".tooltip-inner": I }), M.setAttribute("data-bs-original-title", I));
  },
  unmounted(M) {
    const A = lI.getInstance(M);
    A == null || A.dispose();
  }
}, UN = /* @__PURE__ */ new Map(), pE = (M) => {
  if (UN.has(M)) {
    const A = UN.get(M);
    A && A.stop && A.stop(), UN.delete(M);
  }
}, eC = (M, A) => {
  const I = {
    margin: "0px",
    once: !1,
    callback: A.value
  };
  Object.keys(A.modifiers).forEach((D) => {
    Number.isInteger(D) ? I.margin = `${D}px` : D.toLowerCase() === "once" && (I.once = !0);
  }), pE(M);
  const g = new mW(
    M,
    I.margin,
    I.once,
    I.callback,
    A.instance
  );
  UN.set(M, g);
}, dW = {
  beforeMount(M, A) {
    eC(M, A);
  },
  updated(M, A) {
    eC(M, A);
  },
  unmounted(M) {
    pE(M);
  }
};
class mW {
  constructor(A, I, g, D, t) {
    HM(this, "element");
    HM(this, "margin");
    HM(this, "once");
    HM(this, "callback");
    HM(this, "instance");
    HM(this, "observer");
    HM(this, "doneOnce");
    HM(this, "visible");
    this.element = A, this.margin = I, this.once = g, this.callback = D, this.instance = t, this.createObserver();
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
const UW = {
  mounted(M, A) {
    A.value !== !1 && M.focus();
  }
}, hW = {
  BModal: oW,
  BPopover: yW,
  BToggle: u4,
  BTooltip: YW,
  BVisible: dW,
  focus: UW
}, OW = { class: "accordion-item" }, bW = ["id"], WW = ["aria-expanded", "aria-controls"], kW = { class: "accordion-body" }, pW = /* @__PURE__ */ f({
  __name: "BAccordionItem",
  props: {
    id: null,
    title: null,
    visible: { default: !1 }
  },
  setup(M) {
    const A = M, I = aA(W0, ""), g = SA(y(A, "id"), "accordion_item"), D = c(y(A, "visible"));
    return (t, N) => (T(), r("div", OW, [
      s("h2", {
        id: `${S(g)}heading`,
        class: "accordion-header"
      }, [
        _M((T(), r("button", {
          class: B(["accordion-button", { collapsed: !S(D) }]),
          type: "button",
          "aria-expanded": S(D) ? "true" : "false",
          "aria-controls": S(g)
        }, [
          Q(t.$slots, "title", {}, () => [
            DM(F(M.title), 1)
          ])
        ], 10, WW)), [
          [S(u4), void 0, S(g)]
        ])
      ], 8, bW),
      k(kE, {
        id: S(g),
        class: "accordion-collapse",
        visible: M.visible,
        accordion: S(I),
        "aria-labelledby": `heading${S(g)}`
      }, {
        default: b(() => [
          s("div", kW, [
            Q(t.$slots, "default")
          ])
        ]),
        _: 3
      }, 8, ["id", "visible", "accordion", "aria-labelledby"])
    ]));
  }
}), QW = ["type", "disabled", "aria-label"], WD = /* @__PURE__ */ f({
  __name: "BCloseButton",
  props: {
    ariaLabel: { default: "Close" },
    disabled: { default: !1 },
    white: { default: !1 },
    type: { default: "button" }
  },
  emits: ["click"],
  setup(M, { emit: A }) {
    const I = M, g = c(y(I, "disabled")), D = c(y(I, "white")), t = x(() => ({
      "btn-close-white": D.value
    }));
    return (N, L) => (T(), r("button", {
      type: M.type,
      class: B(["btn-close", S(t)]),
      disabled: S(g),
      "aria-label": M.ariaLabel,
      onClick: L[0] || (L[0] = (j) => A("click", j))
    }, null, 10, QW));
  }
}), fW = /* @__PURE__ */ f({
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
    const I = M, g = c(y(I, "dismissible"));
    c(y(I, "fade"));
    const D = c(y(I, "show")), t = wA();
    let N;
    const L = gM(null), j = gM(), i = x(() => !UA(t.close)), u = x(() => !!I.modelValue || D.value), e = x(() => [
      [`alert-${I.variant}`],
      {
        show: !!I.modelValue,
        "alert-dismissible": g.value,
        fade: !!I.modelValue
      }
    ]), C = (l) => {
      if (typeof l == "boolean")
        return 0;
      const Y = TD(l, 0);
      return Y > 0 ? Y : 0;
    }, a = gM(C(I.modelValue)), w = x(() => I.modelValue === !0 ? !0 : I.modelValue === !1 || TD(I.modelValue, 0) < 1 ? !1 : !!I.modelValue), n = () => {
      N !== void 0 && (clearTimeout(N), N = void 0);
    }, o = () => {
      a.value = C(I.modelValue), (w.value || D.value) && !j.value && (j.value = new kt(L.value));
    }, E = () => {
      typeof I.modelValue == "boolean" ? A("update:modelValue", !1) : A("update:modelValue", 0), A("closed");
    };
    return dM(() => I.modelValue, o), dM(() => D.value, o), dM(a, (l) => {
      n(), typeof I.modelValue != "boolean" && (A("close-count-down", l), l === 0 && I.modelValue > 0 && A("closed"), I.modelValue !== l && A("update:modelValue", l), l > 0 && (N = setTimeout(() => {
        a.value--;
      }, 1e3)));
    }), Xu(() => {
      var l;
      n(), (l = j.value) == null || l.dispose(), j.value = void 0;
    }), (l, Y) => S(u) ? (T(), r("div", {
      key: 0,
      ref_key: "element",
      ref: L,
      class: B(["alert", S(e)]),
      role: "alert"
    }, [
      Q(l.$slots, "default"),
      S(g) ? (T(), r(MM, { key: 0 }, [
        S(i) ? (T(), r("button", {
          key: 0,
          type: "button",
          "data-bs-dismiss": "alert",
          onClick: E
        }, [
          Q(l.$slots, "close")
        ])) : (T(), V(WD, {
          key: 1,
          "aria-label": M.dismissLabel,
          "data-bs-dismiss": "alert",
          onClick: E
        }, null, 8, ["aria-label"]))
      ], 64)) : P("", !0)
    ], 2)) : P("", !0);
  }
}), QE = Symbol(), vW = /* @__PURE__ */ f({
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
    const A = M, I = c(y(A, "square")), g = x(() => Vu(A.size)), D = x(
      () => Math.min(Math.max(N(A.overlap), 0), 1) / 2
    ), t = x(() => {
      const L = g.value ? `calc(${g.value} * ${D.value})` : null;
      return L ? { paddingLeft: L, paddingRight: L } : {};
    }), N = (L) => typeof L == "string" && i0(L) ? l0(L, 0) : L || 0;
    return TI(QE, {
      overlapScale: D,
      size: A.size,
      square: I.value,
      rounded: A.rounded,
      variant: A.variant
    }), (L, j) => (T(), V(EM(M.tag), {
      class: "b-avatar-group",
      role: "group"
    }, {
      default: b(() => [
        s("div", {
          class: "b-avatar-group-inner",
          style: RA(S(t))
        }, [
          Q(L.$slots, "default")
        ], 4)
      ]),
      _: 3
    }));
  }
}), GW = {
  key: 0,
  class: "b-avatar-custom"
}, JW = {
  key: 1,
  class: "b-avatar-img"
}, VW = ["src", "alt"], Vu = (M) => {
  const A = typeof M == "string" && i0(M) ? l0(M, 0) : M;
  return typeof A == "number" ? `${A}px` : A || null;
}, ZW = /* @__PURE__ */ f({
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
    const I = M, g = wA(), D = aA(QE, null), t = ["sm", null, "lg"], N = 0.4, L = N * 0.7, j = c(y(I, "badgeLeft")), i = c(y(I, "badgeTop")), u = c(y(I, "button")), e = c(y(I, "disabled")), C = c(y(I, "square")), a = x(() => !UA(g.default)), w = x(() => !UA(g.badge)), n = x(() => !!I.badge || I.badge === "" || w.value), o = x(
      () => D != null && D.size ? D.size : Vu(I.size)
    ), E = x(
      () => D != null && D.variant ? D.variant : I.variant
    ), l = x(
      () => D != null && D.rounded ? D.rounded : I.rounded
    ), Y = x(() => ({
      type: u.value ? I.buttonType : void 0,
      "aria-label": I.ariaLabel || null,
      disabled: e.value || null
    })), z = x(() => [`bg-${I.badgeVariant}`]), m = x(() => I.badge === !0 ? "" : I.badge), W = x(() => [[`text-${IM(I.badgeVariant)}`]]), v = x(() => ({
      [`b-avatar-${I.size}`]: !!I.size && t.indexOf(Vu(I.size)) !== -1,
      [`bg-${E.value}`]: !!E.value,
      badge: !u.value && E.value && a.value,
      rounded: l.value === "" || l.value === !0,
      ["rounded-circle"]: !C.value && l.value === "circle",
      ["rounded-0"]: C.value || l.value === "0",
      ["rounded-1"]: !C.value && l.value === "sm",
      ["rounded-3"]: !C.value && l.value === "lg",
      ["rounded-top"]: !C.value && l.value === "top",
      ["rounded-bottom"]: !C.value && l.value === "bottom",
      ["rounded-start"]: !C.value && l.value === "left",
      ["rounded-end"]: !C.value && l.value === "right",
      btn: u.value,
      [`btn-${E.value}`]: u.value ? !!E.value : !1
    })), d = x(() => [
      [`text-${I.textVariant || IM(E.value)}`]
    ]), U = x(() => {
      const uM = I.badgeOffset || "0px";
      return {
        fontSize: (t.indexOf(o.value || null) === -1 ? `calc(${o.value} * ${L})` : "") || "",
        top: i.value ? uM : "",
        bottom: i.value ? "" : uM,
        left: j.value ? uM : "",
        right: j.value ? "" : uM
      };
    }), Z = x(() => {
      const uM = t.indexOf(o.value || null) === -1 ? `calc(${o.value} * ${N})` : null;
      return uM ? { fontSize: uM } : {};
    }), R = x(() => {
      var oM;
      const uM = ((oM = D == null ? void 0 : D.overlapScale) == null ? void 0 : oM.value) || 0, bM = o.value && uM ? `calc(${o.value} * -${uM})` : null;
      return bM ? { marginLeft: bM, marginRight: bM } : {};
    }), AM = x(() => u.value ? "button" : "span"), LM = x(() => ({
      ...R.value,
      width: o.value,
      height: o.value
    })), IM = (uM) => uM === "light" || uM === "warning" ? "dark" : "light", lM = (uM) => {
      !e.value && u.value && A("click", uM);
    }, SM = (uM) => A("img-error", uM);
    return (uM, bM) => (T(), V(EM(S(AM)), wM({
      class: ["b-avatar", S(v)],
      style: S(LM)
    }, S(Y), { onClick: lM }), {
      default: b(() => [
        S(a) ? (T(), r("span", GW, [
          Q(uM.$slots, "default")
        ])) : M.src ? (T(), r("span", JW, [
          s("img", {
            src: M.src,
            alt: M.alt,
            onError: SM
          }, null, 40, VW)
        ])) : M.text ? (T(), r("span", {
          key: 2,
          class: B(["b-avatar-text", S(d)]),
          style: RA(S(Z))
        }, F(M.text), 7)) : P("", !0),
        S(n) ? (T(), r("span", {
          key: 3,
          class: B(["b-avatar-badge", S(z)]),
          style: RA(S(U))
        }, [
          S(w) ? Q(uM.$slots, "badge", { key: 0 }) : (T(), r("span", {
            key: 1,
            class: B(S(W))
          }, F(S(m)), 3))
        ], 6)) : P("", !0)
      ]),
      _: 3
    }, 16, ["class", "style"]));
  }
}), kg = {
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
}, PW = f({
  props: kg,
  emits: ["click"],
  setup(M, { emit: A, attrs: I }) {
    const g = c(y(M, "active")), D = c(y(M, "append")), t = c(y(M, "disabled")), N = c(y(M, "exact")), L = c(y(M, "replace")), j = ET(), i = gM(null), u = x(() => {
      const n = M.routerComponentName.split("-").map((E) => E.charAt(0).toUpperCase() + E.slice(1)).join("");
      return !((j == null ? void 0 : j.appContext.app.component(n)) !== void 0) || t.value || !M.to ? "a" : M.routerComponentName;
    }), e = x(() => {
      const n = "#";
      if (M.href)
        return M.href;
      if (typeof M.to == "string")
        return M.to || n;
      const o = M.to;
      if (Object.prototype.toString.call(o) === "[object Object]" && (o.path || o.query || o.hash)) {
        const E = o.path || "", l = o.query ? `?${Object.keys(o.query).map((z) => `${z}=${o.query[z]}`).join("=")}` : "", Y = !o.hash || o.hash.charAt(0) === "#" ? o.hash || "" : `#${o.hash}`;
        return `${E}${l}${Y}` || n;
      }
      return n;
    }), C = x(() => ({
      to: M.to,
      href: e.value,
      target: M.target,
      rel: M.target === "_blank" && M.rel === null ? "noopener" : M.rel || null,
      tabindex: t.value ? "-1" : typeof I.tabindex > "u" ? null : I.tabindex,
      "aria-disabled": t.value ? "true" : null
    }));
    return {
      computedLinkClasses: x(() => ({
        active: g.value,
        disabled: t.value
      })),
      tag: u,
      routerAttr: C,
      link: i,
      clicked: (n) => {
        if (t.value) {
          n.preventDefault(), n.stopImmediatePropagation();
          return;
        }
        A("click", n);
      },
      activeBoolean: g,
      appendBoolean: D,
      disabledBoolean: t,
      replaceBoolean: L,
      exactBoolean: N
    };
  }
});
function BW(M, A, I, g, D, t) {
  return M.tag === "router-link" ? (T(), V(EM(M.tag), wM({ key: 0 }, M.routerAttr, { custom: "" }), {
    default: b(({ href: N, navigate: L, isActive: j, isExactActive: i }) => [
      (T(), V(EM(M.routerTag), wM({
        ref: "link",
        href: N,
        class: [
          (j || M.activeBoolean) && M.activeClass,
          (i || M.exactBoolean) && M.exactActiveClass
        ]
      }, M.$attrs, { onClick: L }), {
        default: b(() => [
          Q(M.$slots, "default")
        ]),
        _: 2
      }, 1040, ["href", "class", "onClick"]))
    ]),
    _: 3
  }, 16)) : (T(), V(EM(M.tag), wM({
    key: 1,
    ref: "link",
    class: M.computedLinkClasses
  }, M.routerAttr, { onClick: M.clicked }), {
    default: b(() => [
      Q(M.$slots, "default")
    ]),
    _: 3
  }, 16, ["class", "onClick"]));
}
const bA = /* @__PURE__ */ PM(PW, [["render", BW]]), SC = kL(kg, ["event", "routerTag"]), FW = f({
  components: { BLink: bA },
  props: {
    pill: { type: [Boolean, String], default: !1 },
    tag: { type: String, default: "span" },
    variant: { type: String, default: "secondary" },
    textIndicator: { type: [Boolean, String], default: !1 },
    dotIndicator: { type: [Boolean, String], default: !1 },
    ...SC
  },
  setup(M) {
    const A = c(y(M, "pill")), I = c(y(M, "textIndicator")), g = c(y(M, "dotIndicator")), D = c(y(M, "active")), t = c(y(M, "disabled")), N = x(() => ot(M)), L = x(
      () => N.value ? bA : M.tag
    ), j = x(() => [
      [`bg-${M.variant}`],
      {
        active: D.value,
        disabled: t.value,
        "text-dark": ["warning", "info", "light"].includes(M.variant),
        "rounded-pill": A.value,
        "position-absolute top-0 start-100 translate-middle": I.value || g.value,
        "p-2 border border-light rounded-circle": g.value,
        "text-decoration-none": N.value
      }
    ]), i = x(
      () => N.value ? Pi(M, SC) : {}
    );
    return {
      computedClasses: j,
      computedLinkProps: i,
      computedTag: L
    };
  }
});
function XW(M, A, I, g, D, t) {
  return T(), V(EM(M.computedTag), wM({
    class: ["badge", M.computedClasses]
  }, M.computedLinkProps), {
    default: b(() => [
      Q(M.$slots, "default")
    ]),
    _: 3
  }, 16, ["class"]);
}
const RW = /* @__PURE__ */ PM(FW, [["render", XW]]), CC = kL(kg, ["event", "routerTag"]), HW = f({
  components: { BLink: bA },
  props: {
    ...CC,
    active: { type: [Boolean, String], default: !1 },
    ariaCurrent: { type: String, default: "location" },
    disabled: { type: [Boolean, String], default: !1 },
    text: { type: String, required: !1 }
  },
  emits: ["click"],
  setup(M, { emit: A }) {
    const I = c(y(M, "active")), g = c(y(M, "disabled")), D = x(() => ({
      active: I.value
    })), t = x(
      () => I.value ? "span" : bA
    ), N = x(
      () => I.value ? M.ariaCurrent : void 0
    );
    return {
      computedLinkProps: x(
        () => t.value !== "span" ? Pi(M, CC) : {}
      ),
      computedClasses: D,
      computedTag: t,
      computedAriaCurrent: N,
      clicked: (i) => {
        if (g.value || I.value) {
          i.preventDefault(), i.stopImmediatePropagation();
          return;
        }
        g.value || A("click", i);
      }
    };
  }
});
function _W(M, A, I, g, D, t) {
  return T(), r("li", {
    class: B(["breadcrumb-item", M.computedClasses])
  }, [
    (T(), V(EM(M.computedTag), wM({ "aria-current": M.computedAriaCurrent }, M.computedLinkProps, { onClick: M.clicked }), {
      default: b(() => [
        Q(M.$slots, "default", {}, () => [
          DM(F(M.text), 1)
        ])
      ]),
      _: 3
    }, 16, ["aria-current", "onClick"]))
  ], 2);
}
const fE = /* @__PURE__ */ PM(HW, [["render", _W]]), $W = { "aria-label": "breadcrumb" }, qW = { class: "breadcrumb" }, KW = /* @__PURE__ */ f({
  __name: "BBreadcrumb",
  props: {
    items: null
  },
  setup(M) {
    const A = M, I = wU(), g = x(() => {
      const D = A.items || (I == null ? void 0 : I.items) || [];
      let t = !1;
      return D.map((L, j) => (typeof L == "string" && (L = { text: L }, j < D.length - 1 && (L.href = "#")), L.active && (t = !0), !L.active && !t && (L.active = j + 1 === D.length), L));
    });
    return (D, t) => (T(), r("nav", $W, [
      s("ol", qW, [
        Q(D.$slots, "prepend"),
        (T(!0), r(MM, null, aM(S(g), (N, L) => (T(), V(fE, wM({ key: L }, N), {
          default: b(() => [
            DM(F(N.text), 1)
          ]),
          _: 2
        }, 1040))), 128)),
        Q(D.$slots, "default"),
        Q(D.$slots, "append")
      ])
    ]));
  }
}), Mk = {
  key: 0,
  class: "visually-hidden"
}, RL = /* @__PURE__ */ f({
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
    const A = M, I = wA(), g = c(y(A, "small")), D = x(() => ({
      "spinner-border": A.type === "border",
      "spinner-border-sm": A.type === "border" && g.value,
      "spinner-grow": A.type === "grow",
      "spinner-grow-sm": A.type === "grow" && g.value,
      [`text-${A.variant}`]: A.variant !== void 0
    })), t = x(() => !UA(I.label));
    return (N, L) => (T(), V(EM(M.tag), {
      class: B(S(D)),
      role: M.label || S(t) ? M.role : null,
      "aria-hidden": M.label || S(t) ? null : !0
    }, {
      default: b(() => [
        M.label || S(t) ? (T(), r("span", Mk, [
          Q(N.$slots, "label", {}, () => [
            DM(F(M.label), 1)
          ])
        ])) : P("", !0)
      ]),
      _: 3
    }, 8, ["class", "role", "aria-hidden"]));
  }
}), Ak = f({
  components: { BLink: bA, BSpinner: RL },
  props: {
    ...kg,
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
    const I = c(y(M, "active")), g = c(y(M, "disabled")), D = c(y(M, "pill")), t = c(y(M, "pressed")), N = c(y(M, "squared")), L = c(y(M, "loading")), j = x(() => t.value === !0), i = x(
      () => M.tag === "button" && M.href === void 0 && M.to === null
    ), u = x(() => ot(M)), e = x(() => M.to !== null), C = x(
      () => M.href !== void 0 ? !1 : !i.value
    ), a = x(() => [
      [`btn-${M.variant}`],
      [`btn-${M.size}`],
      {
        active: I.value || t.value,
        "rounded-pill": D.value,
        "rounded-0": N.value,
        disabled: g.value
      }
    ]), w = x(() => ({
      "aria-disabled": C.value ? g.value : null,
      "aria-pressed": j.value ? t.value : null,
      autocomplete: j.value ? "off" : null,
      disabled: i.value ? g.value : null,
      href: M.href,
      rel: u.value ? M.rel : null,
      role: C.value || u.value ? "button" : null,
      target: u.value ? M.target : null,
      type: i.value ? M.type : null,
      to: i.value ? null : M.to,
      append: u.value ? M.append : null,
      activeClass: e.value ? M.activeClass : null,
      event: e.value ? M.event : null,
      exact: e.value ? M.exact : null,
      exactActiveClass: e.value ? M.exactActiveClass : null,
      replace: e.value ? M.replace : null,
      routerComponentName: e.value ? M.routerComponentName : null,
      routerTag: e.value ? M.routerTag : null
    })), n = x(
      () => e.value ? bA : M.href ? "a" : M.tag
    );
    return {
      computedClasses: a,
      computedAttrs: w,
      computedTag: n,
      clicked: (E) => {
        if (g.value) {
          E.preventDefault(), E.stopPropagation();
          return;
        }
        A("click", E), j.value && A("update:pressed", !t.value);
      },
      loadingBoolean: L
    };
  }
});
function Ik(M, A, I, g, D, t) {
  const N = sM("b-spinner");
  return T(), V(EM(M.computedTag), wM({
    class: ["btn", M.computedClasses]
  }, M.computedAttrs, { onClick: M.clicked }), {
    default: b(() => [
      M.loadingBoolean ? (T(), r("div", {
        key: 0,
        class: B(["btn-loading", { "mode-fill": M.loadingMode === "fill", "mode-inline": M.loadingMode === "inline" }])
      }, [
        Q(M.$slots, "loading", {}, () => [
          k(N, {
            class: "btn-spinner",
            small: M.size !== "lg"
          }, null, 8, ["small"])
        ])
      ], 2)) : P("", !0),
      s("div", {
        class: B(["btn-content", { "btn-loading-fill": M.loadingBoolean && M.loadingMode === "fill" }])
      }, [
        Q(M.$slots, "default")
      ], 2)
    ]),
    _: 3
  }, 16, ["class", "onClick"]);
}
const yt = /* @__PURE__ */ PM(Ak, [["render", Ik]]), gk = /* @__PURE__ */ f({
  __name: "BButtonGroup",
  props: {
    ariaLabel: { default: "Group" },
    size: null,
    tag: { default: "div" },
    vertical: { default: !1 }
  },
  setup(M) {
    const A = M, I = c(y(A, "vertical")), g = x(() => ({
      "btn-group": !I.value && A.size === void 0,
      [`btn-group-${A.size}`]: A.size !== void 0,
      "btn-group-vertical": I.value
    }));
    return (D, t) => (T(), V(EM(M.tag), {
      class: B(S(g)),
      role: "group",
      "aria-label": M.ariaLabel
    }, {
      default: b(() => [
        Q(D.$slots, "default")
      ]),
      _: 3
    }, 8, ["class", "aria-label"]));
  }
}), Dk = ["role", "aria-label"], tk = /* @__PURE__ */ f({
  __name: "BButtonToolbar",
  props: {
    ariaLabel: { default: "Group" },
    justify: { default: !1 },
    role: { default: "toolbar" }
  },
  setup(M) {
    const I = c(y(M, "justify")), g = x(() => ({
      "justify-content-between": I.value
    }));
    return (D, t) => (T(), r("div", {
      class: B([S(g), "btn-toolbar"]),
      role: M.role,
      "aria-label": M.ariaLabel
    }, [
      Q(D.$slots, "default")
    ], 10, Dk));
  }
}), i4 = /* @__PURE__ */ f({
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
    const I = M, g = '<svg width="%{w}" height="%{h}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 %{w} %{h}" preserveAspectRatio="none"><rect width="100%" height="100%" style="fill:%{f};"></rect></svg>', D = c(y(I, "lazy")), t = c(y(I, "blank")), N = c(y(I, "block")), L = c(y(I, "center")), j = c(y(I, "fluid")), i = c(y(I, "fluidGrow")), u = c(y(I, "left")), e = c(y(I, "start")), C = c(y(I, "right")), a = c(y(I, "end")), w = c(y(I, "thumbnail")), n = x(
      () => typeof I.srcset == "string" ? I.srcset.split(",").filter((v) => v).join(",") : Array.isArray(I.srcset) ? I.srcset.filter((v) => v).join(",") : void 0
    ), o = x(
      () => typeof I.sizes == "string" ? I.sizes.split(",").filter((v) => v).join(",") : Array.isArray(I.sizes) ? I.sizes.filter((v) => v).join(",") : void 0
    ), E = x(() => {
      const v = (Z) => Z === void 0 ? void 0 : typeof Z == "number" ? Z : Number.parseInt(Z, 10) || void 0, d = v(I.width), U = v(I.height);
      if (t.value) {
        if (d !== void 0 && U === void 0)
          return { height: d, width: d };
        if (d === void 0 && U !== void 0)
          return { height: U, width: U };
        if (d === void 0 && U === void 0)
          return { height: 1, width: 1 };
      }
      return {
        width: d,
        height: U
      };
    }), l = x(
      () => W(E.value.width, E.value.height, I.blankColor)
    ), Y = x(() => ({
      src: t.value ? l.value : I.src,
      alt: I.alt,
      width: E.value.width || void 0,
      height: E.value.height || void 0,
      srcset: t.value ? void 0 : n.value,
      sizes: t.value ? void 0 : o.value,
      loading: D.value ? "lazy" : "eager"
    })), z = x(
      () => u.value || e.value ? "float-start" : C.value || a.value ? "float-end" : L.value ? "mx-auto" : void 0
    ), m = x(() => ({
      "img-thumbnail": w.value,
      "img-fluid": j.value || i.value,
      "w-100": i.value,
      rounded: I.rounded === "" || I.rounded === !0,
      [`rounded-${I.rounded}`]: typeof I.rounded == "string" && I.rounded !== "",
      [`${z.value}`]: z.value !== void 0,
      "d-block": N.value || L.value
    })), W = (v, d, U) => `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(
      g.replace("%{w}", String(v)).replace("%{h}", String(d)).replace("%{f}", U)
    )}`;
    return (v, d) => (T(), r("img", wM({ class: S(m) }, S(Y), {
      onLoad: d[0] || (d[0] = (U) => A("load", U))
    }), null, 16));
  }
}), iL = /* @__PURE__ */ f({
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
    const I = M, g = c(y(I, "bottom")), D = c(y(I, "end")), t = c(y(I, "left")), N = c(y(I, "right")), L = c(y(I, "start")), j = c(y(I, "top")), i = x(
      () => j.value ? "card-img-top" : N.value || D.value ? "card-img-right" : g.value ? "card-img-bottom" : t.value || L.value ? "card-img-left" : "card-img"
    ), u = x(() => ({
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
    return (e, C) => (T(), V(i4, wM({ class: S(i) }, S(u), {
      onLoad: C[0] || (C[0] = (a) => A("load", a))
    }), null, 16, ["class"]));
  }
}), Nk = ["innerHTML"], vE = /* @__PURE__ */ f({
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
    const A = M, I = x(() => ({
      [`text-${A.textVariant}`]: A.textVariant !== void 0,
      [`bg-${A.bgVariant}`]: A.bgVariant !== void 0,
      [`border-${A.borderVariant}`]: A.borderVariant !== void 0
    }));
    return (g, D) => (T(), V(EM(M.tag), {
      class: B(S(I))
    }, {
      default: b(() => [
        M.html ? (T(), r("div", {
          key: 0,
          innerHTML: M.html
        }, null, 8, Nk)) : Q(g.$slots, "default", { key: 1 }, () => [
          DM(F(M.text), 1)
        ])
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), GE = /* @__PURE__ */ f({
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
    return (I, g) => (T(), V(vE, wM({ class: "card-header" }, A), {
      default: b(() => [
        Q(I.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), JE = /* @__PURE__ */ f({
  __name: "BCardTitle",
  props: {
    text: null,
    tag: { default: "h4" }
  },
  setup(M) {
    return (A, I) => (T(), V(EM(M.tag), { class: "card-title" }, {
      default: b(() => [
        Q(A.$slots, "default", {}, () => [
          DM(F(M.text), 1)
        ])
      ]),
      _: 3
    }));
  }
}), VE = /* @__PURE__ */ f({
  __name: "BCardSubtitle",
  props: {
    text: null,
    tag: { default: "h6" },
    textVariant: { default: "muted" }
  },
  setup(M) {
    const A = M, I = x(() => [`text-${A.textVariant}`]);
    return (g, D) => (T(), V(EM(M.tag), {
      class: B(["card-subtitle mb-2", S(I)])
    }, {
      default: b(() => [
        Q(g.$slots, "default", {}, () => [
          DM(F(M.text), 1)
        ])
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), ZE = /* @__PURE__ */ f({
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
    const A = M, I = wA(), g = c(y(A, "overlay")), D = x(() => !UA(I.title)), t = x(() => !UA(I.subtitle)), N = x(() => ({
      "card-img-overlay": g.value,
      [`text-${A.bodyTextVariant}`]: A.bodyTextVariant !== void 0,
      [`bg-${A.bodyBgVariant}`]: A.bodyBgVariant !== void 0
    }));
    return (L, j) => (T(), V(EM(M.bodyTag), {
      class: B(["card-body", S(N)])
    }, {
      default: b(() => [
        !!M.title || S(D) ? (T(), V(JE, {
          key: 0,
          tag: M.titleTag
        }, {
          default: b(() => [
            Q(L.$slots, "title", {}, () => [
              DM(F(M.title), 1)
            ])
          ]),
          _: 3
        }, 8, ["tag"])) : P("", !0),
        !!M.subtitle || S(t) ? (T(), V(VE, {
          key: 1,
          tag: M.subtitleTag,
          "text-variant": M.subtitleTextVariant
        }, {
          default: b(() => [
            Q(L.$slots, "subtitle", {}, () => [
              DM(F(M.subtitle), 1)
            ])
          ]),
          _: 3
        }, 8, ["tag", "text-variant"])) : P("", !0),
        Q(L.$slots, "default", {}, () => [
          DM(F(M.text), 1)
        ])
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), PE = /* @__PURE__ */ f({
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
    return (I, g) => (T(), V(vE, wM({ class: "card-footer" }, A), {
      default: b(() => [
        Q(I.$slots, "default", {}, () => [
          DM(F(M.text), 1)
        ])
      ]),
      _: 3
    }, 16));
  }
}), BE = /* @__PURE__ */ f({
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
    const A = M, I = wA(), g = c(y(A, "imgBottom")), D = c(y(A, "imgEnd")), t = c(y(A, "imgLeft")), N = c(y(A, "imgRight")), L = c(y(A, "imgStart")), j = c(y(A, "noBody")), i = x(() => !UA(I.header)), u = x(() => !UA(I.footer)), e = x(() => ({
      [`text-${A.align}`]: A.align !== void 0,
      [`text-${A.textVariant}`]: A.textVariant !== void 0,
      [`bg-${A.bgVariant}`]: A.bgVariant !== void 0,
      [`border-${A.borderVariant}`]: A.borderVariant !== void 0,
      "flex-row": t.value || L.value,
      "flex-row-reverse": D.value || N.value
    })), C = x(() => ({
      bgVariant: A.headerBgVariant,
      borderVariant: A.headerBorderVariant,
      html: A.headerHtml,
      tag: A.headerTag,
      textVariant: A.headerTextVariant
    })), a = x(() => ({
      overlay: A.overlay,
      bodyBgVariant: A.bodyBgVariant,
      bodyTag: A.bodyTag,
      bodyTextVariant: A.bodyTextVariant,
      subtitle: A.subtitle,
      subtitleTag: A.subtitleTag,
      subtitleTextVariant: A.subtitleTextVariant,
      title: A.title,
      titleTag: A.titleTag
    })), w = x(() => ({
      bgVariant: A.footerBgVariant,
      borderVariant: A.footerBorderVariant,
      html: A.footerHtml,
      tag: A.footerTag,
      textVariant: A.footerTextVariant
    })), n = x(() => ({
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
    return (o, E) => (T(), V(EM(M.tag), {
      class: B(["card", S(e)])
    }, {
      default: b(() => [
        S(g) ? P("", !0) : Q(o.$slots, "img", { key: 0 }, () => [
          M.imgSrc ? (T(), V(iL, DA(wM({ key: 0 }, S(n))), null, 16)) : P("", !0)
        ]),
        M.header || S(i) || M.headerHtml ? (T(), V(GE, wM({ key: 1 }, S(C), { class: M.headerClass }), {
          default: b(() => [
            Q(o.$slots, "header", {}, () => [
              DM(F(M.header), 1)
            ])
          ]),
          _: 3
        }, 16, ["class"])) : P("", !0),
        S(j) ? Q(o.$slots, "default", { key: 3 }, () => [
          DM(F(M.bodyText), 1)
        ]) : (T(), V(ZE, wM({ key: 2 }, S(a), { class: M.bodyClass }), {
          default: b(() => [
            Q(o.$slots, "default", {}, () => [
              DM(F(M.bodyText), 1)
            ])
          ]),
          _: 3
        }, 16, ["class"])),
        M.footer || S(u) || M.footerHtml ? (T(), V(PE, wM({ key: 4 }, S(w), { class: M.footerClass }), {
          default: b(() => [
            Q(o.$slots, "footer", {}, () => [
              DM(F(M.footer), 1)
            ])
          ]),
          _: 3
        }, 16, ["class"])) : P("", !0),
        S(g) ? Q(o.$slots, "img", { key: 5 }, () => [
          M.imgSrc ? (T(), V(iL, DA(wM({ key: 0 }, S(n))), null, 16)) : P("", !0)
        ]) : P("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Lk = /* @__PURE__ */ f({
  __name: "BCardGroup",
  props: {
    columns: { default: !1 },
    deck: { default: !1 },
    tag: { default: "div" }
  },
  setup(M) {
    const A = M, I = c(y(A, "columns")), g = c(y(A, "deck")), D = x(
      () => g.value ? "card-deck" : I.value ? "card-columns" : "card-group"
    ), t = x(() => [D.value]);
    return (N, L) => (T(), V(EM(M.tag), {
      class: B(S(t))
    }, {
      default: b(() => [
        Q(N.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), jk = /* @__PURE__ */ f({
  __name: "BCardText",
  props: {
    text: null,
    tag: { default: "p" }
  },
  setup(M) {
    return (A, I) => (T(), V(EM(M.tag), { class: "card-text" }, {
      default: b(() => [
        Q(A.$slots, "default", {}, () => [
          DM(F(M.text), 1)
        ])
      ]),
      _: 3
    }));
  }
}), uk = ["id"], ik = {
  key: 0,
  class: "carousel-indicators"
}, ek = ["data-bs-target", "data-bs-slide-to", "aria-label"], Sk = { class: "carousel-inner" }, Ck = ["data-bs-target"], ak = /* @__PURE__ */ s("span", {
  class: "carousel-control-prev-icon",
  "aria-hidden": "true"
}, null, -1), wk = { class: "visually-hidden" }, Ek = ["data-bs-target"], Tk = /* @__PURE__ */ s("span", {
  class: "carousel-control-next-icon",
  "aria-hidden": "true"
}, null, -1), nk = { class: "visually-hidden" }, FE = Symbol(), xk = /* @__PURE__ */ f({
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
    const I = M, g = wA(), D = SA(y(I, "id"), "carousel"), t = c(y(I, "controls")), N = c(y(I, "indicators")), L = c(y(I, "noTouch"));
    c(y(I, "noWrap"));
    const j = gM(), i = gM(), u = gM([]);
    return NA(j, "slide.bs.carousel", (e) => A("sliding-start", e)), NA(j, "slid.bs.carousel", (e) => A("sliding-end", e)), $M(() => {
      i.value = new bD(j.value, {
        wrap: !L.value,
        interval: I.interval,
        touch: !L.value
      }), g.default && (u.value = g.default().filter((e) => {
        var C;
        return ((C = e.type) == null ? void 0 : C.__name) === "BCarouselSlide";
      }));
    }), TI(FE, {
      background: I.background,
      width: I.imgWidth,
      height: I.imgHeight
    }), (e, C) => (T(), r("div", {
      id: S(D),
      ref_key: "element",
      ref: j,
      class: "carousel slide",
      "data-bs-ride": "carousel"
    }, [
      S(N) ? (T(), r("div", ik, [
        (T(!0), r(MM, null, aM(u.value, (a, w) => (T(), r("button", {
          key: w,
          type: "button",
          "data-bs-target": `#${S(D)}`,
          "data-bs-slide-to": w,
          class: B(w === M.startingSlide ? "active" : ""),
          "aria-current": "true",
          "aria-label": `${M.indicatorsButtonLabel} ${w}`
        }, null, 10, ek))), 128))
      ])) : P("", !0),
      s("div", Sk, [
        Q(e.$slots, "default")
      ]),
      S(t) ? (T(), r(MM, { key: 1 }, [
        s("button", {
          class: "carousel-control-prev",
          type: "button",
          "data-bs-target": `#${S(D)}`,
          "data-bs-slide": "prev"
        }, [
          ak,
          s("span", wk, F(M.controlsPrevText), 1)
        ], 8, Ck),
        s("button", {
          class: "carousel-control-next",
          type: "button",
          "data-bs-target": `#${S(D)}`,
          "data-bs-slide": "next"
        }, [
          Tk,
          s("span", nk, F(M.controlsNextText), 1)
        ], 8, Ek)
      ], 64)) : P("", !0)
    ], 8, uk));
  }
}), ok = ["data-bs-interval"], yk = ["innerHTML"], lk = { key: 1 }, sk = ["innerHTML"], ck = { key: 1 }, rk = /* @__PURE__ */ f({
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
    const A = M, I = wA(), g = aA(FE, {}), D = c(y(A, "active")), t = x(() => !UA(I.default)), N = x(() => ({
      background: `${A.background || g.background || "rgb(171, 171, 171)"} none repeat scroll 0% 0%`
    })), L = x(() => ({
      "d-none": A.contentVisibleUp !== void 0,
      [`d-${A.contentVisibleUp}-block`]: A.contentVisibleUp !== void 0
    })), j = x(() => g.width), i = x(() => g.height);
    return (u, e) => (T(), r("div", {
      class: B(["carousel-item", { active: S(D) }]),
      "data-bs-interval": M.interval,
      style: RA(S(N))
    }, [
      Q(u.$slots, "img", {}, () => [
        k(i4, {
          class: "d-block w-100",
          alt: M.imgAlt,
          src: M.imgSrc,
          width: M.imgWidth || S(j),
          height: M.imgHeight || S(i),
          blank: M.imgBlank,
          "blank-color": M.imgBlankColor
        }, null, 8, ["alt", "src", "width", "height", "blank", "blank-color"])
      ]),
      M.caption || M.captionHtml || M.text || M.textHtml || S(t) ? (T(), V(EM(M.contentTag), {
        key: 0,
        class: B(["carousel-caption", S(L)])
      }, {
        default: b(() => [
          M.caption || M.captionHtml ? (T(), V(EM(M.captionTag), { key: 0 }, {
            default: b(() => [
              M.captionHtml ? (T(), r("span", {
                key: 0,
                innerHTML: M.captionHtml
              }, null, 8, yk)) : (T(), r("span", lk, F(M.caption), 1))
            ]),
            _: 1
          })) : P("", !0),
          M.text || M.textHtml ? (T(), V(EM(M.textTag), { key: 1 }, {
            default: b(() => [
              M.textHtml ? (T(), r("span", {
                key: 0,
                innerHTML: M.textHtml
              }, null, 8, sk)) : (T(), r("span", ck, F(M.text), 1))
            ]),
            _: 1
          })) : P("", !0),
          Q(u.$slots, "default")
        ]),
        _: 3
      }, 8, ["class"])) : P("", !0)
    ], 14, ok));
  }
}), aC = vL("", [], { type: [Boolean, String, Number], default: !1 }), wC = vL("offset", [""], { type: [String, Number], default: null }), EC = vL("order", [""], { type: [String, Number], default: null }), zk = f({
  name: "BCol",
  props: {
    col: { type: [Boolean, String], default: !1 },
    cols: { type: [String, Number], default: null },
    ...aC,
    offset: { type: [String, Number], default: null },
    ...wC,
    order: { type: [String, Number], default: null },
    ...EC,
    alignSelf: { type: String, default: null },
    tag: { type: String, default: "div" }
  },
  setup(M) {
    const A = [
      { content: aC, propPrefix: "cols", classPrefix: "col" },
      { content: wC, propPrefix: "offset" },
      { content: EC, propPrefix: "order" }
    ], I = c(y(M, "col")), g = x(
      () => A.flatMap((t) => y0(M, t.content, t.propPrefix, t.classPrefix))
    );
    return {
      computedClasses: x(() => [
        g.value,
        {
          col: I.value || !g.value.some((t) => /^col-/.test(t)) && !M.cols,
          [`col-${M.cols}`]: !!M.cols,
          [`offset-${M.offset}`]: !!M.offset,
          [`order-${M.order}`]: !!M.order,
          [`align-self-${M.alignSelf}`]: !!M.alignSelf
        }
      ])
    };
  }
});
function Yk(M, A, I, g, D, t) {
  return T(), V(EM(M.tag), {
    class: B(M.computedClasses)
  }, {
    default: b(() => [
      Q(M.$slots, "default")
    ]),
    _: 3
  }, 8, ["class"]);
}
const PD = /* @__PURE__ */ PM(zk, [["render", Yk]]), dk = /* @__PURE__ */ f({
  __name: "BContainer",
  props: {
    gutterX: null,
    gutterY: null,
    fluid: { type: [Boolean, String], default: !1 },
    tag: { default: "div" }
  },
  setup(M) {
    const A = M, I = gM(), g = x(() => ({
      container: A.fluid === !1,
      ["container-fluid"]: A.fluid === !0,
      [`container-${A.fluid}`]: typeof A.fluid == "string",
      [`gx-${A.gutterX}`]: A.gutterX !== void 0,
      [`gy-${A.gutterY}`]: A.gutterY !== void 0
    }));
    return (D, t) => (T(), V(EM(M.tag), {
      ref_key: "container",
      ref: I,
      class: B(S(g))
    }, {
      default: b(() => [
        Q(D.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), mk = { class: "visually-hidden" }, Uk = ["aria-labelledby", "role"], XE = /* @__PURE__ */ f({
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
    const g = M, D = SA(y(g, "id"), "dropdown"), t = c(y(g, "block")), N = c(y(g, "dark")), L = c(y(g, "dropup")), j = c(y(g, "dropright")), i = c(y(g, "isNav")), u = c(y(g, "dropleft")), e = c(y(g, "right")), C = c(y(g, "split")), a = c(y(g, "noCaret")), w = gM(), n = gM(), o = gM(), E = x(() => ({
      "d-grid": t.value,
      "d-flex": t.value && C.value
    })), l = x(() => [
      C.value ? g.splitClass : g.toggleClass,
      {
        "nav-link": i.value,
        "dropdown-toggle": !C.value,
        "dropdown-toggle-no-caret": a.value && !C.value,
        "w-100": C.value && t.value
      }
    ]), Y = x(() => [
      g.menuClass,
      {
        "dropdown-menu-dark": N.value,
        "dropdown-menu-end": e.value
      }
    ]), z = x(() => ({
      "data-bs-toggle": C.value ? void 0 : "dropdown",
      "aria-expanded": C.value ? void 0 : !1,
      ref: C.value ? void 0 : n,
      href: C.value ? g.splitHref : void 0
    })), m = x(() => ({
      ref: C.value ? n : void 0
    })), W = () => {
      var d;
      (d = o.value) == null || d.hide();
    }, v = (d) => {
      C.value && I("click", d);
    };
    return NA(w, "show.bs.dropdown", () => I("show")), NA(w, "shown.bs.dropdown", () => I("shown")), NA(w, "hide.bs.dropdown", () => I("hide")), NA(w, "hidden.bs.dropdown", () => I("hidden")), $M(() => {
      var d;
      o.value = new _A((d = n.value) == null ? void 0 : d.$el, {
        autoClose: g.autoClose,
        boundary: g.boundary,
        offset: g.offset ? g.offset.toString() : "",
        reference: g.offset || C.value ? "parent" : "toggle",
        popperConfig: (U) => {
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
          return L.value ? Z.placement = e.value ? "top-end" : "top-start" : j.value ? Z.placement = "right-start" : u.value ? Z.placement = "left-start" : e.value && (Z.placement = "bottom-end"), Wu(U, Wu(Z, g.popperOpts));
        }
      });
    }), A({
      hide: W
    }), (d, U) => (T(), r("div", {
      ref_key: "parent",
      ref: w,
      class: B([S(E), "btn-group"])
    }, [
      k(yt, wM({
        id: S(D),
        variant: M.splitVariant || M.variant,
        size: M.size,
        class: S(l),
        disabled: M.disabled,
        type: M.splitButtonType
      }, S(z), { onClick: v }), {
        default: b(() => [
          Q(d.$slots, "button-content", {}, () => [
            DM(F(M.text), 1)
          ])
        ]),
        _: 3
      }, 16, ["id", "variant", "size", "class", "disabled", "type"]),
      S(C) ? (T(), V(yt, wM({
        key: 0,
        variant: M.variant,
        size: M.size,
        disabled: M.disabled
      }, S(m), {
        class: [M.toggleClass, "dropdown-toggle-split dropdown-toggle"],
        "data-bs-toggle": "dropdown",
        "aria-expanded": "false",
        onClick: U[0] || (U[0] = (Z) => I("toggle"))
      }), {
        default: b(() => [
          s("span", mk, [
            Q(d.$slots, "toggle-text", {}, () => [
              DM(F(M.toggleText), 1)
            ])
          ])
        ]),
        _: 3
      }, 16, ["variant", "size", "disabled", "class"])) : P("", !0),
      s("ul", {
        class: B(["dropdown-menu", S(Y)]),
        "aria-labelledby": S(D),
        role: M.role
      }, [
        Q(d.$slots, "default")
      ], 10, Uk)
    ], 2));
  }
}), hk = { role: "presentation" }, Ok = /* @__PURE__ */ f({
  __name: "BDropdownDivider",
  props: {
    tag: { default: "hr" }
  },
  setup(M) {
    return (A, I) => (T(), r("li", hk, [
      (T(), V(EM(M.tag), {
        class: "dropdown-divider",
        role: "separator",
        "aria-orientation": "horizontal"
      }))
    ]));
  }
}), bk = {}, Wk = { role: "presentation" }, kk = { class: "px-4 py-3" };
function pk(M, A) {
  return T(), r("li", Wk, [
    s("form", kk, [
      Q(M.$slots, "default")
    ])
  ]);
}
const Qk = /* @__PURE__ */ PM(bk, [["render", pk]]), fk = { role: "presentation" }, vk = ["id", "aria-describedby"], Gk = {
  inheritAttrs: !1
}, Jk = /* @__PURE__ */ f({
  ...Gk,
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
    const A = M, I = x(
      () => A.id ? `${A.id}_group_dd_header` : void 0
    ), g = x(
      () => A.headerTag === "header" ? void 0 : "heading"
    ), D = x(() => [
      A.headerClass,
      {
        [`text-${A.headerVariant}`]: A.headerVariant !== void 0
      }
    ]);
    return (t, N) => (T(), r("li", fk, [
      (T(), V(EM(M.headerTag), {
        id: S(I),
        class: B(["dropdown-header", S(D)]),
        role: S(g)
      }, {
        default: b(() => [
          Q(t.$slots, "header", {}, () => [
            DM(F(M.header), 1)
          ])
        ]),
        _: 3
      }, 8, ["id", "class", "role"])),
      s("ul", wM({
        id: M.id,
        role: "group",
        class: "list-unstyled"
      }, t.$attrs, {
        "aria-describedby": M.ariaDescribedby || S(I)
      }), [
        Q(t.$slots, "default")
      ], 16, vk)
    ]));
  }
}), Vk = {}, Zk = { class: "dropdown-header" };
function Pk(M, A) {
  return T(), r("li", null, [
    s("h6", Zk, [
      Q(M.$slots, "default")
    ])
  ]);
}
const Bk = /* @__PURE__ */ PM(Vk, [["render", Pk]]), Fk = {
  inheritAttrs: !1
}, Xk = /* @__PURE__ */ f({
  ...Fk,
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
    const I = M, g = c(y(I, "active")), D = c(y(I, "disabled")), t = mC(), N = x(() => [
      I.linkClass,
      {
        active: g.value,
        disabled: D.value,
        [`text-${I.variant}`]: I.variant !== void 0
      }
    ]), L = x(
      () => I.href ? "a" : t.to ? bA : "button"
    ), j = x(() => ({
      disabled: D.value,
      "aria-current": g.value ? "true" : null,
      href: L.value === "a" ? I.href : null,
      rel: I.rel,
      type: L.value === "button" ? "button" : null,
      target: I.target,
      ...t.to ? { activeClass: "active", ...t } : {}
    })), i = (u) => A("click", u);
    return (u, e) => (T(), r("li", {
      role: "presentation",
      class: B(u.$attrs.class)
    }, [
      (T(), V(EM(S(L)), wM({
        class: ["dropdown-item", S(N)]
      }, S(j), { onClick: i }), {
        default: b(() => [
          Q(u.$slots, "default")
        ]),
        _: 3
      }, 16, ["class"]))
    ], 2));
  }
}), Rk = ["disabled"], Hk = {
  inheritAttrs: !1
}, _k = /* @__PURE__ */ f({
  ...Hk,
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
    const I = M, g = c(y(I, "active")), D = c(y(I, "disabled")), t = x(() => [
      I.buttonClass,
      {
        [I.activeClass]: g.value,
        disabled: D.value,
        [`text-${I.variant}`]: I.variant !== void 0
      }
    ]), N = (L) => A("click", L);
    return (L, j) => (T(), r("li", {
      role: "presentation",
      class: B(L.$attrs.class)
    }, [
      s("button", {
        role: "menu",
        type: "button",
        class: B(["dropdown-item", S(t)]),
        disabled: S(D),
        onClick: N
      }, [
        Q(L.$slots, "default")
      ], 10, Rk)
    ], 2));
  }
}), $k = { role: "presentation" }, qk = { class: "px-4 py-1 mb-0 text-muted" }, Kk = /* @__PURE__ */ f({
  __name: "BDropdownText",
  props: {
    text: { default: "" }
  },
  setup(M) {
    return (A, I) => (T(), r("li", $k, [
      s("p", qk, [
        Q(A.$slots, "default", {}, () => [
          DM(F(M.text), 1)
        ])
      ])
    ]));
  }
}), Mp = ["id", "novalidate", "onSubmit"], RE = /* @__PURE__ */ f({
  __name: "BForm",
  props: {
    id: null,
    floating: { default: !1 },
    novalidate: { default: !1 },
    validated: { default: !1 }
  },
  emits: ["submit"],
  setup(M, { emit: A }) {
    const I = M, g = c(y(I, "floating")), D = c(y(I, "novalidate")), t = c(y(I, "validated")), N = x(() => ({
      "form-floating": g.value,
      "was-validated": t.value
    })), L = (j) => A("submit", j);
    return (j, i) => (T(), r("form", {
      id: M.id,
      novalidate: S(D),
      class: B(S(N)),
      onSubmit: Sg(L, ["prevent"])
    }, [
      Q(j.$slots, "default")
    ], 42, Mp));
  }
}), Ap = { class: "form-floating" }, Ip = ["for"], gp = /* @__PURE__ */ f({
  __name: "BFormFloatingLabel",
  props: {
    labelFor: null,
    label: null,
    text: null
  },
  setup(M) {
    return (A, I) => (T(), r("div", Ap, [
      Q(A.$slots, "default", {}, () => [
        DM(F(M.text), 1)
      ]),
      s("label", { for: M.labelFor }, [
        Q(A.$slots, "label", {}, () => [
          DM(F(M.label), 1)
        ])
      ], 8, Ip)
    ]));
  }
}), Zu = /* @__PURE__ */ f({
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
    const A = M, I = c(y(A, "forceShow")), g = c(y(A, "state")), D = c(y(A, "tooltip")), t = x(
      () => I.value === !0 || g.value === !1
    ), N = x(() => ({
      "d-block": t.value,
      "invalid-feedback": !D.value,
      "invalid-tooltip": D.value
    })), L = x(() => ({
      id: A.id,
      role: A.role,
      "aria-live": A.ariaLive,
      "aria-atomic": A.ariaLive ? "true" : void 0
    }));
    return (j, i) => (T(), V(EM(M.tag), wM({ class: S(N) }, S(L)), {
      default: b(() => [
        Q(j.$slots, "default", {}, () => [
          DM(F(M.text), 1)
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), hN = /* @__PURE__ */ f({
  __name: "BFormRow",
  props: {
    tag: { default: "div" }
  },
  setup(M) {
    return (A, I) => (T(), V(EM(M.tag), { class: "row d-flex flex-wrap" }, {
      default: b(() => [
        Q(A.$slots, "default")
      ]),
      _: 3
    }));
  }
}), Pu = /* @__PURE__ */ f({
  __name: "BFormText",
  props: {
    id: null,
    inline: { default: !1 },
    tag: { default: "small" },
    text: null,
    textVariant: { default: "muted" }
  },
  setup(M) {
    const A = M, I = c(y(A, "inline")), g = x(() => [
      [`text-${A.textVariant}`],
      {
        "form-text": !I.value
      }
    ]);
    return (D, t) => (T(), V(EM(M.tag), {
      id: M.id,
      class: B(S(g))
    }, {
      default: b(() => [
        Q(D.$slots, "default", {}, () => [
          DM(F(M.text), 1)
        ])
      ]),
      _: 3
    }, 8, ["id", "class"]));
  }
}), Bu = /* @__PURE__ */ f({
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
    const A = M, I = c(y(A, "forceShow")), g = c(y(A, "state")), D = c(y(A, "tooltip")), t = x(
      () => I.value === !0 || g.value === !0
    ), N = x(() => ({
      "d-block": t.value,
      "valid-feedback": !D.value,
      "valid-tooltip": D.value
    })), L = x(() => A.ariaLive ? "true" : void 0);
    return (j, i) => (T(), V(EM(M.tag), {
      id: M.id,
      role: M.role,
      "aria-live": M.ariaLive,
      "aria-atomic": S(L),
      class: B(S(N))
    }, {
      default: b(() => [
        Q(j.$slots, "default", {}, () => [
          DM(F(M.text), 1)
        ])
      ]),
      _: 3
    }, 8, ["id", "role", "aria-live", "aria-atomic", "class"]));
  }
}), Dp = ["id", "disabled", "required", "name", "form", "aria-label", "aria-labelledby", "aria-required", "value", "indeterminate"], tp = ["for"], Np = {
  inheritAttrs: !1
}, HE = /* @__PURE__ */ f({
  ...Np,
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
    const I = M, g = wA(), D = SA(y(I, "id"), "form-check"), t = c(
      y(I, "indeterminate")
    ), N = c(y(I, "autofocus")), L = c(y(I, "plain")), j = c(y(I, "button")), i = c(y(I, "switch")), u = c(y(I, "disabled")), e = c(y(I, "inline")), C = c(y(I, "required")), a = c(y(I, "state")), w = gM(null), n = gM(!1), o = x(() => !UA(g.default)), E = x({
      get: () => I.uncheckedValue ? Array.isArray(I.modelValue) ? I.modelValue.indexOf(I.value) > -1 : I.modelValue === I.value : I.modelValue,
      set: (v) => {
        let d = v;
        Array.isArray(I.modelValue) ? I.uncheckedValue && (d = I.modelValue, v ? (d.indexOf(I.uncheckedValue) > -1 && d.splice(d.indexOf(I.uncheckedValue), 1), d.push(I.value)) : (d.indexOf(I.value) > -1 && d.splice(d.indexOf(I.value), 1), d.push(I.uncheckedValue))) : d = v ? I.value : I.uncheckedValue, A("input", d), A("update:modelValue", d), A("change", d);
      }
    }), l = x(() => Array.isArray(I.modelValue) ? I.modelValue.indexOf(I.value) > -1 : JSON.stringify(I.modelValue) === JSON.stringify(I.value)), Y = $A({
      plain: y(L, "value"),
      button: y(j, "value"),
      inline: y(e, "value"),
      switch: y(i, "value"),
      size: y(I, "size"),
      state: y(a, "value"),
      buttonVariant: y(I, "buttonVariant")
    }), z = r0(Y), m = z0(Y), W = Y0(Y);
    return $M(() => {
      N.value && w.value.focus();
    }), (v, d) => (T(), r("div", {
      class: B(S(z))
    }, [
      _M(s("input", wM({ id: S(D) }, v.$attrs, {
        ref_key: "input",
        ref: w,
        "onUpdate:modelValue": d[0] || (d[0] = (U) => sA(E) ? E.value = U : null),
        class: S(m),
        type: "checkbox",
        disabled: S(u),
        required: !!M.name && !!S(C),
        name: M.name,
        form: M.form,
        "aria-label": M.ariaLabel,
        "aria-labelledby": M.ariaLabelledBy,
        "aria-required": M.name && S(C) ? "true" : void 0,
        value: M.value,
        indeterminate: S(t),
        onFocus: d[1] || (d[1] = (U) => n.value = !0),
        onBlur: d[2] || (d[2] = (U) => n.value = !1)
      }), null, 16, Dp), [
        [lg, S(E)]
      ]),
      S(o) || !S(L) ? (T(), r("label", {
        key: 0,
        for: S(D),
        class: B([S(W), { active: S(l), focus: n.value }])
      }, [
        Q(v.$slots, "default")
      ], 10, tp)) : P("", !0)
    ], 2));
  }
}), Lp = ["id"], jp = ["innerHTML"], up = ["textContent"], ip = /* @__PURE__ */ f({
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
    const I = M, g = wA(), D = "BFormCheckbox", t = SA(y(I, "id"), "checkbox"), N = SA(y(I, "name"), "checkbox");
    c(y(I, "autofocus"));
    const L = c(y(I, "buttons")), j = c(y(I, "disabled"));
    c(y(I, "plain"));
    const i = c(y(I, "required")), u = c(y(I, "stacked")), e = c(y(I, "state")), C = c(y(I, "switches")), a = c(y(I, "validated")), w = x({
      get: () => I.modelValue,
      set: (Y) => {
        if (JSON.stringify(Y) === JSON.stringify(I.modelValue))
          return;
        const z = I.options.filter(
          (m) => Y.map((W) => JSON.stringify(W)).includes(JSON.stringify(typeof m == "string" ? m : m[I.valueField]))
        ).map((m) => typeof m == "string" ? m : m[I.valueField]);
        A("input", z), A("update:modelValue", z), A("change", z);
      }
    }), n = x(
      () => (g.first ? tL(g.first(), D, j.value) : []).concat(I.options.map((Y) => U0(Y, I))).concat(g.default ? tL(g.default(), D, j.value) : []).map((Y, z) => h0(Y, z, I, N, t)).map((Y) => ({
        ...Y,
        props: {
          switch: C.value,
          ...Y.props
        }
      }))
    ), o = $A({
      required: y(i, "value"),
      ariaInvalid: y(I, "ariaInvalid"),
      state: y(e, "value"),
      validated: y(a, "value"),
      buttons: y(L, "value"),
      stacked: y(u, "value"),
      size: y(I, "size")
    }), E = d0(o), l = m0(o);
    return (Y, z) => (T(), r("div", wM(S(E), {
      id: S(t),
      role: "group",
      class: [S(l), "bv-no-focus-ring"],
      tabindex: "-1"
    }), [
      (T(!0), r(MM, null, aM(S(n), (m, W) => (T(), V(HE, wM({
        key: W,
        modelValue: S(w),
        "onUpdate:modelValue": z[0] || (z[0] = (v) => sA(w) ? w.value = v : null)
      }, m.props), {
        default: b(() => [
          m.html ? (T(), r("span", {
            key: 0,
            innerHTML: m.html
          }, null, 8, jp)) : (T(), r("span", {
            key: 1,
            textContent: F(m.text)
          }, null, 8, up))
        ]),
        _: 2
      }, 1040, ["modelValue"]))), 128))
    ], 16, Lp));
  }
}), _E = ["input", "select", "textarea"], ep = _E.map((M) => `${M}:not([disabled])`).join(), Sp = [..._E, "a", "button", "label"], Cp = "label", ap = "invalid-feedback", wp = "valid-feedback", Ep = "description", Tp = "default", np = f({
  components: { BCol: PD, BFormInvalidFeedback: Zu, BFormRow: hN, BFormText: Pu, BFormValidFeedback: Bu },
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
    const I = c(y(M, "disabled")), g = c(y(M, "labelSrOnly")), D = c(y(M, "state")), t = c(y(M, "tooltip")), N = c(y(M, "validated")), L = c(y(M, "floating")), j = null, i = ["xs", "sm", "md", "lg", "xl"], u = (W, v) => i.reduce((d, U) => {
      const Z = dS(U === "xs" ? "" : U, `${v}Align`), R = W[Z] || null;
      return R && (U === "xs" ? d.push(`text-${R}`) : d.push(`text-${U}-${R}`)), d;
    }, []), e = (W, v) => i.reduce((d, U) => {
      const Z = dS(U === "xs" ? "" : U, `${v}Cols`);
      let R = W[Z];
      return R = R === "" ? !0 : R || !1, typeof R != "boolean" && R !== "auto" && (R = ZD(R, 0), R = R > 0 ? R : !1), R && (U === "xs" ? d.cols = R : d[U || (typeof R == "boolean" ? "col" : "cols")] = R), d;
    }, {}), C = gM(), a = (W, v = null) => {
      if (qm && M.labelFor) {
        const d = x0(`#${Hm(M.labelFor)}`, C);
        if (d) {
          const U = "aria-describedby", Z = (W || "").split(zN), R = (v || "").split(zN), AM = (Zi(d, U) || "").split(zN).filter((LM) => !R.includes(LM)).concat(Z).filter((LM, IM, lM) => lM.indexOf(LM) === IM).filter((LM) => LM).join(" ").trim();
          AM ? uU(d, U, AM) : iU(d, U);
        }
      }
    }, w = x(() => e(M, "content")), n = x(() => u(M, "label")), o = x(() => e(M, "label")), E = x(
      () => Object.keys(w.value).length > 0 || Object.keys(o.value).length > 0
    ), l = x(
      () => typeof D.value == "boolean" ? D.value : null
    ), Y = x(() => {
      const W = l.value;
      return W === !0 ? "is-valid" : W === !1 ? "is-invalid" : null;
    }), z = x(
      () => GL(A.ariaInvalid, D.value)
    );
    return dM(
      () => j,
      (W, v) => {
        W !== v && a(W, v);
      }
    ), $M(() => {
      EI(() => {
        a(j);
      });
    }), {
      disabledBoolean: I,
      labelSrOnlyBoolean: g,
      stateBoolean: D,
      tooltipBoolean: t,
      validatedBoolean: N,
      floatingBoolean: L,
      ariaDescribedby: j,
      computedAriaInvalid: z,
      contentColProps: w,
      isHorizontal: E,
      labelAlignClasses: n,
      labelColProps: o,
      onLegendClick: (W) => {
        if (M.labelFor)
          return;
        const { target: v } = W, d = v ? v.tagName : "";
        if (Sp.indexOf(d) !== -1)
          return;
        const U = LU(ep, C).filter(NU);
        U.length === 1 && DU(U[0]);
      },
      stateClass: Y
    };
  },
  render() {
    const M = this.$props, A = this.$slots, I = SA(), g = !M.labelFor;
    let D = null;
    const t = FA(Cp, {}, A) || M.label, N = t ? wI("_BV_label_") : null;
    if (t || this.isHorizontal) {
      const z = g ? "legend" : "label";
      if (this.labelSrOnlyBoolean)
        t && (D = rM(
          z,
          {
            class: "visually-hidden",
            id: N,
            for: M.labelFor || null
          },
          t
        )), this.isHorizontal ? D = rM(PD, this.labelColProps, { default: () => D }) : D = rM("div", {}, [D]);
      else {
        const m = {
          onClick: g ? this.onLegendClick : null,
          ...this.isHorizontal ? this.labelColProps : {},
          tag: this.isHorizontal ? z : null,
          id: N,
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
        this.isHorizontal ? D = rM(PD, m, { default: () => t }) : D = rM(z, m, t);
      }
    }
    let L = null;
    const j = FA(ap, {}, A) || this.invalidFeedback, i = j ? wI("_BV_feedback_invalid_") : void 0;
    j && (L = rM(
      Zu,
      {
        ariaLive: M.feedbackAriaLive,
        id: i,
        state: this.stateBoolean,
        tooltip: this.tooltipBoolean
      },
      { default: () => j }
    ));
    let u = null;
    const e = FA(wp, {}, A) || this.validFeedback, C = e ? wI("_BV_feedback_valid_") : void 0;
    e && (u = rM(
      Bu,
      {
        ariaLive: M.feedbackAriaLive,
        id: C,
        state: this.stateBoolean,
        tooltip: this.tooltipBoolean
      },
      { default: () => e }
    ));
    let a = null;
    const w = FA(Ep, {}, A) || this.description, n = w ? wI("_BV_description_") : void 0;
    w && (a = rM(
      Pu,
      {
        id: n
      },
      { default: () => w }
    ));
    const o = this.ariaDescribedby = [
      n,
      this.stateBoolean === !1 ? i : null,
      this.stateBoolean === !0 ? C : null
    ].filter((z) => z).join(" ") || null, E = [
      FA(Tp, { ariaDescribedby: o, descriptionId: n, id: I, labelId: N }, A) || "",
      L,
      u,
      a
    ];
    !this.isHorizontal && this.floatingBoolean && E.push(D);
    let l = rM(
      "div",
      {
        ref: "content",
        class: [
          {
            "form-floating": !this.isHorizontal && this.floatingBoolean
          }
        ]
      },
      E
    );
    this.isHorizontal && (l = rM(PD, { ref: "content", ...this.contentColProps }, { default: () => E }));
    const Y = {
      class: [
        "mb-3",
        this.stateClass,
        {
          "was-validated": this.validatedBoolean
        }
      ],
      id: SA(y(M, "id")).value,
      disabled: g ? this.disabledBoolean : null,
      role: g ? null : "group",
      "aria-invalid": this.computedAriaInvalid,
      "aria-labelledby": g && this.isHorizontal ? N : null
    };
    return this.isHorizontal && !g ? rM(hN, Y, { default: () => [D, l] }) : rM(
      g ? "fieldset" : "div",
      Y,
      this.isHorizontal && g ? [rM(hN, {}, { default: () => [D, l] })] : this.isHorizontal || !this.floatingBoolean ? [D, l] : [l]
    );
  }
}), TC = [
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
], xp = f({
  props: {
    ...O0,
    max: { type: [String, Number], required: !1 },
    min: { type: [String, Number], required: !1 },
    step: { type: [String, Number], required: !1 },
    type: {
      type: String,
      default: "text",
      validator: (M) => TC.includes(M)
    }
  },
  emits: ["update:modelValue", "change", "blur", "input"],
  setup(M, { emit: A }) {
    const { input: I, computedId: g, computedAriaInvalid: D, onInput: t, onChange: N, onBlur: L, focus: j, blur: i } = b0(M, A), u = gM(!1), e = x(() => {
      const w = M.type === "range", n = M.type === "color";
      return {
        "form-control-highlighted": u.value,
        "form-range": w,
        "form-control": n || !M.plaintext && !w,
        "form-control-color": n,
        "form-control-plaintext": M.plaintext && !w && !n,
        [`form-control-${M.size}`]: !!M.size,
        "is-valid": M.state === !0,
        "is-invalid": M.state === !1
      };
    }), C = x(
      () => TC.includes(M.type) ? M.type : "text"
    );
    return {
      computedClasses: e,
      localType: C,
      input: I,
      computedId: g,
      computedAriaInvalid: D,
      onInput: t,
      onChange: N,
      onBlur: L,
      focus: j,
      blur: i,
      highlight: () => {
        u.value !== !0 && (u.value = !0, setTimeout(() => {
          u.value = !1;
        }, 2e3));
      }
    };
  }
}), op = ["id", "name", "form", "type", "disabled", "placeholder", "required", "autocomplete", "readonly", "min", "max", "step", "list", "aria-required", "aria-invalid"];
function yp(M, A, I, g, D, t) {
  return T(), r("input", wM({
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
    onInput: A[0] || (A[0] = (N) => M.onInput(N)),
    onChange: A[1] || (A[1] = (N) => M.onChange(N)),
    onBlur: A[2] || (A[2] = (N) => M.onBlur(N))
  }), null, 16, op);
}
const lp = /* @__PURE__ */ PM(xp, [["render", yp]]), sp = ["id", "disabled", "required", "name", "form", "aria-label", "aria-labelledby", "value", "aria-required"], cp = ["for"], $E = /* @__PURE__ */ f({
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
    const I = M, g = wA(), D = SA(y(I, "id"), "form-check"), t = c(y(I, "autofocus")), N = c(y(I, "plain")), L = c(y(I, "button")), j = c(y(I, "switch")), i = c(y(I, "disabled")), u = c(y(I, "inline")), e = c(y(I, "required")), C = c(y(I, "state")), a = gM(null), w = gM(!1), n = x({
      get: () => Array.isArray(I.modelValue) ? I.modelValue[0] : I.modelValue,
      set: (W) => {
        const v = W ? I.value : !1, d = Array.isArray(I.modelValue) ? [v] : v;
        A("input", d), A("change", d), A("update:modelValue", d);
      }
    }), o = x(() => Array.isArray(I.modelValue) ? (I.modelValue || []).find((W) => W === I.value) : JSON.stringify(I.modelValue) === JSON.stringify(I.value)), E = x(() => !UA(g.default)), l = $A({
      plain: y(N, "value"),
      button: y(L, "value"),
      inline: y(u, "value"),
      switch: y(j, "value"),
      size: y(I, "size"),
      state: y(C, "value"),
      buttonVariant: y(I, "buttonVariant")
    }), Y = r0(l), z = z0(l), m = Y0(l);
    return $M(() => {
      t.value && a.value !== null && a.value.focus();
    }), (W, v) => (T(), r("div", {
      class: B(S(Y))
    }, [
      _M(s("input", wM({ id: S(D) }, W.$attrs, {
        ref_key: "input",
        ref: a,
        "onUpdate:modelValue": v[0] || (v[0] = (d) => sA(n) ? n.value = d : null),
        class: S(z),
        type: "radio",
        disabled: S(i),
        required: !!M.name && !!S(e),
        name: M.name,
        form: M.form,
        "aria-label": M.ariaLabel,
        "aria-labelledby": M.ariaLabelledBy,
        value: M.value,
        "aria-required": M.name && S(e) ? !0 : void 0,
        onFocus: v[1] || (v[1] = (d) => w.value = !0),
        onBlur: v[2] || (v[2] = (d) => w.value = !1)
      }), null, 16, sp), [
        [dC, S(n)]
      ]),
      S(E) || !S(N) ? (T(), r("label", {
        key: 0,
        for: S(D),
        class: B([S(m), { active: S(o), focus: w.value }])
      }, [
        Q(W.$slots, "default")
      ], 10, cp)) : P("", !0)
    ], 2));
  }
}), rp = ["id"], zp = ["innerHTML"], Yp = ["textContent"], dp = /* @__PURE__ */ f({
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
    const I = M, g = wA(), D = "BFormRadio", t = SA(y(I, "id"), "radio"), N = SA(y(I, "name"), "checkbox");
    c(y(I, "autofocus"));
    const L = c(y(I, "buttons")), j = c(y(I, "disabled"));
    c(y(I, "plain"));
    const i = c(y(I, "required")), u = c(y(I, "stacked")), e = c(y(I, "state")), C = c(y(I, "validated")), a = x({
      get: () => I.modelValue,
      set: (l) => {
        A("input", l), A("update:modelValue", l), A("change", l);
      }
    }), w = x(
      () => (g.first ? tL(g.first(), D, j.value) : []).concat(I.options.map((l) => U0(l, I))).concat(g.default ? tL(g.default(), D, j.value) : []).map((l, Y) => h0(l, Y, I, N, t)).map((l) => ({
        ...l
      }))
    ), n = $A({
      required: y(i, "value"),
      ariaInvalid: y(I, "ariaInvalid"),
      state: y(e, "value"),
      validated: y(C, "value"),
      buttons: y(L, "value"),
      stacked: y(u, "value"),
      size: y(I, "size")
    }), o = d0(n), E = m0(n);
    return (l, Y) => (T(), r("div", wM(S(o), {
      id: S(t),
      role: "radiogroup",
      class: [S(E), "bv-no-focus-ring"],
      tabindex: "-1"
    }), [
      (T(!0), r(MM, null, aM(S(w), (z, m) => (T(), V($E, wM({
        key: m,
        modelValue: S(a),
        "onUpdate:modelValue": Y[0] || (Y[0] = (W) => sA(a) ? a.value = W : null)
      }, z.props), {
        default: b(() => [
          z.html ? (T(), r("span", {
            key: 0,
            innerHTML: z.html
          }, null, 8, zp)) : (T(), r("span", {
            key: 1,
            textContent: F(z.text)
          }, null, 8, Yp))
        ]),
        _: 2
      }, 1040, ["modelValue"]))), 128))
    ], 16, rp));
  }
}), mp = ["value", "disabled"], e4 = /* @__PURE__ */ f({
  __name: "BFormSelectOption",
  props: {
    value: null,
    disabled: { default: !1 }
  },
  setup(M) {
    const I = c(y(M, "disabled"));
    return (g, D) => (T(), r("option", {
      value: M.value,
      disabled: S(I)
    }, [
      Q(g.$slots, "default")
    ], 8, mp));
  }
}), Up = ["label"], qE = /* @__PURE__ */ f({
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
    const A = M, I = x(
      () => Bi(A.options, "BFormSelectOptionGroup", A)
    );
    return (g, D) => (T(), r("optgroup", { label: M.label }, [
      Q(g.$slots, "first"),
      (T(!0), r(MM, null, aM(S(I), (t, N) => (T(), V(e4, wM({
        key: N,
        value: t.value,
        disabled: t.disabled
      }, g.$attrs, {
        innerHTML: t.html || t.text
      }), null, 16, ["value", "disabled", "innerHTML"]))), 128)),
      Q(g.$slots, "default")
    ], 8, Up));
  }
}), hp = ["id", "name", "form", "multiple", "size", "disabled", "required", "aria-required", "aria-invalid"], Op = /* @__PURE__ */ f({
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
    const g = M, D = SA(y(g, "id"), "input"), t = c(y(g, "autofocus")), N = c(y(g, "disabled")), L = c(y(g, "multiple")), j = c(y(g, "plain")), i = c(y(g, "required")), u = c(y(g, "state")), e = gM(), C = x(() => ({
      "form-control": j.value,
      [`form-control-${g.size}`]: g.size && j.value,
      "form-select": !j.value,
      [`form-select-${g.size}`]: g.size && !j.value,
      "is-valid": u.value === !0,
      "is-invalid": u.value === !1
    })), a = x(() => {
      if (g.selectSize || j.value)
        return g.selectSize;
    }), w = x(
      () => GL(g.ariaInvalid, u.value)
    ), n = x(
      () => Bi(g.options, "BFormSelect", g)
    ), o = x({
      get() {
        return g.modelValue;
      },
      set(z) {
        I("change", z), I("update:modelValue", z), I("input", z);
      }
    }), E = () => {
      var z;
      N.value || (z = e.value) == null || z.focus();
    }, l = () => {
      var z;
      N.value || (z = e.value) == null || z.blur();
    }, Y = () => {
      EI(() => {
        var z;
        t.value && ((z = e.value) == null || z.focus());
      });
    };
    return $M(Y), Ru(Y), A({
      blur: l,
      focus: E
    }), (z, m) => _M((T(), r("select", wM({
      id: S(D),
      ref_key: "input",
      ref: e
    }, z.$attrs, {
      "onUpdate:modelValue": m[0] || (m[0] = (W) => sA(o) ? o.value = W : null),
      class: S(C),
      name: M.name,
      form: M.form || void 0,
      multiple: S(L) || void 0,
      size: S(a),
      disabled: S(N),
      required: S(i),
      "aria-required": S(i) ? !0 : void 0,
      "aria-invalid": S(w)
    }), [
      Q(z.$slots, "first"),
      (T(!0), r(MM, null, aM(S(n), (W, v) => (T(), r(MM, { key: v }, [
        Array.isArray(W.options) ? (T(), V(qE, {
          key: 0,
          label: W.label,
          options: W.options
        }, null, 8, ["label", "options"])) : (T(), V(e4, {
          key: 1,
          value: W.value,
          disabled: W.disabled,
          innerHTML: W.html || W.text
        }, null, 8, ["value", "disabled", "innerHTML"]))
      ], 64))), 128)),
      Q(z.$slots, "default")
    ], 16, hp)), [
      [LD, S(o)]
    ]);
  }
}), bp = ["id"], KE = /* @__PURE__ */ f({
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
    const I = M, g = wA(), D = SA(y(I, "id")), t = c(y(I, "disabled")), N = c(y(I, "noRemove")), L = c(y(I, "pill")), j = x(
      () => {
        var e, C, a;
        return (a = ((C = (e = g.default) == null ? void 0 : e.call(g)[0].children) == null ? void 0 : C.toString()) || I.title) != null ? a : "";
      }
    ), i = x(() => `${D.value}taglabel__`), u = x(() => [
      `bg-${I.variant}`,
      {
        "text-dark": ["warning", "info", "light"].includes(I.variant),
        "rounded-pill": L.value,
        disabled: t.value
      }
    ]);
    return (e, C) => (T(), V(EM(M.tag), {
      id: S(D),
      title: S(j),
      class: B(["badge b-form-tag d-inline-flex align-items-center mw-100", S(u)]),
      "aria-labelledby": S(i)
    }, {
      default: b(() => [
        s("span", {
          id: S(i),
          class: "b-form-tag-content flex-grow-1 text-truncate"
        }, [
          Q(e.$slots, "default", {}, () => [
            DM(F(S(j)), 1)
          ])
        ], 8, bp),
        !S(t) && !S(N) ? (T(), V(WD, {
          key: 0,
          "aria-keyshortcuts": "Delete",
          "aria-label": M.removeLabel,
          class: "b-form-tag-remove",
          white: !["warning", "info", "light"].includes(M.variant),
          "aria-describedby": S(i),
          "aria-controls": M.id,
          onClick: C[0] || (C[0] = (a) => A("remove", S(j)))
        }, null, 8, ["aria-label", "white", "aria-describedby", "aria-controls"])) : P("", !0)
      ]),
      _: 3
    }, 8, ["id", "title", "class", "aria-labelledby"]));
  }
}), Wp = ["id"], kp = ["id", "for", "aria-live"], pp = ["id", "aria-live"], Qp = ["id"], fp = ["aria-controls"], vp = {
  role: "group",
  class: "d-flex"
}, Gp = ["id", "disabled", "value", "type", "placeholder", "form", "required"], Jp = ["disabled"], Vp = {
  "aria-live": "polite",
  "aria-atomic": "true"
}, Zp = {
  key: 0,
  class: "d-block invalid-feedback"
}, Pp = {
  key: 1,
  class: "form-text text-muted"
}, Bp = {
  key: 2,
  class: "form-text text-muted"
}, Fp = ["name", "value"], Xp = /* @__PURE__ */ f({
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
    const I = M, g = SA(), D = c(y(I, "addOnChange")), t = c(y(I, "autofocus")), N = c(y(I, "disabled")), L = c(y(I, "noAddOnEnter")), j = c(y(I, "noOuterFocus")), i = c(y(I, "noTagRemove")), u = c(y(I, "removeOnDelete")), e = c(y(I, "required")), C = c(y(I, "state")), a = c(y(I, "tagPills")), w = gM(null), n = x(() => I.inputId || `${g.value}input__`), o = gM(I.modelValue), E = gM(""), l = gM(!1), Y = gM(!1), z = gM(""), m = gM([]), W = gM([]), v = gM([]), d = x(() => ({
      [`form-control-${I.size}`]: I.size !== void 0,
      disabled: N.value,
      focus: Y.value,
      "is-invalid": C.value === !1,
      "is-valid": C.value === !0
    })), U = x(() => o.value.includes(E.value)), Z = x(
      () => E.value === "" ? !1 : !I.tagValidator(E.value)
    ), R = x(() => o.value.length === I.limit), AM = x(() => !Z.value && !U.value), LM = x(() => ({
      addButtonText: I.addButtonText,
      addButtonVariant: I.addButtonVariant,
      addTag: GM,
      disableAddButton: AM.value,
      disabled: N.value,
      duplicateTagText: I.duplicateTagText,
      duplicateTags: v.value,
      form: I.form,
      inputAttrs: {
        ...I.inputAttrs,
        disabled: N.value,
        form: I.form,
        id: n,
        value: E
      },
      inputHandlers: {
        input: bM,
        keydown: hM,
        change: oM
      },
      inputId: n,
      inputType: I.inputType,
      invalidTagText: I.invalidTagText,
      invalidTags: W.value,
      isDuplicate: U.value,
      isInvalid: Z.value,
      isLimitReached: R.value,
      limitTagsText: I.limitTagsText,
      limit: I.limit,
      noTagRemove: i.value,
      placeholder: I.placeholder,
      removeTag: BM,
      required: e.value,
      separator: I.separator,
      size: I.size,
      state: C.value,
      tagClass: I.tagClass,
      tagPills: a.value,
      tagRemoveLabel: I.tagRemoveLabel,
      tagVariant: I.tagVariant,
      tags: o.value
    }));
    dM(
      () => I.modelValue,
      (CM) => {
        o.value = CM;
      }
    );
    const IM = () => {
      var CM;
      t.value && ((CM = w.value) == null || CM.focus());
    }, lM = (CM) => {
      if (N.value) {
        CM.target.blur();
        return;
      }
      A("focusin", CM);
    }, SM = (CM) => {
      N.value || j.value || (Y.value = !0, A("focus", CM));
    }, uM = (CM) => {
      Y.value = !1, A("blur", CM);
    }, bM = (CM) => {
      var J, _;
      const YM = typeof CM == "string" ? CM : CM.target.value;
      if (l.value = !1, ((J = I.separator) == null ? void 0 : J.includes(YM.charAt(0))) && YM.length > 0) {
        w.value && (w.value.value = "");
        return;
      }
      if (E.value = YM, (_ = I.separator) != null && _.includes(YM.charAt(YM.length - 1))) {
        GM(YM.slice(0, YM.length - 1));
        return;
      }
      m.value = I.tagValidator(YM) && !U.value ? [YM] : [], W.value = I.tagValidator(YM) ? [] : [YM], v.value = U.value ? [YM] : [], A("tag-state", m.value, W.value, v.value);
    }, oM = (CM) => {
      D.value && (bM(CM), U.value || GM(E.value));
    }, hM = (CM) => {
      if (CM.key === "Enter" && !L.value) {
        GM(E.value);
        return;
      }
      (CM.key === "Backspace" || CM.key === "Delete") && u.value && E.value === "" && l.value && o.value.length > 0 ? BM(o.value[o.value.length - 1]) : l.value = !0;
    }, GM = (CM) => {
      var J;
      if (CM = (CM || E.value).trim(), CM === "" || U.value || !I.tagValidator(CM) || I.limit && R.value)
        return;
      const YM = [...I.modelValue, CM];
      E.value = "", l.value = !0, A("update:modelValue", YM), A("input", YM), (J = w.value) == null || J.focus();
    }, BM = (CM) => {
      var J;
      const YM = o.value.indexOf((J = CM == null ? void 0 : CM.toString()) != null ? J : "");
      z.value = o.value.splice(YM, 1).toString(), A("update:modelValue", o.value);
    };
    return $M(() => {
      IM(), I.modelValue.length > 0 && (l.value = !0);
    }), Ru(() => IM()), (CM, YM) => (T(), r("div", {
      id: S(g),
      class: B(["b-form-tags form-control h-auto", S(d)]),
      role: "group",
      tabindex: "-1",
      onFocusin: lM,
      onFocusout: YM[1] || (YM[1] = (J) => A("focusout", J))
    }, [
      s("output", {
        id: `${S(g)}selected_tags__`,
        class: "visually-hidden",
        role: "status",
        for: S(n),
        "aria-live": Y.value ? "polite" : "off",
        "aria-atomic": "true",
        "aria-relevant": "additions text"
      }, F(o.value.join(", ")), 9, kp),
      s("div", {
        id: `${S(g)}removed_tags__`,
        role: "status",
        "aria-live": Y.value ? "assertive" : "off",
        "aria-atomic": "true",
        class: "visually-hidden"
      }, " (" + F(M.tagRemovedLabel) + ") " + F(z.value), 9, pp),
      Q(CM.$slots, "default", DA(nA(S(LM))), () => [
        s("ul", {
          id: `${S(g)}tag_list__`,
          class: "b-form-tags-list list-unstyled mb-0 d-flex flex-wrap align-items-center"
        }, [
          (T(!0), r(MM, null, aM(o.value, (J, _) => Q(CM.$slots, "tag", DA(wM({ key: _ }, { tag: J, tagClass: M.tagClass, tagVariant: M.tagVariant, tagPills: S(a), removeTag: BM })), () => [
            k(KE, {
              class: B(M.tagClass),
              tag: "li",
              variant: M.tagVariant,
              pill: M.tagPills,
              onRemove: BM
            }, {
              default: b(() => [
                DM(F(J), 1)
              ]),
              _: 2
            }, 1032, ["class", "variant", "pill"])
          ])), 128)),
          s("li", {
            role: "none",
            "aria-live": "off",
            class: "b-from-tags-field flex-grow-1",
            "aria-controls": `${S(g)}tag_list__`
          }, [
            s("div", vp, [
              s("input", wM({
                id: S(n),
                ref_key: "input",
                ref: w,
                disabled: S(N),
                value: E.value,
                type: M.inputType,
                placeholder: M.placeholder,
                class: "b-form-tags-input w-100 flex-grow-1 p-0 m-0 bg-transparent border-0",
                style: { outline: "currentcolor none 0px", "min-width": "5rem" }
              }, M.inputAttrs, {
                form: M.form,
                required: S(e),
                onInput: bM,
                onChange: oM,
                onKeydown: hM,
                onFocus: SM,
                onBlur: uM
              }), null, 16, Gp),
              S(AM) ? (T(), r("button", {
                key: 0,
                type: "button",
                class: B(["btn b-form-tags-button py-0", [
                  `btn-${M.addButtonVariant}`,
                  {
                    "disabled invisible": E.value.length === 0
                  },
                  M.inputClass
                ]]),
                style: { "font-size": "90%" },
                disabled: S(N) || E.value.length === 0 || S(R),
                onClick: YM[0] || (YM[0] = (J) => GM(E.value))
              }, [
                Q(CM.$slots, "add-button-text", {}, () => [
                  DM(F(M.addButtonText), 1)
                ])
              ], 10, Jp)) : P("", !0)
            ])
          ], 8, fp)
        ], 8, Qp),
        s("div", Vp, [
          S(Z) ? (T(), r("div", Zp, F(M.invalidTagText) + ": " + F(E.value), 1)) : P("", !0),
          S(U) ? (T(), r("small", Pp, F(M.duplicateTagText) + ": " + F(E.value), 1)) : P("", !0),
          o.value.length === M.limit ? (T(), r("small", Bp, "Tag limit reached")) : P("", !0)
        ])
      ]),
      M.name ? (T(!0), r(MM, { key: 0 }, aM(o.value, (J, _) => (T(), r("input", {
        key: _,
        type: "hidden",
        name: M.name,
        value: J
      }, null, 8, Fp))), 128)) : P("", !0)
    ], 42, Wp));
  }
}), Rp = f({
  props: {
    ...O0,
    noResize: { type: [Boolean, String], default: !1 },
    rows: { type: [String, Number], required: !1, default: 2 },
    wrap: { type: String, default: "soft" }
  },
  emits: ["update:modelValue", "change", "blur", "input"],
  setup(M, { emit: A }) {
    const { input: I, computedId: g, computedAriaInvalid: D, onInput: t, onChange: N, onBlur: L, focus: j, blur: i } = b0(M, A), u = c(y(M, "noResize")), e = x(() => ({
      "form-control": !M.plaintext,
      "form-control-plaintext": M.plaintext,
      [`form-control-${M.size}`]: !!M.size,
      "is-valid": M.state === !0,
      "is-invalid": M.state === !1
    })), C = x(
      () => u.value ? { resize: "none" } : void 0
    );
    return {
      input: I,
      computedId: g,
      computedAriaInvalid: D,
      onInput: t,
      onChange: N,
      onBlur: L,
      focus: j,
      blur: i,
      computedClasses: e,
      computedStyles: C
    };
  }
}), Hp = ["id", "name", "form", "disabled", "placeholder", "required", "autocomplete", "readonly", "aria-required", "aria-invalid", "rows", "wrap"];
function _p(M, A, I, g, D, t) {
  return T(), r("textarea", wM({
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
    onInput: A[0] || (A[0] = (N) => M.onInput(N)),
    onChange: A[1] || (A[1] = (N) => M.onChange(N)),
    onBlur: A[2] || (A[2] = (N) => M.onBlur(N))
  }), null, 16, Hp);
}
const $p = /* @__PURE__ */ PM(Rp, [["render", _p]]), qp = {
  key: 0,
  class: "input-group-text"
}, Kp = ["innerHTML"], MQ = { key: 1 }, AQ = {
  key: 0,
  class: "input-group-text"
}, IQ = ["innerHTML"], gQ = { key: 1 }, DQ = /* @__PURE__ */ f({
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
    const A = M, I = x(() => ({
      "input-group-sm": A.size === "sm",
      "input-group-lg": A.size === "lg"
    })), g = x(() => !!A.append || !!A.appendHtml), D = x(() => !!A.prepend || !!A.prependHtml);
    return (t, N) => (T(), V(EM(M.tag), {
      id: M.id,
      class: B(["input-group", S(I)]),
      role: "group"
    }, {
      default: b(() => [
        Q(t.$slots, "prepend", {}, () => [
          S(D) ? (T(), r("span", qp, [
            M.prependHtml ? (T(), r("span", {
              key: 0,
              innerHTML: M.prependHtml
            }, null, 8, Kp)) : (T(), r("span", MQ, F(M.prepend), 1))
          ])) : P("", !0)
        ]),
        Q(t.$slots, "default"),
        Q(t.$slots, "append", {}, () => [
          S(g) ? (T(), r("span", AQ, [
            M.appendHtml ? (T(), r("span", {
              key: 0,
              innerHTML: M.appendHtml
            }, null, 8, IQ)) : (T(), r("span", gQ, F(M.append), 1))
          ])) : P("", !0)
        ])
      ]),
      _: 3
    }, 8, ["id", "class"]));
  }
}), MT = /* @__PURE__ */ f({
  __name: "BInputGroupText",
  props: {
    tag: { default: "div" },
    text: null
  },
  setup(M) {
    return (A, I) => (T(), V(EM(M.tag), { class: "input-group-text" }, {
      default: b(() => [
        Q(A.$slots, "default", {}, () => [
          DM(F(M.text), 1)
        ])
      ]),
      _: 3
    }));
  }
}), S4 = /* @__PURE__ */ f({
  __name: "BInputGroupAddon",
  props: {
    isText: { default: !1 }
  },
  setup(M) {
    const I = c(y(M, "isText"));
    return (g, D) => S(I) ? (T(), V(MT, { key: 0 }, {
      default: b(() => [
        Q(g.$slots, "default")
      ]),
      _: 3
    })) : Q(g.$slots, "default", { key: 1 });
  }
}), tQ = /* @__PURE__ */ f({
  __name: "BInputGroupAppend",
  props: {
    isText: { default: !1 }
  },
  setup(M) {
    return (A, I) => (T(), V(S4, { "is-text": M.isText }, {
      default: b(() => [
        Q(A.$slots, "default")
      ]),
      _: 3
    }, 8, ["is-text"]));
  }
}), NQ = /* @__PURE__ */ f({
  __name: "BInputGroupPrepend",
  props: {
    isText: { default: !1 }
  },
  setup(M) {
    return (A, I) => (T(), V(S4, { "is-text": M.isText }, {
      default: b(() => [
        Q(A.$slots, "default")
      ]),
      _: 3
    }, 8, ["is-text"]));
  }
}), AT = Symbol(), LQ = /* @__PURE__ */ f({
  __name: "BListGroup",
  props: {
    flush: { default: !1 },
    horizontal: { type: [Boolean, String], default: !1 },
    numbered: { default: !1 },
    tag: { default: "div" }
  },
  setup(M) {
    const A = M, I = c(y(A, "flush")), g = c(y(A, "numbered")), D = x(() => {
      const N = I.value ? !1 : A.horizontal;
      return {
        "list-group-flush": I.value,
        "list-group-horizontal": N === !0,
        [`list-group-horizontal-${N}`]: typeof N == "string",
        "list-group-numbered": g.value
      };
    }), t = x(() => g.value === !0 ? "ol" : A.tag);
    return TI(AT, {
      numbered: g.value
    }), (N, L) => (T(), V(EM(S(t)), {
      class: B(["list-group", S(D)])
    }, {
      default: b(() => [
        Q(N.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), jQ = /* @__PURE__ */ f({
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
    const A = M, I = mC(), g = aA(AT, null), D = c(y(A, "action")), t = c(y(A, "active")), N = c(y(A, "button")), L = c(y(A, "disabled")), j = x(() => !N.value && (!!A.href || !!A.to)), i = x(
      () => g != null && g.numbered ? "li" : N.value ? "button" : j.value ? bA : A.tag
    ), u = x(
      () => D.value || j.value || N.value || ["a", "router-link", "button", "b-link"].includes(A.tag)
    ), e = x(() => ({
      [`list-group-item-${A.variant}`]: A.variant !== void 0,
      "list-group-item-action": u.value,
      active: t.value,
      disabled: L.value
    })), C = x(() => {
      const a = {};
      return N.value && ((!I || !I.type) && (a.type = "button"), L.value && (a.disabled = !0)), a;
    });
    return (a, w) => (T(), V(EM(S(i)), wM({
      class: ["list-group-item", S(e)],
      "aria-current": S(t) ? !0 : void 0,
      "aria-disabled": S(L) ? !0 : void 0,
      target: S(j) ? M.target : void 0,
      href: S(N) ? void 0 : M.href,
      to: S(N) ? void 0 : M.to
    }, S(C)), {
      default: b(() => [
        Q(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class", "aria-current", "aria-disabled", "target", "href", "to"]));
  }
}), HL = /* @__PURE__ */ f({
  __name: "BTransition",
  props: {
    appear: { default: !1 },
    mode: null,
    noFade: { default: !1 },
    transProps: null
  },
  setup(M) {
    const A = M, I = c(y(A, "appear")), g = c(y(A, "noFade")), D = x(() => {
      const L = {
        name: "",
        enterActiveClass: "",
        enterToClass: "",
        leaveActiveClass: "",
        leaveToClass: "showing",
        enterFromClass: "showing",
        leaveFromClass: ""
      }, j = {
        ...L,
        enterActiveClass: "fade showing",
        leaveActiveClass: "fade showing"
      };
      return g.value ? L : j;
    }), t = x(() => ({ mode: A.mode, css: !0, ...D.value })), N = x(
      () => A.transProps !== void 0 ? {
        ...t.value,
        ...A.transProps
      } : I.value ? {
        ...t.value,
        appear: !0,
        appearActiveClass: D.value.enterActiveClass,
        appearToClass: D.value.enterToClass
      } : t.value
    );
    return (L, j) => (T(), V(SL, DA(nA(S(N))), {
      default: b(() => [
        Q(L.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), uQ = ["id", "aria-labelledby", "aria-describedby", "onKeyup"], iQ = ["id"], eQ = {
  inheritAttrs: !1
}, SQ = /* @__PURE__ */ f({
  ...eQ,
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
    const I = M, g = wA(), D = SA(y(I, "id"), "modal"), t = c(y(I, "busy")), N = c(y(I, "lazy")), L = c(y(I, "cancelDisabled")), j = c(y(I, "centered")), i = c(y(I, "hideBackdrop")), u = c(y(I, "hideFooter")), e = c(y(I, "hideHeader")), C = c(y(I, "hideHeaderClose")), a = c(y(I, "modelValue")), w = c(y(I, "noCloseOnBackdrop")), n = c(y(I, "noCloseOnEsc")), o = c(y(I, "noFade")), E = c(y(I, "noFocus")), l = c(y(I, "okDisabled")), Y = c(y(I, "okOnly")), z = c(y(I, "scrollable")), m = c(y(I, "titleSrOnly")), W = c(y(I, "static")), v = gM(!1), d = gM(null), U = gM(!1), Z = x(() => [
      I.modalClass,
      {
        fade: !o.value,
        show: v.value
      }
    ]), R = x(() => !UA(g["header-close"])), AM = x(() => [
      I.dialogClass,
      {
        "modal-fullscreen": I.fullscreen === !0,
        [`modal-fullscreen-${I.fullscreen}-down`]: typeof I.fullscreen == "string",
        [`modal-${I.size}`]: I.size !== void 0,
        "modal-dialog-centered": j.value,
        "modal-dialog-scrollable": z.value
      }
    ]), LM = x(() => [
      I.bodyClass,
      {
        [`bg-${I.bodyBgVariant}`]: I.bodyBgVariant !== void 0,
        [`text-${I.bodyTextVariant}`]: I.bodyTextVariant !== void 0
      }
    ]), IM = x(() => [
      I.headerClass,
      {
        [`bg-${I.headerBgVariant}`]: I.headerBgVariant !== void 0,
        [`border-${I.headerBorderVariant}`]: I.headerBorderVariant !== void 0,
        [`text-${I.headerTextVariant}`]: I.headerTextVariant !== void 0
      }
    ]), lM = x(() => [
      I.footerClass,
      {
        [`bg-${I.footerBgVariant}`]: I.footerBgVariant !== void 0,
        [`border-${I.footerBorderVariant}`]: I.footerBorderVariant !== void 0,
        [`text-${I.footerTextVariant}`]: I.footerTextVariant !== void 0
      }
    ]), SM = x(() => [
      I.titleClass,
      {
        ["visually-hidden"]: m.value
      }
    ]), uM = x(() => L.value || t.value), bM = x(() => l.value || t.value), oM = () => A("update:modelValue", !1), hM = (_) => {
      !n.value && a.value && _.key === "Escape" && oM();
    }, GM = () => A("show"), BM = () => {
      v.value = !0, A("shown"), N.value === !0 && (U.value = !0);
    }, CM = () => A("hide"), YM = () => {
      v.value = !1;
    }, J = () => {
      A("hidden"), N.value === !0 && (U.value = !1);
    };
    return dM(
      () => a.value,
      (_) => {
        _ === !0 && !E.value && EI(() => {
          d.value !== null && d.value.focus();
        });
      }
    ), (_, $) => (T(), V(TT, {
      to: "body",
      disabled: S(W)
    }, [
      k(HL, {
        "no-fade": !0,
        "trans-props": { enterToClass: "show" },
        onBeforeEnter: GM,
        onAfterEnter: BM,
        onBeforeLeave: CM,
        onLeave: YM,
        onAfterLeave: J
      }, {
        default: b(() => [
          _M(s("div", wM({
            id: S(D),
            ref_key: "element",
            ref: d,
            class: ["modal", S(Z)],
            role: "dialog",
            "aria-labelledby": `${S(D)}-label`,
            "aria-describedby": `${S(D)}-body`,
            tabindex: "-1"
          }, _.$attrs, {
            onKeyup: YC(hM, ["esc"])
          }), [
            s("div", {
              class: B(["modal-dialog", S(AM)])
            }, [
              !S(N) || S(N) && U.value || S(N) && S(a) === !0 ? (T(), r("div", {
                key: 0,
                class: B(["modal-content", M.contentClass])
              }, [
                S(e) ? P("", !0) : (T(), r("div", {
                  key: 0,
                  class: B(["modal-header", S(IM)])
                }, [
                  Q(_.$slots, "header", {}, () => [
                    (T(), V(EM(M.titleTag), {
                      id: `${S(D)}-label`,
                      class: B(["modal-title", S(SM)])
                    }, {
                      default: b(() => [
                        Q(_.$slots, "title", {}, () => [
                          DM(F(M.title), 1)
                        ], !0)
                      ]),
                      _: 3
                    }, 8, ["id", "class"])),
                    S(C) ? P("", !0) : (T(), r(MM, { key: 0 }, [
                      S(R) ? (T(), r("button", {
                        key: 0,
                        type: "button",
                        "data-bs-dismiss": "modal",
                        onClick: $[0] || ($[0] = (NM) => oM())
                      }, [
                        Q(_.$slots, "header-close", {}, void 0, !0)
                      ])) : (T(), V(WD, {
                        key: 1,
                        "aria-label": M.headerCloseLabel,
                        "data-bs-dismiss": "modal",
                        white: M.headerCloseWhite,
                        onClick: $[1] || ($[1] = (NM) => oM())
                      }, null, 8, ["aria-label", "white"]))
                    ], 64))
                  ], !0)
                ], 2)),
                s("div", {
                  id: `${S(D)}-body`,
                  class: B(["modal-body", S(LM)])
                }, [
                  Q(_.$slots, "default", {}, void 0, !0)
                ], 10, iQ),
                S(u) ? P("", !0) : (T(), r("div", {
                  key: 1,
                  class: B(["modal-footer", S(lM)])
                }, [
                  Q(_.$slots, "footer", {}, () => [
                    Q(_.$slots, "cancel", {}, () => [
                      S(Y) ? P("", !0) : (T(), V(yt, {
                        key: 0,
                        type: "button",
                        class: "btn",
                        disabled: S(uM),
                        size: M.buttonSize,
                        variant: M.cancelVariant,
                        onClick: $[2] || ($[2] = (NM) => (oM(), A("cancel")))
                      }, {
                        default: b(() => [
                          DM(F(M.cancelTitle), 1)
                        ]),
                        _: 1
                      }, 8, ["disabled", "size", "variant"]))
                    ], !0),
                    Q(_.$slots, "ok", {}, () => [
                      k(yt, {
                        type: "button",
                        class: "btn",
                        disabled: S(bM),
                        size: M.buttonSize,
                        variant: M.okVariant,
                        onClick: $[3] || ($[3] = (NM) => (oM(), A("ok")))
                      }, {
                        default: b(() => [
                          DM(F(M.okTitle), 1)
                        ]),
                        _: 1
                      }, 8, ["disabled", "size", "variant"])
                    ], !0)
                  ], !0)
                ], 2))
              ], 2)) : P("", !0)
            ], 2),
            S(i) ? P("", !0) : Q(_.$slots, "backdrop", { key: 0 }, () => [
              s("div", {
                class: "modal-backdrop fade show",
                onClick: $[4] || ($[4] = (NM) => !S(w) && oM())
              })
            ], !0)
          ], 16, uQ), [
            [rC, S(a)]
          ])
        ]),
        _: 3
      })
    ], 8, ["disabled"]));
  }
});
const CQ = /* @__PURE__ */ PM(SQ, [["__scopeId", "data-v-a14859b1"]]), aQ = /* @__PURE__ */ f({
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
    const A = M, I = c(y(A, "cardHeader")), g = c(y(A, "fill")), D = c(y(A, "justified")), t = c(y(A, "pills")), N = c(y(A, "small")), L = c(y(A, "tabs")), j = c(y(A, "vertical")), i = x(() => ({
      "nav-tabs": L.value,
      "nav-pills": t.value && !L.value,
      "card-header-tabs": !j.value && I.value && L.value,
      "card-header-pills": !j.value && I.value && t.value && !L.value,
      "flex-column": j.value,
      "nav-fill": !j.value && g.value,
      "nav-justified": !j.value && D.value,
      [`justify-content-${A.align}`]: !j.value && A.align !== void 0,
      small: N.value
    }));
    return (u, e) => (T(), V(EM(M.tag), {
      class: B(["nav", S(i)])
    }, {
      default: b(() => [
        Q(u.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), wQ = /* @__PURE__ */ f({
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
    const I = M, g = x(() => ({
      floating: I.floating,
      role: I.role,
      id: I.id,
      novalidate: I.novalidate,
      validated: I.validated
    })), D = (t) => A("submit", t);
    return (t, N) => (T(), V(RE, wM(S(g), {
      class: "d-flex",
      onSubmit: Sg(D, ["prevent"])
    }), {
      default: b(() => [
        Q(t.$slots, "default")
      ]),
      _: 3
    }, 16, ["onSubmit"]));
  }
}), EQ = f({
  components: { BLink: bA },
  props: {
    ...kL(kg, ["event", "routerTag"])
  },
  setup(M) {
    return { disabledBoolean: c(y(M, "disabled")) };
  }
}), TQ = { class: "nav-item" };
function nQ(M, A, I, g, D, t) {
  const N = sM("b-link");
  return T(), r("li", TQ, [
    k(N, wM({ class: "nav-link" }, M.$props, {
      "active-class": "active",
      tabindex: M.disabledBoolean ? -1 : void 0,
      "aria-disabled": M.disabledBoolean ? !0 : void 0
    }), {
      default: b(() => [
        Q(M.$slots, "default")
      ]),
      _: 3
    }, 16, ["tabindex", "aria-disabled"])
  ]);
}
const xQ = /* @__PURE__ */ PM(EQ, [["render", nQ]]), oQ = { class: "nav-item dropdown" }, yQ = /* @__PURE__ */ f({
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
    return (I, g) => (T(), r("li", oQ, [
      k(XE, wM(A, { "is-nav": "" }), UC({ _: 2 }, [
        aM(I.$slots, (D, t, N) => ({
          name: t,
          fn: b((L) => [
            Q(I.$slots, t, DA(nA(L || {})))
          ])
        }))
      ]), 1040)
    ]));
  }
}), lQ = { class: "navbar-text" }, sQ = /* @__PURE__ */ f({
  __name: "BNavText",
  props: {
    text: null
  },
  setup(M) {
    return (A, I) => (T(), r("li", lQ, [
      Q(A.$slots, "default", {}, () => [
        DM(F(M.text), 1)
      ])
    ]));
  }
}), cQ = /* @__PURE__ */ f({
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
    const A = M, I = c(y(A, "print")), g = c(y(A, "dark")), D = x(
      () => A.tag === "nav" ? void 0 : "navigation"
    ), t = x(
      () => typeof A.toggleable == "string" ? `navbar-expand-${A.toggleable}` : A.toggleable === !1 ? "navbar-expand" : void 0
    ), N = x(
      () => A.container === !0 ? "container" : "container-fluid"
    ), L = x(() => ({
      "d-print": I.value,
      [`sticky-${A.sticky}`]: A.sticky !== void 0,
      "navbar-dark": g.value,
      [`bg-${A.variant}`]: A.variant !== void 0,
      [`fixed-${A.fixed}`]: A.fixed !== void 0,
      [`${t.value}`]: t.value !== void 0
    }));
    return (j, i) => (T(), V(EM(M.tag), {
      class: B(["navbar", S(L)]),
      role: S(D)
    }, {
      default: b(() => [
        M.container !== !1 ? (T(), r("div", {
          key: 0,
          class: B(S(N))
        }, [
          Q(j.$slots, "default")
        ], 2)) : Q(j.$slots, "default", { key: 1 })
      ]),
      _: 3
    }, 8, ["class", "role"]));
  }
}), nC = kL(kg, ["event", "routerTag"]), rQ = f({
  components: {
    BLink: bA
  },
  props: {
    tag: { type: String, default: "div" },
    ...nC
  },
  setup(M) {
    const A = x(() => ot(M)), I = x(
      () => A.value ? bA : M.tag
    );
    return {
      computedLinkProps: x(
        () => A.value ? Pi(M, nC) : {}
      ),
      computedTag: I
    };
  }
});
function zQ(M, A, I, g, D, t) {
  return T(), V(EM(M.computedTag), wM({ class: "navbar-brand" }, M.computedLinkProps), {
    default: b(() => [
      Q(M.$slots, "default")
    ]),
    _: 3
  }, 16);
}
const YQ = /* @__PURE__ */ PM(rQ, [["render", zQ]]), dQ = /* @__PURE__ */ f({
  __name: "BNavbarNav",
  props: {
    align: null,
    fill: { default: !1 },
    justified: { default: !1 },
    small: { default: !1 },
    tag: { default: "ul" }
  },
  setup(M) {
    const A = M, I = c(y(A, "fill")), g = c(y(A, "justified")), D = c(y(A, "small")), t = x(() => ({
      "nav-fill": I.value,
      "nav-justified": g.value,
      [`justify-content-${A.align}`]: A.align !== void 0,
      small: D.value
    }));
    return (N, L) => (T(), r("ul", {
      class: B(["navbar-nav", S(t)])
    }, [
      Q(N.$slots, "default")
    ], 2));
  }
}), mQ = /* @__PURE__ */ s("span", { class: "navbar-toggler-icon" }, null, -1), UQ = /* @__PURE__ */ f({
  __name: "BNavbarToggle",
  props: {
    disabled: { default: !1 },
    label: { default: "Toggle navigation" },
    target: null
  },
  emits: ["click"],
  setup(M, { emit: A }) {
    const I = M, g = c(y(I, "disabled")), D = x(() => ({
      disabled: g.value,
      "aria-label": I.label
    })), t = x(() => ({
      disabled: g.value
    })), N = (L) => {
      g.value || A("click", L);
    };
    return (L, j) => _M((T(), r("button", wM({
      class: ["navbar-toggler", S(t)],
      type: "button"
    }, S(D), { onClick: N }), [
      Q(L.$slots, "default", {}, () => [
        mQ
      ])
    ], 16)), [
      [S(u4), S(g) ? void 0 : M.target]
    ]);
  }
}), hQ = ["data-bs-backdrop", "data-bs-scroll"], OQ = {
  key: 0,
  class: "offcanvas-header"
}, bQ = {
  id: "offcanvasLabel",
  class: "offcanvas-title"
}, WQ = { class: "offcanvas-body" }, kQ = { key: 1 }, pQ = /* @__PURE__ */ f({
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
    const I = M, g = c(y(I, "modelValue")), D = c(y(I, "bodyScrolling")), t = c(y(I, "backdrop")), N = c(y(I, "noHeaderClose")), L = c(y(I, "noHeader")), j = wA(), i = gM(), u = gM(), e = x(() => !UA(j.footer)), C = x(() => [`offcanvas-${I.placement}`]), a = () => {
      A("show"), A("update:modelValue", !0);
    }, w = () => {
      A("hide"), A("update:modelValue", !1);
    };
    return dM(
      () => g.value,
      (n) => {
        var o, E;
        n ? (o = u.value) == null || o.show(i.value) : (E = u.value) == null || E.hide();
      }
    ), NA(i, "shown.bs.offcanvas", () => A("shown")), NA(i, "hidden.bs.offcanvas", () => A("hidden")), NA(i, "show.bs.offcanvas", () => {
      a();
    }), NA(i, "hide.bs.offcanvas", () => {
      w();
    }), $M(() => {
      var n;
      u.value = new UI(i.value), g.value && ((n = u.value) == null || n.show(i.value));
    }), (n, o) => (T(), r("div", {
      ref_key: "element",
      ref: i,
      class: B(["offcanvas", S(C)]),
      tabindex: "-1",
      "aria-labelledby": "offcanvasLabel",
      "data-bs-backdrop": S(t),
      "data-bs-scroll": S(D)
    }, [
      S(L) ? P("", !0) : (T(), r("div", OQ, [
        Q(n.$slots, "header", DA(nA({ visible: S(g), placement: M.placement, hide: w })), () => [
          s("h5", bQ, [
            Q(n.$slots, "title", {}, () => [
              DM(F(M.title), 1)
            ])
          ]),
          S(N) ? P("", !0) : (T(), V(WD, {
            key: 0,
            class: "text-reset",
            "data-bs-dismiss": "offcanvas",
            "aria-label": M.dismissLabel
          }, null, 8, ["aria-label"]))
        ])
      ])),
      s("div", WQ, [
        Q(n.$slots, "default")
      ]),
      S(e) ? (T(), r("div", kQ, [
        Q(n.$slots, "footer", DA(nA({ visible: S(g), placement: M.placement, hide: w })))
      ])) : P("", !0)
    ], 10, hQ));
  }
}), QQ = /* @__PURE__ */ f({
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
    const I = M, g = { top: 0, left: 0, bottom: 0, right: 0 }, D = c(y(I, "fixed")), t = c(y(I, "noCenter")), N = c(y(I, "noWrap")), L = c(y(I, "show")), j = c(y(I, "spinnerSmall")), i = x(
      () => I.rounded === !0 || I.rounded === "" ? "rounded" : I.rounded === !1 ? "" : `rounded-${I.rounded}`
    ), u = x(
      () => I.variant && !I.bgColor ? `bg-${I.variant}` : ""
    ), e = x(() => L.value ? "true" : null), C = x(() => ({
      type: I.spinnerType || void 0,
      variant: I.spinnerVariant || void 0,
      small: j.value
    })), a = x(() => ({
      ...g,
      zIndex: I.zIndex || 10
    })), w = x(() => [
      "b-overlay",
      {
        "position-absolute": !N.value || !D.value,
        "position-fixed": N.value && D.value
      }
    ]), n = x(() => [u.value, i.value]), o = x(() => ({
      ...g,
      opacity: I.opacity,
      backgroundColor: I.bgColor || void 0,
      backdropFilter: blur ? `blur(${blur})` : void 0
    })), E = x(
      () => t.value ? g : {
        top: "50%",
        left: "50%",
        transform: "translateX(-50%) translateY(-50%)"
      }
    );
    return (l, Y) => (T(), V(EM(M.wrapTag), {
      class: "b-overlay-wrap position-relative",
      "aria-busy": S(e)
    }, {
      default: b(() => [
        Q(l.$slots, "default"),
        k(HL, {
          "no-fade": M.noFade,
          "trans-props": { enterToClass: "show" },
          name: "fade",
          onOnAfterEnter: Y[1] || (Y[1] = (z) => A("shown")),
          onOnAfterLeave: Y[2] || (Y[2] = (z) => A("hidden"))
        }, {
          default: b(() => [
            S(L) ? (T(), V(EM(M.overlayTag), {
              key: 0,
              class: B(S(w)),
              style: RA(S(a)),
              onClick: Y[0] || (Y[0] = (z) => A("click", z))
            }, {
              default: b(() => [
                s("div", {
                  class: B(["position-absolute", S(n)]),
                  style: RA(S(o))
                }, null, 6),
                s("div", {
                  class: "position-absolute",
                  style: RA(S(E))
                }, [
                  Q(l.$slots, "overlay", DA(nA(S(C))), () => [
                    k(RL, DA(nA(S(C))), null, 16)
                  ])
                ], 4)
              ]),
              _: 3
            }, 8, ["class", "style"])) : P("", !0)
          ]),
          _: 3
        }, 8, ["no-fade"])
      ]),
      _: 3
    }, 8, ["aria-busy"]));
  }
}), fQ = 5, IT = 20, gT = 0, AI = 3, vQ = "ellipsis-text", GQ = "first-text", JQ = "last-text", VQ = "next-text", ZQ = "page", PQ = "prev-text", xC = (M) => Math.max(TD(M) || IT, 1), oC = (M) => Math.max(TD(M) || gT, 0), BQ = (M, A) => {
  const I = TD(M) || 1;
  return I > A ? A : I < 1 ? 1 : I;
}, FQ = f({
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
    limit: { type: Number, default: fQ },
    modelValue: { type: Number, default: 1 },
    nextClass: { type: [Array, String], default: () => [] },
    nextText: { type: String, default: "\u203A" },
    pageClass: { type: [Array, String], default: () => [] },
    perPage: { type: Number, default: IT },
    pills: { type: [Boolean, String], default: !1 },
    prevClass: { type: [Array, String], default: () => [] },
    prevText: { type: String, default: "\u2039" },
    size: { type: String, required: !1 },
    totalRows: { type: Number, default: gT }
  },
  emits: ["update:modelValue", "page-click"],
  setup(M, { emit: A, slots: I }) {
    const g = c(y(M, "disabled")), D = c(y(M, "firstNumber")), t = c(y(M, "hideEllipsis")), N = c(y(M, "hideGotoEndButtons")), L = c(y(M, "lastNumber")), j = c(y(M, "pills")), i = Jm(y(M, "align")), u = x(
      () => Math.ceil(oC(M.totalRows) / xC(M.perPage))
    ), e = x(() => {
      let z;
      return u.value - M.modelValue + 2 < M.limit && M.limit > AI ? z = u.value - a.value + 1 : z = M.modelValue - Math.floor(a.value / 2), z < 1 ? z = 1 : z > u.value - a.value && (z = u.value - a.value + 1), M.limit <= AI && L.value && u.value === z + a.value - 1 && (z = Math.max(z - 1, 1)), z;
    }), C = x(() => {
      const z = u.value - M.modelValue;
      let m = !1;
      return z + 2 < M.limit && M.limit > AI ? M.limit > AI && (m = !0) : M.limit > AI && (m = !!(!t.value || D.value)), e.value <= 1 && (m = !1), m && D.value && e.value < 4 && (m = !1), m;
    }), a = x(() => {
      let z = M.limit;
      return u.value <= M.limit ? z = u.value : M.modelValue < M.limit - 1 && M.limit > AI ? ((!t.value || L.value) && (z = M.limit - (D.value ? 0 : 1)), z = Math.min(z, M.limit)) : u.value - M.modelValue + 2 < M.limit && M.limit > AI ? (!t.value || D.value) && (z = M.limit - (L.value ? 0 : 1)) : M.limit > AI && (z = M.limit - (t.value ? 0 : 2)), z;
    }), w = x(() => {
      const z = u.value - a.value;
      let m = !1;
      M.modelValue < M.limit - 1 && M.limit > AI ? (!t.value || L.value) && (m = !0) : M.limit > AI && (m = !!(!t.value || L.value)), e.value > z && (m = !1);
      const W = e.value + a.value - 1;
      return m && L.value && W > u.value - 3 && (m = !1), m;
    }), n = $A({
      pageSize: xC(M.perPage),
      totalRows: oC(M.totalRows),
      numberOfPages: u.value
    }), o = (z, m) => {
      if (m === M.modelValue)
        return;
      const { target: W } = z, v = new pL("page-click", {
        cancelable: !0,
        vueTarget: this,
        target: W
      });
      A("page-click", v, m), !v.defaultPrevented && A("update:modelValue", m);
    }, E = x(() => M.size ? `pagination-${M.size}` : ""), l = x(() => j.value ? "b-pagination-pills" : "");
    dM(
      () => M.modelValue,
      (z) => {
        const m = BQ(z, u.value);
        m !== M.modelValue && A("update:modelValue", m);
      }
    ), dM(n, (z, m) => {
      z != null && (m.pageSize !== z.pageSize && m.totalRows === z.totalRows || m.numberOfPages !== z.numberOfPages && M.modelValue > m.numberOfPages) && A("update:modelValue", 1);
    });
    const Y = x(() => {
      const z = [];
      for (let m = 0; m < a.value; m++)
        z.push({ number: e.value + m, classes: null });
      return z;
    });
    return () => {
      const z = [], m = Y.value.map((IM) => IM.number), W = (IM) => IM === M.modelValue, v = M.modelValue < 1, d = M.align === "fill", U = (IM, lM, SM, uM, bM, oM) => {
        const hM = g.value || W(oM) || v || IM < 1 || IM > u.value, GM = IM < 1 ? 1 : IM > u.value ? u.value : IM, BM = { disabled: hM, page: GM, index: GM - 1 }, CM = FA(SM, BM, I) || uM || "";
        return rM(
          "li",
          {
            class: [
              "page-item",
              {
                disabled: hM,
                "flex-fill": d,
                "d-flex": d && !hM
              },
              bM
            ]
          },
          rM(
            hM ? "span" : "button",
            {
              class: ["page-link", { "flex-grow-1": !hM && d }],
              "aria-label": lM,
              "aria-controls": M.ariaControls || null,
              "aria-disabled": hM ? "true" : null,
              role: "menuitem",
              type: hM ? null : "button",
              tabindex: hM ? null : "-1",
              onClick: (YM) => {
                hM || o(YM, GM);
              }
            },
            CM
          )
        );
      }, Z = (IM) => rM(
        "li",
        {
          class: [
            "page-item",
            "disabled",
            "bv-d-xs-down-none",
            d ? "flex-fill" : "",
            M.ellipsisClass
          ],
          role: "separator",
          key: `ellipsis-${IM ? "last" : "first"}`
        },
        [
          rM(
            "span",
            { class: ["page-link"] },
            FA(vQ, {}, I) || M.ellipsisText || "..."
          )
        ]
      ), R = (IM, lM) => {
        const SM = W(IM.number) && !v, uM = g.value ? null : SM || v && lM === 0 ? "0" : "-1", bM = {
          active: SM,
          disabled: g.value,
          page: IM.number,
          index: IM.number - 1,
          content: IM.number
        }, oM = FA(ZQ, bM, I) || IM.number, hM = rM(
          g.value ? "span" : "button",
          {
            class: ["page-link", { "flex-grow-1": !g.value && d }],
            "aria-controls": M.ariaControls || null,
            "aria-disabled": g.value ? "true" : null,
            "aria-label": M.labelPage ? `${M.labelPage} ${IM.number}` : null,
            role: "menuitemradio",
            type: g.value ? null : "button",
            tabindex: uM,
            onClick: (GM) => {
              g.value || o(GM, IM.number);
            }
          },
          oM
        );
        return rM(
          "li",
          {
            class: [
              "page-item",
              {
                disabled: g.value,
                active: SM,
                "flex-fill": d,
                "d-flex": d && !g.value
              },
              M.pageClass
            ],
            role: "presentation",
            key: `page-${IM.number}`
          },
          hM
        );
      };
      if (!N.value && !D.value) {
        const IM = U(
          1,
          M.labelFirstPage,
          GQ,
          M.firstText,
          M.firstClass,
          1
        );
        z.push(IM);
      }
      const AM = U(
        M.modelValue - 1,
        M.labelFirstPage,
        PQ,
        M.prevText,
        M.prevClass,
        1
      );
      z.push(AM), D.value && m[0] !== 1 && z.push(R({ number: 1 }, 0)), C.value && z.push(Z(!1)), Y.value.forEach((IM, lM) => {
        const SM = C.value && D.value && m[0] !== 1 ? 1 : 0;
        z.push(R(IM, lM + SM));
      }), w.value && z.push(Z(!0)), L.value && m[m.length - 1] !== u.value && z.push(R({ number: u.value }, -1));
      const LM = U(
        M.modelValue + 1,
        M.labelNextPage,
        VQ,
        M.nextText,
        M.nextClass,
        u.value
      );
      if (z.push(LM), !L.value && !N.value) {
        const IM = U(
          u.value,
          M.labelLastPage,
          JQ,
          M.lastText,
          M.lastClass,
          u.value
        );
        z.push(IM);
      }
      return rM(
        "ul",
        {
          class: ["pagination", E.value, i.value, l.value],
          role: "menubar",
          "aria-disabled": g.value,
          "aria-label": M.ariaLabel || null
        },
        z
      );
    };
  }
}), QA = /* @__PURE__ */ f({
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
    const A = M, I = x(
      () => A.width === void 0 ? void 0 : typeof A.width == "number" ? A.width.toString() : A.width.includes("%") ? A.width.replaceAll("%", "") : A.width
    ), g = x(
      () => A.cols === void 0 ? void 0 : typeof A.cols == "number" ? A.cols.toString() : A.cols
    ), D = x(() => ({
      [`col-${g.value}`]: g.value !== void 0 && I.value === void 0,
      [`bg-${A.variant}`]: A.variant !== void 0,
      [`placeholder-${A.size}`]: A.size !== void 0,
      [`placeholder-${A.animation}`]: A.animation !== void 0
    })), t = x(
      () => I.value === void 0 ? void 0 : `width: ${I.value}%;`
    );
    return (N, L) => (T(), V(EM(M.tag), {
      class: B(["placeholder", S(D)]),
      style: RA(S(t))
    }, null, 8, ["class", "style"]));
  }
}), DT = /* @__PURE__ */ f({
  __name: "BPlaceholderButton",
  props: {
    tag: { default: "div" },
    width: null,
    cols: null,
    variant: { default: "primary" },
    animation: null
  },
  setup(M) {
    const A = M, I = x(() => ["btn", `btn-${A.variant}`, "disabled"]), g = x(() => ({
      animation: A.animation,
      width: A.width,
      cols: A.cols,
      tag: A.tag
    }));
    return (D, t) => (T(), V(QA, wM({ class: S(I) }, S(g)), null, 16, ["class"]));
  }
}), XQ = /* @__PURE__ */ f({
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
    const A = M, I = c(y(A, "noButton")), g = c(y(A, "noHeader")), D = c(y(A, "noFooter")), t = c(y(A, "noImg")), N = x(() => ({
      width: A.headerWidth,
      variant: A.headerVariant,
      animation: A.headerAnimation,
      size: A.headerSize
    })), L = x(() => ({
      width: A.footerWidth,
      animation: A.footerAnimation,
      size: I.value ? A.footerSize : void 0,
      variant: A.footerVariant
    })), j = x(() => ({
      blank: !A.imgSrc,
      blankColor: A.imgBlankColor,
      height: A.imgSrc ? void 0 : A.imgHeight,
      src: A.imgSrc,
      top: !A.imgBottom,
      bottom: A.imgBottom
    }));
    return (i, u) => (T(), V(BE, { "img-bottom": M.imgBottom }, UC({
      default: b(() => [
        Q(i.$slots, "default", {}, () => [
          k(QA, { cols: "7" }),
          k(QA, { cols: "4" }),
          k(QA, { cols: "4" }),
          k(QA, { cols: "6" }),
          k(QA, { cols: "8" })
        ])
      ]),
      _: 2
    }, [
      S(t) ? void 0 : {
        name: "img",
        fn: b(() => [
          Q(i.$slots, "img", {}, () => [
            k(iL, DA(nA(S(j))), null, 16)
          ])
        ]),
        key: "0"
      },
      S(g) ? void 0 : {
        name: "header",
        fn: b(() => [
          Q(i.$slots, "header", {}, () => [
            k(QA, DA(nA(S(N))), null, 16)
          ])
        ]),
        key: "1"
      },
      S(D) ? void 0 : {
        name: "footer",
        fn: b(() => [
          Q(i.$slots, "footer", {}, () => [
            S(I) ? (T(), V(QA, DA(wM({ key: 1 }, S(L))), null, 16)) : (T(), V(DT, DA(wM({ key: 0 }, S(L))), null, 16))
          ])
        ]),
        key: "2"
      }
    ]), 1032, ["img-bottom"]));
  }
}), _L = /* @__PURE__ */ f({
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
    const A = M, I = c(y(A, "captionTop")), g = c(y(A, "borderless")), D = c(y(A, "bordered")), t = c(y(A, "dark")), N = c(y(A, "hover")), L = c(y(A, "small")), j = c(y(A, "striped")), i = c(y(A, "stickyHeader")), u = x(() => [
      "table",
      "b-table",
      {
        "table-bordered": D.value,
        "table-borderless": g.value,
        [`border-${A.borderVariant}`]: A.borderVariant !== void 0,
        "caption-top": I.value,
        "table-dark": t.value,
        "table-hover": N.value,
        "b-table-stacked": typeof A.stacked == "boolean" && A.stacked,
        [`b-table-stacked-${A.stacked}`]: typeof A.stacked == "string",
        "table-striped": j.value,
        "table-sm": L.value,
        [`table-${A.tableVariant}`]: A.tableVariant !== void 0
      },
      A.tableClass
    ]), e = x(() => [
      {
        "table-responsive": A.responsive === !0,
        [`table-responsive-${A.responsive}`]: typeof A.responsive == "string",
        "b-table-sticky-header": i.value
      }
    ]);
    return (C, a) => M.responsive ? (T(), r("div", {
      key: 1,
      class: B(S(e))
    }, [
      s("table", {
        role: "table",
        class: B(S(u))
      }, [
        Q(C.$slots, "default")
      ], 2)
    ], 2)) : (T(), r("table", {
      key: 0,
      role: "table",
      class: B(S(u))
    }, [
      Q(C.$slots, "default")
    ], 2));
  }
}), RQ = /* @__PURE__ */ f({
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
    const A = M, I = x(
      () => typeof A.columns == "string" ? ZD(A.columns, 5) : A.columns
    ), g = x(
      () => typeof A.rows == "string" ? ZD(A.rows, 3) : A.rows
    ), D = x(
      () => A.headerColumns === void 0 ? I.value : typeof A.headerColumns == "string" ? ZD(A.headerColumns, I.value) : A.headerColumns
    ), t = x(
      () => A.footerColumns === void 0 ? I.value : typeof A.footerColumns == "string" ? ZD(A.footerColumns, I.value) : A.footerColumns
    ), N = x(() => ({
      size: A.size,
      variant: A.variant,
      animation: A.animation,
      width: A.cellWidth
    })), L = x(() => ({
      size: A.headerSize,
      variant: A.headerVariant,
      animation: A.headerAnimation,
      width: A.headerCellWidth
    })), j = x(() => ({
      size: A.footerSize,
      variant: A.footerVariant,
      animation: A.footerAnimation,
      width: A.footerCellWidth
    })), i = c(y(A, "hideHeader")), u = c(y(A, "showFooter"));
    return (e, C) => (T(), V(_L, null, {
      default: b(() => [
        S(i) ? P("", !0) : Q(e.$slots, "thead", { key: 0 }, () => [
          s("thead", null, [
            s("tr", null, [
              (T(!0), r(MM, null, aM(S(D), (a, w) => (T(), r("th", { key: w }, [
                k(QA, DA(nA(S(L))), null, 16)
              ]))), 128))
            ])
          ])
        ]),
        Q(e.$slots, "default", {}, () => [
          s("tbody", null, [
            (T(!0), r(MM, null, aM(S(g), (a, w) => (T(), r("tr", { key: w }, [
              (T(!0), r(MM, null, aM(S(I), (n, o) => (T(), r("td", { key: o }, [
                k(QA, DA(nA(S(N))), null, 16)
              ]))), 128))
            ]))), 128))
          ])
        ]),
        S(u) ? Q(e.$slots, "tfoot", { key: 1 }, () => [
          s("tfoot", null, [
            s("tr", null, [
              (T(!0), r(MM, null, aM(S(t), (a, w) => (T(), r("th", { key: w }, [
                k(QA, DA(nA(S(j))), null, 16)
              ]))), 128))
            ])
          ])
        ]) : P("", !0)
      ]),
      _: 3
    }));
  }
}), HQ = /* @__PURE__ */ f({
  __name: "BPlaceholderWrapper",
  props: {
    loading: { default: !1 }
  },
  setup(M) {
    const I = c(y(M, "loading"));
    return (g, D) => S(I) ? Q(g.$slots, "loading", { key: 0 }) : Q(g.$slots, "default", { key: 1 });
  }
}), _Q = f({
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
    c(y(M, "noninteractive"));
    const g = c(y(M, "show")), D = c(y(M, "html")), t = c(y(M, "sanitize")), N = gM(), L = gM(), j = gM(), i = gM(), u = gM(), e = x(() => ({
      [`b-popover-${M.variant}`]: M.variant !== void 0
    })), C = (n) => {
      if (typeof n == "string")
        return n;
      if (n instanceof HTMLElement)
        return n;
      if (typeof n < "u")
        return n.$el;
    }, a = (n) => {
      if (!!n) {
        if (typeof n == "string") {
          const o = document.getElementById(n);
          return o || void 0;
        }
        return n;
      }
    }, w = (n) => {
      L.value = a(C(n)), L.value && (j.value = new rD(L.value, {
        customClass: M.customClass,
        container: C(M.container),
        trigger: M.triggers,
        placement: M.placement,
        title: M.title || I.title ? i.value : "",
        content: u.value,
        html: D.value,
        delay: M.delay,
        sanitize: t.value,
        offset: M.offset
      }));
    };
    return dM(
      () => M.target,
      (n) => {
        var o;
        (o = j.value) == null || o.dispose(), w(n);
      }
    ), dM(
      () => g.value,
      (n, o) => {
        var E, l;
        n !== o && (n ? (E = j.value) == null || E.show() : (l = j.value) == null || l.hide());
      }
    ), NA(L, "show.bs.popover", () => A("show")), NA(L, "shown.bs.popover", () => A("shown")), NA(L, "hide.bs.popover", () => A("hide")), NA(L, "hidden.bs.popover", () => A("hidden")), NA(L, "inserted.bs.popover", () => A("inserted")), $M(() => {
      var n, o, E;
      EI(() => {
        w(M.target);
      }), (o = (n = N.value) == null ? void 0 : n.parentNode) == null || o.removeChild(N.value), g.value && ((E = j.value) == null || E.show());
    }), Xu(() => {
      var n;
      (n = j.value) == null || n.dispose();
    }), {
      element: N,
      titleRef: i,
      contentRef: u,
      computedClasses: e
    };
  }
}), $Q = ["id"], qQ = { ref: "titleRef" }, KQ = { ref: "contentRef" };
function Mf(M, A, I, g, D, t) {
  return T(), r("div", {
    id: M.id,
    ref: "element",
    class: B(["popover b-popover", M.computedClasses]),
    role: "tooltip",
    tabindex: "-1"
  }, [
    s("div", qQ, [
      Q(M.$slots, "title", {}, () => [
        DM(F(M.title), 1)
      ])
    ], 512),
    s("div", KQ, [
      Q(M.$slots, "default", {}, () => [
        DM(F(M.content), 1)
      ])
    ], 512)
  ], 10, $Q);
}
const Af = /* @__PURE__ */ PM(_Q, [["render", Mf]]), If = ["aria-valuenow", "aria-valuemax"], tT = /* @__PURE__ */ f({
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
    const A = M, I = aA(NT), g = c(y(A, "animated")), D = c(y(A, "showProgress")), t = c(y(A, "showValue")), N = c(y(A, "striped")), L = x(() => ({
      "progress-bar-animated": g.value || (I == null ? void 0 : I.animated),
      "progress-bar-striped": N.value || (I == null ? void 0 : I.striped) || g.value || (I == null ? void 0 : I.animated),
      [`bg-${A.variant}`]: A.variant !== void 0
    })), j = x(
      () => typeof A.precision == "number" ? A.precision : Number.parseFloat(A.precision)
    ), i = x(
      () => typeof A.value == "number" ? A.value : Number.parseFloat(A.value)
    ), u = x(
      () => typeof A.max == "number" ? A.max : A.max === void 0 ? void 0 : Number.parseFloat(A.max)
    ), e = x(
      () => A.labelHtml !== void 0 ? A.labelHtml : t.value || (I == null ? void 0 : I.showValue) ? i.value.toFixed(j.value) : D.value || (I == null ? void 0 : I.showProgress) ? (i.value * 100 / (u.value || 100)).toFixed(j.value) : A.label !== void 0 ? A.label : ""
    ), C = x(
      () => I != null && I.max ? `${i.value * 100 / (typeof I.max == "number" ? I.max : Number.parseInt(I.max))}%` : A.max ? `${i.value * 100 / (typeof A.max == "number" ? A.max : Number.parseInt(A.max))}%` : typeof A.value == "string" ? A.value : `${A.value}%`
    );
    return (a, w) => (T(), r("div", {
      class: B(["progress-bar", S(L)]),
      role: "progressbar",
      "aria-valuenow": M.value,
      "aria-valuemin": "0",
      "aria-valuemax": M.max,
      style: RA({ width: S(C) })
    }, [
      Q(a.$slots, "default", {}, () => [
        DM(F(S(e)), 1)
      ])
    ], 14, If));
  }
}), NT = Symbol(), gf = /* @__PURE__ */ f({
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
    const A = M, I = c(y(A, "animated")), g = c(y(A, "showProgress")), D = c(y(A, "showValue")), t = c(y(A, "striped")), N = x(() => ({
      animated: A.animated,
      max: A.max,
      precision: A.precision,
      showProgress: A.showProgress,
      showValue: A.showValue,
      striped: A.striped,
      value: A.value,
      variant: A.variant
    }));
    return TI(NT, {
      animated: I.value,
      max: A.max,
      showProgress: g.value,
      showValue: D.value,
      striped: t.value
    }), (L, j) => (T(), r("div", {
      class: "progress",
      style: RA({ height: M.height })
    }, [
      Q(L.$slots, "default", {}, () => [
        k(tT, DA(nA(S(N))), null, 16)
      ])
    ], 4));
  }
}), yC = vL("cols", [""], { type: [String, Number], default: null }), Df = f({
  name: "BRow",
  props: {
    tag: { type: String, default: "div" },
    gutterX: { type: String, default: null },
    gutterY: { type: String, default: null },
    noGutters: { type: [Boolean, String], default: !1 },
    alignV: { type: String, default: null },
    alignH: { type: String, default: null },
    alignContent: { type: String, default: null },
    ...yC
  },
  setup(M) {
    const A = c(y(M, "noGutters")), I = x(() => y0(M, yC, "cols", "row-cols"));
    return {
      computedClasses: x(() => [
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
function tf(M, A, I, g, D, t) {
  return T(), V(EM(M.tag), {
    class: B(["row", M.computedClasses])
  }, {
    default: b(() => [
      Q(M.$slots, "default")
    ]),
    _: 3
  }, 8, ["class"]);
}
const Nf = /* @__PURE__ */ PM(Df, [["render", tf]]), ON = /* @__PURE__ */ f({
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
    const A = M, I = x(() => [
      `b-skeleton-${A.type}`,
      {
        [`b-skeleton-animate-${A.animation}`]: typeof A.animation == "boolean" ? !1 : A.animation,
        [`bg-${A.variant}`]: A.variant !== void 0
      }
    ]), g = x(() => ({
      width: A.size || A.width,
      height: A.size || A.height
    }));
    return (D, t) => (T(), r("div", {
      class: B(["b-skeleton", S(I)]),
      style: RA(S(g))
    }, null, 6));
  }
}), Lf = /* @__PURE__ */ f({
  __name: "BSkeletonIcon",
  props: {
    animation: { default: "wave" }
  },
  setup(M) {
    const A = M, I = x(() => [`b-skeleton-animate-${A.animation}`]);
    return (g, D) => (T(), r("div", {
      class: B(["b-skeleton-icon-wrapper position-relative d-inline-block overflow-hidden", S(I)])
    }, [
      Q(g.$slots, "default")
    ], 2));
  }
}), jf = { key: 0 }, uf = { key: 1 }, ef = /* @__PURE__ */ f({
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
    const A = M, I = c(y(A, "hideHeader")), g = c(y(A, "showFooter"));
    return (D, t) => (T(), V(_L, DA(nA(M.tableProps)), {
      default: b(() => [
        S(I) ? P("", !0) : (T(), r("thead", jf, [
          s("tr", null, [
            (T(!0), r(MM, null, aM(M.columns, (N, L) => (T(), r("th", { key: L }, [
              k(ON)
            ]))), 128))
          ])
        ])),
        s("tbody", null, [
          (T(!0), r(MM, null, aM(M.rows, (N, L) => (T(), r("tr", { key: L }, [
            (T(!0), r(MM, null, aM(M.columns, (j, i) => (T(), r("td", { key: i }, [
              k(ON, { width: "75%" })
            ]))), 128))
          ]))), 128))
        ]),
        S(g) ? (T(), r("tfoot", uf, [
          s("tr", null, [
            (T(!0), r(MM, null, aM(M.columns, (N, L) => (T(), r("th", { key: L }, [
              k(ON)
            ]))), 128))
          ])
        ])) : P("", !0)
      ]),
      _: 1
    }, 16));
  }
}), Sf = /* @__PURE__ */ f({
  __name: "BSkeletonWrapper",
  props: {
    loading: { default: !1 }
  },
  setup(M) {
    const I = c(y(M, "loading"));
    return (g, D) => S(I) ? Q(g.$slots, "loading", { key: 0 }) : Q(g.$slots, "default", { key: 1 });
  }
}), Cf = ["TD", "TH", "TR"], af = [
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
  if ("disabled" in A && A.disabled || Cf.indexOf(A.tagName) !== -1)
    return !1;
  if (YS(".dropdown-menu", A))
    return !0;
  const I = A.tagName === "LABEL" ? A : YS("label", A);
  if (I) {
    const g = Zi(I, "for"), D = g ? jU(g) : x0("input, select, textarea", I);
    if (D && !D.disabled)
      return !0;
  }
  return o0(A, af);
}, wf = () => {
  const M = (L, j) => {
    const i = [];
    return !(L != null && L.length) && (j == null ? void 0 : j.length) ? (Object.keys(j[0]).forEach((u) => i.push({ key: u, label: rS(u) })), i) : (Array.isArray(L) && L.forEach((u) => {
      typeof u == "string" ? i.push({ key: u, label: rS(u) }) : Vm(u) && u.key && typeof u.key == "string" && i.push({ ...u });
    }), i);
  }, A = gM([]), I = (L, j, i, u) => {
    if (A.value = DL(j), "isFilterableTable" in u && u.isFilterableTable.value === !0 && i.filter && (A.value = t(A.value, i.filter, i.filterable), g.value && g.value(A.value)), "isSortable" in u && u.isSortable.value === !0 && (A.value = D(
      L,
      A.value,
      {
        key: i.sortBy,
        desc: u.sortDescBoolean.value
      },
      i.sortCompare
    )), i.perPage !== void 0) {
      const e = (i.currentPage - 1) * i.perPage;
      A.value = A.value.splice(e, i.perPage);
    }
    return A.value;
  }, g = gM(void 0), D = (L, j, i, u) => {
    if (!i || !i.key)
      return j;
    const e = i.key;
    return j.sort((C, a) => {
      if (u !== void 0)
        return u(C, a, i.key, i.desc);
      const w = (E) => typeof E == "object" ? JSON.stringify(E) : E;
      return w(C[e]) > w(a[e]) ? i.desc ? -1 : 1 : w(a[e]) > w(C[e]) ? i.desc ? 1 : -1 : 0;
    });
  }, t = (L, j, i) => L.filter(
    (u) => Object.entries(u).filter((e) => {
      const [C, a] = e;
      return C[0] === "_" || i.length > 0 && !i.includes(C) ? !1 : (typeof a == "object" ? JSON.stringify(Object.values(a)) : typeof a == "string" ? a : a.toString()).toLowerCase().includes(j.toLowerCase());
    }).length > 0
  );
  return {
    normaliseFields: M,
    mapItems: I,
    internalItems: A,
    updateInternalItems: async (L) => {
      try {
        return A.value = await Ou(L), A.value;
      } catch {
        return;
      }
    },
    filterEvent: g
  };
}, Ef = ["title", "abbr", "onClick"], Tf = { class: "d-inline-flex flex-nowrap align-items-center gap-1" }, nf = { key: 1 }, xf = ["onClick", "onDblclick", "onMouseenter", "onMouseleave"], of = ["colspan"], yf = ["colspan"], lf = { class: "d-flex align-items-center justify-content-center gap-2" }, sf = /* @__PURE__ */ s("strong", null, "Loading...", -1), cf = {
  key: 1,
  class: "b-table-empty-slot"
}, rf = ["colspan"], zf = { key: 0 }, Yf = ["title", "abbr", "onClick"], df = { key: 1 }, mf = { key: 2 }, Uf = { key: 3 }, hf = /* @__PURE__ */ f({
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
    const g = M, D = wA(), t = wf(), N = c(y(g, "footClone")), L = c(y(g, "sortDesc")), j = c(y(g, "sortInternal")), i = c(y(g, "selectable")), u = c(y(g, "stickySelect")), e = c(y(g, "busy")), C = c(y(g, "showEmpty")), a = c(y(g, "showEmpty")), w = c(y(g, "showEmpty")), n = c(y(g, "showEmpty")), o = gM(e.value);
    t.filterEvent.value = async (p) => {
      if (d.value) {
        await BM();
        return;
      }
      const q = await Ou(p);
      I("filtered", q);
    };
    const E = gM(/* @__PURE__ */ new Set([])), l = x(() => E.value.size > 0), Y = x(() => ({
      [`align-${g.align}`]: g.align !== void 0,
      "b-table-selectable": i.value,
      [`b-table-select-${g.selectMode}`]: i.value,
      "b-table-selecting user-select-none": i.value && l.value,
      "b-table-busy": o.value,
      "b-table-sortable": Z.value,
      "b-table-sort-desc": Z.value && L.value === !0,
      "b-table-sort-asc": Z.value && L.value === !1
    })), z = x(() => ({
      bordered: g.bordered,
      borderless: g.borderless,
      borderVariant: g.borderVariant,
      captionTop: g.captionTop,
      dark: g.dark,
      hover: g.hover,
      responsive: g.responsive,
      striped: g.striped,
      small: g.small,
      tableClass: Y.value,
      tableVariant: g.variant,
      stickyHeader: g.stickyHeader
    })), m = x(() => t.normaliseFields(g.fields, g.items)), W = x(
      () => m.value.length + (i.value ? 1 : 0)
    ), v = x(() => g.filter !== void 0 && g.filter !== ""), d = x(() => g.provider !== void 0), U = x(
      () => i.value && (!!g.selectHead || D.selectHead !== void 0)
    ), Z = x(
      () => g.fields.filter((p) => typeof p == "string" ? !1 : p.sortable).length > 0
    ), R = x(() => Z.value && j.value === !0), AM = x(() => d.value ? t.internalItems.value : R.value ? t.mapItems(g.fields, g.items, g, {
      isSortable: Z,
      isFilterableTable: v,
      sortDescBoolean: L
    }) : g.items), LM = (p) => typeof p == "string" ? zS(p) : p.label !== void 0 ? p.label : typeof p.key == "string" ? zS(p.key) : p.key, IM = (p, q, mM = !1) => {
      const H = typeof p == "string" ? p : p.key;
      I("headClicked", H, p, q, mM), oM(p);
    }, lM = (p, q, mM) => {
      I("rowClicked", p, q, mM), GM(p, q, mM.shiftKey);
    }, SM = (p, q, mM) => I("rowDblClicked", p, q, mM), uM = (p, q, mM) => I("rowHovered", p, q, mM), bM = (p, q, mM) => I("rowUnhovered", p, q, mM), oM = (p) => {
      if (!Z.value)
        return;
      const q = typeof p == "string" ? p : p.key, mM = typeof p == "string" ? !1 : p.sortable;
      if (Z.value === !0 && mM === !0) {
        const H = !L.value;
        q !== g.sortBy && I("update:sortBy", q), I("update:sortDesc", H), I("sorted", q, H);
      }
    }, hM = () => {
      !i.value || I("selection", Array.from(E.value));
    }, GM = (p, q, mM = !1) => {
      if (!!i.value) {
        if (E.value.has(p))
          E.value.delete(p), I("rowUnselected", p);
        else if (g.selectMode === "single" && E.value.size > 0 && (E.value.forEach((H) => I("rowUnselected", H)), E.value.clear()), g.selectMode === "range" && E.value.size > 0 && mM) {
          const H = Array.from(E.value).pop(), iA = AM.value.findIndex((eI) => eI === H), vM = Math.min(iA, q), kD = Math.max(iA, q);
          AM.value.slice(vM, kD + 1).forEach((eI) => {
            E.value.has(eI) || (E.value.add(eI), I("rowSelected", eI));
          });
        } else
          E.value.add(p), I("rowSelected", p);
        hM();
      }
    }, BM = async () => {
      if (!d.value || !g.provider || o.value)
        return;
      o.value = !0;
      const p = new Proxy(
        {
          currentPage: g.currentPage,
          filter: g.filter,
          sortBy: g.sortBy,
          sortDesc: g.sortDesc,
          perPage: g.perPage
        },
        {
          get(mM, H) {
            return H in mM ? mM[H] : void 0;
          },
          set() {
            return console.error("BTable provider context is a read-only object."), !0;
          }
        }
      ), q = g.provider(p, t.updateInternalItems);
      if (q !== void 0) {
        if (q instanceof Promise)
          try {
            const mM = await q;
            return Array.isArray(mM) ? await t.updateInternalItems(mM) : void 0;
          } finally {
            o.value && (o.value = !1);
          }
        try {
          return await t.updateInternalItems(q);
        } finally {
          o.value && (o.value = !1);
        }
      }
    }, CM = (p) => {
      p._showDetails = !p._showDetails;
    }, YM = (p) => [
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
      i.value && E.value.has(p) ? `selected table-${g.selectionVariant}` : null
    ], $ = () => {
      if (!i.value)
        return;
      const p = E.value.size > 0 ? Array.from(E.value) : [];
      E.value = /* @__PURE__ */ new Set([...AM.value]), E.value.forEach((q) => {
        p.includes(q) || I("rowSelected", q);
      }), hM();
    }, NM = () => {
      !i.value || (E.value.forEach((p) => {
        I("rowUnselected", p);
      }), E.value = /* @__PURE__ */ new Set([]), hM());
    }, kM = (p) => {
      if (!i.value)
        return;
      const q = AM.value[p];
      !q || E.value.has(q) || (E.value.add(q), I("rowSelected", q), hM());
    }, RM = (p) => {
      if (!i.value)
        return;
      const q = AM.value[p];
      !q || !E.value.has(q) || (E.value.delete(q), I("rowUnselected", q), hM());
    }, yM = async (p, q, mM) => {
      if (q === mM)
        return;
      const H = (eI) => g.noProvider && g.noProvider.includes(eI), iA = ["currentPage", "perPage"].includes(p) && (H("paging") || a.value === !0), vM = ["filter"].includes(p) && (H("filtering") || n.value === !0), kD = ["sortBy", "sortDesc"].includes(p) && (H("sorting") || w.value === !0);
      iA || vM || kD || await BM();
    };
    return dM(
      () => g.filter,
      (p, q) => {
        p === q || d.value || p || Ou(g.items).then((mM) => I("filtered", mM));
      }
    ), dM(
      () => o.value,
      () => o.value !== e.value && I("update:busy", o.value)
    ), dM(
      () => e.value,
      () => o.value !== e.value && (o.value = e.value)
    ), dM(
      () => g.filter,
      (p, q) => yM("filter", p, q)
    ), dM(
      () => g.currentPage,
      (p, q) => yM("currentPage", p, q)
    ), dM(
      () => g.perPage,
      (p, q) => yM("perPage", p, q)
    ), dM(
      () => g.sortBy,
      (p, q) => yM("sortBy", p, q)
    ), dM(
      () => g.sortDesc,
      (p, q) => yM("sortDesc", p, q)
    ), $M(() => {
      d.value && BM();
    }), A({
      selectAllRows: $,
      clearSelected: NM,
      selectRow: kM,
      unselectRow: RM
    }), (p, q) => (T(), V(_L, DA(nA(S(z))), {
      default: b(() => {
        var mM;
        return [
          s("thead", null, [
            p.$slots["thead-top"] ? Q(p.$slots, "thead-top", { key: 0 }) : P("", !0),
            s("tr", null, [
              S(U) ? (T(), r("th", {
                key: 0,
                class: B(["b-table-selection-column", {
                  "b-table-sticky-column": S(u)
                }])
              }, [
                Q(p.$slots, "select-head", {}, () => [
                  DM(F(typeof M.selectHead == "boolean" ? "Selected" : M.selectHead), 1)
                ])
              ], 2)) : P("", !0),
              (T(!0), r(MM, null, aM(S(m), (H) => (T(), r("th", wM({
                key: H.key,
                scope: "col",
                class: YM(H),
                title: H.headerTitle,
                abbr: H.headerAbbr,
                style: H.thStyle
              }, H.thAttr, {
                onClick: (iA) => IM(H, iA)
              }), [
                s("div", Tf, [
                  Q(p.$slots, "sort-icon", {
                    field: H,
                    sortBy: M.sortBy,
                    selected: H.key === M.sortBy,
                    isDesc: S(L),
                    direction: S(L) ? "desc" : "asc"
                  }, () => [
                    S(Z) && H.sortable ? (T(), r("span", {
                      key: 0,
                      class: B(["b-table-sort-icon", {
                        sorted: H.key === M.sortBy,
                        [`sorted-${S(L) ? "desc" : "asc"}`]: H.key === M.sortBy
                      }])
                    }, null, 2)) : P("", !0)
                  ]),
                  s("div", null, [
                    p.$slots["head(" + H.key + ")"] || p.$slots["head()"] ? Q(p.$slots, p.$slots["head(" + H.key + ")"] ? "head(" + H.key + ")" : "head()", {
                      key: 0,
                      label: H.label
                    }) : (T(), r(MM, { key: 1 }, [
                      DM(F(LM(H)), 1)
                    ], 64))
                  ])
                ])
              ], 16, Ef))), 128))
            ]),
            p.$slots["thead-sub"] ? (T(), r("tr", nf, [
              (T(!0), r(MM, null, aM(S(m), (H) => (T(), r("td", {
                key: H.key,
                scope: "col",
                class: B([H.class, H.thClass, H.variant ? `table-${H.variant}` : ""])
              }, [
                p.$slots["thead-sub"] ? Q(p.$slots, "thead-sub", wM({
                  key: 0,
                  items: S(m)
                }, H)) : (T(), r(MM, { key: 1 }, [
                  DM(F(H.label), 1)
                ], 64))
              ], 2))), 128))
            ])) : P("", !0)
          ]),
          s("tbody", null, [
            (T(!0), r(MM, null, aM(S(AM), (H, iA) => (T(), r(MM, { key: iA }, [
              s("tr", {
                class: B(_(H)),
                onClick: (vM) => !S(eN)(vM) && lM(H, iA, vM),
                onDblclick: (vM) => !S(eN)(vM) && SM(H, iA, vM),
                onMouseenter: (vM) => !S(eN)(vM) && uM(H, iA, vM),
                onMouseleave: (vM) => !S(eN)(vM) && bM(H, iA, vM)
              }, [
                S(U) ? (T(), r("td", {
                  key: 0,
                  class: B(["b-table-selection-column", {
                    "b-table-sticky-column": S(u)
                  }])
                }, [
                  Q(p.$slots, "select-cell", {}, () => [
                    s("span", {
                      class: B(E.value.has(H) ? "text-primary" : "")
                    }, "\u{1F5F9}", 2)
                  ])
                ], 2)) : P("", !0),
                (T(!0), r(MM, null, aM(S(m), (vM) => (T(), r("td", wM({
                  key: vM.key
                }, vM.tdAttr, {
                  class: J(vM, H)
                }), [
                  p.$slots["cell(" + vM.key + ")"] || p.$slots["cell()"] ? Q(p.$slots, p.$slots["cell(" + vM.key + ")"] ? "cell(" + vM.key + ")" : "cell()", {
                    key: 0,
                    value: H[vM.key],
                    index: iA,
                    item: H,
                    field: vM,
                    items: M.items,
                    toggleDetails: () => CM(H),
                    detailsShowing: H._showDetails
                  }) : (T(), r(MM, { key: 1 }, [
                    DM(F(H[vM.key]), 1)
                  ], 64))
                ], 16))), 128))
              ], 42, xf),
              H._showDetails === !0 && p.$slots["row-details"] ? (T(), r("tr", {
                key: 0,
                class: B(_(H))
              }, [
                s("td", { colspan: S(W) }, [
                  Q(p.$slots, "row-details", {
                    item: H,
                    toggleDetails: () => CM(H)
                  })
                ], 8, of)
              ], 2)) : P("", !0)
            ], 64))), 128)),
            o.value ? (T(), r("tr", {
              key: 0,
              class: B(["b-table-busy-slot", { "b-table-static-busy": S(AM).length == 0 }])
            }, [
              s("td", { colspan: S(W) }, [
                Q(p.$slots, "table-busy", {}, () => [
                  s("div", lf, [
                    k(RL, { class: "align-middle" }),
                    sf
                  ])
                ])
              ], 8, yf)
            ], 2)) : P("", !0),
            S(C) && S(AM).length === 0 ? (T(), r("tr", cf, [
              s("td", { colspan: S(W) }, [
                Q(p.$slots, "empty", {
                  items: S(AM),
                  filtered: S(v)
                }, () => [
                  DM(F(S(v) ? M.emptyFilteredText : M.emptyText), 1)
                ])
              ], 8, rf)
            ])) : P("", !0)
          ]),
          S(N) ? (T(), r("tfoot", zf, [
            s("tr", null, [
              (T(!0), r(MM, null, aM(S(m), (H) => (T(), r("th", wM({
                key: H.key
              }, H.thAttr, {
                scope: "col",
                class: [H.class, H.thClass, H.variant ? `table-${H.variant}` : ""],
                title: H.headerTitle,
                abbr: H.headerAbbr,
                style: H.thStyle,
                onClick: (iA) => IM(H, iA, !0)
              }), F(H.label), 17, Yf))), 128))
            ])
          ])) : p.$slots["custom-foot"] ? (T(), r("tfoot", df, [
            Q(p.$slots, "custom-foot", {
              fields: S(m),
              items: M.items,
              columns: (mM = S(m)) == null ? void 0 : mM.length
            })
          ])) : P("", !0),
          p.$slots["table-caption"] ? (T(), r("caption", mf, [
            Q(p.$slots, "table-caption")
          ])) : M.caption ? (T(), r("caption", Uf, F(M.caption), 1)) : P("", !0)
        ];
      }),
      _: 3
    }, 16));
  }
}), Of = /* @__PURE__ */ f({
  __name: "BTbody",
  props: {
    variant: null
  },
  setup(M) {
    const A = M, I = x(() => ({
      [`thead-${A.variant}`]: A.variant !== void 0
    }));
    return (g, D) => (T(), r("tbody", {
      role: "rowgroup",
      class: B(S(I))
    }, [
      Q(g.$slots, "default")
    ], 2));
  }
}), bf = ["scope", "colspan", "rowspan", "data-label"], Wf = { key: 0 }, kf = /* @__PURE__ */ f({
  __name: "BTd",
  props: {
    colspan: null,
    rowspan: null,
    stackedHeading: null,
    stickyColumn: { default: !1 },
    variant: null
  },
  setup(M) {
    const A = M, I = c(y(A, "stickyColumn")), g = x(() => ({
      [`table-${A.variant}`]: A.variant !== void 0,
      "b-table-sticky-column": I.value,
      "table-b-table-default": I.value && A.variant === void 0
    })), D = x(() => A.colspan ? "colspan" : A.rowspan ? "rowspan" : "col");
    return (t, N) => (T(), r("td", {
      role: "cell",
      scope: S(D),
      class: B(S(g)),
      colspan: M.colspan,
      rowspan: M.rowspan,
      "data-label": M.stackedHeading
    }, [
      M.stackedHeading ? (T(), r("div", Wf, [
        Q(t.$slots, "default")
      ])) : Q(t.$slots, "default", { key: 1 })
    ], 10, bf));
  }
}), pf = /* @__PURE__ */ f({
  __name: "BTfoot",
  props: {
    variant: null
  },
  setup(M) {
    const A = M, I = x(() => ({
      [`table-${A.variant}`]: A.variant !== void 0
    }));
    return (g, D) => (T(), r("tfoot", {
      role: "rowgroup",
      class: B(S(I))
    }, [
      Q(g.$slots, "default")
    ], 2));
  }
}), Qf = ["scope", "colspan", "rowspan", "data-label"], ff = { key: 0 }, vf = /* @__PURE__ */ f({
  __name: "BTh",
  props: {
    colspan: null,
    rowspan: null,
    stackedHeading: null,
    stickyColumn: { default: !1 },
    variant: null
  },
  setup(M) {
    const A = M, I = c(y(A, "stickyColumn")), g = x(() => ({
      [`table-${A.variant}`]: A.variant !== void 0,
      "b-table-sticky-column": I.value,
      "table-b-table-default": I.value && A.variant === void 0
    })), D = x(() => A.colspan ? "colspan" : A.rowspan ? "rowspan" : "col");
    return (t, N) => (T(), r("th", {
      role: "columnheader",
      scope: S(D),
      class: B(S(g)),
      colspan: M.colspan,
      rowspan: M.rowspan,
      "data-label": M.stackedHeading
    }, [
      M.stackedHeading !== void 0 ? (T(), r("div", ff, [
        Q(t.$slots, "default")
      ])) : Q(t.$slots, "default", { key: 1 })
    ], 10, Qf));
  }
}), Gf = /* @__PURE__ */ f({
  __name: "BThead",
  props: {
    variant: null
  },
  setup(M) {
    const A = M, I = x(() => ({
      [`table-${A.variant}`]: A.variant !== void 0
    }));
    return (g, D) => (T(), r("thead", {
      role: "rowgroup",
      class: B(S(I))
    }, [
      Q(g.$slots, "default")
    ], 2));
  }
}), Jf = /* @__PURE__ */ f({
  __name: "BTr",
  props: {
    variant: null
  },
  setup(M) {
    const A = M, I = x(() => ({
      [`table-${A.variant}`]: A.variant !== void 0
    }));
    return (g, D) => (T(), r("tr", {
      role: "row",
      class: B(S(I))
    }, [
      Q(g.$slots, "default")
    ], 2));
  }
}), Vf = ["id", "data-bs-target", "aria-controls", "aria-selected", "onClick"], LT = Symbol(), Zf = /* @__PURE__ */ f({
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
    const I = M, g = c(y(I, "card")), D = c(y(I, "end")), t = c(y(I, "fill")), N = c(y(I, "justified")), L = c(y(I, "lazy")), j = c(y(I, "noFade")), i = c(y(I, "noNavStyle")), u = c(y(I, "pills")), e = c(y(I, "small")), C = c(y(I, "vertical")), a = wA(), w = gM(I.modelValue), n = gM(""), o = x({
      get: () => w.value,
      set: (d) => {
        w.value = d, E.value.length > 0 && d >= 0 && d < E.value.length ? n.value = E.value[d].buttonId : n.value = "", A("update:modelValue", d);
      }
    }), E = x(() => {
      let d = [];
      return a.default && (d = v(a).map((U, Z) => {
        U.props || (U.props = {});
        const R = U.props["button-id"] || wI("tab"), AM = U.props.id || wI(), LM = o.value > -1 ? Z === o.value : U.props.active === "", IM = U.props["title-item-class"], lM = U.props["title-link-attributes"];
        return {
          buttonId: R,
          contentId: AM,
          active: LM,
          disabled: U.props.disabled === "" || U.props.disabled === !0,
          navItemClasses: [
            {
              active: LM,
              disabled: U.props.disabled === "" || U.props.disabled === !0
            },
            LM && I.activeNavItemClass ? I.activeNavItemClass : null,
            U.props["title-link-class"]
          ],
          tabClasses: [
            {
              fade: !j.value
            },
            LM && I.activeTabClass ? I.activeTabClass : null
          ],
          target: `#${AM}`,
          title: U.props.title,
          titleItemClass: IM,
          titleLinkAttributes: lM,
          onClick: U.props.onClick,
          tab: U
        };
      })), d;
    }), l = x(() => !((E == null ? void 0 : E.value) && E.value.length > 0)), Y = x(() => ({
      "d-flex": C.value,
      "align-items-start": C.value
    })), z = x(() => ({
      "nav-pills": u.value,
      "flex-column me-3": C.value,
      [`justify-content-${I.align}`]: I.align !== void 0,
      "nav-fill": t.value,
      "card-header-tabs": g.value,
      "nav-justified": N.value,
      "nav-tabs": !i.value && !u.value,
      small: e.value
    })), m = (d) => {
      let U = !1;
      if (d !== void 0 && d > -1 && d < E.value.length && !E.value[d].disabled && (o.value < 0 || E.value[d].buttonId !== n.value)) {
        const Z = new pL("activate-tab", { cancelable: !0, vueTarget: this });
        A("activate-tab", d, o.value, Z), Z.defaultPrevented || (o.value = d, U = !0);
      }
      return !U && I.modelValue !== o.value && A("update:modelValue", o.value), U;
    }, W = (d, U) => {
      var Z;
      m(U), U >= 0 && !E.value[U].disabled && ((Z = E.value[U]) == null ? void 0 : Z.onClick) && typeof E.value[U].onClick == "function" && E.value[U].onClick(d);
    }, v = (d) => !d || !d.default ? [] : d.default().reduce((U, Z) => (typeof Z.type == "symbol" ? U = U.concat(Z.children) : U.push(Z), U), []).filter((U) => {
      var Z;
      return ((Z = U.type) == null ? void 0 : Z.__name) === "BTab";
    });
    return m(w.value), dM(
      () => I.modelValue,
      (d, U) => {
        if (d === U)
          return;
        if (d = Math.max(d, -1), U = Math.max(U, -1), E.value.length <= 0) {
          o.value = -1;
          return;
        }
        const Z = d > U;
        let R = d;
        const AM = E.value.length - 1;
        for (; R >= 0 && R <= AM && E.value[R].disabled; )
          R += Z ? 1 : -1;
        if (R < 0) {
          m(0);
          return;
        }
        if (R >= E.value.length) {
          m(E.value.length - 1);
          return;
        }
        m(R);
      }
    ), dM(
      () => E.value,
      () => {
        let d = E.value.map((U) => U.active && !U.disabled).lastIndexOf(!0);
        d < 0 && (o.value >= E.value.length ? d = E.value.map((U) => !U.disabled).lastIndexOf(!0) : E.value[o.value] && !E.value[o.value].disabled && (d = o.value)), d < 0 && (d = E.value.map((U) => !U.disabled).indexOf(!0)), E.value.forEach((U, Z) => U.active = Z === d), m(d);
      }
    ), $M(() => {
      if (o.value < 0 && E.value.length > 0 && !E.value.some((d) => d.active)) {
        const d = E.value.map((U) => !U.disabled).indexOf(!0);
        m(d >= 0 ? d : -1);
      }
    }), TI(LT, {
      lazy: L.value,
      card: g.value
    }), (d, U) => (T(), V(EM(M.tag), {
      id: M.id,
      class: B(["tabs", S(Y)])
    }, {
      default: b(() => [
        S(D) ? (T(), r("div", {
          key: 0,
          class: B(["tab-content", M.contentClass])
        }, [
          (T(!0), r(MM, null, aM(S(E), ({ tab: Z, contentId: R, tabClasses: AM, active: LM }, IM) => (T(), V(EM(Z), {
            id: R,
            key: IM,
            class: B(AM),
            active: LM
          }, null, 8, ["id", "class", "active"]))), 128)),
          S(l) ? (T(), r("div", {
            key: "bv-empty-tab",
            class: B(["tab-pane active", { "card-body": S(g) }])
          }, [
            Q(d.$slots, "empty")
          ], 2)) : P("", !0)
        ], 2)) : P("", !0),
        s("div", {
          class: B([M.navWrapperClass, { "card-header": S(g), "ms-auto": M.vertical && S(D) }])
        }, [
          s("ul", {
            class: B(["nav", [S(z), M.navClass]]),
            role: "tablist"
          }, [
            Q(d.$slots, "tabs-start"),
            (T(!0), r(MM, null, aM(S(E), ({ tab: Z, buttonId: R, contentId: AM, navItemClasses: LM, active: IM, target: lM }, SM) => (T(), r("li", {
              key: SM,
              class: B(["nav-item", Z.props["title-item-class"]])
            }, [
              s("button", wM({
                id: R,
                class: ["nav-link", LM],
                "data-bs-toggle": "tab",
                "data-bs-target": lM,
                role: "tab",
                "aria-controls": AM,
                "aria-selected": IM
              }, Z.props["title-link-attributes"], {
                onClick: Sg((uM) => W(uM, SM), ["stop", "prevent"])
              }), [
                Z.children && Z.children.title ? (T(), V(EM(Z.children.title), { key: 0 })) : (T(), r(MM, { key: 1 }, [
                  DM(F(Z.props.title), 1)
                ], 64))
              ], 16, Vf)
            ], 2))), 128)),
            Q(d.$slots, "tabs-end")
          ], 2)
        ], 2),
        S(D) ? P("", !0) : (T(), r("div", {
          key: 1,
          class: B(["tab-content", M.contentClass])
        }, [
          (T(!0), r(MM, null, aM(S(E), ({ tab: Z, contentId: R, tabClasses: AM, active: LM }, IM) => (T(), V(EM(Z), {
            id: R,
            key: IM,
            class: B(AM),
            active: LM
          }, null, 8, ["id", "class", "active"]))), 128)),
          S(l) ? (T(), r("div", {
            key: "bv-empty-tab",
            class: B(["tab-pane active", { "card-body": S(g) }])
          }, [
            Q(d.$slots, "empty")
          ], 2)) : P("", !0)
        ], 2))
      ]),
      _: 3
    }, 8, ["id", "class"]));
  }
}), Pf = /* @__PURE__ */ f({
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
    const A = M, I = aA(LT, null), g = c(y(A, "active")), D = c(y(A, "disabled")), t = c(y(A, A.lazyOnce !== void 0 ? "lazyOnce" : "lazy")), N = gM(!1), L = x(() => (I == null ? void 0 : I.lazy) || t.value), j = x(() => A.lazyOnce !== void 0), i = x(() => g.value && !D.value), u = x(() => {
      const C = L.value && j.value && N.value;
      return i.value || !L.value || C;
    }), e = x(() => ({
      active: g.value,
      show: g.value,
      "card-body": (I == null ? void 0 : I.card) && A.noBody === !1
    }));
    return dM(
      () => u.value,
      (C) => {
        C && !N.value && (N.value = !0);
      }
    ), (C, a) => (T(), V(EM(M.tag), {
      id: M.id,
      class: B(["tab-pane", S(e)]),
      role: "tabpanel",
      "aria-labelledby": "profile-tab"
    }, {
      default: b(() => [
        S(u) ? Q(C.$slots, "default", { key: 0 }) : P("", !0)
      ]),
      _: 3
    }, 8, ["id", "class"]));
  }
}), Bf = "toast-title", lC = 1e3, jT = f({
  components: { BLink: bA },
  props: {
    ...kg,
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
    c(y(M, "animation"));
    const g = c(y(M, "isStatus")), D = c(y(M, "autoHide")), t = c(y(M, "noCloseButton")), N = c(y(M, "noFade")), L = c(y(M, "noHoverPause"));
    c(y(M, "solid")), c(y(M, "static"));
    const j = c(y(M, "modelValue")), i = gM(!1), u = gM(!1), e = gM(!1), C = x(() => ({
      [`b-toast-${M.variant}`]: M.variant !== void 0,
      show: e.value || i.value
    }));
    let a, w, n;
    const o = () => {
      typeof a > "u" || (clearTimeout(a), a = void 0);
    }, E = x(
      () => Math.max(TD(M.delay, 0), lC)
    ), l = () => {
      j.value && (w = n = 0, o(), u.value = !0, gN(() => {
        e.value = !1;
      }));
    }, Y = () => {
      o(), A("update:modelValue", !0), w = n = 0, u.value = !1, EI(() => {
        gN(() => {
          e.value = !0;
        });
      });
    }, z = () => {
      if (!D.value || L.value || !a || n)
        return;
      const AM = Date.now() - w;
      AM > 0 && (o(), n = Math.max(E.value - AM, lC));
    }, m = () => {
      (!D.value || L.value || !n) && (n = w = 0), W();
    };
    dM(
      () => j.value,
      (AM) => {
        AM ? Y() : l();
      }
    );
    const W = () => {
      o(), D.value && (a = setTimeout(l, n || E.value), w = Date.now(), n = 0);
    }, v = () => {
      i.value = !0, A("update:modelValue", !0);
    }, d = () => {
      i.value = !1, W();
    }, U = () => {
      i.value = !0;
    }, Z = () => {
      i.value = !1, n = w = 0, A("update:modelValue", !1);
    };
    nT(() => {
      o(), D.value && A("destroyed", M.id);
    }), $M(() => {
      EI(() => {
        j.value && gN(() => {
          Y();
        });
      });
    });
    const R = () => {
      EI(() => {
        gN(() => {
          l();
        });
      });
    };
    return () => {
      const AM = () => {
        const LM = [], IM = FA(Bf, { hide: l }, I);
        IM ? LM.push(rM(IM)) : M.title && LM.push(rM("strong", { class: "me-auto" }, M.title)), !t.value && LM.length !== 0 && LM.push(
          rM(WD, {
            class: ["btn-close"],
            onClick: () => {
              l();
            }
          })
        );
        const lM = [];
        if (LM.length > 0 && lM.push(
          rM(
            M.headerTag,
            {
              class: "toast-header"
            },
            { default: () => LM }
          )
        ), FA("default", { hide: l }, I) || M.body) {
          const SM = rM(
            ot(M) ? "b-link" : "div",
            {
              class: ["toast-body", M.bodyClass],
              onClick: ot(M) ? { click: R } : {}
            },
            FA("default", { hide: l }, I) || M.body
          );
          lM.push(SM);
        }
        return rM(
          "div",
          {
            class: ["toast", M.toastClass, C.value],
            tabindex: "0"
          },
          lM
        );
      };
      return rM(
        "div",
        {
          class: ["b-toast"],
          id: M.id,
          role: u.value ? null : g.value ? "status" : "alert",
          "aria-live": u.value ? null : g.value ? "polite" : "assertive",
          "aria-atomic": u.value ? null : "true",
          onmouseenter: z,
          onmouseleave: m
        },
        [
          rM(
            HL,
            {
              noFade: N.value,
              onAfterEnter: d,
              onBeforeEnter: v,
              onAfterLeave: Z,
              onBeforeLeave: U
            },
            () => [e.value ? AM() : ""]
          )
        ]
      );
    };
  }
}), sC = /* @__PURE__ */ f({
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
    }, g = x(() => I[A.position]), D = (t) => {
      var N;
      (N = A.instance) == null || N.remove(t);
    };
    return (t, N) => {
      var L;
      return T(), r("div", {
        class: B([[S(g)], "b-toaster position-fixed p-3"]),
        style: { "z-index": "11" }
      }, [
        (T(!0), r(MM, null, aM((L = M.instance) == null ? void 0 : L.toasts(M.position).value, (j) => (T(), V(jT, {
          id: j.options.id,
          key: j.options.id,
          modelValue: j.options.value,
          "onUpdate:modelValue": (i) => j.options.value = i,
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
}), Vg = { delay: 5e3, value: !0, pos: "top-right" };
class cC {
  constructor(A) {
    HM(this, "vm");
    HM(this, "containerPositions");
    xT(A) ? this.vm = A : this.vm = $A(A), this.containerPositions = x(() => {
      const I = /* @__PURE__ */ new Set([]);
      return this.vm.toasts.map((g) => {
        g.options.pos && I.add(g.options.pos);
      }), I;
    });
  }
  toasts(A) {
    return A ? x(
      () => this.vm.toasts.filter((I) => {
        if (I.options.pos === A && I.options.value)
          return I;
      })
    ) : x(() => this.vm.toasts);
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
  show(A, I = Vg) {
    const g = { id: wI(), ...Vg, ...I }, D = {
      options: $A(g),
      content: A
    };
    return this.vm.toasts.push(D), D;
  }
  info(A, I = Vg) {
    return this.show(A, { variant: "info", ...I });
  }
  danger(A, I = Vg) {
    return this.show(A, { variant: "danger", ...I });
  }
  warning(A, I = Vg) {
    return this.show(A, { variant: "warning", ...I });
  }
  success(A, I = Vg) {
    return this.show(A, { variant: "success", ...I });
  }
  hide() {
  }
}
class Ff {
  constructor() {
    HM(this, "vms");
    HM(this, "rootInstance");
    HM(this, "useToast", Hf);
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
const Fu = Symbol(), uT = Symbol(), Xf = {
  container: void 0,
  toasts: [],
  root: !1
};
function Rf() {
  return aA(uT);
}
function Hf(M, A = Fu) {
  const I = aA(Rf());
  if (!M)
    return new cC(I.getOrCreateViewModel());
  const g = { id: Symbol("toastInstance") }, D = { ...Xf, ...g, ...M }, t = I.getOrCreateViewModel(D);
  return new cC(t);
}
const _f = {
  install: (M, A = {}) => {
    var I, g, D, t;
    M.provide(uT, (g = (I = A == null ? void 0 : A.BToast) == null ? void 0 : I.injectkey) != null ? g : Fu), M.provide((t = (D = A == null ? void 0 : A.BToast) == null ? void 0 : D.injectkey) != null ? t : Fu, new Ff());
  }
}, $f = {
  BAccordion: TU,
  BAccordionItem: pW,
  BNavText: sQ,
  BAlert: fW,
  BAvatar: ZW,
  BAvatarGroup: vW,
  BNavForm: wQ,
  BBadge: RW,
  BBreadcrumb: KW,
  BBreadcrumbItem: fE,
  BButton: yt,
  BButtonGroup: gk,
  BButtonToolbar: tk,
  BCard: BE,
  BCardBody: ZE,
  BCardFooter: PE,
  BCardGroup: Lk,
  BCardHeader: GE,
  BCardImg: iL,
  BCardSubtitle: VE,
  BCardText: jk,
  BCardTitle: JE,
  BCarousel: xk,
  BCarouselSlide: rk,
  BCloseButton: WD,
  BCol: PD,
  BCollapse: kE,
  BContainer: dk,
  BDropdown: XE,
  BDropdownDivider: Ok,
  BDropdownForm: Qk,
  BDropdownGroup: Jk,
  BDropdownHeader: Bk,
  BDropdownItem: Xk,
  BDropdownItemButton: _k,
  BDropdownText: Kk,
  BForm: RE,
  BFormCheckbox: HE,
  BFormCheckboxGroup: ip,
  BFormFloatingLabel: gp,
  BFormGroup: np,
  BFormInput: lp,
  BFormInvalidFeedback: Zu,
  BFormRadio: $E,
  BFormRadioGroup: dp,
  BFormRow: hN,
  BFormSelect: Op,
  BFormSelectOption: e4,
  BFormSelectOptionGroup: qE,
  BFormText: Pu,
  BFormTextarea: $p,
  BFormTag: KE,
  BFormTags: Xp,
  BFormValidFeedback: Bu,
  BImg: i4,
  BInputGroup: DQ,
  BInputGroupAddon: S4,
  BInputGroupAppend: tQ,
  BInputGroupPrepend: NQ,
  BInputGroupText: MT,
  BLink: bA,
  BListGroup: LQ,
  BListGroupItem: jQ,
  BModal: CQ,
  BNav: aQ,
  BNavbar: cQ,
  BNavbarBrand: YQ,
  BNavbarNav: dQ,
  BNavbarToggle: UQ,
  BNavItem: xQ,
  BNavItemDropdown: yQ,
  BOffcanvas: pQ,
  BOverlay: QQ,
  BPagination: FQ,
  BPlaceholder: QA,
  BPlaceholderButton: DT,
  BPlaceholderCard: XQ,
  BPlaceholderTable: RQ,
  BPlaceholderWrapper: HQ,
  BPopover: Af,
  BProgress: gf,
  BProgressBar: tT,
  BRow: Nf,
  BSkeleton: ON,
  BSkeletonIcon: Lf,
  BSkeletonTable: ef,
  BSkeletonWrapper: Sf,
  BSpinner: RL,
  BTab: Pf,
  BTable: hf,
  BTableSimple: _L,
  BTbody: Of,
  BTd: kf,
  BTfoot: pf,
  BTh: vf,
  BThead: Gf,
  BTr: Jf,
  BToast: jT,
  BToaster: sC,
  BToastContainer: sC,
  BTabs: Zf,
  BTransition: HL,
  BToastPlugin: _f
};
const uv = {
  install(M, A = {}) {
    Object.entries($f).forEach(([I, g]) => {
      M.component(I, g);
    }), Object.entries(hW).forEach(([I, g]) => {
      M.directive(I, g);
    }), aU(M);
  }
  const g = [M];
  let D;
  for (let t = 0; t < g.length && !D; t++) {
    const N = g[t];
    D = I[N];
  }
  return D && Mv(D) ? D(A) : D;
}, SN = (M, A = NaN) => {
  const I = parseFloat(M.toString());
  return Number.isNaN(I) ? A : I;
}, eL = /* @__PURE__ */ f({
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
    const I = x(() => Math.max(SN(M.fontScale, 1), 0) || 1), g = x(() => Math.max(SN(M.scale, 1), 0) || 1), D = x(() => SN(M.shiftH, 0)), t = x(() => SN(M.shiftV, 0)), N = x(() => M.flipH || M.flipV || g.value !== 1), L = x(() => D.value || t.value), j = x(() => N.value || M.rotate), i = x(
      () => [
        j.value ? "translate(8 8)" : null,
        N.value ? `scale(${(M.flipH ? -1 : 1) * g.value} ${(M.flipV ? -1 : 1) * g.value})` : null,
        M.rotate ? `rotate(${M.rotate})` : null,
        j.value ? "translate(-8 -8)" : null
      ].filter((a) => a)
    ), u = x(() => {
      const a = [];
      return M.variant && a.push(`bootstrap-icon--variant-${M.variant}`), M.size && a.push(`bootstrap-icon--size-${M.size}`), M.animation && a.push(`bootstrap-icon--animation-${M.animation}`), a;
    });
    let e = {
      viewBox: "0 0 16 16"
    };
    M.stacked || (e = {
      ...e,
      width: "1em",
      height: "1em",
      focusable: "false",
      role: "img",
      "aria-label": "icon",
      xmlns: "http://www.w3.org/2000/svg"
    });
    const C = x(() => i.value.join(" ") || void 0);
    return () => {
      let a = rM(
        "g",
        {
          transform: C.value
        },
        [M.content, iT("default", {}, A)]
      );
      L.value && (a = rM(
        "g",
        {
          transform: `translate(${16 * D.value / 16} ${-16 * t.value / 16})`
        },
        [a]
      )), M.stacked && (a = rM("g", [a]));
      const n = [M.title ? rM("title", M.title) : null, a].filter((o) => o);
      return rM(
        "svg",
        {
          class: ["bootstrap-icon", u.value, M.class],
          ...e,
          style: M.stacked ? {} : {
            "font-size": I.value === 1 ? null : `${I.value * 100}%`
          }
        },
        n
      );
    };
  }
}), Av = /* @__PURE__ */ f({
  name: "BIcon",
  components: { BIconBase: eL },
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
    const A = x(() => qf);
    return () => {
      const I = rM(
        "use",
        {
          "xlink:href": `${A.value}#${M.icon}`
        },
        ""
      );
      return rM(
        eL,
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
}), Iv = /* @__PURE__ */ f({
  name: "BIconstack",
  components: { BIconBase: eL },
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
    return () => rM(
      eL,
      {
        ...M,
        class: "b-icon-stack"
      },
      {
        default: () => iT("default", {}, A) || ""
      }
    );
  }
}), gv = {
  BIcon: Av,
  BIconstack: Iv
};
const iv = {
  install(M) {
    Object.entries(gv).forEach(([A, I]) => {
      M.component(A, I);
    });
  }
};
export {
  PM as _,
  rL as a,
  jv as b,
  iv as c,
  jD as e,
  Lv as i,
  uv as p,
  Gr as u
};