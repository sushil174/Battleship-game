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
    --miss-color : rgba(12, 86, 111,.6);
    --hit-gradient : radial-gradient(rgba(203,53,61,0.8),rgba(249,182,78,0.8),rgba(237,98,64,0.8), transparent);
    --hit-border : rgb(249,182,78);
    --body-gradient : linear-gradient(135deg,#B4D4FF,#86B6F6,#176B87);
    --body-color : #86B6F6;
}

body{
    font-family: 'myFont';
    margin: 0;
    min-height: 100vh;
    /* background-image: var(--body-gradient); */
    background-color: var(--body-color);
    /* background-size: 300%;
    animation: bg-animation 15s infinite alternate; */
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
    outline: 0.5px solid black;
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
    transform: translate(-50%,-50%);
    background-color: var(--body-color);
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
    border: 2px dashed rgba(34, 57, 34, 0.5)!important;
    /* background-color: rgb(123, 235, 123, 0.2); */
    background-color: rgb(0, 128, 128,0.5) !important;
    /* background-image: linear-gradient(180deg,rgba(191, 246, 195, 0.5), rgba(176, 235, 180, 0.5)); */
}

.hit{
    /* background-color: #f06a49; */
    background-image: var(--hit-gradient);
    /* background-size: 300%;
    animation: bg-animation 15s infinite alternate; */
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
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,uBAAuB;IACvB,4CAA8C;AAClD;;AAEA;IACI,qBAAqB;IACrB,4CAA2C;AAC/C;AACA;IACI,kBAAkB;IAClB,4CAA4C;IAC5C,gCAAgC;IAChC,mCAAmC;IACnC,2GAA2G;IAC3G,8BAA8B;IAC9B,iEAAiE;IACjE,sBAAsB;AAC1B;;AAEA;IACI,qBAAqB;IACrB,SAAS;IACT,iBAAiB;IACjB,4CAA4C;IAC5C,mCAAmC;IACnC;qDACiD;AACrD;;AAEA;IACI;QACI,yBAAyB;IAC7B;;IAEA;QACI,0BAA0B;IAC9B;AACJ;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,WAAW;IACX,uBAAuB;;;AAG3B;AACA;IACI,aAAa;IACb,kDAAkD;IAClD,+CAA+C;IAC/C,0BAA0B;IAC1B,aAAa;;AAEjB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,wBAAwB;AAC5B;;;AAGA;IACI,8CAA8C;IAC9C,kBAAkB;IAClB,+BAA+B;IAC/B,mCAAmC;IACnC,iBAAiB;IACjB,SAAS;IACT;gBACY;AAChB;AACA;IACI,sBAAsB;IACtB,YAAY;IACZ,WAAW;IACX,0CAA0C;AAC9C;;AAEA;IACI,kDAAkD;IAClD,+CAA+C;IAC/C,iDAAiD;IACjD,kGAAkG;AACtG;;AAEA;IACI,+BAA+B;IAC/B,qCAAqC;IACrC;qDACiD;IACjD;AACJ;;AAEA;IACI,mCAAmC;AACvC;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,YAAY;IACZ,gBAAgB;IAChB,uBAAuB;AAC3B;;AAEA;IACI,8CAA8C;IAC9C,mCAAmC;IACnC,mCAAmC;AACvC;AACA;IACI,iCAAiC;IACjC,wBAAwB;AAC5B;;AAEA;IACI,iCAAiC;IACjC,wBAAwB;AAC5B;;AAEA;IACI,iCAAiC;IACjC,wBAAwB;AAC5B;;AAEA;IACI,iCAAiC;IACjC,wBAAwB;AAC5B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,mBAAmB;CACtB,aAAa;CACb,mBAAmB;AACpB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,iBAAiB;IACjB,qBAAqB;IACrB,gBAAgB;IAChB,mCAAmC;IACnC,6BAA6B;IAC7B,wBAAwB;IACxB,gBAAgB;AACpB;;AAEA;CACC,cAAc;CACd,cAAc;CACd,eAAe;CACf,kBAAkB;AACnB;;AAEA;CACC,mCAAmC;IAChC,YAAY;AAChB;AACA;IACI,mCAAmC;IACnC,YAAY;AAChB;;AAEA;IACI,mCAAmC;IACnC,YAAY;AAChB","sourcesContent":["@font-face {\n    font-family: 'Headline';\n    src: url('fonts/ProtestGuerrilla-Regular.ttf');\n}\n\n@font-face {\n    font-family: 'myFont';\n    src: url('fonts/RobotoCondensed-Black.ttf');\n}\n:root {\n    --cell-size : 50px;\n    --cell-border-color :rgba(85, 103, 156, 0.8);\n    --ship-color : rgb(04, 117, 126);\n    --miss-color : rgba(12, 86, 111,.6);\n    --hit-gradient : radial-gradient(rgba(203,53,61,0.8),rgba(249,182,78,0.8),rgba(237,98,64,0.8), transparent);\n    --hit-border : rgb(249,182,78);\n    --body-gradient : linear-gradient(135deg,#B4D4FF,#86B6F6,#176B87);\n    --body-color : #86B6F6;\n}\n\nbody{\n    font-family: 'myFont';\n    margin: 0;\n    min-height: 100vh;\n    /* background-image: var(--body-gradient); */\n    background-color: var(--body-color);\n    /* background-size: 300%;\n    animation: bg-animation 15s infinite alternate; */\n}\n\n@keyframes bg-animation {\n    0% {\n        background-position: left;\n    }\n\n    100% {\n        background-position: right;\n    }\n}\n\n.container {\n    display: flex;\n    flex-direction: column;\n}\n\n.ground{\n    display: flex;\n    gap : 100px;\n    justify-content: center;\n\n    \n}\n.grid {\n    display: grid;\n    grid-template-columns: repeat(10,var(--cell-size));\n    grid-template-rows: repeat(10,var(--cell-size));\n    outline: 0.5px solid black;\n    padding: 10px;\n    \n}\n\n.player-grid, .ai-grid {\n    position: relative;\n}\n\n.player-grid::before {\n    content : '[ Player Board ]';\n}\n\n.ai-grid::before {\n    content : '[ AI Board ]';\n}\n\n\n.player-grid::before, .ai-grid::before {\n    font-family: 'Courier New', Courier, monospace;\n    position: absolute;\n    transform: translate(-50%,-50%);\n    background-color: var(--body-color);\n    line-height: 15px;\n    left: 50%;\n    /* bottom: calc(100% - 6px);\n    left: 10%; */\n}\n.cell{\n    box-sizing: border-box;\n    height: 50px;\n    width: 50px;\n    border: 1px solid var(--cell-border-color);\n}\n\n.placing ,.selected{\n    border: 2px dashed rgba(34, 57, 34, 0.5)!important;\n    /* background-color: rgb(123, 235, 123, 0.2); */\n    background-color: rgb(0, 128, 128,0.5) !important;\n    /* background-image: linear-gradient(180deg,rgba(191, 246, 195, 0.5), rgba(176, 235, 180, 0.5)); */\n}\n\n.hit{\n    /* background-color: #f06a49; */\n    background-image: var(--hit-gradient);\n    /* background-size: 300%;\n    animation: bg-animation 15s infinite alternate; */\n    border: var(--hit-border)\n}\n\n.miss {\n    background-color: var(--miss-color);\n}\n\n.headline {\n    text-align: center;\n    margin-bottom: 1em;\n    font-size: 1.5rem;\n}\n\nh2 {\n    text-align: center;\n    margin: 0;\n    padding: 1em;\n    font-size : 3rem;\n    font-family: 'Headline';\n}\n\n.ship,button[data-value = '4'],button[data-value = '3'],button[data-value = '2'],button[data-value = '1'] {\n    /* background-color: rgb(162, 104, 216,0.5); */\n    background-color: var(--ship-color);\n    border: 1px solid var(--ship-color);\n}\nbutton[data-value = '4'] {\n    width: calc(var(--cell-size) * 4);\n    height: var(--cell-size);\n}\n\nbutton[data-value = '3'] {\n    width: calc(var(--cell-size) * 3);\n    height: var(--cell-size);\n}\n\nbutton[data-value = '2'] {\n    width: calc(var(--cell-size) * 2);\n    height: var(--cell-size);\n}\n\nbutton[data-value = '1'] {\n    width: calc(var(--cell-size) * 1);\n    height: var(--cell-size);\n}\n\n.buttonContainer {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n.shipDiv{\n    padding-block: 10px;\n\tdisplay: flex;\n\talign-items: center;\n}\n\n.shipDiv span {\n    padding: 10px;\n}\n\n.buttonContainer button:nth-last-child(2), .buttonContainer button:last-child,.restart{\n    font-size: 1.2rem;\n    font-family: 'myFont';\n    min-height: 50px;\n    border: 2px solid var(--ship-color);\n    background-color: transparent;\n    color: var(--ship-color);\n    transition: 0.3s;\n}\n\n.restart {\n\tfont-size:2rem;\n\tmargin: 0 auto;\n\tmargin-top: 1em;\n\tpadding: 0.3em 1em;\n}\n\n.restart:hover {\n\tbackground-color: var(--ship-color);\n    color: white;\n}\n.buttonContainer button:nth-last-child(2):hover {\n    background-color: var(--ship-color);\n    color: white;\n}\n\n.buttonContainer button:last-child:hover {\n    background-color: var(--ship-color);\n    color: white;\n}"],"sourceRoot":""}]);
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
                    this.cells[x][y].classList.remove('not-valid')
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

                if(board[i][j] instanceof _Ship__WEBPACK_IMPORTED_MODULE_0__["default"] ) {
                    // cell.style.backgroundColor = "blue"
					if(this.name === "player")
                    	cell.classList.add('ship')
                }
            }
            this.cells.push(row)
        }
        return this.cells
    }

    sunkedShip() {
        const ships = this.gameBoard.getShips() 
        for(let ship of ships) {
            if(ship.isSunk()) {
                const coords = ship.getPosition() 
                for(let [x,y] of coords) {
                    this.cells[x][y].style.backgroundColor = "purple"
                }
            }
        }
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
					if(this.name === "player")
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
                if(current === "player")
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
                        headline.textContent = "AI Won !!!"
                        document.querySelector('.restart').style.display = 'block'
                        return
                    }
                    current = "player"
                    headline.textContent = "Player turn"
                },500)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLG1KQUFxRDtBQUNqRyw0Q0FBNEMsNklBQWtEO0FBQzlGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUNBQW1DO0FBQ2xEOztBQUVBO0FBQ0E7QUFDQSxlQUFlLG1DQUFtQztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDO0FBQy9DO0FBQ0E7QUFDQSxvREFBb0Q7QUFDcEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBLHFHQUFxRztBQUNyRzs7QUFFQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0Esb0RBQW9EO0FBQ3BEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpREFBaUQ7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGdGQUFnRixZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsTUFBTSxPQUFPLE9BQU8sS0FBSyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsY0FBYyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFFBQVEsS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxLQUFLLE1BQU0sTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxNQUFNLE9BQU8sTUFBTSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZ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Q0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDYjBCOztBQUUxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLE1BQU07QUFDdEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1Q0FBdUMsWUFBWTtBQUNuRCx1Q0FBdUMsWUFBWTtBQUNuRCx1Q0FBdUMsWUFBWTtBQUNuRCx1Q0FBdUMsWUFBWTtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7O0FBR1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLFFBQVE7QUFDL0I7QUFDQSwyQkFBMkIsUUFBUTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDBDQUEwQyw2Q0FBSTtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNwQ2Y7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7QUNBOEI7QUFDVjtBQUNwQix1QkFBdUIsaURBQUk7O0FBRTNCO0FBQ0E7QUFDQSx1QkFBdUIsaURBQUk7QUFDM0I7O0FBRUE7QUFDQSxvRCIsInNvdXJjZXMiOlsid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9ET00vUGxhY2VTaGlwLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL0RPTS9ib3QuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvRE9NL2dhbWUuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvR2FtZWJvYXJkLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL1BsYXllci5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9TaGlwLmpzIiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcImZvbnRzL1Byb3Rlc3RHdWVycmlsbGEtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCJmb250cy9Sb2JvdG9Db25kZW5zZWQtQmxhY2sudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdIZWFkbGluZSc7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG59XG5cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnbXlGb250JztcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbn1cbjpyb290IHtcbiAgICAtLWNlbGwtc2l6ZSA6IDUwcHg7XG4gICAgLS1jZWxsLWJvcmRlci1jb2xvciA6cmdiYSg4NSwgMTAzLCAxNTYsIDAuOCk7XG4gICAgLS1zaGlwLWNvbG9yIDogcmdiKDA0LCAxMTcsIDEyNik7XG4gICAgLS1taXNzLWNvbG9yIDogcmdiYSgxMiwgODYsIDExMSwuNik7XG4gICAgLS1oaXQtZ3JhZGllbnQgOiByYWRpYWwtZ3JhZGllbnQocmdiYSgyMDMsNTMsNjEsMC44KSxyZ2JhKDI0OSwxODIsNzgsMC44KSxyZ2JhKDIzNyw5OCw2NCwwLjgpLCB0cmFuc3BhcmVudCk7XG4gICAgLS1oaXQtYm9yZGVyIDogcmdiKDI0OSwxODIsNzgpO1xuICAgIC0tYm9keS1ncmFkaWVudCA6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsI0I0RDRGRiwjODZCNkY2LCMxNzZCODcpO1xuICAgIC0tYm9keS1jb2xvciA6ICM4NkI2RjY7XG59XG5cbmJvZHl7XG4gICAgZm9udC1mYW1pbHk6ICdteUZvbnQnO1xuICAgIG1hcmdpbjogMDtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB2YXIoLS1ib2R5LWdyYWRpZW50KTsgKi9cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib2R5LWNvbG9yKTtcbiAgICAvKiBiYWNrZ3JvdW5kLXNpemU6IDMwMCU7XG4gICAgYW5pbWF0aW9uOiBiZy1hbmltYXRpb24gMTVzIGluZmluaXRlIGFsdGVybmF0ZTsgKi9cbn1cblxuQGtleWZyYW1lcyBiZy1hbmltYXRpb24ge1xuICAgIDAlIHtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdDtcbiAgICB9XG5cbiAgICAxMDAlIHtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQ7XG4gICAgfVxufVxuXG4uY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5ncm91bmR7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXAgOiAxMDBweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgIFxufVxuLmdyaWQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsdmFyKC0tY2VsbC1zaXplKSk7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsdmFyKC0tY2VsbC1zaXplKSk7XG4gICAgb3V0bGluZTogMC41cHggc29saWQgYmxhY2s7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBcbn1cblxuLnBsYXllci1ncmlkLCAuYWktZ3JpZCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ucGxheWVyLWdyaWQ6OmJlZm9yZSB7XG4gICAgY29udGVudCA6ICdbIFBsYXllciBCb2FyZCBdJztcbn1cblxuLmFpLWdyaWQ6OmJlZm9yZSB7XG4gICAgY29udGVudCA6ICdbIEFJIEJvYXJkIF0nO1xufVxuXG5cbi5wbGF5ZXItZ3JpZDo6YmVmb3JlLCAuYWktZ3JpZDo6YmVmb3JlIHtcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvZHktY29sb3IpO1xuICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICAgIGxlZnQ6IDUwJTtcbiAgICAvKiBib3R0b206IGNhbGMoMTAwJSAtIDZweCk7XG4gICAgbGVmdDogMTAlOyAqL1xufVxuLmNlbGx7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY2VsbC1ib3JkZXItY29sb3IpO1xufVxuXG4ucGxhY2luZyAsLnNlbGVjdGVke1xuICAgIGJvcmRlcjogMnB4IGRhc2hlZCByZ2JhKDM0LCA1NywgMzQsIDAuNSkhaW1wb3J0YW50O1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjMsIDIzNSwgMTIzLCAwLjIpOyAqL1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAxMjgsIDEyOCwwLjUpICFpbXBvcnRhbnQ7XG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDE4MGRlZyxyZ2JhKDE5MSwgMjQ2LCAxOTUsIDAuNSksIHJnYmEoMTc2LCAyMzUsIDE4MCwgMC41KSk7ICovXG59XG5cbi5oaXR7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogI2YwNmE0OTsgKi9cbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB2YXIoLS1oaXQtZ3JhZGllbnQpO1xuICAgIC8qIGJhY2tncm91bmQtc2l6ZTogMzAwJTtcbiAgICBhbmltYXRpb246IGJnLWFuaW1hdGlvbiAxNXMgaW5maW5pdGUgYWx0ZXJuYXRlOyAqL1xuICAgIGJvcmRlcjogdmFyKC0taGl0LWJvcmRlcilcbn1cblxuLm1pc3Mge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1pc3MtY29sb3IpO1xufVxuXG4uaGVhZGxpbmUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbmgyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDFlbTtcbiAgICBmb250LXNpemUgOiAzcmVtO1xuICAgIGZvbnQtZmFtaWx5OiAnSGVhZGxpbmUnO1xufVxuXG4uc2hpcCxidXR0b25bZGF0YS12YWx1ZSA9ICc0J10sYnV0dG9uW2RhdGEtdmFsdWUgPSAnMyddLGJ1dHRvbltkYXRhLXZhbHVlID0gJzInXSxidXR0b25bZGF0YS12YWx1ZSA9ICcxJ10ge1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYigxNjIsIDEwNCwgMjE2LDAuNSk7ICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2hpcC1jb2xvcik7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tc2hpcC1jb2xvcik7XG59XG5idXR0b25bZGF0YS12YWx1ZSA9ICc0J10ge1xuICAgIHdpZHRoOiBjYWxjKHZhcigtLWNlbGwtc2l6ZSkgKiA0KTtcbiAgICBoZWlnaHQ6IHZhcigtLWNlbGwtc2l6ZSk7XG59XG5cbmJ1dHRvbltkYXRhLXZhbHVlID0gJzMnXSB7XG4gICAgd2lkdGg6IGNhbGModmFyKC0tY2VsbC1zaXplKSAqIDMpO1xuICAgIGhlaWdodDogdmFyKC0tY2VsbC1zaXplKTtcbn1cblxuYnV0dG9uW2RhdGEtdmFsdWUgPSAnMiddIHtcbiAgICB3aWR0aDogY2FsYyh2YXIoLS1jZWxsLXNpemUpICogMik7XG4gICAgaGVpZ2h0OiB2YXIoLS1jZWxsLXNpemUpO1xufVxuXG5idXR0b25bZGF0YS12YWx1ZSA9ICcxJ10ge1xuICAgIHdpZHRoOiBjYWxjKHZhcigtLWNlbGwtc2l6ZSkgKiAxKTtcbiAgICBoZWlnaHQ6IHZhcigtLWNlbGwtc2l6ZSk7XG59XG5cbi5idXR0b25Db250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDEwcHg7XG59XG5cbi5zaGlwRGl2e1xuICAgIHBhZGRpbmctYmxvY2s6IDEwcHg7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5zaGlwRGl2IHNwYW4ge1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5idXR0b25Db250YWluZXIgYnV0dG9uOm50aC1sYXN0LWNoaWxkKDIpLCAuYnV0dG9uQ29udGFpbmVyIGJ1dHRvbjpsYXN0LWNoaWxkLC5yZXN0YXJ0e1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIGZvbnQtZmFtaWx5OiAnbXlGb250JztcbiAgICBtaW4taGVpZ2h0OiA1MHB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXNoaXAtY29sb3IpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiB2YXIoLS1zaGlwLWNvbG9yKTtcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xufVxuXG4ucmVzdGFydCB7XG5cdGZvbnQtc2l6ZToycmVtO1xuXHRtYXJnaW46IDAgYXV0bztcblx0bWFyZ2luLXRvcDogMWVtO1xuXHRwYWRkaW5nOiAwLjNlbSAxZW07XG59XG5cbi5yZXN0YXJ0OmhvdmVyIHtcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2hpcC1jb2xvcik7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuLmJ1dHRvbkNvbnRhaW5lciBidXR0b246bnRoLWxhc3QtY2hpbGQoMik6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNoaXAtY29sb3IpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmJ1dHRvbkNvbnRhaW5lciBidXR0b246bGFzdC1jaGlsZDpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2hpcC1jb2xvcik7XG4gICAgY29sb3I6IHdoaXRlO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHVCQUF1QjtJQUN2Qiw0Q0FBOEM7QUFDbEQ7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsNENBQTJDO0FBQy9DO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsNENBQTRDO0lBQzVDLGdDQUFnQztJQUNoQyxtQ0FBbUM7SUFDbkMsMkdBQTJHO0lBQzNHLDhCQUE4QjtJQUM5QixpRUFBaUU7SUFDakUsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFNBQVM7SUFDVCxpQkFBaUI7SUFDakIsNENBQTRDO0lBQzVDLG1DQUFtQztJQUNuQztxREFDaUQ7QUFDckQ7O0FBRUE7SUFDSTtRQUNJLHlCQUF5QjtJQUM3Qjs7SUFFQTtRQUNJLDBCQUEwQjtJQUM5QjtBQUNKOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsdUJBQXVCOzs7QUFHM0I7QUFDQTtJQUNJLGFBQWE7SUFDYixrREFBa0Q7SUFDbEQsK0NBQStDO0lBQy9DLDBCQUEwQjtJQUMxQixhQUFhOztBQUVqQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1Qjs7O0FBR0E7SUFDSSw4Q0FBOEM7SUFDOUMsa0JBQWtCO0lBQ2xCLCtCQUErQjtJQUMvQixtQ0FBbUM7SUFDbkMsaUJBQWlCO0lBQ2pCLFNBQVM7SUFDVDtnQkFDWTtBQUNoQjtBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixXQUFXO0lBQ1gsMENBQTBDO0FBQzlDOztBQUVBO0lBQ0ksa0RBQWtEO0lBQ2xELCtDQUErQztJQUMvQyxpREFBaUQ7SUFDakQsa0dBQWtHO0FBQ3RHOztBQUVBO0lBQ0ksK0JBQStCO0lBQy9CLHFDQUFxQztJQUNyQztxREFDaUQ7SUFDakQ7QUFDSjs7QUFFQTtJQUNJLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLDhDQUE4QztJQUM5QyxtQ0FBbUM7SUFDbkMsbUNBQW1DO0FBQ3ZDO0FBQ0E7SUFDSSxpQ0FBaUM7SUFDakMsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxtQkFBbUI7Q0FDdEIsYUFBYTtDQUNiLG1CQUFtQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixtQ0FBbUM7SUFDbkMsNkJBQTZCO0lBQzdCLHdCQUF3QjtJQUN4QixnQkFBZ0I7QUFDcEI7O0FBRUE7Q0FDQyxjQUFjO0NBQ2QsY0FBYztDQUNkLGVBQWU7Q0FDZixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxtQ0FBbUM7SUFDaEMsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksbUNBQW1DO0lBQ25DLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxtQ0FBbUM7SUFDbkMsWUFBWTtBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdIZWFkbGluZSc7XFxuICAgIHNyYzogdXJsKCdmb250cy9Qcm90ZXN0R3VlcnJpbGxhLVJlZ3VsYXIudHRmJyk7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ215Rm9udCc7XFxuICAgIHNyYzogdXJsKCdmb250cy9Sb2JvdG9Db25kZW5zZWQtQmxhY2sudHRmJyk7XFxufVxcbjpyb290IHtcXG4gICAgLS1jZWxsLXNpemUgOiA1MHB4O1xcbiAgICAtLWNlbGwtYm9yZGVyLWNvbG9yIDpyZ2JhKDg1LCAxMDMsIDE1NiwgMC44KTtcXG4gICAgLS1zaGlwLWNvbG9yIDogcmdiKDA0LCAxMTcsIDEyNik7XFxuICAgIC0tbWlzcy1jb2xvciA6IHJnYmEoMTIsIDg2LCAxMTEsLjYpO1xcbiAgICAtLWhpdC1ncmFkaWVudCA6IHJhZGlhbC1ncmFkaWVudChyZ2JhKDIwMyw1Myw2MSwwLjgpLHJnYmEoMjQ5LDE4Miw3OCwwLjgpLHJnYmEoMjM3LDk4LDY0LDAuOCksIHRyYW5zcGFyZW50KTtcXG4gICAgLS1oaXQtYm9yZGVyIDogcmdiKDI0OSwxODIsNzgpO1xcbiAgICAtLWJvZHktZ3JhZGllbnQgOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCNCNEQ0RkYsIzg2QjZGNiwjMTc2Qjg3KTtcXG4gICAgLS1ib2R5LWNvbG9yIDogIzg2QjZGNjtcXG59XFxuXFxuYm9keXtcXG4gICAgZm9udC1mYW1pbHk6ICdteUZvbnQnO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB2YXIoLS1ib2R5LWdyYWRpZW50KTsgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9keS1jb2xvcik7XFxuICAgIC8qIGJhY2tncm91bmQtc2l6ZTogMzAwJTtcXG4gICAgYW5pbWF0aW9uOiBiZy1hbmltYXRpb24gMTVzIGluZmluaXRlIGFsdGVybmF0ZTsgKi9cXG59XFxuXFxuQGtleWZyYW1lcyBiZy1hbmltYXRpb24ge1xcbiAgICAwJSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0O1xcbiAgICB9XFxuXFxuICAgIDEwMCUge1xcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQ7XFxuICAgIH1cXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5ncm91bmR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcCA6IDEwMHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gICAgXFxufVxcbi5ncmlkIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsdmFyKC0tY2VsbC1zaXplKSk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLHZhcigtLWNlbGwtc2l6ZSkpO1xcbiAgICBvdXRsaW5lOiAwLjVweCBzb2xpZCBibGFjaztcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgXFxufVxcblxcbi5wbGF5ZXItZ3JpZCwgLmFpLWdyaWQge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5wbGF5ZXItZ3JpZDo6YmVmb3JlIHtcXG4gICAgY29udGVudCA6ICdbIFBsYXllciBCb2FyZCBdJztcXG59XFxuXFxuLmFpLWdyaWQ6OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQgOiAnWyBBSSBCb2FyZCBdJztcXG59XFxuXFxuXFxuLnBsYXllci1ncmlkOjpiZWZvcmUsIC5haS1ncmlkOjpiZWZvcmUge1xcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvZHktY29sb3IpO1xcbiAgICBsaW5lLWhlaWdodDogMTVweDtcXG4gICAgbGVmdDogNTAlO1xcbiAgICAvKiBib3R0b206IGNhbGMoMTAwJSAtIDZweCk7XFxuICAgIGxlZnQ6IDEwJTsgKi9cXG59XFxuLmNlbGx7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNlbGwtYm9yZGVyLWNvbG9yKTtcXG59XFxuXFxuLnBsYWNpbmcgLC5zZWxlY3RlZHtcXG4gICAgYm9yZGVyOiAycHggZGFzaGVkIHJnYmEoMzQsIDU3LCAzNCwgMC41KSFpbXBvcnRhbnQ7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjMsIDIzNSwgMTIzLCAwLjIpOyAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMTI4LCAxMjgsMC41KSAhaW1wb3J0YW50O1xcbiAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLHJnYmEoMTkxLCAyNDYsIDE5NSwgMC41KSwgcmdiYSgxNzYsIDIzNSwgMTgwLCAwLjUpKTsgKi9cXG59XFxuXFxuLmhpdHtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogI2YwNmE0OTsgKi9cXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdmFyKC0taGl0LWdyYWRpZW50KTtcXG4gICAgLyogYmFja2dyb3VuZC1zaXplOiAzMDAlO1xcbiAgICBhbmltYXRpb246IGJnLWFuaW1hdGlvbiAxNXMgaW5maW5pdGUgYWx0ZXJuYXRlOyAqL1xcbiAgICBib3JkZXI6IHZhcigtLWhpdC1ib3JkZXIpXFxufVxcblxcbi5taXNzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWlzcy1jb2xvcik7XFxufVxcblxcbi5oZWFkbGluZSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuaDIge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMWVtO1xcbiAgICBmb250LXNpemUgOiAzcmVtO1xcbiAgICBmb250LWZhbWlseTogJ0hlYWRsaW5lJztcXG59XFxuXFxuLnNoaXAsYnV0dG9uW2RhdGEtdmFsdWUgPSAnNCddLGJ1dHRvbltkYXRhLXZhbHVlID0gJzMnXSxidXR0b25bZGF0YS12YWx1ZSA9ICcyJ10sYnV0dG9uW2RhdGEtdmFsdWUgPSAnMSddIHtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2MiwgMTA0LCAyMTYsMC41KTsgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2hpcC1jb2xvcik7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXNoaXAtY29sb3IpO1xcbn1cXG5idXR0b25bZGF0YS12YWx1ZSA9ICc0J10ge1xcbiAgICB3aWR0aDogY2FsYyh2YXIoLS1jZWxsLXNpemUpICogNCk7XFxuICAgIGhlaWdodDogdmFyKC0tY2VsbC1zaXplKTtcXG59XFxuXFxuYnV0dG9uW2RhdGEtdmFsdWUgPSAnMyddIHtcXG4gICAgd2lkdGg6IGNhbGModmFyKC0tY2VsbC1zaXplKSAqIDMpO1xcbiAgICBoZWlnaHQ6IHZhcigtLWNlbGwtc2l6ZSk7XFxufVxcblxcbmJ1dHRvbltkYXRhLXZhbHVlID0gJzInXSB7XFxuICAgIHdpZHRoOiBjYWxjKHZhcigtLWNlbGwtc2l6ZSkgKiAyKTtcXG4gICAgaGVpZ2h0OiB2YXIoLS1jZWxsLXNpemUpO1xcbn1cXG5cXG5idXR0b25bZGF0YS12YWx1ZSA9ICcxJ10ge1xcbiAgICB3aWR0aDogY2FsYyh2YXIoLS1jZWxsLXNpemUpICogMSk7XFxuICAgIGhlaWdodDogdmFyKC0tY2VsbC1zaXplKTtcXG59XFxuXFxuLmJ1dHRvbkNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLnNoaXBEaXZ7XFxuICAgIHBhZGRpbmctYmxvY2s6IDEwcHg7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uc2hpcERpdiBzcGFuIHtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLmJ1dHRvbkNvbnRhaW5lciBidXR0b246bnRoLWxhc3QtY2hpbGQoMiksIC5idXR0b25Db250YWluZXIgYnV0dG9uOmxhc3QtY2hpbGQsLnJlc3RhcnR7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBmb250LWZhbWlseTogJ215Rm9udCc7XFxuICAgIG1pbi1oZWlnaHQ6IDUwcHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXNoaXAtY29sb3IpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgY29sb3I6IHZhcigtLXNoaXAtY29sb3IpO1xcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xcbn1cXG5cXG4ucmVzdGFydCB7XFxuXFx0Zm9udC1zaXplOjJyZW07XFxuXFx0bWFyZ2luOiAwIGF1dG87XFxuXFx0bWFyZ2luLXRvcDogMWVtO1xcblxcdHBhZGRpbmc6IDAuM2VtIDFlbTtcXG59XFxuXFxuLnJlc3RhcnQ6aG92ZXIge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNoaXAtY29sb3IpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcbi5idXR0b25Db250YWluZXIgYnV0dG9uOm50aC1sYXN0LWNoaWxkKDIpOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2hpcC1jb2xvcik7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmJ1dHRvbkNvbnRhaW5lciBidXR0b246bGFzdC1jaGlsZDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNoaXAtY29sb3IpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBTaGlwIGZyb20gXCIuLi9TaGlwXCJcblxuY2xhc3MgUGxhY2VTaGlwIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLGdhbWVCb2FyZCxncm91bmQpIHtcbiAgICAgICAgdGhpcy5nYW1lQm9hcmQgPSBnYW1lQm9hcmRcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZVxuICAgICAgICB0aGlzLmNlbGxzID0gW11cbiAgICAgICAgdGhpcy5ncm91bmQgPSBncm91bmRcbiAgICAgICAgdGhpcy5jdXJyZW50U2hpcFNpemUgPSAwXG4gICAgICAgIHRoaXMuc2hpcE9yaWVudGF0aW9uID0gXCJIb3Jpem9udGFsXCJcbiAgICAgICAgdGhpcy5zaGlwXzQgPSAxXG4gICAgICAgIHRoaXMuc2hpcF8zID0gMlxuICAgICAgICB0aGlzLnNoaXBfMiA9IDNcbiAgICAgICAgdGhpcy5zaGlwXzEgPSA0XG4gICAgICAgIHRoaXMuc3Bhbl8xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgICAgIHRoaXMuc3Bhbl8yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgICAgIHRoaXMuc3Bhbl8zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgICAgIHRoaXMuc3Bhbl80ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgICAgIHRoaXMuc2hpcEJ1dHRvbnMoKVxuICAgIH1cbiAgICBcbiAgICBjcmVhdGVTaGlwRGl2KGNvbnRhaW5lcixidXR0b24sc3Bhbixjb3VudCkge1xuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgnc2hpcERpdicpXG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdzaGlwQnV0dG9ucycpXG4gICAgICAgIHNwYW4udGV4dENvbnRlbnQgPSBgeCAke2NvdW50fWBcbiAgICAgICAgZGl2LmFwcGVuZChidXR0b24pXG4gICAgICAgIGRpdi5hcHBlbmQoc3BhbilcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZChkaXYpXG4gICAgfVxuXG4gICAgdXBkYXRlU2hpcENvdW50KCkge1xuICAgICAgICB0aGlzLnNwYW5fMS50ZXh0Q29udGVudCA9IGB4ICR7dGhpcy5zaGlwXzF9YFxuICAgICAgICB0aGlzLnNwYW5fMi50ZXh0Q29udGVudCA9IGB4ICR7dGhpcy5zaGlwXzJ9YFxuICAgICAgICB0aGlzLnNwYW5fMy50ZXh0Q29udGVudCA9IGB4ICR7dGhpcy5zaGlwXzN9YFxuICAgICAgICB0aGlzLnNwYW5fNC50ZXh0Q29udGVudCA9IGB4ICR7dGhpcy5zaGlwXzR9YFxuICAgIH1cbiAgICB1cGRhdGVTZWxlY3RlZCgpIHtcbiAgICAgICAgQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2hpcEJ1dHRvbnMnKSkuZm9yRWFjaChidXR0b24gPT4gYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJykpXG4gICAgfVxuICAgIHNoaXBCdXR0b25zKCkge1xuICAgICAgICBjb25zdCBiZWdpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpIFxuICAgICAgICBiZWdpbi50ZXh0Q29udGVudCA9IFwiU3RhcnRcIlxuICAgICAgICBiZWdpbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGlmKHRoaXMuY2hlY2tTaGlwcygpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jZWxscyA9IFtdXG4gICAgICAgICAgICAgICAgdGhpcy5ncm91bmQudGV4dENvbnRlbnQgPSAnJ1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdzaGlwUGxhY2VkJykpO1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYWxlcnQoXCJwbGFjZSBhbGwgc2hpcHMgZmlyc3RcIilcbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCBjaGFuZ2VPcmllbnRhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICAgIGNoYW5nZU9yaWVudGF0aW9uLnRleHRDb250ZW50ID0gdGhpcy5zaGlwT3JpZW50YXRpb25cblxuICAgICAgICBjaGFuZ2VPcmllbnRhdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGlmKHRoaXMuc2hpcE9yaWVudGF0aW9uID09PSBcIkhvcml6b250YWxcIikgdGhpcy5zaGlwT3JpZW50YXRpb24gPSBcIlZlcnRpY2FsXCJcbiAgICAgICAgICAgIGVsc2UgdGhpcy5zaGlwT3JpZW50YXRpb24gPSBcIkhvcml6b250YWxcIlxuICAgICAgICAgICAgY2hhbmdlT3JpZW50YXRpb24udGV4dENvbnRlbnQgPSB0aGlzLnNoaXBPcmllbnRhdGlvblxuICAgICAgICAgICAgdGhpcy5jZWxscyA9IFtdXG4gICAgICAgICAgICB0aGlzLmRpc3BsYXkoKVxuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGJ1dHRvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdidXR0b25Db250YWluZXInKVxuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyMicpXG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdncmlkJylcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2FpLWdyaWQnKVxuXG4gICAgICAgIGNvbnN0IGJ1dHRvbl80ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgYnV0dG9uXzQuZGF0YXNldC52YWx1ZSA9IDRcbiAgICAgICAgYnV0dG9uXzQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBpZih0aGlzLnNoaXBfNCA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVNlbGVjdGVkKClcbiAgICAgICAgICAgICAgICBidXR0b25fNC5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50U2hpcFNpemUgPSA0XG4gICAgICAgICAgICAgICAgdGhpcy5jZWxscyA9IFtdXG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5KClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuXG4gICAgICAgIGNvbnN0IGJ1dHRvbl8zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgYnV0dG9uXzMuZGF0YXNldC52YWx1ZSA9IDNcbiAgICAgICAgYnV0dG9uXzMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBpZih0aGlzLnNoaXBfMyA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVNlbGVjdGVkKClcbiAgICAgICAgICAgICAgICBidXR0b25fMy5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50U2hpcFNpemUgPSAzXG4gICAgICAgICAgICAgICAgdGhpcy5jZWxscyA9IFtdXG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5KClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCBidXR0b25fMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICAgIGJ1dHRvbl8yLmRhdGFzZXQudmFsdWUgPSAyXG4gICAgICAgIGJ1dHRvbl8yLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYodGhpcy5zaGlwXzIgPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTZWxlY3RlZCgpXG4gICAgICAgICAgICAgICAgYnV0dG9uXzIuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKVxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFNoaXBTaXplID0gMlxuICAgICAgICAgICAgICAgIHRoaXMuY2VsbHMgPSBbXVxuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheSgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgY29uc3QgYnV0dG9uXzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgICBidXR0b25fMS5kYXRhc2V0LnZhbHVlID0gMVxuICAgICAgICBidXR0b25fMS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGlmKHRoaXMuc2hpcF8xID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU2VsZWN0ZWQoKVxuICAgICAgICAgICAgICAgIGJ1dHRvbl8xLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJylcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRTaGlwU2l6ZSA9IDFcbiAgICAgICAgICAgICAgICB0aGlzLmNlbGxzID0gW11cbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXkoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICB0aGlzLmNyZWF0ZVNoaXBEaXYoY29udGFpbmVyLGJ1dHRvbl80LHRoaXMuc3Bhbl80LDEpXG4gICAgICAgIHRoaXMuY3JlYXRlU2hpcERpdihjb250YWluZXIsYnV0dG9uXzMsdGhpcy5zcGFuXzMsMilcbiAgICAgICAgdGhpcy5jcmVhdGVTaGlwRGl2KGNvbnRhaW5lcixidXR0b25fMix0aGlzLnNwYW5fMiwzKVxuICAgICAgICB0aGlzLmNyZWF0ZVNoaXBEaXYoY29udGFpbmVyLGJ1dHRvbl8xLHRoaXMuc3Bhbl8xLDQpXG5cbiAgICAgICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZChjaGFuZ2VPcmllbnRhdGlvbilcbiAgICAgICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZChiZWdpbilcbiAgICAgICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgICBwLnRleHRDb250ZW50ID0gXCJbIHJpZ2h0IGNsaWNrIG9uIHNoaXAgdG8gcmVtb3ZlIGl0IGZyb20gYm9hcmQgXVwiXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQoYnV0dG9uQ29udGFpbmVyKVxuICAgICAgICBjb250YWluZXIuYXBwZW5kKHApXG4gICAgfVxuXG5cbiAgICBkaXNwbGF5KCkge1xuICAgICAgICB0aGlzLmdyb3VuZC50ZXh0Q29udGVudCA9ICcnXG4gICAgICAgIGxldCBib2FyZCA9IHRoaXMuZ2FtZUJvYXJkLmdldEJvYXJkKClcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgICAgIGxldCByb3cgPSBbXVxuICAgICAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2NlbGwnKVxuICAgICAgICAgICAgICAgIGNlbGwuZGF0YXNldC54ID0gaVxuICAgICAgICAgICAgICAgIGNlbGwuZGF0YXNldC55ID0galxuICAgICAgICAgICAgICAgIGNlbGwuZGF0YXNldC5uYW1lID0gdGhpcy5uYW1lXG5cbiAgICAgICAgICAgICAgICBpZihib2FyZFtpXVtqXSBpbnN0YW5jZW9mIFNoaXAgKSB7XG4gICAgICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnc2hpcCcpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuZ3JvdW5kLmFwcGVuZChjZWxsKVxuICAgICAgICAgICAgICAgIHJvdy5wdXNoKGNlbGwpXG4gICAgICAgICAgICAgICAgdGhpcy50ZXN0KGNlbGwsdGhpcy5jdXJyZW50U2hpcFNpemUsdGhpcy5zaGlwT3JpZW50YXRpb24pXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNlbGxzLnB1c2gocm93KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hlY2tTaGlwcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2hpcF8xIDw9IDAgJiYgdGhpcy5zaGlwXzIgPD0gMCAmJiB0aGlzLnNoaXBfMyA8PSAwICYmIHRoaXMuc2hpcF80IDw9IDBcbiAgICB9XG5cbiAgICB0ZXN0KGNlbGwsc2hpcFNpemUsb3JpZW50YXRpb24pIHtcbiAgICAgICAgbGV0IHNoaXBDb29yZHMgPSBbXVxuICAgICAgICBpZihvcmllbnRhdGlvbiA9PT0gXCJIb3Jpem9udGFsXCIpIHtcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBzaGlwU2l6ZTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IHBvc2l0aW9uID0gWzAsaV1cbiAgICAgICAgICAgICAgICBzaGlwQ29vcmRzLnB1c2gocG9zaXRpb24pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgc2hpcFNpemU7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBwb3NpdGlvbiA9IFtpLDBdXG4gICAgICAgICAgICAgICAgc2hpcENvb3Jkcy5wdXNoKHBvc2l0aW9uKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGxldCBjb29yZHM7XG5cbiAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGlmKHNoaXBTaXplKSB7XG5cbiAgICAgICAgICAgICAgICBpZih0aGlzLmdhbWVCb2FyZC52YWxpZGF0ZShjb29yZHMpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNoaXAgPSBuZXcgU2hpcChzaGlwU2l6ZSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lQm9hcmQucGxhY2VTaGlwKHNoaXAsY29vcmRzKVxuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IFt4LHldIG9mIGNvb3Jkcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jZWxsc1t4XVt5XS5jbGFzc0xpc3QuYWRkKCdzaGlwJylcbiAgICAgICAgICAgICAgICAgICAgfSAgXG4gICAgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jZWxscyA9IFtdXG4gICAgICAgICAgICAgICAgICAgIGlmKHNoaXBTaXplID09PSA0KXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hpcF80IC09IDFcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCF0aGlzLnNoaXBfNCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFNoaXBTaXplID0gMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU2VsZWN0ZWQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICAgICAgICBpZihzaGlwU2l6ZSA9PT0gMykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaGlwXzMgLT0gMVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoIXRoaXMuc2hpcF8zKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50U2hpcFNpemUgPSAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTZWxlY3RlZCgpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYoc2hpcFNpemUgPT09IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hpcF8yIC09IDFcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCF0aGlzLnNoaXBfMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFNoaXBTaXplID0gMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU2VsZWN0ZWQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmKHNoaXBTaXplID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNoaXBfMSAtPSAxXG4gICAgICAgICAgICAgICAgICAgICAgICBpZighdGhpcy5zaGlwXzEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRTaGlwU2l6ZSA9IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVNlbGVjdGVkKClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVNoaXBDb3VudCgpXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXkoKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG5cbiAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgeCA9IHBhcnNlSW50KGNlbGwuZGF0YXNldC54KVxuICAgICAgICAgICAgY29uc3QgeSA9IHBhcnNlSW50KGNlbGwuZGF0YXNldC55KVxuICAgICAgICAgICAgY29vcmRzID0gc2hpcENvb3Jkcy5tYXAoKGEpPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBbYVswXSArIHgsIGFbMV0gKyB5XVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSB0aGlzLmdhbWVCb2FyZC52YWxpZGF0ZShjb29yZHMpIFxuICAgICAgICAgICAgaWYocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgZm9yKGxldCBbeCx5XSBvZiBjb29yZHMpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jZWxsc1t4XVt5XS5jbGFzc0xpc3QuYWRkKCdwbGFjaW5nJylcbiAgICAgICAgICAgICAgICB9ICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYodGhpcy5nYW1lQm9hcmQudmFsaWRhdGUoY29vcmRzKSkge1xuICAgICAgICAgICAgICAgIGZvcihsZXQgW3gseV0gb2YgY29vcmRzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2VsbHNbeF1beV0uY2xhc3NMaXN0LnJlbW92ZSgncGxhY2luZycpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2VsbHNbeF1beV0uY2xhc3NMaXN0LnJlbW92ZSgnbm90LXZhbGlkJylcbiAgICAgICAgICAgICAgICB9ICBcbiAgICAgICAgICAgIH0gICBcblxuICAgICAgICB9KVxuICAgICAgICBcbiAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdjb250ZXh0bWVudScsIChlKT0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgbGV0IHggPSBwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LngpXG4gICAgICAgICAgICBsZXQgeSA9IHBhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQueSlcbiAgICAgICAgICAgIGxldCBib2FyZCA9IHRoaXMuZ2FtZUJvYXJkLmdldEJvYXJkKClcbiAgICAgICAgICAgIGlmKGJvYXJkW3hdW3ldIGluc3RhbmNlb2YgU2hpcCkge1xuICAgICAgICAgICAgICAgIGlmKGJvYXJkW3hdW3ldLmdldExlbmd0aCgpID09PSA0KSB0aGlzLnNoaXBfNCArPSAxXG4gICAgICAgICAgICAgICAgaWYoYm9hcmRbeF1beV0uZ2V0TGVuZ3RoKCkgPT09IDMpIHRoaXMuc2hpcF8zICs9IDFcbiAgICAgICAgICAgICAgICBpZihib2FyZFt4XVt5XS5nZXRMZW5ndGgoKSA9PT0gMikgdGhpcy5zaGlwXzIgKz0gMVxuICAgICAgICAgICAgICAgIGlmKGJvYXJkW3hdW3ldLmdldExlbmd0aCgpID09PSAxKSB0aGlzLnNoaXBfMSArPSAxXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lQm9hcmQucmVtb3ZlU2hpcChib2FyZFt4XVt5XSlcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVNoaXBDb3VudCgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNlbGxzID0gW11cbiAgICAgICAgICAgIHRoaXMuZGlzcGxheSgpXG4gICAgICAgIH0pXG5cbiAgICB9XG4gXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBsYWNlU2hpcCIsImltcG9ydCBTaGlwIGZyb20gXCIuLi9TaGlwXCI7XG5jbGFzcyBCb3Qge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsZ2FtZUJvYXJkLGdyb3VuZCkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lXG4gICAgICAgIHRoaXMuZ2FtZUJvYXJkID0gZ2FtZUJvYXJkXG4gICAgICAgIHRoaXMuY2VsbHMgPSBbXVxuICAgICAgICB0aGlzLmF2YWlsYWJlID0gW11cbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBncm91bmRcbiAgICAgICAgdGhpcy5nZXRWYWxpZEluZGV4KClcbiAgICB9XG5cbiAgICBkaXNwbGF5KCkge1xuICAgICAgICB0aGlzLnBsYXllci50ZXh0Q29udGVudCA9ICcnXG4gICAgICAgIGxldCBib2FyZCA9IHRoaXMuZ2FtZUJvYXJkLmdldEJvYXJkKClcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgICAgIGxldCByb3cgPSBbXVxuICAgICAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgICAgICBjZWxsLmRhdGFzZXQueCA9IGlcbiAgICAgICAgICAgICAgICBjZWxsLmRhdGFzZXQueSA9IGpcbiAgICAgICAgICAgICAgICBjZWxsLmRhdGFzZXQubmFtZSA9IHRoaXMubmFtZVxuICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnY2VsbCcpXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIuYXBwZW5kKGNlbGwpXG4gICAgICAgICAgICAgICAgcm93LnB1c2goY2VsbClcblxuICAgICAgICAgICAgICAgIGlmKGJvYXJkW2ldW2pdIGluc3RhbmNlb2YgU2hpcCApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImJsdWVcIlxuXHRcdFx0XHRcdGlmKHRoaXMubmFtZSA9PT0gXCJwbGF5ZXJcIilcbiAgICAgICAgICAgICAgICAgICAgXHRjZWxsLmNsYXNzTGlzdC5hZGQoJ3NoaXAnKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY2VsbHMucHVzaChyb3cpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuY2VsbHNcbiAgICB9XG5cbiAgICBzdW5rZWRTaGlwKCkge1xuICAgICAgICBjb25zdCBzaGlwcyA9IHRoaXMuZ2FtZUJvYXJkLmdldFNoaXBzKCkgXG4gICAgICAgIGZvcihsZXQgc2hpcCBvZiBzaGlwcykge1xuICAgICAgICAgICAgaWYoc2hpcC5pc1N1bmsoKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvb3JkcyA9IHNoaXAuZ2V0UG9zaXRpb24oKSBcbiAgICAgICAgICAgICAgICBmb3IobGV0IFt4LHldIG9mIGNvb3Jkcykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNlbGxzW3hdW3ldLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicHVycGxlXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcmVjaWV2ZUF0dGFjayhbeCx5XSkge1xuICAgICAgICBsZXQgYm9hcmQgPSB0aGlzLmdhbWVCb2FyZC5nZXRCb2FyZCgpXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuZ2FtZUJvYXJkLnJlY2VpdmVBdHRhY2soW3gseV0pXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG5cbiAgICBnZXRWYWxpZEluZGV4KCkge1xuICAgICAgICBsZXQgYm9hcmQgPSB0aGlzLmdhbWVCb2FyZC5nZXRCb2FyZCgpXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCAxMCA7IGkrKykge1xuICAgICAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZihib2FyZFtpXVtqXSA9PT0gbnVsbCB8fCBib2FyZFtpXVtqXSBpbnN0YW5jZW9mIFNoaXApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hdmFpbGFiZS5wdXNoKHt4OmksIHk6an0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9ICAgICAgICBcbiAgICB9XG5cbiAgICByYW5kb21BdHRhY2soKSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5hdmFpbGFiZS5sZW5ndGgpXG4gICAgICAgIGxldCB7eCx5fSA9IHRoaXMuYXZhaWxhYmVbaW5kZXhdXG4gICAgICAgIHRoaXMuYXZhaWxhYmUuc3BsaWNlKGluZGV4LDEpXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuZ2FtZUJvYXJkLnJlY2VpdmVBdHRhY2soW3gseV0pXG4gICAgICAgIGlmKHJlc3VsdCA9PT0gXCJIaXRcIikge1xuICAgICAgICAgICAgLy8gdGhpcy5jZWxsc1t4XVt5XS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJlZFwiXG4gICAgICAgICAgICB0aGlzLmNlbGxzW3hdW3ldLmNsYXNzTGlzdC5yZW1vdmUoJ3NoaXAnKVxuICAgICAgICAgICAgdGhpcy5jZWxsc1t4XVt5XS5jbGFzc0xpc3QuYWRkKCdoaXQnKVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZihyZXN1bHQgPT09IFwiTWlzc1wiKSB7XG4gICAgICAgICAgICAvLyB0aGlzLmNlbGxzW3hdW3ldLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiZ3JlZW5cIlxuICAgICAgICAgICAgdGhpcy5jZWxsc1t4XVt5XS5jbGFzc0xpc3QuYWRkKCdtaXNzJylcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgcmFuZG9tU2hpcFBsYWNlbWVudCgpIHtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHNoaXAxID0gbmV3IFNoaXAoNClcblxuICAgICAgICBjb25zdCBzaGlwMiA9IG5ldyBTaGlwKDMpXG4gICAgICAgIGNvbnN0IHNoaXAzID0gbmV3IFNoaXAoMylcblxuICAgICAgICBjb25zdCBzaGlwNCA9IG5ldyBTaGlwKDIpXG4gICAgICAgIGNvbnN0IHNoaXA1ID0gbmV3IFNoaXAoMilcbiAgICAgICAgY29uc3Qgc2hpcDYgPSBuZXcgU2hpcCgyKVxuXG4gICAgICAgIGNvbnN0IHNoaXA3ID0gbmV3IFNoaXAoMSlcbiAgICAgICAgY29uc3Qgc2hpcDggPSBuZXcgU2hpcCgxKVxuICAgICAgICBjb25zdCBzaGlwOSA9IG5ldyBTaGlwKDEpXG4gICAgICAgIGNvbnN0IHNoaXAxMCA9IG5ldyBTaGlwKDEpXG5cbiAgICAgICAgbGV0IHNoaXBzID0gW3NoaXAxLHNoaXAyLHNoaXAzLHNoaXA0LHNoaXA1LHNoaXA2LHNoaXA3LHNoaXA4LHNoaXA5LHNoaXAxMF1cblxuICAgICAgICBmdW5jdGlvbiBnZXRDb29yZHMoc2hpcCkge1xuICAgICAgICAgICAgbGV0IGNvb3JkcyA9IFtdXG4gICAgICAgICAgICBsZXQgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKVxuICAgICAgICAgICAgbGV0IHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMClcbiAgICAgICAgICAgIGxldCBhbGlnbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpXG4gICAgICAgICAgICBpZihhbGlnbiA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBzaGlwLmdldExlbmd0aCgpOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29vcmRzLnB1c2goW3graSx5XSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBzaGlwLmdldExlbmd0aCgpOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29vcmRzLnB1c2goW3gseStpXSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY29vcmRzXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGZvcihsZXQgc2hpcCBvZiBzaGlwcykgeyBcbiAgICAgICAgICAgIGxldCBjb29yZHMgPSBnZXRDb29yZHMoc2hpcClcbiAgICAgICAgICAgIHdoaWxlKCF0aGlzLmdhbWVCb2FyZC52YWxpZGF0ZShjb29yZHMpKSB7XG4gICAgICAgICAgICAgICAgY29vcmRzID0gZ2V0Q29vcmRzKHNoaXApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmdhbWVCb2FyZC5wbGFjZVNoaXAoc2hpcCxjb29yZHMpXG4gICAgICAgICAgICBpZih0aGlzLnNob3cpIHtcbiAgICAgICAgICAgICAgICBmb3IobGV0IFt4LHldIG9mIGNvb3Jkcykge1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmNlbGxzW3hdW3ldLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiYmx1ZVwiXG5cdFx0XHRcdFx0aWYodGhpcy5uYW1lID09PSBcInBsYXllclwiKVxuICAgICAgICAgICAgICAgICAgICBcdHRoaXMuY2VsbHNbeF1beV0uY2xhc3NMaXN0LmFkZCgnc2hpcCcpXG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm90IiwiaW1wb3J0IFBsYXllciBmcm9tIFwiLi4vUGxheWVyXCI7XG5pbXBvcnQgQm90IGZyb20gXCIuL2JvdC5qc1wiXG5pbXBvcnQgUGxhY2VTaGlwIGZyb20gXCIuL1BsYWNlU2hpcC5qc1wiO1xuXG5jbGFzcyBnYW1lIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5wbGF5ZXIxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllcjEnKVxuICAgICAgICB0aGlzLnBsYXllcjIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyMicpXG4gICAgICAgIHRoaXMucGxheWVyID0gbmV3IFBsYXllcigpXG4gICAgICAgIHRoaXMuY29tcHV0ZXIgPSBuZXcgUGxheWVyKClcbiAgICAgICAgdGhpcy5zdGFydCA9IG5ldyBQbGFjZVNoaXAoXCJwbGF5ZXJcIix0aGlzLnBsYXllci5nZXRHYW1lQm9hcmQoKSx0aGlzLnBsYXllcjEpXG4gICAgICAgIHRoaXMuc3RhcnQuZGlzcGxheSgpXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3NoaXBQbGFjZWQnLCB0aGlzLnN0YXJ0R2FtZS5iaW5kKHRoaXMpKTtcbiAgICBcbiAgICB9XG5cbiAgICBnZXRQbGF5ZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBsYXllclxuICAgIH1cbiAgICBcbiAgICBnZXRDb21wdXRlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcHV0ZXJcbiAgICB9XG5cbiAgICByZXNldCgpIHtcbiAgICAgICAgdGhpcy5wbGF5ZXIxLnRleHRDb250ZW50ID0gJydcbiAgICAgICAgdGhpcy5wbGF5ZXIyLnRleHRDb250ZW50ID0gJydcbiAgICAgICAgLy8gdGhpcy5wbGF5ZXIuZ2V0R2FtZUJvYXJkKCkucmVtb3ZlQWxsU2hpcCgpXG4gICAgICAgIC8vIHRoaXMuY29tcHV0ZXIuZ2V0R2FtZUJvYXJkKCkucmVtb3ZlQWxsU2hpcCgpXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkbGluZScpLnRleHRDb250ZW50ID0gJydcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc3RhcnQnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgfVxuXG4gICAgc3RhcnRHYW1lKCkge1xuICAgICAgICB0aGlzLnBsYXllcjEuY2xhc3NMaXN0LmFkZCgnZ3JpZCcpXG4gICAgICAgIHRoaXMucGxheWVyMi5jbGFzc0xpc3QuYWRkKCdncmlkJylcbiAgICAgICAgdGhpcy5wbGF5ZXIxLmNsYXNzTGlzdC5hZGQoJ3BsYXllci1ncmlkJylcbiAgICAgICAgdGhpcy5wbGF5ZXIyLmNsYXNzTGlzdC5hZGQoJ2FpLWdyaWQnKVxuICAgICAgICBjb25zdCBoZWFkbGluZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkbGluZScpXG4gICAgICAgIGNvbnN0IHBsYXllckJvYXJkID0gbmV3IEJvdChcInBsYXllclwiLHRoaXMucGxheWVyLmdldEdhbWVCb2FyZCgpLHRoaXMucGxheWVyMSkgICAgXG4gICAgICAgIGNvbnN0IGNvbXB1dGVyQm9hcmQgPSBuZXcgQm90KFwiYm90XCIsdGhpcy5jb21wdXRlci5nZXRHYW1lQm9hcmQoKSx0aGlzLnBsYXllcjIpXG4gICAgICAgIGNvbXB1dGVyQm9hcmQucmFuZG9tU2hpcFBsYWNlbWVudCgpXG5cbiAgICAgICAgcGxheWVyQm9hcmQuZGlzcGxheSgpXG4gICAgICAgIGNvbXB1dGVyQm9hcmQuZGlzcGxheSgpXG5cbiAgICAgICAgY29uc3QgY29tcHV0ZXJHYW1lQm9hcmQgPSB0aGlzLmNvbXB1dGVyLmdldEdhbWVCb2FyZCgpXG4gICAgICAgIGNvbnN0IHBsYXllckdhbWVCb2FyZCA9IHRoaXMucGxheWVyLmdldEdhbWVCb2FyZCgpXG4gICAgICAgIFxuICAgICAgICBsZXQgY3VycmVudCA9IFwicGxheWVyXCJcbiAgICAgICAgaGVhZGxpbmUudGV4dENvbnRlbnQgPSBcIlBsYXllciB0dXJuXCJcbiAgICAgICAgY29uc3QgY2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAuY2VsbFtkYXRhLW5hbWU9XCJib3RcIl1gKTsgICBcblxuICAgICAgICBmb3IobGV0IGNlbGwgb2YgY2VsbHMpIHtcbiAgICAgICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiBoYW5kbGVDbGljayhlKSB7XG4gICAgICAgICAgICAgICAgbGV0IHggPSBwYXJzZUludChjZWxsLmRhdGFzZXQueClcbiAgICAgICAgICAgICAgICBsZXQgeSA9IHBhcnNlSW50KGNlbGwuZGF0YXNldC55KVxuICAgICAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBjZWxsLmRhdGFzZXQubmFtZVxuICAgICAgICAgICAgICAgIGlmKGN1cnJlbnQgPT09IFwicGxheWVyXCIgJiYgbmFtZSA9PT0gXCJib3RcIikge1xuICAgIFxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBjb21wdXRlckJvYXJkLnJlY2lldmVBdHRhY2soW3gseV0pXG4gICAgICAgICAgICAgICAgICAgIGlmKHJlc3VsdCA9PT0gXCJIaXRcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZS50YXJnZXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JlZCdcbiAgICAgICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ3NoaXAnKVxuICAgICAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnaGl0JylcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYocmVzdWx0ID09PSBcIk1pc3NcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZS50YXJnZXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2dyZWVuJ1xuICAgICAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnbWlzcycpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYoY3VycmVudCA9PT0gXCJwbGF5ZXJcIilcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUNsaWNrKVxuICAgIFxuICAgICAgICAgICAgICAgIGlmKGNvbXB1dGVyR2FtZUJvYXJkLmFsbFN1bmsoKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBhbGVydChcInBsYXllciB3b25cIilcbiAgICAgICAgICAgICAgICAgICAgaGVhZGxpbmUudGV4dENvbnRlbnQgPSAnUGxheWVyIFdvbiAhISEnXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXN0YXJ0Jykuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgIGN1cnJlbnQgPSBcImJvdFwiO1xuICAgICAgICAgICAgICAgIGhlYWRsaW5lLnRleHRDb250ZW50ID0gXCJBSSB0dXJuXCJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyQm9hcmQucmFuZG9tQXR0YWNrKClcbiAgICAgICAgICAgICAgICAgICAgaWYocGxheWVyR2FtZUJvYXJkLmFsbFN1bmsoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGxpbmUudGV4dENvbnRlbnQgPSBcIkFJIFdvbiAhISFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc3RhcnQnKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY3VycmVudCA9IFwicGxheWVyXCJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGxpbmUudGV4dENvbnRlbnQgPSBcIlBsYXllciB0dXJuXCJcbiAgICAgICAgICAgICAgICB9LDUwMClcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdhbWUiLCJpbXBvcnQgU2hpcCBmcm9tIFwiLi9TaGlwXCJcblxuY2xhc3MgR2FtZUJvYXJkIHtcbiAgICBjb25zdHJ1Y3RvcihzaXplID0gMTApIHtcbiAgICAgICAgdGhpcy5zaXplID0gc2l6ZVxuICAgICAgICB0aGlzLmJvYXJkID0gQXJyYXkoc2l6ZSkuZmlsbChudWxsKS5tYXAoKCkgPT4gQXJyYXkodGhpcy5zaXplKS5maWxsKG51bGwpKVxuICAgICAgICB0aGlzLnNoaXBzID0gW11cbiAgICB9XG5cbiAgICByZW1vdmVTaGlwKHRhcmdldCkge1xuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLnNoaXBzLmZpbmRJbmRleCgoc2hpcCkgPT4gc2hpcCA9PT0gdGFyZ2V0KVxuICAgICAgICB0aGlzLnNoaXBzLnNwbGljZShpbmRleCwxKVxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZih0aGlzLmJvYXJkW2ldW2pdID09PSB0YXJnZXQpIHRoaXMuYm9hcmRbaV1bal0gPSBudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW1vdmVBbGxTaGlwKCkge1xuICAgICAgICB0aGlzLnNoaXAgPSBbXVxuICAgICAgICB0aGlzLmJvYXJkID0gQXJyYXkoc2l6ZSkuZmlsbChudWxsKS5tYXAoKCkgPT4gQXJyYXkodGhpcy5zaXplKS5maWxsKG51bGwpKVxuICAgIH1cblxuICAgIGdldEJvYXJkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ib2FyZFxuICAgIH1cblxuICAgIGdldFNoaXBzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zaGlwc1xuICAgIH1cblxuICAgIHZhbGlkYXRlKGNvb3Jkcykge1xuICAgICAgICBmb3IobGV0IFt4LHldIG9mIGNvb3Jkcykge1xuICAgICAgICAgICAgaWYgKHggPCAwIHx8IHggPj0gdGhpcy5zaXplIHx8IHkgPCAwIHx8IHkgPj0gdGhpcy5zaXplIHx8IHRoaXMuYm9hcmRbeF1beV0gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIHBsYWNlU2hpcChzaGlwLGNvb3Jkcykge1xuXG4gICAgICAgIGlmKHRoaXMudmFsaWRhdGUoY29vcmRzKSkge1xuXG4gICAgICAgICAgICBmb3IobGV0IFt4LHldIG9mIGNvb3Jkcykge1xuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbeF1beV0gPSBzaGlwXG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICBzaGlwLnBsYWNlU2hpcChjb29yZHMpXG4gICAgICAgICAgICB0aGlzLnNoaXBzLnB1c2goc2hpcClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlY2VpdmVBdHRhY2soY29vcmRzKSB7XG4gICAgICAgIGNvbnN0IFt4LHldID0gY29vcmRzXG4gICAgICAgIGNvbnN0IHRhcmdldCA9IHRoaXMuYm9hcmRbeF1beV1cbiAgICAgICAgXG4gICAgICAgIGlmKHRhcmdldCBpbnN0YW5jZW9mIFNoaXAgJiYgdGFyZ2V0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0YXJnZXQuaGl0KClcbiAgICAgICAgICAgIHRoaXMuYm9hcmRbeF1beV0gPSBcImhpdFwiXG4gICAgICAgICAgICByZXR1cm4gXCJIaXRcIlxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5ib2FyZFt4XVt5XSA9IFwibWlzc1wiXG4gICAgICAgIHJldHVybiBcIk1pc3NcIlxuICAgIH1cblxuICAgIGdldEJvYXJkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ib2FyZFxuICAgIH1cbiAgICBhbGxTdW5rKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zaGlwcy5ldmVyeSgoc2hpcCkgPT4gc2hpcC5pc1N1bmsoKSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lQm9hcmQiLCJpbXBvcnQgR2FtZUJvYXJkIGZyb20gXCIuL0dhbWVib2FyZFwiO1xuY2xhc3MgUGxheWVye1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMuIGdhbWVCb2FyZCA9IG5ldyBHYW1lQm9hcmQoKVxuICAgIH1cblxuICAgIGdldEdhbWVCb2FyZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2FtZUJvYXJkXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXIiLCJjbGFzcyBTaGlwIHtcbiAgICBjb25zdHJ1Y3RvcihsZW5ndGggPSA0KSB7XG4gICAgICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoXG4gICAgICAgIHRoaXMuZGFtYWdlID0gMFxuICAgICAgICB0aGlzLnN1bmsgPSBmYWxzZVxuICAgICAgICB0aGlzLnBvc2l0aW9uID0gW11cbiAgICB9XG5cbiAgICBoaXQoKSB7XG4gICAgICAgIHRoaXMuZGFtYWdlICs9IDFcbiAgICB9XG5cbiAgICBnZXRIaXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhbWFnZVxuICAgIH1cblxuICAgIGdldExlbmd0aCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGVuZ3RoXG4gICAgfVxuICAgIFxuICAgIGlzU3VuaygpIHtcbiAgICAgICAgaWYgKHRoaXMubGVuZ3RoIDw9IHRoaXMuZGFtYWdlKSB7XG4gICAgICAgICAgICB0aGlzLnN1bmsgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuc3Vua1xuICAgIH1cbiAgICBcbiAgICBnZXRQb3NpdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zaXRpb25cbiAgICB9XG4gICAgXG4gICAgcGxhY2VTaGlwKHBvc2l0aW9uKSB7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvblxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2hpcCIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgZ2FtZSBmcm9tIFwiLi9ET00vZ2FtZVwiO1xuaW1wb3J0ICcuL3N0eWxlLmNzcydcbmxldCBnYW1lSW5zdGFuY2UgPSBuZXcgZ2FtZSgpXG5cbmZ1bmN0aW9uIHJlc3RhcnRHYW1lKCkge1xuICAgIGdhbWVJbnN0YW5jZS5yZXNldCgpXG4gICAgZ2FtZUluc3RhbmNlID0gbmV3IGdhbWUoKVxufVxuXG5jb25zdCByZXN0YXJ0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc3RhcnQnKSBcbnJlc3RhcnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZXN0YXJ0R2FtZSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=