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
/* harmony import */ var _components_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/input */ "./components/input.js");
/* harmony import */ var _components_output__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/output */ "./components/output.js");







var _jsxFileName = "C:\\Users\\Gabe\\FreeCodeCamp\\FrontEndLibraries\\BuildAMarkdownPreviewer\\pages\\index.js";





/*
Change this to have a select statement to choose which Element you want a demo of
When I select one this resets the input and the output

in input.js need to assign value with props.  Then can define value in index.js

Just create an event listener for the dropdown that will set state and input.js props value.  

Give "Markdown" in page header a tooltip with a brief explanation of what markdown is.  
*/

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
      input: "\n            # One hashtag = H1\n        "
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "getMarkdown", function () {
      var markdown = marked__WEBPACK_IMPORTED_MODULE_9___default()(_this.state.input, {
        sanitize: true,
        tables: true,
        breaks: true
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
      document.body.appendChild(script); //Remove space from url demonstration

      if (document.querySelector("a")) {
        var link = document.querySelector("a").textContent;
        var editedLink = link.split("").filter(function (e) {
          return e != " ";
        }).join("");
        document.querySelector("a").textContent = editedLink;
      }
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
        className: "jsx-2841913352",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", {
        className: "jsx-2841913352",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, "Markdown Previewer"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_input__WEBPACK_IMPORTED_MODULE_10__["default"], {
        change: function change(event) {
          return _this2.changeListener(event);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_output__WEBPACK_IMPORTED_MODULE_11__["default"], {
        setMarkdown: this.getMarkdown(),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "2841913352",
        __self: this
      }, "div{width:800px;margin:0 auto;border;2px solid #343434;text-align:center;font-size:16px;font-family:'Lato';}h1{font-size:5em;font-weight:100;}h2{font-size:4em;font-weight:200;}h3{font-size:3em;font-weight:300;}table{border-collapse:collapse;}td,th{border:4px solid #343434;padding:5px;}code{width:95%;display:inline-block;background:#343434;color:white;line-height:150%;padding:10px;}hr{width:97%;margin-left:0!important;}ul,ol{width:95%;margin:25px 0;}p>img{width:200px;height:auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcR2FiZVxcRnJlZUNvZGVDYW1wXFxGcm9udEVuZExpYnJhcmllc1xcQnVpbGRBTWFya2Rvd25QcmV2aWV3ZXJcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxRHVDLEFBR3lDLEFBUUUsQUFJQSxBQUlBLEFBSVcsQUFJQSxBQUlmLEFBUUEsQUFLQSxBQUlFLFVBaEJTLEFBUUcsQUFLVixFQXpDQSxBQTZDRixFQXJDSSxBQUlBLEFBSUEsVUEwQnBCLEFBSUEsQ0ExQkEsQUFJZ0IsQ0F2Qk4sSUFRVixBQUlBLEFBSUEsQ0FZdUIsRUE1QkssQ0FvQzVCLEdBWkEsYUFLZ0IsQ0E1Qk0sV0E2QkYsT0E1QkQsVUE2QkYsS0E1Qk0sUUE2QnZCLFdBNUJBIiwiZmlsZSI6IkM6XFxVc2Vyc1xcR2FiZVxcRnJlZUNvZGVDYW1wXFxGcm9udEVuZExpYnJhcmllc1xcQnVpbGRBTWFya2Rvd25QcmV2aWV3ZXJcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBtYXJrZWQgZnJvbSAnbWFya2VkJztcclxuXHJcbmltcG9ydCBJbnB1dCBmcm9tICcuLi9jb21wb25lbnRzL2lucHV0JztcclxuaW1wb3J0IE91dHB1dCBmcm9tICcuLi9jb21wb25lbnRzL291dHB1dCc7XHJcbi8qXHJcbkNoYW5nZSB0aGlzIHRvIGhhdmUgYSBzZWxlY3Qgc3RhdGVtZW50IHRvIGNob29zZSB3aGljaCBFbGVtZW50IHlvdSB3YW50IGEgZGVtbyBvZlxyXG5XaGVuIEkgc2VsZWN0IG9uZSB0aGlzIHJlc2V0cyB0aGUgaW5wdXQgYW5kIHRoZSBvdXRwdXRcclxuXHJcbmluIGlucHV0LmpzIG5lZWQgdG8gYXNzaWduIHZhbHVlIHdpdGggcHJvcHMuICBUaGVuIGNhbiBkZWZpbmUgdmFsdWUgaW4gaW5kZXguanNcclxuXHJcbkp1c3QgY3JlYXRlIGFuIGV2ZW50IGxpc3RlbmVyIGZvciB0aGUgZHJvcGRvd24gdGhhdCB3aWxsIHNldCBzdGF0ZSBhbmQgaW5wdXQuanMgcHJvcHMgdmFsdWUuICBcclxuXHJcbkdpdmUgXCJNYXJrZG93blwiIGluIHBhZ2UgaGVhZGVyIGEgdG9vbHRpcCB3aXRoIGEgYnJpZWYgZXhwbGFuYXRpb24gb2Ygd2hhdCBtYXJrZG93biBpcy4gIFxyXG4qL1xyXG5jbGFzcyBIb21lIGV4dGVuZHMgQ29tcG9uZW50e1xyXG4gICAgc3RhdGUgPSB7XHJcbiAgICAgICAgaW5wdXQ6IGBcclxuICAgICAgICAgICAgIyBPbmUgaGFzaHRhZyA9IEgxXHJcbiAgICAgICAgYFxyXG4gICAgfTtcclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xyXG4gICAgICAgIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XHJcbiAgICAgICAgc2NyaXB0LnNyYyA9ICdodHRwczovL2Nkbi5mcmVlY29kZWNhbXAub3JnL3Rlc3RhYmxlLXByb2plY3RzLWZjYy92MS9idW5kbGUuanMnO1xyXG4gICAgICAgIHNjcmlwdC5hc3luYyA9IHRydWU7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO1xyXG4gICAgICAgIC8vUmVtb3ZlIHNwYWNlIGZyb20gdXJsIGRlbW9uc3RyYXRpb25cclxuICAgICAgICBpZiggZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImFcIikgKXtcclxuICAgICAgICAgICAgY29uc3QgbGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJhXCIpLnRleHRDb250ZW50O1xyXG4gICAgICAgICAgICBjb25zdCBlZGl0ZWRMaW5rID0gbGluay5zcGxpdChcIlwiKS5maWx0ZXIoZT0+IGUhPSBcIiBcIikuam9pbihcIlwiKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImFcIikudGV4dENvbnRlbnQgPSBlZGl0ZWRMaW5rO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VMaXN0ZW5lcihldmVudCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBpbnB1dDogZXZlbnQudGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBnZXRNYXJrZG93biA9ICgpID0+e1xyXG4gICAgICAgIGNvbnN0IG1hcmtkb3duID0gbWFya2VkKHRoaXMuc3RhdGUuaW5wdXQsIHtzYW5pdGl6ZTogdHJ1ZSwgdGFibGVzOiB0cnVlLCBicmVha3M6IHRydWV9LCApO1xyXG4gICAgICAgIHJldHVybiB7X19odG1sOiBtYXJrZG93bn07XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2ID5cclxuICAgICAgICAgICAgICAgIDxoMT5NYXJrZG93biBQcmV2aWV3ZXI8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dCBjaGFuZ2U9eyhldmVudCkgPT4gdGhpcy5jaGFuZ2VMaXN0ZW5lcihldmVudCkgfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxPdXRwdXQgc2V0TWFya2Rvd249e3RoaXMuZ2V0TWFya2Rvd24oKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXYge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI7IDJweCBzb2xpZCAjMzQzNDM0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdMYXRvJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDVlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaDIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA0ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMjAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGgzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogM2VtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWJsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDRweCBzb2xpZCAjMzQzNDM0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDk1JTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMzNDM0MzQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDoxNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBociB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogOTclO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogOTUlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAyNXB4IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcCA+IGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcblxyXG4vKlxyXG5gXHJcblxyXG4jIyBUd28gaGFzaHRhZ3MgPSBIMlxcclxyXG5cclxuIyMjIFRocmVlIGhhc2h0YWdzID0gSDNcXHJcclxuXHJcbiMjIyMgRm91ciBoYXNodGFncyA9IEg0XFxyXHJcblxyXG4jIyMjIyBGaXZlIGhhc2h0YWdzID0gSDVcXHJcclxuXHJcbiMjIyMjIyBTaXggaGFzaHRhZ3MgPSBINlxcclxyXG5cclxuXHJcblxyXG5cclxuV3JhcCB0ZXh0IGluIGFzdGVyaXNrcyA9ICpJdGFsaWNpemVkIFRleHQqXFxyXHJcblxyXG5XcmFwIHRleHQgaW4gZG91YmxlIGFzdGVyaXNrcyA9ICoqQm9sZCBUZXh0KipcXHJcclxuXHJcblxyXG5cclxuXHJcblRocmVlIHVuZGVyc2NvcmVzIG9yIGFzdGVyaXNrcyBvciBkYXNoZXMgPSBcXDxoclxcPiAoaG9yaXpvbnRhbCBsaW5lKVxcclxyXG4qTm90ZTogdGhlIHRocmVlIHVuZGVyc2NvcmVzIG9yIGFzdGVyaXNrcyBvciBkYXNoZXMgbXVzdCBiZSB0aGUgb25seSBjaGFyYWN0ZXJzIG9uIHRoZSBsaW5lIGZvciB0aGlzIHRvIHdvcmsqXHJcblxyXG5fX19cclxuKioqXHJcbi0tLVxyXG5cclxuXHJcblxyXG5cclxuV3JhcCB0ZXh0IGluIGJhY2t0aWNrcyA9IFxcYCBUZXh0IGNvbG9yIGFuZCBiYWNrZ3JvdW5kIGNvbG9yIGFyZSBzd2l0Y2hlZCBcXGBcXHJcclxuXHJcbldyYXAgdGV4dCBpbiBzcXVhcmUgYnJhY2tldHMgZm9sbG93ZWQgYnkgdXJsIHdyYXBwZWQgaW4gcGFyZW50aGVzZXMgPSBbW2xpbmtdICh1cmwpXShodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9IeXBlcmxpbmspXFxyXHJcbipOb3RlOiBEb24ndCBwdXQgYW55IHNwYWNlIGJldHdlZW4gdGhlIHNxdWFyZSBicmFja2V0cyBhbmQgdGhlIHBhcmVudGhlc2VzKlxcclxyXG5cclxuPiBTdGFydCBsaW5lIHdpdGggb25lIFxcPiBjaGFyYWN0ZXIgPSBJbmRlbnRlZCBibG9ja3F1b3RlXHJcblxyXG4+ID4gU3RhcnQgbGluZSB3aXRoIHR3byBcXD4gY2hhcmFjdGVycyA9IERvdWJsZSBpbmRlbnRlZCBibG9ja3F1b3RlXHJcblxyXG5cclxuLS0tXHJcblxyXG5cclxuXHJcbjEuIFN0YXJ0IGVhY2ggbGluZSB3aXRoIGEgbnVtYmVyICsgYSBwZXJpb2QgKyBhIHNwYWNlICsgWW91ciB0ZXh0PSBOdW1iZXJlZCBMaXN0XHJcbjMuIE51bWJlciArIFBlcmlvZCA9ICYjNTA7LiBZb3VyIHRleHRcclxuNC4gKCYjNTI7LikgWW91IGNhbiB1c2UgYW55IG51bWJlciB5b3Ugd2FudFxyXG40LiAoJiM1MjsuKSBNYXJrZG93biB3aWxsIHN0aWxsIHNob3cgdGhlIG5leHQgbnVtYmVyXHJcbjEwLiAoJiM0OTsmIzQ4Oy4pIE1hcmtkb3duIHdpbGwgc3RpbGwgc2hvdyB0aGUgbmV4dCBzZXF1ZW50aWFsIG51bWJlclxyXG5cclxuLSBTdGFydCBlYWNoIGxpbmUgd2l0aCBhIGRhc2ggcGx1cyBhIHNwYWNlID0gQnVsbGV0ZWQgbGlzdFxyXG4tIFN0YXJ0IGVhY2ggbGluZSB3aXRoIGEgZGFzaCBwbHVzIGEgc3BhY2UgPSBCdWxsZXRlZCBsaXN0XHJcbi0gU3RhcnQgZWFjaCBsaW5lIHdpdGggYSBkYXNoIHBsdXMgYSBzcGFjZSA9IEJ1bGxldGVkIGxpc3RcclxuLSBTdGFydCBlYWNoIGxpbmUgd2l0aCBhIGRhc2ggcGx1cyBhIHNwYWNlID0gQnVsbGV0ZWQgbGlzdFxyXG5cclxuXHJcblxyXG4tLS1cclxuXHJcblxyXG5cclxuKipJTlBVVDoqKlxyXG5cclxuJiM5NjsgJiM5NjsgJiM5NjsgXHJcbnZhciBjb2RlID0gZnVuY3Rpb24oKXtcclxuPiBhbGVydCggXCJXcmFwIHlvdSBjb2RlIGluIGEgcGFpciBvZiB0cmlwbGUgXFxyIGJhY2t0aWNrcyB0byBjcmVhdGUgYSBtdWx0aS1saW5lIGNvZGUgYmxvY2tcIiApOyBcXHJcclxuPiAvL1RvIGluZGVudCBsaW5lcyBvZiBjb2RlIHVzZSB0YWJzXHJcblxyXG59O1xyXG5cclxuY29kZSgpO1xyXG4mIzk2OyAmIzk2OyAmIzk2O1xyXG5cclxuKipPVVRQVVQ6KipcclxuXHJcblxcYFxcYFxcYCBcclxudmFyIGNvZGUgPSBmdW5jdGlvbigpe1xyXG4gICAgYWxlcnQoIFwiV3JhcCB5b3UgY29kZSBpbiBhIHBhaXIgb2YgdHJpcGxlIFxyXG4gICAgYmFja3RpY2tzIHRvIGNyZWF0ZSBhIG11bHRpLWxpbmUgY29kZSBibG9ja1wiICk7XHJcbiAgICAvL1RvIGluZGVudCBsaW5lcyBvZiBjb2RlIHVzZSB0YWJzXHJcbn07XHJcblxyXG5jb2RlKCk7XHJcblxcYFxcYFxcYFxyXG5cclxuXHJcblxyXG4tLS1cclxuXHJcblxyXG5cclxuKipJTlBVVDoqKlxyXG5cclxuJiMzMzsmIzkxOyBEZXNjcmlwdGlvbiBvZiB0aGUgaW1hZ2UgJiM5MzsmIzQwOyB0aGUgaW1hZ2UgVVJMICYjNDE7XHJcblxyXG4qKk9VVFBVVDoqKlxyXG5cclxuIVtSZWFjdCBMb2dvIHcvIFRleHRdKGh0dHBzOi8vZ29vLmdsL1VteXl0YylcclxuXHJcblxyXG5cclxuLS0tXHJcblxyXG5cclxuXHJcbioqSU5QVVQ6KipcclxuXHJcbiYjMTI0OyBUbyBDcmVhdGUgJiMxMjQ7IEEgVGFibGU6ICYjMTI0OyBXcmFwIFRleHQgJiMxMjQ7IEluIFBpcGUgKG9yIHZlcnRpY2FsIHNsYXNoKSBzeW1ib2xzICYjMTI0O1xyXG4mIzEyNDsgLSAmIzEyNDstICYjMTI0OyAtICYjMTI0OyAtICYjMTI0O1xyXG4mIzEyNDsgT24gdGhlIDJuZCBsaW5lICYjMTI0OyBUeXBlIFBpcGUgKyBEYXNoICYjMTI0OyBPbmNlIEZvciBFdmVyeSAmIzEyNDsgVGFibGUgQ2VsbCBpbiB0aGUgUm93ICYjMTI0O1xyXG4mIzEyNDsgRm9yIEV2ZXJ5ICYjMTI0OyBSb3cgJiMxMjQ7ICBXcmFwIFRleHQgJiMxMjQ7IEluIFBpcGVzICYjMTI0O1xyXG4mIzEyNDsgSWYgVGhlcmUgQXJlIExlc3MgQ2VsbHMgJiMxMjQ7IFRoZSBUYWJsZSBXaWxsIEF1dG9tYXRpY2FsbHkgJiMxMjQ7IEZpbGwgSW4gQmxhbmsgQ2VsbHMgJiMxMjQ7XHJcblxyXG4qKk9VVFBVVDoqKlxyXG5cclxufCBUbyBDcmVhdGUgfCBBIFRhYmxlOiB8IFdyYXAgVGV4dCB8IEluIFBpcGUgKG9yIHZlcnRpY2FsIHNsYXNoKSBzeW1ib2xzIHxcclxufC0gfCAtIHwgLXwgLXxcclxufCBPbiB0aGUgMm5kIGxpbmUgfCBUeXBlIFBpcGUgKyBEYXNoIHwgT25jZSBGb3IgRXZlcnkgfCBUYWJsZSBDZWxsIGluIHRoZSBSb3cgfFxyXG58IEZvciBFdmVyeSB8IFJvdyB8ICBXcmFwIFRleHQgfCBJbiBQaXBlcyB8XHJcbnwgSWYgVGhlcmUgQXJlIExlc3MgQ2VsbHMgfCBUaGUgVGFibGUgV2lsbCBBdXRvbWF0aWNhbGx5IHwgRmlsbCBJbiBCbGFuayBDZWxscyB8XHJcblxyXG5cclxuXHJcblxyXG5gXHJcbiovIl19 */\n/*@ sourceURL=C:\\Users\\Gabe\\FreeCodeCamp\\FrontEndLibraries\\BuildAMarkdownPreviewer\\pages\\index.js */"));
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Home);
/*
`

## Two hashtags = H2\r

### Three hashtags = H3\r

#### Four hashtags = H4\r

##### Five hashtags = H5\r

###### Six hashtags = H6\r




Wrap text in asterisks = *Italicized Text*\r

Wrap text in double asterisks = **Bold Text**\r




Three underscores or asterisks or dashes = \<hr\> (horizontal line)\r
*Note: the three underscores or asterisks or dashes must be the only characters on the line for this to work*

___
***
---




Wrap text in backticks = \` Text color and background color are switched \`\r

Wrap text in square brackets followed by url wrapped in parentheses = [[link] (url)](https://en.wikipedia.org/wiki/Hyperlink)\r
*Note: Don't put any space between the square brackets and the parentheses*\r

> Start line with one \> character = Indented blockquote

> > Start line with two \> characters = Double indented blockquote


---



1. Start each line with a number + a period + a space + Your text= Numbered List
3. Number + Period = &#50;. Your text
4. (&#52;.) You can use any number you want
4. (&#52;.) Markdown will still show the next number
10. (&#49;&#48;.) Markdown will still show the next sequential number

- Start each line with a dash plus a space = Bulleted list
- Start each line with a dash plus a space = Bulleted list
- Start each line with a dash plus a space = Bulleted list
- Start each line with a dash plus a space = Bulleted list



---



**INPUT:**

&#96; &#96; &#96; 
var code = function(){
> alert( "Wrap you code in a pair of triple \r backticks to create a multi-line code block" ); \r
> //To indent lines of code use tabs

};

code();
&#96; &#96; &#96;

**OUTPUT:**

\`\`\` 
var code = function(){
    alert( "Wrap you code in a pair of triple 
    backticks to create a multi-line code block" );
    //To indent lines of code use tabs
};

code();
\`\`\`



---



**INPUT:**

&#33;&#91; Description of the image &#93;&#40; the image URL &#41;

**OUTPUT:**

![React Logo w/ Text](https://goo.gl/Umyytc)



---



**INPUT:**

&#124; To Create &#124; A Table: &#124; Wrap Text &#124; In Pipe (or vertical slash) symbols &#124;
&#124; - &#124;- &#124; - &#124; - &#124;
&#124; On the 2nd line &#124; Type Pipe + Dash &#124; Once For Every &#124; Table Cell in the Row &#124;
&#124; For Every &#124; Row &#124;  Wrap Text &#124; In Pipes &#124;
&#124; If There Are Less Cells &#124; The Table Will Automatically &#124; Fill In Blank Cells &#124;

**OUTPUT:**

| To Create | A Table: | Wrap Text | In Pipe (or vertical slash) symbols |
|- | - | -| -|
| On the 2nd line | Type Pipe + Dash | Once For Every | Table Cell in the Row |
| For Every | Row |  Wrap Text | In Pipes |
| If There Are Less Cells | The Table Will Automatically | Fill In Blank Cells |




`
*/

/***/ })

})
//# sourceMappingURL=index.js.056d289b72df616c656b.hot-update.js.map