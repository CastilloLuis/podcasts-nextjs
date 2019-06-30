webpackHotUpdate("static/development/pages/channel.js",{

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
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_ChannelContentList__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/ChannelContentList */ "./components/ChannelContentList.js");










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
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_14__["default"], {
        title: "channelData.title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_10___default.a.dynamic([["450407147", [channelData.urls.logo_image.original]]]) + " " + "channelHero",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_10___default.a.dynamic([["450407147", [channelData.urls.logo_image.original]]]) + " " + "logoText",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, channelData.title)), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_components_ChannelContentList__WEBPACK_IMPORTED_MODULE_15__["default"], {
        listTitle: "Podcasts",
        items: audioClips,
        defaultImage: channelData.urls.logo_image.original,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }), series.length > 0 ? react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_components_ChannelContentList__WEBPACK_IMPORTED_MODULE_15__["default"], {
        listTitle: "Series",
        items: series,
        defaultImage: channelData.urls.logo_image.original,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }) : false, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_10___default.a, {
        id: "450407147",
        dynamic: [channelData.urls.logo_image.original],
        __self: this
      }, ".channelHero.__jsx-style-dynamic-selector{width:100%;height:150px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:url(".concat(channelData.urls.logo_image.original, ") no-repeat center;background-size:cover;}.logoText.__jsx-style-dynamic-selector{font-size:30px;color:white;font-weight:bold;text-align:center;text-shadow:2px 2px 3px rgba(0,0,0,0.75);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2xjYXN0aWxsby9Eb2N1bWVudHMvcHJvamVjdHMvcG9kY2FzdHMvcGFnZXMvY2hhbm5lbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1RmlCLEFBSW9DLEFBVUksV0FURixJQVVELFNBVEMsR0FVSSxpQkFDQyxrQkFDdUIsb0NBWGxCLEtBWTNCLDhGQVh1Qiw2RkFDMkMsOERBRW5FLHNCQUFDIiwiZmlsZSI6Ii9ob21lL2xjYXN0aWxsby9Eb2N1bWVudHMvcHJvamVjdHMvcG9kY2FzdHMvcGFnZXMvY2hhbm5lbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnaXNvbW9ycGhpYy1mZXRjaCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgQ2hhbm5lbENvbnRlbnRMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvQ2hhbm5lbENvbnRlbnRMaXN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgc3RhdGljIGdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7IHF1ZXJ5OiB7IGlkIH0gfSkgPT4ge1xuICAgICAgICBjb25zdCBjaGFubmVsSWQgPSBpZDtcblxuICAgICAgICBjb25zdCBbcmVzcG9uc2VDaGFubmVsLCByZXNwb25zZUF1ZGlvcywgcmVzcG9uc2VTZXJpZXNdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgZmV0Y2goYGh0dHBzOi8vYXBpLmF1ZGlvYm9vbS5jb20vY2hhbm5lbHMvJHtjaGFubmVsSWR9YCksXG4gICAgICAgICAgICBmZXRjaChgaHR0cHM6Ly9hcGkuYXVkaW9ib29tLmNvbS9jaGFubmVscy8ke2NoYW5uZWxJZH0vYXVkaW9fY2xpcHNgKSxcbiAgICAgICAgICAgIGZldGNoKGBodHRwczovL2FwaS5hdWRpb2Jvb20uY29tL2NoYW5uZWxzLyR7Y2hhbm5lbElkfS9jaGlsZF9jaGFubmVsc2ApXG4gICAgICAgIF0pO1xuXG4gICAgICAgIGNvbnN0IHsgYm9keTogeyBjaGFubmVsIH0gfSA9IGF3YWl0IHJlc3BvbnNlQ2hhbm5lbC5qc29uKCk7XG4gICAgICAgIGNvbnN0IGNoYW5uZWxEYXRhID0gY2hhbm5lbDtcblxuICAgICAgICBjb25zdCB7IGJvZHk6IHsgYXVkaW9fY2xpcHMgfSB9ID0gYXdhaXQgcmVzcG9uc2VBdWRpb3MuanNvbigpO1xuICAgICAgICBjb25zdCBhdWRpb0NsaXBzID0gYXVkaW9fY2xpcHM7XG5cbiAgICAgICAgY29uc3QgeyBib2R5OiB7IGNoYW5uZWxzIH0gfSA9IGF3YWl0IHJlc3BvbnNlU2VyaWVzLmpzb24oKTtcbiAgICAgICAgY29uc3Qgc2VyaWVzID0gY2hhbm5lbHM7XG5cbiAgICAgICAgcmV0dXJuIHsgY2hhbm5lbERhdGEsIGF1ZGlvQ2xpcHMsIHNlcmllcyB9O1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBjaGFubmVsRGF0YSwgYXVkaW9DbGlwcywgc2VyaWVzIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zb2xlLmxvZyhhdWRpb0NsaXBzKVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPExheW91dCB0aXRsZT0nY2hhbm5lbERhdGEudGl0bGUnPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhbm5lbEhlcm9cIj5cbiAgICAgICAgICAgICAgICAgICAgey8qIDxpbWcgc3JjPXsgY2hhbm5lbERhdGEudXJscy5sb2dvX2ltYWdlLm9yaWdpbmFsIH0gYWx0PVwiUG9kY2FzdCBsb2dvXCIvPiAqL31cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibG9nb1RleHRcIj57IGNoYW5uZWxEYXRhLnRpdGxlIH08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8Q2hhbm5lbENvbnRlbnRMaXN0XG4gICAgICAgICAgICAgICAgICAgIGxpc3RUaXRsZT1cIlBvZGNhc3RzXCJcbiAgICAgICAgICAgICAgICAgICAgaXRlbXM9e2F1ZGlvQ2xpcHN9XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRJbWFnZT17Y2hhbm5lbERhdGEudXJscy5sb2dvX2ltYWdlLm9yaWdpbmFsfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZXJpZXMubGVuZ3RoID4gMCA/IFxuICAgICAgICAgICAgICAgICAgICA8Q2hhbm5lbENvbnRlbnRMaXN0XG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0VGl0bGU9XCJTZXJpZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM9e3Nlcmllc31cbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRJbWFnZT17Y2hhbm5lbERhdGEudXJscy5sb2dvX2ltYWdlLm9yaWdpbmFsfVxuICAgICAgICAgICAgICAgICAgICAvPiAgOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJjaGFubmVsV3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgICA8aDM+UG9kY2FzdHM8L2gzPlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdWRpb0NsaXBzLm1hcCgoY2xpcCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17YC9wb2RjYXN0P2lkPSR7Y2xpcC5pZH1gfSBjbGFzc05hbWU9XCJsaXN0XCIga2V5PXsgaW5kZXggfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibGlzdC1pbWFnZVwiIHNyYz17Y2xpcC51cmxzLmltYWdlID8gY2xpcC51cmxzLmltYWdlIDogY2hhbm5lbERhdGEudXJscy5sb2dvX2ltYWdlLm9yaWdpbmFsfSBhbHQ9XCJwb2RjYXN0IGltYWdlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGlzdC1pdGVtLXRpdGxlXCI+eyBjbGlwLnRpdGxlIH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGlzdC1pdGVtLWRlc2NyaXB0aW9uXCI+eyBjbGlwLmRlc2NyaXB0aW9uLnN1YnN0cigwLCA4MCkgfS4uLjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHsgc2VyaWVzLmxlbmd0aCA+IDAgPyBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+U2VyaWVzPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlcmllcy5tYXAoKHNlcmllLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0XCIga2V5PXsgaW5kZXggfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImxpc3QtaW1hZ2VcIiBzcmM9e3NlcmllLnVybHMubG9nb19pbWFnZS5vcmlnaW5hbCA/IHNlcmllLnVybHMubG9nb19pbWFnZS5vcmlnaW5hbCA6IGNoYW5uZWxEYXRhLnVybHMubG9nb19pbWFnZS5vcmlnaW5hbH0gYWx0PVwicG9kY2FzdCBpbWFnZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0LWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGlzdC1pdGVtLXRpdGxlXCI+eyBzZXJpZS50aXRsZSB9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsaXN0LWl0ZW0tZGVzY3JpcHRpb25cIj57IHNlcmllLmRlc2NyaXB0aW9uLnN1YnN0cigwLCA4MCkgfS4uLjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKSAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+IDogXG4gICAgICAgICAgICAgICAgICAgICAgICBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9kaXY+ICovfVxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICAgICAge2BcblxuICAgICAgICAgICAgICAgICAgICAuY2hhbm5lbEhlcm8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7IFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNTBweDsgXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4OyBcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyBcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJHsgY2hhbm5lbERhdGEudXJscy5sb2dvX2ltYWdlLm9yaWdpbmFsIH0pIG5vLXJlcGVhdCBjZW50ZXI7IFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5sb2dvVGV4dCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAycHggMnB4IDNweCByZ2JhKDAsMCwwLDAuNzUpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgICAgIDwvc3R5bGU+ICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvTGF5b3V0PlxuICAgICAgICApXG4gICAgfVxufSJdfQ== */\n/*@ sourceURL=/home/lcastillo/Documents/projects/podcasts/pages/channel.js */")));
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
//# sourceMappingURL=channel.js.03dccc30d6c376997cb2.hot-update.js.map