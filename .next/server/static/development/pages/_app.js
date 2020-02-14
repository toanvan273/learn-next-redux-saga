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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
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

/***/ "./action/testAction.js":
/*!******************************!*\
  !*** ./action/testAction.js ***!
  \******************************/
/*! exports provided: getUser, getUserSuccess, getUserErr */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUser", function() { return getUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserSuccess", function() { return getUserSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserErr", function() { return getUserErr; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./action/types.js");


const getUser = () => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__["TEST_GET_METHOD"]
});

const getUserSuccess = data => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["TEST_GET_SUCCESS"],
    data
  };
};

const getUserErr = err => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__["TEST_GET_METHOD_ERR"],
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

/***/ "./host.js":
/*!*****************!*\
  !*** ./host.js ***!
  \*****************/
/*! exports provided: host */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "host", function() { return host; });
const host = 'http://5cd12f0fd4a78300147be564.mockapi.io';

/***/ }),

/***/ "./lib/store.js":
/*!**********************!*\
  !*** ./lib/store.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducer_rootReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducer/rootReducer */ "./reducer/rootReducer.js");
/* harmony import */ var _saga_rootSaga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../saga/rootSaga */ "./saga/rootSaga.js");





const bindMiddleware = middleware => {
  if (true) {
    const {
      composeWithDevTools
    } = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");

    return composeWithDevTools(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(...middleware));
  }

  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(...middleware);
};

function configureStore(initialSate) {
  const sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_1___default()();
  const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducer_rootReducer__WEBPACK_IMPORTED_MODULE_2__["default"], initialSate, bindMiddleware([sagaMiddleware]));
  store.sagaTask = sagaMiddleware.run(_saga_rootSaga__WEBPACK_IMPORTED_MODULE_3__["default"]);
  return store;
}

/* harmony default export */ __webpack_exports__["default"] = (configureStore);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

exports.AppInitialProps = _utils.AppInitialProps;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps(_ref) {
  var {
    Component,
    ctx
  } = _ref;
  var pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    var {
      router,
      Component,
      pageProps
    } = this.props;
    var url = createUrl(router);
    return _react.default.createElement(Component, Object.assign({}, pageProps, {
      url: url
    }));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
var warnContainer;
var warnUrl;

if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn("Warning: the `Container` in `_app` has been deprecated and should be removed. https://err.sh/zeit/next.js/app-container-deprecated");
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error("Warning: the 'url' property is deprecated. https://err.sh/zeit/next.js/url-deprecated");
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  var {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: () => {
      if (true) warnUrl();
      router.back();
    },
    push: (url, as) => {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (true) warnUrl();
      var pushRoute = as ? href : '';
      var pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      var replaceRoute = as ? href : '';
      var replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_redux_saga__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-redux-saga */ "next-redux-saga");
/* harmony import */ var next_redux_saga__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_redux_saga__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/store */ "./lib/store.js");
var _jsxFileName = "C:\\Users\\toan.truong\\Desktop\\Custom\\template-custom\\pages\\_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }








class MyApp extends next_app__WEBPACK_IMPORTED_MODULE_0___default.a {
  static async getInitialProps({
    Component,
    ctx
  }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({
        ctx
      });
    }

    return {
      pageProps
    };
  }

  render() {
    const {
      Component,
      pageProps,
      store
    } = this.props;
    return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_2__["Provider"], {
      store: store,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, __jsx(Component, _extends({}, pageProps, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3___default()(_lib_store__WEBPACK_IMPORTED_MODULE_5__["default"])(next_redux_saga__WEBPACK_IMPORTED_MODULE_4___default()(MyApp)));

/***/ }),

/***/ "./reducer/clockReducer.js":
/*!*********************************!*\
  !*** ./reducer/clockReducer.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return clockReducer; });
/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action/types */ "./action/types.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  lastUpdate: 0,
  light: false,
  dataSaga: null
};
function clockReducer(state = initialState, action) {
  // console.log('action :', action);
  switch (action.type) {
    case _action_types__WEBPACK_IMPORTED_MODULE_0__["TICK_CLOCK"]:
      return _objectSpread({}, state, {}, {
        lastUpdate: action.ts,
        light: action.light
      });

    case _action_types__WEBPACK_IMPORTED_MODULE_0__["LOAD_DATASAGA_SUCCESS"]:
      return _objectSpread({}, state, {
        dataSaga: action.data
      });

    default:
      return state;
  }
}

/***/ }),

/***/ "./reducer/rootReducer.js":
/*!********************************!*\
  !*** ./reducer/rootReducer.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _testReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./testReducer */ "./reducer/testReducer.js");
/* harmony import */ var _clockReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clockReducer */ "./reducer/clockReducer.js");



/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  testReducer: _testReducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  clockReducer: _clockReducer__WEBPACK_IMPORTED_MODULE_2__["default"] // 

}));

/***/ }),

/***/ "./reducer/testReducer.js":
/*!********************************!*\
  !*** ./reducer/testReducer.js ***!
  \********************************/
/*! exports provided: initialSate, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialSate", function() { return initialSate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return userReducer; });
/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action/types */ "./action/types.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialSate = {
  data: null,
  err: null
};
function userReducer(state = initialSate, action) {
  switch (action.type) {
    case _action_types__WEBPACK_IMPORTED_MODULE_0__["TEST_GET_SUCCESS"]:
      return _objectSpread({}, state, {
        data: action.data
      });

    case _action_types__WEBPACK_IMPORTED_MODULE_0__["TEST_GET_METHOD_ERR"]:
      return _objectSpread({}, state, {
        err: action.err
      });

    default:
      return state;
  }
}

/***/ }),

/***/ "./saga/clockSaga.js":
/*!***************************!*\
  !*** ./saga/clockSaga.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action/types */ "./action/types.js");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _action_clockAction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../action/clockAction */ "./action/clockAction.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);






function* runClockSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["take"])(_action_types__WEBPACK_IMPORTED_MODULE_0__["START_CLOCK"]); // while(true) {
  //     yield put(tickClock(true))
  //     yield delay(1000)
  // }
}

function* loadDataSaga() {
  try {
    const res = yield axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('https://jsonplaceholder.typicode.com/users');
    console.log(res);
    const {
      data
    } = res;
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_action_clockAction__WEBPACK_IMPORTED_MODULE_2__["loadDataSagaSuccess"](data));
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_action_clockAction__WEBPACK_IMPORTED_MODULE_2__["loadDataSagaErr"](err));
  }
}

function* wathGetDataSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(runClockSaga), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_action_types__WEBPACK_IMPORTED_MODULE_0__["LOAD_DATASAGA"], loadDataSaga)]);
}

/* harmony default export */ __webpack_exports__["default"] = (wathGetDataSaga);

/***/ }),

/***/ "./saga/rootSaga.js":
/*!**************************!*\
  !*** ./saga/rootSaga.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _testSaga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./testSaga */ "./saga/testSaga.js");
/* harmony import */ var _clockSaga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clockSaga */ "./saga/clockSaga.js");




function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_clockSaga__WEBPACK_IMPORTED_MODULE_2__["default"]), _testSaga__WEBPACK_IMPORTED_MODULE_1__["default"] // runClockSaga
  // 
  ]);
}

/* harmony default export */ __webpack_exports__["default"] = (rootSaga);

/***/ }),

/***/ "./saga/testSaga.js":
/*!**************************!*\
  !*** ./saga/testSaga.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _action_testAction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../action/testAction */ "./action/testAction.js");
/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../action/types */ "./action/types.js");
/* harmony import */ var _host__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../host */ "./host.js");





const apiGetUser = _host__WEBPACK_IMPORTED_MODULE_4__["host"] + '/users'; // put = vs dispatch

function* getUserSaga() {
  try {
    const res = yield axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(apiGetUser);
    console.log(res); // const data = yield res.jon()

    const {
      data
    } = res; // console.log('data',data);

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_action_testAction__WEBPACK_IMPORTED_MODULE_2__["getUserSuccess"])(data));
  } catch (err) {
    console.log(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_action_testAction__WEBPACK_IMPORTED_MODULE_2__["getUserErr"])(err));
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_action_types__WEBPACK_IMPORTED_MODULE_3__["TEST_GET_METHOD"], getUserSaga)); //takeLatest:   chỉ cho phép một hàm xử lý có thể chạy tại một thời điểm

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next-redux-saga":
/*!**********************************!*\
  !*** external "next-redux-saga" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-saga");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

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

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map