webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./saga/clockSaga.js":
/*!***************************!*\
  !*** ./saga/clockSaga.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../action/types */ "./action/types.js");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _action_clockAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../action/clockAction */ "./action/clockAction.js");


var _marked =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(runClockSaga);





function runClockSaga() {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function runClockSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["take"])(_action_types__WEBPACK_IMPORTED_MODULE_1__["START_CLOCK"]);

        case 2:
          if (false) {}

          _context.next = 5;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(Object(_action_clockAction__WEBPACK_IMPORTED_MODULE_3__["tickClock"])(true));

        case 5:
          _context.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["delay"])(1000);

        case 7:
          _context.next = 2;
          break;

        case 9:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

/* harmony default export */ __webpack_exports__["default"] = (runClockSaga);

/***/ })

})
//# sourceMappingURL=_app.js.ecfb708175518bcbb0d5.hot-update.js.map