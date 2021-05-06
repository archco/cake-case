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
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it uses a non-standard name for the exports (exports).
(() => {
var exports = __webpack_exports__;
/*!**************************!*\
  !*** ./src/cake-case.ts ***!
  \**************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.snake = exports.kebab = exports.pascal = exports.camel = exports.capital = exports.upper = exports.lower = exports.normal = void 0;
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
exports.normal = normal;
function lower(str, fill) {
    if (fill === void 0) { fill = ' '; }
    return normal(str, fill).toLowerCase();
}
exports.lower = lower;
function upper(str, fill) {
    if (fill === void 0) { fill = ' '; }
    return normal(str, fill).toUpperCase();
}
exports.upper = upper;
function capital(str, fill) {
    if (fill === void 0) { fill = ' '; }
    return lower(str, ' ').split(' ')
        .map(function (word) { return word[0].toUpperCase() + word.substr(1); })
        .join(' ').replace(/\s+/g, fill);
}
exports.capital = capital;
function camel(str) {
    str = capital(str, '');
    return str[0].toLowerCase() + str.substr(1);
}
exports.camel = camel;
function pascal(str) {
    return capital(str, '');
}
exports.pascal = pascal;
function kebab(str) {
    return lower(str, '-');
}
exports.kebab = kebab;
function snake(str) {
    return lower(str, '_');
}
exports.snake = snake;

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=cake-case.js.map