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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);


var _marked =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(runClockSaga),
    _marked2 =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(loadDataSaga);







function runClockSaga() {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function runClockSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["take"])(_action_types__WEBPACK_IMPORTED_MODULE_1__["START_CLOCK"]);

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

function loadDataSaga() {
  var res, data;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function loadDataSaga$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get('https://jsonplaceholder.typicode.com/users');

        case 3:
          res = _context2.sent;
          console.log(res);
          data = res.data;
          _context2.next = 8;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(_action_clockAction__WEBPACK_IMPORTED_MODULE_3__["loadDataSagaSuccess"](data));

        case 8:
          _context2.next = 14;
          break;

        case 10:
          _context2.prev = 10;
          _context2.t0 = _context2["catch"](0);
          _context2.next = 14;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(_action_clockAction__WEBPACK_IMPORTED_MODULE_3__["loadDataSagaErr"](_context2.t0));

        case 14:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[0, 10]]);
}

/* harmony default export */ __webpack_exports__["default"] = (runClockSaga);

/***/ })

})
//# sourceMappingURL=_app.js.5c0cab916f3090c12b0f.hot-update.js.map