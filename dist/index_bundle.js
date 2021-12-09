/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_three_build_three_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/three/build/three.module */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _assets_asset1_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/asset1.jpeg */ \"./assets/asset1.jpeg\");\n/* harmony import */ var _assets_asset2_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/asset2.jpeg */ \"./assets/asset2.jpeg\");\n\nvar fragment = __webpack_require__(/*! ./shader/fragment.glsl */ \"./shader/fragment.glsl\")\n//var vertex = require(\"./shader/vertex.glsl\")\n// import * as gsap from \"./node_modules/gsap/gsap-core\"\n\n;\n\n\nconst scene = new _node_modules_three_build_three_module__WEBPACK_IMPORTED_MODULE_2__.Scene()\nconst renderer = new _node_modules_three_build_three_module__WEBPACK_IMPORTED_MODULE_2__.WebGLRenderer()\nconst camera = new _node_modules_three_build_three_module__WEBPACK_IMPORTED_MODULE_2__.PerspectiveCamera(\n    70,\n    window.innerWidth / window.innerHeight,\n    0.001,\n    1000\n)\ndocument.body.appendChild( renderer.domElement )\nconst urls = [_assets_asset1_jpeg__WEBPACK_IMPORTED_MODULE_0__[\"default\"], _assets_asset2_jpeg__WEBPACK_IMPORTED_MODULE_1__[\"default\"]]\nconst textures = urls.map(url => new _node_modules_three_build_three_module__WEBPACK_IMPORTED_MODULE_2__.TextureLoader().load(url))\n\nlet material = new _node_modules_three_build_three_module__WEBPACK_IMPORTED_MODULE_2__.ShaderMaterial({\n    extensions: {\n        derivatives: \"#extension GL_OES_standard_derivatives : enable\"\n    },\n    side: _node_modules_three_build_three_module__WEBPACK_IMPORTED_MODULE_2__.DoubleSide,\n    uniforms: {\n        time: { value: 0 },\n        uTexture: { value: textures[0] },\n        resolution: { value: new _node_modules_three_build_three_module__WEBPACK_IMPORTED_MODULE_2__.Vector4() }\n    },\n    //vertexShader: vertex,\n    fragmentShader: fragment\n}), geometry = new _node_modules_three_build_three_module__WEBPACK_IMPORTED_MODULE_2__.PlaneGeometry(1, 1, 1, 1)\n\nlet plane = new _node_modules_three_build_three_module__WEBPACK_IMPORTED_MODULE_2__.Mesh( geometry, material )\nscene.add(plane)\n\nrenderer.render(scene, camera)\n\n\n//# sourceURL=webpack://homunculus/./index.js?");

/***/ }),

/***/ "./assets/asset1.jpeg":
/*!****************************!*\
  !*** ./assets/asset1.jpeg ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"1afc06651f3ddf90383bbdf5d2651f7c.jpeg\");\n\n//# sourceURL=webpack://homunculus/./assets/asset1.jpeg?");

/***/ }),

/***/ "./assets/asset2.jpeg":
/*!****************************!*\
  !*** ./assets/asset2.jpeg ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"9aaa0e8c7db2a887f3c3652477e8718a.jpeg\");\n\n//# sourceURL=webpack://homunculus/./assets/asset2.jpeg?");

/***/ }),

/***/ "./node_modules/three/build/three.module.js":
/*!**************************************************!*\
  !*** ./node_modules/three/build/three.module.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

/***/ }),

/***/ "./shader/fragment.glsl":
/*!******************************!*\
  !*** ./shader/fragment.glsl ***!
  \******************************/
/***/ ((module) => {

eval("module.exports = \"uniform float time;\\nuniform float progress;\\nuniform sampler2D uTexture;\\nuniform vec4 resolution;\\nvarying vec2 vUv;\\nvarying vec3 vPosition;\\nfloat PI = 3.141592653589793238;\\nvoid main() {\\n    vec4 color = texture2D(uTexture, vUv);\\n    //gl_FragColor = vec4(vUv,0.0,1.);\\n    gl_FragColor = color;\\n}\"\n\n//# sourceURL=webpack://homunculus/./shader/fragment.glsl?");

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
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;