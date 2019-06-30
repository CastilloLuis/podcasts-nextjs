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
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_10___default.a.dynamic([["562461896", [channelData.urls.logo_image.original]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_10___default.a.dynamic([["562461896", [channelData.urls.logo_image.original]]]) + " " + "channelHero",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_10___default.a.dynamic([["562461896", [channelData.urls.logo_image.original]]]) + " " + "logoText",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, channelData.title)), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_10___default.a.dynamic([["562461896", [channelData.urls.logo_image.original]]]) + " " + "channelWrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("h3", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_10___default.a.dynamic([["562461896", [channelData.urls.logo_image.original]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, "Podcasts"), audioClips.map(function (clip, index) {
        return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_13___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("a", {
          href: "/podcast?id=".concat(clip.id),
          key: index,
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_10___default.a.dynamic([["562461896", [channelData.urls.logo_image.original]]]) + " " + "list",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("img", {
          src: clip.urls.image ? clip.urls.image : channelData.urls.logo_image.original,
          alt: "podcast image",
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_10___default.a.dynamic([["562461896", [channelData.urls.logo_image.original]]]) + " " + "list-image",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_10___default.a.dynamic([["562461896", [channelData.urls.logo_image.original]]]) + " " + "list-content",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("span", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_10___default.a.dynamic([["562461896", [channelData.urls.logo_image.original]]]) + " " + "list-item-title",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          },
          __self: this
        }, clip.title), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("span", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_10___default.a.dynamic([["562461896", [channelData.urls.logo_image.original]]]) + " " + "list-item-description",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          },
          __self: this
        }, clip.description.substr(0, 80), "..."))));
      }), series.length > 0 ? react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_11___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("h3", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_10___default.a.dynamic([["562461896", [channelData.urls.logo_image.original]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, "Series"), series.map(function (serie, index) {
        return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
          key: index,
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_10___default.a.dynamic([["562461896", [channelData.urls.logo_image.original]]]) + " " + "list",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("img", {
          src: serie.urls.logo_image.original ? serie.urls.logo_image.original : channelData.urls.logo_image.original,
          alt: "podcast image",
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_10___default.a.dynamic([["562461896", [channelData.urls.logo_image.original]]]) + " " + "list-image",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_10___default.a.dynamic([["562461896", [channelData.urls.logo_image.original]]]) + " " + "list-content",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("span", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_10___default.a.dynamic([["562461896", [channelData.urls.logo_image.original]]]) + " " + "list-item-title",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          },
          __self: this
        }, serie.title), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("span", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_10___default.a.dynamic([["562461896", [channelData.urls.logo_image.original]]]) + " " + "list-item-description",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          },
          __self: this
        }, serie.description.substr(0, 80), "...")));
      })) : false), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_10___default.a, {
        id: "562461896",
        dynamic: [channelData.urls.logo_image.original],
        __self: this
      }, ".channelHero.__jsx-style-dynamic-selector{width:100%;height:150;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:'center';-webkit-box-align:'center';-ms-flex-align:'center';align-items:'center';background:url(".concat(channelData.urls.logo_image.original, ") no-repeat center;background-size:'cover';}h1.__jsx-style-dynamic-selector{font-weight:bold;}h3.__jsx-style-dynamic-selector{width:100%;text-align:left;border-bottom:1px solid #ececec;}.channelWrapper.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:10px;}.logoText.__jsx-style-dynamic-selector{font-size:30px;color:white;font-weight:bold;text-align:center;text-shadow:2px 2px 3px rgba(0,0,0,0.75);}img.__jsx-style-dynamic-selector{border-radius:3px;box-shadow:0px 2px 6px rgba(0,0,0,0.15);width:100%;}.list.__jsx-style-dynamic-selector{width:100%;text-align:left;padding:10px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;-webkit-text-decoration:none;text-decoration:none;}.list-image.__jsx-style-dynamic-selector{width:45px;height:45px;border-radius:3px;border:1px solid #ececec;margin-right:15px;}.list-content.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.list-item-title.__jsx-style-dynamic-selector{font-size:14px;font-weight:500;color:#191919;}.list-item-description.__jsx-style-dynamic-selector{font-size:13px;color:#333333;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2xjYXN0aWxsby9Eb2N1bWVudHMvcHJvamVjdHMvcG9kY2FzdHMvcGFnZXMvY2hhbm5lbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1RWlCLEFBSW9DLEFBVU0sQUFJTixBQU1FLEFBUUUsQUFRRyxBQU1QLEFBVUEsQUFRRSxBQUtFLEFBTUEsV0F0RUosQUFjSyxBQTRCQSxBQVVKLElBeEJBLEFBcUNJLEFBT3JCLEVBOURDLENBMEI0QyxJQW5DM0IsQ0FvREssSUFyQ3ZCLEFBYXNCLEFBY0osRUE2QmpCLEVBTEQsU0F2QmtCLENBVVksR0F4QlAsQ0FxQ3RCLGFBN0JELENBdEJDLEdBZTZDLElBd0J2QixHQWpCdEIsS0FsQjBCLEFBd0NBLFVBSjFCLFlBdEQyQixPQThCM0IsV0FhdUIsc0NBeEJJLEFBd0MzQiwyQ0ExRHlCLFlBMkNOLGVBQ00sNkJBekJGLHFCQTBCdkIsd0JBNUNrRSxnREFvQm5FLGFBQUMsQ0FsQkQsd0JBQUMiLCJmaWxlIjoiL2hvbWUvbGNhc3RpbGxvL0RvY3VtZW50cy9wcm9qZWN0cy9wb2RjYXN0cy9wYWdlcy9jaGFubmVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdpc29tb3JwaGljLWZldGNoJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIHN0YXRpYyBnZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoeyBxdWVyeTogeyBpZCB9IH0pID0+IHtcbiAgICAgICAgY29uc3QgY2hhbm5lbElkID0gaWQ7XG5cbiAgICAgICAgY29uc3QgW3Jlc3BvbnNlQ2hhbm5lbCwgcmVzcG9uc2VBdWRpb3MsIHJlc3BvbnNlU2VyaWVzXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgIGZldGNoKGBodHRwczovL2FwaS5hdWRpb2Jvb20uY29tL2NoYW5uZWxzLyR7Y2hhbm5lbElkfWApLFxuICAgICAgICAgICAgZmV0Y2goYGh0dHBzOi8vYXBpLmF1ZGlvYm9vbS5jb20vY2hhbm5lbHMvJHtjaGFubmVsSWR9L2F1ZGlvX2NsaXBzYCksXG4gICAgICAgICAgICBmZXRjaChgaHR0cHM6Ly9hcGkuYXVkaW9ib29tLmNvbS9jaGFubmVscy8ke2NoYW5uZWxJZH0vY2hpbGRfY2hhbm5lbHNgKVxuICAgICAgICBdKTtcblxuICAgICAgICBjb25zdCB7IGJvZHk6IHsgY2hhbm5lbCB9IH0gPSBhd2FpdCByZXNwb25zZUNoYW5uZWwuanNvbigpO1xuICAgICAgICBjb25zdCBjaGFubmVsRGF0YSA9IGNoYW5uZWw7XG5cbiAgICAgICAgY29uc3QgeyBib2R5OiB7IGF1ZGlvX2NsaXBzIH0gfSA9IGF3YWl0IHJlc3BvbnNlQXVkaW9zLmpzb24oKTtcbiAgICAgICAgY29uc3QgYXVkaW9DbGlwcyA9IGF1ZGlvX2NsaXBzO1xuXG4gICAgICAgIGNvbnN0IHsgYm9keTogeyBjaGFubmVscyB9IH0gPSBhd2FpdCByZXNwb25zZVNlcmllcy5qc29uKCk7XG4gICAgICAgIGNvbnN0IHNlcmllcyA9IGNoYW5uZWxzO1xuXG4gICAgICAgIHJldHVybiB7IGNoYW5uZWxEYXRhLCBhdWRpb0NsaXBzLCBzZXJpZXMgfTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgY2hhbm5lbERhdGEsIGF1ZGlvQ2xpcHMsIHNlcmllcyB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc29sZS5sb2coYXVkaW9DbGlwcylcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFubmVsSGVyb1wiPlxuICAgICAgICAgICAgICAgICAgICB7LyogPGltZyBzcmM9eyBjaGFubmVsRGF0YS51cmxzLmxvZ29faW1hZ2Uub3JpZ2luYWwgfSBhbHQ9XCJQb2RjYXN0IGxvZ29cIi8+ICovfVxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsb2dvVGV4dFwiPnsgY2hhbm5lbERhdGEudGl0bGUgfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFubmVsV3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgICA8aDM+UG9kY2FzdHM8L2gzPlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdWRpb0NsaXBzLm1hcCgoY2xpcCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17YC9wb2RjYXN0P2lkPSR7Y2xpcC5pZH1gfSBjbGFzc05hbWU9XCJsaXN0XCIga2V5PXsgaW5kZXggfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibGlzdC1pbWFnZVwiIHNyYz17Y2xpcC51cmxzLmltYWdlID8gY2xpcC51cmxzLmltYWdlIDogY2hhbm5lbERhdGEudXJscy5sb2dvX2ltYWdlLm9yaWdpbmFsfSBhbHQ9XCJwb2RjYXN0IGltYWdlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGlzdC1pdGVtLXRpdGxlXCI+eyBjbGlwLnRpdGxlIH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGlzdC1pdGVtLWRlc2NyaXB0aW9uXCI+eyBjbGlwLmRlc2NyaXB0aW9uLnN1YnN0cigwLCA4MCkgfS4uLjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHsgc2VyaWVzLmxlbmd0aCA+IDAgPyBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+U2VyaWVzPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlcmllcy5tYXAoKHNlcmllLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0XCIga2V5PXsgaW5kZXggfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImxpc3QtaW1hZ2VcIiBzcmM9e3NlcmllLnVybHMubG9nb19pbWFnZS5vcmlnaW5hbCA/IHNlcmllLnVybHMubG9nb19pbWFnZS5vcmlnaW5hbCA6IGNoYW5uZWxEYXRhLnVybHMubG9nb19pbWFnZS5vcmlnaW5hbH0gYWx0PVwicG9kY2FzdCBpbWFnZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0LWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGlzdC1pdGVtLXRpdGxlXCI+eyBzZXJpZS50aXRsZSB9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsaXN0LWl0ZW0tZGVzY3JpcHRpb25cIj57IHNlcmllLmRlc2NyaXB0aW9uLnN1YnN0cigwLCA4MCkgfS4uLjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKSAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+IDogXG4gICAgICAgICAgICAgICAgICAgICAgICBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgICAgICB7YFxuXG4gICAgICAgICAgICAgICAgICAgIC5jaGFubmVsSGVybyB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTsgXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1MDsgXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4OyBcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyBcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiAnY2VudGVyJzsgXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJHsgY2hhbm5lbERhdGEudXJscy5sb2dvX2ltYWdlLm9yaWdpbmFsIH0pIG5vLXJlcGVhdCBjZW50ZXI7IFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAnY292ZXInICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBoMSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWNlY2VjXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAuY2hhbm5lbFdyYXBwZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAubG9nb1RleHQge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCAzcHggcmdiYSgwLDAsMCwwLjc1KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMnB4IDZweCByZ2JhKDAsMCwwLDAuMTUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCVcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5saXN0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5saXN0LWltYWdlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0NXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0NXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VjZWNlYztcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5saXN0LWNvbnRlbnQge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAubGlzdC1pdGVtLXRpdGxlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzE5MTkxOVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLmxpc3QtaXRlbS1kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzMzMzMzM1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgICAgIDwvc3R5bGU+ICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufSJdfQ== */\n/*@ sourceURL=/home/lcastillo/Documents/projects/podcasts/pages/channel.js */")));
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
//# sourceMappingURL=channel.js.cac64b1b637f3a706104.hot-update.js.map