webpackHotUpdate("static\\development\\pages\\clock.js",{

/***/ "./action/clockAction.js":
/*!*******************************!*\
  !*** ./action/clockAction.js ***!
  \*******************************/
/*! exports provided: tickClock, startClock, loadDataSaga, loadDataSagaSuccess, loadDataSagaErr */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tickClock", function() { return tickClock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startClock", function() { return startClock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadDataSaga", function() { return loadDataSaga; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadDataSagaSuccess", function() { return loadDataSagaSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadDataSagaErr", function() { return loadDataSagaErr; });
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
var loadDataSagaSuccess = function loadDataSagaSuccess(data) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_1__["LOAD_DATASAGA_SUCCESS"],
    data: data
  };
};
var loadDataSagaErr = function loadDataSagaErr(err) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_1__["LOAD_DATASAGA_ERR"],
    err: err
  };
};

/***/ })

})
//# sourceMappingURL=clock.js.cf9ce15290bad7d3b800.hot-update.js.map