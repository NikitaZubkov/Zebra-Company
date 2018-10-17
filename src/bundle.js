/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	__webpack_require__.p = "/public/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/es6/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/es6/bundle.js":
/*!***************************!*\
  !*** ./src/es6/bundle.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.proj = undefined;\n\nvar _Slider = __webpack_require__(/*! ./proj/Slider.js */ \"./src/es6/proj/Slider.js\");\n\nvar _Header = __webpack_require__(/*! ./proj/Header.js */ \"./src/es6/proj/Header.js\");\n\nfunction proj() {};\n\nproj.prototype.SliderInit = _Slider.SliderInit;\nproj.prototype.InitHeader = _Header.InitHeader;\n\nexports.proj = proj;\n\n//# sourceURL=webpack:///./src/es6/bundle.js?");

/***/ }),

/***/ "./src/es6/main.js":
/*!*************************!*\
  !*** ./src/es6/main.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _bundle = __webpack_require__(/*! ./bundle */ \"./src/es6/bundle.js\");\n\nvar Proj = new _bundle.proj();\n\nProj.SliderInit();\nProj.InitHeader();\n\n//# sourceURL=webpack:///./src/es6/main.js?");

/***/ }),

/***/ "./src/es6/proj/Header.js":
/*!********************************!*\
  !*** ./src/es6/proj/Header.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.ChangeHamburger = exports.InitHeader = undefined;\n\nvar _Slider = __webpack_require__(/*! ./Slider.js */ \"./src/es6/proj/Slider.js\");\n\nvar opt = {\n\thamburger: '.js-hamburger',\n\tmenu: '.js-menu',\n\tclose: '.js-close',\n\titem: '.js-item',\n\n\twhite: \"m--white\",\n\tred: \"m--red\",\n\tblue: \"m--blue\",\n\tblack: \"m--black\",\n\n\tactive: \"is-active\"\n};\n\nvar $hamburger = $(opt.hamburger),\n    $menu = $(opt.menu),\n    $close = $(opt.close),\n    $item = $(opt.item);\n\nfunction _resetClassHamburger() {\n\t$hamburger.removeClass(opt.white);\n\t$hamburger.removeClass(opt.red);\n\t$hamburger.removeClass(opt.blue);\n\t$hamburger.removeClass(opt.black);\n};\n\nfunction ChangeHamburger(index) {\n\t_resetClassHamburger();\n\n\tswitch (index) {\n\t\tcase 0:\n\t\t\t$hamburger.addClass(opt.white);\n\t\t\tbreak;\n\t\tcase 1:\n\t\t\t$hamburger.addClass(opt.red);\n\t\t\tbreak;\n\t\tcase 2:\n\t\t\t$hamburger.addClass(opt.blue);\n\t\t\tbreak;\n\t\tcase 3:\n\t\t\t$hamburger.addClass(opt.black);\n\t\t\tbreak;\n\t}\n};\n\nfunction _closeMenu() {\n\tvar $obj = $(opt.hamburger);\n\n\t$menu.removeClass(opt.active);\n\t$obj.data(\"open\", 0);\n}\n\nfunction InitHeader() {\n\t// Открытие/закрытие меню\n\t$hamburger.click(function () {\n\t\tvar $obj = $(this),\n\t\t    openStatus = $obj.data(\"open\");\n\n\t\tif (openStatus) {\n\t\t\t$menu.removeClass(opt.active);\n\t\t\t$obj.data(\"open\", 0);\n\t\t} else {\n\t\t\t$menu.addClass(opt.active);\n\t\t\t$obj.data(\"open\", 1);\n\t\t}\n\t});\n\n\t// Закрытие меню\n\t$close.click(function () {\n\t\t_closeMenu();\n\t});\n\n\t// Переход на определённый пункт меню\n\t$item.click(function () {\n\t\tvar $obj = $(this),\n\t\t    index = $obj.data(\"index\");\n\n\t\t_closeMenu();\n\t\t(0, _Slider.SliderTo)(index);\n\t});\n};\n\nexports.InitHeader = InitHeader;\nexports.ChangeHamburger = ChangeHamburger;\n\n//# sourceURL=webpack:///./src/es6/proj/Header.js?");

/***/ }),

/***/ "./src/es6/proj/Slider.js":
/*!********************************!*\
  !*** ./src/es6/proj/Slider.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.SliderTo = exports.SliderInit = undefined;\n\nvar _Header = __webpack_require__(/*! ./Header.js */ \"./src/es6/proj/Header.js\");\n\nvar opt = {\n\tcontainer: '.home-page__container',\n\treturn: '.js-return'\n};\n\nvar swiperObj;\n\nfunction SliderTo(index) {\n\tswiperObj.slideTo(index);\n};\n\nfunction SliderInit() {\n\t$(document).ready(function () {\n\t\t// Инициализация слайдера\n\t\tvar swiper = new Swiper(opt.container, {\n\t\t\tdirection: 'vertical',\n\t\t\tslidesPerView: 1,\n\t\t\teffect: 'fade',\n\t\t\tkeyboard: true,\n\t\t\tsimulateTouch: false\n\t\t});\n\n\t\tswiperObj = swiper;\n\n\t\t// Меняем цвет гамбургера исходя из текущего слайдера\n\t\tswiper.on('slideChange', function (e) {\n\t\t\t(0, _Header.ChangeHamburger)(this.activeIndex);\n\t\t});\n\n\t\t// Возврат на первый слайд при клике на блок возврата в footer\n\t\t$(opt.return).click(function () {\n\t\t\tswiper.slideTo(0);\n\t\t});\n\t});\n};\n\nexports.SliderInit = SliderInit;\nexports.SliderTo = SliderTo;\n\n//# sourceURL=webpack:///./src/es6/proj/Slider.js?");

/***/ })

/******/ });