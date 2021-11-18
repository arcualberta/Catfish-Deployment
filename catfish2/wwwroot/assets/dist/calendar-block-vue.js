/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./wwwroot/assets/js/_public-facing/calendar-block.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/dayjs/dayjs.min.js":
/*!*****************************************!*\
  !*** ./node_modules/dayjs/dayjs.min.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}(this,(function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",u="hour",a="day",o="week",f="month",h="quarter",c="year",d="date",$="Invalid Date",l=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},m=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},g={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+m(r,2,"0")+":"+m(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,f),s=n-i<0,u=e.clone().add(r+(s?-1:1),f);return+(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:f,y:c,w:o,d:a,D:d,h:u,m:s,s:i,ms:r,Q:h}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},D="en",v={};v[D]=M;var p=function(t){return t instanceof _},S=function(t,e,n){var r;if(!t)return D;if("string"==typeof t)v[t]&&(r=t),e&&(v[t]=e,r=t);else{var i=t.name;v[i]=t,r=i}return!n&&r&&(D=r),r||!n&&D},w=function(t,e){if(p(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},O=g;O.l=S,O.i=p,O.w=function(t,e){return w(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function M(t){this.$L=S(t.locale,null,!0),this.parse(t)}var m=M.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(O.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(l);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return O},m.isValid=function(){return!(this.$d.toString()===$)},m.isSame=function(t,e){var n=w(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return w(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<w(t)},m.$g=function(t,e,n){return O.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!O.u(e)||e,h=O.p(t),$=function(t,e){var i=O.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},l=function(t,e){return O.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},y=this.$W,M=this.$M,m=this.$D,g="set"+(this.$u?"UTC":"");switch(h){case c:return r?$(1,0):$(31,11);case f:return r?$(1,M):$(0,M+1);case o:var D=this.$locale().weekStart||0,v=(y<D?y+7:y)-D;return $(r?m-v:m+(6-v),M);case a:case d:return l(g+"Hours",0);case u:return l(g+"Minutes",1);case s:return l(g+"Seconds",2);case i:return l(g+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var n,o=O.p(t),h="set"+(this.$u?"UTC":""),$=(n={},n[a]=h+"Date",n[d]=h+"Date",n[f]=h+"Month",n[c]=h+"FullYear",n[u]=h+"Hours",n[s]=h+"Minutes",n[i]=h+"Seconds",n[r]=h+"Milliseconds",n)[o],l=o===a?this.$D+(e-this.$W):e;if(o===f||o===c){var y=this.clone().set(d,1);y.$d[$](l),y.init(),this.$d=y.set(d,Math.min(this.$D,y.daysInMonth())).$d}else $&&this.$d[$](l);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[O.p(t)]()},m.add=function(r,h){var d,$=this;r=Number(r);var l=O.p(h),y=function(t){var e=w($);return O.w(e.date(e.date()+Math.round(t*r)),$)};if(l===f)return this.set(f,this.$M+r);if(l===c)return this.set(c,this.$y+r);if(l===a)return y(1);if(l===o)return y(7);var M=(d={},d[s]=e,d[u]=n,d[i]=t,d)[l]||1,m=this.$d.getTime()+r*M;return O.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||$;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=O.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,f=n.months,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].substr(0,s)},c=function(t){return O.s(s%12||12,t,"0")},d=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:O.s(a+1,2,"0"),MMM:h(n.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:O.s(this.$D,2,"0"),d:String(this.$W),dd:h(n.weekdaysMin,this.$W,o,2),ddd:h(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:O.s(s,2,"0"),h:c(1),hh:c(2),a:d(s,u,!0),A:d(s,u,!1),m:String(u),mm:O.s(u,2,"0"),s:String(this.$s),ss:O.s(this.$s,2,"0"),SSS:O.s(this.$ms,3,"0"),Z:i};return r.replace(y,(function(t,e){return e||l[t]||i.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,d,$){var l,y=O.p(d),M=w(r),m=(M.utcOffset()-this.utcOffset())*e,g=this-M,D=O.m(this,M);return D=(l={},l[c]=D/12,l[f]=D,l[h]=D/3,l[o]=(g-m)/6048e5,l[a]=(g-m)/864e5,l[u]=g/n,l[s]=g/e,l[i]=g/t,l)[y]||g,$?D:O.a(D)},m.daysInMonth=function(){return this.endOf(f).$D},m.$locale=function(){return v[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=S(t,e,!0);return r&&(n.$L=r),n},m.clone=function(){return O.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},M}(),b=_.prototype;return w.prototype=b,[["$ms",r],["$s",i],["$m",s],["$H",u],["$W",a],["$M",f],["$y",c],["$D",d]].forEach((function(t){b[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),w.extend=function(t,e){return t.$i||(t(e,_,w),t.$i=!0),w},w.locale=S,w.isDayjs=p,w.unix=function(t){return w(1e3*t)},w.en=v[D],w.Ls=v,w.p={},w}));

/***/ }),

/***/ "./node_modules/dayjs/plugin/customParseFormat.js":
/*!********************************************************!*\
  !*** ./node_modules/dayjs/plugin/customParseFormat.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}(this,(function(){"use strict";var t={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},e=/(\[[^[]*\])|([-:/.()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d\d/,r=/\d\d?/,i=/\d*[^\s\d-_:/()]+/,o={},s=function(t){return(t=+t)+(t>68?1900:2e3)};var a=function(t){return function(e){this[t]=+e}},f=[/[+-]\d\d:?(\d\d)?|Z/,function(t){(this.zone||(this.zone={})).offset=function(t){if(!t)return 0;if("Z"===t)return 0;var e=t.match(/([+-]|\d\d)/g),n=60*e[1]+(+e[2]||0);return 0===n?0:"+"===e[0]?-n:n}(t)}],u=function(t){var e=o[t];return e&&(e.indexOf?e:e.s.concat(e.f))},h=function(t,e){var n,r=o.meridiem;if(r){for(var i=1;i<=24;i+=1)if(t.indexOf(r(i,0,e))>-1){n=i>12;break}}else n=t===(e?"pm":"PM");return n},d={A:[i,function(t){this.afternoon=h(t,!1)}],a:[i,function(t){this.afternoon=h(t,!0)}],S:[/\d/,function(t){this.milliseconds=100*+t}],SS:[n,function(t){this.milliseconds=10*+t}],SSS:[/\d{3}/,function(t){this.milliseconds=+t}],s:[r,a("seconds")],ss:[r,a("seconds")],m:[r,a("minutes")],mm:[r,a("minutes")],H:[r,a("hours")],h:[r,a("hours")],HH:[r,a("hours")],hh:[r,a("hours")],D:[r,a("day")],DD:[n,a("day")],Do:[i,function(t){var e=o.ordinal,n=t.match(/\d+/);if(this.day=n[0],e)for(var r=1;r<=31;r+=1)e(r).replace(/\[|\]/g,"")===t&&(this.day=r)}],M:[r,a("month")],MM:[n,a("month")],MMM:[i,function(t){var e=u("months"),n=(u("monthsShort")||e.map((function(t){return t.substr(0,3)}))).indexOf(t)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[i,function(t){var e=u("months").indexOf(t)+1;if(e<1)throw new Error;this.month=e%12||e}],Y:[/[+-]?\d+/,a("year")],YY:[n,function(t){this.year=s(t)}],YYYY:[/\d{4}/,a("year")],Z:f,ZZ:f};function c(n){var r,i;r=n,i=o&&o.formats;for(var s=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(e,n,r){var o=r&&r.toUpperCase();return n||i[r]||t[r]||i[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(t,e,n){return e||n.slice(1)}))}))).match(e),a=s.length,f=0;f<a;f+=1){var u=s[f],h=d[u],c=h&&h[0],l=h&&h[1];s[f]=l?{regex:c,parser:l}:u.replace(/^\[|\]$/g,"")}return function(t){for(var e={},n=0,r=0;n<a;n+=1){var i=s[n];if("string"==typeof i)r+=i.length;else{var o=i.regex,f=i.parser,u=t.substr(r),h=o.exec(u)[0];f.call(e,h),t=t.replace(h,"")}}return function(t){var e=t.afternoon;if(void 0!==e){var n=t.hours;e?n<12&&(t.hours+=12):12===n&&(t.hours=0),delete t.afternoon}}(e),e}}return function(t,e,n){n.p.customParseFormat=!0,t&&t.parseTwoDigitYear&&(s=t.parseTwoDigitYear);var r=e.prototype,i=r.parse;r.parse=function(t){var e=t.date,r=t.utc,s=t.args;this.$u=r;var a=s[1];if("string"==typeof a){var f=!0===s[2],u=!0===s[3],h=f||u,d=s[2];u&&(d=s[2]),o=this.$locale(),!f&&d&&(o=n.Ls[d]),this.$d=function(t,e,n){try{if(["x","X"].indexOf(e)>-1)return new Date(("X"===e?1e3:1)*t);var r=c(e)(t),i=r.year,o=r.month,s=r.day,a=r.hours,f=r.minutes,u=r.seconds,h=r.milliseconds,d=r.zone,l=new Date,m=s||(i||o?1:l.getDate()),M=i||l.getFullYear(),Y=0;i&&!o||(Y=o>0?o-1:l.getMonth());var p=a||0,v=f||0,D=u||0,g=h||0;return d?new Date(Date.UTC(M,Y,m,p,v,D,g+60*d.offset*1e3)):n?new Date(Date.UTC(M,Y,m,p,v,D,g)):new Date(M,Y,m,p,v,D,g)}catch(t){return new Date("")}}(e,a,r),this.init(),d&&!0!==d&&(this.$L=this.locale(d).$L),h&&e!=this.format(a)&&(this.$d=new Date("")),o={}}else if(a instanceof Array)for(var l=a.length,m=1;m<=l;m+=1){s[1]=a[m-1];var M=n.apply(this,s);if(M.isValid()){this.$d=M.$d,this.$L=M.$L,this.init();break}m===l&&(this.$d=new Date(""))}else i.call(this,t)}}}));

/***/ }),

/***/ "./node_modules/dayjs/plugin/weekOfYear.js":
/*!*************************************************!*\
  !*** ./node_modules/dayjs/plugin/weekOfYear.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(this,(function(){"use strict";var e="week",t="year";return function(i,n,r){var f=n.prototype;f.week=function(i){if(void 0===i&&(i=null),null!==i)return this.add(7*(i-this.week()),"day");var n=this.$locale().yearStart||1;if(11===this.month()&&this.date()>25){var f=r(this).startOf(t).add(1,t).date(n),s=r(this).endOf(e);if(f.isBefore(s))return 1}var a=r(this).startOf(t).date(n).startOf(e).subtract(1,"millisecond"),o=this.diff(a,e,!0);return o<0?r(this).startOf("week").week():Math.ceil(o)},f.weeks=function(e){return void 0===e&&(e=null),this.week(e)}}}));

/***/ }),

/***/ "./node_modules/dayjs/plugin/weekday.js":
/*!**********************************************!*\
  !*** ./node_modules/dayjs/plugin/weekday.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(this,(function(){"use strict";return function(e,t){t.prototype.weekday=function(e){var t=this.$locale().weekStart||0,i=this.$W,n=(i<t?i+7:i)-t;return this.$utils().u(e)?n:this.subtract(n,"day").add(e,"day")}}}));

/***/ }),

/***/ "./wwwroot/assets/js/_public-facing/calendar-block.js":
/*!************************************************************!*\
  !*** ./wwwroot/assets/js/_public-facing/calendar-block.js ***!
  \************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dayjs_plugin_customParseFormat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs/plugin/customParseFormat */ "./node_modules/dayjs/plugin/customParseFormat.js");
/* harmony import */ var dayjs_plugin_customParseFormat__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_customParseFormat__WEBPACK_IMPORTED_MODULE_1__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/*
    Javascript for the Calendar block.
    Note that this is javascript solely for the visual calendar UI element,
    the javascript does not interact with the events listed.
    See CalendarBlock.cshtml or CalendarBlock.cs for more info.

    Please Note:
    This block will not show up/run properly without the file
    catfish2-0-GoogleCalendarServiceAccount.json
    present in the project. This file is in the gitignore and is not tracked.
    It helps to configure the Google Calendar access, so make sure you have it!
 */



var weekday = __webpack_require__(/*! dayjs/plugin/weekday */ "./node_modules/dayjs/plugin/weekday.js");

var weekOfYear = __webpack_require__(/*! dayjs/plugin/weekOfYear */ "./node_modules/dayjs/plugin/weekOfYear.js");

Vue.component('calendar-block-vue', {
  props: ["uid", "model", "googlecalendardata", "calendardisplay"],
  data: function data() {
    return {
      WEEKDAYS: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      initialYear: null,
      initialMonth: null,
      days: [],
      currentMonthDays: [],
      previousMonthDays: [],
      nextMonthDays: [],
      selectedMonth: null,
      today: null,
      //for weekly strip
      daysSection: [],
      weekSliceNum: 7,
      //not the best solution, figure out something else
      //0 = neutral, -1 = backwards, 1 = forwards
      lastAction: 0,
      currentWeekNum: 0,
      totalWeeksInMonth: 5
    };
  },
  computed: {
    isEventsInMonth: function isEventsInMonth() {
      var _iterator = _createForOfIteratorHelper(this.googlecalendardata),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var calendarEvent = _step.value;

          if (calendarEvent.StartMonth == this.selectedMonth.format('MMM') && calendarEvent.StartYear == this.selectedMonth.format("YYYY")) {
            return true;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return false;
    },
    isEventsInWeek: function isEventsInWeek() {
      var _iterator2 = _createForOfIteratorHelper(this.googlecalendardata),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var calendarEvent = _step2.value;

          if (calendarEvent.StartMonth == this.selectedMonth.format('MMM') && this.isDayInWeek(calendarEvent) && calendarEvent.StartYear == this.selectedMonth.format("YYYY")) {
            return true;
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      return false;
    },
    //the events for the currently selected month (in year)
    eventsForTheMonth: function eventsForTheMonth() {
      var currentEvents = [];

      var _iterator3 = _createForOfIteratorHelper(this.googlecalendardata),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var calendarEvent = _step3.value;

          if (calendarEvent.StartMonth == this.selectedMonth.format("MMM") && calendarEvent.StartYear == this.selectedMonth.format("YYYY")) {
            currentEvents.push(calendarEvent);
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      return currentEvents;
    },
    //the events for the currently selected week (in year)
    eventsForTheWeek: function eventsForTheWeek() {
      var currentEvents = [];

      var _iterator4 = _createForOfIteratorHelper(this.googlecalendardata),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var calendarEvent = _step4.value;

          if (calendarEvent.StartMonth == this.selectedMonth.format("MMM") && calendarEvent.StartYear == this.selectedMonth.format("YYYY") && this.isDayInWeek(calendarEvent)) {
            currentEvents.push(calendarEvent);
          }
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }

      return currentEvents;
    }
  },
  methods: {
    //code from Css-Tricks monthly Calendar with real data
    //https://css-tricks.com/how-to-make-a-monthly-calendar-with-real-data/
    //Accessed April 8 2021
    getNumberOfDaysInMonth: function getNumberOfDaysInMonth(year, month) {
      return dayjs__WEBPACK_IMPORTED_MODULE_0___default()("".concat(year, "-").concat(month, "-01")).daysInMonth();
    },
    //returns what day of the week the date is (Mon/Tues/Weds/etc)
    getWeekday: function getWeekday(date) {
      return dayjs__WEBPACK_IMPORTED_MODULE_0___default()(date).weekday();
    },
    //note: index is the day (index + 1), day is undefined
    createDaysForCurrentMonth: function createDaysForCurrentMonth(year, month) {
      var _this = this;

      return _toConsumableArray(Array(this.getNumberOfDaysInMonth(year, month))).map(function (day, index) {
        return {
          date: dayjs__WEBPACK_IMPORTED_MODULE_0___default()("".concat(year, "-").concat(month, "-").concat(index + 1)).format("YYYY-MM-DD"),
          dayOfMonth: index + 1,
          isCurrentMonth: true,
          hasEvent: _this.checkIfEventDay(index + 1, month, year)
        };
      });
    },
    //note: index is the day (index + 1), day is undefined
    createDaysForPreviousMonth: function createDaysForPreviousMonth(year, month) {
      var firstDayOfTheMonthWeekday = this.getWeekday(this.currentMonthDays[0].date);
      var previousMonth = dayjs__WEBPACK_IMPORTED_MODULE_0___default()("".concat(year, "-").concat(month, "-01")).subtract(1, "month"); // Account for first day of the month on a Sunday (firstDayOfTheMonthWeekday === 0)

      var visibleNumberOfDaysFromPreviousMonth = firstDayOfTheMonthWeekday; //? firstDayOfTheMonthWeekday - 1 : 6

      var previousMonthLastMondayDayOfMonth = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(this.currentMonthDays[0].date).subtract(visibleNumberOfDaysFromPreviousMonth, "day").date();
      return _toConsumableArray(Array(visibleNumberOfDaysFromPreviousMonth)).map(function (day, index) {
        return {
          date: dayjs__WEBPACK_IMPORTED_MODULE_0___default()("".concat(previousMonth.year(), "-").concat(previousMonth.month() + 1, "-").concat(previousMonthLastMondayDayOfMonth + index)).format("YYYY-MM-DD"),
          dayOfMonth: previousMonthLastMondayDayOfMonth + index,
          isCurrentMonth: false,
          hasEvent: false //this.checkIfEventDay(index + 1, month, year)

        };
      });
    },
    //note: index is the day (index + 1), day is undefined
    createDaysForNextMonth: function createDaysForNextMonth(year, month) {
      var lastDayOfTheMonthWeekday = this.getWeekday("".concat(year, "-").concat(month, "-").concat(this.currentMonthDays.length));
      var visibleNumberOfDaysFromNextMonth = lastDayOfTheMonthWeekday ? 6 - lastDayOfTheMonthWeekday : 6; //lastDayOfTheMonthWeekday;

      return _toConsumableArray(Array(visibleNumberOfDaysFromNextMonth)).map(function (day, index) {
        return {
          date: dayjs__WEBPACK_IMPORTED_MODULE_0___default()("".concat(year, "-").concat(Number(month) + 1, "-").concat(index + 1)).format("YYYY-MM-DD"),
          dayOfMonth: index + 1,
          isCurrentMonth: false,
          hasEvent: false //this.checkIfEventDay(index + 1, month, year)

        };
      });
    },
    //for now only works for start day, not multiple days
    checkIfEventDay: function checkIfEventDay(day, month, year) {
      var _iterator5 = _createForOfIteratorHelper(this.googlecalendardata),
          _step5;

      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var calendarEvent = _step5.value;
          //google calendar puts a 0 in front of single digits, ie 01, 02, 03...
          //need to remove that to properly compare
          var startDay = "";

          if (calendarEvent.StartDay[0] == "0") {
            startDay = calendarEvent.StartDay.slice(1);
          } else {
            startDay = calendarEvent.StartDay;
          } //FF issue with formatting, need to convert to ISO format due to the way FF handles Date objects


          var regCalendarDate = new Date("".concat(year, "/").concat(month, "/").concat(day)).toISOString();
          var regCalendarDateConverted = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(regCalendarDate, "YYYY-MM-DD").format("YYYY-MM-DD");
          var calendarDateConverted = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(calendarEvent.StartDateTime, "YYYY-MM-DD").format("YYYY-MM-DD");

          if (regCalendarDateConverted === calendarDateConverted) {
            return true;
          }
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }

      return false;
    },
    createCalendar: function createCalendar() {
      var year = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.initialYear;
      var month = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.initialMonth;
      this.days = [];
      this.currentMonthDays = this.createDaysForCurrentMonth(year, month, dayjs__WEBPACK_IMPORTED_MODULE_0___default()("".concat(year, "-").concat(month, "-01")).daysInMonth());
      this.previousMonthDays = this.createDaysForPreviousMonth(year, month);
      this.nextMonthDays = this.createDaysForNextMonth(year, month);
      this.days = [].concat(_toConsumableArray(this.previousMonthDays), _toConsumableArray(this.currentMonthDays), _toConsumableArray(this.nextMonthDays));
    },
    goToPreviousMonth: function goToPreviousMonth() {
      this.selectedMonth = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(this.selectedMonth).subtract(1, "month");
      this.createCalendar(this.selectedMonth.format("YYYY"), this.selectedMonth.format("M"));
    },
    goToNextMonth: function goToNextMonth() {
      this.selectedMonth = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(this.selectedMonth).add(1, "month");
      this.createCalendar(this.selectedMonth.format("YYYY"), this.selectedMonth.format("M"));
    },
    goToPresentMonth: function goToPresentMonth() {
      this.selectedMonth = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(new Date(this.initialYear, this.initialMonth - 1, 1));
      this.createCalendar(this.selectedMonth.format("YYYY"), this.selectedMonth.format("M"));
    },
    goToPresentWeekMonth: function goToPresentWeekMonth() {
      this.goToPresentMonth(); //get correct week to display

      this.totalWeeksInMonth = Math.floor(this.days.length / 7);
      var trueToday = this.previousMonthDays.length + parseInt(dayjs__WEBPACK_IMPORTED_MODULE_0___default()(this.today).format("DD"));
      var weekOfToday = Math.floor(trueToday / 7);
      this.currentWeekNum = weekOfToday;
      this.daysSection = this.days.slice(weekOfToday * 7, weekOfToday * 7 + 7);
    },
    goToNextWeek: function goToNextWeek() {
      //if week exceeds the current month
      this.currentWeekNum += 1;

      if (this.currentWeekNum >= this.totalWeeksInMonth) {
        //goto next month, recalculate weeks in month etc
        this.goToNextMonth();
        this.totalWeeksInMonth = Math.floor(this.days.length / 7);
        this.currentWeekNum = 0;
      } //else {


      this.daysSection = this.days.slice(this.currentWeekNum * 7, this.currentWeekNum * 7 + 7); //}
      //if week exceeds the current month
      //let lastWeekInMonth = this.days.slice(-7);
      //let isSameWeek = this.compareWeeks(lastWeekInMonth);
      //if (isSameWeek) {
      //    this.goToNextMonth();
      //    this.weekSliceNum = 0;
      //    this.daysSection = this.days.slice((this.weekSliceNum), this.weekSliceNum + 7);
      //    this.weekSliceNum += 7; 
      //} else {
      //    //checks if changed direction
      //    if (this.lastAction < 0) {
      //        this.weekSliceNum += 7;
      //    }
      //    this.weekSliceNum += 7;
      //    this.daysSection = this.days.slice((this.weekSliceNum - 7), this.weekSliceNum);
      //    this.lastAction = 1;
      //}
    },
    goToPreviousWeek: function goToPreviousWeek() {
      //if week exceeds the current month
      //this.currentWeekNum -= 1;
      var tmp = this.currentWeekNum - 1;

      if (tmp < 0) {
        //goto next month, recalculate weeks in month etc
        this.goToPreviousMonth();
        this.totalWeeksInMonth = Math.floor(this.days.length / 7);
        this.currentWeekNum = this.totalWeeksInMonth;
      } //else {


      this.daysSection = this.days.slice(this.currentWeekNum * 7 - 7, this.currentWeekNum * 7);
      this.currentWeekNum -= 1; //}
      //if week exceeds the current month
      //let firstWeekInMonth = this.days.slice(0, 7);
      //let isSameWeek = this.compareWeeks(firstWeekInMonth);
      //if (isSameWeek) {
      //    this.goToPreviousMonth();
      //    this.weekSliceNum = this.days.length;
      //    this.daysSection = this.days.slice(this.weekSliceNum - 7, this.weekSliceNum);
      //    this.weekSliceNum -= 7; 
      //} else {
      //    //checks if changed direction
      //    if (this.lastAction > 0) {
      //        this.weekSliceNum -= 7;
      //    }
      //    this.weekSliceNum -= 7;
      //    this.daysSection = this.days.slice(this.weekSliceNum, this.weekSliceNum + 7);
      //    this.lastAction = -1;
      //}
    },

    /**
     * Object comparison of day objects
     * @returns boolean true/false value
     * */
    compareWeeks: function compareWeeks(week) {
      var _iterator6 = _createForOfIteratorHelper(this.daysSection.entries()),
          _step6;

      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var _step6$value = _slicedToArray(_step6.value, 2),
              i = _step6$value[0],
              day = _step6$value[1];

          if (day !== week[i]) {
            return false;
          }
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }

      return true;
    },

    /**
     * Gets the event's title for the provided day
     * @param {any} day
     */
    getEventDayTitle: function getEventDayTitle(day) {
      var _iterator7 = _createForOfIteratorHelper(this.googlecalendardata),
          _step7;

      try {
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
          var calendarEvent = _step7.value;

          if (dayjs__WEBPACK_IMPORTED_MODULE_0___default()(calendarEvent.StartDateTime).format("YYYY-MM-DD") == day.date) {
            return calendarEvent.Summary;
          }
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }
    },

    /**
     * Checks if the provided event day is in the section of the week
     * @param {any} calendarDay event from google calendar
     */
    isDayInWeek: function isDayInWeek(calendarDay) {
      var _iterator8 = _createForOfIteratorHelper(this.daysSection),
          _step8;

      try {
        for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
          var sectionDay = _step8.value;

          if (dayjs__WEBPACK_IMPORTED_MODULE_0___default()(calendarDay.StartDateTime).format("YYYY-MM-DD") == sectionDay.date) {
            return true;
          }
        }
      } catch (err) {
        _iterator8.e(err);
      } finally {
        _iterator8.f();
      }

      return false;
    }
  },
  created: function created() {
    dayjs__WEBPACK_IMPORTED_MODULE_0___default.a.extend(weekday);
    dayjs__WEBPACK_IMPORTED_MODULE_0___default.a.extend(weekOfYear); //for Firefox date parsing support

    dayjs__WEBPACK_IMPORTED_MODULE_0___default.a.extend(dayjs_plugin_customParseFormat__WEBPACK_IMPORTED_MODULE_1___default.a);
    this.initialYear = dayjs__WEBPACK_IMPORTED_MODULE_0___default()().format("YYYY");
    this.initialMonth = dayjs__WEBPACK_IMPORTED_MODULE_0___default()().format("M");
    this.selectedMonth = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(new Date(this.initialYear, this.initialMonth - 1, 1));
    console.log(this.googlecalendardata);
    this.currentMonthDays = this.createDaysForCurrentMonth(this.initialYear, this.initialMonth);
    this.previousMonthDays = this.createDaysForPreviousMonth(this.initialYear, this.initialMonth, this.currentMonthDays[0]);
    this.nextMonthDays = this.createDaysForNextMonth(this.initialYear, this.initialMonth);
    this.today = dayjs__WEBPACK_IMPORTED_MODULE_0___default()().format("YYYY-MM-DD");
    this.days = [].concat(_toConsumableArray(this.previousMonthDays), _toConsumableArray(this.currentMonthDays), _toConsumableArray(this.nextMonthDays)); //for weekly calendar strip

    if (this.calendardisplay == 2) {
      //get correct week to display
      this.totalWeeksInMonth = Math.floor(this.days.length / 7);
      var trueToday = this.previousMonthDays.length + parseInt(dayjs__WEBPACK_IMPORTED_MODULE_0___default()(this.today).format("DD"));
      var weekOfToday = Math.floor(trueToday / 7);
      this.currentWeekNum = weekOfToday;
      this.daysSection = this.days.slice(weekOfToday * 7, weekOfToday * 7 + 7);
    }
  }
});

/***/ })

/******/ });
//# sourceMappingURL=calendar-block-vue.js.map