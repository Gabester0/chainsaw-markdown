webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! marked */ "./node_modules/marked/lib/marked.js");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(marked__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_input_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/input/input */ "./pages/components/input/input.js");
/* harmony import */ var _components_output_output__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/output/output */ "./pages/components/output/output.js");







var _jsxFileName = "C:\\Users\\Gabe\\FreeCodeCamp\\FrontEndLibraries\\BuildAMarkdownPreviewer\\pages\\index.js";





marked__WEBPACK_IMPORTED_MODULE_9___default.a.setOptions({
  breaks: true,
  sanitize: true
});

var Home =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Home, _Component);

  function Home() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Home);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Home)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      input: "\n        \r # Why React?\n        \r ===\n        \r ## I certainly didn't need it\n        \r ---\n        \r ### for my 2-component 1-page program\n        \n        \r ### I just like React\n        \n        \r I *wanted* to use it **obviously!**\n        \r ___\n\n        \r `background-color: white`\n        \n        \r [links](https://gabester.tech)\n        \n        \r > Does this spark joy?\n\n        \r tick | tac\n        \r ---- | ----\n        \r toe | spell?\n\n        \r 1. I am\n        \r - a\n        \r - list\n\n        \r ![React Logo w/ Text](https://goo.gl/Umyytc)\n\n        \r ```\n        \r //I am a\n        \r //multi-line\n        \r //code block\n        \r ```\n        "
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "getMarkdown", function () {
      var markdown = marked__WEBPACK_IMPORTED_MODULE_9___default()(_this.state.input, {
        sanitize: true
      });
      return {
        __html: markdown
      };
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Home, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var script = document.createElement("script");
      script.src = 'https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, {
    key: "changeListener",
    value: function changeListener(event) {
      this.setState({
        input: event.target.value
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3384357391",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", {
        className: "jsx-3384357391",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, "Hallo with Next.js and Marked.js"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_input_input__WEBPACK_IMPORTED_MODULE_10__["default"], {
        change: function change(event) {
          return _this2.changeListener(event);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_output_output__WEBPACK_IMPORTED_MODULE_11__["default"], {
        setMarkdown: this.getMarkdown(),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "3384357391",
        __self: this
      }, "div.jsx-3384357391{width:800px;margin:75px auto;border;2px solid black;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcR2FiZVxcRnJlZUNvZGVDYW1wXFxGcm9udEVuZExpYnJhcmllc1xcQnVpbGRBTWFya2Rvd25QcmV2aWV3ZXJcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2RWdDLEFBR3lDLFlBQ0ssaUJBQ1gsT0FBZ0IsZ0JBQ0osa0JBQ3RCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcR2FiZVxcRnJlZUNvZGVDYW1wXFxGcm9udEVuZExpYnJhcmllc1xcQnVpbGRBTWFya2Rvd25QcmV2aWV3ZXJcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBtYXJrZWQgZnJvbSAnbWFya2VkJztcclxuXHJcbmltcG9ydCBJbnB1dCBmcm9tICcuL2NvbXBvbmVudHMvaW5wdXQvaW5wdXQnO1xyXG5pbXBvcnQgT3V0cHV0IGZyb20gJy4vY29tcG9uZW50cy9vdXRwdXQvb3V0cHV0JztcclxuXHJcblxyXG5tYXJrZWQuc2V0T3B0aW9ucyh7XHJcbiAgICBicmVha3M6IHRydWUsXHJcbiAgICBzYW5pdGl6ZTogdHJ1ZVxyXG59KTtcclxuICBcclxuXHJcbmNsYXNzIEhvbWUgZXh0ZW5kcyBDb21wb25lbnR7XHJcbiAgICBzdGF0ZSA9IHtcclxuICAgICAgICBpbnB1dDogYFxyXG4gICAgICAgIFxcciAjIFdoeSBSZWFjdD9cclxuICAgICAgICBcXHIgPT09XHJcbiAgICAgICAgXFxyICMjIEkgY2VydGFpbmx5IGRpZG5cXCd0IG5lZWQgaXRcclxuICAgICAgICBcXHIgLS0tXHJcbiAgICAgICAgXFxyICMjIyBmb3IgbXkgMi1jb21wb25lbnQgMS1wYWdlIHByb2dyYW1cclxuICAgICAgICBcclxuICAgICAgICBcXHIgIyMjIEkganVzdCBsaWtlIFJlYWN0XHJcbiAgICAgICAgXHJcbiAgICAgICAgXFxyIEkgKndhbnRlZCogdG8gdXNlIGl0ICoqb2J2aW91c2x5ISoqXHJcbiAgICAgICAgXFxyIF9fX1xyXG5cclxuICAgICAgICBcXHIgXFxgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVcXGBcclxuICAgICAgICBcclxuICAgICAgICBcXHIgW2xpbmtzXShodHRwczovL2dhYmVzdGVyLnRlY2gpXHJcbiAgICAgICAgXHJcbiAgICAgICAgXFxyID4gRG9lcyB0aGlzIHNwYXJrIGpveT9cclxuXHJcbiAgICAgICAgXFxyIHRpY2sgfCB0YWNcclxuICAgICAgICBcXHIgLS0tLSB8IC0tLS1cclxuICAgICAgICBcXHIgdG9lIHwgc3BlbGw/XHJcblxyXG4gICAgICAgIFxcciAxLiBJIGFtXHJcbiAgICAgICAgXFxyIC0gYVxyXG4gICAgICAgIFxcciAtIGxpc3RcclxuXHJcbiAgICAgICAgXFxyICFbUmVhY3QgTG9nbyB3LyBUZXh0XShodHRwczovL2dvby5nbC9VbXl5dGMpXHJcblxyXG4gICAgICAgIFxcciBcXGBcXGBcXGBcclxuICAgICAgICBcXHIgLy9JIGFtIGFcclxuICAgICAgICBcXHIgLy9tdWx0aS1saW5lXHJcbiAgICAgICAgXFxyIC8vY29kZSBibG9ja1xyXG4gICAgICAgIFxcciBcXGBcXGBcXGBcclxuICAgICAgICBgXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XHJcbiAgICAgICAgY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcclxuICAgICAgICBzY3JpcHQuc3JjID0gJ2h0dHBzOi8vY2RuLmZyZWVjb2RlY2FtcC5vcmcvdGVzdGFibGUtcHJvamVjdHMtZmNjL3YxL2J1bmRsZS5qcyc7XHJcbiAgICAgICAgc2NyaXB0LmFzeW5jID0gdHJ1ZTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdCk7XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlTGlzdGVuZXIoZXZlbnQpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgaW5wdXQ6IGV2ZW50LnRhcmdldC52YWx1ZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TWFya2Rvd24gPSAoKSA9PntcclxuICAgICAgICBjb25zdCBtYXJrZG93biA9IG1hcmtlZCh0aGlzLnN0YXRlLmlucHV0LCB7c2FuaXRpemU6IHRydWV9KTtcclxuICAgICAgICByZXR1cm4ge19faHRtbDogbWFya2Rvd259O1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiA+XHJcbiAgICAgICAgICAgICAgICA8aDE+SGFsbG8gd2l0aCBOZXh0LmpzIGFuZCBNYXJrZWQuanM8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICBjaGFuZ2U9eyhldmVudCkgPT4gdGhpcy5jaGFuZ2VMaXN0ZW5lcihldmVudCkgfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxPdXRwdXQgc2V0TWFya2Rvd249e3RoaXMuZ2V0TWFya2Rvd24oKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpdiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogODAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDc1cHggYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjsgMnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG5cclxuey8qICAgICAgICBpbnB1dDogYFxyXG4gICAgICAgIFxcciAjIFdoeSBSZWFjdD9cclxuICAgICAgICBcXHIgIyMgSSBjZXJ0YWlubHkgZGlkblxcJ3QgbmVlZCBpdFxyXG4gICAgICAgIFxcciAjIyMgZm9yIG15IDItY29tcG9uZW50IDEtcGFnZSBwcm9ncmFtXHJcbiAgICAgICAgXHJcbiAgICAgICAgXFxyICMjIyBJIGp1c3QgbGlrZSBSZWFjdFxyXG4gICAgICAgIFxyXG4gICAgICAgIFxcciBJICp3YW50ZWQqIHRvIHVzZSBpdCAqKm9idmlvdXNseSEqKlxyXG4gICAgICAgIFxcciBfX19cclxuXHJcbiAgICAgICAgXFxyIFxcYGJhY2tncm91bmQtY29sb3I6IHdoaXRlXFxgXHJcbiAgICAgICAgXHJcbiAgICAgICAgXFxyIFtsaW5rc10oaHR0cHM6Ly9nYWJlc3Rlci50ZWNoKVxyXG4gICAgICAgIFxyXG4gICAgICAgIFxcciA+IERvZXMgdGhpcyBzcGFyayBqb3k/XHJcblxyXG4gICAgICAgIFxcciB0aWNrIHwgdGFjXHJcbiAgICAgICAgXFxyIC0tLS0gfCAtLS0tXHJcbiAgICAgICAgXFxyIHRvZSB8IHNwZWxsP1xyXG5cclxuICAgICAgICBcXHIgMS4gSSBhbVxyXG4gICAgICAgIFxcciAtIGFcclxuICAgICAgICBcXHIgLSBsaXN0XHJcblxyXG4gICAgICAgIFxcciAhW1JlYWN0IExvZ28gdy8gVGV4dF0oaHR0cHM6Ly9nb28uZ2wvVW15eXRjKVxyXG5cclxuICAgICAgICBcXHIgXFxgXFxgXFxgXHJcbiAgICAgICAgXFxyIC8vSSBhbSBhXHJcbiAgICAgICAgXFxyIC8vbXVsdGktbGluZVxyXG4gICAgICAgIFxcciAvL2NvZGUgYmxvY2tcclxuICAgICAgICBcXHIgXFxgXFxgXFxgXHJcbiAgICAgICAgYFxyXG4gKi99Il19 */\n/*@ sourceURL=C:\\Users\\Gabe\\FreeCodeCamp\\FrontEndLibraries\\BuildAMarkdownPreviewer\\pages\\index.js */"));
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Home);
{
  /*        input: `
         \r # Why React?
         \r ## I certainly didn\'t need it
         \r ### for my 2-component 1-page program
         
         \r ### I just like React
         
         \r I *wanted* to use it **obviously!**
         \r ___
  
         \r \`background-color: white\`
         
         \r [links](https://gabester.tech)
         
         \r > Does this spark joy?
  
         \r tick | tac
         \r ---- | ----
         \r toe | spell?
  
         \r 1. I am
         \r - a
         \r - list
  
         \r ![React Logo w/ Text](https://goo.gl/Umyytc)
  
         \r \`\`\`
         \r //I am a
         \r //multi-line
         \r //code block
         \r \`\`\`
         `
  */
}

/***/ })

})
//# sourceMappingURL=index.js.d07f2ef3afea9ac8a124.hot-update.js.map