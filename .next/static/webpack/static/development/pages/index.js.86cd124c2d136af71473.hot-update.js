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
  var htmlValue = "# One hashtag = H1\r\n\n## Two hashtags = H2\r\n\n### Three hashtags = H3\r\n\n#### Four hashtags = H4\r\n\n##### Five hashtags = H5\r\n\n###### Six hashtags = H6\r\n\nWrap text in asterisks = *Italicized Text*\r\n\nWrap text in double asterisks = **Bold Text**\r\n\nThree underscores = <hr> (horizontal line)\r\n*Note: the three underscores must be the only characters on the line for this to work*\n\n___\n***\n---\n\nWrap text in backticks = ` Text color and background color are switched `\r\n\nWrap text in square brackets followed by url wrapped in parentheses = [[link] (url)](https://en.wikipedia.org/wiki/Hyperlink)\r\n*Note: Don't put any space between the square brackets and the parentheses*\r\n\n> Start line with one > character = Indented blockquote\n\n> > Start line with two > characters = Double indented blockquote\n\n1. Start each line with a number + a period + a space + Your text= Numbered List\n3. Number + Period = &#50;. Your text\n4. (&#52;.) You can use any number you want\n4. (&#52;.) Markdown will still show the next number\n10. (&#49;&#48;.) Markdown will still show the next sequential number\n\n- Start each line with a dash plus a space = Bulleted list\n- Start each line with a dash plus a space = Bulleted list\n- Start each line with a dash plus a space = Bulleted list\n- Start each line with a dash plus a space = Bulleted list\n\n```\n//I am a\n//multi-line\n//code block\n<div></div>\n```\n\n![React Logo w/ Text](https://goo.gl/Umyytc)\r\n\n|   ha      |   hb      |  hc       |   hd      |\n|---------- | --------- | --------- | ----------|\n| tictictic | tactactac | tictictic | tactactac |\n| toetoetoe | tictictic | toetoetoe | tactactac |\n\n";
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3771915562",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("textarea", {
    id: "editor",
    defaultValue: htmlValue,
    onChange: props.change,
    className: "jsx-3771915562",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3771915562",
    __self: this
  }, "#editor.jsx-3771915562{width:800px;height:200px;margin:auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcR2FiZVxcRnJlZUNvZGVDYW1wXFxGcm9udEVuZExpYnJhcmllc1xcQnVpbGRBTWFya2Rvd25QcmV2aWV3ZXJcXGNvbXBvbmVudHNcXGlucHV0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdFaUIsQUFHcUMsWUFDQyxhQUNELFlBQ2hCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcR2FiZVxcRnJlZUNvZGVDYW1wXFxGcm9udEVuZExpYnJhcmllc1xcQnVpbGRBTWFya2Rvd25QcmV2aWV3ZXJcXGNvbXBvbmVudHNcXGlucHV0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1hcmtlZCBmcm9tICdtYXJrZWQnO1xyXG5cclxuZnVuY3Rpb24gaW5wdXQocHJvcHMpe1xyXG5cclxuICAgIGNvbnN0IGh0bWxWYWx1ZSA9IGAjIE9uZSBoYXNodGFnID0gSDFcXHJcclxuXHJcbiMjIFR3byBoYXNodGFncyA9IEgyXFxyXHJcblxyXG4jIyMgVGhyZWUgaGFzaHRhZ3MgPSBIM1xcclxyXG5cclxuIyMjIyBGb3VyIGhhc2h0YWdzID0gSDRcXHJcclxuXHJcbiMjIyMjIEZpdmUgaGFzaHRhZ3MgPSBINVxcclxyXG5cclxuIyMjIyMjIFNpeCBoYXNodGFncyA9IEg2XFxyXHJcblxyXG5XcmFwIHRleHQgaW4gYXN0ZXJpc2tzID0gKkl0YWxpY2l6ZWQgVGV4dCpcXHJcclxuXHJcbldyYXAgdGV4dCBpbiBkb3VibGUgYXN0ZXJpc2tzID0gKipCb2xkIFRleHQqKlxcclxyXG5cclxuVGhyZWUgdW5kZXJzY29yZXMgPSBcXDxoclxcPiAoaG9yaXpvbnRhbCBsaW5lKVxcclxyXG4qTm90ZTogdGhlIHRocmVlIHVuZGVyc2NvcmVzIG11c3QgYmUgdGhlIG9ubHkgY2hhcmFjdGVycyBvbiB0aGUgbGluZSBmb3IgdGhpcyB0byB3b3JrKlxyXG5cclxuX19fXHJcbioqKlxyXG4tLS1cclxuXHJcbldyYXAgdGV4dCBpbiBiYWNrdGlja3MgPSBcXGAgVGV4dCBjb2xvciBhbmQgYmFja2dyb3VuZCBjb2xvciBhcmUgc3dpdGNoZWQgXFxgXFxyXHJcblxyXG5XcmFwIHRleHQgaW4gc3F1YXJlIGJyYWNrZXRzIGZvbGxvd2VkIGJ5IHVybCB3cmFwcGVkIGluIHBhcmVudGhlc2VzID0gW1tsaW5rXSAodXJsKV0oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSHlwZXJsaW5rKVxcclxyXG4qTm90ZTogRG9uJ3QgcHV0IGFueSBzcGFjZSBiZXR3ZWVuIHRoZSBzcXVhcmUgYnJhY2tldHMgYW5kIHRoZSBwYXJlbnRoZXNlcypcXHJcclxuXHJcbj4gU3RhcnQgbGluZSB3aXRoIG9uZSBcXD4gY2hhcmFjdGVyID0gSW5kZW50ZWQgYmxvY2txdW90ZVxyXG5cclxuPiA+IFN0YXJ0IGxpbmUgd2l0aCB0d28gXFw+IGNoYXJhY3RlcnMgPSBEb3VibGUgaW5kZW50ZWQgYmxvY2txdW90ZVxyXG5cclxuMS4gU3RhcnQgZWFjaCBsaW5lIHdpdGggYSBudW1iZXIgKyBhIHBlcmlvZCArIGEgc3BhY2UgKyBZb3VyIHRleHQ9IE51bWJlcmVkIExpc3RcclxuMy4gTnVtYmVyICsgUGVyaW9kID0gJiM1MDsuIFlvdXIgdGV4dFxyXG40LiAoJiM1MjsuKSBZb3UgY2FuIHVzZSBhbnkgbnVtYmVyIHlvdSB3YW50XHJcbjQuICgmIzUyOy4pIE1hcmtkb3duIHdpbGwgc3RpbGwgc2hvdyB0aGUgbmV4dCBudW1iZXJcclxuMTAuICgmIzQ5OyYjNDg7LikgTWFya2Rvd24gd2lsbCBzdGlsbCBzaG93IHRoZSBuZXh0IHNlcXVlbnRpYWwgbnVtYmVyXHJcblxyXG4tIFN0YXJ0IGVhY2ggbGluZSB3aXRoIGEgZGFzaCBwbHVzIGEgc3BhY2UgPSBCdWxsZXRlZCBsaXN0XHJcbi0gU3RhcnQgZWFjaCBsaW5lIHdpdGggYSBkYXNoIHBsdXMgYSBzcGFjZSA9IEJ1bGxldGVkIGxpc3RcclxuLSBTdGFydCBlYWNoIGxpbmUgd2l0aCBhIGRhc2ggcGx1cyBhIHNwYWNlID0gQnVsbGV0ZWQgbGlzdFxyXG4tIFN0YXJ0IGVhY2ggbGluZSB3aXRoIGEgZGFzaCBwbHVzIGEgc3BhY2UgPSBCdWxsZXRlZCBsaXN0XHJcblxyXG5cXGBcXGBcXGBcclxuLy9JIGFtIGFcclxuLy9tdWx0aS1saW5lXHJcbi8vY29kZSBibG9ja1xyXG48ZGl2PjwvZGl2PlxyXG5cXGBcXGBcXGBcclxuXHJcbiFbUmVhY3QgTG9nbyB3LyBUZXh0XShodHRwczovL2dvby5nbC9VbXl5dGMpXFxyXHJcblxyXG58ICAgaGEgICAgICB8ICAgaGIgICAgICB8ICBoYyAgICAgICB8ICAgaGQgICAgICB8XHJcbnwtLS0tLS0tLS0tIHwgLS0tLS0tLS0tIHwgLS0tLS0tLS0tIHwgLS0tLS0tLS0tLXxcclxufCB0aWN0aWN0aWMgfCB0YWN0YWN0YWMgfCB0aWN0aWN0aWMgfCB0YWN0YWN0YWMgfFxyXG58IHRvZXRvZXRvZSB8IHRpY3RpY3RpYyB8IHRvZXRvZXRvZSB8IHRhY3RhY3RhYyB8XHJcblxyXG5gXHJcbjtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgICAgaWQ9J2VkaXRvcidcclxuICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17aHRtbFZhbHVlfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3Byb3BzLmNoYW5nZX1cclxuICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgICAgICNlZGl0b3Ige1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogODAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbnB1dDsiXX0= */\n/*@ sourceURL=C:\\Users\\Gabe\\FreeCodeCamp\\FrontEndLibraries\\BuildAMarkdownPreviewer\\components\\input.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (input);

/***/ })

})
//# sourceMappingURL=index.js.86cd124c2d136af71473.hot-update.js.map