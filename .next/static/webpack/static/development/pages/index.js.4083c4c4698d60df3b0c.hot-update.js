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
      input: "# One hashtag = H1\r\n\n## Two hashtags = H2\r\n\n### Three hashtags = H3\r\n\n#### Four hashtags = H4\r\n\n##### Five hashtags = H5\r\n\n###### Six hashtags = H6\r\n\n\n\n\nWrap text in asterisks = *Italicized Text*\r\n\nWrap text in double asterisks = **Bold Text**\r\n\n\n\n\nThree underscores or asterisks or dashes = <hr> (horizontal line)\r\n*Note: the three underscores or asterisks or dashes must be the only characters on the line for this to work*\n\n___\n***\n---\n\n\n\n\nWrap text in backticks = ` Text color and background color are switched `\r\n\nWrap text in square brackets followed by url wrapped in parentheses = [[link] (url)](https://en.wikipedia.org/wiki/Hyperlink)\r\n*Note: Don't put any space between the square brackets and the parentheses*\r\n\n> Start line with one > character = Indented blockquote\n\n> > Start line with two > characters = Double indented blockquote\n\n\n\n\n1. Start each line with a number + a period + a space + Your text= Numbered List\n3. Number + Period = &#50;. Your text\n4. (&#52;.) You can use any number you want\n4. (&#52;.) Markdown will still show the next number\n10. (&#49;&#48;.) Markdown will still show the next sequential number\n\n- Start each line with a dash plus a space = Bulleted list\n- Start each line with a dash plus a space = Bulleted list\n- Start each line with a dash plus a space = Bulleted list\n- Start each line with a dash plus a space = Bulleted list\n\n\n\n\n&#96; &#96; &#96; \nvar code = function(){\n> alert( \"Wrap you code in a pair of triple \r backticks to create a multi-line code block\" ); \r\n> //To indent lines of code use tabs\n\n};\n\ncode();\n&#96; &#96; &#96;\n**Result:**\n``` \nvar code = function(){\n    alert( \"Wrap you code in a pair of triple \n    backticks to create a multi-line code block\" );\n    //To indent lines of code use tabs\n};\n\ncode();\n```\n\n\n\n\n&#33;&#91; Description of the image &#93;&#40; the image URL &#41;\n**Result:** \n![React Logo w/ Text](https://goo.gl/Umyytc)\n\n\n\n\n**WRITTEN:**\n&#124; To Create &#124; A Table: &#124; Wrap Text &#124; In Pipe (or vertical slash) symbols &#124;\n&#124; - &#124;- &#124; - &#124; - &#124;\n&#124; On the 2nd line &#124; Type Pipe + Dash &#124; Once For Every &#124; Table Cell in the Row &#124;\n&#124; Creating &#124; A Table &#124; junk  &#124;  junk  &#124;\n\n**RESULT:**\n\n| To Create | A Table: | Wrap Text | In Pipe (or vertical slash) symbols |\n|- | - | -| -|\n| On the 2nd line | Type Pipe + Dash | Once For Every | Table Cell in the Row |\n| toetoetoe | tictictic | toetoetoe | tactactac |\n\n\n\n"
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
        className: "jsx-1478644618",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", {
        className: "jsx-1478644618",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }, "Markdown Previewer"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_input__WEBPACK_IMPORTED_MODULE_10__["default"], {
        change: function change(event) {
          return _this2.changeListener(event);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_output__WEBPACK_IMPORTED_MODULE_11__["default"], {
        setMarkdown: this.getMarkdown(),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "1478644618",
        __self: this
      }, "div{width:800px;margin:75px auto;border;2px solid #343434;text-align:center;font-size:16px;font-family:'Lato';}h1{font-size:5em;font-weight:100;}h2{font-size:4em;font-weight:200;}h3{font-size:3em;font-weight:300;}table{border-collapse:collapse;}td,th{border:4px solid #343434;padding:5px;}code{width:95%;display:inline-block;background:#343434;color:white;line-height:150%;padding:10px;}hr{width:97%;margin-left:0!important;}ul,ol{width:95%;margin:25px 0;}p>img{width:200px;height:auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcR2FiZVxcRnJlZUNvZGVDYW1wXFxGcm9udEVuZExpYnJhcmllc1xcQnVpbGRBTWFya2Rvd25QcmV2aWV3ZXJcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4SXVDLEFBR3lDLEFBUUUsQUFJQSxBQUlBLEFBSVcsQUFJQSxBQUlmLEFBUUEsQUFLQSxBQUlFLFVBaEJTLEFBUUcsQUFLVixFQXpDRyxBQTZDTCxFQXJDSSxBQUlBLEFBSUEsVUEwQnBCLEFBSUEsQ0ExQkEsQUFJZ0IsSUF2Qk4sQ0FRVixBQUlBLEFBSUEsQ0FZdUIsR0FRdkIsRUFwQzRCLENBd0I1QixhQUtnQixJQTVCTSxRQTZCRixVQTVCRCxPQTZCRixRQTVCTSxLQTZCdkIsY0E1QkEiLCJmaWxlIjoiQzpcXFVzZXJzXFxHYWJlXFxGcmVlQ29kZUNhbXBcXEZyb250RW5kTGlicmFyaWVzXFxCdWlsZEFNYXJrZG93blByZXZpZXdlclxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IG1hcmtlZCBmcm9tICdtYXJrZWQnO1xyXG5cclxuaW1wb3J0IElucHV0IGZyb20gJy4uL2NvbXBvbmVudHMvaW5wdXQnO1xyXG5pbXBvcnQgT3V0cHV0IGZyb20gJy4uL2NvbXBvbmVudHMvb3V0cHV0JztcclxuXHJcbmNsYXNzIEhvbWUgZXh0ZW5kcyBDb21wb25lbnR7XHJcbiAgICBzdGF0ZSA9IHtcclxuICAgICAgICBpbnB1dDogYCMgT25lIGhhc2h0YWcgPSBIMVxcclxyXG5cclxuIyMgVHdvIGhhc2h0YWdzID0gSDJcXHJcclxuXHJcbiMjIyBUaHJlZSBoYXNodGFncyA9IEgzXFxyXHJcblxyXG4jIyMjIEZvdXIgaGFzaHRhZ3MgPSBINFxcclxyXG5cclxuIyMjIyMgRml2ZSBoYXNodGFncyA9IEg1XFxyXHJcblxyXG4jIyMjIyMgU2l4IGhhc2h0YWdzID0gSDZcXHJcclxuXHJcblxyXG5cclxuXHJcbldyYXAgdGV4dCBpbiBhc3Rlcmlza3MgPSAqSXRhbGljaXplZCBUZXh0KlxcclxyXG5cclxuV3JhcCB0ZXh0IGluIGRvdWJsZSBhc3Rlcmlza3MgPSAqKkJvbGQgVGV4dCoqXFxyXHJcblxyXG5cclxuXHJcblxyXG5UaHJlZSB1bmRlcnNjb3JlcyBvciBhc3Rlcmlza3Mgb3IgZGFzaGVzID0gXFw8aHJcXD4gKGhvcml6b250YWwgbGluZSlcXHJcclxuKk5vdGU6IHRoZSB0aHJlZSB1bmRlcnNjb3JlcyBvciBhc3Rlcmlza3Mgb3IgZGFzaGVzIG11c3QgYmUgdGhlIG9ubHkgY2hhcmFjdGVycyBvbiB0aGUgbGluZSBmb3IgdGhpcyB0byB3b3JrKlxyXG5cclxuX19fXHJcbioqKlxyXG4tLS1cclxuXHJcblxyXG5cclxuXHJcbldyYXAgdGV4dCBpbiBiYWNrdGlja3MgPSBcXGAgVGV4dCBjb2xvciBhbmQgYmFja2dyb3VuZCBjb2xvciBhcmUgc3dpdGNoZWQgXFxgXFxyXHJcblxyXG5XcmFwIHRleHQgaW4gc3F1YXJlIGJyYWNrZXRzIGZvbGxvd2VkIGJ5IHVybCB3cmFwcGVkIGluIHBhcmVudGhlc2VzID0gW1tsaW5rXSAodXJsKV0oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSHlwZXJsaW5rKVxcclxyXG4qTm90ZTogRG9uJ3QgcHV0IGFueSBzcGFjZSBiZXR3ZWVuIHRoZSBzcXVhcmUgYnJhY2tldHMgYW5kIHRoZSBwYXJlbnRoZXNlcypcXHJcclxuXHJcbj4gU3RhcnQgbGluZSB3aXRoIG9uZSBcXD4gY2hhcmFjdGVyID0gSW5kZW50ZWQgYmxvY2txdW90ZVxyXG5cclxuPiA+IFN0YXJ0IGxpbmUgd2l0aCB0d28gXFw+IGNoYXJhY3RlcnMgPSBEb3VibGUgaW5kZW50ZWQgYmxvY2txdW90ZVxyXG5cclxuXHJcblxyXG5cclxuMS4gU3RhcnQgZWFjaCBsaW5lIHdpdGggYSBudW1iZXIgKyBhIHBlcmlvZCArIGEgc3BhY2UgKyBZb3VyIHRleHQ9IE51bWJlcmVkIExpc3RcclxuMy4gTnVtYmVyICsgUGVyaW9kID0gJiM1MDsuIFlvdXIgdGV4dFxyXG40LiAoJiM1MjsuKSBZb3UgY2FuIHVzZSBhbnkgbnVtYmVyIHlvdSB3YW50XHJcbjQuICgmIzUyOy4pIE1hcmtkb3duIHdpbGwgc3RpbGwgc2hvdyB0aGUgbmV4dCBudW1iZXJcclxuMTAuICgmIzQ5OyYjNDg7LikgTWFya2Rvd24gd2lsbCBzdGlsbCBzaG93IHRoZSBuZXh0IHNlcXVlbnRpYWwgbnVtYmVyXHJcblxyXG4tIFN0YXJ0IGVhY2ggbGluZSB3aXRoIGEgZGFzaCBwbHVzIGEgc3BhY2UgPSBCdWxsZXRlZCBsaXN0XHJcbi0gU3RhcnQgZWFjaCBsaW5lIHdpdGggYSBkYXNoIHBsdXMgYSBzcGFjZSA9IEJ1bGxldGVkIGxpc3RcclxuLSBTdGFydCBlYWNoIGxpbmUgd2l0aCBhIGRhc2ggcGx1cyBhIHNwYWNlID0gQnVsbGV0ZWQgbGlzdFxyXG4tIFN0YXJ0IGVhY2ggbGluZSB3aXRoIGEgZGFzaCBwbHVzIGEgc3BhY2UgPSBCdWxsZXRlZCBsaXN0XHJcblxyXG5cclxuXHJcblxyXG4mIzk2OyAmIzk2OyAmIzk2OyBcclxudmFyIGNvZGUgPSBmdW5jdGlvbigpe1xyXG4+IGFsZXJ0KCBcIldyYXAgeW91IGNvZGUgaW4gYSBwYWlyIG9mIHRyaXBsZSBcXHIgYmFja3RpY2tzIHRvIGNyZWF0ZSBhIG11bHRpLWxpbmUgY29kZSBibG9ja1wiICk7IFxcclxyXG4+IC8vVG8gaW5kZW50IGxpbmVzIG9mIGNvZGUgdXNlIHRhYnNcclxuXHJcbn07XHJcblxyXG5jb2RlKCk7XHJcbiYjOTY7ICYjOTY7ICYjOTY7XHJcbioqUmVzdWx0OioqXHJcblxcYFxcYFxcYCBcclxudmFyIGNvZGUgPSBmdW5jdGlvbigpe1xyXG4gICAgYWxlcnQoIFwiV3JhcCB5b3UgY29kZSBpbiBhIHBhaXIgb2YgdHJpcGxlIFxyXG4gICAgYmFja3RpY2tzIHRvIGNyZWF0ZSBhIG11bHRpLWxpbmUgY29kZSBibG9ja1wiICk7XHJcbiAgICAvL1RvIGluZGVudCBsaW5lcyBvZiBjb2RlIHVzZSB0YWJzXHJcbn07XHJcblxyXG5jb2RlKCk7XHJcblxcYFxcYFxcYFxyXG5cclxuXHJcblxyXG5cclxuJiMzMzsmIzkxOyBEZXNjcmlwdGlvbiBvZiB0aGUgaW1hZ2UgJiM5MzsmIzQwOyB0aGUgaW1hZ2UgVVJMICYjNDE7XHJcbioqUmVzdWx0OioqIFxyXG4hW1JlYWN0IExvZ28gdy8gVGV4dF0oaHR0cHM6Ly9nb28uZ2wvVW15eXRjKVxyXG5cclxuXHJcblxyXG5cclxuKipXUklUVEVOOioqXHJcbiYjMTI0OyBUbyBDcmVhdGUgJiMxMjQ7IEEgVGFibGU6ICYjMTI0OyBXcmFwIFRleHQgJiMxMjQ7IEluIFBpcGUgKG9yIHZlcnRpY2FsIHNsYXNoKSBzeW1ib2xzICYjMTI0O1xyXG4mIzEyNDsgLSAmIzEyNDstICYjMTI0OyAtICYjMTI0OyAtICYjMTI0O1xyXG4mIzEyNDsgT24gdGhlIDJuZCBsaW5lICYjMTI0OyBUeXBlIFBpcGUgKyBEYXNoICYjMTI0OyBPbmNlIEZvciBFdmVyeSAmIzEyNDsgVGFibGUgQ2VsbCBpbiB0aGUgUm93ICYjMTI0O1xyXG4mIzEyNDsgQ3JlYXRpbmcgJiMxMjQ7IEEgVGFibGUgJiMxMjQ7IGp1bmsgICYjMTI0OyAganVuayAgJiMxMjQ7XHJcblxyXG4qKlJFU1VMVDoqKlxyXG5cclxufCBUbyBDcmVhdGUgfCBBIFRhYmxlOiB8IFdyYXAgVGV4dCB8IEluIFBpcGUgKG9yIHZlcnRpY2FsIHNsYXNoKSBzeW1ib2xzIHxcclxufC0gfCAtIHwgLXwgLXxcclxufCBPbiB0aGUgMm5kIGxpbmUgfCBUeXBlIFBpcGUgKyBEYXNoIHwgT25jZSBGb3IgRXZlcnkgfCBUYWJsZSBDZWxsIGluIHRoZSBSb3cgfFxyXG58IHRvZXRvZXRvZSB8IHRpY3RpY3RpYyB8IHRvZXRvZXRvZSB8IHRhY3RhY3RhYyB8XHJcblxyXG5cclxuXHJcbmB9O1xyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XHJcbiAgICAgICAgY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcclxuICAgICAgICBzY3JpcHQuc3JjID0gJ2h0dHBzOi8vY2RuLmZyZWVjb2RlY2FtcC5vcmcvdGVzdGFibGUtcHJvamVjdHMtZmNjL3YxL2J1bmRsZS5qcyc7XHJcbiAgICAgICAgc2NyaXB0LmFzeW5jID0gdHJ1ZTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdCk7XHJcbiAgICAgICAgLy9SZW1vdmUgc3BhY2UgZnJvbSB1cmwgZGVtb25zdHJhdGlvblxyXG4gICAgICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYVwiKS50ZXh0Q29udGVudDtcclxuICAgICAgICBjb25zdCBlZGl0ZWRMaW5rID0gbGluay5zcGxpdChcIlwiKS5maWx0ZXIoZT0+IGUhPSBcIiBcIikuam9pbihcIlwiKTtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYVwiKS50ZXh0Q29udGVudCA9IGVkaXRlZExpbms7XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlTGlzdGVuZXIoZXZlbnQpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgaW5wdXQ6IGV2ZW50LnRhcmdldC52YWx1ZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TWFya2Rvd24gPSAoKSA9PntcclxuICAgICAgICBjb25zdCBtYXJrZG93biA9IG1hcmtlZCh0aGlzLnN0YXRlLmlucHV0LCB7c2FuaXRpemU6IHRydWUsIHRhYmxlczogdHJ1ZSwgYnJlYWtzOiB0cnVlfSwgKTtcclxuICAgICAgICByZXR1cm4ge19faHRtbDogbWFya2Rvd259O1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiA+XHJcbiAgICAgICAgICAgICAgICA8aDE+TWFya2Rvd24gUHJldmlld2VyPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXQgY2hhbmdlPXsoZXZlbnQpID0+IHRoaXMuY2hhbmdlTGlzdGVuZXIoZXZlbnQpIH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8T3V0cHV0IHNldE1hcmtkb3duPXt0aGlzLmdldE1hcmtkb3duKCl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGl2IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogNzVweCBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOyAycHggc29saWQgIzM0MzQzNDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTGF0byc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaDEge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA1ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGgyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNGVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDNlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFibGUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGgge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiA0cHggc29saWQgIzM0MzQzNDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5NSU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMzQzNDM0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6MTUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaHIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDk3JTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1bCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2wge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDk1JTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMjVweCAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHAgPiBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lOyJdfQ== */\n/*@ sourceURL=C:\\Users\\Gabe\\FreeCodeCamp\\FrontEndLibraries\\BuildAMarkdownPreviewer\\pages\\index.js */"));
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.4083c4c4698d60df3b0c.hot-update.js.map