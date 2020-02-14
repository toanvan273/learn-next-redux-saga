webpackHotUpdate("static\\development\\pages\\clock.js",{

/***/ "./components/clock/ClockControl.js":
/*!******************************************!*\
  !*** ./components/clock/ClockControl.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\toan.truong\\Desktop\\Custom\\template-custom\\components\\clock\\ClockControl.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var n = function n(_n) {
  return _n < 10 ? '0' + _n : _n;
};

var format = function format(t) {
  var hours = t.getUTCHours();
  var mins = t.getUTCMinutes();
  var seconds = t.getUTCSeconds();
  return "".concat(n(hours), ":").concat(n(mins), ":").concat(n(seconds));
};

function ClockControl(_ref) {
  var lastUpdate = _ref.lastUpdate,
      light = _ref.light;
  //    console.log('ClockControl', lastUpdate, light);
  return __jsx("div", {
    className: "jsx-1600965472" + " " + ((light ? 'light' : '') || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, format(new Date(lastUpdate)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1600965472",
    __self: this
  }, "div.jsx-1600965472{padding:15px;display:inline-block;color:#82fa58;font:50px menlo,monaco,monospace;background-color:#000;}.light.jsx-1600965472{background-color:#999;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcdG9hbi50cnVvbmdcXERlc2t0b3BcXEN1c3RvbVxcdGVtcGxhdGUtY3VzdG9tXFxjb21wb25lbnRzXFxjbG9ja1xcQ2xvY2tDb250cm9sLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWVpQixBQUdrQyxBQU9TLGFBTkQsU0FPckIsWUFOYyxjQUNxQixpQ0FDYixzQkFDdEIiLCJmaWxlIjoiQzpcXFVzZXJzXFx0b2FuLnRydW9uZ1xcRGVza3RvcFxcQ3VzdG9tXFx0ZW1wbGF0ZS1jdXN0b21cXGNvbXBvbmVudHNcXGNsb2NrXFxDbG9ja0NvbnRyb2wuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmNvbnN0IG4gPSBuID0+IChuIDwgMTAgPyAnMCcgKyBuIDogbilcclxuY29uc3QgZm9ybWF0ID0gdCA9PiB7XHJcbiAgICBjb25zdCBob3VycyA9IHQuZ2V0VVRDSG91cnMoKVxyXG4gICAgY29uc3QgbWlucyA9IHQuZ2V0VVRDTWludXRlcygpXHJcbiAgICBjb25zdCBzZWNvbmRzID0gdC5nZXRVVENTZWNvbmRzKClcclxuICAgIHJldHVybiBgJHtuKGhvdXJzKX06JHtuKG1pbnMpfToke24oc2Vjb25kcyl9YFxyXG59XHJcbmZ1bmN0aW9uIENsb2NrQ29udHJvbCh7IGxhc3RVcGRhdGUsIGxpZ2h0IH0pIHtcclxuLy8gICAgY29uc29sZS5sb2coJ0Nsb2NrQ29udHJvbCcsIGxhc3RVcGRhdGUsIGxpZ2h0KTtcclxuICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtsaWdodCA/ICdsaWdodCcgOiAnJ30+XHJcbiAgICAgICAgICAgIHtmb3JtYXQobmV3IERhdGUobGFzdFVwZGF0ZSkpfVxyXG4gICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgIGRpdiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM4MmZhNTg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udDogNTBweCBtZW5sbywgbW9uYWNvLCBtb25vc3BhY2U7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmxpZ2h0IHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTk5O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQ2xvY2tDb250cm9sIl19 */\n/*@ sourceURL=C:\\\\Users\\\\toan.truong\\\\Desktop\\\\Custom\\\\template-custom\\\\components\\\\clock\\\\ClockControl.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (ClockControl);

/***/ })

})
//# sourceMappingURL=clock.js.959e28870f83d5a1cc66.hot-update.js.map