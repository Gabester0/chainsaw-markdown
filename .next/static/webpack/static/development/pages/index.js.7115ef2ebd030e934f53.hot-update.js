webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/input.js":
/*!*****************************!*\
  !*** ./components/input.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! marked */ "./node_modules/marked/lib/marked.js");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(marked__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Gabe\\FreeCodeCamp\\FrontEndLibraries\\BuildAMarkdownPreviewer\\components\\input.js";




function input(props) {
  var htmlValue = "# One hashtag = H1\r\n\n## Two hashtags = H2\r\n\n### Three hashtags = H3\r\n\n#### Four hashtags = H4\r\n\n##### Five hashtags = H5\r\n\n###### Six hashtags = H6\r\n\n\n\n\nWrap text in asterisks = *Italicized Text*\r\n\nWrap text in double asterisks = **Bold Text**\r\n\n\n\n\nThree underscores or asterisks or dashes = <hr> (horizontal line)\r\n*Note: the three underscores or asterisks or dashes must be the only characters on the line for this to work*\n\n___\n***\n---\n\n\n\n\nWrap text in backticks = ` Text color and background color are switched `\r\n\nWrap text in square brackets followed by url wrapped in parentheses = [[link] (url)](https://en.wikipedia.org/wiki/Hyperlink)\r\n*Note: Don't put any space between the square brackets and the parentheses*\r\n\n> Start line with one > character = Indented blockquote\n\n> > Start line with two > characters = Double indented blockquote\n\n\n---\n\n\n\n1. Start each line with a number + a period + a space + Your text= Numbered List\n3. Number + Period = &#50;. Your text\n4. (&#52;.) You can use any number you want\n4. (&#52;.) Markdown will still show the next number\n10. (&#49;&#48;.) Markdown will still show the next sequential number\n\n- Start each line with a dash plus a space = Bulleted list\n- Start each line with a dash plus a space = Bulleted list\n- Start each line with a dash plus a space = Bulleted list\n- Start each line with a dash plus a space = Bulleted list\n\n\n\n---\n\n\n\n**INPUT:**\n\n&#96; &#96; &#96; \nvar code = function(){\n> alert( \"Wrap you code in a pair of triple \r backticks to create a multi-line code block\" ); \r\n> //To indent lines of code use tabs\n\n};\n\ncode();\n&#96; &#96; &#96;\n\n**OUTPUT:**\n\n``` \nvar code = function(){\n    alert( \"Wrap you code in a pair of triple \n    backticks to create a multi-line code block\" );\n    //To indent lines of code use tabs\n};\n\ncode();\n```\n\n\n\n---\n\n\n\n**INPUT:**\n\n&#33;&#91; Description of the image &#93;&#40; the image URL &#41;\n\n**OUTPUT:**\n\n![React Logo w/ Text](https://goo.gl/Umyytc)\n\n\n\n---\n\n\n\n**INPUT:**\n\n&#124; To Create &#124; A Table: &#124; Wrap Text &#124; In Pipe (or vertical slash) symbols &#124;\n&#124; - &#124;- &#124; - &#124; - &#124;\n&#124; On the 2nd line &#124; Type Pipe + Dash &#124; Once For Every &#124; Table Cell in the Row &#124;\n&#124; For Every &#124; Row &#124;  Wrap Text &#124; In Pipes &#124;\n&#124; If There Are Less Cells &#124; The Table Will Automatically &#124; Fill In Blank Cells &#124;\n\n**OUTPUT:**\n\n| To Create | A Table: | Wrap Text | In Pipe (or vertical slash) symbols |\n|- | - | -| -|\n| On the 2nd line | Type Pipe + Dash | Once For Every | Table Cell in the Row |\n| For Every | Row |  Wrap Text | In Pipes |\n| If There Are Less Cells | The Table Will Automatically | Fill In Blank Cells |\n\n\n\n\n";
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "input",
    className: "jsx-1262003520",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    class: "flexRow",
    className: "jsx-1262003520",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
    className: "jsx-1262003520",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
    className: "jsx-1262003520",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, "INPUT:")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
    className: "jsx-1262003520",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
    className: "jsx-1262003520",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, "Select Me"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("textarea", {
    id: "editor",
    defaultValue: htmlValue,
    onChange: props.change,
    className: "jsx-1262003520",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1262003520",
    __self: this
  }, ".flexRow.jsx-1262003520{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-webkit-justify-content:start;-ms-flex-pack:start;justify-content:start;}.flexRow.jsx-1262003520>h4.jsx-1262003520{text-align:left;}#input.jsx-1262003520>textarea.jsx-1262003520{width:800px;height:200px;margin:auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcR2FiZVxcRnJlZUNvZGVDYW1wXFxGcm9udEVuZExpYnJhcmllc1xcQnVpbGRBTWFya2Rvd25QcmV2aWV3ZXJcXGNvbXBvbmVudHNcXGlucHV0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtKaUIsQUFHc0MsQUFLRyxBQUdKLFlBQ0MsSUFIakIsU0FJZ0IsWUFDaEIscUNBVnVCLHFFQUNHLCtGQUMxQiIsImZpbGUiOiJDOlxcVXNlcnNcXEdhYmVcXEZyZWVDb2RlQ2FtcFxcRnJvbnRFbmRMaWJyYXJpZXNcXEJ1aWxkQU1hcmtkb3duUHJldmlld2VyXFxjb21wb25lbnRzXFxpbnB1dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtYXJrZWQgZnJvbSAnbWFya2VkJztcclxuXHJcbmZ1bmN0aW9uIGlucHV0KHByb3BzKXtcclxuXHJcbiAgICBjb25zdCBodG1sVmFsdWUgPSBgIyBPbmUgaGFzaHRhZyA9IEgxXFxyXHJcblxyXG4jIyBUd28gaGFzaHRhZ3MgPSBIMlxcclxyXG5cclxuIyMjIFRocmVlIGhhc2h0YWdzID0gSDNcXHJcclxuXHJcbiMjIyMgRm91ciBoYXNodGFncyA9IEg0XFxyXHJcblxyXG4jIyMjIyBGaXZlIGhhc2h0YWdzID0gSDVcXHJcclxuXHJcbiMjIyMjIyBTaXggaGFzaHRhZ3MgPSBINlxcclxyXG5cclxuXHJcblxyXG5cclxuV3JhcCB0ZXh0IGluIGFzdGVyaXNrcyA9ICpJdGFsaWNpemVkIFRleHQqXFxyXHJcblxyXG5XcmFwIHRleHQgaW4gZG91YmxlIGFzdGVyaXNrcyA9ICoqQm9sZCBUZXh0KipcXHJcclxuXHJcblxyXG5cclxuXHJcblRocmVlIHVuZGVyc2NvcmVzIG9yIGFzdGVyaXNrcyBvciBkYXNoZXMgPSBcXDxoclxcPiAoaG9yaXpvbnRhbCBsaW5lKVxcclxyXG4qTm90ZTogdGhlIHRocmVlIHVuZGVyc2NvcmVzIG9yIGFzdGVyaXNrcyBvciBkYXNoZXMgbXVzdCBiZSB0aGUgb25seSBjaGFyYWN0ZXJzIG9uIHRoZSBsaW5lIGZvciB0aGlzIHRvIHdvcmsqXHJcblxyXG5fX19cclxuKioqXHJcbi0tLVxyXG5cclxuXHJcblxyXG5cclxuV3JhcCB0ZXh0IGluIGJhY2t0aWNrcyA9IFxcYCBUZXh0IGNvbG9yIGFuZCBiYWNrZ3JvdW5kIGNvbG9yIGFyZSBzd2l0Y2hlZCBcXGBcXHJcclxuXHJcbldyYXAgdGV4dCBpbiBzcXVhcmUgYnJhY2tldHMgZm9sbG93ZWQgYnkgdXJsIHdyYXBwZWQgaW4gcGFyZW50aGVzZXMgPSBbW2xpbmtdICh1cmwpXShodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9IeXBlcmxpbmspXFxyXHJcbipOb3RlOiBEb24ndCBwdXQgYW55IHNwYWNlIGJldHdlZW4gdGhlIHNxdWFyZSBicmFja2V0cyBhbmQgdGhlIHBhcmVudGhlc2VzKlxcclxyXG5cclxuPiBTdGFydCBsaW5lIHdpdGggb25lIFxcPiBjaGFyYWN0ZXIgPSBJbmRlbnRlZCBibG9ja3F1b3RlXHJcblxyXG4+ID4gU3RhcnQgbGluZSB3aXRoIHR3byBcXD4gY2hhcmFjdGVycyA9IERvdWJsZSBpbmRlbnRlZCBibG9ja3F1b3RlXHJcblxyXG5cclxuLS0tXHJcblxyXG5cclxuXHJcbjEuIFN0YXJ0IGVhY2ggbGluZSB3aXRoIGEgbnVtYmVyICsgYSBwZXJpb2QgKyBhIHNwYWNlICsgWW91ciB0ZXh0PSBOdW1iZXJlZCBMaXN0XHJcbjMuIE51bWJlciArIFBlcmlvZCA9ICYjNTA7LiBZb3VyIHRleHRcclxuNC4gKCYjNTI7LikgWW91IGNhbiB1c2UgYW55IG51bWJlciB5b3Ugd2FudFxyXG40LiAoJiM1MjsuKSBNYXJrZG93biB3aWxsIHN0aWxsIHNob3cgdGhlIG5leHQgbnVtYmVyXHJcbjEwLiAoJiM0OTsmIzQ4Oy4pIE1hcmtkb3duIHdpbGwgc3RpbGwgc2hvdyB0aGUgbmV4dCBzZXF1ZW50aWFsIG51bWJlclxyXG5cclxuLSBTdGFydCBlYWNoIGxpbmUgd2l0aCBhIGRhc2ggcGx1cyBhIHNwYWNlID0gQnVsbGV0ZWQgbGlzdFxyXG4tIFN0YXJ0IGVhY2ggbGluZSB3aXRoIGEgZGFzaCBwbHVzIGEgc3BhY2UgPSBCdWxsZXRlZCBsaXN0XHJcbi0gU3RhcnQgZWFjaCBsaW5lIHdpdGggYSBkYXNoIHBsdXMgYSBzcGFjZSA9IEJ1bGxldGVkIGxpc3RcclxuLSBTdGFydCBlYWNoIGxpbmUgd2l0aCBhIGRhc2ggcGx1cyBhIHNwYWNlID0gQnVsbGV0ZWQgbGlzdFxyXG5cclxuXHJcblxyXG4tLS1cclxuXHJcblxyXG5cclxuKipJTlBVVDoqKlxyXG5cclxuJiM5NjsgJiM5NjsgJiM5NjsgXHJcbnZhciBjb2RlID0gZnVuY3Rpb24oKXtcclxuPiBhbGVydCggXCJXcmFwIHlvdSBjb2RlIGluIGEgcGFpciBvZiB0cmlwbGUgXFxyIGJhY2t0aWNrcyB0byBjcmVhdGUgYSBtdWx0aS1saW5lIGNvZGUgYmxvY2tcIiApOyBcXHJcclxuPiAvL1RvIGluZGVudCBsaW5lcyBvZiBjb2RlIHVzZSB0YWJzXHJcblxyXG59O1xyXG5cclxuY29kZSgpO1xyXG4mIzk2OyAmIzk2OyAmIzk2O1xyXG5cclxuKipPVVRQVVQ6KipcclxuXHJcblxcYFxcYFxcYCBcclxudmFyIGNvZGUgPSBmdW5jdGlvbigpe1xyXG4gICAgYWxlcnQoIFwiV3JhcCB5b3UgY29kZSBpbiBhIHBhaXIgb2YgdHJpcGxlIFxyXG4gICAgYmFja3RpY2tzIHRvIGNyZWF0ZSBhIG11bHRpLWxpbmUgY29kZSBibG9ja1wiICk7XHJcbiAgICAvL1RvIGluZGVudCBsaW5lcyBvZiBjb2RlIHVzZSB0YWJzXHJcbn07XHJcblxyXG5jb2RlKCk7XHJcblxcYFxcYFxcYFxyXG5cclxuXHJcblxyXG4tLS1cclxuXHJcblxyXG5cclxuKipJTlBVVDoqKlxyXG5cclxuJiMzMzsmIzkxOyBEZXNjcmlwdGlvbiBvZiB0aGUgaW1hZ2UgJiM5MzsmIzQwOyB0aGUgaW1hZ2UgVVJMICYjNDE7XHJcblxyXG4qKk9VVFBVVDoqKlxyXG5cclxuIVtSZWFjdCBMb2dvIHcvIFRleHRdKGh0dHBzOi8vZ29vLmdsL1VteXl0YylcclxuXHJcblxyXG5cclxuLS0tXHJcblxyXG5cclxuXHJcbioqSU5QVVQ6KipcclxuXHJcbiYjMTI0OyBUbyBDcmVhdGUgJiMxMjQ7IEEgVGFibGU6ICYjMTI0OyBXcmFwIFRleHQgJiMxMjQ7IEluIFBpcGUgKG9yIHZlcnRpY2FsIHNsYXNoKSBzeW1ib2xzICYjMTI0O1xyXG4mIzEyNDsgLSAmIzEyNDstICYjMTI0OyAtICYjMTI0OyAtICYjMTI0O1xyXG4mIzEyNDsgT24gdGhlIDJuZCBsaW5lICYjMTI0OyBUeXBlIFBpcGUgKyBEYXNoICYjMTI0OyBPbmNlIEZvciBFdmVyeSAmIzEyNDsgVGFibGUgQ2VsbCBpbiB0aGUgUm93ICYjMTI0O1xyXG4mIzEyNDsgRm9yIEV2ZXJ5ICYjMTI0OyBSb3cgJiMxMjQ7ICBXcmFwIFRleHQgJiMxMjQ7IEluIFBpcGVzICYjMTI0O1xyXG4mIzEyNDsgSWYgVGhlcmUgQXJlIExlc3MgQ2VsbHMgJiMxMjQ7IFRoZSBUYWJsZSBXaWxsIEF1dG9tYXRpY2FsbHkgJiMxMjQ7IEZpbGwgSW4gQmxhbmsgQ2VsbHMgJiMxMjQ7XHJcblxyXG4qKk9VVFBVVDoqKlxyXG5cclxufCBUbyBDcmVhdGUgfCBBIFRhYmxlOiB8IFdyYXAgVGV4dCB8IEluIFBpcGUgKG9yIHZlcnRpY2FsIHNsYXNoKSBzeW1ib2xzIHxcclxufC0gfCAtIHwgLXwgLXxcclxufCBPbiB0aGUgMm5kIGxpbmUgfCBUeXBlIFBpcGUgKyBEYXNoIHwgT25jZSBGb3IgRXZlcnkgfCBUYWJsZSBDZWxsIGluIHRoZSBSb3cgfFxyXG58IEZvciBFdmVyeSB8IFJvdyB8ICBXcmFwIFRleHQgfCBJbiBQaXBlcyB8XHJcbnwgSWYgVGhlcmUgQXJlIExlc3MgQ2VsbHMgfCBUaGUgVGFibGUgV2lsbCBBdXRvbWF0aWNhbGx5IHwgRmlsbCBJbiBCbGFuayBDZWxscyB8XHJcblxyXG5cclxuXHJcblxyXG5gO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBpZD0naW5wdXQnPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleFJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGg0PjxzdHJvbmc+SU5QVVQ6PC9zdHJvbmc+PC9oND5cclxuICAgICAgICAgICAgICAgIDxzZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5TZWxlY3QgTWU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgICBpZD1cImVkaXRvclwiXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2h0bWxWYWx1ZX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtwcm9wcy5jaGFuZ2V9XHJcbiAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgICAgICAuZmxleFJvdyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5mbGV4Um93ID4gaDQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAjaW5wdXQgPiB0ZXh0YXJlYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGlucHV0OyJdfQ== */\n/*@ sourceURL=C:\\Users\\Gabe\\FreeCodeCamp\\FrontEndLibraries\\BuildAMarkdownPreviewer\\components\\input.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (input);

/***/ })

})
//# sourceMappingURL=index.js.7115ef2ebd030e934f53.hot-update.js.map