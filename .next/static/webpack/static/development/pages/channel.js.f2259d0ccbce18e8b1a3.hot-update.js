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
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_10___default.a.dynamic([["450407147", [channelData.urls.logo_image.original]]]) + " " + "channelHero",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_10___default.a.dynamic([["450407147", [channelData.urls.logo_image.original]]]) + " " + "logoText",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, channelData.title)), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(ChannelContentList, {
        title: "Podcasts",
        items: audioClips,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }), series.length > 0 ? react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(ChannelContentList, {
        title: "Series",
        items: series,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }) : false, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_10___default.a, {
        id: "450407147",
        dynamic: [channelData.urls.logo_image.original],
        __self: this
      }, ".channelHero.__jsx-style-dynamic-selector{width:100%;height:150px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:url(".concat(channelData.urls.logo_image.original, ") no-repeat center;background-size:cover;}.logoText.__jsx-style-dynamic-selector{font-size:30px;color:white;font-weight:bold;text-align:center;text-shadow:2px 2px 3px rgba(0,0,0,0.75);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2xjYXN0aWxsby9Eb2N1bWVudHMvcHJvamVjdHMvcG9kY2FzdHMvcGFnZXMvY2hhbm5lbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtRmlCLEFBSW9DLEFBVUksV0FURixJQVVELFNBVEMsR0FVSSxpQkFDQyxrQkFDdUIsb0NBWGxCLEtBWTNCLDhGQVh1Qiw2RkFDMkMsOERBRW5FLHNCQUFDIiwiZmlsZSI6Ii9ob21lL2xjYXN0aWxsby9Eb2N1bWVudHMvcHJvamVjdHMvcG9kY2FzdHMvcGFnZXMvY2hhbm5lbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnaXNvbW9ycGhpYy1mZXRjaCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBzdGF0aWMgZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHsgcXVlcnk6IHsgaWQgfSB9KSA9PiB7XG4gICAgICAgIGNvbnN0IGNoYW5uZWxJZCA9IGlkO1xuXG4gICAgICAgIGNvbnN0IFtyZXNwb25zZUNoYW5uZWwsIHJlc3BvbnNlQXVkaW9zLCByZXNwb25zZVNlcmllc10gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICBmZXRjaChgaHR0cHM6Ly9hcGkuYXVkaW9ib29tLmNvbS9jaGFubmVscy8ke2NoYW5uZWxJZH1gKSxcbiAgICAgICAgICAgIGZldGNoKGBodHRwczovL2FwaS5hdWRpb2Jvb20uY29tL2NoYW5uZWxzLyR7Y2hhbm5lbElkfS9hdWRpb19jbGlwc2ApLFxuICAgICAgICAgICAgZmV0Y2goYGh0dHBzOi8vYXBpLmF1ZGlvYm9vbS5jb20vY2hhbm5lbHMvJHtjaGFubmVsSWR9L2NoaWxkX2NoYW5uZWxzYClcbiAgICAgICAgXSk7XG5cbiAgICAgICAgY29uc3QgeyBib2R5OiB7IGNoYW5uZWwgfSB9ID0gYXdhaXQgcmVzcG9uc2VDaGFubmVsLmpzb24oKTtcbiAgICAgICAgY29uc3QgY2hhbm5lbERhdGEgPSBjaGFubmVsO1xuXG4gICAgICAgIGNvbnN0IHsgYm9keTogeyBhdWRpb19jbGlwcyB9IH0gPSBhd2FpdCByZXNwb25zZUF1ZGlvcy5qc29uKCk7XG4gICAgICAgIGNvbnN0IGF1ZGlvQ2xpcHMgPSBhdWRpb19jbGlwcztcblxuICAgICAgICBjb25zdCB7IGJvZHk6IHsgY2hhbm5lbHMgfSB9ID0gYXdhaXQgcmVzcG9uc2VTZXJpZXMuanNvbigpO1xuICAgICAgICBjb25zdCBzZXJpZXMgPSBjaGFubmVscztcblxuICAgICAgICByZXR1cm4geyBjaGFubmVsRGF0YSwgYXVkaW9DbGlwcywgc2VyaWVzIH07XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IGNoYW5uZWxEYXRhLCBhdWRpb0NsaXBzLCBzZXJpZXMgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnNvbGUubG9nKGF1ZGlvQ2xpcHMpXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhbm5lbEhlcm9cIj5cbiAgICAgICAgICAgICAgICAgICAgey8qIDxpbWcgc3JjPXsgY2hhbm5lbERhdGEudXJscy5sb2dvX2ltYWdlLm9yaWdpbmFsIH0gYWx0PVwiUG9kY2FzdCBsb2dvXCIvPiAqL31cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibG9nb1RleHRcIj57IGNoYW5uZWxEYXRhLnRpdGxlIH08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8Q2hhbm5lbENvbnRlbnRMaXN0XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiUG9kY2FzdHNcIlxuICAgICAgICAgICAgICAgICAgICBpdGVtcz17YXVkaW9DbGlwc31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VyaWVzLmxlbmd0aCA+IDAgPyBcbiAgICAgICAgICAgICAgICAgICAgPENoYW5uZWxDb250ZW50TGlzdFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJTZXJpZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM9e3Nlcmllc31cbiAgICAgICAgICAgICAgICAgICAgLz4gIDogZmFsc2VcbiAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiY2hhbm5lbFdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgzPlBvZGNhc3RzPC9oMz5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXVkaW9DbGlwcy5tYXAoKGNsaXAsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2AvcG9kY2FzdD9pZD0ke2NsaXAuaWR9YH0gY2xhc3NOYW1lPVwibGlzdFwiIGtleT17IGluZGV4IH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImxpc3QtaW1hZ2VcIiBzcmM9e2NsaXAudXJscy5pbWFnZSA/IGNsaXAudXJscy5pbWFnZSA6IGNoYW5uZWxEYXRhLnVybHMubG9nb19pbWFnZS5vcmlnaW5hbH0gYWx0PVwicG9kY2FzdCBpbWFnZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3QtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxpc3QtaXRlbS10aXRsZVwiPnsgY2xpcC50aXRsZSB9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxpc3QtaXRlbS1kZXNjcmlwdGlvblwiPnsgY2xpcC5kZXNjcmlwdGlvbi5zdWJzdHIoMCwgODApIH0uLi48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB7IHNlcmllcy5sZW5ndGggPiAwID8gXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlNlcmllczwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXJpZXMubWFwKChzZXJpZSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdFwiIGtleT17IGluZGV4IH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJsaXN0LWltYWdlXCIgc3JjPXtzZXJpZS51cmxzLmxvZ29faW1hZ2Uub3JpZ2luYWwgPyBzZXJpZS51cmxzLmxvZ29faW1hZ2Uub3JpZ2luYWwgOiBjaGFubmVsRGF0YS51cmxzLmxvZ29faW1hZ2Uub3JpZ2luYWx9IGFsdD1cInBvZGNhc3QgaW1hZ2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxpc3QtaXRlbS10aXRsZVwiPnsgc2VyaWUudGl0bGUgfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGlzdC1pdGVtLWRlc2NyaXB0aW9uXCI+eyBzZXJpZS5kZXNjcmlwdGlvbi5zdWJzdHIoMCwgODApIH0uLi48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSkgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PiA6IFxuICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAgICAgIHtgXG5cbiAgICAgICAgICAgICAgICAgICAgLmNoYW5uZWxIZXJvIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlOyBcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTUwcHg7IFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDsgXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKCR7IGNoYW5uZWxEYXRhLnVybHMubG9nb19pbWFnZS5vcmlnaW5hbCB9KSBuby1yZXBlYXQgY2VudGVyOyBcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXIgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAubG9nb1RleHQge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCAzcHggcmdiYSgwLDAsMCwwLjc1KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgICA8L3N0eWxlPiAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn0iXX0= */\n/*@ sourceURL=/home/lcastillo/Documents/projects/podcasts/pages/channel.js */")));
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
//# sourceMappingURL=channel.js.f2259d0ccbce18e8b1a3.hot-update.js.map