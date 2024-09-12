/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! fonts/ProtestGuerrilla-Regular.ttf */ "./src/fonts/ProtestGuerrilla-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! fonts/RobotoCondensed-Black.ttf */ "./src/fonts/RobotoCondensed-Black.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
    font-family: 'Headline';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

@font-face {
    font-family: 'myFont';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
}
:root {
    --cell-size : 50px;
    --cell-border-color :rgba(85, 103, 156, 0.8);
    --ship-color : rgb(04, 117, 126);
    --miss-color : rgb(132, 136, 132);
    --hit-gradient : linear-gradient(45deg,rgba(203,53,61,0.8),rgba(249,182,78,0.8),rgba(237,98,64,0.8));
    --hit-border : rgb(249,182,78);
    --body-gradient : linear-gradient(135deg,#EEF5FF,#B4D4FF,#86B6F6,#176B87);
}

body{
    font-family: 'myFont';
    margin: 0;
    min-height: 100vh;
    background-image: var(--body-gradient);
    background-size: 300%;
    animation: bg-animation 15s infinite alternate;
}

@keyframes bg-animation {
    0% {
        background-position: left;
    }

    100% {
        background-position: right;
    }
}
.container {
    display: flex;
    flex-direction: column;
}

.ground{
    display: flex;
    gap : 100px;
    justify-content: center;

    
}
.grid {
    display: grid;
    grid-template-columns: repeat(10,var(--cell-size));
    grid-template-rows: repeat(10,var(--cell-size));
    border: 0.5px solid black;
    padding: 10px;
    
}

.player-grid, .ai-grid {
    position: relative;
}

.player-grid::before {
    content : '[ Player Board ]';
}

.ai-grid::before {
    content : '[ AI Board ]';
}


.player-grid::before, .ai-grid::before {
    font-family: 'Courier New', Courier, monospace;
    position: absolute;
    transform: translate(-50%, -50%);
    background-color: #86B6F6;
    line-height: 15px;
    left: 50%;
    /* bottom: calc(100% - 6px);
    left: 10%; */
}
.cell{
    box-sizing: border-box;
    height: 50px;
    width: 50px;
    border: 1px solid var(--cell-border-color);
}

.placing ,.selected{
    border: 2px dashed rgba(34, 57, 34, 0.5) !important;

    /* background-color: rgb(123, 235, 123, 0.2); */
    background-color: rgb(0, 128, 128,0.5) !important;
    /* background-image: linear-gradient(180deg,rgba(191, 246, 195, 0.5), rgba(176, 235, 180, 0.5)); */
}

.hit{
    /* background-color: #f06a49; */
    background-image: var(--hit-gradient);
    background-size: 300%;
    animation: bg-animation 15s infinite alternate;
    border: var(--hit-border)
}

.miss {
    background-color: var(--miss-color);
}

.headline {
    text-align: center;
    margin-bottom: 1em;
    font-size: 1.5rem;
}

h2 {
    text-align: center;
    margin: 0;
    padding: 1em;
    font-size : 3rem;
    font-family: 'Headline';
}

.ship,button[data-value = '4'],button[data-value = '3'],button[data-value = '2'],button[data-value = '1'] {
    /* background-color: rgb(162, 104, 216,0.5); */
    background-color: var(--ship-color);
    border: 1px solid var(--ship-color);
}
button[data-value = '4'] {
    width: calc(var(--cell-size) * 4);
    height: var(--cell-size);
}

button[data-value = '3'] {
    width: calc(var(--cell-size) * 3);
    height: var(--cell-size);
}

button[data-value = '2'] {
    width: calc(var(--cell-size) * 2);
    height: var(--cell-size);
}

button[data-value = '1'] {
    width: calc(var(--cell-size) * 1);
    height: var(--cell-size);
}

.buttonContainer {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.shipDiv{
    padding-block: 10px;
	display: flex;
	align-items: center;
}

.shipDiv span {
    padding: 10px;
}

.buttonContainer button:nth-last-child(2), .buttonContainer button:last-child,.restart{
    font-size: 1.2rem;
    font-family: 'myFont';
    min-height: 50px;
    border: 2px solid var(--ship-color);
    background-color: transparent;
    color: var(--ship-color);
    transition: 0.3s;
}

.restart {
	font-size:2rem;
	margin: 0 auto;
	margin-top: 1em;
	padding: 0.3em 1em;
}

.restart:hover {
	background-color: var(--ship-color);
    color: white;
}
.buttonContainer button:nth-last-child(2):hover {
    background-color: var(--ship-color);
    color: white;
}

.buttonContainer button:last-child:hover {
    background-color: var(--ship-color);
    color: white;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,uBAAuB;IACvB,4CAA8C;AAClD;;AAEA;IACI,qBAAqB;IACrB,4CAA2C;AAC/C;AACA;IACI,kBAAkB;IAClB,4CAA4C;IAC5C,gCAAgC;IAChC,iCAAiC;IACjC,oGAAoG;IACpG,8BAA8B;IAC9B,yEAAyE;AAC7E;;AAEA;IACI,qBAAqB;IACrB,SAAS;IACT,iBAAiB;IACjB,sCAAsC;IACtC,qBAAqB;IACrB,8CAA8C;AAClD;;AAEA;IACI;QACI,yBAAyB;IAC7B;;IAEA;QACI,0BAA0B;IAC9B;AACJ;AACA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,WAAW;IACX,uBAAuB;;;AAG3B;AACA;IACI,aAAa;IACb,kDAAkD;IAClD,+CAA+C;IAC/C,yBAAyB;IACzB,aAAa;;AAEjB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,wBAAwB;AAC5B;;;AAGA;IACI,8CAA8C;IAC9C,kBAAkB;IAClB,gCAAgC;IAChC,yBAAyB;IACzB,iBAAiB;IACjB,SAAS;IACT;gBACY;AAChB;AACA;IACI,sBAAsB;IACtB,YAAY;IACZ,WAAW;IACX,0CAA0C;AAC9C;;AAEA;IACI,mDAAmD;;IAEnD,+CAA+C;IAC/C,iDAAiD;IACjD,kGAAkG;AACtG;;AAEA;IACI,+BAA+B;IAC/B,qCAAqC;IACrC,qBAAqB;IACrB,8CAA8C;IAC9C;AACJ;;AAEA;IACI,mCAAmC;AACvC;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,YAAY;IACZ,gBAAgB;IAChB,uBAAuB;AAC3B;;AAEA;IACI,8CAA8C;IAC9C,mCAAmC;IACnC,mCAAmC;AACvC;AACA;IACI,iCAAiC;IACjC,wBAAwB;AAC5B;;AAEA;IACI,iCAAiC;IACjC,wBAAwB;AAC5B;;AAEA;IACI,iCAAiC;IACjC,wBAAwB;AAC5B;;AAEA;IACI,iCAAiC;IACjC,wBAAwB;AAC5B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,mBAAmB;CACtB,aAAa;CACb,mBAAmB;AACpB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,iBAAiB;IACjB,qBAAqB;IACrB,gBAAgB;IAChB,mCAAmC;IACnC,6BAA6B;IAC7B,wBAAwB;IACxB,gBAAgB;AACpB;;AAEA;CACC,cAAc;CACd,cAAc;CACd,eAAe;CACf,kBAAkB;AACnB;;AAEA;CACC,mCAAmC;IAChC,YAAY;AAChB;AACA;IACI,mCAAmC;IACnC,YAAY;AAChB;;AAEA;IACI,mCAAmC;IACnC,YAAY;AAChB","sourcesContent":["@font-face {\n    font-family: 'Headline';\n    src: url('fonts/ProtestGuerrilla-Regular.ttf');\n}\n\n@font-face {\n    font-family: 'myFont';\n    src: url('fonts/RobotoCondensed-Black.ttf');\n}\n:root {\n    --cell-size : 50px;\n    --cell-border-color :rgba(85, 103, 156, 0.8);\n    --ship-color : rgb(04, 117, 126);\n    --miss-color : rgb(132, 136, 132);\n    --hit-gradient : linear-gradient(45deg,rgba(203,53,61,0.8),rgba(249,182,78,0.8),rgba(237,98,64,0.8));\n    --hit-border : rgb(249,182,78);\n    --body-gradient : linear-gradient(135deg,#EEF5FF,#B4D4FF,#86B6F6,#176B87);\n}\n\nbody{\n    font-family: 'myFont';\n    margin: 0;\n    min-height: 100vh;\n    background-image: var(--body-gradient);\n    background-size: 300%;\n    animation: bg-animation 15s infinite alternate;\n}\n\n@keyframes bg-animation {\n    0% {\n        background-position: left;\n    }\n\n    100% {\n        background-position: right;\n    }\n}\n.container {\n    display: flex;\n    flex-direction: column;\n}\n\n.ground{\n    display: flex;\n    gap : 100px;\n    justify-content: center;\n\n    \n}\n.grid {\n    display: grid;\n    grid-template-columns: repeat(10,var(--cell-size));\n    grid-template-rows: repeat(10,var(--cell-size));\n    border: 0.5px solid black;\n    padding: 10px;\n    \n}\n\n.player-grid, .ai-grid {\n    position: relative;\n}\n\n.player-grid::before {\n    content : '[ Player Board ]';\n}\n\n.ai-grid::before {\n    content : '[ AI Board ]';\n}\n\n\n.player-grid::before, .ai-grid::before {\n    font-family: 'Courier New', Courier, monospace;\n    position: absolute;\n    transform: translate(-50%, -50%);\n    background-color: #86B6F6;\n    line-height: 15px;\n    left: 50%;\n    /* bottom: calc(100% - 6px);\n    left: 10%; */\n}\n.cell{\n    box-sizing: border-box;\n    height: 50px;\n    width: 50px;\n    border: 1px solid var(--cell-border-color);\n}\n\n.placing ,.selected{\n    border: 2px dashed rgba(34, 57, 34, 0.5) !important;\n\n    /* background-color: rgb(123, 235, 123, 0.2); */\n    background-color: rgb(0, 128, 128,0.5) !important;\n    /* background-image: linear-gradient(180deg,rgba(191, 246, 195, 0.5), rgba(176, 235, 180, 0.5)); */\n}\n\n.hit{\n    /* background-color: #f06a49; */\n    background-image: var(--hit-gradient);\n    background-size: 300%;\n    animation: bg-animation 15s infinite alternate;\n    border: var(--hit-border)\n}\n\n.miss {\n    background-color: var(--miss-color);\n}\n\n.headline {\n    text-align: center;\n    margin-bottom: 1em;\n    font-size: 1.5rem;\n}\n\nh2 {\n    text-align: center;\n    margin: 0;\n    padding: 1em;\n    font-size : 3rem;\n    font-family: 'Headline';\n}\n\n.ship,button[data-value = '4'],button[data-value = '3'],button[data-value = '2'],button[data-value = '1'] {\n    /* background-color: rgb(162, 104, 216,0.5); */\n    background-color: var(--ship-color);\n    border: 1px solid var(--ship-color);\n}\nbutton[data-value = '4'] {\n    width: calc(var(--cell-size) * 4);\n    height: var(--cell-size);\n}\n\nbutton[data-value = '3'] {\n    width: calc(var(--cell-size) * 3);\n    height: var(--cell-size);\n}\n\nbutton[data-value = '2'] {\n    width: calc(var(--cell-size) * 2);\n    height: var(--cell-size);\n}\n\nbutton[data-value = '1'] {\n    width: calc(var(--cell-size) * 1);\n    height: var(--cell-size);\n}\n\n.buttonContainer {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n.shipDiv{\n    padding-block: 10px;\n\tdisplay: flex;\n\talign-items: center;\n}\n\n.shipDiv span {\n    padding: 10px;\n}\n\n.buttonContainer button:nth-last-child(2), .buttonContainer button:last-child,.restart{\n    font-size: 1.2rem;\n    font-family: 'myFont';\n    min-height: 50px;\n    border: 2px solid var(--ship-color);\n    background-color: transparent;\n    color: var(--ship-color);\n    transition: 0.3s;\n}\n\n.restart {\n\tfont-size:2rem;\n\tmargin: 0 auto;\n\tmargin-top: 1em;\n\tpadding: 0.3em 1em;\n}\n\n.restart:hover {\n\tbackground-color: var(--ship-color);\n    color: white;\n}\n.buttonContainer button:nth-last-child(2):hover {\n    background-color: var(--ship-color);\n    color: white;\n}\n\n.buttonContainer button:last-child:hover {\n    background-color: var(--ship-color);\n    color: white;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/DOM/PlaceShip.js":
/*!******************************!*\
  !*** ./src/DOM/PlaceShip.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Ship */ "./src/Ship.js");


class PlaceShip {
    constructor(name,gameBoard,ground) {
        this.gameBoard = gameBoard
        this.name = name
        this.cells = []
        this.ground = ground
        this.currentShipSize = 0
        this.shipOrientation = "Horizontal"
        this.ship_4 = 1
        this.ship_3 = 2
        this.ship_2 = 3
        this.ship_1 = 4
        this.span_1 = document.createElement('span')
        this.span_2 = document.createElement('span')
        this.span_3 = document.createElement('span')
        this.span_4 = document.createElement('span')
        this.shipButtons()
    }
    
    createShipDiv(container,button,span,count) {
        const div = document.createElement('div')
        div.classList.add('shipDiv')
        button.classList.add('shipButtons')
        span.textContent = `x ${count}`
        div.append(button)
        div.append(span)
        container.append(div)
    }

    updateShipCount() {
        this.span_1.textContent = `x ${this.ship_1}`
        this.span_2.textContent = `x ${this.ship_2}`
        this.span_3.textContent = `x ${this.ship_3}`
        this.span_4.textContent = `x ${this.ship_4}`
    }
    updateSelected() {
        Array.from(document.querySelectorAll('.shipButtons')).forEach(button => button.classList.remove('selected'))
    }
    shipButtons() {
        const begin = document.createElement('button') 
        begin.textContent = "Start"
        begin.addEventListener('click', () => {
            if(this.checkShips()) {
                this.cells = []
                this.ground.textContent = ''
                document.dispatchEvent(new Event('shipPlaced'));
                return
            }
            alert("place all ships first")
        })

        const changeOrientation = document.createElement('button')
        changeOrientation.textContent = this.shipOrientation

        changeOrientation.addEventListener('click', () => {
            if(this.shipOrientation === "Horizontal") this.shipOrientation = "Vertical"
            else this.shipOrientation = "Horizontal"
            changeOrientation.textContent = this.shipOrientation
            this.cells = []
            this.display()
        })

        const buttonContainer = document.createElement('div')
        buttonContainer.classList.add('buttonContainer')
        const container = document.querySelector('.player2')
        container.classList.remove('grid')
        container.classList.remove('ai-grid')

        const button_4 = document.createElement('button')
        button_4.dataset.value = 4
        button_4.addEventListener('click', () => {
            if(this.ship_4 > 0) {
                this.updateSelected()
                button_4.classList.add('selected')
                this.currentShipSize = 4
                this.cells = []
                this.display()
            }
        })


        const button_3 = document.createElement('button')
        button_3.dataset.value = 3
        button_3.addEventListener('click', () => {
            if(this.ship_3 > 0) {
                this.updateSelected()
                button_3.classList.add('selected')
                this.currentShipSize = 3
                this.cells = []
                this.display()
            }
        })

        const button_2 = document.createElement('button')
        button_2.dataset.value = 2
        button_2.addEventListener('click', () => {
            if(this.ship_2 > 0) {
                this.updateSelected()
                button_2.classList.add('selected')
                this.currentShipSize = 2
                this.cells = []
                this.display()
            }
        })

        const button_1 = document.createElement('button')
        button_1.dataset.value = 1
        button_1.addEventListener('click', () => {
            if(this.ship_1 > 0) {
                this.updateSelected()
                button_1.classList.add('selected')
                this.currentShipSize = 1
                this.cells = []
                this.display()
            }
        })
        this.createShipDiv(container,button_4,this.span_4,1)
        this.createShipDiv(container,button_3,this.span_3,2)
        this.createShipDiv(container,button_2,this.span_2,3)
        this.createShipDiv(container,button_1,this.span_1,4)

        buttonContainer.append(changeOrientation)
        buttonContainer.append(begin)
        const p = document.createElement('p')
        p.textContent = "[ right click on ship to remove it from board ]"
        container.append(buttonContainer)
        container.append(p)
    }


    display() {
        this.ground.textContent = ''
        let board = this.gameBoard.getBoard()
        for(let i = 0; i < 10; i++) {
            let row = []
            for(let j = 0; j < 10; j++) {
                const cell = document.createElement('div')
                cell.classList.add('cell')
                cell.dataset.x = i
                cell.dataset.y = j
                cell.dataset.name = this.name

                if(board[i][j] instanceof _Ship__WEBPACK_IMPORTED_MODULE_0__["default"] ) {
                    cell.classList.add('ship')
                }
                this.ground.append(cell)
                row.push(cell)
                this.test(cell,this.currentShipSize,this.shipOrientation)
                
            }
            this.cells.push(row)
        }
    }

    checkShips() {
        return this.ship_1 <= 0 && this.ship_2 <= 0 && this.ship_3 <= 0 && this.ship_4 <= 0
    }

    test(cell,shipSize,orientation) {
        let shipCoords = []
        if(orientation === "Horizontal") {
            for(let i = 0; i < shipSize; i++) {
                let position = [0,i]
                shipCoords.push(position)
            }
        }
        else {
            for(let i = 0; i < shipSize; i++) {
                let position = [i,0]
                shipCoords.push(position)
            }
        }
        let coords;
        cell.addEventListener('click', () => {
            if(shipSize) {

                if(this.gameBoard.validate(coords)) {
                    const ship = new _Ship__WEBPACK_IMPORTED_MODULE_0__["default"](shipSize)
                    this.gameBoard.placeShip(ship,coords)
                    for(let [x,y] of coords) {
                        this.cells[x][y].classList.add('ship')
                    }  
                   

                    this.cells = []
                    if(shipSize === 4){
                        this.ship_4 -= 1
                        if(!this.ship_4) {
                            this.currentShipSize = 0
                            this.updateSelected()
                        }
                    } 
                    if(shipSize === 3) {
                        this.ship_3 -= 1
                        if(!this.ship_3) {
                            this.currentShipSize = 0
                            this.updateSelected()
                        }
                    }
                    if(shipSize === 2) {
                        this.ship_2 -= 1
                        if(!this.ship_2) {
                            this.currentShipSize = 0
                            this.updateSelected()
                        }
                    }
                    if(shipSize === 1) {
                        this.ship_1 -= 1
                        if(!this.ship_1) {
                            this.currentShipSize = 0
                            this.updateSelected()
                        }
                    }
                    this.updateShipCount()
                    
                    this.display()
                }

            }
        })


        cell.addEventListener('mouseenter', () => {
            const x = parseInt(cell.dataset.x)
            const y = parseInt(cell.dataset.y)
            coords = shipCoords.map((a)=> {
                return [a[0] + x, a[1] + y]
            })
            let result = this.gameBoard.validate(coords) 
            if(result) {
                for(let [x,y] of coords) {
                    this.cells[x][y].classList.add('placing')
                }   
            }
        })

        cell.addEventListener('mouseleave', () => {
            if(this.gameBoard.validate(coords)) {
                for(let [x,y] of coords) {
                    this.cells[x][y].classList.remove('placing')
                }  
            }   
        })
        
        cell.addEventListener('contextmenu', (e)=> {
            e.preventDefault()
            let x = parseInt(e.target.dataset.x)
            let y = parseInt(e.target.dataset.y)
            let board = this.gameBoard.getBoard()
            if(board[x][y] instanceof _Ship__WEBPACK_IMPORTED_MODULE_0__["default"]) {
                if(board[x][y].getLength() === 4) this.ship_4 += 1
                if(board[x][y].getLength() === 3) this.ship_3 += 1
                if(board[x][y].getLength() === 2) this.ship_2 += 1
                if(board[x][y].getLength() === 1) this.ship_1 += 1
                this.gameBoard.removeShip(board[x][y])
                this.updateShipCount()
            }
            this.cells = []
            this.display()
        })

    }
 
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PlaceShip);

/***/ }),

/***/ "./src/DOM/bot.js":
/*!************************!*\
  !*** ./src/DOM/bot.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Ship */ "./src/Ship.js");

class Bot {
    constructor(name,gameBoard,ground) {
        this.name = name
        this.gameBoard = gameBoard
        this.cells = []
        this.availabe = []
        this.player = ground
        this.getValidIndex()
    }

    display() {
        this.player.textContent = ''
        let board = this.gameBoard.getBoard()
        for(let i = 0; i < 10; i++) {
            let row = []
            for(let j = 0; j < 10; j++) {
                const cell = document.createElement('div')
                cell.dataset.x = i
                cell.dataset.y = j
                cell.dataset.name = this.name
                cell.classList.add('cell')
                this.player.append(cell)
                row.push(cell)

                if(board[i][j] === "hit") {
                    cell.style.backgroundColor = 'red'
                }
                
                if(board[i][j] === "miss") {
                    cell.style.backgroundColor = 'green'
                }

                if(board[i][j] instanceof _Ship__WEBPACK_IMPORTED_MODULE_0__["default"] ) {
                    // cell.style.backgroundColor = "blue"
                    cell.classList.add('ship')
                }

            }
            this.cells.push(row)
        }
        return this.cells
    }

    recieveAttack([x,y]) {
        let board = this.gameBoard.getBoard()
        const result = this.gameBoard.receiveAttack([x,y])
        return result
    }

    getValidIndex() {
        let board = this.gameBoard.getBoard()
        for(let i = 0; i < 10 ; i++) {
            for(let j = 0; j < 10; j++) {
                if(board[i][j] === null || board[i][j] instanceof _Ship__WEBPACK_IMPORTED_MODULE_0__["default"]) {
                    this.availabe.push({x:i, y:j})
                }
            }
        }        
    }

    randomAttack() {
        const index = Math.floor(Math.random() * this.availabe.length)
        let {x,y} = this.availabe[index]
        this.availabe.splice(index,1)
        const result = this.gameBoard.receiveAttack([x,y])
        if(result === "Hit") {
            // this.cells[x][y].style.backgroundColor = "red"
            this.cells[x][y].classList.remove('ship')
            this.cells[x][y].classList.add('hit')
        }
        
        if(result === "Miss") {
            // this.cells[x][y].style.backgroundColor = "green"
            this.cells[x][y].classList.add('miss')
        }
    }


    randomShipPlacement() {
        
        const ship1 = new _Ship__WEBPACK_IMPORTED_MODULE_0__["default"](4)

        const ship2 = new _Ship__WEBPACK_IMPORTED_MODULE_0__["default"](3)
        const ship3 = new _Ship__WEBPACK_IMPORTED_MODULE_0__["default"](3)

        const ship4 = new _Ship__WEBPACK_IMPORTED_MODULE_0__["default"](2)
        const ship5 = new _Ship__WEBPACK_IMPORTED_MODULE_0__["default"](2)
        const ship6 = new _Ship__WEBPACK_IMPORTED_MODULE_0__["default"](2)

        const ship7 = new _Ship__WEBPACK_IMPORTED_MODULE_0__["default"](1)
        const ship8 = new _Ship__WEBPACK_IMPORTED_MODULE_0__["default"](1)
        const ship9 = new _Ship__WEBPACK_IMPORTED_MODULE_0__["default"](1)
        const ship10 = new _Ship__WEBPACK_IMPORTED_MODULE_0__["default"](1)

        let ships = [ship1,ship2,ship3,ship4,ship5,ship6,ship7,ship8,ship9,ship10]

        function getCoords(ship) {
            let coords = []
            let x = Math.floor(Math.random() * 10)
            let y = Math.floor(Math.random() * 10)
            let align = Math.floor(Math.random() * 2)
            if(align === 0) {
                for(let i = 0; i < ship.getLength(); i++) {
                    coords.push([x+i,y])
                }
            } else {
                for(let i = 0; i < ship.getLength(); i++) {
                    coords.push([x,y+i])
                }
            }
            return coords
        }
        
        for(let ship of ships) { 
            let coords = getCoords(ship)
            while(!this.gameBoard.validate(coords)) {
                coords = getCoords(ship)
            }
            this.gameBoard.placeShip(ship,coords)
            if(this.show) {
                for(let [x,y] of coords) {
                    // this.cells[x][y].style.backgroundColor = "blue"
                    this.cells[x][y].classList.add('ship')

                }
            }
        }
    }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Bot);

/***/ }),

/***/ "./src/DOM/game.js":
/*!*************************!*\
  !*** ./src/DOM/game.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Player */ "./src/Player.js");
/* harmony import */ var _bot_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bot.js */ "./src/DOM/bot.js");
/* harmony import */ var _PlaceShip_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PlaceShip.js */ "./src/DOM/PlaceShip.js");




class game {
    constructor() {
        this.player1 = document.querySelector('.player1')
        this.player2 = document.querySelector('.player2')
        this.player = new _Player__WEBPACK_IMPORTED_MODULE_0__["default"]()
        this.computer = new _Player__WEBPACK_IMPORTED_MODULE_0__["default"]()
        this.start = new _PlaceShip_js__WEBPACK_IMPORTED_MODULE_2__["default"]("player",this.player.getGameBoard(),this.player1)
        this.start.display()
        document.addEventListener('shipPlaced', this.startGame.bind(this));
    
    }

    getPlayer() {
        return this.player
    }
    
    getComputer() {
        return this.computer
    }

    reset() {
        this.player1.textContent = ''
        this.player2.textContent = ''
        // this.player.getGameBoard().removeAllShip()
        // this.computer.getGameBoard().removeAllShip()
        document.querySelector('.headline').textContent = ''
        document.querySelector('.restart').style.display = 'none'
    }

    startGame() {
        this.player1.classList.add('grid')
        this.player2.classList.add('grid')
        this.player1.classList.add('player-grid')
        this.player2.classList.add('ai-grid')
        const headline = document.querySelector('.headline')
        const playerBoard = new _bot_js__WEBPACK_IMPORTED_MODULE_1__["default"]("player",this.player.getGameBoard(),this.player1)    
        const computerBoard = new _bot_js__WEBPACK_IMPORTED_MODULE_1__["default"]("bot",this.computer.getGameBoard(),this.player2)
        computerBoard.randomShipPlacement()

        playerBoard.display()
        computerBoard.display()

        const computerGameBoard = this.computer.getGameBoard()
        const playerGameBoard = this.player.getGameBoard()
        
        let current = "player"
        headline.textContent = "Player turn"
        const cells = document.querySelectorAll(`.cell[data-name="bot"]`);   

        for(let cell of cells) {
            cell.addEventListener('click', function handleClick(e) {
                let x = parseInt(cell.dataset.x)
                let y = parseInt(cell.dataset.y)
                const name = cell.dataset.name
                if(current === "player" && name === "bot") {
    
                    const result = computerBoard.recieveAttack([x,y])
                    if(result === "Hit") {
                        // e.target.style.backgroundColor = 'red'
                        e.target.classList.remove('ship')
                        e.target.classList.add('hit')
                    }
        
                    if(result === "Miss") {
                        // e.target.style.backgroundColor = 'green'
                        e.target.classList.add('miss')
                    }
                }
                cell.removeEventListener('click', handleClick)
    
                if(computerGameBoard.allSunk()) {
                    // alert("player won")
                    headline.textContent = 'Player Won !!!'
                    document.querySelector('.restart').style.display = 'block'
                    return
                }
    
                current = "bot";
                headline.textContent = "AI turn"
                setTimeout(() => {
                    playerBoard.randomAttack()
                    if(playerGameBoard.allSunk()) {
                        headline.textContent = "Ai Won !!!"
                        document.querySelector('.restart').style.display = 'block'
                        return
                    }
                    current = "player"
                    headline.textContent = "player turn"
                },100)
            })
        }
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (game);

/***/ }),

/***/ "./src/Gameboard.js":
/*!**************************!*\
  !*** ./src/Gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ship */ "./src/Ship.js");


class GameBoard {
    constructor(size = 10) {
        this.size = size
        this.board = Array(size).fill(null).map(() => Array(this.size).fill(null))
        this.ships = []
    }

    removeShip(target) {
        let index = this.ships.findIndex((ship) => ship === target)
        this.ships.splice(index,1)
        for(let i = 0; i < 10; i++) {
            for(let j = 0; j < 10; j++) {
                if(this.board[i][j] === target) this.board[i][j] = null
            }
        }
    }

    removeAllShip() {
        this.ship = []
        this.board = Array(size).fill(null).map(() => Array(this.size).fill(null))
    }

    getBoard() {
        return this.board
    }

    getShips() {
        return this.ships
    }

    validate(coords) {
        for(let [x,y] of coords) {
            if (x < 0 || x >= this.size || y < 0 || y >= this.size || this.board[x][y] !== null) {
                return false
            }
        }
        return true
    }

    placeShip(ship,coords) {

        if(this.validate(coords)) {

            for(let [x,y] of coords) {
                this.board[x][y] = ship
            }
    
            ship.placeShip(coords)
            this.ships.push(ship)
        }
    }

    receiveAttack(coords) {
        const [x,y] = coords
        const target = this.board[x][y]
        
        if(target instanceof _Ship__WEBPACK_IMPORTED_MODULE_0__["default"] && target !== null) {
            target.hit()
            this.board[x][y] = "hit"
            return "Hit"
        }

        this.board[x][y] = "miss"
        return "Miss"
    }

    getBoard() {
        return this.board
    }
    allSunk() {
        return this.ships.every((ship) => ship.isSunk());
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameBoard);

/***/ }),

/***/ "./src/Player.js":
/*!***********************!*\
  !*** ./src/Player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Gameboard */ "./src/Gameboard.js");

class Player{
    constructor(){
        this. gameBoard = new _Gameboard__WEBPACK_IMPORTED_MODULE_0__["default"]()
    }

    getGameBoard() {
        return this.gameBoard
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);

/***/ }),

/***/ "./src/Ship.js":
/*!*********************!*\
  !*** ./src/Ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Ship {
    constructor(length = 4) {
        this.length = length
        this.damage = 0
        this.sunk = false
        this.position = []
    }

    hit() {
        this.damage += 1
    }

    getHit() {
        return this.damage
    }

    getLength() {
        return this.length
    }
    
    isSunk() {
        if (this.length <= this.damage) {
            this.sunk = true
        }
        return this.sunk
    }
    
    getPosition() {
        return this.position
    }
    
    placeShip(position) {
        this.position = position
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);

/***/ }),

/***/ "./src/fonts/ProtestGuerrilla-Regular.ttf":
/*!************************************************!*\
  !*** ./src/fonts/ProtestGuerrilla-Regular.ttf ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cb6024c9bca7ab764ca3.ttf";

/***/ }),

/***/ "./src/fonts/RobotoCondensed-Black.ttf":
/*!*********************************************!*\
  !*** ./src/fonts/RobotoCondensed-Black.ttf ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ea66a26dd10da9c77f6f.ttf";

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
/******/ 			if (document.currentScript)
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
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DOM_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM/game */ "./src/DOM/game.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


let gameInstance = new _DOM_game__WEBPACK_IMPORTED_MODULE_0__["default"]()

function restartGame() {
    gameInstance.reset()
    gameInstance = new _DOM_game__WEBPACK_IMPORTED_MODULE_0__["default"]()
}

const restartButton = document.querySelector('.restart') 
restartButton.addEventListener('click', restartGame)
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLG1KQUFxRDtBQUNqRyw0Q0FBNEMsNklBQWtEO0FBQzlGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUNBQW1DO0FBQ2xEOztBQUVBO0FBQ0E7QUFDQSxlQUFlLG1DQUFtQztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxrREFBa0Q7QUFDbEQ7QUFDQSxxR0FBcUc7QUFDckc7O0FBRUE7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlEQUFpRDtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sZ0ZBQWdGLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sS0FBSyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLGNBQWMsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxRQUFRLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsS0FBSyxNQUFNLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxzQ0FBc0MsOEJBQThCLHFEQUFxRCxHQUFHLGdCQUFnQiw0QkFBNEIsa0RBQWtELEdBQUcsU0FBUyx5QkFBeUIsbURBQW1ELHVDQUF1Qyx3Q0FBd0MsMkdBQTJHLHFDQUFxQyxnRkFBZ0YsR0FBRyxTQUFTLDRCQUE0QixnQkFBZ0Isd0JBQXdCLDZDQUE2Qyw0QkFBNEIscURBQXFELEdBQUcsNkJBQTZCLFVBQVUsb0NBQW9DLE9BQU8sY0FBYyxxQ0FBcUMsT0FBTyxHQUFHLGNBQWMsb0JBQW9CLDZCQUE2QixHQUFHLFlBQVksb0JBQW9CLGtCQUFrQiw4QkFBOEIsV0FBVyxTQUFTLG9CQUFvQix5REFBeUQsc0RBQXNELGdDQUFnQyxvQkFBb0IsU0FBUyw0QkFBNEIseUJBQXlCLEdBQUcsMEJBQTBCLG1DQUFtQyxHQUFHLHNCQUFzQiwrQkFBK0IsR0FBRyw4Q0FBOEMscURBQXFELHlCQUF5Qix1Q0FBdUMsZ0NBQWdDLHdCQUF3QixnQkFBZ0Isa0NBQWtDLGlCQUFpQixLQUFLLFFBQVEsNkJBQTZCLG1CQUFtQixrQkFBa0IsaURBQWlELEdBQUcsd0JBQXdCLDBEQUEwRCxzREFBc0QsMERBQTBELHVHQUF1RyxLQUFLLFNBQVMsb0NBQW9DLDhDQUE4Qyw0QkFBNEIscURBQXFELGtDQUFrQyxXQUFXLDBDQUEwQyxHQUFHLGVBQWUseUJBQXlCLHlCQUF5Qix3QkFBd0IsR0FBRyxRQUFRLHlCQUF5QixnQkFBZ0IsbUJBQW1CLHVCQUF1Qiw4QkFBOEIsR0FBRywrR0FBK0csbURBQW1ELDRDQUE0QywwQ0FBMEMsR0FBRyw0QkFBNEIsd0NBQXdDLCtCQUErQixHQUFHLDhCQUE4Qix3Q0FBd0MsK0JBQStCLEdBQUcsOEJBQThCLHdDQUF3QywrQkFBK0IsR0FBRyw4QkFBOEIsd0NBQXdDLCtCQUErQixHQUFHLHNCQUFzQixvQkFBb0IsNkJBQTZCLGdCQUFnQixHQUFHLGFBQWEsMEJBQTBCLGtCQUFrQix3QkFBd0IsR0FBRyxtQkFBbUIsb0JBQW9CLEdBQUcsMkZBQTJGLHdCQUF3Qiw0QkFBNEIsdUJBQXVCLDBDQUEwQyxvQ0FBb0MsK0JBQStCLHVCQUF1QixHQUFHLGNBQWMsbUJBQW1CLG1CQUFtQixvQkFBb0IsdUJBQXVCLEdBQUcsb0JBQW9CLHdDQUF3QyxtQkFBbUIsR0FBRyxtREFBbUQsMENBQTBDLG1CQUFtQixHQUFHLDhDQUE4QywwQ0FBMEMsbUJBQW1CLEdBQUcsbUJBQW1CO0FBQzV4TDtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQzVNMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDekJhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTtBQUNyQyxpQkFBaUIsdUdBQWE7QUFDOUIsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksc0ZBQU8sVUFBVSxzRkFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7QUN4QmhFOztBQUViO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDbkZhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDYjBCOztBQUUxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLE1BQU07QUFDdEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1Q0FBdUMsWUFBWTtBQUNuRCx1Q0FBdUMsWUFBWTtBQUNuRCx1Q0FBdUMsWUFBWTtBQUNuRCx1Q0FBdUMsWUFBWTtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7O0FBR1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLFFBQVE7QUFDL0I7QUFDQSwyQkFBMkIsUUFBUTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDBDQUEwQyw2Q0FBSTtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGNBQWM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixjQUFjO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUNBQXFDLDZDQUFJO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUzs7O0FBR1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsNkNBQUk7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7O0FBRUEsaUVBQWU7Ozs7Ozs7Ozs7Ozs7OztBQzNRWTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLFFBQVE7QUFDL0I7QUFDQSwyQkFBMkIsUUFBUTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwwQ0FBMEMsNkNBQUk7QUFDOUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQXVCLFNBQVM7QUFDaEMsMkJBQTJCLFFBQVE7QUFDbkMsa0VBQWtFLDZDQUFJO0FBQ3RFLHdDQUF3QyxTQUFTO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSwwQkFBMEIsNkNBQUk7O0FBRTlCLDBCQUEwQiw2Q0FBSTtBQUM5QiwwQkFBMEIsNkNBQUk7O0FBRTlCLDBCQUEwQiw2Q0FBSTtBQUM5QiwwQkFBMEIsNkNBQUk7QUFDOUIsMEJBQTBCLDZDQUFJOztBQUU5QiwwQkFBMEIsNkNBQUk7QUFDOUIsMEJBQTBCLDZDQUFJO0FBQzlCLDBCQUEwQiw2Q0FBSTtBQUM5QiwyQkFBMkIsNkNBQUk7O0FBRS9COztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixzQkFBc0I7QUFDckQ7QUFDQTtBQUNBLGNBQWM7QUFDZCwrQkFBK0Isc0JBQXNCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLGlFQUFlOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3BJZ0I7QUFDTDtBQUNhOztBQUV2QztBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiwrQ0FBTTtBQUNoQyw0QkFBNEIsK0NBQU07QUFDbEMseUJBQXlCLHFEQUFTO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLCtDQUFHO0FBQ25DLGtDQUFrQywrQ0FBRztBQUNyQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7O0FDbEdVOztBQUV6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLFFBQVE7QUFDL0IsMkJBQTJCLFFBQVE7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsNkNBQUk7QUFDakM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlOzs7Ozs7Ozs7Ozs7Ozs7QUM1RXFCO0FBQ3BDO0FBQ0E7QUFDQSw4QkFBOEIsa0RBQVM7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWU7Ozs7Ozs7Ozs7Ozs7O0FDWGY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNwQ2Y7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7QUNBOEI7QUFDVjtBQUNwQix1QkFBdUIsaURBQUk7O0FBRTNCO0FBQ0E7QUFDQSx1QkFBdUIsaURBQUk7QUFDM0I7O0FBRUE7QUFDQSxvRCIsInNvdXJjZXMiOlsid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9ET00vUGxhY2VTaGlwLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL0RPTS9ib3QuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvRE9NL2dhbWUuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvR2FtZWJvYXJkLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL1BsYXllci5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9TaGlwLmpzIiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcImZvbnRzL1Byb3Rlc3RHdWVycmlsbGEtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCJmb250cy9Sb2JvdG9Db25kZW5zZWQtQmxhY2sudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdIZWFkbGluZSc7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG59XG5cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnbXlGb250JztcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbn1cbjpyb290IHtcbiAgICAtLWNlbGwtc2l6ZSA6IDUwcHg7XG4gICAgLS1jZWxsLWJvcmRlci1jb2xvciA6cmdiYSg4NSwgMTAzLCAxNTYsIDAuOCk7XG4gICAgLS1zaGlwLWNvbG9yIDogcmdiKDA0LCAxMTcsIDEyNik7XG4gICAgLS1taXNzLWNvbG9yIDogcmdiKDEzMiwgMTM2LCAxMzIpO1xuICAgIC0taGl0LWdyYWRpZW50IDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLHJnYmEoMjAzLDUzLDYxLDAuOCkscmdiYSgyNDksMTgyLDc4LDAuOCkscmdiYSgyMzcsOTgsNjQsMC44KSk7XG4gICAgLS1oaXQtYm9yZGVyIDogcmdiKDI0OSwxODIsNzgpO1xuICAgIC0tYm9keS1ncmFkaWVudCA6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsI0VFRjVGRiwjQjRENEZGLCM4NkI2RjYsIzE3NkI4Nyk7XG59XG5cbmJvZHl7XG4gICAgZm9udC1mYW1pbHk6ICdteUZvbnQnO1xuICAgIG1hcmdpbjogMDtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB2YXIoLS1ib2R5LWdyYWRpZW50KTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDMwMCU7XG4gICAgYW5pbWF0aW9uOiBiZy1hbmltYXRpb24gMTVzIGluZmluaXRlIGFsdGVybmF0ZTtcbn1cblxuQGtleWZyYW1lcyBiZy1hbmltYXRpb24ge1xuICAgIDAlIHtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdDtcbiAgICB9XG5cbiAgICAxMDAlIHtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQ7XG4gICAgfVxufVxuLmNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uZ3JvdW5ke1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwIDogMTAwcHg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICBcbn1cbi5ncmlkIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLHZhcigtLWNlbGwtc2l6ZSkpO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLHZhcigtLWNlbGwtc2l6ZSkpO1xuICAgIGJvcmRlcjogMC41cHggc29saWQgYmxhY2s7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBcbn1cblxuLnBsYXllci1ncmlkLCAuYWktZ3JpZCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ucGxheWVyLWdyaWQ6OmJlZm9yZSB7XG4gICAgY29udGVudCA6ICdbIFBsYXllciBCb2FyZCBdJztcbn1cblxuLmFpLWdyaWQ6OmJlZm9yZSB7XG4gICAgY29udGVudCA6ICdbIEFJIEJvYXJkIF0nO1xufVxuXG5cbi5wbGF5ZXItZ3JpZDo6YmVmb3JlLCAuYWktZ3JpZDo6YmVmb3JlIHtcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODZCNkY2O1xuICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICAgIGxlZnQ6IDUwJTtcbiAgICAvKiBib3R0b206IGNhbGMoMTAwJSAtIDZweCk7XG4gICAgbGVmdDogMTAlOyAqL1xufVxuLmNlbGx7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY2VsbC1ib3JkZXItY29sb3IpO1xufVxuXG4ucGxhY2luZyAsLnNlbGVjdGVke1xuICAgIGJvcmRlcjogMnB4IGRhc2hlZCByZ2JhKDM0LCA1NywgMzQsIDAuNSkgIWltcG9ydGFudDtcblxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjMsIDIzNSwgMTIzLCAwLjIpOyAqL1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAxMjgsIDEyOCwwLjUpICFpbXBvcnRhbnQ7XG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDE4MGRlZyxyZ2JhKDE5MSwgMjQ2LCAxOTUsIDAuNSksIHJnYmEoMTc2LCAyMzUsIDE4MCwgMC41KSk7ICovXG59XG5cbi5oaXR7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogI2YwNmE0OTsgKi9cbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB2YXIoLS1oaXQtZ3JhZGllbnQpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMzAwJTtcbiAgICBhbmltYXRpb246IGJnLWFuaW1hdGlvbiAxNXMgaW5maW5pdGUgYWx0ZXJuYXRlO1xuICAgIGJvcmRlcjogdmFyKC0taGl0LWJvcmRlcilcbn1cblxuLm1pc3Mge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1pc3MtY29sb3IpO1xufVxuXG4uaGVhZGxpbmUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbmgyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDFlbTtcbiAgICBmb250LXNpemUgOiAzcmVtO1xuICAgIGZvbnQtZmFtaWx5OiAnSGVhZGxpbmUnO1xufVxuXG4uc2hpcCxidXR0b25bZGF0YS12YWx1ZSA9ICc0J10sYnV0dG9uW2RhdGEtdmFsdWUgPSAnMyddLGJ1dHRvbltkYXRhLXZhbHVlID0gJzInXSxidXR0b25bZGF0YS12YWx1ZSA9ICcxJ10ge1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYigxNjIsIDEwNCwgMjE2LDAuNSk7ICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2hpcC1jb2xvcik7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tc2hpcC1jb2xvcik7XG59XG5idXR0b25bZGF0YS12YWx1ZSA9ICc0J10ge1xuICAgIHdpZHRoOiBjYWxjKHZhcigtLWNlbGwtc2l6ZSkgKiA0KTtcbiAgICBoZWlnaHQ6IHZhcigtLWNlbGwtc2l6ZSk7XG59XG5cbmJ1dHRvbltkYXRhLXZhbHVlID0gJzMnXSB7XG4gICAgd2lkdGg6IGNhbGModmFyKC0tY2VsbC1zaXplKSAqIDMpO1xuICAgIGhlaWdodDogdmFyKC0tY2VsbC1zaXplKTtcbn1cblxuYnV0dG9uW2RhdGEtdmFsdWUgPSAnMiddIHtcbiAgICB3aWR0aDogY2FsYyh2YXIoLS1jZWxsLXNpemUpICogMik7XG4gICAgaGVpZ2h0OiB2YXIoLS1jZWxsLXNpemUpO1xufVxuXG5idXR0b25bZGF0YS12YWx1ZSA9ICcxJ10ge1xuICAgIHdpZHRoOiBjYWxjKHZhcigtLWNlbGwtc2l6ZSkgKiAxKTtcbiAgICBoZWlnaHQ6IHZhcigtLWNlbGwtc2l6ZSk7XG59XG5cbi5idXR0b25Db250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDEwcHg7XG59XG5cbi5zaGlwRGl2e1xuICAgIHBhZGRpbmctYmxvY2s6IDEwcHg7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5zaGlwRGl2IHNwYW4ge1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5idXR0b25Db250YWluZXIgYnV0dG9uOm50aC1sYXN0LWNoaWxkKDIpLCAuYnV0dG9uQ29udGFpbmVyIGJ1dHRvbjpsYXN0LWNoaWxkLC5yZXN0YXJ0e1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIGZvbnQtZmFtaWx5OiAnbXlGb250JztcbiAgICBtaW4taGVpZ2h0OiA1MHB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXNoaXAtY29sb3IpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiB2YXIoLS1zaGlwLWNvbG9yKTtcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xufVxuXG4ucmVzdGFydCB7XG5cdGZvbnQtc2l6ZToycmVtO1xuXHRtYXJnaW46IDAgYXV0bztcblx0bWFyZ2luLXRvcDogMWVtO1xuXHRwYWRkaW5nOiAwLjNlbSAxZW07XG59XG5cbi5yZXN0YXJ0OmhvdmVyIHtcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2hpcC1jb2xvcik7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuLmJ1dHRvbkNvbnRhaW5lciBidXR0b246bnRoLWxhc3QtY2hpbGQoMik6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNoaXAtY29sb3IpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmJ1dHRvbkNvbnRhaW5lciBidXR0b246bGFzdC1jaGlsZDpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2hpcC1jb2xvcik7XG4gICAgY29sb3I6IHdoaXRlO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHVCQUF1QjtJQUN2Qiw0Q0FBOEM7QUFDbEQ7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsNENBQTJDO0FBQy9DO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsNENBQTRDO0lBQzVDLGdDQUFnQztJQUNoQyxpQ0FBaUM7SUFDakMsb0dBQW9HO0lBQ3BHLDhCQUE4QjtJQUM5Qix5RUFBeUU7QUFDN0U7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsU0FBUztJQUNULGlCQUFpQjtJQUNqQixzQ0FBc0M7SUFDdEMscUJBQXFCO0lBQ3JCLDhDQUE4QztBQUNsRDs7QUFFQTtJQUNJO1FBQ0kseUJBQXlCO0lBQzdCOztJQUVBO1FBQ0ksMEJBQTBCO0lBQzlCO0FBQ0o7QUFDQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLHVCQUF1Qjs7O0FBRzNCO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isa0RBQWtEO0lBQ2xELCtDQUErQztJQUMvQyx5QkFBeUI7SUFDekIsYUFBYTs7QUFFakI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7OztBQUdBO0lBQ0ksOENBQThDO0lBQzlDLGtCQUFrQjtJQUNsQixnQ0FBZ0M7SUFDaEMseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixTQUFTO0lBQ1Q7Z0JBQ1k7QUFDaEI7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osV0FBVztJQUNYLDBDQUEwQztBQUM5Qzs7QUFFQTtJQUNJLG1EQUFtRDs7SUFFbkQsK0NBQStDO0lBQy9DLGlEQUFpRDtJQUNqRCxrR0FBa0c7QUFDdEc7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0IscUNBQXFDO0lBQ3JDLHFCQUFxQjtJQUNyQiw4Q0FBOEM7SUFDOUM7QUFDSjs7QUFFQTtJQUNJLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLDhDQUE4QztJQUM5QyxtQ0FBbUM7SUFDbkMsbUNBQW1DO0FBQ3ZDO0FBQ0E7SUFDSSxpQ0FBaUM7SUFDakMsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxtQkFBbUI7Q0FDdEIsYUFBYTtDQUNiLG1CQUFtQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixtQ0FBbUM7SUFDbkMsNkJBQTZCO0lBQzdCLHdCQUF3QjtJQUN4QixnQkFBZ0I7QUFDcEI7O0FBRUE7Q0FDQyxjQUFjO0NBQ2QsY0FBYztDQUNkLGVBQWU7Q0FDZixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxtQ0FBbUM7SUFDaEMsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksbUNBQW1DO0lBQ25DLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxtQ0FBbUM7SUFDbkMsWUFBWTtBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdIZWFkbGluZSc7XFxuICAgIHNyYzogdXJsKCdmb250cy9Qcm90ZXN0R3VlcnJpbGxhLVJlZ3VsYXIudHRmJyk7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ215Rm9udCc7XFxuICAgIHNyYzogdXJsKCdmb250cy9Sb2JvdG9Db25kZW5zZWQtQmxhY2sudHRmJyk7XFxufVxcbjpyb290IHtcXG4gICAgLS1jZWxsLXNpemUgOiA1MHB4O1xcbiAgICAtLWNlbGwtYm9yZGVyLWNvbG9yIDpyZ2JhKDg1LCAxMDMsIDE1NiwgMC44KTtcXG4gICAgLS1zaGlwLWNvbG9yIDogcmdiKDA0LCAxMTcsIDEyNik7XFxuICAgIC0tbWlzcy1jb2xvciA6IHJnYigxMzIsIDEzNiwgMTMyKTtcXG4gICAgLS1oaXQtZ3JhZGllbnQgOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcscmdiYSgyMDMsNTMsNjEsMC44KSxyZ2JhKDI0OSwxODIsNzgsMC44KSxyZ2JhKDIzNyw5OCw2NCwwLjgpKTtcXG4gICAgLS1oaXQtYm9yZGVyIDogcmdiKDI0OSwxODIsNzgpO1xcbiAgICAtLWJvZHktZ3JhZGllbnQgOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCNFRUY1RkYsI0I0RDRGRiwjODZCNkY2LCMxNzZCODcpO1xcbn1cXG5cXG5ib2R5e1xcbiAgICBmb250LWZhbWlseTogJ215Rm9udCc7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHZhcigtLWJvZHktZ3JhZGllbnQpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDMwMCU7XFxuICAgIGFuaW1hdGlvbjogYmctYW5pbWF0aW9uIDE1cyBpbmZpbml0ZSBhbHRlcm5hdGU7XFxufVxcblxcbkBrZXlmcmFtZXMgYmctYW5pbWF0aW9uIHtcXG4gICAgMCUge1xcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdDtcXG4gICAgfVxcblxcbiAgICAxMDAlIHtcXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0O1xcbiAgICB9XFxufVxcbi5jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uZ3JvdW5ke1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXAgOiAxMDBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuICAgIFxcbn1cXG4uZ3JpZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLHZhcigtLWNlbGwtc2l6ZSkpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCx2YXIoLS1jZWxsLXNpemUpKTtcXG4gICAgYm9yZGVyOiAwLjVweCBzb2xpZCBibGFjaztcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgXFxufVxcblxcbi5wbGF5ZXItZ3JpZCwgLmFpLWdyaWQge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5wbGF5ZXItZ3JpZDo6YmVmb3JlIHtcXG4gICAgY29udGVudCA6ICdbIFBsYXllciBCb2FyZCBdJztcXG59XFxuXFxuLmFpLWdyaWQ6OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQgOiAnWyBBSSBCb2FyZCBdJztcXG59XFxuXFxuXFxuLnBsYXllci1ncmlkOjpiZWZvcmUsIC5haS1ncmlkOjpiZWZvcmUge1xcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODZCNkY2O1xcbiAgICBsaW5lLWhlaWdodDogMTVweDtcXG4gICAgbGVmdDogNTAlO1xcbiAgICAvKiBib3R0b206IGNhbGMoMTAwJSAtIDZweCk7XFxuICAgIGxlZnQ6IDEwJTsgKi9cXG59XFxuLmNlbGx7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNlbGwtYm9yZGVyLWNvbG9yKTtcXG59XFxuXFxuLnBsYWNpbmcgLC5zZWxlY3RlZHtcXG4gICAgYm9yZGVyOiAycHggZGFzaGVkIHJnYmEoMzQsIDU3LCAzNCwgMC41KSAhaW1wb3J0YW50O1xcblxcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTIzLCAyMzUsIDEyMywgMC4yKTsgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDEyOCwgMTI4LDAuNSkgIWltcG9ydGFudDtcXG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDE4MGRlZyxyZ2JhKDE5MSwgMjQ2LCAxOTUsIDAuNSksIHJnYmEoMTc2LCAyMzUsIDE4MCwgMC41KSk7ICovXFxufVxcblxcbi5oaXR7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICNmMDZhNDk7ICovXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHZhcigtLWhpdC1ncmFkaWVudCk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMzAwJTtcXG4gICAgYW5pbWF0aW9uOiBiZy1hbmltYXRpb24gMTVzIGluZmluaXRlIGFsdGVybmF0ZTtcXG4gICAgYm9yZGVyOiB2YXIoLS1oaXQtYm9yZGVyKVxcbn1cXG5cXG4ubWlzcyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1pc3MtY29sb3IpO1xcbn1cXG5cXG4uaGVhZGxpbmUge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbmgyIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDFlbTtcXG4gICAgZm9udC1zaXplIDogM3JlbTtcXG4gICAgZm9udC1mYW1pbHk6ICdIZWFkbGluZSc7XFxufVxcblxcbi5zaGlwLGJ1dHRvbltkYXRhLXZhbHVlID0gJzQnXSxidXR0b25bZGF0YS12YWx1ZSA9ICczJ10sYnV0dG9uW2RhdGEtdmFsdWUgPSAnMiddLGJ1dHRvbltkYXRhLXZhbHVlID0gJzEnXSB7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYigxNjIsIDEwNCwgMjE2LDAuNSk7ICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNoaXAtY29sb3IpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zaGlwLWNvbG9yKTtcXG59XFxuYnV0dG9uW2RhdGEtdmFsdWUgPSAnNCddIHtcXG4gICAgd2lkdGg6IGNhbGModmFyKC0tY2VsbC1zaXplKSAqIDQpO1xcbiAgICBoZWlnaHQ6IHZhcigtLWNlbGwtc2l6ZSk7XFxufVxcblxcbmJ1dHRvbltkYXRhLXZhbHVlID0gJzMnXSB7XFxuICAgIHdpZHRoOiBjYWxjKHZhcigtLWNlbGwtc2l6ZSkgKiAzKTtcXG4gICAgaGVpZ2h0OiB2YXIoLS1jZWxsLXNpemUpO1xcbn1cXG5cXG5idXR0b25bZGF0YS12YWx1ZSA9ICcyJ10ge1xcbiAgICB3aWR0aDogY2FsYyh2YXIoLS1jZWxsLXNpemUpICogMik7XFxuICAgIGhlaWdodDogdmFyKC0tY2VsbC1zaXplKTtcXG59XFxuXFxuYnV0dG9uW2RhdGEtdmFsdWUgPSAnMSddIHtcXG4gICAgd2lkdGg6IGNhbGModmFyKC0tY2VsbC1zaXplKSAqIDEpO1xcbiAgICBoZWlnaHQ6IHZhcigtLWNlbGwtc2l6ZSk7XFxufVxcblxcbi5idXR0b25Db250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5zaGlwRGl2e1xcbiAgICBwYWRkaW5nLWJsb2NrOiAxMHB4O1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnNoaXBEaXYgc3BhbiB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5idXR0b25Db250YWluZXIgYnV0dG9uOm50aC1sYXN0LWNoaWxkKDIpLCAuYnV0dG9uQ29udGFpbmVyIGJ1dHRvbjpsYXN0LWNoaWxkLC5yZXN0YXJ0e1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgZm9udC1mYW1pbHk6ICdteUZvbnQnO1xcbiAgICBtaW4taGVpZ2h0OiA1MHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1zaGlwLWNvbG9yKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGNvbG9yOiB2YXIoLS1zaGlwLWNvbG9yKTtcXG4gICAgdHJhbnNpdGlvbjogMC4zcztcXG59XFxuXFxuLnJlc3RhcnQge1xcblxcdGZvbnQtc2l6ZToycmVtO1xcblxcdG1hcmdpbjogMCBhdXRvO1xcblxcdG1hcmdpbi10b3A6IDFlbTtcXG5cXHRwYWRkaW5nOiAwLjNlbSAxZW07XFxufVxcblxcbi5yZXN0YXJ0OmhvdmVyIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaGlwLWNvbG9yKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG4uYnV0dG9uQ29udGFpbmVyIGJ1dHRvbjpudGgtbGFzdC1jaGlsZCgyKTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNoaXAtY29sb3IpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5idXR0b25Db250YWluZXIgYnV0dG9uOmxhc3QtY2hpbGQ6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaGlwLWNvbG9yKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgU2hpcCBmcm9tIFwiLi4vU2hpcFwiXG5cbmNsYXNzIFBsYWNlU2hpcCB7XG4gICAgY29uc3RydWN0b3IobmFtZSxnYW1lQm9hcmQsZ3JvdW5kKSB7XG4gICAgICAgIHRoaXMuZ2FtZUJvYXJkID0gZ2FtZUJvYXJkXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWVcbiAgICAgICAgdGhpcy5jZWxscyA9IFtdXG4gICAgICAgIHRoaXMuZ3JvdW5kID0gZ3JvdW5kXG4gICAgICAgIHRoaXMuY3VycmVudFNoaXBTaXplID0gMFxuICAgICAgICB0aGlzLnNoaXBPcmllbnRhdGlvbiA9IFwiSG9yaXpvbnRhbFwiXG4gICAgICAgIHRoaXMuc2hpcF80ID0gMVxuICAgICAgICB0aGlzLnNoaXBfMyA9IDJcbiAgICAgICAgdGhpcy5zaGlwXzIgPSAzXG4gICAgICAgIHRoaXMuc2hpcF8xID0gNFxuICAgICAgICB0aGlzLnNwYW5fMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgICAgICB0aGlzLnNwYW5fMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgICAgICB0aGlzLnNwYW5fMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgICAgICB0aGlzLnNwYW5fNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgICAgICB0aGlzLnNoaXBCdXR0b25zKClcbiAgICB9XG4gICAgXG4gICAgY3JlYXRlU2hpcERpdihjb250YWluZXIsYnV0dG9uLHNwYW4sY291bnQpIHtcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ3NoaXBEaXYnKVxuICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnc2hpcEJ1dHRvbnMnKVxuICAgICAgICBzcGFuLnRleHRDb250ZW50ID0gYHggJHtjb3VudH1gXG4gICAgICAgIGRpdi5hcHBlbmQoYnV0dG9uKVxuICAgICAgICBkaXYuYXBwZW5kKHNwYW4pXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQoZGl2KVxuICAgIH1cblxuICAgIHVwZGF0ZVNoaXBDb3VudCgpIHtcbiAgICAgICAgdGhpcy5zcGFuXzEudGV4dENvbnRlbnQgPSBgeCAke3RoaXMuc2hpcF8xfWBcbiAgICAgICAgdGhpcy5zcGFuXzIudGV4dENvbnRlbnQgPSBgeCAke3RoaXMuc2hpcF8yfWBcbiAgICAgICAgdGhpcy5zcGFuXzMudGV4dENvbnRlbnQgPSBgeCAke3RoaXMuc2hpcF8zfWBcbiAgICAgICAgdGhpcy5zcGFuXzQudGV4dENvbnRlbnQgPSBgeCAke3RoaXMuc2hpcF80fWBcbiAgICB9XG4gICAgdXBkYXRlU2VsZWN0ZWQoKSB7XG4gICAgICAgIEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNoaXBCdXR0b25zJykpLmZvckVhY2goYnV0dG9uID0+IGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpKVxuICAgIH1cbiAgICBzaGlwQnV0dG9ucygpIHtcbiAgICAgICAgY29uc3QgYmVnaW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKSBcbiAgICAgICAgYmVnaW4udGV4dENvbnRlbnQgPSBcIlN0YXJ0XCJcbiAgICAgICAgYmVnaW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBpZih0aGlzLmNoZWNrU2hpcHMoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2VsbHMgPSBbXVxuICAgICAgICAgICAgICAgIHRoaXMuZ3JvdW5kLnRleHRDb250ZW50ID0gJydcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnc2hpcFBsYWNlZCcpKTtcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFsZXJ0KFwicGxhY2UgYWxsIHNoaXBzIGZpcnN0XCIpXG4gICAgICAgIH0pXG5cbiAgICAgICAgY29uc3QgY2hhbmdlT3JpZW50YXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgICBjaGFuZ2VPcmllbnRhdGlvbi50ZXh0Q29udGVudCA9IHRoaXMuc2hpcE9yaWVudGF0aW9uXG5cbiAgICAgICAgY2hhbmdlT3JpZW50YXRpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBpZih0aGlzLnNoaXBPcmllbnRhdGlvbiA9PT0gXCJIb3Jpem9udGFsXCIpIHRoaXMuc2hpcE9yaWVudGF0aW9uID0gXCJWZXJ0aWNhbFwiXG4gICAgICAgICAgICBlbHNlIHRoaXMuc2hpcE9yaWVudGF0aW9uID0gXCJIb3Jpem9udGFsXCJcbiAgICAgICAgICAgIGNoYW5nZU9yaWVudGF0aW9uLnRleHRDb250ZW50ID0gdGhpcy5zaGlwT3JpZW50YXRpb25cbiAgICAgICAgICAgIHRoaXMuY2VsbHMgPSBbXVxuICAgICAgICAgICAgdGhpcy5kaXNwbGF5KClcbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCBidXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBidXR0b25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnYnV0dG9uQ29udGFpbmVyJylcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllcjInKVxuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnZ3JpZCcpXG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdhaS1ncmlkJylcblxuICAgICAgICBjb25zdCBidXR0b25fNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICAgIGJ1dHRvbl80LmRhdGFzZXQudmFsdWUgPSA0XG4gICAgICAgIGJ1dHRvbl80LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYodGhpcy5zaGlwXzQgPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTZWxlY3RlZCgpXG4gICAgICAgICAgICAgICAgYnV0dG9uXzQuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKVxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFNoaXBTaXplID0gNFxuICAgICAgICAgICAgICAgIHRoaXMuY2VsbHMgPSBbXVxuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheSgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cblxuICAgICAgICBjb25zdCBidXR0b25fMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICAgIGJ1dHRvbl8zLmRhdGFzZXQudmFsdWUgPSAzXG4gICAgICAgIGJ1dHRvbl8zLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYodGhpcy5zaGlwXzMgPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTZWxlY3RlZCgpXG4gICAgICAgICAgICAgICAgYnV0dG9uXzMuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKVxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFNoaXBTaXplID0gM1xuICAgICAgICAgICAgICAgIHRoaXMuY2VsbHMgPSBbXVxuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheSgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgY29uc3QgYnV0dG9uXzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgICBidXR0b25fMi5kYXRhc2V0LnZhbHVlID0gMlxuICAgICAgICBidXR0b25fMi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGlmKHRoaXMuc2hpcF8yID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU2VsZWN0ZWQoKVxuICAgICAgICAgICAgICAgIGJ1dHRvbl8yLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJylcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRTaGlwU2l6ZSA9IDJcbiAgICAgICAgICAgICAgICB0aGlzLmNlbGxzID0gW11cbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXkoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IGJ1dHRvbl8xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgYnV0dG9uXzEuZGF0YXNldC52YWx1ZSA9IDFcbiAgICAgICAgYnV0dG9uXzEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBpZih0aGlzLnNoaXBfMSA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVNlbGVjdGVkKClcbiAgICAgICAgICAgICAgICBidXR0b25fMS5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50U2hpcFNpemUgPSAxXG4gICAgICAgICAgICAgICAgdGhpcy5jZWxscyA9IFtdXG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5KClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy5jcmVhdGVTaGlwRGl2KGNvbnRhaW5lcixidXR0b25fNCx0aGlzLnNwYW5fNCwxKVxuICAgICAgICB0aGlzLmNyZWF0ZVNoaXBEaXYoY29udGFpbmVyLGJ1dHRvbl8zLHRoaXMuc3Bhbl8zLDIpXG4gICAgICAgIHRoaXMuY3JlYXRlU2hpcERpdihjb250YWluZXIsYnV0dG9uXzIsdGhpcy5zcGFuXzIsMylcbiAgICAgICAgdGhpcy5jcmVhdGVTaGlwRGl2KGNvbnRhaW5lcixidXR0b25fMSx0aGlzLnNwYW5fMSw0KVxuXG4gICAgICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmQoY2hhbmdlT3JpZW50YXRpb24pXG4gICAgICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmQoYmVnaW4pXG4gICAgICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgICAgcC50ZXh0Q29udGVudCA9IFwiWyByaWdodCBjbGljayBvbiBzaGlwIHRvIHJlbW92ZSBpdCBmcm9tIGJvYXJkIF1cIlxuICAgICAgICBjb250YWluZXIuYXBwZW5kKGJ1dHRvbkNvbnRhaW5lcilcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZChwKVxuICAgIH1cblxuXG4gICAgZGlzcGxheSgpIHtcbiAgICAgICAgdGhpcy5ncm91bmQudGV4dENvbnRlbnQgPSAnJ1xuICAgICAgICBsZXQgYm9hcmQgPSB0aGlzLmdhbWVCb2FyZC5nZXRCb2FyZCgpXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgcm93ID0gW11cbiAgICAgICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdjZWxsJylcbiAgICAgICAgICAgICAgICBjZWxsLmRhdGFzZXQueCA9IGlcbiAgICAgICAgICAgICAgICBjZWxsLmRhdGFzZXQueSA9IGpcbiAgICAgICAgICAgICAgICBjZWxsLmRhdGFzZXQubmFtZSA9IHRoaXMubmFtZVxuXG4gICAgICAgICAgICAgICAgaWYoYm9hcmRbaV1bal0gaW5zdGFuY2VvZiBTaGlwICkge1xuICAgICAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ3NoaXAnKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmdyb3VuZC5hcHBlbmQoY2VsbClcbiAgICAgICAgICAgICAgICByb3cucHVzaChjZWxsKVxuICAgICAgICAgICAgICAgIHRoaXMudGVzdChjZWxsLHRoaXMuY3VycmVudFNoaXBTaXplLHRoaXMuc2hpcE9yaWVudGF0aW9uKVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jZWxscy5wdXNoKHJvdylcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNoZWNrU2hpcHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNoaXBfMSA8PSAwICYmIHRoaXMuc2hpcF8yIDw9IDAgJiYgdGhpcy5zaGlwXzMgPD0gMCAmJiB0aGlzLnNoaXBfNCA8PSAwXG4gICAgfVxuXG4gICAgdGVzdChjZWxsLHNoaXBTaXplLG9yaWVudGF0aW9uKSB7XG4gICAgICAgIGxldCBzaGlwQ29vcmRzID0gW11cbiAgICAgICAgaWYob3JpZW50YXRpb24gPT09IFwiSG9yaXpvbnRhbFwiKSB7XG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgc2hpcFNpemU7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBwb3NpdGlvbiA9IFswLGldXG4gICAgICAgICAgICAgICAgc2hpcENvb3Jkcy5wdXNoKHBvc2l0aW9uKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHNoaXBTaXplOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgcG9zaXRpb24gPSBbaSwwXVxuICAgICAgICAgICAgICAgIHNoaXBDb29yZHMucHVzaChwb3NpdGlvbilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsZXQgY29vcmRzO1xuICAgICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYoc2hpcFNpemUpIHtcblxuICAgICAgICAgICAgICAgIGlmKHRoaXMuZ2FtZUJvYXJkLnZhbGlkYXRlKGNvb3JkcykpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2hpcCA9IG5ldyBTaGlwKHNoaXBTaXplKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWVCb2FyZC5wbGFjZVNoaXAoc2hpcCxjb29yZHMpXG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgW3gseV0gb2YgY29vcmRzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNlbGxzW3hdW3ldLmNsYXNzTGlzdC5hZGQoJ3NoaXAnKVxuICAgICAgICAgICAgICAgICAgICB9ICBcbiAgICAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNlbGxzID0gW11cbiAgICAgICAgICAgICAgICAgICAgaWYoc2hpcFNpemUgPT09IDQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaGlwXzQgLT0gMVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoIXRoaXMuc2hpcF80KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50U2hpcFNpemUgPSAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTZWxlY3RlZCgpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgICAgICAgIGlmKHNoaXBTaXplID09PSAzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNoaXBfMyAtPSAxXG4gICAgICAgICAgICAgICAgICAgICAgICBpZighdGhpcy5zaGlwXzMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRTaGlwU2l6ZSA9IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVNlbGVjdGVkKClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZihzaGlwU2l6ZSA9PT0gMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaGlwXzIgLT0gMVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoIXRoaXMuc2hpcF8yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50U2hpcFNpemUgPSAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTZWxlY3RlZCgpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYoc2hpcFNpemUgPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hpcF8xIC09IDFcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCF0aGlzLnNoaXBfMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFNoaXBTaXplID0gMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU2VsZWN0ZWQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU2hpcENvdW50KClcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheSgpXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cblxuICAgICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB4ID0gcGFyc2VJbnQoY2VsbC5kYXRhc2V0LngpXG4gICAgICAgICAgICBjb25zdCB5ID0gcGFyc2VJbnQoY2VsbC5kYXRhc2V0LnkpXG4gICAgICAgICAgICBjb29yZHMgPSBzaGlwQ29vcmRzLm1hcCgoYSk9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFthWzBdICsgeCwgYVsxXSArIHldXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IHRoaXMuZ2FtZUJvYXJkLnZhbGlkYXRlKGNvb3JkcykgXG4gICAgICAgICAgICBpZihyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBmb3IobGV0IFt4LHldIG9mIGNvb3Jkcykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNlbGxzW3hdW3ldLmNsYXNzTGlzdC5hZGQoJ3BsYWNpbmcnKVxuICAgICAgICAgICAgICAgIH0gICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiB7XG4gICAgICAgICAgICBpZih0aGlzLmdhbWVCb2FyZC52YWxpZGF0ZShjb29yZHMpKSB7XG4gICAgICAgICAgICAgICAgZm9yKGxldCBbeCx5XSBvZiBjb29yZHMpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jZWxsc1t4XVt5XS5jbGFzc0xpc3QucmVtb3ZlKCdwbGFjaW5nJylcbiAgICAgICAgICAgICAgICB9ICBcbiAgICAgICAgICAgIH0gICBcbiAgICAgICAgfSlcbiAgICAgICAgXG4gICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignY29udGV4dG1lbnUnLCAoZSk9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgIGxldCB4ID0gcGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC54KVxuICAgICAgICAgICAgbGV0IHkgPSBwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LnkpXG4gICAgICAgICAgICBsZXQgYm9hcmQgPSB0aGlzLmdhbWVCb2FyZC5nZXRCb2FyZCgpXG4gICAgICAgICAgICBpZihib2FyZFt4XVt5XSBpbnN0YW5jZW9mIFNoaXApIHtcbiAgICAgICAgICAgICAgICBpZihib2FyZFt4XVt5XS5nZXRMZW5ndGgoKSA9PT0gNCkgdGhpcy5zaGlwXzQgKz0gMVxuICAgICAgICAgICAgICAgIGlmKGJvYXJkW3hdW3ldLmdldExlbmd0aCgpID09PSAzKSB0aGlzLnNoaXBfMyArPSAxXG4gICAgICAgICAgICAgICAgaWYoYm9hcmRbeF1beV0uZ2V0TGVuZ3RoKCkgPT09IDIpIHRoaXMuc2hpcF8yICs9IDFcbiAgICAgICAgICAgICAgICBpZihib2FyZFt4XVt5XS5nZXRMZW5ndGgoKSA9PT0gMSkgdGhpcy5zaGlwXzEgKz0gMVxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZUJvYXJkLnJlbW92ZVNoaXAoYm9hcmRbeF1beV0pXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTaGlwQ291bnQoKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jZWxscyA9IFtdXG4gICAgICAgICAgICB0aGlzLmRpc3BsYXkoKVxuICAgICAgICB9KVxuXG4gICAgfVxuIFxufVxuXG5leHBvcnQgZGVmYXVsdCBQbGFjZVNoaXAiLCJpbXBvcnQgU2hpcCBmcm9tIFwiLi4vU2hpcFwiO1xuY2xhc3MgQm90IHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLGdhbWVCb2FyZCxncm91bmQpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZVxuICAgICAgICB0aGlzLmdhbWVCb2FyZCA9IGdhbWVCb2FyZFxuICAgICAgICB0aGlzLmNlbGxzID0gW11cbiAgICAgICAgdGhpcy5hdmFpbGFiZSA9IFtdXG4gICAgICAgIHRoaXMucGxheWVyID0gZ3JvdW5kXG4gICAgICAgIHRoaXMuZ2V0VmFsaWRJbmRleCgpXG4gICAgfVxuXG4gICAgZGlzcGxheSgpIHtcbiAgICAgICAgdGhpcy5wbGF5ZXIudGV4dENvbnRlbnQgPSAnJ1xuICAgICAgICBsZXQgYm9hcmQgPSB0aGlzLmdhbWVCb2FyZC5nZXRCb2FyZCgpXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgcm93ID0gW11cbiAgICAgICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICAgICAgY2VsbC5kYXRhc2V0LnggPSBpXG4gICAgICAgICAgICAgICAgY2VsbC5kYXRhc2V0LnkgPSBqXG4gICAgICAgICAgICAgICAgY2VsbC5kYXRhc2V0Lm5hbWUgPSB0aGlzLm5hbWVcbiAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2NlbGwnKVxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLmFwcGVuZChjZWxsKVxuICAgICAgICAgICAgICAgIHJvdy5wdXNoKGNlbGwpXG5cbiAgICAgICAgICAgICAgICBpZihib2FyZFtpXVtqXSA9PT0gXCJoaXRcIikge1xuICAgICAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZWQnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmKGJvYXJkW2ldW2pdID09PSBcIm1pc3NcIikge1xuICAgICAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdncmVlbidcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZihib2FyZFtpXVtqXSBpbnN0YW5jZW9mIFNoaXAgKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJibHVlXCJcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdzaGlwJylcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY2VsbHMucHVzaChyb3cpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuY2VsbHNcbiAgICB9XG5cbiAgICByZWNpZXZlQXR0YWNrKFt4LHldKSB7XG4gICAgICAgIGxldCBib2FyZCA9IHRoaXMuZ2FtZUJvYXJkLmdldEJvYXJkKClcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5nYW1lQm9hcmQucmVjZWl2ZUF0dGFjayhbeCx5XSlcbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cblxuICAgIGdldFZhbGlkSW5kZXgoKSB7XG4gICAgICAgIGxldCBib2FyZCA9IHRoaXMuZ2FtZUJvYXJkLmdldEJvYXJkKClcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IDEwIDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICAgICAgICAgIGlmKGJvYXJkW2ldW2pdID09PSBudWxsIHx8IGJvYXJkW2ldW2pdIGluc3RhbmNlb2YgU2hpcCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmF2YWlsYWJlLnB1c2goe3g6aSwgeTpqfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gICAgICAgIFxuICAgIH1cblxuICAgIHJhbmRvbUF0dGFjaygpIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLmF2YWlsYWJlLmxlbmd0aClcbiAgICAgICAgbGV0IHt4LHl9ID0gdGhpcy5hdmFpbGFiZVtpbmRleF1cbiAgICAgICAgdGhpcy5hdmFpbGFiZS5zcGxpY2UoaW5kZXgsMSlcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5nYW1lQm9hcmQucmVjZWl2ZUF0dGFjayhbeCx5XSlcbiAgICAgICAgaWYocmVzdWx0ID09PSBcIkhpdFwiKSB7XG4gICAgICAgICAgICAvLyB0aGlzLmNlbGxzW3hdW3ldLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCJcbiAgICAgICAgICAgIHRoaXMuY2VsbHNbeF1beV0uY2xhc3NMaXN0LnJlbW92ZSgnc2hpcCcpXG4gICAgICAgICAgICB0aGlzLmNlbGxzW3hdW3ldLmNsYXNzTGlzdC5hZGQoJ2hpdCcpXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmKHJlc3VsdCA9PT0gXCJNaXNzXCIpIHtcbiAgICAgICAgICAgIC8vIHRoaXMuY2VsbHNbeF1beV0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJncmVlblwiXG4gICAgICAgICAgICB0aGlzLmNlbGxzW3hdW3ldLmNsYXNzTGlzdC5hZGQoJ21pc3MnKVxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICByYW5kb21TaGlwUGxhY2VtZW50KCkge1xuICAgICAgICBcbiAgICAgICAgY29uc3Qgc2hpcDEgPSBuZXcgU2hpcCg0KVxuXG4gICAgICAgIGNvbnN0IHNoaXAyID0gbmV3IFNoaXAoMylcbiAgICAgICAgY29uc3Qgc2hpcDMgPSBuZXcgU2hpcCgzKVxuXG4gICAgICAgIGNvbnN0IHNoaXA0ID0gbmV3IFNoaXAoMilcbiAgICAgICAgY29uc3Qgc2hpcDUgPSBuZXcgU2hpcCgyKVxuICAgICAgICBjb25zdCBzaGlwNiA9IG5ldyBTaGlwKDIpXG5cbiAgICAgICAgY29uc3Qgc2hpcDcgPSBuZXcgU2hpcCgxKVxuICAgICAgICBjb25zdCBzaGlwOCA9IG5ldyBTaGlwKDEpXG4gICAgICAgIGNvbnN0IHNoaXA5ID0gbmV3IFNoaXAoMSlcbiAgICAgICAgY29uc3Qgc2hpcDEwID0gbmV3IFNoaXAoMSlcblxuICAgICAgICBsZXQgc2hpcHMgPSBbc2hpcDEsc2hpcDIsc2hpcDMsc2hpcDQsc2hpcDUsc2hpcDYsc2hpcDcsc2hpcDgsc2hpcDksc2hpcDEwXVxuXG4gICAgICAgIGZ1bmN0aW9uIGdldENvb3JkcyhzaGlwKSB7XG4gICAgICAgICAgICBsZXQgY29vcmRzID0gW11cbiAgICAgICAgICAgIGxldCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApXG4gICAgICAgICAgICBsZXQgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKVxuICAgICAgICAgICAgbGV0IGFsaWduID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMilcbiAgICAgICAgICAgIGlmKGFsaWduID09PSAwKSB7XG4gICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHNoaXAuZ2V0TGVuZ3RoKCk7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjb29yZHMucHVzaChbeCtpLHldKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHNoaXAuZ2V0TGVuZ3RoKCk7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjb29yZHMucHVzaChbeCx5K2ldKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjb29yZHNcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgZm9yKGxldCBzaGlwIG9mIHNoaXBzKSB7IFxuICAgICAgICAgICAgbGV0IGNvb3JkcyA9IGdldENvb3JkcyhzaGlwKVxuICAgICAgICAgICAgd2hpbGUoIXRoaXMuZ2FtZUJvYXJkLnZhbGlkYXRlKGNvb3JkcykpIHtcbiAgICAgICAgICAgICAgICBjb29yZHMgPSBnZXRDb29yZHMoc2hpcClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZ2FtZUJvYXJkLnBsYWNlU2hpcChzaGlwLGNvb3JkcylcbiAgICAgICAgICAgIGlmKHRoaXMuc2hvdykge1xuICAgICAgICAgICAgICAgIGZvcihsZXQgW3gseV0gb2YgY29vcmRzKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuY2VsbHNbeF1beV0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJibHVlXCJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jZWxsc1t4XVt5XS5jbGFzc0xpc3QuYWRkKCdzaGlwJylcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBCb3QiLCJpbXBvcnQgUGxheWVyIGZyb20gXCIuLi9QbGF5ZXJcIjtcbmltcG9ydCBCb3QgZnJvbSBcIi4vYm90LmpzXCJcbmltcG9ydCBQbGFjZVNoaXAgZnJvbSBcIi4vUGxhY2VTaGlwLmpzXCI7XG5cbmNsYXNzIGdhbWUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnBsYXllcjEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyMScpXG4gICAgICAgIHRoaXMucGxheWVyMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXIyJylcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBuZXcgUGxheWVyKClcbiAgICAgICAgdGhpcy5jb21wdXRlciA9IG5ldyBQbGF5ZXIoKVxuICAgICAgICB0aGlzLnN0YXJ0ID0gbmV3IFBsYWNlU2hpcChcInBsYXllclwiLHRoaXMucGxheWVyLmdldEdhbWVCb2FyZCgpLHRoaXMucGxheWVyMSlcbiAgICAgICAgdGhpcy5zdGFydC5kaXNwbGF5KClcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2hpcFBsYWNlZCcsIHRoaXMuc3RhcnRHYW1lLmJpbmQodGhpcykpO1xuICAgIFxuICAgIH1cblxuICAgIGdldFBsYXllcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGxheWVyXG4gICAgfVxuICAgIFxuICAgIGdldENvbXB1dGVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb21wdXRlclxuICAgIH1cblxuICAgIHJlc2V0KCkge1xuICAgICAgICB0aGlzLnBsYXllcjEudGV4dENvbnRlbnQgPSAnJ1xuICAgICAgICB0aGlzLnBsYXllcjIudGV4dENvbnRlbnQgPSAnJ1xuICAgICAgICAvLyB0aGlzLnBsYXllci5nZXRHYW1lQm9hcmQoKS5yZW1vdmVBbGxTaGlwKClcbiAgICAgICAgLy8gdGhpcy5jb21wdXRlci5nZXRHYW1lQm9hcmQoKS5yZW1vdmVBbGxTaGlwKClcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRsaW5lJykudGV4dENvbnRlbnQgPSAnJ1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzdGFydCcpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICB9XG5cbiAgICBzdGFydEdhbWUoKSB7XG4gICAgICAgIHRoaXMucGxheWVyMS5jbGFzc0xpc3QuYWRkKCdncmlkJylcbiAgICAgICAgdGhpcy5wbGF5ZXIyLmNsYXNzTGlzdC5hZGQoJ2dyaWQnKVxuICAgICAgICB0aGlzLnBsYXllcjEuY2xhc3NMaXN0LmFkZCgncGxheWVyLWdyaWQnKVxuICAgICAgICB0aGlzLnBsYXllcjIuY2xhc3NMaXN0LmFkZCgnYWktZ3JpZCcpXG4gICAgICAgIGNvbnN0IGhlYWRsaW5lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRsaW5lJylcbiAgICAgICAgY29uc3QgcGxheWVyQm9hcmQgPSBuZXcgQm90KFwicGxheWVyXCIsdGhpcy5wbGF5ZXIuZ2V0R2FtZUJvYXJkKCksdGhpcy5wbGF5ZXIxKSAgICBcbiAgICAgICAgY29uc3QgY29tcHV0ZXJCb2FyZCA9IG5ldyBCb3QoXCJib3RcIix0aGlzLmNvbXB1dGVyLmdldEdhbWVCb2FyZCgpLHRoaXMucGxheWVyMilcbiAgICAgICAgY29tcHV0ZXJCb2FyZC5yYW5kb21TaGlwUGxhY2VtZW50KClcblxuICAgICAgICBwbGF5ZXJCb2FyZC5kaXNwbGF5KClcbiAgICAgICAgY29tcHV0ZXJCb2FyZC5kaXNwbGF5KClcblxuICAgICAgICBjb25zdCBjb21wdXRlckdhbWVCb2FyZCA9IHRoaXMuY29tcHV0ZXIuZ2V0R2FtZUJvYXJkKClcbiAgICAgICAgY29uc3QgcGxheWVyR2FtZUJvYXJkID0gdGhpcy5wbGF5ZXIuZ2V0R2FtZUJvYXJkKClcbiAgICAgICAgXG4gICAgICAgIGxldCBjdXJyZW50ID0gXCJwbGF5ZXJcIlxuICAgICAgICBoZWFkbGluZS50ZXh0Q29udGVudCA9IFwiUGxheWVyIHR1cm5cIlxuICAgICAgICBjb25zdCBjZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC5jZWxsW2RhdGEtbmFtZT1cImJvdFwiXWApOyAgIFxuXG4gICAgICAgIGZvcihsZXQgY2VsbCBvZiBjZWxscykge1xuICAgICAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIGhhbmRsZUNsaWNrKGUpIHtcbiAgICAgICAgICAgICAgICBsZXQgeCA9IHBhcnNlSW50KGNlbGwuZGF0YXNldC54KVxuICAgICAgICAgICAgICAgIGxldCB5ID0gcGFyc2VJbnQoY2VsbC5kYXRhc2V0LnkpXG4gICAgICAgICAgICAgICAgY29uc3QgbmFtZSA9IGNlbGwuZGF0YXNldC5uYW1lXG4gICAgICAgICAgICAgICAgaWYoY3VycmVudCA9PT0gXCJwbGF5ZXJcIiAmJiBuYW1lID09PSBcImJvdFwiKSB7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGNvbXB1dGVyQm9hcmQucmVjaWV2ZUF0dGFjayhbeCx5XSlcbiAgICAgICAgICAgICAgICAgICAgaWYocmVzdWx0ID09PSBcIkhpdFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBlLnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmVkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnc2hpcCcpXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdoaXQnKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZihyZXN1bHQgPT09IFwiTWlzc1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBlLnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnZ3JlZW4nXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdtaXNzJylcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQ2xpY2spXG4gICAgXG4gICAgICAgICAgICAgICAgaWYoY29tcHV0ZXJHYW1lQm9hcmQuYWxsU3VuaygpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGFsZXJ0KFwicGxheWVyIHdvblwiKVxuICAgICAgICAgICAgICAgICAgICBoZWFkbGluZS50ZXh0Q29udGVudCA9ICdQbGF5ZXIgV29uICEhISdcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc3RhcnQnKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgY3VycmVudCA9IFwiYm90XCI7XG4gICAgICAgICAgICAgICAgaGVhZGxpbmUudGV4dENvbnRlbnQgPSBcIkFJIHR1cm5cIlxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBwbGF5ZXJCb2FyZC5yYW5kb21BdHRhY2soKVxuICAgICAgICAgICAgICAgICAgICBpZihwbGF5ZXJHYW1lQm9hcmQuYWxsU3VuaygpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkbGluZS50ZXh0Q29udGVudCA9IFwiQWkgV29uICEhIVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzdGFydCcpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50ID0gXCJwbGF5ZXJcIlxuICAgICAgICAgICAgICAgICAgICBoZWFkbGluZS50ZXh0Q29udGVudCA9IFwicGxheWVyIHR1cm5cIlxuICAgICAgICAgICAgICAgIH0sMTAwKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2FtZSIsImltcG9ydCBTaGlwIGZyb20gXCIuL1NoaXBcIlxuXG5jbGFzcyBHYW1lQm9hcmQge1xuICAgIGNvbnN0cnVjdG9yKHNpemUgPSAxMCkge1xuICAgICAgICB0aGlzLnNpemUgPSBzaXplXG4gICAgICAgIHRoaXMuYm9hcmQgPSBBcnJheShzaXplKS5maWxsKG51bGwpLm1hcCgoKSA9PiBBcnJheSh0aGlzLnNpemUpLmZpbGwobnVsbCkpXG4gICAgICAgIHRoaXMuc2hpcHMgPSBbXVxuICAgIH1cblxuICAgIHJlbW92ZVNoaXAodGFyZ2V0KSB7XG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMuc2hpcHMuZmluZEluZGV4KChzaGlwKSA9PiBzaGlwID09PSB0YXJnZXQpXG4gICAgICAgIHRoaXMuc2hpcHMuc3BsaWNlKGluZGV4LDEpXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuYm9hcmRbaV1bal0gPT09IHRhcmdldCkgdGhpcy5ib2FyZFtpXVtqXSA9IG51bGxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbW92ZUFsbFNoaXAoKSB7XG4gICAgICAgIHRoaXMuc2hpcCA9IFtdXG4gICAgICAgIHRoaXMuYm9hcmQgPSBBcnJheShzaXplKS5maWxsKG51bGwpLm1hcCgoKSA9PiBBcnJheSh0aGlzLnNpemUpLmZpbGwobnVsbCkpXG4gICAgfVxuXG4gICAgZ2V0Qm9hcmQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJvYXJkXG4gICAgfVxuXG4gICAgZ2V0U2hpcHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNoaXBzXG4gICAgfVxuXG4gICAgdmFsaWRhdGUoY29vcmRzKSB7XG4gICAgICAgIGZvcihsZXQgW3gseV0gb2YgY29vcmRzKSB7XG4gICAgICAgICAgICBpZiAoeCA8IDAgfHwgeCA+PSB0aGlzLnNpemUgfHwgeSA8IDAgfHwgeSA+PSB0aGlzLnNpemUgfHwgdGhpcy5ib2FyZFt4XVt5XSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgcGxhY2VTaGlwKHNoaXAsY29vcmRzKSB7XG5cbiAgICAgICAgaWYodGhpcy52YWxpZGF0ZShjb29yZHMpKSB7XG5cbiAgICAgICAgICAgIGZvcihsZXQgW3gseV0gb2YgY29vcmRzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZFt4XVt5XSA9IHNoaXBcbiAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgIHNoaXAucGxhY2VTaGlwKGNvb3JkcylcbiAgICAgICAgICAgIHRoaXMuc2hpcHMucHVzaChzaGlwKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVjZWl2ZUF0dGFjayhjb29yZHMpIHtcbiAgICAgICAgY29uc3QgW3gseV0gPSBjb29yZHNcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gdGhpcy5ib2FyZFt4XVt5XVxuICAgICAgICBcbiAgICAgICAgaWYodGFyZ2V0IGluc3RhbmNlb2YgU2hpcCAmJiB0YXJnZXQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRhcmdldC5oaXQoKVxuICAgICAgICAgICAgdGhpcy5ib2FyZFt4XVt5XSA9IFwiaGl0XCJcbiAgICAgICAgICAgIHJldHVybiBcIkhpdFwiXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmJvYXJkW3hdW3ldID0gXCJtaXNzXCJcbiAgICAgICAgcmV0dXJuIFwiTWlzc1wiXG4gICAgfVxuXG4gICAgZ2V0Qm9hcmQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJvYXJkXG4gICAgfVxuICAgIGFsbFN1bmsoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNoaXBzLmV2ZXJ5KChzaGlwKSA9PiBzaGlwLmlzU3VuaygpKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVCb2FyZCIsImltcG9ydCBHYW1lQm9hcmQgZnJvbSBcIi4vR2FtZWJvYXJkXCI7XG5jbGFzcyBQbGF5ZXJ7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy4gZ2FtZUJvYXJkID0gbmV3IEdhbWVCb2FyZCgpXG4gICAgfVxuXG4gICAgZ2V0R2FtZUJvYXJkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nYW1lQm9hcmRcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllciIsImNsYXNzIFNoaXAge1xuICAgIGNvbnN0cnVjdG9yKGxlbmd0aCA9IDQpIHtcbiAgICAgICAgdGhpcy5sZW5ndGggPSBsZW5ndGhcbiAgICAgICAgdGhpcy5kYW1hZ2UgPSAwXG4gICAgICAgIHRoaXMuc3VuayA9IGZhbHNlXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBbXVxuICAgIH1cblxuICAgIGhpdCgpIHtcbiAgICAgICAgdGhpcy5kYW1hZ2UgKz0gMVxuICAgIH1cblxuICAgIGdldEhpdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGFtYWdlXG4gICAgfVxuXG4gICAgZ2V0TGVuZ3RoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5sZW5ndGhcbiAgICB9XG4gICAgXG4gICAgaXNTdW5rKCkge1xuICAgICAgICBpZiAodGhpcy5sZW5ndGggPD0gdGhpcy5kYW1hZ2UpIHtcbiAgICAgICAgICAgIHRoaXMuc3VuayA9IHRydWVcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5zdW5rXG4gICAgfVxuICAgIFxuICAgIGdldFBvc2l0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wb3NpdGlvblxuICAgIH1cbiAgICBcbiAgICBwbGFjZVNoaXAocG9zaXRpb24pIHtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaGlwIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBnYW1lIGZyb20gXCIuL0RPTS9nYW1lXCI7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJ1xubGV0IGdhbWVJbnN0YW5jZSA9IG5ldyBnYW1lKClcblxuZnVuY3Rpb24gcmVzdGFydEdhbWUoKSB7XG4gICAgZ2FtZUluc3RhbmNlLnJlc2V0KClcbiAgICBnYW1lSW5zdGFuY2UgPSBuZXcgZ2FtZSgpXG59XG5cbmNvbnN0IHJlc3RhcnRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzdGFydCcpIFxucmVzdGFydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlc3RhcnRHYW1lKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==