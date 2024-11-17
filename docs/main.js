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

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./src/index.css?");

/***/ }),

/***/ "./src/backgroundColorChange.ts":
/*!**************************************!*\
  !*** ./src/backgroundColorChange.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   backgroundColorChange: () => (/* binding */ backgroundColorChange)\n/* harmony export */ });\nfunction backgroundColorChange() {\n    // 要素を取得\n    const color = document.getElementById('background-color');\n    // 16進数から10進数に変換\n    // #ffffff -> 255, 255, 255\n    function hexToRgb(hex) {\n        const hexValue = hex.replace('#', '');\n        const isOmit = hexValue.length === 3; // #fffなどの省略記法の場合 true\n        let r;\n        let g;\n        let b;\n        if (isOmit === true) {\n            r = parseInt(hexValue[0].repeat(2), 16).toString();\n            g = parseInt(hexValue[1].repeat(2), 16).toString();\n            b = parseInt(hexValue[2].repeat(2), 16).toString();\n        }\n        else {\n            r = parseInt(hexValue.slice(0, 2), 16).toString();\n            g = parseInt(hexValue.slice(2, 4), 16).toString();\n            b = parseInt(hexValue.slice(4, 6), 16).toString();\n        }\n        let rgb = r + ', ' + g + ', ' + b;\n        return rgb;\n    }\n    console.log('hexToRgb 1: ', hexToRgb('#ffffff'));\n    console.log('hexToRgb 2: ', hexToRgb('#fff'));\n    // 10進数から16進数に変換\n    // 255, 255, 255 -> #ffffff\n    function rgbToHex(r, g, b) {\n        let colorsDecimal = [r, g, b];\n        let totalHex = '#';\n        colorsDecimal.forEach((color) => {\n            let singleHex = color.toString(16);\n            totalHex += singleHex;\n        });\n        return totalHex;\n    }\n    console.log('rgbToHex: ', rgbToHex(255, 255, 255));\n    function setBackgroundColor(hex) {\n        document.body.style.backgroundColor = hex;\n        const currentColorHex = document.getElementById('hex-color');\n        currentColorHex.textContent = hex;\n        const currentColorRGB = document.getElementById('rgb-color');\n        currentColorRGB.textContent = hexToRgb(hex);\n    }\n    color.addEventListener('input', () => {\n        setBackgroundColor(color.value);\n    });\n    setBackgroundColor('#ffffff');\n}\n\n\n//# sourceURL=webpack:///./src/backgroundColorChange.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n/* harmony import */ var _backgroundColorChange__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./backgroundColorChange */ \"./src/backgroundColorChange.ts\");\n\n\n(0,_backgroundColorChange__WEBPACK_IMPORTED_MODULE_1__.backgroundColorChange)();\n\n\n//# sourceURL=webpack:///./src/index.ts?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;