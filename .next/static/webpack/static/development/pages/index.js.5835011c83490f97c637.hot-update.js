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
/* harmony import */ var _components_markdown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/markdown */ "./components/markdown.js");







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
      input: "\n# One hashtag = H1\n        "
      /*
      
      a header (H1 size), 
      a sub header (H2 size), 
      a link, inline code, 
      a code block, a list item, 
      a blockquote, an image, and bolded text
      */

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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "options", function (markdown) {
      var keys = object.keys(markdown);
      keys.forEach(function (key) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("option", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          },
          __self: this
        }, key);
      });
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
          lineNumber: 64
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", {
        className: "jsx-2841913352",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, "Markdown Previewer"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_input__WEBPACK_IMPORTED_MODULE_10__["default"], {
        change: function change(event) {
          return _this2.changeListener(event);
        },
        input: this.state.input,
        options: this.options,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_output__WEBPACK_IMPORTED_MODULE_11__["default"], {
        setMarkdown: this.getMarkdown(),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "2841913352",
        __self: this
      }, "div{width:800px;margin:0 auto;border;2px solid #343434;text-align:center;font-size:16px;font-family:'Lato';}h1{font-size:5em;font-weight:100;}h2{font-size:4em;font-weight:200;}h3{font-size:3em;font-weight:300;}table{border-collapse:collapse;}td,th{border:4px solid #343434;padding:5px;}code{width:95%;display:inline-block;background:#343434;color:white;line-height:150%;padding:10px;}hr{width:97%;margin-left:0!important;}ul,ol{width:95%;margin:25px 0;}p>img{width:200px;height:auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcR2FiZVxcRnJlZUNvZGVDYW1wXFxGcm9udEVuZExpYnJhcmllc1xcQnVpbGRBTWFya2Rvd25QcmV2aWV3ZXJcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzRXVDLEFBR3lDLEFBUUUsQUFJQSxBQUlBLEFBSVcsQUFJQSxBQUlmLEFBUUEsQUFLQSxBQUlFLFVBaEJTLEFBUUcsQUFLVixFQXpDQSxBQTZDRixFQXJDSSxBQUlBLEFBSUEsVUEwQnBCLEFBSUEsQ0ExQkEsQUFJZ0IsQ0F2Qk4sSUFRVixBQUlBLEFBSUEsQ0FZdUIsRUE1QkssQ0FvQzVCLEdBWkEsYUFLZ0IsQ0E1Qk0sV0E2QkYsT0E1QkQsVUE2QkYsS0E1Qk0sUUE2QnZCLFdBNUJBIiwiZmlsZSI6IkM6XFxVc2Vyc1xcR2FiZVxcRnJlZUNvZGVDYW1wXFxGcm9udEVuZExpYnJhcmllc1xcQnVpbGRBTWFya2Rvd25QcmV2aWV3ZXJcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBtYXJrZWQgZnJvbSAnbWFya2VkJztcclxuXHJcbmltcG9ydCBJbnB1dCBmcm9tICcuLi9jb21wb25lbnRzL2lucHV0JztcclxuaW1wb3J0IE91dHB1dCBmcm9tICcuLi9jb21wb25lbnRzL291dHB1dCc7XHJcbmltcG9ydCBtYXJrZG93biBmcm9tICcuLi9jb21wb25lbnRzL21hcmtkb3duJztcclxuLypcclxuQ2hhbmdlIHRoaXMgdG8gaGF2ZSBhIHNlbGVjdCBzdGF0ZW1lbnQgdG8gY2hvb3NlIHdoaWNoIEVsZW1lbnQgeW91IHdhbnQgYSBkZW1vIG9mXHJcbldoZW4gSSBzZWxlY3Qgb25lIHRoaXMgcmVzZXRzIHRoZSBpbnB1dCBhbmQgdGhlIG91dHB1dFxyXG5cclxuaW4gaW5wdXQuanMgbmVlZCB0byBhc3NpZ24gdmFsdWUgd2l0aCBwcm9wcy4gIFRoZW4gY2FuIGRlZmluZSB2YWx1ZSBpbiBpbmRleC5qc1xyXG5cclxuSnVzdCBjcmVhdGUgYW4gZXZlbnQgbGlzdGVuZXIgZm9yIHRoZSBkcm9wZG93biB0aGF0IHdpbGwgc2V0IHN0YXRlIGFuZCBpbnB1dC5qcyBwcm9wcyB2YWx1ZS4gIFxyXG5cclxuR2l2ZSBcIk1hcmtkb3duXCIgaW4gcGFnZSBoZWFkZXIgYSB0b29sdGlwIHdpdGggYSBicmllZiBleHBsYW5hdGlvbiBvZiB3aGF0IG1hcmtkb3duIGlzLiAgXHJcbiovXHJcbmNsYXNzIEhvbWUgZXh0ZW5kcyBDb21wb25lbnR7XHJcbiAgICBzdGF0ZSA9IHtcclxuICAgICAgICBpbnB1dDogYFxyXG4jIE9uZSBoYXNodGFnID0gSDFcclxuICAgICAgICBgXHJcbiAgICAgICAgLypcclxuICAgICAgICBcclxuYSBoZWFkZXIgKEgxIHNpemUpLCBcclxuYSBzdWIgaGVhZGVyIChIMiBzaXplKSwgXHJcbmEgbGluaywgaW5saW5lIGNvZGUsIFxyXG5hIGNvZGUgYmxvY2ssIGEgbGlzdCBpdGVtLCBcclxuYSBibG9ja3F1b3RlLCBhbiBpbWFnZSwgYW5kIGJvbGRlZCB0ZXh0XHJcbiAgICAgICAgKi9cclxuICAgIH07XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcclxuICAgICAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xyXG4gICAgICAgIHNjcmlwdC5zcmMgPSAnaHR0cHM6Ly9jZG4uZnJlZWNvZGVjYW1wLm9yZy90ZXN0YWJsZS1wcm9qZWN0cy1mY2MvdjEvYnVuZGxlLmpzJztcclxuICAgICAgICBzY3JpcHQuYXN5bmMgPSB0cnVlO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcclxuICAgICAgICAvL1JlbW92ZSBzcGFjZSBmcm9tIHVybCBkZW1vbnN0cmF0aW9uXHJcbiAgICAgICAgaWYoIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJhXCIpICl7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYVwiKS50ZXh0Q29udGVudDtcclxuICAgICAgICAgICAgY29uc3QgZWRpdGVkTGluayA9IGxpbmsuc3BsaXQoXCJcIikuZmlsdGVyKGU9PiBlIT0gXCIgXCIpLmpvaW4oXCJcIik7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJhXCIpLnRleHRDb250ZW50ID0gZWRpdGVkTGluaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlTGlzdGVuZXIoZXZlbnQpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgaW5wdXQ6IGV2ZW50LnRhcmdldC52YWx1ZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TWFya2Rvd24gPSAoKSA9PntcclxuICAgICAgICBjb25zdCBtYXJrZG93biA9IG1hcmtlZCh0aGlzLnN0YXRlLmlucHV0LCB7c2FuaXRpemU6IHRydWUsIHRhYmxlczogdHJ1ZSwgYnJlYWtzOiB0cnVlfSwgKTtcclxuICAgICAgICByZXR1cm4ge19faHRtbDogbWFya2Rvd259O1xyXG4gICAgfVxyXG5cclxuICAgIG9wdGlvbnMgPSAobWFya2Rvd24pPT57XHJcbiAgICAgICAgY29uc3Qga2V5cyA9IG9iamVjdC5rZXlzKG1hcmtkb3duKTtcclxuICAgICAgICBrZXlzLmZvckVhY2goa2V5PT4gPG9wdGlvbj57a2V5fTwvb3B0aW9uPik7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2ID5cclxuICAgICAgICAgICAgICAgIDxoMT5NYXJrZG93biBQcmV2aWV3ZXI8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICBjaGFuZ2U9eyhldmVudCkgPT4gdGhpcy5jaGFuZ2VMaXN0ZW5lcihldmVudCkgfSBcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dCA9e3RoaXMuc3RhdGUuaW5wdXR9XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17dGhpcy5vcHRpb25zfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPE91dHB1dCBzZXRNYXJrZG93bj17dGhpcy5nZXRNYXJrZG93bigpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpdiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogODAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjsgMnB4IHNvbGlkICMzNDM0MzQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0xhdG8nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGgxIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNWVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDRlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaDMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogNHB4IHNvbGlkICMzNDM0MzQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29kZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogOTUlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzM0MzQzNDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OjE1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5NyU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMCFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5NSU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDI1cHggMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwID4gaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuXHJcbi8qXHJcbmBcclxuXHJcbiMjIFR3byBoYXNodGFncyA9IEgyXFxyXHJcblxyXG4jIyMgVGhyZWUgaGFzaHRhZ3MgPSBIM1xcclxyXG5cclxuIyMjIyBGb3VyIGhhc2h0YWdzID0gSDRcXHJcclxuXHJcbiMjIyMjIEZpdmUgaGFzaHRhZ3MgPSBINVxcclxyXG5cclxuIyMjIyMjIFNpeCBoYXNodGFncyA9IEg2XFxyXHJcblxyXG5cclxuXHJcblxyXG5XcmFwIHRleHQgaW4gYXN0ZXJpc2tzID0gKkl0YWxpY2l6ZWQgVGV4dCpcXHJcclxuXHJcbldyYXAgdGV4dCBpbiBkb3VibGUgYXN0ZXJpc2tzID0gKipCb2xkIFRleHQqKlxcclxyXG5cclxuXHJcblxyXG5cclxuVGhyZWUgdW5kZXJzY29yZXMgb3IgYXN0ZXJpc2tzIG9yIGRhc2hlcyA9IFxcPGhyXFw+IChob3Jpem9udGFsIGxpbmUpXFxyXHJcbipOb3RlOiB0aGUgdGhyZWUgdW5kZXJzY29yZXMgb3IgYXN0ZXJpc2tzIG9yIGRhc2hlcyBtdXN0IGJlIHRoZSBvbmx5IGNoYXJhY3RlcnMgb24gdGhlIGxpbmUgZm9yIHRoaXMgdG8gd29yaypcclxuXHJcbl9fX1xyXG4qKipcclxuLS0tXHJcblxyXG5cclxuXHJcblxyXG5XcmFwIHRleHQgaW4gYmFja3RpY2tzID0gXFxgIFRleHQgY29sb3IgYW5kIGJhY2tncm91bmQgY29sb3IgYXJlIHN3aXRjaGVkIFxcYFxcclxyXG5cclxuV3JhcCB0ZXh0IGluIHNxdWFyZSBicmFja2V0cyBmb2xsb3dlZCBieSB1cmwgd3JhcHBlZCBpbiBwYXJlbnRoZXNlcyA9IFtbbGlua10gKHVybCldKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0h5cGVybGluaylcXHJcclxuKk5vdGU6IERvbid0IHB1dCBhbnkgc3BhY2UgYmV0d2VlbiB0aGUgc3F1YXJlIGJyYWNrZXRzIGFuZCB0aGUgcGFyZW50aGVzZXMqXFxyXHJcblxyXG4+IFN0YXJ0IGxpbmUgd2l0aCBvbmUgXFw+IGNoYXJhY3RlciA9IEluZGVudGVkIGJsb2NrcXVvdGVcclxuXHJcbj4gPiBTdGFydCBsaW5lIHdpdGggdHdvIFxcPiBjaGFyYWN0ZXJzID0gRG91YmxlIGluZGVudGVkIGJsb2NrcXVvdGVcclxuXHJcblxyXG4tLS1cclxuXHJcblxyXG5cclxuMS4gU3RhcnQgZWFjaCBsaW5lIHdpdGggYSBudW1iZXIgKyBhIHBlcmlvZCArIGEgc3BhY2UgKyBZb3VyIHRleHQ9IE51bWJlcmVkIExpc3RcclxuMy4gTnVtYmVyICsgUGVyaW9kID0gJiM1MDsuIFlvdXIgdGV4dFxyXG40LiAoJiM1MjsuKSBZb3UgY2FuIHVzZSBhbnkgbnVtYmVyIHlvdSB3YW50XHJcbjQuICgmIzUyOy4pIE1hcmtkb3duIHdpbGwgc3RpbGwgc2hvdyB0aGUgbmV4dCBudW1iZXJcclxuMTAuICgmIzQ5OyYjNDg7LikgTWFya2Rvd24gd2lsbCBzdGlsbCBzaG93IHRoZSBuZXh0IHNlcXVlbnRpYWwgbnVtYmVyXHJcblxyXG4tIFN0YXJ0IGVhY2ggbGluZSB3aXRoIGEgZGFzaCBwbHVzIGEgc3BhY2UgPSBCdWxsZXRlZCBsaXN0XHJcbi0gU3RhcnQgZWFjaCBsaW5lIHdpdGggYSBkYXNoIHBsdXMgYSBzcGFjZSA9IEJ1bGxldGVkIGxpc3RcclxuLSBTdGFydCBlYWNoIGxpbmUgd2l0aCBhIGRhc2ggcGx1cyBhIHNwYWNlID0gQnVsbGV0ZWQgbGlzdFxyXG4tIFN0YXJ0IGVhY2ggbGluZSB3aXRoIGEgZGFzaCBwbHVzIGEgc3BhY2UgPSBCdWxsZXRlZCBsaXN0XHJcblxyXG5cclxuXHJcbi0tLVxyXG5cclxuXHJcblxyXG4qKklOUFVUOioqXHJcblxyXG4mIzk2OyAmIzk2OyAmIzk2OyBcclxudmFyIGNvZGUgPSBmdW5jdGlvbigpe1xyXG4+IGFsZXJ0KCBcIldyYXAgeW91IGNvZGUgaW4gYSBwYWlyIG9mIHRyaXBsZSBcXHIgYmFja3RpY2tzIHRvIGNyZWF0ZSBhIG11bHRpLWxpbmUgY29kZSBibG9ja1wiICk7IFxcclxyXG4+IC8vVG8gaW5kZW50IGxpbmVzIG9mIGNvZGUgdXNlIHRhYnNcclxuXHJcbn07XHJcblxyXG5jb2RlKCk7XHJcbiYjOTY7ICYjOTY7ICYjOTY7XHJcblxyXG4qKk9VVFBVVDoqKlxyXG5cclxuXFxgXFxgXFxgIFxyXG52YXIgY29kZSA9IGZ1bmN0aW9uKCl7XHJcbiAgICBhbGVydCggXCJXcmFwIHlvdSBjb2RlIGluIGEgcGFpciBvZiB0cmlwbGUgXHJcbiAgICBiYWNrdGlja3MgdG8gY3JlYXRlIGEgbXVsdGktbGluZSBjb2RlIGJsb2NrXCIgKTtcclxuICAgIC8vVG8gaW5kZW50IGxpbmVzIG9mIGNvZGUgdXNlIHRhYnNcclxufTtcclxuXHJcbmNvZGUoKTtcclxuXFxgXFxgXFxgXHJcblxyXG5cclxuXHJcbi0tLVxyXG5cclxuXHJcblxyXG4qKklOUFVUOioqXHJcblxyXG4mIzMzOyYjOTE7IERlc2NyaXB0aW9uIG9mIHRoZSBpbWFnZSAmIzkzOyYjNDA7IHRoZSBpbWFnZSBVUkwgJiM0MTtcclxuXHJcbioqT1VUUFVUOioqXHJcblxyXG4hW1JlYWN0IExvZ28gdy8gVGV4dF0oaHR0cHM6Ly9nb28uZ2wvVW15eXRjKVxyXG5cclxuXHJcblxyXG4tLS1cclxuXHJcblxyXG5cclxuKipJTlBVVDoqKlxyXG5cclxuJiMxMjQ7IFRvIENyZWF0ZSAmIzEyNDsgQSBUYWJsZTogJiMxMjQ7IFdyYXAgVGV4dCAmIzEyNDsgSW4gUGlwZSAob3IgdmVydGljYWwgc2xhc2gpIHN5bWJvbHMgJiMxMjQ7XHJcbiYjMTI0OyAtICYjMTI0Oy0gJiMxMjQ7IC0gJiMxMjQ7IC0gJiMxMjQ7XHJcbiYjMTI0OyBPbiB0aGUgMm5kIGxpbmUgJiMxMjQ7IFR5cGUgUGlwZSArIERhc2ggJiMxMjQ7IE9uY2UgRm9yIEV2ZXJ5ICYjMTI0OyBUYWJsZSBDZWxsIGluIHRoZSBSb3cgJiMxMjQ7XHJcbiYjMTI0OyBGb3IgRXZlcnkgJiMxMjQ7IFJvdyAmIzEyNDsgIFdyYXAgVGV4dCAmIzEyNDsgSW4gUGlwZXMgJiMxMjQ7XHJcbiYjMTI0OyBJZiBUaGVyZSBBcmUgTGVzcyBDZWxscyAmIzEyNDsgVGhlIFRhYmxlIFdpbGwgQXV0b21hdGljYWxseSAmIzEyNDsgRmlsbCBJbiBCbGFuayBDZWxscyAmIzEyNDtcclxuXHJcbioqT1VUUFVUOioqXHJcblxyXG58IFRvIENyZWF0ZSB8IEEgVGFibGU6IHwgV3JhcCBUZXh0IHwgSW4gUGlwZSAob3IgdmVydGljYWwgc2xhc2gpIHN5bWJvbHMgfFxyXG58LSB8IC0gfCAtfCAtfFxyXG58IE9uIHRoZSAybmQgbGluZSB8IFR5cGUgUGlwZSArIERhc2ggfCBPbmNlIEZvciBFdmVyeSB8IFRhYmxlIENlbGwgaW4gdGhlIFJvdyB8XHJcbnwgRm9yIEV2ZXJ5IHwgUm93IHwgIFdyYXAgVGV4dCB8IEluIFBpcGVzIHxcclxufCBJZiBUaGVyZSBBcmUgTGVzcyBDZWxscyB8IFRoZSBUYWJsZSBXaWxsIEF1dG9tYXRpY2FsbHkgfCBGaWxsIEluIEJsYW5rIENlbGxzIHxcclxuXHJcblxyXG5cclxuXHJcbmBcclxuKi8iXX0= */\n/*@ sourceURL=C:\\Users\\Gabe\\FreeCodeCamp\\FrontEndLibraries\\BuildAMarkdownPreviewer\\pages\\index.js */"));
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
//# sourceMappingURL=index.js.5835011c83490f97c637.hot-update.js.map