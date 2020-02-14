webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./saga/testSaga.js":
/*!**************************!*\
  !*** ./saga/testSaga.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _action_testAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../action/testAction */ "./action/testAction.js");
/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../action/types */ "./action/types.js");
/* harmony import */ var _host__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../host */ "./host.js");


var _marked =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(getUserSaga);






var apiGetUser = _host__WEBPACK_IMPORTED_MODULE_5__["host"] + '/users'; // put = vs dispatch

function getUserSaga() {
  var res, data;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function getUserSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(apiGetUser);

        case 3:
          res = _context.sent;
          console.log(res); // const data = yield res.jon()

          data = res.data; // console.log('data',data);

          _context.next = 8;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_action_testAction__WEBPACK_IMPORTED_MODULE_3__["getUserSuccess"])(data));

        case 8:
          _context.next = 15;
          break;

        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);
          _context.next = 15;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_action_testAction__WEBPACK_IMPORTED_MODULE_3__["getUserErr"])(_context.t0));

        case 15:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[0, 10]]);
}

/* harmony default export */ __webpack_exports__["default"] = (Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_action_types__WEBPACK_IMPORTED_MODULE_4__["TEST_GET_METHOD"], getUserSaga)); //takeLatest:   chỉ cho phép một hàm xử lý có thể chạy tại một thời điểm

/***/ })

})
//# sourceMappingURL=_app.js.68a15697eae9be71331b.hot-update.js.map