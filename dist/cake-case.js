(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["CakeCase"] = factory();
	else
		root["CakeCase"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/cake-case.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/cake-case.ts":
/*!**************************!*\
  !*** ./src/cake-case.ts ***!
  \**************************/
/*! exports provided: normal, lower, upper, capital, camel, pascal, kebab, snake */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normal", function() { return normal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lower", function() { return lower; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "upper", function() { return upper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "capital", function() { return capital; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "camel", function() { return camel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pascal", function() { return pascal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "kebab", function() { return kebab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "snake", function() { return snake; });
function normal(str, fill) {
    if (fill === void 0) { fill = ' '; }
    return str.replace(/([A-Z][a-z]|[0-9][a-zA-Z])/g, ' $1')
        .replace(/([a-z])([A-Z])/g, '$1 $2')
        .replace(/([0-9])([a-zA-Z])/g, '$1 $2')
        .replace(/([a-zA-Z])([0-9])/g, '$1 $2')
        .replace(/([\W|_]+)/g, ' ')
        .trim()
        .replace(/\s+/g, fill);
}
function lower(str, fill) {
    if (fill === void 0) { fill = ' '; }
    return normal(str, fill).toLowerCase();
}
function upper(str, fill) {
    if (fill === void 0) { fill = ' '; }
    return normal(str, fill).toUpperCase();
}
function capital(str, fill) {
    if (fill === void 0) { fill = ' '; }
    return lower(str, ' ').split(' ')
        .map(function (word) { return word[0].toUpperCase() + word.substr(1); })
        .join(' ').replace(/\s+/g, fill);
}
function camel(str) {
    str = capital(str, '');
    return str[0].toLowerCase() + str.substr(1);
}
function pascal(str) {
    return capital(str, '');
}
function kebab(str) {
    return lower(str, '-');
}
function snake(str) {
    return lower(str, '_');
}


/***/ })

/******/ });
});
//# sourceMappingURL=cake-case.js.map