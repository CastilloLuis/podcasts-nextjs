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
      items = _ref.items,
      defaultImage = _ref.defaultImage;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3762362970" + " " + "channelWrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-3762362970",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, listTitle), items.map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "/podcast?id=".concat(item.id),
      key: index,
      className: "jsx-3762362970" + " " + "list",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: item.urls.image ? item.urls.image : serie.urls.logo_image.original ? serie.urls.logo_image.original : defaultImage,
      alt: "podcast image",
      className: "jsx-3762362970" + " " + "list-image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-3762362970" + " " + "list-content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "jsx-3762362970" + " " + "list-item-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, item.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "jsx-3762362970" + " " + "list-item-description",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, item.description.substr(0, 80), "..."))));
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3762362970",
    __self: this
  }, "h1.jsx-3762362970{font-weight:bold;}h3.jsx-3762362970{width:100%;text-align:left;border-bottom:1px solid #ececec;}.channelWrapper.jsx-3762362970{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:10px;}img.jsx-3762362970{border-radius:3px;box-shadow:0px 2px 6px rgba(0,0,0,0.15);width:100%;}.list.jsx-3762362970{width:100%;text-align:left;padding:10px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;-webkit-text-decoration:none;text-decoration:none;}.list-image.jsx-3762362970{width:45px;height:45px;border-radius:3px;border:1px solid #ececec;margin-right:15px;}.list-content.jsx-3762362970{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.list-item-title.jsx-3762362970{font-size:14px;font-weight:500;color:#191919;}.list-item-description.jsx-3762362970{font-size:13px;color:#333333;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2xjYXN0aWxsby9Eb2N1bWVudHMvcHJvamVjdHMvcG9kY2FzdHMvY29tcG9uZW50cy9DaGFubmVsQ29udGVudExpc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0JpQixBQUswQyxBQUlOLEFBTUUsQUFRSyxBQU1QLEFBVUEsQUFRRSxBQUtFLEFBTUEsV0FoREMsQUFvQkEsQUFVSixJQWFJLEFBT3JCLEVBdERDLENBa0I0QyxLQWlCdEIsSUE3QnZCLEFBbUJrQixFQTZCakIsRUFMRCxTQXZCa0IsQ0FVWSxJQWE3QixhQTdCRCxDQWRDLE9BK0JzQixHQWpCdEIsS0FWMEIsQUFnQ0EsVUFKMUIsOEJBWHVCLHNDQWhCSSxBQWdDM0IsdURBZm1CLGVBQ00sNkJBakJGLHFCQWtCdkIsd0VBaEJELGFBQUMiLCJmaWxlIjoiL2hvbWUvbGNhc3RpbGxvL0RvY3VtZW50cy9wcm9qZWN0cy9wb2RjYXN0cy9jb21wb25lbnRzL0NoYW5uZWxDb250ZW50TGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmNvbnN0IENoYW5uZWxDb250ZW50TGlzdCA9ICh7IGxpc3RUaXRsZSwgaXRlbXMsIGRlZmF1bHRJbWFnZSB9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFubmVsV3JhcHBlclwiPlxuICAgICAgICAgICAgPGgzPnsgbGlzdFRpdGxlIH08L2gzPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGl0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPExpbmsga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtgL3BvZGNhc3Q/aWQ9JHtpdGVtLmlkfWB9IGNsYXNzTmFtZT1cImxpc3RcIiBrZXk9eyBpbmRleCB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibGlzdC1pbWFnZVwiIHNyYz17aXRlbS51cmxzLmltYWdlID8gaXRlbS51cmxzLmltYWdlIDogc2VyaWUudXJscy5sb2dvX2ltYWdlLm9yaWdpbmFsID8gc2VyaWUudXJscy5sb2dvX2ltYWdlLm9yaWdpbmFsIDogZGVmYXVsdEltYWdlfSBhbHQ9XCJwb2RjYXN0IGltYWdlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3QtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsaXN0LWl0ZW0tdGl0bGVcIj57IGl0ZW0udGl0bGUgfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGlzdC1pdGVtLWRlc2NyaXB0aW9uXCI+eyBpdGVtLmRlc2NyaXB0aW9uLnN1YnN0cigwLCA4MCkgfS4uLjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaDMge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlY2VjZWNcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5jaGFubmVsV3JhcHBlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHhcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMnB4IDZweCByZ2JhKDAsMCwwLDAuMTUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCVcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5saXN0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5saXN0LWltYWdlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0NXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0NXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VjZWNlYztcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5saXN0LWNvbnRlbnQge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAubGlzdC1pdGVtLXRpdGxlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzE5MTkxOVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLmxpc3QtaXRlbS1kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzMzMzMzM1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgPC9zdHlsZT4gICAgICAgICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2hhbm5lbENvbnRlbnRMaXN0O1xuXG4iXX0= */\n/*@ sourceURL=/home/lcastillo/Documents/projects/podcasts/components/ChannelContentList.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (ChannelContentList);

/***/ })

})
//# sourceMappingURL=channel.js.86aa20ac240f553703b1.hot-update.js.map