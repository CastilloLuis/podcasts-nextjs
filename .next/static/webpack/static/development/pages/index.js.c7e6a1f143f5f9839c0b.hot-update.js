webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/ChannelGrid.js":
/*!***********************************!*\
  !*** ./components/ChannelGrid.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/lcastillo/Documents/projects/podcasts/components/ChannelGrid.js";



var ChannelGrid = function ChannelGrid(_ref) {
  var channels = _ref.channels;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1629040294" + " " + "channels",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    },
    __self: this
  }, channels.map(function (channel, index) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Link, {
      href: "/channel?id=".concat(channel.id),
      key: index,
      prefetch: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 5
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      className: "jsx-1629040294" + " " + "channel",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: channel.urls.logo_image.original,
      alt: "Podcast Channel Logo",
      className: "jsx-1629040294",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
      className: "jsx-1629040294",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, channel.title)));
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1629040294",
    __self: this
  }, ".channels.jsx-1629040294{display:grid;grid-gap:15px;padding:15px;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));}.channel.jsx-1629040294{display:block;border-radius:3px;box-shadow:0px 2px 6px rgba(0,0,0,0.15);margin-bottom:0.5em;-webkit-text-decoration:none;text-decoration:none;color:#333333;}.channel.jsx-1629040294 img.jsx-1629040294{border-radius:3px;box-shadow:0px 2px 6px rgba(0,0,0,0.15);width:100%;}h2.jsx-1629040294{padding:5px;font-size:0.9em;font-weight:600;margin:0;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2xjYXN0aWxsby9Eb2N1bWVudHMvcHJvamVjdHMvcG9kY2FzdHMvY29tcG9uZW50cy9DaGFubmVsR3JpZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFjYSxBQUdrQyxBQU9DLEFBU0ksQUFNTixZQUNJLENBdEJGLENBT0ksSUFTc0IsU0FmM0IsQ0FzQkcsSUFmd0IsUUFOb0IsSUFzQm5ELFNBQ1MsS0FSUCxXQUNmLEVBUUEsQ0FqQndCLG9CQUNDLE1BUHpCLDRDQVNELGNBQUMiLCJmaWxlIjoiL2hvbWUvbGNhc3RpbGxvL0RvY3VtZW50cy9wcm9qZWN0cy9wb2RjYXN0cy9jb21wb25lbnRzL0NoYW5uZWxHcmlkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQ2hhbm5lbEdyaWQgPSAoeyBjaGFubmVscyB9KSA9PiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjaGFubmVsc1wiPlxuICAgICAgICB7ICAgXG4gICAgICAgICAgICBjaGFubmVscy5tYXAoKGNoYW5uZWwsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9jaGFubmVsP2lkPSR7IGNoYW5uZWwuaWQgfWB9IGtleT17IGluZGV4IH0gcHJlZmV0Y2g+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImNoYW5uZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXsgY2hhbm5lbC51cmxzLmxvZ29faW1hZ2Uub3JpZ2luYWwgfSBhbHQ9XCJQb2RjYXN0IENoYW5uZWwgTG9nb1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDI+eyBjaGFubmVsLnRpdGxlIH08L2gyPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgKSlcbiAgICAgICAgfVxuXG4gICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAgIC5jaGFubmVscyB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICAgICAgICAgIGdyaWQtZ2FwOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgxNjBweCwgMWZyKSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmNoYW5uZWwge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMnB4IDZweCByZ2JhKDAsMCwwLDAuMTUpO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzMzMzMzM1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5jaGFubmVsIGltZyB7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggcmdiYSgwLDAsMCwwLjE1KTtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45ZW07XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT4gICAgICAgIFxuICAgIDwvZGl2PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBDaGFubmVsR3JpZDsiXX0= */\n/*@ sourceURL=/home/lcastillo/Documents/projects/podcasts/components/ChannelGrid.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (ChannelGrid);

/***/ })

})
//# sourceMappingURL=index.js.c7e6a1f143f5f9839c0b.hot-update.js.map