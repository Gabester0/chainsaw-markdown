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
      input: "# One hashtag = H1\r\n\n## Two hashtags = H2\r\n\n### Three hashtags = H3\r\n\n#### Four hashtags = H4\r\n\n##### Five hashtags = H5\r\n\n###### Six hashtags = H6\r\n\n\n\n\nWrap text in asterisks = *Italicized Text*\r\n\nWrap text in double asterisks = **Bold Text**\r\n\n\n\n\nThree underscores or asterisks or dashes = <hr> (horizontal line)\r\n*Note: the three underscores or asterisks or dashes must be the only characters on the line for this to work*\n\n___\n***\n---\n\n\n\n\nWrap text in backticks = ` Text color and background color are switched `\r\n\nWrap text in square brackets followed by url wrapped in parentheses = [[link] (url)](https://en.wikipedia.org/wiki/Hyperlink)\r\n*Note: Don't put any space between the square brackets and the parentheses*\r\n\n> Start line with one > character = Indented blockquote\n\n> > Start line with two > characters = Double indented blockquote\n\n\n\n\n1. Start each line with a number + a period + a space + Your text= Numbered List\n3. Number + Period = &#50;. Your text\n4. (&#52;.) You can use any number you want\n4. (&#52;.) Markdown will still show the next number\n10. (&#49;&#48;.) Markdown will still show the next sequential number\n\n- Start each line with a dash plus a space = Bulleted list\n- Start each line with a dash plus a space = Bulleted list\n- Start each line with a dash plus a space = Bulleted list\n- Start each line with a dash plus a space = Bulleted list\n\n\n\n\n&#96; &#96; &#96; \nvar code = function(){\n> alert( \"Wrap you code in a pair of triple \r backticks to create a multi-line code block\" ); \r\n> //To indent lines of code use tabs\n\n};\n\ncode();\n&#96; &#96; &#96;\n*Result:* \n``` \nvar code = function(){\n    alert( \"Wrap you code in a pair of triple \n    backticks to create a multi-line code block\" );\n    //To indent lines of code use tabs\n};\n\ncode();\n```\n\n\n\n\n&#33;&#91; Description of the image &#93;&#40; the image URL &#41;\n![React Logo w/ Text](https://goo.gl/Umyytc)\n\n\n\n\n|   ha      |   hb      |  hc       |   hd      |\n|---------- | --------- | --------- | ----------|\n| tictictic | tactactac | tictictic | tactactac |\n| toetoetoe | tictictic | toetoetoe | tactactac |\n\n\n&#124;\n"
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

      var link = document.querySelector("a").textContent;
      var editedLink = link.split("").filter(function (e) {
        return e != " ";
      }).join("");
      document.querySelector("a").textContent = editedLink;
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
        className: "jsx-10357601",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", {
        className: "jsx-10357601",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }, "Markdown Previewer"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h3", {
        className: "jsx-10357601",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, "Built with Next.js and Marked.js"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_input__WEBPACK_IMPORTED_MODULE_10__["default"], {
        change: function change(event) {
          return _this2.changeListener(event);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_output__WEBPACK_IMPORTED_MODULE_11__["default"], {
        setMarkdown: this.getMarkdown(),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "10357601",
        __self: this
      }, "div{width:800px;margin:75px auto;border;2px solid #343434;text-align:center;font-size:16px;font-family:'Lato';}h1{font-size:5em;font-weight:100;}h2{font-size:4em;font-weight:200;}h3{font-size:3em;font-weight:300;}table{border-collapse:collapse;margin:auto;}td,th{border:4px solid #343434;padding:5px;}code{width:95%;display:inline-block;background:#343434;color:white;line-height:150%;padding:10px;}hr{width:100%;padding-right:100%;padding-left:100%;}ul,ol{width:95%;margin:25px 0;}p>img{width:200px;height:auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcR2FiZVxcRnJlZUNvZGVDYW1wXFxGcm9udEVuZExpYnJhcmllc1xcQnVpbGRBTWFya2Rvd25QcmV2aWV3ZXJcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzSXVDLEFBR3lDLEFBUUUsQUFJQSxBQUlBLEFBSVcsQUFLQSxBQUlmLEFBUUMsQUFNRCxBQUlFLFVBakJTLEFBY1AsQ0FOSyxDQXJDRixBQStDTCxFQXZDSSxBQUlBLEFBSUEsVUE0QnBCLEFBSUEsQ0E1QmdCLEFBS0EsSUF4Qk4sQ0FRVixBQUlBLEFBSUEsQUFxQnNCLENBUkMsS0E3QkssQ0FvQjVCLEFBS0EsV0FhQSxFQVJnQixJQTdCTSxRQThCRixVQTdCRCxPQThCRixRQTdCTSxLQThCdkIsY0E3QkEiLCJmaWxlIjoiQzpcXFVzZXJzXFxHYWJlXFxGcmVlQ29kZUNhbXBcXEZyb250RW5kTGlicmFyaWVzXFxCdWlsZEFNYXJrZG93blByZXZpZXdlclxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IG1hcmtlZCBmcm9tICdtYXJrZWQnO1xyXG5cclxuaW1wb3J0IElucHV0IGZyb20gJy4uL2NvbXBvbmVudHMvaW5wdXQnO1xyXG5pbXBvcnQgT3V0cHV0IGZyb20gJy4uL2NvbXBvbmVudHMvb3V0cHV0JztcclxuXHJcbmNsYXNzIEhvbWUgZXh0ZW5kcyBDb21wb25lbnR7XHJcbiAgICBzdGF0ZSA9IHtcclxuICAgICAgICBpbnB1dDogYCMgT25lIGhhc2h0YWcgPSBIMVxcclxyXG5cclxuIyMgVHdvIGhhc2h0YWdzID0gSDJcXHJcclxuXHJcbiMjIyBUaHJlZSBoYXNodGFncyA9IEgzXFxyXHJcblxyXG4jIyMjIEZvdXIgaGFzaHRhZ3MgPSBINFxcclxyXG5cclxuIyMjIyMgRml2ZSBoYXNodGFncyA9IEg1XFxyXHJcblxyXG4jIyMjIyMgU2l4IGhhc2h0YWdzID0gSDZcXHJcclxuXHJcblxyXG5cclxuXHJcbldyYXAgdGV4dCBpbiBhc3Rlcmlza3MgPSAqSXRhbGljaXplZCBUZXh0KlxcclxyXG5cclxuV3JhcCB0ZXh0IGluIGRvdWJsZSBhc3Rlcmlza3MgPSAqKkJvbGQgVGV4dCoqXFxyXHJcblxyXG5cclxuXHJcblxyXG5UaHJlZSB1bmRlcnNjb3JlcyBvciBhc3Rlcmlza3Mgb3IgZGFzaGVzID0gXFw8aHJcXD4gKGhvcml6b250YWwgbGluZSlcXHJcclxuKk5vdGU6IHRoZSB0aHJlZSB1bmRlcnNjb3JlcyBvciBhc3Rlcmlza3Mgb3IgZGFzaGVzIG11c3QgYmUgdGhlIG9ubHkgY2hhcmFjdGVycyBvbiB0aGUgbGluZSBmb3IgdGhpcyB0byB3b3JrKlxyXG5cclxuX19fXHJcbioqKlxyXG4tLS1cclxuXHJcblxyXG5cclxuXHJcbldyYXAgdGV4dCBpbiBiYWNrdGlja3MgPSBcXGAgVGV4dCBjb2xvciBhbmQgYmFja2dyb3VuZCBjb2xvciBhcmUgc3dpdGNoZWQgXFxgXFxyXHJcblxyXG5XcmFwIHRleHQgaW4gc3F1YXJlIGJyYWNrZXRzIGZvbGxvd2VkIGJ5IHVybCB3cmFwcGVkIGluIHBhcmVudGhlc2VzID0gW1tsaW5rXSAodXJsKV0oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSHlwZXJsaW5rKVxcclxyXG4qTm90ZTogRG9uJ3QgcHV0IGFueSBzcGFjZSBiZXR3ZWVuIHRoZSBzcXVhcmUgYnJhY2tldHMgYW5kIHRoZSBwYXJlbnRoZXNlcypcXHJcclxuXHJcbj4gU3RhcnQgbGluZSB3aXRoIG9uZSBcXD4gY2hhcmFjdGVyID0gSW5kZW50ZWQgYmxvY2txdW90ZVxyXG5cclxuPiA+IFN0YXJ0IGxpbmUgd2l0aCB0d28gXFw+IGNoYXJhY3RlcnMgPSBEb3VibGUgaW5kZW50ZWQgYmxvY2txdW90ZVxyXG5cclxuXHJcblxyXG5cclxuMS4gU3RhcnQgZWFjaCBsaW5lIHdpdGggYSBudW1iZXIgKyBhIHBlcmlvZCArIGEgc3BhY2UgKyBZb3VyIHRleHQ9IE51bWJlcmVkIExpc3RcclxuMy4gTnVtYmVyICsgUGVyaW9kID0gJiM1MDsuIFlvdXIgdGV4dFxyXG40LiAoJiM1MjsuKSBZb3UgY2FuIHVzZSBhbnkgbnVtYmVyIHlvdSB3YW50XHJcbjQuICgmIzUyOy4pIE1hcmtkb3duIHdpbGwgc3RpbGwgc2hvdyB0aGUgbmV4dCBudW1iZXJcclxuMTAuICgmIzQ5OyYjNDg7LikgTWFya2Rvd24gd2lsbCBzdGlsbCBzaG93IHRoZSBuZXh0IHNlcXVlbnRpYWwgbnVtYmVyXHJcblxyXG4tIFN0YXJ0IGVhY2ggbGluZSB3aXRoIGEgZGFzaCBwbHVzIGEgc3BhY2UgPSBCdWxsZXRlZCBsaXN0XHJcbi0gU3RhcnQgZWFjaCBsaW5lIHdpdGggYSBkYXNoIHBsdXMgYSBzcGFjZSA9IEJ1bGxldGVkIGxpc3RcclxuLSBTdGFydCBlYWNoIGxpbmUgd2l0aCBhIGRhc2ggcGx1cyBhIHNwYWNlID0gQnVsbGV0ZWQgbGlzdFxyXG4tIFN0YXJ0IGVhY2ggbGluZSB3aXRoIGEgZGFzaCBwbHVzIGEgc3BhY2UgPSBCdWxsZXRlZCBsaXN0XHJcblxyXG5cclxuXHJcblxyXG4mIzk2OyAmIzk2OyAmIzk2OyBcclxudmFyIGNvZGUgPSBmdW5jdGlvbigpe1xyXG4+IGFsZXJ0KCBcIldyYXAgeW91IGNvZGUgaW4gYSBwYWlyIG9mIHRyaXBsZSBcXHIgYmFja3RpY2tzIHRvIGNyZWF0ZSBhIG11bHRpLWxpbmUgY29kZSBibG9ja1wiICk7IFxcclxyXG4+IC8vVG8gaW5kZW50IGxpbmVzIG9mIGNvZGUgdXNlIHRhYnNcclxuXHJcbn07XHJcblxyXG5jb2RlKCk7XHJcbiYjOTY7ICYjOTY7ICYjOTY7XHJcbipSZXN1bHQ6KiBcclxuXFxgXFxgXFxgIFxyXG52YXIgY29kZSA9IGZ1bmN0aW9uKCl7XHJcbiAgICBhbGVydCggXCJXcmFwIHlvdSBjb2RlIGluIGEgcGFpciBvZiB0cmlwbGUgXHJcbiAgICBiYWNrdGlja3MgdG8gY3JlYXRlIGEgbXVsdGktbGluZSBjb2RlIGJsb2NrXCIgKTtcclxuICAgIC8vVG8gaW5kZW50IGxpbmVzIG9mIGNvZGUgdXNlIHRhYnNcclxufTtcclxuXHJcbmNvZGUoKTtcclxuXFxgXFxgXFxgXHJcblxyXG5cclxuXHJcblxyXG4mIzMzOyYjOTE7IERlc2NyaXB0aW9uIG9mIHRoZSBpbWFnZSAmIzkzOyYjNDA7IHRoZSBpbWFnZSBVUkwgJiM0MTtcclxuIVtSZWFjdCBMb2dvIHcvIFRleHRdKGh0dHBzOi8vZ29vLmdsL1VteXl0YylcclxuXHJcblxyXG5cclxuXHJcbnwgICBoYSAgICAgIHwgICBoYiAgICAgIHwgIGhjICAgICAgIHwgICBoZCAgICAgIHxcclxufC0tLS0tLS0tLS0gfCAtLS0tLS0tLS0gfCAtLS0tLS0tLS0gfCAtLS0tLS0tLS0tfFxyXG58IHRpY3RpY3RpYyB8IHRhY3RhY3RhYyB8IHRpY3RpY3RpYyB8IHRhY3RhY3RhYyB8XHJcbnwgdG9ldG9ldG9lIHwgdGljdGljdGljIHwgdG9ldG9ldG9lIHwgdGFjdGFjdGFjIHxcclxuXHJcblxyXG4mIzEyNDtcclxuYH07XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcclxuICAgICAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xyXG4gICAgICAgIHNjcmlwdC5zcmMgPSAnaHR0cHM6Ly9jZG4uZnJlZWNvZGVjYW1wLm9yZy90ZXN0YWJsZS1wcm9qZWN0cy1mY2MvdjEvYnVuZGxlLmpzJztcclxuICAgICAgICBzY3JpcHQuYXN5bmMgPSB0cnVlO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcclxuICAgICAgICAvL1JlbW92ZSBzcGFjZSBmcm9tIHVybCBkZW1vbnN0cmF0aW9uXHJcbiAgICAgICAgY29uc3QgbGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJhXCIpLnRleHRDb250ZW50O1xyXG4gICAgICAgIGNvbnN0IGVkaXRlZExpbmsgPSBsaW5rLnNwbGl0KFwiXCIpLmZpbHRlcihlPT4gZSE9IFwiIFwiKS5qb2luKFwiXCIpO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJhXCIpLnRleHRDb250ZW50ID0gZWRpdGVkTGluaztcclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VMaXN0ZW5lcihldmVudCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBpbnB1dDogZXZlbnQudGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBnZXRNYXJrZG93biA9ICgpID0+e1xyXG4gICAgICAgIGNvbnN0IG1hcmtkb3duID0gbWFya2VkKHRoaXMuc3RhdGUuaW5wdXQsIHtzYW5pdGl6ZTogdHJ1ZSwgdGFibGVzOiB0cnVlLCBicmVha3M6IHRydWV9LCApO1xyXG4gICAgICAgIHJldHVybiB7X19odG1sOiBtYXJrZG93bn07XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2ID5cclxuICAgICAgICAgICAgICAgIDxoMT5NYXJrZG93biBQcmV2aWV3ZXI8L2gxPlxyXG4gICAgICAgICAgICAgICAgPGgzPkJ1aWx0IHdpdGggTmV4dC5qcyBhbmQgTWFya2VkLmpzPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXQgY2hhbmdlPXsoZXZlbnQpID0+IHRoaXMuY2hhbmdlTGlzdGVuZXIoZXZlbnQpIH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8T3V0cHV0IHNldE1hcmtkb3duPXt0aGlzLmdldE1hcmtkb3duKCl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGl2IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogNzVweCBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOyAycHggc29saWQgIzM0MzQzNDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTGF0byc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaDEge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA1ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGgyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNGVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDNlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFibGUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGgge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiA0cHggc29saWQgIzM0MzQzNDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5NSU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMzQzNDM0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6MTUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaHIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogOTUlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAyNXB4IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcCA+IGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7Il19 */\n/*@ sourceURL=C:\\Users\\Gabe\\FreeCodeCamp\\FrontEndLibraries\\BuildAMarkdownPreviewer\\pages\\index.js */"));
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.a974f839c51e31744d71.hot-update.js.map