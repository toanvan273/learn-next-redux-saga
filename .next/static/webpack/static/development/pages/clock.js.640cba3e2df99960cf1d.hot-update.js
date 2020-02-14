webpackHotUpdate("static\\development\\pages\\clock.js",{

/***/ "./components/Page.js":
/*!****************************!*\
  !*** ./components/Page.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_clock_ClockControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/clock/ClockControl */ "./components/clock/ClockControl.js");

var _jsxFileName = "C:\\Users\\toan.truong\\Desktop\\Custom\\template-custom\\components\\Page.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function Page(_ref) {
  var clockReducer = _ref.clockReducer;
  console.log('Page', clockReducer);
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx(_components_clock_ClockControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
    lastUpdate: clockReducer.lastUpdate,
    light: clockReducer.light,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), __jsx("pre", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("code", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(clockReducer.dataSaga, null, 1))));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(function (state) {
  return state;
})(Page)); // import React from 'react'
// class Page extends React.PureComponent {
//     constructor(props){
//         console.log(props);
//         super(props)
//         this.state={
//         }
//     }
//     UNSAFE_componentWillReceiveProps(n){
//         console.log('UNSAFE_componentWillReceiveProps',n);
//     }
//     // componentDidUpdate(prevProps,preState){
//     //     console.log('componentDidUpdate',prevProps,preState);
//     // }
//     render(){
//         return (
//             <React.Fragment>
//             </React.Fragment>
//         )
//     }
// }
// export default connect(state=>state)(Page)

/***/ })

})
//# sourceMappingURL=clock.js.640cba3e2df99960cf1d.hot-update.js.map