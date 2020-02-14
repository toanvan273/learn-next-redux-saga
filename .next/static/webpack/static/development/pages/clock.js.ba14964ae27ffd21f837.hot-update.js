webpackHotUpdate("static\\development\\pages\\clock.js",{

/***/ "./action/clockAction.js":
/*!*******************************!*\
  !*** ./action/clockAction.js ***!
  \*******************************/
/*! exports provided: tickClock, startClock, loadDataSaga */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tickClock", function() { return tickClock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startClock", function() { return startClock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadDataSaga", function() { return loadDataSaga; });
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/date/now */ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "./action/types.js");


var tickClock = function tickClock(isServer) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_1__["TICK_CLOCK"],
    light: !isServer,
    ts: _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default()()
  };
};
var startClock = function startClock() {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_1__["START_CLOCK"]
  };
};
var loadDataSaga = function loadDataSaga() {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_1__["LOAD_DATASAGA"]
  };
};

/***/ })

})
//# sourceMappingURL=clock.js.ba14964ae27ffd21f837.hot-update.js.map