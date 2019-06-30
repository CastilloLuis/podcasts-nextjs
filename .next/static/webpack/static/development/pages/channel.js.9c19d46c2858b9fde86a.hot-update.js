webpackHotUpdate("static/development/pages/channel.js",{

/***/ "./components/ChannelContentList.js":
/*!******************************************!*\
  !*** ./components/ChannelContentList.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/lcastillo/Documents/projects/podcasts/components/ChannelContentList.js";




var ChannelContentList = function ChannelContentList(_ref) {
  var listTitle = _ref.listTitle,
      items = _ref.items;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2590065608" + " " + "channelWrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-2590065608",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, listTitle), items.map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "/podcast?id=".concat(item.id),
      key: index,
      className: "jsx-2590065608" + " " + "list",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: item.urls.image ? item.urls.image : serie.urls.logo_image.original ? serie.urls.logo_image.original : channelData.urls.logo_image.original,
      alt: "podcast image",
      className: "jsx-2590065608" + " " + "list-image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-2590065608" + " " + "list-content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "jsx-2590065608" + " " + "list-item-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, item.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "jsx-2590065608" + " " + "list-item-description",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, item.description.substr(0, 80), "..."))));
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2590065608",
    __self: this
  }, ".channelHero.jsx-2590065608{width:100%;height:150px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:url(".concat(channelData.urls.logo_image.original, ") no-repeat center;background-size:cover;}.logoText.jsx-2590065608{font-size:30px;color:white;font-weight:bold;text-align:center;text-shadow:2px 2px 3px rgba(0,0,0,0.75);}h1.jsx-2590065608{font-weight:bold;}h3.jsx-2590065608{width:100%;text-align:left;border-bottom:1px solid #ececec;}.channelWrapper.jsx-2590065608{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:10px;}img.jsx-2590065608{border-radius:3px;box-shadow:0px 2px 6px rgba(0,0,0,0.15);width:100%;}.list.jsx-2590065608{width:100%;text-align:left;padding:10px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;-webkit-text-decoration:none;text-decoration:none;}.list-image.jsx-2590065608{width:45px;height:45px;border-radius:3px;border:1px solid #ececec;margin-right:15px;}.list-content.jsx-2590065608{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.list-item-title.jsx-2590065608{font-size:14px;font-weight:500;color:#191919;}.list-item-description.jsx-2590065608{font-size:13px;color:#333333;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2xjYXN0aWxsby9Eb2N1bWVudHMvcHJvamVjdHMvcG9kY2FzdHMvY29tcG9uZW50cy9DaGFubmVsQ29udGVudExpc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0JpQixBQUlvQyxBQVVJLEFBUUUsQUFJTixBQU1FLEFBUUssQUFNUCxBQVVBLEFBUUUsQUFLRSxBQU1BLFdBdEVGLEFBc0JHLEFBb0JBLEFBVUosSUExQ0EsQUF1REksQUFPckIsRUF0REMsQ0FrQjRDLEtBaUJ0QixDQXBETCxHQVVJLEFBYXRCLEFBbUJrQixFQTZCakIsRUFMRCxTQXZCa0IsQ0FVWSxHQTFDUCxDQXVEdEIsYUE3QkQsQ0FkQyxHQVg2QyxJQTBDdkIsR0FqQnRCLEtBVjBCLEFBZ0NBLFVBSjFCLGNBdEQyQixLQVkzQixXQStCdUIsc0NBaEJJLEFBZ0MzQiw2Q0ExRHVCLFVBMkNKLGVBQ00sNkJBakJGLHFCQWtCdkIsa0JBNUNrRSxzREE0Qm5FLFFBMUJBLEtBMEJDLGlCQTFCQSIsImZpbGUiOiIvaG9tZS9sY2FzdGlsbG8vRG9jdW1lbnRzL3Byb2plY3RzL3BvZGNhc3RzL2NvbXBvbmVudHMvQ2hhbm5lbENvbnRlbnRMaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuY29uc3QgQ2hhbm5lbENvbnRlbnRMaXN0ID0gKHsgbGlzdFRpdGxlLCBpdGVtcyB9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFubmVsV3JhcHBlclwiPlxuICAgICAgICAgICAgPGgzPnsgbGlzdFRpdGxlIH08L2gzPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGl0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPExpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtgL3BvZGNhc3Q/aWQ9JHtpdGVtLmlkfWB9IGNsYXNzTmFtZT1cImxpc3RcIiBrZXk9eyBpbmRleCB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibGlzdC1pbWFnZVwiIHNyYz17aXRlbS51cmxzLmltYWdlID8gaXRlbS51cmxzLmltYWdlIDogc2VyaWUudXJscy5sb2dvX2ltYWdlLm9yaWdpbmFsID8gc2VyaWUudXJscy5sb2dvX2ltYWdlLm9yaWdpbmFsIDogY2hhbm5lbERhdGEudXJscy5sb2dvX2ltYWdlLm9yaWdpbmFsfSBhbHQ9XCJwb2RjYXN0IGltYWdlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3QtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsaXN0LWl0ZW0tdGl0bGVcIj57IGl0ZW0udGl0bGUgfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGlzdC1pdGVtLWRlc2NyaXB0aW9uXCI+eyBpdGVtLmRlc2NyaXB0aW9uLnN1YnN0cigwLCA4MCkgfS4uLjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAgICAgIHtgXG5cbiAgICAgICAgICAgICAgICAgICAgLmNoYW5uZWxIZXJvIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlOyBcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTUwcHg7IFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDsgXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKCR7IGNoYW5uZWxEYXRhLnVybHMubG9nb19pbWFnZS5vcmlnaW5hbCB9KSBuby1yZXBlYXQgY2VudGVyOyBcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXIgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAubG9nb1RleHQge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCAzcHggcmdiYSgwLDAsMCwwLjc1KTtcbiAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICAgICAgaDEge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBoMyB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VjZWNlY1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLmNoYW5uZWxXcmFwcGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweFxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAycHggNnB4IHJnYmEoMCwwLDAsMC4xNSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLmxpc3Qge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLmxpc3QtaW1hZ2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQ1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWNlY2VjO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLmxpc3QtY29udGVudCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5saXN0LWl0ZW0tdGl0bGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMTkxOTE5XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAubGlzdC1pdGVtLWRlc2NyaXB0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMzMzMzMzXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICA8L3N0eWxlPiAgICAgICAgICAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICApXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDaGFubmVsQ29udGVudExpc3Q7XG5cbiJdfQ== */\n/*@ sourceURL=/home/lcastillo/Documents/projects/podcasts/components/ChannelContentList.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (ChannelContentList);

/***/ }),

/***/ "./pages/channel.js":
/*!**************************!*\
  !*** ./pages/channel.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _components_ChannelContentList__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/ChannelContentList */ "./components/ChannelContentList.js");










var _jsxFileName = "/home/lcastillo/Documents/projects/podcasts/pages/channel.js";






var _default =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(_default, _React$Component);

  function _default() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, _default);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(_default).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(_default, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          channelData = _this$props.channelData,
          audioClips = _this$props.audioClips,
          series = _this$props.series;
      console.log(audioClips);
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_10___default.a.dynamic([["450407147", [channelData.urls.logo_image.original]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_10___default.a.dynamic([["450407147", [channelData.urls.logo_image.original]]]) + " " + "channelHero",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_10___default.a.dynamic([["450407147", [channelData.urls.logo_image.original]]]) + " " + "logoText",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, channelData.title)), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_components_ChannelContentList__WEBPACK_IMPORTED_MODULE_14__["default"], {
        title: "Podcasts",
        items: audioClips,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }), series.length > 0 ? react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_components_ChannelContentList__WEBPACK_IMPORTED_MODULE_14__["default"], {
        title: "Series",
        items: series,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }) : false, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_10___default.a, {
        id: "450407147",
        dynamic: [channelData.urls.logo_image.original],
        __self: this
      }, ".channelHero.__jsx-style-dynamic-selector{width:100%;height:150px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:url(".concat(channelData.urls.logo_image.original, ") no-repeat center;background-size:cover;}.logoText.__jsx-style-dynamic-selector{font-size:30px;color:white;font-weight:bold;text-align:center;text-shadow:2px 2px 3px rgba(0,0,0,0.75);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2xjYXN0aWxsby9Eb2N1bWVudHMvcHJvamVjdHMvcG9kY2FzdHMvcGFnZXMvY2hhbm5lbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvRmlCLEFBSW9DLEFBVUksV0FURixJQVVELFNBVEMsR0FVSSxpQkFDQyxrQkFDdUIsb0NBWGxCLEtBWTNCLDhGQVh1Qiw2RkFDMkMsOERBRW5FLHNCQUFDIiwiZmlsZSI6Ii9ob21lL2xjYXN0aWxsby9Eb2N1bWVudHMvcHJvamVjdHMvcG9kY2FzdHMvcGFnZXMvY2hhbm5lbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnaXNvbW9ycGhpYy1mZXRjaCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IENoYW5uZWxDb250ZW50TGlzdCBmcm9tICcuLi9jb21wb25lbnRzL0NoYW5uZWxDb250ZW50TGlzdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIHN0YXRpYyBnZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoeyBxdWVyeTogeyBpZCB9IH0pID0+IHtcbiAgICAgICAgY29uc3QgY2hhbm5lbElkID0gaWQ7XG5cbiAgICAgICAgY29uc3QgW3Jlc3BvbnNlQ2hhbm5lbCwgcmVzcG9uc2VBdWRpb3MsIHJlc3BvbnNlU2VyaWVzXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgIGZldGNoKGBodHRwczovL2FwaS5hdWRpb2Jvb20uY29tL2NoYW5uZWxzLyR7Y2hhbm5lbElkfWApLFxuICAgICAgICAgICAgZmV0Y2goYGh0dHBzOi8vYXBpLmF1ZGlvYm9vbS5jb20vY2hhbm5lbHMvJHtjaGFubmVsSWR9L2F1ZGlvX2NsaXBzYCksXG4gICAgICAgICAgICBmZXRjaChgaHR0cHM6Ly9hcGkuYXVkaW9ib29tLmNvbS9jaGFubmVscy8ke2NoYW5uZWxJZH0vY2hpbGRfY2hhbm5lbHNgKVxuICAgICAgICBdKTtcblxuICAgICAgICBjb25zdCB7IGJvZHk6IHsgY2hhbm5lbCB9IH0gPSBhd2FpdCByZXNwb25zZUNoYW5uZWwuanNvbigpO1xuICAgICAgICBjb25zdCBjaGFubmVsRGF0YSA9IGNoYW5uZWw7XG5cbiAgICAgICAgY29uc3QgeyBib2R5OiB7IGF1ZGlvX2NsaXBzIH0gfSA9IGF3YWl0IHJlc3BvbnNlQXVkaW9zLmpzb24oKTtcbiAgICAgICAgY29uc3QgYXVkaW9DbGlwcyA9IGF1ZGlvX2NsaXBzO1xuXG4gICAgICAgIGNvbnN0IHsgYm9keTogeyBjaGFubmVscyB9IH0gPSBhd2FpdCByZXNwb25zZVNlcmllcy5qc29uKCk7XG4gICAgICAgIGNvbnN0IHNlcmllcyA9IGNoYW5uZWxzO1xuXG4gICAgICAgIHJldHVybiB7IGNoYW5uZWxEYXRhLCBhdWRpb0NsaXBzLCBzZXJpZXMgfTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgY2hhbm5lbERhdGEsIGF1ZGlvQ2xpcHMsIHNlcmllcyB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc29sZS5sb2coYXVkaW9DbGlwcylcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFubmVsSGVyb1wiPlxuICAgICAgICAgICAgICAgICAgICB7LyogPGltZyBzcmM9eyBjaGFubmVsRGF0YS51cmxzLmxvZ29faW1hZ2Uub3JpZ2luYWwgfSBhbHQ9XCJQb2RjYXN0IGxvZ29cIi8+ICovfVxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsb2dvVGV4dFwiPnsgY2hhbm5lbERhdGEudGl0bGUgfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxDaGFubmVsQ29udGVudExpc3RcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJQb2RjYXN0c1wiXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zPXthdWRpb0NsaXBzfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZXJpZXMubGVuZ3RoID4gMCA/IFxuICAgICAgICAgICAgICAgICAgICA8Q2hhbm5lbENvbnRlbnRMaXN0XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlNlcmllc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtcz17c2VyaWVzfVxuICAgICAgICAgICAgICAgICAgICAvPiAgOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJjaGFubmVsV3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgICA8aDM+UG9kY2FzdHM8L2gzPlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdWRpb0NsaXBzLm1hcCgoY2xpcCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17YC9wb2RjYXN0P2lkPSR7Y2xpcC5pZH1gfSBjbGFzc05hbWU9XCJsaXN0XCIga2V5PXsgaW5kZXggfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibGlzdC1pbWFnZVwiIHNyYz17Y2xpcC51cmxzLmltYWdlID8gY2xpcC51cmxzLmltYWdlIDogY2hhbm5lbERhdGEudXJscy5sb2dvX2ltYWdlLm9yaWdpbmFsfSBhbHQ9XCJwb2RjYXN0IGltYWdlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGlzdC1pdGVtLXRpdGxlXCI+eyBjbGlwLnRpdGxlIH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGlzdC1pdGVtLWRlc2NyaXB0aW9uXCI+eyBjbGlwLmRlc2NyaXB0aW9uLnN1YnN0cigwLCA4MCkgfS4uLjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHsgc2VyaWVzLmxlbmd0aCA+IDAgPyBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+U2VyaWVzPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlcmllcy5tYXAoKHNlcmllLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0XCIga2V5PXsgaW5kZXggfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImxpc3QtaW1hZ2VcIiBzcmM9e3NlcmllLnVybHMubG9nb19pbWFnZS5vcmlnaW5hbCA/IHNlcmllLnVybHMubG9nb19pbWFnZS5vcmlnaW5hbCA6IGNoYW5uZWxEYXRhLnVybHMubG9nb19pbWFnZS5vcmlnaW5hbH0gYWx0PVwicG9kY2FzdCBpbWFnZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0LWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGlzdC1pdGVtLXRpdGxlXCI+eyBzZXJpZS50aXRsZSB9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsaXN0LWl0ZW0tZGVzY3JpcHRpb25cIj57IHNlcmllLmRlc2NyaXB0aW9uLnN1YnN0cigwLCA4MCkgfS4uLjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKSAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+IDogXG4gICAgICAgICAgICAgICAgICAgICAgICBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9kaXY+ICovfVxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICAgICAge2BcblxuICAgICAgICAgICAgICAgICAgICAuY2hhbm5lbEhlcm8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7IFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNTBweDsgXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4OyBcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyBcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJHsgY2hhbm5lbERhdGEudXJscy5sb2dvX2ltYWdlLm9yaWdpbmFsIH0pIG5vLXJlcGVhdCBjZW50ZXI7IFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5sb2dvVGV4dCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAycHggMnB4IDNweCByZ2JhKDAsMCwwLDAuNzUpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgICAgIDwvc3R5bGU+ICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufSJdfQ== */\n/*@ sourceURL=/home/lcastillo/Documents/projects/podcasts/pages/channel.js */")));
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_11___default.a.Component);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(_default, "getInitialProps",
/*#__PURE__*/
function () {
  var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
    var id, channelId, _ref3, _ref4, responseChannel, responseAudios, responseSeries, _ref5, channel, channelData, _ref6, audio_clips, audioClips, _ref7, channels, series;

    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id = _ref.query.id;
            channelId = id;
            _context.next = 4;
            return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a.all([fetch("https://api.audioboom.com/channels/".concat(channelId)), fetch("https://api.audioboom.com/channels/".concat(channelId, "/audio_clips")), fetch("https://api.audioboom.com/channels/".concat(channelId, "/child_channels"))]);

          case 4:
            _ref3 = _context.sent;
            _ref4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref3, 3);
            responseChannel = _ref4[0];
            responseAudios = _ref4[1];
            responseSeries = _ref4[2];
            _context.next = 11;
            return responseChannel.json();

          case 11:
            _ref5 = _context.sent;
            channel = _ref5.body.channel;
            channelData = channel;
            _context.next = 16;
            return responseAudios.json();

          case 16:
            _ref6 = _context.sent;
            audio_clips = _ref6.body.audio_clips;
            audioClips = audio_clips;
            _context.next = 21;
            return responseSeries.json();

          case 21:
            _ref7 = _context.sent;
            channels = _ref7.body.channels;
            series = channels;
            return _context.abrupt("return", {
              channelData: channelData,
              audioClips: audioClips,
              series: series
            });

          case 25:
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
//# sourceMappingURL=channel.js.9c19d46c2858b9fde86a.hot-update.js.map