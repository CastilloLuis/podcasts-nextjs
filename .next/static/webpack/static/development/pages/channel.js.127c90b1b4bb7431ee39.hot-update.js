webpackHotUpdate("static/development/pages/channel.js",{

/***/ "./pages/_error.js":
/*!*************************!*\
  !*** ./pages/_error.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");





var _jsxFileName = "/home/lcastillo/Documents/projects/podcasts/pages/_error.js";



/*
    BASE: https://github.com/zeit/next.js#custom-error-handling
*/



var Error =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Error, _React$Component);

  function Error() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Error);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Error).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Error, [{
    key: "render",
    value: function render() {
      var statusCode = this.props.statusCode;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_8__["default"], {
        title: "Oh no :(",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, statusCode === 404 ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-32341248" + " " + "message",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "jsx-32341248",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, "\u274C"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "jsx-32341248",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, "Page not found"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-32341248",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: "/",
        className: "jsx-32341248",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, "Go Back")))) : react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-32341248" + " " + "message",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h2", {
        className: "jsx-32341248",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, "Oh no! \uD83D\uDE13"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "jsx-32341248",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, "Please try later"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "jsx-32341248",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: "/",
        className: "jsx-32341248",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, "Go Back")))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "32341248",
        __self: this
      }, ".message.jsx-32341248{width:100%;height:100vh;ov display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.message.jsx-32341248 img.jsx-32341248{width:300px;}.message.jsx-32341248 a.jsx-32341248{color:black;-webkit-text-decoration:none;text-decoration:none;}.message.jsx-32341248 p.jsx-32341248{color:black;font-size:35px;font-weight:bold;}.message.jsx-32341248 div.jsx-32341248{padding:10px;background:#cecece;border:1px solid #ececec;border-radius:5px;}.message.jsx-32341248 span.jsx-32341248{font-size:40px;color:red;font-weight:bold;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2xjYXN0aWxsby9Eb2N1bWVudHMvcHJvamVjdHMvcG9kY2FzdHMvcGFnZXMvX2Vycm9yLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdDcUIsQUFHd0MsQUFXaEIsQUFHaUIsQUFLQSxBQU1DLEFBT0UsV0EvQkYsQ0FVakIsQUFJeUIsQUFLTixDQU1JLEVBT1QsU0E5QkcsQ0FnQ2xCLEVBZHNCLEtBTVEsUUF2QkgsRUErQjFCLEVBYkEsYUFNc0IsS0FadEIsYUFhQSwyQ0F4QmtDLG1IQUNYLDZGQUN2QiIsImZpbGUiOiIvaG9tZS9sY2FzdGlsbG8vRG9jdW1lbnRzL3Byb2plY3RzL3BvZGNhc3RzL3BhZ2VzL19lcnJvci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gICAgQkFTRTogaHR0cHM6Ly9naXRodWIuY29tL3plaXQvbmV4dC5qcyNjdXN0b20tZXJyb3ItaGFuZGxpbmdcbiovXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcblxuY2xhc3MgRXJyb3IgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRpYyBnZXRJbml0aWFsUHJvcHMoeyByZXMsIGVyciB9KSB7XG4gICAgICBjb25zdCBzdGF0dXNDb2RlID0gcmVzID8gcmVzLnN0YXR1c0NvZGUgOiBlcnIgPyBlcnIuc3RhdHVzQ29kZSA6IG51bGxcbiAgICAgIHJldHVybiB7IHN0YXR1c0NvZGUgfVxuICAgIH1cbiAgXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IHN0YXR1c0NvZGUgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TGF5b3V0IHRpdGxlPVwiT2ggbm8gOihcIj5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1c0NvZGUgPT09IDQwNCA/XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+4p2MPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+UGFnZSBub3QgZm91bmQ8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxMaW5rPjxhIGhyZWY9XCIvXCI+R28gQmFjazwvYT48L0xpbms+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6IFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lc3NhZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5PaCBubyEg8J+YkzwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5QbGVhc2UgdHJ5IGxhdGVyPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+PExpbms+PGEgaHJlZj1cIi9cIj5HbyBCYWNrPC9hPjwvTGluaz48L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgICAgICAgICAgICAubWVzc2FnZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLm1lc3NhZ2UgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzAwcHhcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLm1lc3NhZ2UgYSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLm1lc3NhZ2UgcCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLm1lc3NhZ2UgZGl2IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNjZWNlY2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VjZWNlYztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5tZXNzYWdlIHNwYW4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICAgIDwvTGF5b3V0PlxuICAgICAgICApXG4gICAgfVxuICB9XG4gIFxuICBleHBvcnQgZGVmYXVsdCBFcnJvciJdfQ== */\n/*@ sourceURL=/home/lcastillo/Documents/projects/podcasts/pages/_error.js */"));
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var res = _ref.res,
          err = _ref.err;
      var statusCode = res ? res.statusCode : err ? err.statusCode : null;
      return {
        statusCode: statusCode
      };
    }
  }]);

  return Error;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Error);

/***/ })

})
//# sourceMappingURL=channel.js.127c90b1b4bb7431ee39.hot-update.js.map