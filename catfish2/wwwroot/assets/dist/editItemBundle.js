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
/******/ 		"editItemBundle": 0
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
/******/ 	deferredModules.push(["./wwwroot/assets/js/catfish.edititem.js","vendorsManagerSide"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./wwwroot/assets/js/catfish.edititem.js":
/*!***********************************************!*\
  !*** ./wwwroot/assets/js/catfish.edititem.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _static_string_values_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../static/string-values.json */ "./wwwroot/assets/static/string-values.json");
var _static_string_values_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../static/string-values.json */ "./wwwroot/assets/static/string-values.json", 1);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//import { VueEditor } from "vue2-editor";


/**
 * Javascript Vue code for creating a single item edit layout in ItemEdit.cshtml.
 */

/**
 * This check makes sure the file is only run on the page with
 * the element. Not a huge deal, can be removed if it's causing issues.
 */

if (document.getElementById("item-edit-page")) {
  Vue.component('item-field-component', {
    props: ['fieldData', 'isInPreviewMode', 'languageLabels'],
    data: function data() {
      return {
        //key-value pairs of input types from the database and their associated
        //input type
        inputTypes: {
          "text": "Catfish.Core.Models.Contents.Fields.TextField",
          "textarea": "Catfish.Core.Models.Contents.Fields.TextArea",
          "date": "Catfish.Core.Models.Contents.Fields.DateField",
          "integer": "Catfish.Core.Models.Contents.Fields.IntegerField",
          "decimal": "Catfish.Core.Models.Contents.Fields.DecimalField"
        },
        fieldRequiredLabel: '',
        valueLabel: '',
        deleteLabel: '',
        //temp so ids are unique per field, they will be with real data
        uniqueIdForField: ''
      };
    },
    methods: {
      /**
       * Adds another entry set to the field
       */
      addNewValue: function addNewValue() {
        var valueObjToCopy = Object.values(this.fieldData.ValueGroups)[0];
        var newEntry = JSON.parse(JSON.stringify(valueObjToCopy));

        var _iterator = _createForOfIteratorHelper(newEntry),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var val = _step.value;
            val.Value = "";
            val.Id = Object(uuid__WEBPACK_IMPORTED_MODULE_0__["v1"])();
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        var newEntryId = Object(uuid__WEBPACK_IMPORTED_MODULE_0__["v1"])();
        this.$set(this.fieldData.ValueGroups, newEntryId, newEntry);
        this.fieldData.ValueIds.splice(this.fieldData.ValueIds.length, 0, newEntryId);
      },

      /**
       * Deletes the field from the item
       */
      deleteField: function deleteField(fieldValueId) {
        //this.metadataSets[metadataSetId].Fields.$values.splice(fieldId, 1);
        //this.setOriginalFields();
        var indexToRemove = this.fieldData.ValueIds.indexOf(fieldValueId);
        this.fieldData.ValueIds.splice(indexToRemove, 1);
        delete this.fieldData.ValueGroups[fieldValueId];
        console.log(this.fieldData);
      }
    },
    created: function created() {
      this.fieldRequiredLabel = _static_string_values_json__WEBPACK_IMPORTED_MODULE_1__.managerSideValues.editItemLabels.FIELD_REQUIRED_LABEL;
      this.valueLabel = _static_string_values_json__WEBPACK_IMPORTED_MODULE_1__.managerSideValues.editItemLabels.VALUE_LABEL;
      this.deleteLabel = _static_string_values_json__WEBPACK_IMPORTED_MODULE_1__.managerSideValues.editItemLabels.DELETE_LABEL;
    },
    template: "\n        <div class=\"sitemap-item additional-spacing\">\n            <div class=\"link\">\n                <div class=\"flex-row\" v-for=\"(val, index) of fieldData.ValueIds\">\n                    \n                    <!--<div v-if=\"!isInPreviewMode\" class=\"col-md-4 mb-3 metadata-input\">-->\n\n                        <div v-if=\"fieldData.ModelType.includes(inputTypes.text)\" v-for=\"(fieldValue, fieldValueIndex) of fieldData.ValueGroups[val]\" class=\"metadata-input\">\n                            <div>\n                                <label :for=\"val + '-index-' + fieldValueIndex + '-' + index + fieldValue.Id\"><h4>{{fieldData.Name[fieldValueIndex].Value}} </h4></label>\n                                <div v-if=\"!isInPreviewMode\">\n                                    <input :id=\"val + '-index-' + fieldValueIndex + '-' + index + fieldValue.Id\"\n                                    required type=\"text\" class=\"form-control\"\n                                    v-model=\"fieldValue.Value\"\n                                    >\n                                    <div class=\"invalid-feedback\">\n                                        This field is required.\n                                    </div>\n                                </div>\n                                <div v-else>\n                                    <div>{{fieldValue.Value}}</div>\n                                </div>\n                            </div>\n                            <div v-if=\"!isInPreviewMode\" class=\"btn-group float-right-button space-above\" role=\"group\">\n                                <button :disabled=\"fieldData.ValueIds.length <= 1\"\n                                    type=\"button\" v-on:click=\"deleteField(val)\"\n                                    class=\"btn btn-sm btn-danger btn-labeled trash-button\">\n                                    <i class=\"fas fa-trash\"></i>\n                                    {{deleteLabel}}\n                                </button>\n                            </div>\n                            <hr style=\"width: 100%; display:inline-flex;\">\n                        </div>\n                        \n                        <div v-else-if=\"fieldData.ModelType.includes(inputTypes.textarea)\" v-for=\"(fieldValue, fieldValueIndex) of fieldData.ValueGroups[val]\" class=\"metadata-input\">\n                            <div>\n                                <label :for=\"val + '-index-' + fieldValueIndex + '-' + index + fieldValue.Id\"><h4>{{fieldData.Name[fieldValueIndex].Value}} </h4></label>\n                            </div>\n                            <div v-if=\"!isInPreviewMode\">\n                                <textarea :id=\"val + '-index-' + fieldValueIndex + '-' + index + fieldValue.Id\"\n                                required class=\"form-control\" rows=\"3\"\n                                v-model=\"fieldValue.Value\"></textarea>\n                                <div class=\"invalid-feedback\">\n                                    This field is required.\n                                </div>\n                            </div>\n                            <div v-else>\n                                <div>{{fieldValue.Value}}</div>\n                            </div>\n                            <div v-if=\"!isInPreviewMode\" class=\"btn-group float-right-button space-above\" role=\"group\">\n                                <button :disabled=\"fieldData.ValueIds.length <= 1\"\n                                    type=\"button\" v-on:click=\"deleteField(val)\"\n                                    class=\"btn btn-sm btn-danger btn-labeled trash-button\">\n                                    <i class=\"fas fa-trash\"></i>\n                                    {{deleteLabel}}\n                                </button>\n                            </div>\n                        </div>\n\n                        <div v-else-if=\"fieldData.ModelType.includes(inputTypes.date)\" v-for=\"(fieldValue, fieldValueIndex) of fieldData.ValueGroups[val]\" class=\"metadata-input\">\n                            <div>\n                                <label :for=\"val + '-index-' + fieldValueIndex + '-' + index + fieldValue.Id\"><h4>{{fieldData.Name[fieldValueIndex].Value}} </h4></label>\n                            </div>\n                            <div v-if=\"!isInPreviewMode\">\n                                <input type=\"date\" \n                                v-model=\"fieldValue.Value\" required class=\"form-control\">\n                                <div class=\"invalid-feedback\">\n                                    This field is required.\n                                </div>\n                            </div>\n                            <div v-else>\n                                <div>\n                                    {{fieldValue.Value}}\n                                </div>\n                            </div>\n                        </div>\n\n                        <div v-else-if=\"fieldData.ModelType.includes(inputTypes.integer)\" v-for=\"(fieldValue, fieldValueIndex) of fieldData.ValueGroups[val]\" class=\"metadata-input\">\n                            <div>\n                                <label :for=\"val + '-index-' + fieldValueIndex + '-' + index + fieldValue.Id\"><h4>{{fieldData.Name[fieldValueIndex].Value}} </h4></label>\n                            </div>\n                            <div v-if=\"!isInPreviewMode\">\n                                <input type=\"number\" v-if=\"!isInPreviewMode\"\n                                v-model=\"fieldValue.Value\" required class=\"form-control\">\n                                <div class=\"invalid-feedback\">\n                                    This field is required.\n                                </div>\n                            </div>\n                            <div v-else>\n                                <div>\n                                    {{fieldValue.Value}}\n                                </div>\n                            </div>\n                        </div>\n\n                        <!--TODO need to come back and adjust this for better decimal functionality -->\n                        <div v-else-if=\"fieldData.ModelType.includes(inputTypes.decimal)\" v-for=\"(fieldValue, fieldValueIndex) of fieldData.ValueGroups[val]\" class=\"metadata-input\">\n                            <div>\n                                <label :for=\"val + '-index-' + fieldValueIndex + '-' + index + fieldValue.Id\"><h4>{{fieldData.Name[fieldValueIndex].Value}} </h4></label>\n                            </div>\n                            <div v-if=\"!isInPreviewMode\">\n                                <input type=\"number\" step=\".01\"\n                                required class=\"form-control\" v-model=\"fieldValue.Value\">\n                                <div class=\"invalid-feedback\">\n                                    This field is required.\n                                </div>\n                            </div>\n                            <div v-else>\n                                <div>\n                                    {{fieldValue.Value}}\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"invalid-feedback\">\n                            {{fieldRequiredLabel}}\n                        </div>\n                    </div>\n                    <!--<div v-else>\n                        <span>\n                            {{fieldData.Value}} \n                        </span>\n                    </div>-->\n                <!--</div>-->\n                </div>\n                \n\n                <div v-if=\"piranha.permissions.pages.add && !isInPreviewMode\" class=\"add-value-container\">\n                    <div class=\"btn-group float-right-button\" role=\"group\">\n                        <button v-if=\"!fieldData.ModelType.includes(inputTypes.integer) && !fieldData.ModelType.includes(inputTypes.date)\" type=\"button\" v-on:click=\"addNewValue()\"\n                                class=\"btn btn-lg btn-primary btn-labeled\">\n                            <i class=\"fas fa-plus\"></i>\n                            {{valueLabel}}\n                        </button>\n                    </div>\n                    \n\n                </div>\n\n            </div>\n    "
  });
  piranha.itemlist = new Vue({
    el: '#item-edit-page',

    /*components: {
        VueEditor
    },*/
    data: function data() {
      return {
        //api strings
        getString: "manager/api/items/",
        postString: "manager/api/items",
        //"manager/items/save",
        content: "<h1>Some initial content</h1>",
        loading: true,
        item: null,
        itemId: null,
        nameAttribute: null,
        descriptionAttribute: null,
        buttonOptions: [],
        //label for multichoice dropdown button
        mcDropdownButtonLabel: "",
        activeOption: "",
        //bring this in from somewhere else, will have ALL language abbreviations in it
        languages: {
          en: "English",
          fr: "Français",
          sp: "Español"
        },
        DEFAULT_LANGUAGE: 'en',
        //array for displaying language labels listed in received JSON
        //im assuming here that all fields will have the
        //same languages enabled, since languages are enabled sitewide
        languageLabels: [],
        //using this because the root Name and Description display is the same, so i load them into this to display in a loop
        sections: [{
          title: ''
        }, {
          title: ''
        }],
        metadataSets: [],
        metadataSets_type: null,
        metadataSetLabel: "Metadata Sets",
        //stores the first time a field appears in the fields of a metadata set
        //this would be better handled by using child components but 
        //project structure for Vue stuff is really weird...
        originalFieldIndexMaster: [],
        originalFields: [],
        isInPreviewMode: false,
        savePreviewEditButtonType: "submit",
        saveSuccessfulLabel: "Saved!",
        saveFailedLabel: "Failed to Save",
        saveFieldsRequiredLabel: "Some fields are required",
        saveStatus: 0,
        validForm: true
      };
    },
    computed: {
      itemName: {
        get: function get() {
          return this.nameAttribute.Value || "";
        }
      }
    },
    methods: {
      /**
       * Fetches the data associated with the item's ID
       **/
      fetchData: function fetchData() {
        var self = this;
        console.log(piranha.baseUrl + this.getString + this.itemId);
        piranha.permissions.load(function () {
          fetch(piranha.baseUrl + self.getString + self.itemId).then(function (response) {
            return response.json();
          }).then(function (result) {
            self.item = result;
            console.log("json received:", self.item);
            self.nameAttribute = result.Name;
            self.descriptionAttribute = result.Description;
            self.metadataSets = result.MetadataSets;
            self.updateBindings = true;
            self.sections[0].value = self.nameAttribute;
            self.sections[1].value = self.descriptionAttribute; //prepare language labels

            self.setLanguageLabels(self.sections); //track original field indices
            //self.setOriginalFields();
          })["catch"](function (error) {
            console.log("error:", error);
          });
        });
      },

      /**
       * Perform the action the multichoice button states.
       * @param {any} event
       */
      performMCButtonAction: function performMCButtonAction(event, option) {
        switch (option) {
          case this.buttonOptions[0]:
            this.saveForm(event);
            break;

          case this.buttonOptions[1]:
            //edit view
            this.isInPreviewMode = false;
            break;

          case this.buttonOptions[2]:
            //preview view
            this.isInPreviewMode = true;
            break;
        }

        this.activeOption = option;
      },

      /**
       * Checks the form for validity and displays required styles if invalid
       * */
      validateForm: function validateForm() {
        var validity = this.$refs.myForm.checkValidity();
        this.$refs.myForm.classList.add('was-validated');
        return validity;
      },

      /**
       * Saves the form, calls the API to send the data to.
       * @param {any} event
       */
      saveForm: function saveForm(event) {
        var _this = this;

        event.preventDefault();
        this.validForm = this.validateForm(); //OLD - this is the Bootstrap way to do this, doesn't utilize Vue
        //do form validation here and dont submit if problems
        //var forms = document.getElementsByClassName('edit-form');
        // Loop over them and prevent submission
        //Array.prototype.filter.call(forms, function (form) {
        //        if (form.checkValidity() === false) {
        //            event.preventDefault();
        //            event.stopPropagation();
        //            validForm = false;
        //        }
        //        console.log("form validated");
        //        form.classList.add('was-validated');
        //});

        if (this.validForm) {
          console.log("item being posted is here:", this.item);
          fetch(piranha.baseUrl + this.postString, {
            method: "POST",
            headers: {
              'Content-Type': 'application/json' //TODO add multipart for files possiblility

            },
            body: JSON.stringify(this.item)
          }).then(function (res) {
            if (res.ok) {
              _this.saveStatus = 1;
              console.log("????");
              setTimeout(function () {
                _this.saveStatus = 0;
              }, 3000);
            } else {
              _this.saveStatus = -1;
              console.log("!!!!!");
            }

            console.log("res", res);
            return res;
          }).then(function (data) {
            /*alert(JSON.stringify(data))*/
          })["catch"](function (error) {
            console.error('Error:', error);
          });
        } else {
          console.log("form invalid");
          this.saveStatus = -1;
        }
      },
      bind: function bind() {
        var self = this;
        $(".sitemap-container").each(function (i, e) {
          $(e).nestable({
            maxDepth: 100,
            group: i,
            callback: function callback(l, e) {
              fetch(piranha.baseUrl + "manager/api/page/move", {
                method: "post",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  id: $(e).attr("data-id"),
                  items: $(l).nestable("serialize")
                })
              }).then(function (response) {
                return response.json();
              }).then(function (result) {
                piranha.notifications.push(result.status);

                if (result.status.type === "success") {
                  $('.sitemap-container').nestable('destroy');
                  self.sites = [];
                  Vue.nextTick(function () {
                    self.sites = result.sites;
                    Vue.nextTick(function () {
                      self.bind();
                    });
                  });
                }
              })["catch"](function (error) {
                console.log("error:", error);
              });
            }
          });
        });
      },

      /**
       * Sets the initial language labels youll need for the item.
       * @param {any} sections
       */
      setLanguageLabels: function setLanguageLabels(sections) {
        var _iterator2 = _createForOfIteratorHelper(sections),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var item = _step2.value;
            var tmp = this.languages[item.Language];

            if (typeof tmp === 'undefined') {
              tmp = this.languages[this.DEFAULT_LANGUAGE];
            }

            this.languageLabels.push(tmp);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      },

      /**
       * Changes the multichoice button's title to the
       * pass parameter (user chose it from the dropdown)
       * @param {any} newLabel the new label for the button
       */
      changeButtonLabel: function changeButtonLabel(newLabel) {
        this.mcDropdownButtonLabel = newLabel;

        if (this.mcDropdownButtonLabel === this.buttonOptions[0]) {
          this.savePreviewEditButtonType = "submit";
        } else {
          this.savePreviewEditButtonType = "button";
        }
      },

      /**
       * Stores the indices of the first original version of a field.
       * This is useful for knowing which fields will not be able to be deleted
       * because they are the original version to be shown to the user.
       * If they were able to be deleted, there would be no way to show that field again!
       **/
      setOriginalFields: function setOriginalFields() {
        var _this2 = this;

        this.originalFieldIndexMaster.splice(0);
        this.originalFields.splice(0);

        var _iterator3 = _createForOfIteratorHelper(this.metadataSets.entries()),
            _step3;

        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var _step3$value = _slicedToArray(_step3.value, 2),
                index = _step3$value[0],
                metadataSet = _step3$value[1];

            this.originalFieldIndexMaster.splice(this.originalFieldIndexMaster.length, 1, {});
            this.originalFields.splice(this.originalFields, 1, []);

            var _iterator4 = _createForOfIteratorHelper(metadataSet.Fields.$values.entries()),
                _step4;

            try {
              var _loop = function _loop() {
                var _step4$value = _slicedToArray(_step4.value, 2),
                    i = _step4$value[0],
                    field = _step4$value[1];

                //if field differs from fields in originalFieldIndexMaster,
                //track as a new field
                flattened = Object.keys(_this2.originalFieldIndexMaster[index]);

                if (_this2.originalFieldIndexMaster[index].length === 0 || !flattened.some(function (item) {
                  return item === field.Id;
                })) {
                  _this2.$set(_this2.originalFieldIndexMaster[index], field.Id, {
                    field: field.Id,
                    count: 1,
                    startingIndex: null
                  });

                  _this2.$set(_this2.originalFieldIndexMaster[index][field.Id], 'startingIndex', i);

                  _this2.originalFields[index].splice(_this2.originalFields[index].length, 1, i);
                } else {
                  //add to count of whichever is already in the object
                  //this needs to be checked to see if it works
                  matched = flattened.filter(function (item, index) {
                    if (item === field.Id) {
                      return item;
                    }
                  });

                  _this2.$set(_this2.originalFieldIndexMaster[index][matched[0]], 'count', _this2.originalFieldIndexMaster[index][matched[0]].count + 1);
                }
              };

              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var flattened;
                var matched;

                _loop();
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }

            console.log("originalFieldIndexMaster:", this.originalFieldIndexMaster);
            console.log("indices: ", this.originalFields);
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      },
      setStaticItems: function setStaticItems() {
        this.buttonOptions = _static_string_values_json__WEBPACK_IMPORTED_MODULE_1__.managerSideValues.editItemLabels.BUTTON_OPTION_LABELS;
        this.mcDropdownButtonLabel = _static_string_values_json__WEBPACK_IMPORTED_MODULE_1__.managerSideValues.editItemLabels.DROPDOWN_BUTTON_LABEL;
        this.activeOption = _static_string_values_json__WEBPACK_IMPORTED_MODULE_1__.managerSideValues.editItemLabels.ACTIVE_OPTION_LABEL;
        this.sections[0].title = _static_string_values_json__WEBPACK_IMPORTED_MODULE_1__.managerSideValues.editItemLabels.SECTION_LABEL_1;
        this.sections[1].title = _static_string_values_json__WEBPACK_IMPORTED_MODULE_1__.managerSideValues.editItemLabels.SECTION_LABEL_2;
        this.metadataSetLabel = _static_string_values_json__WEBPACK_IMPORTED_MODULE_1__.managerSideValues.editItemLabels.METADATASET_LABEL;
        this.saveSuccessfulLabel = _static_string_values_json__WEBPACK_IMPORTED_MODULE_1__.managerSideValues.editItemLabels.SAVE_SUCCESSFUL_LABEL;
        this.saveFailedLabel = _static_string_values_json__WEBPACK_IMPORTED_MODULE_1__.managerSideValues.editItemLabels.SAVE_FAILED_LABEL;
      }
    },
    updated: function updated() {
      if (this.updateBindings) {
        this.bind();
        this.updateBindings = false;
      }

      this.loading = false;
    },
    created: function created() {
      this.itemId = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
      this.setStaticItems(); //call api

      this.fetchData();
    },
    mounted: function mounted() {
      //initializes all tooltips TODO put these back in, they were lost - or don't?
      $(document).ready(function () {
        $("body").tooltip({
          selector: '[data-toggle=tooltip]'
        });
      });
    }
  });
}

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
//# sourceMappingURL=editItemBundle.js.map