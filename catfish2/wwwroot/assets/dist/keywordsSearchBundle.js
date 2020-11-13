/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"keywordsSearchBundle": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./wwwroot/assets/js/_public-facing/keywords-search-block-public.js","vendorsPublicFacingSide"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./wwwroot/assets/js/_public-facing/keywords-search-block-public.js":
/*!**************************************************************************!*\
  !*** ./wwwroot/assets/js/_public-facing/keywords-search-block-public.js ***!
  \**************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Vue) {/* harmony import */ var _static_string_values_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../static/string-values.json */ "./wwwroot/assets/static/string-values.json");
var _static_string_values_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../static/string-values.json */ "./wwwroot/assets/static/string-values.json", 1);

var vueApp = new Vue({
  el: '#keywords-search-block-public',
  data: function data() {
    return {
      apiSearchUrl: "/api/solr/keywords",
      searchTerms: [],
      categories: '',
      searchResults: [],
      pagesTotal: 0,
      currentPage: 1,
      cardsPerPage: 3,
      searchMade: false,
      loadingSearchResults: false,
      //error variable for if the fetch ever fails,
      //will be used to show an error message to the user
      hasErrorOccurred: false,
      searchResultsLabel: '',
      previousButtonLabel: '',
      nextButtonLabel: '',
      totalResultsLabel: '',
      noResultsLabel: '',
      errorMessage1Label: '',
      errorMessage2Label: '',
      loadingLabel: '',
      defaultSearchMessageLabel: ''
    };
  },
  methods: {
    /**
     * Stores/removes clicked filter button to call API again
     * @param {any} event clickevent
     */
    filterByCategory: function filterByCategory(event) {
      if (this.categories != event.target.value) {
        $('#category-' + this.categories).button('toggle');
        this.categories = event.target.value;
      } else {
        this.categories = '';
      }

      $('#' + event.target.id).button('toggle');
      console.log(event.target.id);
      this.makePostCall();
    },

    /**
     * Stores/removes clicked filter button to call API again
     * @param {any} event clickevent
     */
    filterByCheckbox: function filterByCheckbox(event) {
      if (!this.searchTerms.includes(event.target.value)) {
        this.searchTerms.push(event.target.value);
      } else {
        this.searchTerms.splice(this.searchTerms.indexOf(event.target.value), 1);
      }

      this.makePostCall();
    },
    makePostCall: function makePostCall() {
      var _this = this;

      console.log(event);
      var formData = new FormData();
      this.searchTerms.forEach(function (item, index) {
        return formData.append("keywords[" + index + "]", item);
      }); //formData.append("searchTerms", this.searchTerms);

      formData.append("category[0]", this.categories); //this.categories.forEach((item, index) => formData.append("categories[" + index + "]", item));

      this.loadingSearchResults = true;
      fetch(this.apiSearchUrl, {
        method: 'POST',
        body: formData
      }).then(function (response) {
        return response.json();
      }).then(function (data) {
        if (!_this.hasErrorOccurred) {
          _this.hasErrorOccurred = false;
        }

        _this.searchResults = data;
        console.log(_this.searchResults);
        _this.pagesTotal = Math.ceil(_this.searchResults.length / 3);
        _this.searchMade = true;
        _this.loadingSearchResults = false;
        _this.currentPage = 1;
      })["catch"](function (error) {
        console.error("Failed to fetch: ", error);
        _this.hasErrorOccurred = true;
      });
    }
  },
  created: function created() {
    //assign static values
    this.searchResultsLabel = _static_string_values_json__WEBPACK_IMPORTED_MODULE_0__.publicSideValues.keywordsSearchBlockPublicLabels.SEARCH_RESULTS_LABEL;
    this.previousButtonLabel = _static_string_values_json__WEBPACK_IMPORTED_MODULE_0__.publicSideValues.keywordsSearchBlockPublicLabels.PREVIOUS_BUTTON_LABEL;
    this.nextButtonLabel = _static_string_values_json__WEBPACK_IMPORTED_MODULE_0__.publicSideValues.keywordsSearchBlockPublicLabels.NEXT_BUTTON_LABEL;
    this.totalResultsLabel = _static_string_values_json__WEBPACK_IMPORTED_MODULE_0__.publicSideValues.keywordsSearchBlockPublicLabels.TOTAL_RESULTS_LABEL;
    this.noResultsLabel = _static_string_values_json__WEBPACK_IMPORTED_MODULE_0__.publicSideValues.keywordsSearchBlockPublicLabels.NO_RESULTS_LABEL;
    this.errorMessage1Label = _static_string_values_json__WEBPACK_IMPORTED_MODULE_0__.publicSideValues.keywordsSearchBlockPublicLabels.ERROR_MESSAGE_1_LABEL;
    this.errorMessage2Label = _static_string_values_json__WEBPACK_IMPORTED_MODULE_0__.publicSideValues.keywordsSearchBlockPublicLabels.ERROR_MESSAGE_2_LABEL;
    this.loadingLabel = _static_string_values_json__WEBPACK_IMPORTED_MODULE_0__.publicSideValues.keywordsSearchBlockPublicLabels.LOADING_LABEL;
    this.defaultSearchMessageLabel = _static_string_values_json__WEBPACK_IMPORTED_MODULE_0__.publicSideValues.keywordsSearchBlockPublicLabels.DEFAULT_SEARCH_MESSAGE_LABEL;
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! vue/dist/vue.esm.js */ "./node_modules/vue/dist/vue.esm.js")["default"]))

/***/ }),

/***/ "./wwwroot/assets/static/string-values.json":
/*!**************************************************!*\
  !*** ./wwwroot/assets/static/string-values.json ***!
  \**************************************************/
/*! exports provided: managerSideValues, publicSideValues, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"managerSideValues\":{\"itemlistLabels\":{},\"editItemLabels\":{\"BUTTON_OPTION_LABELS\":[\"Save\",\"Edit\",\"Preview\"],\"DROPDOWN_BUTTON_LABEL\":\"Actions\",\"ACTIVE_OPTION_LABEL\":\"Edit\",\"SECTION_LABEL_1\":\"Name\",\"SECTION_LABEL_2\":\"Description\",\"METADATASET_LABEL\":\"MetadataSets\",\"SAVE_SUCCESSFUL_LABEL\":\"Saved!\",\"SAVE_FAILED_LABEL\":\"Failed to Save\",\"FIELD_REQUIRED_LABEL\":\"This field is required.\",\"VALUE_LABEL\":\"Value\",\"DELETE_LABEL\":\"Delete\"},\"editFieldFormLabels\":{\"SAVE_SUCCESS_LABEL\":\"Save Successful\",\"SAVE_FAILED_LABEL\":\"Failed to Save\",\"SAVE_FIELD_FORM_BUTTON_LABEL\":\"Save\",\"FORM_TITLE_LABEL\":\"Title\",\"FORM_TITLE_PLACEHOLDER\":\"Title your form here\",\"FORM_DESCRIPTION_LABEL\":\"Description\",\"FORM_DESCRIPTION_PLACEHOLDER\":\"Add a description here\",\"FORM_FIELD_LABEL\":\"Fields\",\"DEFAULT_FIELD_TITLE\":\"Field Title\",\"FIELD_TITLE_PLACEHOLDER\":\"Title your field here\",\"FIELD_DESCRIPTION_LABEL\":\"Description\",\"FIELD_DESCRIPTION_PLACEHOLDER\":\"Describe the purpose of this field...\",\"SETTINGS_LABEL\":\"Settings\",\"LONG_ANSWER_FORMAT_TEXT_LABEL\":\"Allow formatted text\",\"CHOICE_OPTION_LABEL\":\"Option\",\"CHOICE_DEFAULT_OPTION_LABEL\":\"Set as Default Option\",\"CHOICE_ADDITIONAL_INPUT_LABEL\":\"Requires Additional Input\",\"ANY_LABEL\":\"Any\",\"ALLOW_MULTIPLE_FILES_LABEL\":\"Allow multiple files\",\"WHOLE_NUMBERS_ONLY_LABEL\":\"Limit to whole numbers only\",\"REQUIRED_LABEL\":\"Required\",\"ADD_DESCRIPTION_LABEL\":\"Add Description\",\"REMOVE_DESCRIPTION_LABEL\":\"Remove Description\",\"LOADING_LABEL\":\"Loading...\"}},\"publicSideValues\":{\"keywordsSearchBlockPublicLabels\":{\"SEARCH_RESULTS_LABEL\":\"Search Results\",\"PREVIOUS_BUTTON_LABEL\":\"Previous\",\"NEXT_BUTTON_LABEL\":\"Next\",\"TOTAL_RESULTS_LABEL\":\"Total Results:\",\"NO_RESULTS_LABEL\":\"Sorry, no results.\",\"ERROR_MESSAGE_1_LABEL\":\"A problem has occurred completing your search.\",\"ERROR_MESSAGE_2_LABEL\":\"Please contact ARC for further assistance.\",\"LOADING_LABEL\":\"Loading...\",\"DEFAULT_SEARCH_MESSAGE_LABEL\":\"Select from the options above to search.\"}}}");

/***/ })

/******/ });
//# sourceMappingURL=keywordsSearchBundle.js.map