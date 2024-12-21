/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/inbox.svg */ \"./src/assets/inbox.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/today.svg */ \"./src/assets/today.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/week.svg */ \"./src/assets/week.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* Set global coloring */\n:root {\n  /* New elegant color scheme */\n  --primary-color: #0d9488; /* Dark teal */\n  --secondary-color: #b49105; /* Gold */\n  --background-color: #f2f2f2; /* Light gray */\n  --text-color: #333333; /* Dark gray */\n  --accent-color: #d4af37; /* Lighter gold */\n  --header-footer-color: #059669;\n  /* Existing variables */\n  --form-background: #f8f9fa;\n  --project-tile-margin: 10px; /* New variable for spacing */\n  --tile-border-radius: 8px; /* Added variable for border radius */\n  --tile-padding: 15px; /* Added variable for padding */\n  --tile-margin-bottom: 15px; /* Added variable for margin bottom */\n}\n\n/* Reset defaults */\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n/* General Styles */\nbody {\n  font-family: \"Roboto\", sans-serif;\n  height: 100vh;\n  background-color: var(--background-color); /* Updated */\n  display: grid;\n  grid-template-columns: auto 1fr;\n  grid-template-rows: auto 1fr auto;\n}\n\n/* Header */\nheader {\n  background-color: var(--header-footer-color);\n  color: var(--background-color);\n  padding: 20px;\n  text-align: center;\n  grid-column: 1/-1;\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n}\n\nheader h1 {\n  font-size: 30px;\n}\n\n/* Sidebar */\n.sidebar {\n  background-color: var(--primary-color); /* Updated */\n  color: var(--background-color); /* Updated */\n  grid-area: 2/1/3/2;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n/* Menu List */\n.menu-list {\n  list-style-type: none;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.menu-item {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px;\n  background-color: var(--background-color); /* Updated */\n  color: var(--text-color); /* Updated */\n  border-radius: 8px;\n  cursor: pointer;\n  transition: background-color 0.3s ease, transform 0.2s ease;\n}\n\n/* .menu-item img {\n  width: 24px;\n  height: 24px;\n  margin-right: 8px; \n} */\n\n.menu-item span {\n  font-size: 14px;\n  font-weight: 600;\n}\n\n/* Hover Effect */\n.menu-item:hover {\n  background-color: var(--secondary-color); /* Updated */\n  color: var(--background-color); /* Updated */\n  transform: scale(1.05);\n}\n\n.menu-item:active {\n  background-color: var(--accent-color); /* Updated */\n}\n\n/* Content Container */\n.content-container {\n  grid-area: 2/2/3/-1;\n  background-color: var(--background-color); /* Updated */\n  border-radius: 8px;\n  margin: var(--project-tile-margin);\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  padding: 2em 10em;\n}\n\n.content-container h2 {\n  font-size: 24px;\n  margin-bottom: 10px;\n}\n\n.content-container p {\n  font-size: 16px;\n  line-height: 1.5;\n  margin-bottom: 10px;\n}\n\n/* Projects Section */\n.projects-section {\n  margin-top: 20px;\n  margin-bottom: var(--project-tile-margin); /* Add margin */\n  /* padding: 10px; */\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.projects-section h2 {\n  font-size: 18px;\n  margin-bottom: 10px;\n}\n\n.projects-list {\n  padding: 0;\n  list-style: none;\n  margin-bottom: var(--project-tile-margin); /* Add margin */\n}\n\n.project-tile {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px;\n  background-color: var(--background-color); /* Updated */\n  color: var(--text-color);\n  border-radius: 8px;\n  margin-bottom: var(--project-tile-margin); /* Add margin */\n  cursor: pointer;\n  transition: background-color 0.3s ease, transform 0.2s ease;\n  max-width: 150px;\n}\n\n.project-tile:hover {\n  background-color: var(--secondary-color); /* Updated */\n  color: var(--background-color); /* Updated */\n  transform: scale(1.05);\n}\n\n.project-tile img {\n  width: 24px;\n  height: 24px;\n}\n\n.project-tile p {\n  font-size: 16px;\n  font-weight: 600;\n}\n\n/* Forms */\n.todo-form,\n.project-form {\n  background-color: var(--form-background);\n  padding: 20px;\n  margin: 10px;\n  border-radius: 8px;\n  margin-bottom: 10px;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\n}\n\n.todo-form h3,\n.project-form h3 {\n  margin-bottom: 10px;\n  color: var(--text-color);\n}\n\ninput[type=\"text\"],\ninput[type=\"date\"] {\n  width: 100%;\n  padding: 10px;\n  margin-bottom: 10px;\n  border: 1px solid var(--text-color); /* Updated */\n  border-radius: 4px;\n  box-sizing: border-box;\n}\n\nbutton {\n  border: none;\n  color: var(--background-color); /* Updated */\n  background-color: var(--primary-color); /* Updated */\n  border-radius: 15px;\n  padding: 10px 20px;\n  font-size: 16px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background-color 0.3s ease, transform 0.2s ease;\n}\n\n.add-project-button {\n  color: var(--background-color);\n  max-width: 150px;\n}\n.add-task-button {\n  background-color: var(--primary-color); /* Updated */\n  max-width: 150px;\n}\n\nbutton:hover {\n  opacity: 0.8;\n  transform: scale(1.05);\n}\n\nbutton:active {\n  opacity: 0.9;\n}\n\n/* Footer */\nfooter {\n  grid-row: 3/4;\n  grid-column: 1/-1;\n  text-align: center;\n  background-color: var(--header-footer-color); /* Updated */\n  color: var(--background-color); /* Updated */\n  padding: 20px;\n}\n\n.add-task-button {\n  background-color: var(--primary-color); /* Updated */\n  color: var(--background-color); /* Updated */\n}\n\n/* Tile styles */\n.todo-item {\n  display: grid;\n  grid-template-columns: auto 1fr auto auto;\n  grid-template-rows: 1fr 1fr;\n  gap: 10px;\n  align-items: center;\n  border: 1px solid #ccc;\n  padding: var(--tile-padding);\n  margin-bottom: var(--tile-margin-bottom);\n  border-radius: var(--tile-border-radius);\n  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1); /* Added box shadow */\n}\n\n.todo-item h4 {\n  grid-column: 2/3;\n}\n.todo-item p:not(.todo-due-date, .todo-priority) {\n  grid-column: 2/3;\n  grid-row: 2/3;\n}\n\n.todo-item h4,\n.todo-item p {\n  align-self: self-start;\n}\n\n.todo-checkbox {\n  grid-column: 1/2;\n  grid-row: 1/-1;\n  margin-right: 10px;\n}\n\n.delete-button {\n  background-color: rgb(191, 15, 15);\n  color: white;\n  border: none;\n  grid-area: 1/4/-1/5;\n\n  /* padding: 5px 10px; */\n  cursor: pointer;\n  margin-left: auto; /* Push to the right */\n}\n\n/* Styles for date and priority */\n.todo-due-date {\n  grid-column: 3/4;\n  grid-row: 1/2;\n  color: var(--text-color);\n  font-size: 0.9em;\n}\n\n.todo-priority {\n  font-weight: 600;\n  grid-column: 3/4;\n  grid-row: 2/3;\n}\n\n.todo-priority.low {\n  color: green;\n}\n\n.todo-priority.mid {\n  color: orange;\n}\n\n.todo-priority.high {\n  color: red;\n}\n\n/* Icon styles */\n.icon-inbox {\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n}\n\n.icon-today {\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\n}\n\n.icon-week {\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});\n}\n\n.menu-item .icon-inbox,\n.menu-item .icon-today,\n.menu-item .icon-week {\n  width: 24px;\n  height: 24px;\n  background-size: cover;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://webpack/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://webpack/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_render_content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/render-content */ \"./src/modules/render-content.js\");\n/* harmony import */ var _modules_render_projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/render-projects */ \"./src/modules/render-projects.js\");\n/* harmony import */ var _modules_todo_logic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/todo-logic */ \"./src/modules/todo-logic.js\");\n\n\n\n\n// Display projects initially\n(0,_modules_render_projects__WEBPACK_IMPORTED_MODULE_2__.displayProjects)();\n\n// Render default content (first project) on page load\nif (_modules_todo_logic__WEBPACK_IMPORTED_MODULE_3__.projectsArray.length > 0) {\n  (0,_modules_render_content__WEBPACK_IMPORTED_MODULE_1__.renderContent)(_modules_todo_logic__WEBPACK_IMPORTED_MODULE_3__.projectsArray[0]);\n}\n\n\n//# sourceURL=webpack://webpack/./src/index.js?");

/***/ }),

/***/ "./src/modules/render-content.js":
/*!***************************************!*\
  !*** ./src/modules/render-content.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayTodoForm: () => (/* binding */ displayTodoForm),\n/* harmony export */   displayTodos: () => (/* binding */ displayTodos),\n/* harmony export */   renderContent: () => (/* binding */ renderContent)\n/* harmony export */ });\n/* harmony import */ var _todo_logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo-logic */ \"./src/modules/todo-logic.js\");\n\n\n// Access the content container element\nconst content = document.querySelector(\".content-container\");\n\n// Function to create the to-do form elements\nfunction createTodoForm() {\n  const todoForm = document.createElement(\"div\");\n  todoForm.className = \"todo-form\";\n\n  const formTitle = document.createElement(\"h3\");\n  formTitle.textContent = \"Add New Todo\";\n\n  const todoTitleInput = document.createElement(\"input\");\n  todoTitleInput.type = \"text\";\n  todoTitleInput.placeholder = \"Todo Title\";\n  todoTitleInput.className = \"todo-title-input\";\n\n  const todoDescriptionInput = document.createElement(\"input\");\n  todoDescriptionInput.type = \"text\";\n  todoDescriptionInput.placeholder = \"Todo Description\";\n  todoDescriptionInput.className = \"todo-description-input\";\n\n  const todoDueDateInput = document.createElement(\"input\");\n  todoDueDateInput.type = \"date\";\n  todoDueDateInput.placeholder = \"Due Date\";\n  todoDueDateInput.className = \"todo-due-date-input\";\n\n  const todoPrioritySelect = document.createElement(\"select\");\n  todoPrioritySelect.className = \"todo-priority-select\";\n\n  const priorityOptions = [\"low\", \"mid\", \"high\"];\n  priorityOptions.forEach((option) => {\n    const optionElement = document.createElement(\"option\");\n    optionElement.value = option;\n    optionElement.text = option;\n    todoPrioritySelect.appendChild(optionElement);\n  });\n\n  const submitButton = document.createElement(\"button\");\n  submitButton.textContent = \"Create Todo\";\n  submitButton.className = \"submit-todo\";\n\n  // Append form elements\n  todoForm.append(\n    formTitle,\n    todoTitleInput,\n    todoDescriptionInput,\n    todoDueDateInput,\n    todoPrioritySelect,\n    submitButton\n  );\n\n  return {\n    todoForm,\n    todoTitleInput,\n    todoDescriptionInput,\n    todoDueDateInput,\n    todoPrioritySelect,\n    submitButton,\n  };\n}\n\n// Function to handle to-do form submission\nfunction handleTodoFormSubmit(\n  project,\n  todoTitleInput,\n  todoDescriptionInput,\n  todoDueDateInput,\n  todoPrioritySelect,\n  todoForm\n) {\n  const todoTitle = todoTitleInput.value.trim();\n  const todoDescription = todoDescriptionInput.value.trim();\n  const todoDueDate = todoDueDateInput.value.trim();\n  const todoPriority = todoPrioritySelect.value;\n\n  if (!todoTitle) {\n    alert(\"Please enter a to-do title.\");\n    return;\n  }\n\n  (0,_todo_logic__WEBPACK_IMPORTED_MODULE_0__.addTodo)(project, todoTitle, todoDescription, todoDueDate, todoPriority);\n  console.log(\"Selected priority:\", todoPriority);\n\n  // Append new todo instead of re-rendering\n  appendNewTodo(project);\n  content.removeChild(todoForm);\n}\n\n// Function to display the to-do form\nfunction displayTodoForm(project) {\n  const {\n    todoForm,\n    todoTitleInput,\n    todoDescriptionInput,\n    todoDueDateInput,\n    todoPrioritySelect,\n    submitButton,\n  } = createTodoForm();\n\n  // Add event listener to submit button\n  submitButton.addEventListener(\"click\", () =>\n    handleTodoFormSubmit(\n      project,\n      todoTitleInput,\n      todoDescriptionInput,\n      todoDueDateInput,\n      todoPrioritySelect,\n      todoForm\n    )\n  );\n\n  // Append the form to the content container\n  content.appendChild(todoForm);\n}\n\n// Function to append a new todo to the existing container\nfunction appendNewTodo(project) {\n  const todoContainer = document.querySelector(\".todo-container\");\n  if (!todoContainer) {\n    return; // No container yet, displayTodos will handle it\n  }\n\n  if (project && project.todoList) {\n    // Sort the todoList by priority (high > mid > low)\n    project.todoList.sort((a, b) => {\n      const priorityOrder = { high: 3, mid: 2, low: 1 };\n      return priorityOrder[b.priority] - priorityOrder[a.priority];\n    });\n\n    const lastTodo = project.todoList[project.todoList.length - 1];\n    const todoItem = document.createElement(\"div\");\n    todoItem.className = \"todo-item\"; // Added tile class\n    todoItem.dataset.todoId = lastTodo.id;\n\n    const checkbox = document.createElement(\"input\");\n    checkbox.type = \"checkbox\";\n    checkbox.className = \"todo-checkbox\";\n\n    const todoTitle = document.createElement(\"h4\");\n    todoTitle.textContent = lastTodo.title;\n\n    const todoDescription = document.createElement(\"p\");\n    todoDescription.textContent = lastTodo.description;\n\n    const todoDueDate = document.createElement(\"p\");\n    todoDueDate.className = \"todo-due-date\";\n    todoDueDate.textContent = `Due Date: ${lastTodo.dueDate}`;\n\n    const todoPriority = document.createElement(\"p\");\n    todoPriority.className = \"todo-priority\";\n    todoPriority.textContent = `Priority: ${lastTodo.priority}`;\n\n    // add delete button\n    const deleteTodoButton = document.createElement(\"button\");\n    deleteTodoButton.textContent = \"delete TODO\";\n    deleteTodoButton.className = \"delete-button\";\n    deleteTodoButton.addEventListener(\"click\", () => {\n      (0,_todo_logic__WEBPACK_IMPORTED_MODULE_0__.deleteTodo)(project, lastTodo.id);\n      todoContainer.removeChild(todoItem); // Corrected remove method\n    });\n\n    todoItem.append(\n      checkbox,\n      todoTitle,\n      todoDescription,\n      todoDueDate,\n      todoPriority,\n      deleteTodoButton\n    );\n    todoContainer.appendChild(todoItem);\n  }\n}\n\n// Function to display to-dos for a given project\nfunction displayTodos(project) {\n  const todoContainer = document.createElement(\"div\");\n  todoContainer.className = \"todo-container\";\n  content.appendChild(todoContainer); // Append container first\n\n  if (project && project.todoList) {\n    // Sort the todoList by priority (high > mid > low)\n    project.todoList.sort((a, b) => {\n      const priorityOrder = { high: 3, mid: 2, low: 1 };\n      return priorityOrder[b.priority] - priorityOrder[a.priority];\n    });\n\n    project.todoList.forEach((todo) => {\n      const todoItem = document.createElement(\"div\");\n      todoItem.className = \"todo-item\"; // Added tile class\n      todoItem.dataset.todoId = todo.id;\n\n      const checkbox = document.createElement(\"input\");\n      checkbox.type = \"checkbox\";\n      checkbox.className = \"todo-checkbox\";\n\n      const todoTitle = document.createElement(\"h4\");\n      todoTitle.textContent = todo.title;\n\n      const todoDescription = document.createElement(\"p\");\n      todoDescription.textContent = todo.description;\n\n      const todoDueDate = document.createElement(\"p\");\n      todoDueDate.className = \"todo-due-date\";\n      todoDueDate.textContent = `Due Date: ${todo.dueDate}`;\n\n      const todoPriority = document.createElement(\"p\");\n      todoPriority.className = \"todo-priority\";\n      todoPriority.textContent = `Priority: ${todo.priority}`;\n\n      // add delete button\n      const deleteTodoButton = document.createElement(\"button\");\n      deleteTodoButton.textContent = \"delete TODO\";\n      deleteTodoButton.className = \"delete-button\";\n      deleteTodoButton.addEventListener(\"click\", () => {\n        (0,_todo_logic__WEBPACK_IMPORTED_MODULE_0__.deleteTodo)(project, todo.id);\n        todoContainer.removeChild(todoItem); // Corrected remove method\n      });\n\n      todoItem.append(\n        checkbox,\n        todoTitle,\n        todoDescription,\n        todoDueDate,\n        todoPriority,\n        deleteTodoButton\n      );\n      todoContainer.appendChild(todoItem);\n    });\n  }\n}\n\n// Function to render the main content for a project\nfunction renderContent(project) {\n  content.innerHTML = \"\";\n\n  const projectTitle = document.createElement(\"h1\");\n  projectTitle.textContent = project.title;\n\n  const line = document.createElement(\"hr\");\n\n  const addTaskButton = document.createElement(\"button\");\n  addTaskButton.textContent = \"Add Task\";\n  addTaskButton.className = \"add-task-button\";\n  addTaskButton.addEventListener(\"click\", () => {\n    displayTodoForm(project);\n  });\n\n  content.append(projectTitle, line, addTaskButton);\n  displayTodos(project);\n}\n\n\n\n\n//# sourceURL=webpack://webpack/./src/modules/render-content.js?");

/***/ }),

/***/ "./src/modules/render-projects.js":
/*!****************************************!*\
  !*** ./src/modules/render-projects.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addProjectButton: () => (/* binding */ addProjectButton),\n/* harmony export */   displayProjects: () => (/* binding */ displayProjects)\n/* harmony export */ });\n/* harmony import */ var _todo_logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo-logic */ \"./src/modules/todo-logic.js\");\n/* harmony import */ var _render_content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render-content */ \"./src/modules/render-content.js\");\n// Import necessary functions and data\n\n\n\n// Access DOM elements\nconst addProjectButton = document.querySelector(\".add-project-button\");\nconst projectsContent = document.querySelector(\".projects-list\");\n\n// Function to display all projects\nfunction displayProjects() {\n  projectsContent.innerHTML = \"\"; // Clear existing content\n\n  _todo_logic__WEBPACK_IMPORTED_MODULE_0__.projectsArray.forEach((project) => {\n    // Create project tile\n    const projectTile = document.createElement(\"div\");\n    projectTile.className = \"project-tile\";\n    projectTile.dataset.projectId = project.id;\n\n    const projectTileIcon = document.createElement(\"img\");\n    const projectTileName = document.createElement(\"p\");\n    projectTileName.textContent = project.title;\n\n    // Add elements to the tile\n    projectTile.append(projectTileIcon, projectTileName);\n\n    // Add event listener to render project content when clicked\n    projectTile.addEventListener(\"click\", () => {\n      (0,_render_content__WEBPACK_IMPORTED_MODULE_1__.renderContent)(project);\n    });\n\n    // Add the tile to the projects content\n    projectsContent.appendChild(projectTile);\n  });\n}\n\n// Function to create the project form elements\nfunction createProjectForm() {\n  const projectForm = document.createElement(\"div\");\n  projectForm.className = \"project-form\";\n\n  const formTitle = document.createElement(\"h3\");\n  formTitle.textContent = \"Add New Project\";\n\n  const projectTitleInput = document.createElement(\"input\");\n  projectTitleInput.type = \"text\";\n  projectTitleInput.placeholder = \"Project Title\";\n  projectTitleInput.className = \"project-title-input\";\n\n  const submitButton = document.createElement(\"button\");\n  submitButton.textContent = \"Create Project\";\n  submitButton.className = \"submit-project\";\n\n  // Append form elements\n  projectForm.append(formTitle, projectTitleInput, submitButton);\n\n  return { projectForm, projectTitleInput, submitButton };\n}\n\n// Function to handle project form submission\nfunction handleProjectFormSubmit(projectTitleInput, projectForm) {\n  const projectTitle = projectTitleInput.value.trim();\n\n  if (!projectTitle) {\n    alert(\"Please enter a project title.\");\n    return;\n  }\n\n  (0,_todo_logic__WEBPACK_IMPORTED_MODULE_0__.addProject)(projectTitle);\n  displayProjects();\n\n  if (projectsContent.contains(projectForm)) {\n    projectsContent.removeChild(projectForm);\n  }\n\n  addProjectButton.disabled = false;\n}\n\n// Function to display the project form\nfunction displayProjectForm() {\n  const { projectForm, projectTitleInput, submitButton } = createProjectForm();\n\n  // Add event listener to submit button\n  submitButton.addEventListener(\"click\", () =>\n    handleProjectFormSubmit(projectTitleInput, projectForm)\n  );\n\n  // Append the form to the projects content\n  projectsContent.appendChild(projectForm);\n\n  // Disable add project button while the form is displayed\n  addProjectButton.disabled = true;\n}\n\n// Add event listener to the \"Add Project\" button\naddProjectButton.addEventListener(\"click\", () => {\n  displayProjectForm();\n});\n\n\n\n\n//# sourceURL=webpack://webpack/./src/modules/render-projects.js?");

/***/ }),

/***/ "./src/modules/todo-logic.js":
/*!***********************************!*\
  !*** ./src/modules/todo-logic.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addProject: () => (/* binding */ addProject),\n/* harmony export */   addTodo: () => (/* binding */ addTodo),\n/* harmony export */   deleteTodo: () => (/* binding */ deleteTodo),\n/* harmony export */   projectsArray: () => (/* binding */ projectsArray)\n/* harmony export */ });\nlet projectIdCounter = 0;\nlet todoIdCounter = 0;\n\nclass Todo {\n  constructor(title, description, dueDate, priority) {\n    this.id = todoIdCounter++;\n    this.title = title;\n    this.description = description;\n    this.dueDate = dueDate;\n    // if ([\"low\", \"mid\", \"high\"].includes(priority)) {\n    this.priority = priority;\n    // } else {\n    // throw new Error(\"Invalid priority value\");\n    // }\n    // }\n  }\n}\n\nclass Project {\n  constructor(title, todoList) {\n    this.id = projectIdCounter++;\n    this.title = title;\n    this.todoList = todoList || [];\n  }\n}\n// create array of projects\nlet projectsArray = [new Project(\"sayed\", [new Todo(\"sayed\", \"sayed\")])];\n\n// add project function\nfunction addProject(title) {\n  let project = new Project(title);\n  projectsArray.push(project);\n}\n\n// add Todo function\nfunction addTodo(project, title, description, dueDate, priority) {\n  let newTodo = new Todo(title, description, dueDate, priority);\n  project.todoList.push(newTodo);\n  console.log(project);\n}\n// delete todo function\nfunction deleteTodo(project, todoId) {\n  project.todoList = project.todoList.filter((todo) => todo.id !== todoId);\n}\n\n\n\n//# sourceURL=webpack://webpack/./src/modules/todo-logic.js?");

/***/ }),

/***/ "./src/assets/inbox.svg":
/*!******************************!*\
  !*** ./src/assets/inbox.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/inbox.847b21841f8e1fe9dc83.svg\";\n\n//# sourceURL=webpack://webpack/./src/assets/inbox.svg?");

/***/ }),

/***/ "./src/assets/today.svg":
/*!******************************!*\
  !*** ./src/assets/today.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/today.c35eae1a34f059649895.svg\";\n\n//# sourceURL=webpack://webpack/./src/assets/today.svg?");

/***/ }),

/***/ "./src/assets/week.svg":
/*!*****************************!*\
  !*** ./src/assets/week.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/week.7e164032fea10b4aa882.svg\";\n\n//# sourceURL=webpack://webpack/./src/assets/week.svg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;