webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./saga/rootSaga.js":
/*!**************************!*\
  !*** ./saga/rootSaga.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _testSaga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./testSaga */ "./saga/testSaga.js");
/* harmony import */ var _clockSaga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clockSaga */ "./saga/clockSaga.js");


var _marked =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(rootSaga);





function rootSaga() {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function rootSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([// call(runClockSaga),
          _testSaga__WEBPACK_IMPORTED_MODULE_2__["default"], _clockSaga__WEBPACK_IMPORTED_MODULE_3__["default"] // 
          ]);

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

/* harmony default export */ __webpack_exports__["default"] = (rootSaga);

/***/ })

})
//# sourceMappingURL=_app.js.831115451419be7782c4.hot-update.js.map