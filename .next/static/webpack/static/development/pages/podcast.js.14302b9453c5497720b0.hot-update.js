webpackHotUpdate("static/development/pages/podcast.js",{

/***/ "./pages/podcast.js":
/*!**************************!*\
  !*** ./pages/podcast.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_11__);









var _jsxFileName = "/home/lcastillo/Documents/projects/podcasts/pages/podcast.js";




var _default =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(_default, _React$Component);

  function _default() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _default);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(_default)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "state", {
      showDescription: false
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "handlePodcastImageClick", function () {
      var showDescription = _this.state.showDescription;
      showDescription ? _this.setState({
        showDescription: false
      }) : _this.setState({
        showDescription: true
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(_default, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          title = _this$props.title,
          description = _this$props.description,
          audio = _this$props.audio,
          podcastImage = _this$props.podcastImage,
          channelId = _this$props.channelId;
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(Layout, {
        title: title,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["3918817849", [podcastImage]]]) + " " + "podcast-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(GoToPrevPage, {
        query: "/channel?id=".concat(channelId),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["3918817849", [podcastImage]]]) + " " + "podcastInfo-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, !this.state.showDescription ? react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        onClick: function onClick() {
          return _this2.handlePodcastImageClick();
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["3918817849", [podcastImage]]]) + " " + "podcastImage-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
        src: podcastImage,
        alt: "podcast image player",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["3918817849", [podcastImage]]]) + " " + "podcastPlayerImage",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      })) : react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        onClick: function onClick() {
          return _this2.handlePodcastImageClick();
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["3918817849", [podcastImage]]]) + " " + "description-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["3918817849", [podcastImage]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, description))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["3918817849", [podcastImage]]]) + " " + "player-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h4", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["3918817849", [podcastImage]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, title), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("audio", {
        controls: true,
        src: audio,
        type: "audio/mpeg",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["3918817849", [podcastImage]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a, {
        id: "3918817849",
        dynamic: [podcastImage],
        __self: this
      }, ".podcast-wrapper.__jsx-style-dynamic-selector{width:100%;height:100vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:transparent;}.podcastInfo-wrapper.__jsx-style-dynamic-selector{width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;outline:none;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:url(".concat(podcastImage, ") center no-repeat;background-size:cover;}.podcastInfo-wrapper.__jsx-style-dynamic-selector div.__jsx-style-dynamic-selector{width:100%;height:100%;background:linear-gradient(0deg,rgba(81,81,81,0.65),rgba(34,34,34,0.74)) 0% 0%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;padding:20px 15px 56px;text-align:center;}.description-wrapper.__jsx-style-dynamic-selector span.__jsx-style-dynamic-selector{color:white;text-shadow:2px 2px 3px rgba(0,0,0,0.75);}.podcastImage-wrapper.__jsx-style-dynamic-selector{width:100%;height:100%;}.podcastPlayerImage.__jsx-style-dynamic-selector{width:300px;height:300px;border-radius:4px;box-shadow:0px 2px 6px rgba(0,0,0,0.15);}.player-wrapper.__jsx-style-dynamic-selector{width:100%;height:220px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:#b9b9b9;}.player-wrapper.__jsx-style-dynamic-selector audio.__jsx-style-dynamic-selector{outline:none;}h4.__jsx-style-dynamic-selector{color:white;text-shadow:2px 2px 3px rgba(0,0,0,0.75);}.goBack.__jsx-style-dynamic-selector{position:absolute;top:10px;left:10px;font-size:25px;-webkit-text-decoration:none;text-decoration:none;color:white;font-weight:bold;text-shadow:2px 2px 3px rgba(0,0,0,0.75);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2xjYXN0aWxsby9Eb2N1bWVudHMvcHJvamVjdHMvcG9kY2FzdHMvcGFnZXMvcG9kY2FzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErQ3lCLEFBRzRDLEFBVUEsQUFXQSxBQWFDLEFBS0QsQUFLQyxBQU9ELEFBV2hCLEFBR2lCLEFBS00sV0FyRUwsQUFVRCxBQVdBLEFBa0JBLEFBWUMsQ0FqQjRCLEFBVTVCLEFBcUI0QixDQUo3QyxLQVNhLEtBM0RJLEFBVzBFLEFBa0IzRixDQXZDaUIsQUFtREEsQ0FQSyxFQTBCUixVQUNLLE1BMUJ5QixTQTJCbkIsQ0F0Q3pCLEFBK0JBLDhCQW5CQSxjQW5DaUIsQ0FWUyxBQW1EQSxJQTlCVCxBQW1ERCxRQTdEVyxJQThETixpQkFDd0IseUNBQzdDLElBMUUyQixBQXFCTSxBQThCTixpQ0F4Q0osa0VBVkEsQUFtREEsd0JBOUJHLEdBVndDLDhEQUVuRSxJQVhBLEFBa0R3QixTQTlCQSxTQVR2QixDQXdDQSxJQW5EQSwrRUFxQm1CLGVBQ1EsdUJBQ0wsa0JBQ3RCIiwiZmlsZSI6Ii9ob21lL2xjYXN0aWxsby9Eb2N1bWVudHMvcHJvamVjdHMvcG9kY2FzdHMvcGFnZXMvcG9kY2FzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgc3RhdGUgPSB7XG4gICAgICAgIHNob3dEZXNjcmlwdGlvbjogZmFsc2VcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHsgcXVlcnk6IHsgaWQgfSB9KSA9PiB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLmF1ZGlvYm9vbS5jb20vYXVkaW9fY2xpcHMvJHtpZH0ubXAzYCk7XG4gICAgICAgIGNvbnN0IHsgYm9keTogeyBhdWRpb19jbGlwIH0gfSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgY29uc3QgdGl0bGUgPSBhdWRpb19jbGlwLnRpdGxlO1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGF1ZGlvX2NsaXAuZGVzY3JpcHRpb247XG4gICAgICAgIGNvbnN0IGF1ZGlvID0gYXVkaW9fY2xpcC51cmxzLmhpZ2hfbXAzO1xuICAgICAgICBjb25zdCBwb2RjYXN0SW1hZ2UgPSBhdWRpb19jbGlwLnVybHMuaW1hZ2VcbiAgICAgICAgY29uc3QgY2hhbm5lbElkID0gYXVkaW9fY2xpcC5jaGFubmVsLmlkO1xuICAgICAgICByZXR1cm4geyB0aXRsZSwgZGVzY3JpcHRpb24sIGF1ZGlvLCBwb2RjYXN0SW1hZ2UsIGNoYW5uZWxJZCB9O1xuICAgIH1cblxuICAgIGhhbmRsZVBvZGNhc3RJbWFnZUNsaWNrID0gKCkgPT4ge1xuICAgICAgICBjb25zdCB7IHNob3dEZXNjcmlwdGlvbiB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgc2hvd0Rlc2NyaXB0aW9uID8gdGhpcy5zZXRTdGF0ZSh7c2hvd0Rlc2NyaXB0aW9uOiBmYWxzZX0pIDogdGhpcy5zZXRTdGF0ZSh7c2hvd0Rlc2NyaXB0aW9uOiB0cnVlfSlcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBhdWRpbywgcG9kY2FzdEltYWdlLCBjaGFubmVsSWQgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TGF5b3V0IHRpdGxlPXsgdGl0bGUgfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvZGNhc3Qtd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgICA8R29Ub1ByZXZQYWdlIFxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnk9e2AvY2hhbm5lbD9pZD0keyBjaGFubmVsSWQgfWB9XG4gICAgICAgICAgICAgICAgICAgIC8+ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvZGNhc3RJbmZvLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhdGhpcy5zdGF0ZS5zaG93RGVzY3JpcHRpb24gPyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoPGRpdiBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZVBvZGNhc3RJbWFnZUNsaWNrKCl9IGNsYXNzTmFtZT1cInBvZGNhc3RJbWFnZS13cmFwcGVyXCI+PGltZyBzcmM9e3BvZGNhc3RJbWFnZX0gY2xhc3NOYW1lPVwicG9kY2FzdFBsYXllckltYWdlXCIgYWx0PVwicG9kY2FzdCBpbWFnZSBwbGF5ZXJcIi8+PC9kaXY+KSA6IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVQb2RjYXN0SW1hZ2VDbGljaygpfSBjbGFzc05hbWU9XCJkZXNjcmlwdGlvbi13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntkZXNjcmlwdGlvbn08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGxheWVyLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoND57IHRpdGxlIH08L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGF1ZGlvIGNvbnRyb2xzIHNyYz17YXVkaW99IHR5cGU9XCJhdWRpby9tcGVnXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICAgICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5wb2RjYXN0LXdyYXBwZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5wb2RjYXN0SW5mby13cmFwcGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgke3BvZGNhc3RJbWFnZX0pIGNlbnRlciBuby1yZXBlYXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucG9kY2FzdEluZm8td3JhcHBlciBkaXYge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSg4MSwgODEsIDgxLCAwLjY1KSwgcmdiYSgzNCwgMzQsIDM0LCAwLjc0KSkgMCUgMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMTVweCA1NnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7ICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5kZXNjcmlwdGlvbi13cmFwcGVyIHNwYW57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDJweCAycHggM3B4IHJnYmEoMCwwLDAsMC43NSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnBvZGNhc3RJbWFnZS13cmFwcGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucG9kY2FzdFBsYXllckltYWdlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAycHggNnB4IHJnYmEoMCwwLDAsMC4xNSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnBsYXllci13cmFwcGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOyAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2I5YjliOTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucGxheWVyLXdyYXBwZXIgYXVkaW8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaDQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAycHggMnB4IDNweCByZ2JhKDAsMCwwLDAuNzUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5nb0JhY2sge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAycHggMnB4IDNweCByZ2JhKDAsMCwwLDAuNzUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvTGF5b3V0PlxuICAgICAgICApXG4gICAgfVxufVxuXG4iXX0= */\n/*@ sourceURL=/home/lcastillo/Documents/projects/podcasts/pages/podcast.js */"))));
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_default, "getInitialProps",
/*#__PURE__*/
function () {
  var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
    var id, response, _ref3, audio_clip, title, description, audio, podcastImage, channelId;

    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id = _ref.query.id;
            _context.next = 3;
            return fetch("https://api.audioboom.com/audio_clips/".concat(id, ".mp3"));

          case 3:
            response = _context.sent;
            _context.next = 6;
            return response.json();

          case 6:
            _ref3 = _context.sent;
            audio_clip = _ref3.body.audio_clip;
            title = audio_clip.title;
            description = audio_clip.description;
            audio = audio_clip.urls.high_mp3;
            podcastImage = audio_clip.urls.image;
            channelId = audio_clip.channel.id;
            return _context.abrupt("return", {
              title: title,
              description: description,
              audio: audio,
              podcastImage: podcastImage,
              channelId: channelId
            });

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}());



/***/ })

})
//# sourceMappingURL=podcast.js.14302b9453c5497720b0.hot-update.js.map