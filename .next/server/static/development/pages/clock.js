module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

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
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./action/types.js");

const tickClock = isServer => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["TICK_CLOCK"],
    light: !isServer,
    ts: Date.now()
  };
};
const startClock = () => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["START_CLOCK"]
  };
};
const loadDataSaga = () => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["LOAD_DATASAGA"]
  };
};
const loadDataSagaSuccess = data => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__["LOAD_DATASAGA_SUCCESS"],
  data
});
const loadDataSagaErr = err => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__["LOAD_DATASAGA_ERR"],
  err
});

/***/ }),

/***/ "./action/types.js":
/*!*************************!*\
  !*** ./action/types.js ***!
  \*************************/
/*! exports provided: TEST_GET_METHOD, TEST_GET_SUCCESS, TEST_GET_METHOD_ERR, TICK_CLOCK, START_CLOCK, LOAD_DATASAGA, LOAD_DATASAGA_SUCCESS, LOAD_DATASAGA_ERR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEST_GET_METHOD", function() { return TEST_GET_METHOD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEST_GET_SUCCESS", function() { return TEST_GET_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEST_GET_METHOD_ERR", function() { return TEST_GET_METHOD_ERR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TICK_CLOCK", function() { return TICK_CLOCK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "START_CLOCK", function() { return START_CLOCK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_DATASAGA", function() { return LOAD_DATASAGA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_DATASAGA_SUCCESS", function() { return LOAD_DATASAGA_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_DATASAGA_ERR", function() { return LOAD_DATASAGA_ERR; });
const TEST_GET_METHOD = 'TEST_GET_METHOD';
const TEST_GET_SUCCESS = 'TEST_GET_SUCCESS';
const TEST_GET_METHOD_ERR = 'TEST_GET_METHOD_ERR';
const TICK_CLOCK = 'TICK_CLOCK';
const START_CLOCK = 'START_CLOCK';
const LOAD_DATASAGA = 'LOAD_DATASAGA';
const LOAD_DATASAGA_SUCCESS = 'LOAD_DATASAGA_SUCCESS';
const LOAD_DATASAGA_ERR = 'LOAD_DATASAGA_ERR';

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\toan.truong\\Desktop\\Custom\\template-custom\\components\\Header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// import Link from 'next/link'

const linkStyle = {
  marginRight: 15
};
const {
  Link
} = _routes__WEBPACK_IMPORTED_MODULE_1___default.a;
function Header() {
  // console.log('router :',routes);
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx(Link, {
    route: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("a", {
    style: linkStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Home")), __jsx(Link, {
    route: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("a", {
    style: linkStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "About")), __jsx(Link, {
    route: "/users",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("a", {
    style: linkStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Users")), __jsx(Link, {
    route: "/clock",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("a", {
    style: linkStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Clock")), __jsx(Link, {
    route: "/post",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("a", {
    style: linkStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Post")));
}

/***/ }),

/***/ "./components/MyLayout.js":
/*!********************************!*\
  !*** ./components/MyLayout.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
var _jsxFileName = "C:\\Users\\toan.truong\\Desktop\\Custom\\template-custom\\components\\MyLayout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD',
  height: '100%'
};
function Layout(props) {
  return __jsx("div", {
    style: layoutStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx(_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), props.children);
}

/***/ }),

/***/ "./components/Page.js":
/*!****************************!*\
  !*** ./components/Page.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_clock_ClockControl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/clock/ClockControl */ "./components/clock/ClockControl.js");
var _jsxFileName = "C:\\Users\\toan.truong\\Desktop\\Custom\\template-custom\\components\\Page.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Page({
  clockReducer
}) {
  console.log('Page', clockReducer);
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx(_components_clock_ClockControl__WEBPACK_IMPORTED_MODULE_2__["default"], {
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
  }, JSON.stringify(clockReducer.dataSaga, null, 1))));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(state => state)(Page)); // import React from 'react'
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

/***/ }),

/***/ "./components/clock/ClockControl.js":
/*!******************************************!*\
  !*** ./components/clock/ClockControl.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\toan.truong\\Desktop\\Custom\\template-custom\\components\\clock\\ClockControl.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const n = n => n < 10 ? '0' + n : n;

const format = t => {
  const hours = t.getUTCHours();
  const mins = t.getUTCMinutes();
  const seconds = t.getUTCSeconds();
  return `${n(hours)}:${n(mins)}:${n(seconds)}`;
};

function ClockControl({
  lastUpdate,
  light
}) {
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

/***/ }),

/***/ "./pages/clock.js":
/*!************************!*\
  !*** ./pages/clock.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/MyLayout */ "./components/MyLayout.js");
/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Page */ "./components/Page.js");
/* harmony import */ var _action_clockAction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../action/clockAction */ "./action/clockAction.js");
var _jsxFileName = "C:\\Users\\toan.truong\\Desktop\\Custom\\template-custom\\pages\\clock.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






class Clock extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  static async getInitialProps(props) {
    const {
      store,
      isServer
    } = props.ctx;
    store.dispatch(Object(_action_clockAction__WEBPACK_IMPORTED_MODULE_4__["tickClock"])(isServer));

    if (!store.getState().clockReducer.dataSaga) {
      store.dispatch(Object(_action_clockAction__WEBPACK_IMPORTED_MODULE_4__["loadDataSaga"])());
    }

    return {
      isServer
    };
  }

  componentDidMount() {
    this.props.dispatch(Object(_action_clockAction__WEBPACK_IMPORTED_MODULE_4__["startClock"])()); // console.log('clock-did--mount', this.props);
  }

  render() {
    return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, __jsx(_components_Page__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])()(Clock));

/***/ }),

/***/ "./routes.js":
/*!*******************!*\
  !*** ./routes.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const nextRoutes = __webpack_require__(/*! next-routes */ "next-routes");

const routes = module.exports = nextRoutes();
routes.add('index', '/');
routes.add('post', '/blog/:slug');
routes.add('about');
routes.add('users');
routes.add('clock');

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/clock.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\toan.truong\Desktop\Custom\template-custom\pages\clock.js */"./pages/clock.js");


/***/ }),

/***/ "next-routes":
/*!******************************!*\
  !*** external "next-routes" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-routes");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=clock.js.map