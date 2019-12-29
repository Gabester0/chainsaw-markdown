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
      input: "\n**INPUT:**\n&#x23; Single Hash at start of line creates H1\n**OUTPUT:**\n# Single Hash at start of line creates H1\n        # One hashtag = H1\r\n\n## Two hashtags = H2\r\n\n### Three hashtags = H3\r\n\n#### Four hashtags = H4\r\n\n##### Five hashtags = H5\r\n\n###### Six hashtags = H6\r\n\n\n\n\nWrap text in asterisks = *Italicized Text*\r\n\nWrap text in double asterisks = **Bold Text**\r\n\n\n\n\nThree underscores or asterisks or dashes = <hr> (horizontal line)\r\n*Note: the three underscores or asterisks or dashes must be the only characters on the line for this to work*\n\n___\n***\n---\n\n\n\n\nWrap text in backticks = ` Text color and background color are switched `\r\n\nWrap text in square brackets followed by url wrapped in parentheses = [[link] (url)](https://en.wikipedia.org/wiki/Hyperlink)\r\n*Note: Don't put any space between the square brackets and the parentheses*\r\n\n> Start line with one > character = Indented blockquote\n\n> > Start line with two > characters = Double indented blockquote\n\n\n---\n\n\n\n1. Start each line with a number + a period + a space + Your text= Numbered List\n3. Number + Period = &#50;. Your text\n4. (&#52;.) You can use any number you want\n4. (&#52;.) Markdown will still show the next number\n10. (&#49;&#48;.) Markdown will still show the next sequential number\n\n- Start each line with a dash plus a space = Bulleted list\n- Start each line with a dash plus a space = Bulleted list\n- Start each line with a dash plus a space = Bulleted list\n- Start each line with a dash plus a space = Bulleted list\n\n\n\n---\n\n\n\n**INPUT:**\n\n&#96; &#96; &#96; \nvar code = function(){\n> alert( \"Wrap you code in a pair of triple \r backticks to create a multi-line code block\" ); \r\n> //To indent lines of code use tabs\n\n};\n\ncode();\n&#96; &#96; &#96;\n\n**OUTPUT:**\n\n``` \nvar code = function(){\n    alert( \"Wrap you code in a pair of triple \n    backticks to create a multi-line code block\" );\n    //To indent lines of code use tabs\n};\n\ncode();\n```\n\n\n\n---\n\n\n\n**INPUT:**\n\n&#33;&#91; Description of the image &#93;&#40; the image URL &#41;\n\n**OUTPUT:**\n\n![React Logo w/ Text](https://goo.gl/Umyytc)\n\n\n\n---\n\n\n\n**INPUT:**\n\n&#124; To Create &#124; A Table: &#124; Wrap Text &#124; In Pipe (or vertical slash) symbols &#124;\n&#124; - &#124;- &#124; - &#124; - &#124;\n&#124; On the 2nd line &#124; Type Pipe + Dash &#124; Once For Every &#124; Table Cell in the Row &#124;\n&#124; For Every &#124; Row &#124;  Wrap Text &#124; In Pipes &#124;\n&#124; If There Are Less Cells &#124; The Table Will Automatically &#124; Fill In Blank Cells &#124;\n\n**OUTPUT:**\n\n| To Create | A Table: | Wrap Text | In Pipe (or vertical slash) symbols |\n|- | - | -| -|\n| On the 2nd line | Type Pipe + Dash | Once For Every | Table Cell in the Row |\n| For Every | Row |  Wrap Text | In Pipes |\n| If There Are Less Cells | The Table Will Automatically | Fill In Blank Cells |\n\n\n\n\n"
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
          lineNumber: 172
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", {
        className: "jsx-1478644618",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        },
        __self: this
      }, "Markdown Previewer"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_input__WEBPACK_IMPORTED_MODULE_10__["default"], {
        change: function change(event) {
          return _this2.changeListener(event);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_output__WEBPACK_IMPORTED_MODULE_11__["default"], {
        setMarkdown: this.getMarkdown(),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "1478644618",
        __self: this
      }, "div{width:800px;margin:75px auto;border;2px solid #343434;text-align:center;font-size:16px;font-family:'Lato';}h1{font-size:5em;font-weight:100;}h2{font-size:4em;font-weight:200;}h3{font-size:3em;font-weight:300;}table{border-collapse:collapse;}td,th{border:4px solid #343434;padding:5px;}code{width:95%;display:inline-block;background:#343434;color:white;line-height:150%;padding:10px;}hr{width:97%;margin-left:0!important;}ul,ol{width:95%;margin:25px 0;}p>img{width:200px;height:auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcR2FiZVxcRnJlZUNvZGVDYW1wXFxGcm9udEVuZExpYnJhcmllc1xcQnVpbGRBTWFya2Rvd25QcmV2aWV3ZXJcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErS3VDLEFBR3lDLEFBUUUsQUFJQSxBQUlBLEFBSVcsQUFJQSxBQUlmLEFBUUEsQUFLQSxBQUlFLFVBaEJTLEFBUUcsQUFLVixFQXpDRyxBQTZDTCxFQXJDSSxBQUlBLEFBSUEsVUEwQnBCLEFBSUEsQ0ExQkEsQUFJZ0IsSUF2Qk4sQ0FRVixBQUlBLEFBSUEsQ0FZdUIsR0FRdkIsRUFwQzRCLENBd0I1QixhQUtnQixJQTVCTSxRQTZCRixVQTVCRCxPQTZCRixRQTVCTSxLQTZCdkIsY0E1QkEiLCJmaWxlIjoiQzpcXFVzZXJzXFxHYWJlXFxGcmVlQ29kZUNhbXBcXEZyb250RW5kTGlicmFyaWVzXFxCdWlsZEFNYXJrZG93blByZXZpZXdlclxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IG1hcmtlZCBmcm9tICdtYXJrZWQnO1xyXG5cclxuaW1wb3J0IElucHV0IGZyb20gJy4uL2NvbXBvbmVudHMvaW5wdXQnO1xyXG5pbXBvcnQgT3V0cHV0IGZyb20gJy4uL2NvbXBvbmVudHMvb3V0cHV0JztcclxuLypcclxuQ2hhbmdlIHRoaXMgdG8gaGF2ZSBhIHNlbGVjdCBzdGF0ZW1lbnQgdG8gY2hvb3NlIHdoaWNoIEVsZW1lbnQgeW91IHdhbnQgYSBkZW1vIG9mXHJcbldoZW4gSSBzZWxlY3Qgb25lIHRoaXMgcmVzZXRzIHRoZSBpbnB1dCBhbmQgdGhlIG91dHB1dFxyXG5cclxuaW4gaW5wdXQuanMgbmVlZCB0byBhc3NpZ24gdmFsdWUgd2l0aCBwcm9wcy4gIFRoZW4gY2FuIGRlZmluZSB2YWx1ZSBpbiBpbmRleC5qc1xyXG4qL1xyXG5jbGFzcyBIb21lIGV4dGVuZHMgQ29tcG9uZW50e1xyXG4gICAgc3RhdGUgPSB7XHJcbiAgICAgICAgaW5wdXQ6IGBcclxuKipJTlBVVDoqKlxyXG4mI3gyMzsgU2luZ2xlIEhhc2ggYXQgc3RhcnQgb2YgbGluZSBjcmVhdGVzIEgxXHJcbioqT1VUUFVUOioqXHJcbiMgU2luZ2xlIEhhc2ggYXQgc3RhcnQgb2YgbGluZSBjcmVhdGVzIEgxXHJcbiAgICAgICAgIyBPbmUgaGFzaHRhZyA9IEgxXFxyXHJcblxyXG4jIyBUd28gaGFzaHRhZ3MgPSBIMlxcclxyXG5cclxuIyMjIFRocmVlIGhhc2h0YWdzID0gSDNcXHJcclxuXHJcbiMjIyMgRm91ciBoYXNodGFncyA9IEg0XFxyXHJcblxyXG4jIyMjIyBGaXZlIGhhc2h0YWdzID0gSDVcXHJcclxuXHJcbiMjIyMjIyBTaXggaGFzaHRhZ3MgPSBINlxcclxyXG5cclxuXHJcblxyXG5cclxuV3JhcCB0ZXh0IGluIGFzdGVyaXNrcyA9ICpJdGFsaWNpemVkIFRleHQqXFxyXHJcblxyXG5XcmFwIHRleHQgaW4gZG91YmxlIGFzdGVyaXNrcyA9ICoqQm9sZCBUZXh0KipcXHJcclxuXHJcblxyXG5cclxuXHJcblRocmVlIHVuZGVyc2NvcmVzIG9yIGFzdGVyaXNrcyBvciBkYXNoZXMgPSBcXDxoclxcPiAoaG9yaXpvbnRhbCBsaW5lKVxcclxyXG4qTm90ZTogdGhlIHRocmVlIHVuZGVyc2NvcmVzIG9yIGFzdGVyaXNrcyBvciBkYXNoZXMgbXVzdCBiZSB0aGUgb25seSBjaGFyYWN0ZXJzIG9uIHRoZSBsaW5lIGZvciB0aGlzIHRvIHdvcmsqXHJcblxyXG5fX19cclxuKioqXHJcbi0tLVxyXG5cclxuXHJcblxyXG5cclxuV3JhcCB0ZXh0IGluIGJhY2t0aWNrcyA9IFxcYCBUZXh0IGNvbG9yIGFuZCBiYWNrZ3JvdW5kIGNvbG9yIGFyZSBzd2l0Y2hlZCBcXGBcXHJcclxuXHJcbldyYXAgdGV4dCBpbiBzcXVhcmUgYnJhY2tldHMgZm9sbG93ZWQgYnkgdXJsIHdyYXBwZWQgaW4gcGFyZW50aGVzZXMgPSBbW2xpbmtdICh1cmwpXShodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9IeXBlcmxpbmspXFxyXHJcbipOb3RlOiBEb24ndCBwdXQgYW55IHNwYWNlIGJldHdlZW4gdGhlIHNxdWFyZSBicmFja2V0cyBhbmQgdGhlIHBhcmVudGhlc2VzKlxcclxyXG5cclxuPiBTdGFydCBsaW5lIHdpdGggb25lIFxcPiBjaGFyYWN0ZXIgPSBJbmRlbnRlZCBibG9ja3F1b3RlXHJcblxyXG4+ID4gU3RhcnQgbGluZSB3aXRoIHR3byBcXD4gY2hhcmFjdGVycyA9IERvdWJsZSBpbmRlbnRlZCBibG9ja3F1b3RlXHJcblxyXG5cclxuLS0tXHJcblxyXG5cclxuXHJcbjEuIFN0YXJ0IGVhY2ggbGluZSB3aXRoIGEgbnVtYmVyICsgYSBwZXJpb2QgKyBhIHNwYWNlICsgWW91ciB0ZXh0PSBOdW1iZXJlZCBMaXN0XHJcbjMuIE51bWJlciArIFBlcmlvZCA9ICYjNTA7LiBZb3VyIHRleHRcclxuNC4gKCYjNTI7LikgWW91IGNhbiB1c2UgYW55IG51bWJlciB5b3Ugd2FudFxyXG40LiAoJiM1MjsuKSBNYXJrZG93biB3aWxsIHN0aWxsIHNob3cgdGhlIG5leHQgbnVtYmVyXHJcbjEwLiAoJiM0OTsmIzQ4Oy4pIE1hcmtkb3duIHdpbGwgc3RpbGwgc2hvdyB0aGUgbmV4dCBzZXF1ZW50aWFsIG51bWJlclxyXG5cclxuLSBTdGFydCBlYWNoIGxpbmUgd2l0aCBhIGRhc2ggcGx1cyBhIHNwYWNlID0gQnVsbGV0ZWQgbGlzdFxyXG4tIFN0YXJ0IGVhY2ggbGluZSB3aXRoIGEgZGFzaCBwbHVzIGEgc3BhY2UgPSBCdWxsZXRlZCBsaXN0XHJcbi0gU3RhcnQgZWFjaCBsaW5lIHdpdGggYSBkYXNoIHBsdXMgYSBzcGFjZSA9IEJ1bGxldGVkIGxpc3RcclxuLSBTdGFydCBlYWNoIGxpbmUgd2l0aCBhIGRhc2ggcGx1cyBhIHNwYWNlID0gQnVsbGV0ZWQgbGlzdFxyXG5cclxuXHJcblxyXG4tLS1cclxuXHJcblxyXG5cclxuKipJTlBVVDoqKlxyXG5cclxuJiM5NjsgJiM5NjsgJiM5NjsgXHJcbnZhciBjb2RlID0gZnVuY3Rpb24oKXtcclxuPiBhbGVydCggXCJXcmFwIHlvdSBjb2RlIGluIGEgcGFpciBvZiB0cmlwbGUgXFxyIGJhY2t0aWNrcyB0byBjcmVhdGUgYSBtdWx0aS1saW5lIGNvZGUgYmxvY2tcIiApOyBcXHJcclxuPiAvL1RvIGluZGVudCBsaW5lcyBvZiBjb2RlIHVzZSB0YWJzXHJcblxyXG59O1xyXG5cclxuY29kZSgpO1xyXG4mIzk2OyAmIzk2OyAmIzk2O1xyXG5cclxuKipPVVRQVVQ6KipcclxuXHJcblxcYFxcYFxcYCBcclxudmFyIGNvZGUgPSBmdW5jdGlvbigpe1xyXG4gICAgYWxlcnQoIFwiV3JhcCB5b3UgY29kZSBpbiBhIHBhaXIgb2YgdHJpcGxlIFxyXG4gICAgYmFja3RpY2tzIHRvIGNyZWF0ZSBhIG11bHRpLWxpbmUgY29kZSBibG9ja1wiICk7XHJcbiAgICAvL1RvIGluZGVudCBsaW5lcyBvZiBjb2RlIHVzZSB0YWJzXHJcbn07XHJcblxyXG5jb2RlKCk7XHJcblxcYFxcYFxcYFxyXG5cclxuXHJcblxyXG4tLS1cclxuXHJcblxyXG5cclxuKipJTlBVVDoqKlxyXG5cclxuJiMzMzsmIzkxOyBEZXNjcmlwdGlvbiBvZiB0aGUgaW1hZ2UgJiM5MzsmIzQwOyB0aGUgaW1hZ2UgVVJMICYjNDE7XHJcblxyXG4qKk9VVFBVVDoqKlxyXG5cclxuIVtSZWFjdCBMb2dvIHcvIFRleHRdKGh0dHBzOi8vZ29vLmdsL1VteXl0YylcclxuXHJcblxyXG5cclxuLS0tXHJcblxyXG5cclxuXHJcbioqSU5QVVQ6KipcclxuXHJcbiYjMTI0OyBUbyBDcmVhdGUgJiMxMjQ7IEEgVGFibGU6ICYjMTI0OyBXcmFwIFRleHQgJiMxMjQ7IEluIFBpcGUgKG9yIHZlcnRpY2FsIHNsYXNoKSBzeW1ib2xzICYjMTI0O1xyXG4mIzEyNDsgLSAmIzEyNDstICYjMTI0OyAtICYjMTI0OyAtICYjMTI0O1xyXG4mIzEyNDsgT24gdGhlIDJuZCBsaW5lICYjMTI0OyBUeXBlIFBpcGUgKyBEYXNoICYjMTI0OyBPbmNlIEZvciBFdmVyeSAmIzEyNDsgVGFibGUgQ2VsbCBpbiB0aGUgUm93ICYjMTI0O1xyXG4mIzEyNDsgRm9yIEV2ZXJ5ICYjMTI0OyBSb3cgJiMxMjQ7ICBXcmFwIFRleHQgJiMxMjQ7IEluIFBpcGVzICYjMTI0O1xyXG4mIzEyNDsgSWYgVGhlcmUgQXJlIExlc3MgQ2VsbHMgJiMxMjQ7IFRoZSBUYWJsZSBXaWxsIEF1dG9tYXRpY2FsbHkgJiMxMjQ7IEZpbGwgSW4gQmxhbmsgQ2VsbHMgJiMxMjQ7XHJcblxyXG4qKk9VVFBVVDoqKlxyXG5cclxufCBUbyBDcmVhdGUgfCBBIFRhYmxlOiB8IFdyYXAgVGV4dCB8IEluIFBpcGUgKG9yIHZlcnRpY2FsIHNsYXNoKSBzeW1ib2xzIHxcclxufC0gfCAtIHwgLXwgLXxcclxufCBPbiB0aGUgMm5kIGxpbmUgfCBUeXBlIFBpcGUgKyBEYXNoIHwgT25jZSBGb3IgRXZlcnkgfCBUYWJsZSBDZWxsIGluIHRoZSBSb3cgfFxyXG58IEZvciBFdmVyeSB8IFJvdyB8ICBXcmFwIFRleHQgfCBJbiBQaXBlcyB8XHJcbnwgSWYgVGhlcmUgQXJlIExlc3MgQ2VsbHMgfCBUaGUgVGFibGUgV2lsbCBBdXRvbWF0aWNhbGx5IHwgRmlsbCBJbiBCbGFuayBDZWxscyB8XHJcblxyXG5cclxuXHJcblxyXG5gfTtcclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xyXG4gICAgICAgIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XHJcbiAgICAgICAgc2NyaXB0LnNyYyA9ICdodHRwczovL2Nkbi5mcmVlY29kZWNhbXAub3JnL3Rlc3RhYmxlLXByb2plY3RzLWZjYy92MS9idW5kbGUuanMnO1xyXG4gICAgICAgIHNjcmlwdC5hc3luYyA9IHRydWU7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO1xyXG4gICAgICAgIC8vUmVtb3ZlIHNwYWNlIGZyb20gdXJsIGRlbW9uc3RyYXRpb25cclxuICAgICAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImFcIikudGV4dENvbnRlbnQ7XHJcbiAgICAgICAgY29uc3QgZWRpdGVkTGluayA9IGxpbmsuc3BsaXQoXCJcIikuZmlsdGVyKGU9PiBlIT0gXCIgXCIpLmpvaW4oXCJcIik7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImFcIikudGV4dENvbnRlbnQgPSBlZGl0ZWRMaW5rO1xyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZUxpc3RlbmVyKGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGlucHV0OiBldmVudC50YXJnZXQudmFsdWVcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGdldE1hcmtkb3duID0gKCkgPT57XHJcbiAgICAgICAgY29uc3QgbWFya2Rvd24gPSBtYXJrZWQodGhpcy5zdGF0ZS5pbnB1dCwge3Nhbml0aXplOiB0cnVlLCB0YWJsZXM6IHRydWUsIGJyZWFrczogdHJ1ZX0sICk7XHJcbiAgICAgICAgcmV0dXJuIHtfX2h0bWw6IG1hcmtkb3dufTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgPlxyXG4gICAgICAgICAgICAgICAgPGgxPk1hcmtkb3duIFByZXZpZXdlcjwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0IGNoYW5nZT17KGV2ZW50KSA9PiB0aGlzLmNoYW5nZUxpc3RlbmVyKGV2ZW50KSB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPE91dHB1dCBzZXRNYXJrZG93bj17dGhpcy5nZXRNYXJrZG93bigpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpdiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogODAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDc1cHggYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjsgMnB4IHNvbGlkICMzNDM0MzQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0xhdG8nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGgxIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNWVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDRlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaDMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogNHB4IHNvbGlkICMzNDM0MzQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29kZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogOTUlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzM0MzQzNDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OjE1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5NyU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMCFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5NSU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDI1cHggMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwID4gaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiXX0= */\n/*@ sourceURL=C:\\Users\\Gabe\\FreeCodeCamp\\FrontEndLibraries\\BuildAMarkdownPreviewer\\pages\\index.js */"));
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.cf2947b28a3fffe9cf0b.hot-update.js.map