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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.container {
    display: flex;
    flex-direction: column;
}

.ground{
    display: flex;
    gap : 100px;
}
.grid {
    display: grid;
    grid-template-columns: repeat(10,50px);
    grid-template-rows: repeat(10,50px);
    border: 1px solid rgb(158, 158, 243);
}

.cell{
    height: 50px;
    width: 50px;
    border: 1px solid rgb(158, 158, 243);
}

.buttonContainer {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.placing {
    border: 0.5px solid rgba(34, 57, 34, 0.5);
    background-color: rgb(123, 235, 123, 0.2);
}

.ship {
    background-color: rgb(162, 104, 216,0.5);
}

.hit{
    background-color: #f06a49;
}

.miss {
    background-color: #a9d6e5;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,WAAW;AACf;AACA;IACI,aAAa;IACb,sCAAsC;IACtC,mCAAmC;IACnC,oCAAoC;AACxC;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,oCAAoC;AACxC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,yCAAyC;IACzC,yCAAyC;AAC7C;;AAEA;IACI,wCAAwC;AAC5C;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;AAC7B","sourcesContent":[".container {\n    display: flex;\n    flex-direction: column;\n}\n\n.ground{\n    display: flex;\n    gap : 100px;\n}\n.grid {\n    display: grid;\n    grid-template-columns: repeat(10,50px);\n    grid-template-rows: repeat(10,50px);\n    border: 1px solid rgb(158, 158, 243);\n}\n\n.cell{\n    height: 50px;\n    width: 50px;\n    border: 1px solid rgb(158, 158, 243);\n}\n\n.buttonContainer {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n.placing {\n    border: 0.5px solid rgba(34, 57, 34, 0.5);\n    background-color: rgb(123, 235, 123, 0.2);\n}\n\n.ship {\n    background-color: rgb(162, 104, 216,0.5);\n}\n\n.hit{\n    background-color: #f06a49;\n}\n\n.miss {\n    background-color: #a9d6e5;\n}"],"sourceRoot":""}]);
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
        this.shipOrientation = "horizontal"
        this.ship_4 = 1
        this.ship_3 = 2
        this.ship_2 = 3
        this.ship_1 = 4
        this.shipButtons()
        document.querySelector('.headline').textContent = "Placing ships..."
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
            if(this.shipOrientation === "horizontal") this.shipOrientation = "vertical"
            else this.shipOrientation = "horizontal"
            changeOrientation.textContent = this.shipOrientation
            this.cells = []
            this.display()
        })

        const buttonContainer = document.createElement('div')
        buttonContainer.classList.add('buttonContainer')
        const container = document.querySelector('.player2')
        container.classList.remove('grid')
        const button_4 = document.createElement('button')
        button_4.dataset.value = 4
        
        button_4.addEventListener('click', () => {
            console.log(this.ship_4)
            if(this.ship_4 > 0) {
                this.currentShipSize = 4
                this.cells = []
                this.display()
            }
        })


        const button_3 = document.createElement('button')
        button_3.dataset.value = 3
        button_3.addEventListener('click', () => {
            if(this.ship_3 > 0) {
                this.currentShipSize = 3
                this.cells = []
                this.display()
            }
        })

        const button_2 = document.createElement('button')
        button_2.dataset.value = 2
        button_2.addEventListener('click', () => {
            if(this.ship_2 > 0) {
                this.currentShipSize = 2
                this.cells = []
                this.display()
            }
        })

        const button_1 = document.createElement('button')
        button_1.dataset.value = 1
        button_1.addEventListener('click', () => {
            if(this.ship_1 > 0) {
                this.currentShipSize = 1
                this.cells = []
                this.display()
            }
        })


        button_4.textContent = "++++"
        button_3.textContent = "+++"
        button_2.textContent = "++"
        button_1.textContent = "+"

        buttonContainer.append(button_4)
        buttonContainer.append(button_3)
        buttonContainer.append(button_2)
        buttonContainer.append(button_1)
        buttonContainer.append(changeOrientation)
        buttonContainer.append(begin)
        container.append(buttonContainer)
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
                    // cell.style.backgroundColor = "blue"
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
        if(orientation === "horizontal") {
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
                        // this.cells[x][y].style.backgroundColor = 'blue'
                        this.cells[x][y].classList.add('ship')
                    }  
                    this.currentShipSize = 0
                    this.cells = []
                    if(shipSize === 4) this.ship_4 -= 1
                    if(shipSize === 3) this.ship_3 -= 1
                    if(shipSize === 2) this.ship_2 -= 1
                    if(shipSize === 1) this.ship_1 -= 1

                    // if(this.checkShips()) {
                    //     this.cells = []
                    //     this.ground.textContent = ''
                    //     document.dispatchEvent(new Event('shipPlaced'));
                    //     return;
                    // }
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
                    // this.cells[x][y].style.backgroundColor = color
                    this.cells[x][y].classList.add('placing')
                }   
            }
        })

        cell.addEventListener('mouseleave', () => {
            if(this.gameBoard.validate(coords)) {
                for(let [x,y] of coords) {
                    this.cells[x][y].classList.remove('placing')
                    // this.cells[x][y].style.backgroundColor = 'lightblue'
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
        document.querySelector('.headline').textcontent = ''
        document.querySelector('.restart').style.display = 'none'
    }

    startGame() {
        this.player1.classList.add('grid')
        this.player2.classList.add('grid')
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
                    alert("player won")
                    document.querySelector('.restart').style.display = 'block'
                    return
                }
    
                current = "bot";
                headline.textContent = "AI turn"
                setTimeout(() => {
                    playerBoard.randomAttack()
                    if(playerGameBoard.allSunk()) {
                        alert("bot won")
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZTs7Ozs7O1VDcENmO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7OztBQ0E4QjtBQUNWO0FBQ3BCLHVCQUF1QixpREFBSTs7QUFFM0I7QUFDQTtBQUNBLHVCQUF1QixpREFBSTtBQUMzQjs7QUFFQTtBQUNBLG9EIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvRE9NL1BsYWNlU2hpcC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9ET00vYm90LmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL0RPTS9nYW1lLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL0dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9QbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvU2hpcC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uZ3JvdW5ke1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwIDogMTAwcHg7XG59XG4uZ3JpZCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCw1MHB4KTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCw1MHB4KTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTU4LCAxNTgsIDI0Myk7XG59XG5cbi5jZWxse1xuICAgIGhlaWdodDogNTBweDtcbiAgICB3aWR0aDogNTBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTU4LCAxNTgsIDI0Myk7XG59XG5cbi5idXR0b25Db250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDEwcHg7XG59XG5cbi5wbGFjaW5nIHtcbiAgICBib3JkZXI6IDAuNXB4IHNvbGlkIHJnYmEoMzQsIDU3LCAzNCwgMC41KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTIzLCAyMzUsIDEyMywgMC4yKTtcbn1cblxuLnNoaXAge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNjIsIDEwNCwgMjE2LDAuNSk7XG59XG5cbi5oaXR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwNmE0OTtcbn1cblxuLm1pc3Mge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNhOWQ2ZTU7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGFBQWE7SUFDYixzQ0FBc0M7SUFDdEMsbUNBQW1DO0lBQ25DLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSx5Q0FBeUM7SUFDekMseUNBQXlDO0FBQzdDOztBQUVBO0lBQ0ksd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uZ3JvdW5ke1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXAgOiAxMDBweDtcXG59XFxuLmdyaWQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCw1MHB4KTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsNTBweCk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxNTgsIDE1OCwgMjQzKTtcXG59XFxuXFxuLmNlbGx7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxNTgsIDE1OCwgMjQzKTtcXG59XFxuXFxuLmJ1dHRvbkNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLnBsYWNpbmcge1xcbiAgICBib3JkZXI6IDAuNXB4IHNvbGlkIHJnYmEoMzQsIDU3LCAzNCwgMC41KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyMywgMjM1LCAxMjMsIDAuMik7XFxufVxcblxcbi5zaGlwIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2MiwgMTA0LCAyMTYsMC41KTtcXG59XFxuXFxuLmhpdHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwNmE0OTtcXG59XFxuXFxuLm1pc3Mge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTlkNmU1O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBTaGlwIGZyb20gXCIuLi9TaGlwXCJcblxuY2xhc3MgUGxhY2VTaGlwIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLGdhbWVCb2FyZCxncm91bmQpIHtcbiAgICAgICAgdGhpcy5nYW1lQm9hcmQgPSBnYW1lQm9hcmRcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZVxuICAgICAgICB0aGlzLmNlbGxzID0gW11cbiAgICAgICAgdGhpcy5ncm91bmQgPSBncm91bmRcbiAgICAgICAgdGhpcy5jdXJyZW50U2hpcFNpemUgPSAwXG4gICAgICAgIHRoaXMuc2hpcE9yaWVudGF0aW9uID0gXCJob3Jpem9udGFsXCJcbiAgICAgICAgdGhpcy5zaGlwXzQgPSAxXG4gICAgICAgIHRoaXMuc2hpcF8zID0gMlxuICAgICAgICB0aGlzLnNoaXBfMiA9IDNcbiAgICAgICAgdGhpcy5zaGlwXzEgPSA0XG4gICAgICAgIHRoaXMuc2hpcEJ1dHRvbnMoKVxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGxpbmUnKS50ZXh0Q29udGVudCA9IFwiUGxhY2luZyBzaGlwcy4uLlwiXG4gICAgfVxuXG4gICAgc2hpcEJ1dHRvbnMoKSB7XG5cbiAgICAgICAgY29uc3QgYmVnaW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKSBcbiAgICAgICAgYmVnaW4udGV4dENvbnRlbnQgPSBcIlN0YXJ0XCJcbiAgICAgICAgYmVnaW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBpZih0aGlzLmNoZWNrU2hpcHMoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2VsbHMgPSBbXVxuICAgICAgICAgICAgICAgIHRoaXMuZ3JvdW5kLnRleHRDb250ZW50ID0gJydcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnc2hpcFBsYWNlZCcpKTtcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFsZXJ0KFwicGxhY2UgYWxsIHNoaXBzIGZpcnN0XCIpXG4gICAgICAgIH0pXG5cbiAgICAgICAgY29uc3QgY2hhbmdlT3JpZW50YXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgICBjaGFuZ2VPcmllbnRhdGlvbi50ZXh0Q29udGVudCA9IHRoaXMuc2hpcE9yaWVudGF0aW9uXG5cbiAgICAgICAgY2hhbmdlT3JpZW50YXRpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBpZih0aGlzLnNoaXBPcmllbnRhdGlvbiA9PT0gXCJob3Jpem9udGFsXCIpIHRoaXMuc2hpcE9yaWVudGF0aW9uID0gXCJ2ZXJ0aWNhbFwiXG4gICAgICAgICAgICBlbHNlIHRoaXMuc2hpcE9yaWVudGF0aW9uID0gXCJob3Jpem9udGFsXCJcbiAgICAgICAgICAgIGNoYW5nZU9yaWVudGF0aW9uLnRleHRDb250ZW50ID0gdGhpcy5zaGlwT3JpZW50YXRpb25cbiAgICAgICAgICAgIHRoaXMuY2VsbHMgPSBbXVxuICAgICAgICAgICAgdGhpcy5kaXNwbGF5KClcbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCBidXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBidXR0b25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnYnV0dG9uQ29udGFpbmVyJylcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllcjInKVxuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnZ3JpZCcpXG4gICAgICAgIGNvbnN0IGJ1dHRvbl80ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgYnV0dG9uXzQuZGF0YXNldC52YWx1ZSA9IDRcbiAgICAgICAgXG4gICAgICAgIGJ1dHRvbl80LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5zaGlwXzQpXG4gICAgICAgICAgICBpZih0aGlzLnNoaXBfNCA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRTaGlwU2l6ZSA9IDRcbiAgICAgICAgICAgICAgICB0aGlzLmNlbGxzID0gW11cbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXkoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG5cbiAgICAgICAgY29uc3QgYnV0dG9uXzMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgICBidXR0b25fMy5kYXRhc2V0LnZhbHVlID0gM1xuICAgICAgICBidXR0b25fMy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGlmKHRoaXMuc2hpcF8zID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFNoaXBTaXplID0gM1xuICAgICAgICAgICAgICAgIHRoaXMuY2VsbHMgPSBbXVxuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheSgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgY29uc3QgYnV0dG9uXzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgICBidXR0b25fMi5kYXRhc2V0LnZhbHVlID0gMlxuICAgICAgICBidXR0b25fMi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGlmKHRoaXMuc2hpcF8yID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFNoaXBTaXplID0gMlxuICAgICAgICAgICAgICAgIHRoaXMuY2VsbHMgPSBbXVxuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheSgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgY29uc3QgYnV0dG9uXzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgICBidXR0b25fMS5kYXRhc2V0LnZhbHVlID0gMVxuICAgICAgICBidXR0b25fMS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGlmKHRoaXMuc2hpcF8xID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFNoaXBTaXplID0gMVxuICAgICAgICAgICAgICAgIHRoaXMuY2VsbHMgPSBbXVxuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheSgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cblxuICAgICAgICBidXR0b25fNC50ZXh0Q29udGVudCA9IFwiKysrK1wiXG4gICAgICAgIGJ1dHRvbl8zLnRleHRDb250ZW50ID0gXCIrKytcIlxuICAgICAgICBidXR0b25fMi50ZXh0Q29udGVudCA9IFwiKytcIlxuICAgICAgICBidXR0b25fMS50ZXh0Q29udGVudCA9IFwiK1wiXG5cbiAgICAgICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZChidXR0b25fNClcbiAgICAgICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZChidXR0b25fMylcbiAgICAgICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZChidXR0b25fMilcbiAgICAgICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZChidXR0b25fMSlcbiAgICAgICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZChjaGFuZ2VPcmllbnRhdGlvbilcbiAgICAgICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZChiZWdpbilcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZChidXR0b25Db250YWluZXIpXG4gICAgfVxuXG5cbiAgICBkaXNwbGF5KCkge1xuICAgICAgICB0aGlzLmdyb3VuZC50ZXh0Q29udGVudCA9ICcnXG4gICAgICAgIGxldCBib2FyZCA9IHRoaXMuZ2FtZUJvYXJkLmdldEJvYXJkKClcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgICAgIGxldCByb3cgPSBbXVxuICAgICAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2NlbGwnKVxuICAgICAgICAgICAgICAgIGNlbGwuZGF0YXNldC54ID0gaVxuICAgICAgICAgICAgICAgIGNlbGwuZGF0YXNldC55ID0galxuICAgICAgICAgICAgICAgIGNlbGwuZGF0YXNldC5uYW1lID0gdGhpcy5uYW1lXG5cbiAgICAgICAgICAgICAgICBpZihib2FyZFtpXVtqXSBpbnN0YW5jZW9mIFNoaXAgKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJibHVlXCJcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdzaGlwJylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5ncm91bmQuYXBwZW5kKGNlbGwpXG4gICAgICAgICAgICAgICAgcm93LnB1c2goY2VsbClcbiAgICAgICAgICAgICAgICB0aGlzLnRlc3QoY2VsbCx0aGlzLmN1cnJlbnRTaGlwU2l6ZSx0aGlzLnNoaXBPcmllbnRhdGlvbilcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY2VsbHMucHVzaChyb3cpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjaGVja1NoaXBzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zaGlwXzEgPD0gMCAmJiB0aGlzLnNoaXBfMiA8PSAwICYmIHRoaXMuc2hpcF8zIDw9IDAgJiYgdGhpcy5zaGlwXzQgPD0gMFxuICAgIH1cblxuICAgIHRlc3QoY2VsbCxzaGlwU2l6ZSxvcmllbnRhdGlvbikge1xuICAgICAgICBsZXQgc2hpcENvb3JkcyA9IFtdXG4gICAgICAgIGlmKG9yaWVudGF0aW9uID09PSBcImhvcml6b250YWxcIikge1xuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHNoaXBTaXplOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgcG9zaXRpb24gPSBbMCxpXVxuICAgICAgICAgICAgICAgIHNoaXBDb29yZHMucHVzaChwb3NpdGlvbilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBzaGlwU2l6ZTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IHBvc2l0aW9uID0gW2ksMF1cbiAgICAgICAgICAgICAgICBzaGlwQ29vcmRzLnB1c2gocG9zaXRpb24pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGNvb3JkcztcbiAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGlmKHNoaXBTaXplKSB7XG5cbiAgICAgICAgICAgICAgICBpZih0aGlzLmdhbWVCb2FyZC52YWxpZGF0ZShjb29yZHMpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNoaXAgPSBuZXcgU2hpcChzaGlwU2l6ZSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lQm9hcmQucGxhY2VTaGlwKHNoaXAsY29vcmRzKVxuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IFt4LHldIG9mIGNvb3Jkcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5jZWxsc1t4XVt5XS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnYmx1ZSdcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2VsbHNbeF1beV0uY2xhc3NMaXN0LmFkZCgnc2hpcCcpXG4gICAgICAgICAgICAgICAgICAgIH0gIFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRTaGlwU2l6ZSA9IDBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jZWxscyA9IFtdXG4gICAgICAgICAgICAgICAgICAgIGlmKHNoaXBTaXplID09PSA0KSB0aGlzLnNoaXBfNCAtPSAxXG4gICAgICAgICAgICAgICAgICAgIGlmKHNoaXBTaXplID09PSAzKSB0aGlzLnNoaXBfMyAtPSAxXG4gICAgICAgICAgICAgICAgICAgIGlmKHNoaXBTaXplID09PSAyKSB0aGlzLnNoaXBfMiAtPSAxXG4gICAgICAgICAgICAgICAgICAgIGlmKHNoaXBTaXplID09PSAxKSB0aGlzLnNoaXBfMSAtPSAxXG5cbiAgICAgICAgICAgICAgICAgICAgLy8gaWYodGhpcy5jaGVja1NoaXBzKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHRoaXMuY2VsbHMgPSBbXVxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5ncm91bmQudGV4dENvbnRlbnQgPSAnJ1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ3NoaXBQbGFjZWQnKSk7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5KClcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuXG4gICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHggPSBwYXJzZUludChjZWxsLmRhdGFzZXQueClcbiAgICAgICAgICAgIGNvbnN0IHkgPSBwYXJzZUludChjZWxsLmRhdGFzZXQueSlcbiAgICAgICAgICAgIGNvb3JkcyA9IHNoaXBDb29yZHMubWFwKChhKT0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW2FbMF0gKyB4LCBhWzFdICsgeV1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gdGhpcy5nYW1lQm9hcmQudmFsaWRhdGUoY29vcmRzKSBcbiAgICAgICAgICAgIGlmKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGZvcihsZXQgW3gseV0gb2YgY29vcmRzKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuY2VsbHNbeF1beV0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3JcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jZWxsc1t4XVt5XS5jbGFzc0xpc3QuYWRkKCdwbGFjaW5nJylcbiAgICAgICAgICAgICAgICB9ICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYodGhpcy5nYW1lQm9hcmQudmFsaWRhdGUoY29vcmRzKSkge1xuICAgICAgICAgICAgICAgIGZvcihsZXQgW3gseV0gb2YgY29vcmRzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2VsbHNbeF1beV0uY2xhc3NMaXN0LnJlbW92ZSgncGxhY2luZycpXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuY2VsbHNbeF1beV0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2xpZ2h0Ymx1ZSdcbiAgICAgICAgICAgICAgICB9ICBcbiAgICAgICAgICAgIH0gICBcbiAgICAgICAgfSlcbiAgICAgICAgXG4gICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignY29udGV4dG1lbnUnLCAoZSk9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgIGxldCB4ID0gcGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC54KVxuICAgICAgICAgICAgbGV0IHkgPSBwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LnkpXG4gICAgICAgICAgICBsZXQgYm9hcmQgPSB0aGlzLmdhbWVCb2FyZC5nZXRCb2FyZCgpXG4gICAgICAgICAgICBpZihib2FyZFt4XVt5XSBpbnN0YW5jZW9mIFNoaXApIHtcbiAgICAgICAgICAgICAgICBpZihib2FyZFt4XVt5XS5nZXRMZW5ndGgoKSA9PT0gNCkgdGhpcy5zaGlwXzQgKz0gMVxuICAgICAgICAgICAgICAgIGlmKGJvYXJkW3hdW3ldLmdldExlbmd0aCgpID09PSAzKSB0aGlzLnNoaXBfMyArPSAxXG4gICAgICAgICAgICAgICAgaWYoYm9hcmRbeF1beV0uZ2V0TGVuZ3RoKCkgPT09IDIpIHRoaXMuc2hpcF8yICs9IDFcbiAgICAgICAgICAgICAgICBpZihib2FyZFt4XVt5XS5nZXRMZW5ndGgoKSA9PT0gMSkgdGhpcy5zaGlwXzEgKz0gMVxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZUJvYXJkLnJlbW92ZVNoaXAoYm9hcmRbeF1beV0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNlbGxzID0gW11cbiAgICAgICAgICAgIHRoaXMuZGlzcGxheSgpXG4gICAgICAgIH0pXG5cbiAgICB9XG4gXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBsYWNlU2hpcCIsImltcG9ydCBTaGlwIGZyb20gXCIuLi9TaGlwXCI7XG5jbGFzcyBCb3Qge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsZ2FtZUJvYXJkLGdyb3VuZCkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lXG4gICAgICAgIHRoaXMuZ2FtZUJvYXJkID0gZ2FtZUJvYXJkXG4gICAgICAgIHRoaXMuY2VsbHMgPSBbXVxuICAgICAgICB0aGlzLmF2YWlsYWJlID0gW11cbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBncm91bmRcbiAgICAgICAgdGhpcy5nZXRWYWxpZEluZGV4KClcbiAgICB9XG5cbiAgICBkaXNwbGF5KCkge1xuICAgICAgICB0aGlzLnBsYXllci50ZXh0Q29udGVudCA9ICcnXG4gICAgICAgIGxldCBib2FyZCA9IHRoaXMuZ2FtZUJvYXJkLmdldEJvYXJkKClcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgICAgIGxldCByb3cgPSBbXVxuICAgICAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgICAgICBjZWxsLmRhdGFzZXQueCA9IGlcbiAgICAgICAgICAgICAgICBjZWxsLmRhdGFzZXQueSA9IGpcbiAgICAgICAgICAgICAgICBjZWxsLmRhdGFzZXQubmFtZSA9IHRoaXMubmFtZVxuICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnY2VsbCcpXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIuYXBwZW5kKGNlbGwpXG4gICAgICAgICAgICAgICAgcm93LnB1c2goY2VsbClcblxuICAgICAgICAgICAgICAgIGlmKGJvYXJkW2ldW2pdID09PSBcImhpdFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JlZCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYoYm9hcmRbaV1bal0gPT09IFwibWlzc1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2dyZWVuJ1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmKGJvYXJkW2ldW2pdIGluc3RhbmNlb2YgU2hpcCApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImJsdWVcIlxuICAgICAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ3NoaXAnKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jZWxscy5wdXNoKHJvdylcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5jZWxsc1xuICAgIH1cblxuICAgIHJlY2lldmVBdHRhY2soW3gseV0pIHtcbiAgICAgICAgbGV0IGJvYXJkID0gdGhpcy5nYW1lQm9hcmQuZ2V0Qm9hcmQoKVxuICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLmdhbWVCb2FyZC5yZWNlaXZlQXR0YWNrKFt4LHldKVxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxuXG4gICAgZ2V0VmFsaWRJbmRleCgpIHtcbiAgICAgICAgbGV0IGJvYXJkID0gdGhpcy5nYW1lQm9hcmQuZ2V0Qm9hcmQoKVxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgMTAgOyBpKyspIHtcbiAgICAgICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWYoYm9hcmRbaV1bal0gPT09IG51bGwgfHwgYm9hcmRbaV1bal0gaW5zdGFuY2VvZiBTaGlwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXZhaWxhYmUucHVzaCh7eDppLCB5Omp9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSAgICAgICAgXG4gICAgfVxuXG4gICAgcmFuZG9tQXR0YWNrKCkge1xuICAgICAgICBjb25zdCBpbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuYXZhaWxhYmUubGVuZ3RoKVxuICAgICAgICBsZXQge3gseX0gPSB0aGlzLmF2YWlsYWJlW2luZGV4XVxuICAgICAgICB0aGlzLmF2YWlsYWJlLnNwbGljZShpbmRleCwxKVxuICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLmdhbWVCb2FyZC5yZWNlaXZlQXR0YWNrKFt4LHldKVxuICAgICAgICBpZihyZXN1bHQgPT09IFwiSGl0XCIpIHtcbiAgICAgICAgICAgIC8vIHRoaXMuY2VsbHNbeF1beV0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZWRcIlxuICAgICAgICAgICAgdGhpcy5jZWxsc1t4XVt5XS5jbGFzc0xpc3QucmVtb3ZlKCdzaGlwJylcbiAgICAgICAgICAgIHRoaXMuY2VsbHNbeF1beV0uY2xhc3NMaXN0LmFkZCgnaGl0JylcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYocmVzdWx0ID09PSBcIk1pc3NcIikge1xuICAgICAgICAgICAgLy8gdGhpcy5jZWxsc1t4XVt5XS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImdyZWVuXCJcbiAgICAgICAgICAgIHRoaXMuY2VsbHNbeF1beV0uY2xhc3NMaXN0LmFkZCgnbWlzcycpXG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHJhbmRvbVNoaXBQbGFjZW1lbnQoKSB7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBzaGlwMSA9IG5ldyBTaGlwKDQpXG5cbiAgICAgICAgY29uc3Qgc2hpcDIgPSBuZXcgU2hpcCgzKVxuICAgICAgICBjb25zdCBzaGlwMyA9IG5ldyBTaGlwKDMpXG5cbiAgICAgICAgY29uc3Qgc2hpcDQgPSBuZXcgU2hpcCgyKVxuICAgICAgICBjb25zdCBzaGlwNSA9IG5ldyBTaGlwKDIpXG4gICAgICAgIGNvbnN0IHNoaXA2ID0gbmV3IFNoaXAoMilcblxuICAgICAgICBjb25zdCBzaGlwNyA9IG5ldyBTaGlwKDEpXG4gICAgICAgIGNvbnN0IHNoaXA4ID0gbmV3IFNoaXAoMSlcbiAgICAgICAgY29uc3Qgc2hpcDkgPSBuZXcgU2hpcCgxKVxuICAgICAgICBjb25zdCBzaGlwMTAgPSBuZXcgU2hpcCgxKVxuXG4gICAgICAgIGxldCBzaGlwcyA9IFtzaGlwMSxzaGlwMixzaGlwMyxzaGlwNCxzaGlwNSxzaGlwNixzaGlwNyxzaGlwOCxzaGlwOSxzaGlwMTBdXG5cbiAgICAgICAgZnVuY3Rpb24gZ2V0Q29vcmRzKHNoaXApIHtcbiAgICAgICAgICAgIGxldCBjb29yZHMgPSBbXVxuICAgICAgICAgICAgbGV0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMClcbiAgICAgICAgICAgIGxldCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApXG4gICAgICAgICAgICBsZXQgYWxpZ24gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKVxuICAgICAgICAgICAgaWYoYWxpZ24gPT09IDApIHtcbiAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgc2hpcC5nZXRMZW5ndGgoKTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvb3Jkcy5wdXNoKFt4K2kseV0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgc2hpcC5nZXRMZW5ndGgoKTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvb3Jkcy5wdXNoKFt4LHkraV0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNvb3Jkc1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBmb3IobGV0IHNoaXAgb2Ygc2hpcHMpIHsgXG4gICAgICAgICAgICBsZXQgY29vcmRzID0gZ2V0Q29vcmRzKHNoaXApXG4gICAgICAgICAgICB3aGlsZSghdGhpcy5nYW1lQm9hcmQudmFsaWRhdGUoY29vcmRzKSkge1xuICAgICAgICAgICAgICAgIGNvb3JkcyA9IGdldENvb3JkcyhzaGlwKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5nYW1lQm9hcmQucGxhY2VTaGlwKHNoaXAsY29vcmRzKVxuICAgICAgICAgICAgaWYodGhpcy5zaG93KSB7XG4gICAgICAgICAgICAgICAgZm9yKGxldCBbeCx5XSBvZiBjb29yZHMpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5jZWxsc1t4XVt5XS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImJsdWVcIlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNlbGxzW3hdW3ldLmNsYXNzTGlzdC5hZGQoJ3NoaXAnKVxuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvdCIsImltcG9ydCBQbGF5ZXIgZnJvbSBcIi4uL1BsYXllclwiO1xuaW1wb3J0IEJvdCBmcm9tIFwiLi9ib3QuanNcIlxuaW1wb3J0IFBsYWNlU2hpcCBmcm9tIFwiLi9QbGFjZVNoaXAuanNcIjtcblxuY2xhc3MgZ2FtZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucGxheWVyMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXIxJylcbiAgICAgICAgdGhpcy5wbGF5ZXIyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllcjInKVxuICAgICAgICB0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIoKVxuICAgICAgICB0aGlzLmNvbXB1dGVyID0gbmV3IFBsYXllcigpXG4gICAgICAgIHRoaXMuc3RhcnQgPSBuZXcgUGxhY2VTaGlwKFwicGxheWVyXCIsdGhpcy5wbGF5ZXIuZ2V0R2FtZUJvYXJkKCksdGhpcy5wbGF5ZXIxKVxuICAgICAgICB0aGlzLnN0YXJ0LmRpc3BsYXkoKVxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzaGlwUGxhY2VkJywgdGhpcy5zdGFydEdhbWUuYmluZCh0aGlzKSk7XG4gICAgXG4gICAgfVxuXG4gICAgZ2V0UGxheWVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wbGF5ZXJcbiAgICB9XG4gICAgXG4gICAgZ2V0Q29tcHV0ZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbXB1dGVyXG4gICAgfVxuXG4gICAgcmVzZXQoKSB7XG4gICAgICAgIHRoaXMucGxheWVyMS50ZXh0Q29udGVudCA9ICcnXG4gICAgICAgIHRoaXMucGxheWVyMi50ZXh0Q29udGVudCA9ICcnXG4gICAgICAgIC8vIHRoaXMucGxheWVyLmdldEdhbWVCb2FyZCgpLnJlbW92ZUFsbFNoaXAoKVxuICAgICAgICAvLyB0aGlzLmNvbXB1dGVyLmdldEdhbWVCb2FyZCgpLnJlbW92ZUFsbFNoaXAoKVxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGxpbmUnKS50ZXh0Y29udGVudCA9ICcnXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXN0YXJ0Jykuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgIH1cblxuICAgIHN0YXJ0R2FtZSgpIHtcbiAgICAgICAgdGhpcy5wbGF5ZXIxLmNsYXNzTGlzdC5hZGQoJ2dyaWQnKVxuICAgICAgICB0aGlzLnBsYXllcjIuY2xhc3NMaXN0LmFkZCgnZ3JpZCcpXG4gICAgICAgIGNvbnN0IGhlYWRsaW5lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRsaW5lJylcbiAgICAgICAgY29uc3QgcGxheWVyQm9hcmQgPSBuZXcgQm90KFwicGxheWVyXCIsdGhpcy5wbGF5ZXIuZ2V0R2FtZUJvYXJkKCksdGhpcy5wbGF5ZXIxKSAgICBcbiAgICAgICAgY29uc3QgY29tcHV0ZXJCb2FyZCA9IG5ldyBCb3QoXCJib3RcIix0aGlzLmNvbXB1dGVyLmdldEdhbWVCb2FyZCgpLHRoaXMucGxheWVyMilcbiAgICAgICAgY29tcHV0ZXJCb2FyZC5yYW5kb21TaGlwUGxhY2VtZW50KClcblxuICAgICAgICBwbGF5ZXJCb2FyZC5kaXNwbGF5KClcbiAgICAgICAgY29tcHV0ZXJCb2FyZC5kaXNwbGF5KClcblxuICAgICAgICBjb25zdCBjb21wdXRlckdhbWVCb2FyZCA9IHRoaXMuY29tcHV0ZXIuZ2V0R2FtZUJvYXJkKClcbiAgICAgICAgY29uc3QgcGxheWVyR2FtZUJvYXJkID0gdGhpcy5wbGF5ZXIuZ2V0R2FtZUJvYXJkKClcbiAgICAgICAgXG4gICAgICAgIGxldCBjdXJyZW50ID0gXCJwbGF5ZXJcIlxuICAgICAgICBoZWFkbGluZS50ZXh0Q29udGVudCA9IFwiUGxheWVyIHR1cm5cIlxuICAgICAgICBjb25zdCBjZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC5jZWxsW2RhdGEtbmFtZT1cImJvdFwiXWApOyAgIFxuXG4gICAgICAgIGZvcihsZXQgY2VsbCBvZiBjZWxscykge1xuICAgICAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIGhhbmRsZUNsaWNrKGUpIHtcbiAgICAgICAgICAgICAgICBsZXQgeCA9IHBhcnNlSW50KGNlbGwuZGF0YXNldC54KVxuICAgICAgICAgICAgICAgIGxldCB5ID0gcGFyc2VJbnQoY2VsbC5kYXRhc2V0LnkpXG4gICAgICAgICAgICAgICAgY29uc3QgbmFtZSA9IGNlbGwuZGF0YXNldC5uYW1lXG4gICAgICAgICAgICAgICAgaWYoY3VycmVudCA9PT0gXCJwbGF5ZXJcIiAmJiBuYW1lID09PSBcImJvdFwiKSB7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGNvbXB1dGVyQm9hcmQucmVjaWV2ZUF0dGFjayhbeCx5XSlcbiAgICAgICAgICAgICAgICAgICAgaWYocmVzdWx0ID09PSBcIkhpdFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBlLnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmVkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnc2hpcCcpXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdoaXQnKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZihyZXN1bHQgPT09IFwiTWlzc1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBlLnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnZ3JlZW4nXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdtaXNzJylcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQ2xpY2spXG4gICAgXG4gICAgICAgICAgICAgICAgaWYoY29tcHV0ZXJHYW1lQm9hcmQuYWxsU3VuaygpKSB7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwicGxheWVyIHdvblwiKVxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzdGFydCcpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICBjdXJyZW50ID0gXCJib3RcIjtcbiAgICAgICAgICAgICAgICBoZWFkbGluZS50ZXh0Q29udGVudCA9IFwiQUkgdHVyblwiXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHBsYXllckJvYXJkLnJhbmRvbUF0dGFjaygpXG4gICAgICAgICAgICAgICAgICAgIGlmKHBsYXllckdhbWVCb2FyZC5hbGxTdW5rKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiYm90IHdvblwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc3RhcnQnKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY3VycmVudCA9IFwicGxheWVyXCJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGxpbmUudGV4dENvbnRlbnQgPSBcInBsYXllciB0dXJuXCJcbiAgICAgICAgICAgICAgICB9LDEwMClcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdhbWUiLCJpbXBvcnQgU2hpcCBmcm9tIFwiLi9TaGlwXCJcblxuY2xhc3MgR2FtZUJvYXJkIHtcbiAgICBjb25zdHJ1Y3RvcihzaXplID0gMTApIHtcbiAgICAgICAgdGhpcy5zaXplID0gc2l6ZVxuICAgICAgICB0aGlzLmJvYXJkID0gQXJyYXkoc2l6ZSkuZmlsbChudWxsKS5tYXAoKCkgPT4gQXJyYXkodGhpcy5zaXplKS5maWxsKG51bGwpKVxuICAgICAgICB0aGlzLnNoaXBzID0gW11cbiAgICB9XG5cbiAgICByZW1vdmVTaGlwKHRhcmdldCkge1xuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLnNoaXBzLmZpbmRJbmRleCgoc2hpcCkgPT4gc2hpcCA9PT0gdGFyZ2V0KVxuICAgICAgICB0aGlzLnNoaXBzLnNwbGljZShpbmRleCwxKVxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZih0aGlzLmJvYXJkW2ldW2pdID09PSB0YXJnZXQpIHRoaXMuYm9hcmRbaV1bal0gPSBudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW1vdmVBbGxTaGlwKCkge1xuICAgICAgICB0aGlzLnNoaXAgPSBbXVxuICAgICAgICB0aGlzLmJvYXJkID0gQXJyYXkoc2l6ZSkuZmlsbChudWxsKS5tYXAoKCkgPT4gQXJyYXkodGhpcy5zaXplKS5maWxsKG51bGwpKVxuICAgIH1cblxuICAgIGdldEJvYXJkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ib2FyZFxuICAgIH1cblxuICAgIGdldFNoaXBzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zaGlwc1xuICAgIH1cblxuICAgIHZhbGlkYXRlKGNvb3Jkcykge1xuICAgICAgICBmb3IobGV0IFt4LHldIG9mIGNvb3Jkcykge1xuICAgICAgICAgICAgaWYgKHggPCAwIHx8IHggPj0gdGhpcy5zaXplIHx8IHkgPCAwIHx8IHkgPj0gdGhpcy5zaXplIHx8IHRoaXMuYm9hcmRbeF1beV0gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIHBsYWNlU2hpcChzaGlwLGNvb3Jkcykge1xuXG4gICAgICAgIGlmKHRoaXMudmFsaWRhdGUoY29vcmRzKSkge1xuXG4gICAgICAgICAgICBmb3IobGV0IFt4LHldIG9mIGNvb3Jkcykge1xuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbeF1beV0gPSBzaGlwXG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICBzaGlwLnBsYWNlU2hpcChjb29yZHMpXG4gICAgICAgICAgICB0aGlzLnNoaXBzLnB1c2goc2hpcClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlY2VpdmVBdHRhY2soY29vcmRzKSB7XG4gICAgICAgIGNvbnN0IFt4LHldID0gY29vcmRzXG4gICAgICAgIGNvbnN0IHRhcmdldCA9IHRoaXMuYm9hcmRbeF1beV1cbiAgICAgICAgXG4gICAgICAgIGlmKHRhcmdldCBpbnN0YW5jZW9mIFNoaXAgJiYgdGFyZ2V0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0YXJnZXQuaGl0KClcbiAgICAgICAgICAgIHRoaXMuYm9hcmRbeF1beV0gPSBcImhpdFwiXG4gICAgICAgICAgICByZXR1cm4gXCJIaXRcIlxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5ib2FyZFt4XVt5XSA9IFwibWlzc1wiXG4gICAgICAgIHJldHVybiBcIk1pc3NcIlxuICAgIH1cblxuICAgIGdldEJvYXJkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ib2FyZFxuICAgIH1cbiAgICBhbGxTdW5rKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zaGlwcy5ldmVyeSgoc2hpcCkgPT4gc2hpcC5pc1N1bmsoKSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lQm9hcmQiLCJpbXBvcnQgR2FtZUJvYXJkIGZyb20gXCIuL0dhbWVib2FyZFwiO1xuY2xhc3MgUGxheWVye1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMuIGdhbWVCb2FyZCA9IG5ldyBHYW1lQm9hcmQoKVxuICAgIH1cblxuICAgIGdldEdhbWVCb2FyZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2FtZUJvYXJkXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXIiLCJjbGFzcyBTaGlwIHtcbiAgICBjb25zdHJ1Y3RvcihsZW5ndGggPSA0KSB7XG4gICAgICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoXG4gICAgICAgIHRoaXMuZGFtYWdlID0gMFxuICAgICAgICB0aGlzLnN1bmsgPSBmYWxzZVxuICAgICAgICB0aGlzLnBvc2l0aW9uID0gW11cbiAgICB9XG5cbiAgICBoaXQoKSB7XG4gICAgICAgIHRoaXMuZGFtYWdlICs9IDFcbiAgICB9XG5cbiAgICBnZXRIaXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhbWFnZVxuICAgIH1cblxuICAgIGdldExlbmd0aCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGVuZ3RoXG4gICAgfVxuICAgIFxuICAgIGlzU3VuaygpIHtcbiAgICAgICAgaWYgKHRoaXMubGVuZ3RoIDw9IHRoaXMuZGFtYWdlKSB7XG4gICAgICAgICAgICB0aGlzLnN1bmsgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuc3Vua1xuICAgIH1cbiAgICBcbiAgICBnZXRQb3NpdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zaXRpb25cbiAgICB9XG4gICAgXG4gICAgcGxhY2VTaGlwKHBvc2l0aW9uKSB7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvblxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2hpcCIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBnYW1lIGZyb20gXCIuL0RPTS9nYW1lXCI7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJ1xubGV0IGdhbWVJbnN0YW5jZSA9IG5ldyBnYW1lKClcblxuZnVuY3Rpb24gcmVzdGFydEdhbWUoKSB7XG4gICAgZ2FtZUluc3RhbmNlLnJlc2V0KClcbiAgICBnYW1lSW5zdGFuY2UgPSBuZXcgZ2FtZSgpXG59XG5cbmNvbnN0IHJlc3RhcnRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzdGFydCcpIFxucmVzdGFydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlc3RhcnRHYW1lKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==