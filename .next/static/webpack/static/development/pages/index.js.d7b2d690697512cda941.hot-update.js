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
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/utils */ "./helpers/utils.js");





var ChannelGrid = function ChannelGrid(_ref) {
  var channels = _ref.channels;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1629040294" + " " + "channels"
  }, channels.map(function (channel, index) {
    return (// <Link href={`/channel?id=${ channel.id }`} key={ index } prefetch> for NEXT ROUTES 
      react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
        route: "channel",
        params: {
          slug: Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_3__["default"])(channel.title),
          id: channel.id
        },
        key: index,
        prefetch: true
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        className: "jsx-1629040294" + " " + "channel"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: channel.urls.logo_image.original,
        alt: "Podcast Channel Logo",
        className: "jsx-1629040294"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
        className: "jsx-1629040294"
      }, channel.title)))
    );
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1629040294"
  }, ".channels.jsx-1629040294{display:grid;grid-gap:15px;padding:15px;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));}.channel.jsx-1629040294{display:block;border-radius:3px;box-shadow:0px 2px 6px rgba(0,0,0,0.15);margin-bottom:0.5em;-webkit-text-decoration:none;text-decoration:none;color:#333333;}.channel.jsx-1629040294 img.jsx-1629040294{border-radius:3px;box-shadow:0px 2px 6px rgba(0,0,0,0.15);width:100%;}h2.jsx-1629040294{padding:5px;font-size:0.9em;font-weight:600;margin:0;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2xjYXN0aWxsby9Eb2N1bWVudHMvcHJvamVjdHMvcG9kY2FzdHMvY29tcG9uZW50cy9DaGFubmVsR3JpZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwQmEsQUFHa0MsQUFPQyxBQVNJLEFBTU4sWUFDSSxDQXRCRixDQU9JLElBU3NCLFNBZjNCLENBc0JHLElBZndCLFFBTm9CLElBc0JuRCxTQUNTLEtBUlAsV0FDZixFQVFBLENBakJ3QixvQkFDQyxNQVB6Qiw0Q0FTRCxjQUFDIiwiZmlsZSI6Ii9ob21lL2xjYXN0aWxsby9Eb2N1bWVudHMvcHJvamVjdHMvcG9kY2FzdHMvY29tcG9uZW50cy9DaGFubmVsR3JpZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExpbmsgfSBmcm9tICcuLi9yb3V0ZXMnO1xuaW1wb3J0IHNsdWcgZnJvbSAnLi4vaGVscGVycy91dGlscyc7XG5cbmNvbnN0IENoYW5uZWxHcmlkID0gKHsgY2hhbm5lbHMgfSkgPT4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhbm5lbHNcIj5cbiAgICAgICAgeyAgIFxuICAgICAgICAgICAgY2hhbm5lbHMubWFwKChjaGFubmVsLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgIC8vIDxMaW5rIGhyZWY9e2AvY2hhbm5lbD9pZD0keyBjaGFubmVsLmlkIH1gfSBrZXk9eyBpbmRleCB9IHByZWZldGNoPiBmb3IgTkVYVCBST1VURVMgXG4gICAgICAgICAgICAgICAgPExpbmsgXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlPVwiY2hhbm5lbFwiXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtcz17eyBcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsdWc6IHNsdWcoY2hhbm5lbC50aXRsZSksXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogY2hhbm5lbC5pZFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICBrZXk9eyBpbmRleCB9IFxuICAgICAgICAgICAgICAgICAgICBwcmVmZXRjaFxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiY2hhbm5lbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9eyBjaGFubmVsLnVybHMubG9nb19pbWFnZS5vcmlnaW5hbCB9IGFsdD1cIlBvZGNhc3QgQ2hhbm5lbCBMb2dvXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMj57IGNoYW5uZWwudGl0bGUgfTwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICApKVxuICAgICAgICB9XG5cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgICAgLmNoYW5uZWxzIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC1nYXA6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDE2MHB4LCAxZnIpKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuY2hhbm5lbCB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAycHggNnB4IHJnYmEoMCwwLDAsMC4xNSk7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuNWVtO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMzMzMzMzXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmNoYW5uZWwgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMnB4IDZweCByZ2JhKDAsMCwwLDAuMTUpO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjllbTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPiAgICAgICAgXG4gICAgPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IENoYW5uZWxHcmlkOyJdfQ== */\n/*@ sourceURL=/home/lcastillo/Documents/projects/podcasts/components/ChannelGrid.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (ChannelGrid);

/***/ })

})
//# sourceMappingURL=index.js.d7b2d690697512cda941.hot-update.js.map