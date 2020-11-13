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
/******/ 		"editFieldFormBundle": 0
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
/******/ 	deferredModules.push(["./wwwroot/assets/js/catfish.editFieldForm.js","vendorsManagerSide"]);
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
/* harmony import */ var _static_string_values_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../static/string-values.json */ "./wwwroot/assets/static/string-values.json");
var _static_string_values_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../static/string-values.json */ "./wwwroot/assets/static/string-values.json", 1);
/* harmony import */ var vue_quill_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-quill-editor */ "./node_modules/vue-quill-editor/dist/vue-quill-editor.js");
/* harmony import */ var vue_quill_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_quill_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vuelidate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuelidate */ "./node_modules/vuelidate/lib/index.js");
/* harmony import */ var vuelidate__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vuelidate__WEBPACK_IMPORTED_MODULE_5__);
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

 //import 'quill/dist/quill.core.css'
//import 'quill/dist/quill.snow.css'
//import 'quill/dist/quill.bubble.css'






Vue.use(vuelidate__WEBPACK_IMPORTED_MODULE_5___default.a);
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
      quillEditor: vue_quill_editor__WEBPACK_IMPORTED_MODULE_2__["quillEditor"]
    },
    data: function data() {
      return {
        itemId: null,
        finishedGET: false,
        attemptedSave: false,
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
        //missing file attachment?
        TEXTFIELD_TYPE: "Catfish.Core.Models.Contents.Fields.TextField, Catfish.Core",
        TEXTAREA_TYPE: "Catfish.Core.Models.Contents.Fields.TextArea, Catfish.Core",
        CHECKBOX_TYPE: "Catfish.Core.Models.Contents.Fields.CheckboxField, Catfish.Core",
        RADIO_TYPE: "Catfish.Core.Models.Contents.Fields.RadioField, Catfish.Core",
        DROPDOWN_TYPE: "Catfish.Core.Models.Contents.Fields.SelectField, Catfish.Core",
        INFOSECTION_TYPE: "Catfish.Core.Models.Contents.Fields.InfoSection, Catfish.Core",
        DATE_TYPE: "Catfish.Core.Models.Contents.Fields.DateField, Catfish.Core",
        DECIMAL_TYPE: "Catfish.Core.Models.Contents.Fields.DecimalField, Catfish.Core",
        INTEGER_TYPE: "Catfish.Core.Models.Contents.Fields.IntegerField, Catfish.Core",
        MONOLINGUAL_TEXTFIELD_TYPE: "Catfish.Core.Models.Contents.Fields.MonolingualTextField, Catfish.Core",
        //templates
        textfieldTemplate: null,
        textAreaTemplate: null,
        radioTemplate: null,
        checkboxTemplate: null,
        dropdownTemplate: null,
        fileAttachmentTemplate: null,
        displayFieldTemplate: null,
        datePickerTemplate: null,
        numberPickerTemplate: null,
        monolingualTextFieldTemplate: null,
        optionItemTemplate: null,
        dropdowns: {},
        //temp, need to call an api for these
        fieldTypes: [{
          DisplayLabel: 'Select One',
          $type: null
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
        saveStatus: 0,
        //Constants TODO change above items into constants from static file
        saveSuccessfulLabel: null,
        saveFailedLabel: null,
        saveFieldFormButtonLabel: null,
        formTitleLabel: null,
        formTitlePlaceholder: null,
        formDescriptionLabel: null,
        formDescriptionPlaceholder: null,
        formFieldLabel: null,
        defaultFieldTitle: null,
        fieldTitlePlaceholder: null,
        fieldDescriptionLabel: null,
        fieldDescriptionPlaceholder: null,
        settingsLabel: null,
        longAnswerFormatTextLabel: null,
        choiceOptionLabel: null,
        choiceDefaultOptionLabel: null,
        choiceAdditionalInputLabel: null,
        anyLabel: null,
        allowMultipleFilesLabel: null,
        wholeNumbersOnlyLabel: null,
        requiredLabel: null,
        addDescriptionLabel: null,
        removeDescriptionLabel: null,
        loadingLabel: null
      };
    },
    validations: function validations() {
      var _this = this;

      var validationJson = {
        names: {
          required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__["required"],
          Values: {
            $values: {
              $each: {
                Value: {
                  required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__["required"]
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
            Name: {
              Values: {
                $values: {
                  $each: {
                    Value: {
                      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__["required"]
                    }
                  }
                }
              }
            },
            Options: {
              $values: {
                $each: {
                  OptionText: {
                    Values: {
                      $values: {
                        $each: {
                          Value: {
                            required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__["required"]
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            //for info section - $values is an array of characters
            Content: {
              Values: {
                $values: {
                  required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__["required"]
                }
              }
            }
          }
        }
      };
      this.fields.forEach(function (field) {
        if (field.$type == _this.RADIO_TYPE || field.$type == _this.CHECKBOX_TYPE || field.$type == _this.DROPDOWN_TYPE || field.$type == 'Catfish.Core.Models.Contents.Fields.FileAttachment, Catfish.Core, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null') {
          console.log("ran this");
          validationJson.fields.$each['Values'] = {
            required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__["required"]
          };
          validationJson.fields.$each.Values['$values'] = {};
          validationJson.fields.$each.Values['$values']['$each'] = {};
          validationJson.fields.$each.Values['$values']['$each']['Value'] = {
            required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__["required"]
          };
          return validationJson;
        }
      });
      validationJson.fields.$each['Values'] = {};
      return validationJson;
    },
    methods: {
      /**
      * Checks all the inputs to make sure the data is valid
      * @returns true is valid, false is invalid.
      **/
      checkValidity: function checkValidity(event) {
        event.preventDefault();
        this.attemptedSave = true;

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
       * 
       * @param {any} fieldIndex
       */
      onNumberCheckboxChange: function onNumberCheckboxChange(event, fieldIndex) {
        console.log("e", event); //this.fields[fieldIndex].$type
      },

      /**
       * Saves the field form
       * @param {any} event
       */
      saveFieldForm: function saveFieldForm(event) {
        var _this2 = this;

        //console.log("saving goes here", event);
        //handle integer/decimal field if any - integer and decimal are separate classes in backend
        var fieldTypesToCheck = this.fields.map(function (field) {
          return field.$type;
        });
        fieldTypesToCheck.forEach(function (fieldType, index) {
          if (fieldType == _this2.DECIMAL_TYPE && _this2.fields[index].isIntegerOnly) {
            _this2.fields[index].$type = _this2.INTEGER_TYPE;
          } else if (fieldType == _this2.INTEGER_TYPE && !_this2.fields[index].isIntegerOnly) {
            _this2.fields[index].$type = _this2.DECIMAL_TYPE;
          }
        });
        console.log("the name, description, and fields saved TBA", this.names, this.descriptions, this.fields);
        this.attemptedSave = false;
      },

      /**
       * Changes the type of field via choice from the dropdown
       * @param {any} fieldIndex the fieldIndex being changed
       * @param {any} chosenFieldType the chosen field type of the dropdown
       */
      onDropdownChange: function onDropdownChange(fieldIndex, chosenFieldType) {
        //dont want to lose any values that are not originally a part of the template tho...
        var tmpId = this.fields[fieldIndex].Id;

        switch (chosenFieldType) {
          case this.TEXTFIELD_TYPE:
            //textfield
            this.$set(this.fields, fieldIndex, JSON.parse(JSON.stringify(this.textfieldTemplate)));
            this.fields[fieldIndex].Id = tmpId;
            break;

          case this.TEXTAREA_TYPE:
            //textarea
            this.$set(this.fields, fieldIndex, JSON.parse(JSON.stringify(this.textAreaTemplate)));
            this.fields[fieldIndex].Id = tmpId;
            break;

          case this.RADIO_TYPE:
            //radio/mc
            this.$set(this.fields, fieldIndex, JSON.parse(JSON.stringify(this.radioTemplate)));
            this.fields[fieldIndex].Id = tmpId;
            break;

          case this.CHECKBOX_TYPE:
            //checkbox
            this.$set(this.fields, fieldIndex, JSON.parse(JSON.stringify(this.checkboxTemplate)));
            this.fields[fieldIndex].Id = tmpId;
            break;

          case this.DROPDOWN_TYPE:
            //dropdown
            this.$set(this.fields, fieldIndex, JSON.parse(JSON.stringify(this.dropdownTemplate)));
            this.fields[fieldIndex].Id = tmpId;
            break;

          case "Catfish.Core.Models.Contents.Fields.FileAttachment, Catfish.Core":
            //fileattachment
            this.fields[fieldIndex].$type = 'Catfish.Core.Models.Contents.Fields.FileAttachment, Catfish.Core';
            break;

          case this.INFOSECTION_TYPE:
            //displayfield
            this.$set(this.fields, fieldIndex, JSON.parse(JSON.stringify(this.displayFieldTemplate)));
            this.fields[fieldIndex].Id = tmpId;
            break;

          case this.DATE_TYPE:
            //displayfield
            this.$set(this.fields, fieldIndex, JSON.parse(JSON.stringify(this.datePickerTemplate)));
            this.fields[fieldIndex].Id = tmpId;
            break;

          case this.DECIMAL_TYPE:
          case this.INTEGER_TYPE:
            //displayfield
            this.$set(this.fields, fieldIndex, JSON.parse(JSON.stringify(this.numberPickerTemplate)));
            this.fields[fieldIndex].Id = tmpId;
            break;

          case this.MONOLINGUAL_TEXTFIELD_TYPE:
            //displayfield
            this.$set(this.fields, fieldIndex, JSON.parse(JSON.stringify(this.monolingualTextFieldTemplate)));
            this.fields[fieldIndex].Id = tmpId;
            break;
        }
      },

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

        newItem = JSON.parse(JSON.stringify(this.textfieldTemplate)); //event.Template

        newItem.Id = Object(uuid__WEBPACK_IMPORTED_MODULE_3__["v1"])();
        this.$set(this.dropdowns, newItem.Id, {
          isCollapsed: false,
          showDescription: false,
          hasOtherOption: false
        });
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
        var newOptionItemTemplate = JSON.parse(JSON.stringify(this.optionItemTemplate));
        newOptionItemTemplate.Id = Object(uuid__WEBPACK_IMPORTED_MODULE_3__["v1"])();
        newOptionItemTemplate.OptionText.Id = Object(uuid__WEBPACK_IMPORTED_MODULE_3__["v1"])();

        var _iterator = _createForOfIteratorHelper(newOptionItemTemplate.OptionText.Values.$values),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var languageOptionItem = _step.value;
            languageOptionItem.Id = Object(uuid__WEBPACK_IMPORTED_MODULE_3__["v1"])();
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        field.Options.$values.push(newOptionItemTemplate);
        console.log("field options", field.Options.$values);
      },

      /**
       * 
       * @param {any} fieldIndex
       * @param {any} optionIndex
       */
      selectOptionAsDefault: function selectOptionAsDefault(fieldIndex, optionIndex) {
        //if selected already, deselect it
        if (this.fields[fieldIndex].Options.$values[optionIndex].Selected === null || !this.fields[fieldIndex].Options.$values[optionIndex].Selected) {
          this.fields[fieldIndex].Options.$values[optionIndex].Selected = true;
        } else {
          this.fields[fieldIndex].Options.$values[optionIndex].Selected = false;
        } //desselect any others in the group


        var _iterator2 = _createForOfIteratorHelper(this.fields[fieldIndex].Options.$values),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var optionItem = _step2.value;

            if (optionItem.Id == this.fields[fieldIndex].Options.$values[optionIndex].Id) {
              continue;
            }

            optionItem.Selected = false;
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }

        console.log(this.fields[fieldIndex].Options.$values);
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
      removeOption: function removeOption(fieldIndex, optionIndex) {
        this.fields[fieldIndex].Options.$values.splice(optionIndex, 1);
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
       * Sets the static strings on the page 
       **/
      setStaticValues: function setStaticValues() {
        this.saveSuccessfulLabel = _static_string_values_json__WEBPACK_IMPORTED_MODULE_1__.managerSideValues.editFieldFormLabels.SAVE_SUCCESS_LABEL;
        this.saveFailedLabel = _static_string_values_json__WEBPACK_IMPORTED_MODULE_1__.managerSideValues.editFieldFormLabels.SAVE_FAILED_LABEL;
        this.saveFieldFormButtonLabel = _static_string_values_json__WEBPACK_IMPORTED_MODULE_1__.managerSideValues.editFieldFormLabels.SAVE_FIELD_FORM_BUTTON_LABEL;
        this.formTitleLabel = _static_string_values_json__WEBPACK_IMPORTED_MODULE_1__.managerSideValues.editFieldFormLabels.FORM_TITLE_LABEL;
        this.formTitlePlaceholder = _static_string_values_json__WEBPACK_IMPORTED_MODULE_1__.managerSideValues.editFieldFormLabels.FORM_TITLE_PLACEHOLDER;
        this.formDescriptionLabel = _static_string_values_json__WEBPACK_IMPORTED_MODULE_1__.managerSideValues.editFieldFormLabels.FORM_DESCRIPTION_LABEL;
        this.formDescriptionPlaceholder = _static_string_values_json__WEBPACK_IMPORTED_MODULE_1__.managerSideValues.editFieldFormLabels.FORM_DESCRIPTION_PLACEHOLDER;
        this.formFieldLabel = _static_string_values_json__WEBPACK_IMPORTED_MODULE_1__.managerSideValues.editFieldFormLabels.FORM_FIELD_LABEL;
        this.defaultFieldTitle = _static_string_values_json__WEBPACK_IMPORTED_MODULE_1__.managerSideValues.editFieldFormLabels.DEFAULT_FIELD_TITLE;
        this.fieldTitlePlaceholder = _static_string_values_json__WEBPACK_IMPORTED_MODULE_1__.managerSideValues.editFieldFormLabels.FIELD_TITLE_PLACEHOLDER;
        this.fieldDescriptionLabel = _static_string_values_json__WEBPACK_IMPORTED_MODULE_1__.managerSideValues.editFieldFormLabels.FIELD_DESCRIPTION_LABEL;
        this.fieldDescriptionPlaceholder = _static_string_values_json__WEBPACK_IMPORTED_MODULE_1__.managerSideValues.editFieldFormLabels.FIELD_DESCRIPTION_PLACEHOLDER;
        this.settingsLabel = _static_string_values_json__WEBPACK_IMPORTED_MODULE_1__.managerSideValues.editFieldFormLabels.SETTINGS_LABEL;
        this.longAnswerFormatTextLabel = _static_string_values_json__WEBPACK_IMPORTED_MODULE_1__.managerSideValues.editFieldFormLabels.LONG_ANSWER_FORMAT_TEXT_LABEL;
        this.choiceOptionLabel = _static_string_values_json__WEBPACK_IMPORTED_MODULE_1__.managerSideValues.editFieldFormLabels.CHOICE_OPTION_LABEL;
        this.choiceDefaultOptionLabel = _static_string_values_json__WEBPACK_IMPORTED_MODULE_1__.managerSideValues.editFieldFormLabels.CHOICE_DEFAULT_OPTION_LABEL;
        this.choiceAdditionalInputLabel = _static_string_values_json__WEBPACK_IMPORTED_MODULE_1__.managerSideValues.editFieldFormLabels.CHOICE_ADDITIONAL_INPUT_LABEL;
        this.anyLabel = _static_string_values_json__WEBPACK_IMPORTED_MODULE_1__.managerSideValues.editFieldFormLabels.ANY_LABEL;
        this.allowMultipleFilesLabel = _static_string_values_json__WEBPACK_IMPORTED_MODULE_1__.managerSideValues.editFieldFormLabels.ALLOW_MULTIPLE_FILES_LABEL;
        this.wholeNumbersOnlyLabel = _static_string_values_json__WEBPACK_IMPORTED_MODULE_1__.managerSideValues.editFieldFormLabels.WHOLE_NUMBERS_ONLY_LABEL;
        this.requiredLabel = _static_string_values_json__WEBPACK_IMPORTED_MODULE_1__.managerSideValues.editFieldFormLabels.REQUIRED_LABEL;
        this.addDescriptionLabel = _static_string_values_json__WEBPACK_IMPORTED_MODULE_1__.managerSideValues.editFieldFormLabels.ADD_DESCRIPTION_LABEL;
        this.removeDescriptionLabel = _static_string_values_json__WEBPACK_IMPORTED_MODULE_1__.managerSideValues.editFieldFormLabels.REMOVE_DESCRIPTION_LABEL;
        this.loadingLabel = _static_string_values_json__WEBPACK_IMPORTED_MODULE_1__.managerSideValues.editFieldFormLabels.LOADING_LABEL;
      },

      /**
        * Fetches and loads the data from an API call
        * */
      load: function load() {
        var _this3 = this;

        //var self = this;
        return new Promise(function (resolve, reject) {
          piranha.permissions.load(function () {
            fetch(piranha.baseUrl + _this3.getFieldDefs).then(function (fdResponse) {
              return fdResponse.json();
            }).then(function (fieldDefsResult) {
              console.log("second res", fieldDefsResult);

              var _iterator3 = _createForOfIteratorHelper(fieldDefsResult.$values),
                  _step3;

              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                  var defaultField = _step3.value;

                  //store fieldType for dropdown
                  if (defaultField.$type != _this3.INTEGER_TYPE) {
                    _this3.fieldTypes.push({
                      $type: defaultField.$type,
                      DisplayLabel: defaultField.DisplayLabel
                    });
                  } //templates handled here, remove any default data and store the structure


                  switch (defaultField.$type) {
                    case _this3.TEXTFIELD_TYPE:
                      _this3.textfieldTemplate = defaultField;

                      for (var languageIndex in _this3.textfieldTemplate.Name.Values.$values) {
                        _this3.$set(_this3.textfieldTemplate.Name.Values.$values[languageIndex], 'Value', '');

                        _this3.$set(_this3.textfieldTemplate.Description.Values.$values[languageIndex], 'Value', '');
                      }

                      break;

                    case _this3.TEXTAREA_TYPE:
                      _this3.textAreaTemplate = defaultField;

                      for (var _languageIndex in _this3.textAreaTemplate.Name.Values.$values) {
                        _this3.$set(_this3.textAreaTemplate.Name.Values.$values[_languageIndex], 'Value', '');

                        _this3.$set(_this3.textAreaTemplate.Description.Values.$values[_languageIndex], 'Value', '');
                      }

                      break;

                    case _this3.RADIO_TYPE:
                      _this3.radioTemplate = defaultField; //stores an option item to be used by all option-item fields (radio/checkbox/dropdown)

                      _this3.optionItemTemplate = JSON.parse(JSON.stringify(defaultField.Options.$values[0])); //if more than one option, remove the other options

                      if (defaultField.Options.$values.length > 1) {
                        //delete all other options except for first one
                        _this3.radioTemplate.Options.$values.splice(1, defaultField.Options.$values.length - 1);
                      }

                      for (var _languageIndex2 in _this3.radioTemplate.Name.Values.$values) {
                        _this3.$set(_this3.radioTemplate.Name.Values.$values[_languageIndex2], 'Value', '');

                        _this3.$set(_this3.radioTemplate.Description.Values.$values[_languageIndex2], 'Value', '');

                        _this3.$set(_this3.radioTemplate.Options.$values[0].OptionText.Values.$values[_languageIndex2], 'Value', '');

                        _this3.$set(_this3.optionItemTemplate.OptionText.Values.$values[_languageIndex2], 'Value', '');
                      }

                      break;

                    case _this3.CHECKBOX_TYPE:
                      _this3.checkboxTemplate = defaultField; //if more than one option, remove the other options

                      if (defaultField.Options.$values.length > 1) {
                        //delete all other options except for first one
                        _this3.checkboxTemplate.Options.$values.splice(1, defaultField.Options.$values.length - 1);
                      }

                      for (var _languageIndex3 in _this3.checkboxTemplate.Name.Values.$values) {
                        _this3.$set(_this3.checkboxTemplate.Name.Values.$values[_languageIndex3], 'Value', '');

                        _this3.$set(_this3.checkboxTemplate.Description.Values.$values[_languageIndex3], 'Value', '');

                        _this3.$set(_this3.checkboxTemplate.Options.$values[0].OptionText.Values.$values[_languageIndex3], 'Value', '');
                      }

                      break;

                    case _this3.DROPDOWN_TYPE:
                      _this3.dropdownTemplate = defaultField; //if more than one option, remove the other options

                      if (defaultField.Options.$values.length > 1) {
                        //delete all other options except for first one
                        _this3.dropdownTemplate.Options.$values.splice(1, defaultField.Options.$values.length - 1);
                      }

                      for (var _languageIndex4 in _this3.dropdownTemplate.Name.Values.$values) {
                        _this3.$set(_this3.dropdownTemplate.Name.Values.$values[_languageIndex4], 'Value', '');

                        _this3.$set(_this3.dropdownTemplate.Description.Values.$values[_languageIndex4], 'Value', '');

                        _this3.$set(_this3.dropdownTemplate.Options.$values[0].OptionText.Values.$values[_languageIndex4], 'Value', '');
                      }

                      break;

                    case _this3.INFOSECTION_TYPE:
                      _this3.displayFieldTemplate = defaultField; //temporary line to prevent an error. 
                      //QuillEditor expects $values to be type string, but it comes in as an array

                      _this3.displayFieldTemplate.Content.Values.$values = '';

                      for (var _languageIndex5 in _this3.displayFieldTemplate.Name.Values.$values) {
                        _this3.$set(_this3.displayFieldTemplate.Name.Values.$values[_languageIndex5], 'Value', '');

                        _this3.$set(_this3.displayFieldTemplate.Description.Values.$values[_languageIndex5], 'Value', '');
                      }

                      break;

                    case _this3.DATE_TYPE:
                      _this3.datePickerTemplate = defaultField;

                      for (var _languageIndex6 in _this3.datePickerTemplate.Name.Values.$values) {
                        _this3.$set(_this3.datePickerTemplate.Name.Values.$values[_languageIndex6], 'Value', '');

                        _this3.$set(_this3.datePickerTemplate.Description.Values.$values[_languageIndex6], 'Value', '');
                      }

                      break;

                    case _this3.DECIMAL_TYPE:
                      _this3.numberPickerTemplate = defaultField;
                      _this3.numberPickerTemplate.isIntegerOnly = false;

                      for (var _languageIndex7 in _this3.numberPickerTemplate.Name.Values.$values) {
                        _this3.$set(_this3.numberPickerTemplate.Name.Values.$values[_languageIndex7], 'Value', '');

                        _this3.$set(_this3.numberPickerTemplate.Description.Values.$values[_languageIndex7], 'Value', '');
                      }

                      break;

                    case _this3.MONOLINGUAL_TEXTFIELD_TYPE:
                      _this3.monolingualTextFieldTemplate = defaultField;

                      for (var _languageIndex8 in _this3.monolingualTextFieldTemplate.Name.Values.$values) {
                        _this3.$set(_this3.monolingualTextFieldTemplate.Name.Values.$values[_languageIndex8], 'Value', '');

                        _this3.$set(_this3.monolingualTextFieldTemplate.Description.Values.$values[_languageIndex8], 'Value', '');
                      }

                      break;
                    //fileattachment need to be added from the backend
                  }
                } //TODO handle this area now that all data is being sent with api
                //temp set other values that i dont have sample data for
                //guessing for what will be needed, adjust when dummy data given
                //this.textAreaTemplate = JSON.parse(JSON.stringify(this.textfieldTemplate));
                //this.textAreaTemplate.$type = 'Catfish.Core.Models.Contents.Fields.TextArea, Catfish.Core';
                //this.radioTemplate = JSON.parse(JSON.stringify(this.textfieldTemplate));
                //this.radioTemplate.$type = 'Catfish.Core.Models.Contents.Fields.Radio, Catfish.Core';
                //not sure if this would be right, will likely need to adjust this
                //this.radioTemplate.Values.$values = [];
                //this.checkboxTemplate = JSON.parse(JSON.stringify(this.textfieldTemplate));
                //this.checkboxTemplate.$type = 'Catfish.Core.Models.Contents.Fields.Checkbox, Catfish.Core';
                //not sure if this would be right, will likely need to adjust this
                //this.checkboxTemplate.Values.$values = [];
                //this.dropdownTemplate = JSON.parse(JSON.stringify(this.textfieldTemplate));
                //this.dropdownTemplate.$type = 'Catfish.Core.Models.Contents.Fields.Dropdown, Catfish.Core';
                //not sure if this would be right, will likely need to adjust this
                //this.dropdownTemplate.Values.$values = [];

              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }

              _this3.fileAttachmentTemplate = JSON.parse(JSON.stringify(_this3.textfieldTemplate));
              _this3.fileAttachmentTemplate.$type = 'Catfish.Core.Models.Contents.Fields.FileAttachment, Catfish.Core';
              _this3.fileAttachmentTemplate.Values.$values = []; //this.displayFieldTemplate = JSON.parse(JSON.stringify(this.textfieldTemplate));
              //this.displayFieldTemplate.$type = 'Catfish.Core.Models.Contents.Fields.DisplayField, Catfish.Core';
              //this.displayFieldTemplate.Values.$values = "";
            }).then(function () {
              //this.finishedGET = true; test for empty return, remove later (or dont)
              return fetch(piranha.baseUrl + _this3.getString + _this3.itemId);
            }).then(function (response) {
              return response.json();
            }).then(function (result) {
              //data for this form handled here
              _this3.names = result.Name;
              _this3.descriptions = result.Description;
              _this3.fields = result.Fields.$values;
              _this3.fields_type = result.Fields.$type;
              _this3.id = result.Id;
              _this3.modelType = result.ModelType;
              _this3.finishedGET = true; //this.collections = result.collections;
              //this.updateBindings = true;

              console.log(result);

              var _iterator4 = _createForOfIteratorHelper(_this3.fields),
                  _step4;

              try {
                for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                  var field = _step4.value;

                  _this3.$set(_this3.dropdowns, field.Id, {
                    isCollapsed: true,
                    showDescription: false,
                    hasOtherOption: false
                  });
                }
              } catch (err) {
                _iterator4.e(err);
              } finally {
                _iterator4.f();
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
      this.setStaticValues();
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
//# sourceMappingURL=editFieldFormBundle.js.map