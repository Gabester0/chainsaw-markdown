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
  pedantic: false,
  gfm: true,
  tables: true,
  breaks: true,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false
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
      input: "\n        # Why React?\n        ## I certainly didn't need it\n        ### for my 2-component 1-page program!\n        ### I like React\n        I *wanted* to use it **obviously!**\n        ___\n        `background-color: white`\n        [links](https://gabester.tech)\n        > Does this spark joy?\n         tick | tac\n        ---- | ----\n        toe | spell?\n         1. I am\n        - a\n        - list\n        ![React Logo w/ Text](https://goo.gl/Umyytc)\n        ```  /*I am a\n        multi-line\n        code block*/```\n        "
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
          lineNumber: 66
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", {
        className: "jsx-3384357391",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, "Hallo with Next.js and Marked.js"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_input_input__WEBPACK_IMPORTED_MODULE_10__["default"], {
        change: function change(event) {
          return _this2.changeListener(event);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_output_output__WEBPACK_IMPORTED_MODULE_11__["default"], {
        setMarkdown: this.getMarkdown(),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "3384357391",
        __self: this
      }, "div.jsx-3384357391{width:800px;margin:75px auto;border;2px solid black;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcR2FiZVxcRnJlZUNvZGVDYW1wXFxGcm9udEVuZExpYnJhcmllc1xcQnVpbGRBTWFya2Rvd25QcmV2aWV3ZXJcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxRWdDLEFBR3lDLFlBQ0ssaUJBQ1gsT0FBZ0IsZ0JBQ0osa0JBQ3RCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcR2FiZVxcRnJlZUNvZGVDYW1wXFxGcm9udEVuZExpYnJhcmllc1xcQnVpbGRBTWFya2Rvd25QcmV2aWV3ZXJcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBtYXJrZWQgZnJvbSAnbWFya2VkJztcclxuXHJcbmltcG9ydCBJbnB1dCBmcm9tICcuL2NvbXBvbmVudHMvaW5wdXQvaW5wdXQnO1xyXG5pbXBvcnQgT3V0cHV0IGZyb20gJy4vY29tcG9uZW50cy9vdXRwdXQvb3V0cHV0JztcclxuXHJcblxyXG5tYXJrZWQuc2V0T3B0aW9ucyh7XHJcbiAgICBwZWRhbnRpYzogZmFsc2UsXHJcbiAgICBnZm06IHRydWUsXHJcbiAgICB0YWJsZXM6IHRydWUsXHJcbiAgICBicmVha3M6IHRydWUsXHJcbiAgICBzYW5pdGl6ZTogZmFsc2UsXHJcbiAgICBzbWFydExpc3RzOiB0cnVlLFxyXG4gICAgc21hcnR5cGFudHM6IGZhbHNlLFxyXG4gICAgeGh0bWw6IGZhbHNlXHJcbiAgfSk7XHJcbiAgXHJcblxyXG5jbGFzcyBIb21lIGV4dGVuZHMgQ29tcG9uZW50e1xyXG4gICAgc3RhdGUgPSB7XHJcbiAgICAgICAgaW5wdXQ6IGBcclxuICAgICAgICAjIFdoeSBSZWFjdD9cclxuICAgICAgICAjIyBJIGNlcnRhaW5seSBkaWRuXFwndCBuZWVkIGl0XHJcbiAgICAgICAgIyMjIGZvciBteSAyLWNvbXBvbmVudCAxLXBhZ2UgcHJvZ3JhbSFcclxuICAgICAgICAjIyMgSSBsaWtlIFJlYWN0XHJcbiAgICAgICAgSSAqd2FudGVkKiB0byB1c2UgaXQgKipvYnZpb3VzbHkhKipcclxuICAgICAgICBfX19cclxuICAgICAgICBcXGBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZVxcYFxyXG4gICAgICAgIFtsaW5rc10oaHR0cHM6Ly9nYWJlc3Rlci50ZWNoKVxyXG4gICAgICAgID4gRG9lcyB0aGlzIHNwYXJrIGpveT9cclxuICAgICAgICAgdGljayB8IHRhY1xyXG4gICAgICAgIC0tLS0gfCAtLS0tXHJcbiAgICAgICAgdG9lIHwgc3BlbGw/XHJcbiAgICAgICAgIDEuIEkgYW1cclxuICAgICAgICAtIGFcclxuICAgICAgICAtIGxpc3RcclxuICAgICAgICAhW1JlYWN0IExvZ28gdy8gVGV4dF0oaHR0cHM6Ly9nb28uZ2wvVW15eXRjKVxyXG4gICAgICAgIFxcYFxcYFxcYCAgLypJIGFtIGFcclxuICAgICAgICBtdWx0aS1saW5lXHJcbiAgICAgICAgY29kZSBibG9jayovXFxgXFxgXFxgXHJcbiAgICAgICAgYFxyXG4gICAgfTtcclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xyXG4gICAgICAgIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XHJcbiAgICAgICAgc2NyaXB0LnNyYyA9ICdodHRwczovL2Nkbi5mcmVlY29kZWNhbXAub3JnL3Rlc3RhYmxlLXByb2plY3RzLWZjYy92MS9idW5kbGUuanMnO1xyXG4gICAgICAgIHNjcmlwdC5hc3luYyA9IHRydWU7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZUxpc3RlbmVyKGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGlucHV0OiBldmVudC50YXJnZXQudmFsdWVcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGdldE1hcmtkb3duID0gKCkgPT57XHJcbiAgICAgICAgY29uc3QgbWFya2Rvd24gPSBtYXJrZWQodGhpcy5zdGF0ZS5pbnB1dCwge3Nhbml0aXplOiB0cnVlfSk7XHJcbiAgICAgICAgcmV0dXJuIHtfX2h0bWw6IG1hcmtkb3dufTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgPlxyXG4gICAgICAgICAgICAgICAgPGgxPkhhbGxvIHdpdGggTmV4dC5qcyBhbmQgTWFya2VkLmpzPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXQgY2hhbmdlPXsoZXZlbnQpID0+IHRoaXMuY2hhbmdlTGlzdGVuZXIoZXZlbnQpIH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8T3V0cHV0IHNldE1hcmtkb3duPXt0aGlzLmdldE1hcmtkb3duKCl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXYge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA3NXB4IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI7IDJweCBzb2xpZCBibGFjaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiXX0= */\n/*@ sourceURL=C:\\Users\\Gabe\\FreeCodeCamp\\FrontEndLibraries\\BuildAMarkdownPreviewer\\pages\\index.js */"));
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.84862fb143b98a879ff9.hot-update.js.map