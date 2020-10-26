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
/******/ 		"main": 0
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
/******/ 	deferredModules.push(["./wwwroot/assets/js/catfish.editFieldForm.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./wwwroot/assets/js/catfish.editFieldForm.js":
/*!****************************************************!*\
  !*** ./wwwroot/assets/js/catfish.editFieldForm.js ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuedraggable */ "./node_modules/vuedraggable/dist/vuedraggable.common.js");
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuedraggable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_quill_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-quill-editor */ "./node_modules/vue-quill-editor/dist/vue-quill-editor.js");
/* harmony import */ var vue_quill_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_quill_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuelidate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuelidate */ "./node_modules/vuelidate/lib/index.js");
/* harmony import */ var vuelidate__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vuelidate__WEBPACK_IMPORTED_MODULE_4__);
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

 //import 'quill/dist/quill.core.css'
//import 'quill/dist/quill.snow.css'
//import 'quill/dist/quill.bubble.css'





Vue.use(vuelidate__WEBPACK_IMPORTED_MODULE_4___default.a);
/**
 * Javascript Vue code for creating the editable form from existing data in FieldContainerEdit.cshtml.
 * It is modelled after the file piranha.pagelist.js in Piranha's source code.
 */

/**
 * This check makes sure the file is only run on the page with
 * the element. Not a huge deal, can be removed if it's causing issues.
 */

if (document.getElementById("edit-field-form-page")) {
  piranha.editFieldForm = new Vue({
    el: '#edit-field-form-page',
    components: {
      draggable: vuedraggable__WEBPACK_IMPORTED_MODULE_0___default.a,
      quillEditor: vue_quill_editor__WEBPACK_IMPORTED_MODULE_1__["quillEditor"]
    },
    data: function data() {
      return {
        itemId: null,
        finishedGET: false,
        //api strings
        getString: "manager/api/forms/",
        //this one is for the default templates
        getFieldDefs: "manager/api/forms/fielddefs",
        //postString: "manager/items/save",
        names: null,
        descriptions: null,
        fields: null,
        fields_type: null,
        id: null,
        modelType: null,
        dropdowns: {},
        //temp, need to call an api for these
        fieldTypes: [{
          text: 'Select One',
          value: null
        }, {
          value: 0,
          text: 'Short Answer',
          modelType: 'TextField'
        }, {
          value: 1,
          text: 'Long Answer',
          modelType: 'TextArea'
        }, {
          value: 2,
          text: 'Multiple Choice',
          modelType: 'Radio'
        }, {
          value: 3,
          text: 'Check Box',
          modelType: 'Checkbox'
        }, {
          value: 4,
          text: 'Dropdown List',
          modelType: 'Dropdown'
        }, {
          value: 5,
          text: 'File Upload',
          modelType: 'FileAttachment'
        }, {
          value: 6,
          text: 'Display Text',
          modelType: 'DisplayField'
        }],
        rightColumnOptions: [{
          value: 0,
          text: "Add Question"
        }, {
          value: 1,
          text: "Add Section (TBA)"
        }],
        //will be sent through API, temp
        fileTypes: ["PDF", "DOC", "DOCX", "PS", "EPS", "JPG", "PNG"],
        //temp until templates sent
        tmpTextfieldTemplate: null,
        tmpTextAreaTemplate: null,
        tmpRadioTemplate: null,
        tmpCheckboxTemplate: null,
        tmpDropdownTemplate: null,
        tmpFileAttachmentTemplate: null,
        tmpDisplayFieldTemplate: null,
        saveStatus: 0,
        //TODO: make a file of constant strings
        saveSuccessfulLabel: "Save Successful",
        saveFailedLabel: "Failed to Save",
        saveFieldFormButtonLabel: "Save"
      };
    },
    validations: {
      names: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__["required"],
        Values: {
          $values: {
            $each: {
              Value: {
                required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__["required"]
              }
            }
          }
        }
      },
      descriptions: {
        Values: {
          $values: {
            $each: {
              Value: {}
            }
          }
        }
      },
      fields: {
        $each: {
          Values: {
            //currently the display text option can be submitted regardless of any text or not
            //it errors on reading an array instead of an empty string on creation, need different place to store it
            //all start with this value at Array(0)
            required: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__["requiredIf"])(function (fieldModel) {
              return fieldModel.ModelType == 'Catfish.Core.Models.Contents.Fields.Radio, Catfish.Core, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null' || fieldModel.ModelType == 'Catfish.Core.Models.Contents.Fields.Checkbox, Catfish.Core, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null' || fieldModel.ModelType == 'Catfish.Core.Models.Contents.Fields.Dropdown, Catfish.Core, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null' || fieldModel.ModelType == 'Catfish.Core.Models.Contents.Fields.FileAttachment, Catfish.Core, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null';
            }),
            $values: {
              //only need the object for radio/checkbox/dropdown's inner content
              $each: {
                text: {
                  required: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__["requiredIf"])(function (textModel) {
                    //this might not work with api update, hoping to store mc/radio/dropdown in different section from file attachment
                    return _typeof(textModel) == 'object';
                  })
                }
              }
            }
          },
          Name: {
            Values: {
              $values: {
                $each: {
                  Value: {
                    required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__["required"]
                  }
                }
              }
            }
          }
        }
      }
    },
    methods: {
      /**
      * Checks all the inputs to make sure the data is valid
      * @returns true is valid, false is invalid.
      **/
      checkValidity: function checkValidity(event) {
        event.preventDefault();

        if (this.$v.$invalid) {
          console.log("something is invalid", this.$v);
        } else {
          console.log("all good!");
          this.saveFieldForm(event);
        }
      },

      /**
      * Checks that the value matches its requirements from Vuelidate
      * (ie required, is a string, etc)
      * @param name the name of the v-model binded to.
      */
      validateState: function validateState(name) {
        var indexOrGuid = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var attribute = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

        if (indexOrGuid != null) {
          //this is a $each situation - array
          var _this$$v$name$attribu = this.$v[name][attribute].$values.$each[indexOrGuid].Value,
              $dirty = _this$$v$name$attribu.$dirty,
              $invalid = _this$$v$name$attribu.$invalid;
          return $dirty ? !$invalid : null;
        } else {
          var _this$$v$name = this.$v[name],
              _$dirty = _this$$v$name.$dirty,
              $error = _this$$v$name.$error;
          return _$dirty ? !$error : null;
        }
      },

      /**
       * TODO: work this one and above into a generic function
       * This one is for fields only, very hardcody bc it has so many embedded attributes
       * @param {any} fieldIndex
       * @param {any} name
       * @param {any} secondIndex
       */
      validateFieldState: function validateFieldState(fieldIndex, name) {
        var secondIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

        if (secondIndex == null) {
          var _this$$v$fields$$each = this.$v.fields.$each[fieldIndex][name],
              $dirty = _this$$v$fields$$each.$dirty,
              $invalid = _this$$v$fields$$each.$invalid;
          return $dirty ? !$invalid : null;
        } else {
          var _this$$v$fields$$each2 = this.$v.fields.$each[fieldIndex][name].Values.$values.$each[secondIndex].Value,
              _$dirty2 = _this$$v$fields$$each2.$dirty,
              _$invalid = _this$$v$fields$$each2.$invalid;
          return _$dirty2 ? !_$invalid : null;
        }
      },

      /**
      * Touches nested items from Vuex so validation works properly.
      */
      touchNestedItem: function touchNestedItem(name) {
        var indexOrGuid = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var attribute = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        var event = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

        if (indexOrGuid != null) {
          if (isNaN(indexOrGuid)) {
            this.$v[name][indexOrGuid][attribute].$touch();
          } else {
            this.$v[name][attribute].$values.$each[indexOrGuid].Value.$touch();
          }
        }
      },

      /**
       * Saves the field form
       * @param {any} event
       */
      saveFieldForm: function saveFieldForm(event) {
        //console.log("saving goes here", event);
        console.log("the name, description, and fields saved TBA", this.names, this.descriptions, this.fields);
      },

      /**
       * Changes the type of field via choice from the dropdown
       * @param {any} fieldIndex the fieldIndex being changed
       * @param {any} event the index value of the dropdown
       * TODO: use templates here, depending on if we are somehow storing the values without overwriting? idk
       */
      onDropdownChange: function onDropdownChange(fieldIndex, event) {
        console.log("fieldIndex", fieldIndex); //cant change $type directly... could work something with the templates?
        //dont want to lose any values that are not originally a part of the template tho...

        switch (event) {
          case 0:
            //textfield
            this.fields[fieldIndex].$type = 'Catfish.Core.Models.Contents.Fields.TextField, Catfish.Core';
            this.fields[fieldIndex].ModelType = 'Catfish.Core.Models.Contents.Fields.TextField, Catfish.Core, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null';
            break;

          case 1:
            //textarea
            this.fields[fieldIndex].$type = 'Catfish.Core.Models.Contents.Fields.TextArea, Catfish.Core';
            this.fields[fieldIndex].ModelType = 'Catfish.Core.Models.Contents.Fields.TextArea, Catfish.Core, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null';
            break;

          case 2:
            //radio/mc
            this.fields[fieldIndex].$type = 'Catfish.Core.Models.Contents.Fields.Radio, Catfish.Core';
            this.fields[fieldIndex].ModelType = 'Catfish.Core.Models.Contents.Fields.Radio, Catfish.Core, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null';
            break;

          case 3:
            //checkbox
            this.fields[fieldIndex].$type = 'Catfish.Core.Models.Contents.Fields.Checkbox, Catfish.Core';
            this.fields[fieldIndex].ModelType = 'Catfish.Core.Models.Contents.Fields.Checkbox, Catfish.Core, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null';
            break;

          case 4:
            //dropdown
            this.fields[fieldIndex].$type = 'Catfish.Core.Models.Contents.Fields.Dropdown, Catfish.Core';
            this.fields[fieldIndex].ModelType = 'Catfish.Core.Models.Contents.Fields.Dropdown, Catfish.Core, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null';
            break;

          case 5:
            //fileattachment
            this.fields[fieldIndex].$type = 'Catfish.Core.Models.Contents.Fields.FileAttachment, Catfish.Core';
            this.fields[fieldIndex].ModelType = 'Catfish.Core.Models.Contents.Fields.FileAttachment, Catfish.Core, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null';
            break;

          case 6:
            //displayfield
            this.fields[fieldIndex].$type = 'Catfish.Core.Models.Contents.Fields.DisplayField, Catfish.Core';
            this.fields[fieldIndex].ModelType = 'Catfish.Core.Models.Contents.Fields.DisplayField, Catfish.Core, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null';
            break;
        }
      },

      /*test(fieldId) { //detects the 'show' after transition is complete so this will never work...also only runs once unless computed. computed doesnt allow for parameter except if a setter
          if (document.getElementById('collapse-' + fieldId) == null) {
              return 'fas fa-chevron-right';
          } else if (document.getElementById('collapse-' + fieldId).classList.contains('show')) {
              console.log("item has show:", document.getElementById('collapse-' + fieldId).classList);
              return 'fas fa-chevron-right';
          } else {
              console.log("item does not have show:", document.getElementById('collapse-' + fieldId).classList);
              return 'fas fa-chevron-down';
          }
      },*/

      /**
       * Fire when any item sorted/moved (includes adding new item to list)
       * @param {any} event
       */
      sortItem: function sortItem(event) {
        var collapsingSections = document.getElementsByClassName('collapsing-items');
        console.log("event on sort:", event);
        var shownSectionIndex = null;
        var previousSection = null;
        var nextSection = null; //track sections above and below current open item

        for (var i = 0; i < collapsingSections.length; i++) {
          if (collapsingSections[i].classList.contains('show')) {
            shownSectionIndex = i;
            previousSection = i - 1 >= 0 ? collapsingSections[i - 1] : null;
            nextSection = i + 1 < collapsingSections.length ? collapsingSections[i + 1] : null;
          }
        } //if all items closed and not adding something new, just return


        if (shownSectionIndex == null && previousSection == null && nextSection == null && event.from.id == event.to.id) {
          return;
        } //the field id of the sorted section


        var tmpId = collapsingSections[event.newIndex].id.split('collapse-')[1]; //if item is new, open that one

        if (event.from.id != event.to.id) {
          console.log("added new item", collapsingSections[event.newIndex].id);
          $('#' + collapsingSections[event.newIndex].id).collapse('show');
          this.dropdowns[tmpId].isCollapsed = false;

          if (shownSectionIndex != null) {
            this.dropdowns[tmpId].isCollapsed = true;
          }

          return;
        } //if the user is dragging the showing item around


        if (shownSectionIndex == event.oldIndex) {
          console.log("dragging showing item");
          $('#' + collapsingSections[event.newIndex].id).collapse('show');
          this.dropdowns[tmpId].isCollapsed = false;

          if (shownSectionIndex != null) {
            this.dropdowns[tmpId].isCollapsed = true;
          }

          return;
        } //move show class to the index below open item


        if (event.oldIndex <= shownSectionIndex && shownSectionIndex <= event.newIndex) {
          //test suppressing animation - not sure if it will work, cant 
          //remove .collapsing bc it's not applied until the collapse call is made
          //previousSection.addClass('suppress-collapsing-animation');
          //$('#' + previousSection.id).css({ "transition": "none", "display": "none"}); doesnt work, must override
          console.log("moved item DOWN over shown");
          $('#' + previousSection.id).collapse('show');
          var prevId = previousSection.id.split('collapse-')[1];
          this.dropdowns[prevId].isCollapsed = false; //move item above open item
        } else if (event.oldIndex >= shownSectionIndex && shownSectionIndex >= event.newIndex) {
          console.log("moved item UP over shown");
          $('#' + nextSection.id).collapse('show');
          var nextId = nextSection.id.split('collapse-')[1];
          this.dropdowns[nextId].isCollapsed = false;
        } else {
          //just sorting, does not interfere with the open item
          return;
        }

        this.dropdowns[tmpId].isCollapsed = true;
      },

      /**
       * Returns a custom clone
       * @param event
       */
      cloneItem: function cloneItem(event) {
        var newItem = {}; //hardcoded until templates are provided

        newItem = JSON.parse(JSON.stringify(this.tmpTextfieldTemplate)); //event.Template

        newItem.id = Object(uuid__WEBPACK_IMPORTED_MODULE_2__["v1"])();
        this.$set(this.dropdowns, newItem.Id, {
          isCollapsed: false,
          showDescription: false,
          hasOtherOption: false
        }); //newItem.Guid = uuidv1();

        console.log(newItem);
        return newItem;
      },

      /**
       * Checks all options - ie user has checked 'Any' option in File Upload.
       * If all already checked, uncheck them all
       * @param {any} field
       */
      checkAllFileTypes: function checkAllFileTypes(field) {
        if (field.Values.$values.indexOf("any") > -1) {
          var index = field.Values.$values.indexOf("any");
          field.Values.$values.splice(index, 1);
        }

        if (field.Values.$values.length == this.fileTypes.length) {
          //uncheck all
          field.Values.$values = [];
        } else {
          //check all
          field.Values.$values = [];
          field.Values.$values = this.fileTypes;
        }
      },

      /**
       * Checks if the checkboxes are all checked and will check 'any',
       * or if 'any' is checked and the user unchecks a checkbox, uncheck 'any'
       * @param {any} field
       */
      checkCheckboxState: function checkCheckboxState(field, fieldIndex) {
        if (field.Values.$values.length == this.fileTypes.length) {
          //check the 'any' box
          document.getElementById("filetype-checkbox-" + fieldIndex + "-" + "any").checked = true;
        } else {
          //uncheck the 'any' box
          document.getElementById("filetype-checkbox-" + fieldIndex + "-" + "any").checked = false;
        }
      },

      /**
       * Toggles the field to either open or closed.
       * Icon for showing open/closed relies on open/closed state,
       * hence the necessity for this function.
       * 
       * @param {any} fieldId the field's index to open/close
       */
      toggleDropdown: function toggleDropdown(fieldId) {
        var lastDropdownIdOpened = '';

        for (var _i = 0, _Object$keys = Object.keys(this.dropdowns); _i < _Object$keys.length; _i++) {
          var dropdownId = _Object$keys[_i];

          if (this.dropdowns[dropdownId].isCollapsed == false) {
            lastDropdownIdOpened = dropdownId;
          }
        }

        if (fieldId != lastDropdownIdOpened && lastDropdownIdOpened != '') {
          //close dropdown that is not the same one previously opened
          this.dropdowns[lastDropdownIdOpened].isCollapsed = true;
        }

        this.dropdowns[fieldId].isCollapsed === true ? this.dropdowns[fieldId].isCollapsed = false : this.dropdowns[fieldId].isCollapsed = true;
      },

      /**
       * Adds new option to either multiple choice or checkbox
       * @param {any} field the field to push multiple choice or checkbox objects onto
       */
      addNewOption: function addNewOption(field) {
        //if theres a disabled other option, push into index before it
        //the disabled item will always be the last item
        if (field.Values.$values.length > 0) {
          if (field.Values.$values[field.Values.$values.length - 1].isDisabled) {
            field.Values.$values.splice(field.Values.$values.length - 1, 0, {
              text: '',
              isDisabled: false,
              id: -1
            });
            return;
          }
        }

        field.Values.$values.push({
          text: '',
          isDisabled: false,
          id: -1
        });
        /*switch (field.$type) {
            case 'Catfish.Core.Models.Contents.Fields.Radio, Catfish.Core':
                //hardcoded for now, use template provided item instead
                this.tmpRadioTemplate.values.push( {
                    text: '',
                    id: -1,
                } );
                break;
            case 'Catfish.Core.Models.Contents.Fields.Checkbox, Catfish.Core':
                //hardcoded for now, use template provided item instead
                this.tmpCheckboxTemplate.values.push({
                    text: '',
                    id: -1,
                });
                break;
        }*/
      },

      /**
       * Adds 'Other' option to set for user to fill
       * @param {any} field
       */
      addOtherOption: function addOtherOption(field) {
        field.Values.$values.push({
          text: 'Other...',
          isDisabled: true,
          id: -1
        });
        this.dropdowns[field.Id].hasOtherOption = true;
      },

      /**
       * Removes an option item
       * @param {any} fieldIndex
       * @param {any} optionIndex
       */
      removeOption: function removeOption(field, fieldIndex, itemValue, optionIndex) {
        if (itemValue.isDisabled) {
          this.dropdowns[field.Id].hasOtherOption = false;
        }

        this.fields[fieldIndex].Values.$values.splice(optionIndex, 1);
      },

      /**
       * Deletes a given field
       * @param {any} fieldIndex
       */
      deleteField: function deleteField(fieldIndex) {
        this.fields.splice(fieldIndex, 1);
        delete this.dropdowns[fieldIndex];
      },

      /**
       * Adds the description field to the field.
       * @param {any} fieldId
       */
      addDescription: function addDescription(fieldId) {
        this.dropdowns[fieldId].showDescription = true;
      },

      /**
       * Removes the description field from the field.
       * Not sure if this should delete the info in it, if any.
       * CURRENTLY it does not.
       * @param {any} fieldId
       */
      removeDescription: function removeDescription(fieldId) {
        this.dropdowns[fieldId].showDescription = false;
      },

      /**
        * Fetches and loads the data from an API call
        * */
      load: function load() {
        var _this = this;

        //var self = this;
        return new Promise(function (resolve, reject) {
          piranha.permissions.load(function () {
            fetch(piranha.baseUrl + _this.getFieldDefs).then(function (fdResponse) {
              return fdResponse.json();
            }).then(function (fieldDefsResult) {
              //templates handled here, remove any default data and store the structure
              console.log("second res", fieldDefsResult);

              for (var defaultFieldIndex in fieldDefsResult.$values) {
                switch (defaultFieldIndex) {
                  case '0':
                    _this.tmpTextfieldTemplate = fieldDefsResult.$values[defaultFieldIndex];
                    _this.tmpTextfieldTemplate.Selected = 0; //temp, remove when passed

                    for (var languageIndex in _this.tmpTextfieldTemplate.Name.Values.$values) {
                      _this.$set(_this.tmpTextfieldTemplate.Name.Values.$values[languageIndex], 'Value', '');
                    }

                    break;

                  case '1':
                    _this.tmpTextAreaTemplate = fieldDefsResult.$values[defaultFieldIndex];
                    _this.tmpTextAreaTemplate.Selected = 1; //temp, remove when passed

                    for (var _languageIndex in _this.tmpTextAreaTemplate.Name.Values.$values) {
                      _this.$set(_this.tmpTextAreaTemplate.Name.Values.$values[_languageIndex], 'Value', '');
                    } //look for where the dropdown item changes the template? bc it keeps data the same, maybe not a bad thing


                    break;
                  //the rest still need to be added from the backend
                }
              } //temp set other values that i dont have sample data for
              //guessing for what will be needed, adjust when dummy data given
              //this.tmpTextAreaTemplate = JSON.parse(JSON.stringify(this.tmpTextfieldTemplate));
              //this.tmpTextAreaTemplate.$type = 'Catfish.Core.Models.Contents.Fields.TextArea, Catfish.Core';


              _this.tmpRadioTemplate = JSON.parse(JSON.stringify(_this.tmpTextfieldTemplate));
              _this.tmpRadioTemplate.$type = 'Catfish.Core.Models.Contents.Fields.Radio, Catfish.Core'; //not sure if this would be right, will likely need to adjust this

              _this.tmpRadioTemplate.Values.$values = [];
              _this.tmpCheckboxTemplate = JSON.parse(JSON.stringify(_this.tmpTextfieldTemplate));
              _this.tmpCheckboxTemplate.$type = 'Catfish.Core.Models.Contents.Fields.Checkbox, Catfish.Core'; //not sure if this would be right, will likely need to adjust this

              _this.tmpCheckboxTemplate.Values.$values = [];
              _this.tmpDropdownTemplate = JSON.parse(JSON.stringify(_this.tmpTextfieldTemplate));
              _this.tmpDropdownTemplate.$type = 'Catfish.Core.Models.Contents.Fields.Dropdown, Catfish.Core'; //not sure if this would be right, will likely need to adjust this

              _this.tmpDropdownTemplate.Values.$values = [];
              _this.tmpFileAttachmentTemplate = JSON.parse(JSON.stringify(_this.tmpTextfieldTemplate));
              _this.tmpFileAttachmentTemplate.$type = 'Catfish.Core.Models.Contents.Fields.FileAttachment, Catfish.Core';
              _this.tmpFileAttachmentTemplate.Values.$values = [];
              _this.tmpDisplayFieldTemplate = JSON.parse(JSON.stringify(_this.tmpTextfieldTemplate));
              _this.tmpDisplayFieldTemplate.$type = 'Catfish.Core.Models.Contents.Fields.DisplayField, Catfish.Core';
              _this.tmpDisplayFieldTemplate.Values.$values = "";
            }).then(function () {
              return fetch(piranha.baseUrl + _this.getString + _this.itemId);
            }).then(function (response) {
              return response.json();
            }).then(function (result) {
              //data for this form handled here
              _this.names = result.Name;
              _this.descriptions = result.Description;
              _this.fields = result.Fields.$values;
              _this.fields_type = result.Fields.$type;
              _this.id = result.Id;
              _this.modelType = result.ModelType;
              _this.finishedGET = true; //this.collections = result.collections;
              //this.updateBindings = true;

              console.log(result);

              var _iterator = _createForOfIteratorHelper(_this.fields),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var field = _step.value;

                  _this.$set(_this.dropdowns, field.Id, {
                    isCollapsed: true,
                    showDescription: false,
                    hasOtherOption: false
                  });
                } //temporary until templates sent, remove afterwards
                //Selected needs to be sent still as an attribute

              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }

              var _iterator2 = _createForOfIteratorHelper(result.Fields.$values),
                  _step2;

              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var _field = _step2.value;

                  switch (_field.$type) {
                    case 'Catfish.Core.Models.Contents.Fields.TextField, Catfish.Core':
                      _field.Selected = 0;
                      break;

                    case 'Catfish.Core.Models.Contents.Fields.TextArea, Catfish.Core':
                      _field.Selected = 1;
                      break;

                    case 'Catfish.Core.Models.Contents.Fields.Radio, Catfish.Core':
                      _field.Selected = 2;
                      break;

                    case 'Catfish.Core.Models.Contents.Fields.Checkbox, Catfish.Core':
                      _field.Selected = 3;
                      break;

                    case 'Catfish.Core.Models.Contents.Fields.Dropdown, Catfish.Core':
                      _field.Selected = 4;
                      break;

                    case 'Catfish.Core.Models.Contents.Fields.FileAttachment, Catfish.Core':
                      _field.Selected = 5;
                      break;

                    case 'Catfish.Core.Models.Contents.Fields.DisplayText, Catfish.Core':
                      _field.Selected = 6;
                      break;
                  }
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }

              resolve();
            })["catch"](function (error) {
              console.log("error:", error);
            });
          });
        });
      }
    },
    created: function created() {
      this.itemId = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
      this.load().then(function () {
        //for popovers
        $(document).ready(function () {
          $('[data-toggle="popover"]').popover();
        }); //for the accordion, if one panel is triggered to open, close any others

        $('#accordion').on('show.bs.collapse', function () {
          console.log("called to hide");
          var test = $('#accordion .show').length;
          console.log(test);
          $('#accordion .show').collapse('hide');
        });
      });
    }
  });
}

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map