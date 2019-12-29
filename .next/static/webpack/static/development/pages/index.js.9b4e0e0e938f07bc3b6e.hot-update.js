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
  var htmlValue = "# One hashtag = H1\r\n\n## Two hashtags = H2\r\n\n### Three hashtags = H3\r\n\n#### Four hashtags = H4\r\n\n##### Five hashtags = H5\r\n\n###### Six hashtags = H6\r\n\nWrap text in asterisks = *Italicized Text*\r\n\nWrap text in double asterisks = **Bold Text**\r\n\nThree underscores or asterisks or dashes = <hr> (horizontal line)\r\n*Note: the three underscores or asterisks or dashes must be the only characters on the line for this to work*\n\n___\n***\n---\n\nWrap text in backticks = ` Text color and background color are switched `\r\n\nWrap text in square brackets followed by url wrapped in parentheses = [[link] (url)](https://en.wikipedia.org/wiki/Hyperlink)\r\n*Note: Don't put any space between the square brackets and the parentheses*\r\n\n> Start line with one > character = Indented blockquote\n\n> > Start line with two > characters = Double indented blockquote\n\n1. Start each line with a number + a period + a space + Your text= Numbered List\n3. Number + Period = &#50;. Your text\n4. (&#52;.) You can use any number you want\n4. (&#52;.) Markdown will still show the next number\n10. (&#49;&#48;.) Markdown will still show the next sequential number\n\n- Start each line with a dash plus a space = Bulleted list\n- Start each line with a dash plus a space = Bulleted list\n- Start each line with a dash plus a space = Bulleted list\n- Start each line with a dash plus a space = Bulleted list\n\n\n&#96; &#96; &#96; \nvar code = function(){\n> alert( \"Wrap you code in a pair of triple \r backticks to create a multi-line code block\" ); \r\n> //To indent lines of code use tabs\n\n};\n\ncode();\n&#96; &#96; &#96;\n*Result:* \n``` \nvar code = function(){\n    alert( \"Wrap you code in a pair of triple \n    backticks to create a multi-line code block\" );\n    //To indent lines of code use tabs\n};\n\ncode();\n```\n\n\n&#33;&#91;Do I Work&#93;&#40;https://goo.gl/Umyytc&#41;\n![React Logo w/ Text](https://goo.gl/Umyytc)\n\n\n|   ha      |   hb      |  hc       |   hd      |\n|---------- | --------- | --------- | ----------|\n| tictictic | tactactac | tictictic | tactactac |\n| toetoetoe | tictictic | toetoetoe | tactactac |\n&#124;\n";
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3771915562",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("textarea", {
    id: "editor",
    defaultValue: htmlValue,
    onChange: props.change,
    className: "jsx-3771915562",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3771915562",
    __self: this
  }, "#editor.jsx-3771915562{width:800px;height:200px;margin:auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcR2FiZVxcRnJlZUNvZGVDYW1wXFxGcm9udEVuZExpYnJhcmllc1xcQnVpbGRBTWFya2Rvd25QcmV2aWV3ZXJcXGNvbXBvbmVudHNcXGlucHV0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdGaUIsQUFHcUMsWUFDQyxhQUNELFlBQ2hCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcR2FiZVxcRnJlZUNvZGVDYW1wXFxGcm9udEVuZExpYnJhcmllc1xcQnVpbGRBTWFya2Rvd25QcmV2aWV3ZXJcXGNvbXBvbmVudHNcXGlucHV0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1hcmtlZCBmcm9tICdtYXJrZWQnO1xyXG5cclxuZnVuY3Rpb24gaW5wdXQocHJvcHMpe1xyXG5cclxuICAgIGNvbnN0IGh0bWxWYWx1ZSA9IGAjIE9uZSBoYXNodGFnID0gSDFcXHJcclxuXHJcbiMjIFR3byBoYXNodGFncyA9IEgyXFxyXHJcblxyXG4jIyMgVGhyZWUgaGFzaHRhZ3MgPSBIM1xcclxyXG5cclxuIyMjIyBGb3VyIGhhc2h0YWdzID0gSDRcXHJcclxuXHJcbiMjIyMjIEZpdmUgaGFzaHRhZ3MgPSBINVxcclxyXG5cclxuIyMjIyMjIFNpeCBoYXNodGFncyA9IEg2XFxyXHJcblxyXG5XcmFwIHRleHQgaW4gYXN0ZXJpc2tzID0gKkl0YWxpY2l6ZWQgVGV4dCpcXHJcclxuXHJcbldyYXAgdGV4dCBpbiBkb3VibGUgYXN0ZXJpc2tzID0gKipCb2xkIFRleHQqKlxcclxyXG5cclxuVGhyZWUgdW5kZXJzY29yZXMgb3IgYXN0ZXJpc2tzIG9yIGRhc2hlcyA9IFxcPGhyXFw+IChob3Jpem9udGFsIGxpbmUpXFxyXHJcbipOb3RlOiB0aGUgdGhyZWUgdW5kZXJzY29yZXMgb3IgYXN0ZXJpc2tzIG9yIGRhc2hlcyBtdXN0IGJlIHRoZSBvbmx5IGNoYXJhY3RlcnMgb24gdGhlIGxpbmUgZm9yIHRoaXMgdG8gd29yaypcclxuXHJcbl9fX1xyXG4qKipcclxuLS0tXHJcblxyXG5XcmFwIHRleHQgaW4gYmFja3RpY2tzID0gXFxgIFRleHQgY29sb3IgYW5kIGJhY2tncm91bmQgY29sb3IgYXJlIHN3aXRjaGVkIFxcYFxcclxyXG5cclxuV3JhcCB0ZXh0IGluIHNxdWFyZSBicmFja2V0cyBmb2xsb3dlZCBieSB1cmwgd3JhcHBlZCBpbiBwYXJlbnRoZXNlcyA9IFtbbGlua10gKHVybCldKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0h5cGVybGluaylcXHJcclxuKk5vdGU6IERvbid0IHB1dCBhbnkgc3BhY2UgYmV0d2VlbiB0aGUgc3F1YXJlIGJyYWNrZXRzIGFuZCB0aGUgcGFyZW50aGVzZXMqXFxyXHJcblxyXG4+IFN0YXJ0IGxpbmUgd2l0aCBvbmUgXFw+IGNoYXJhY3RlciA9IEluZGVudGVkIGJsb2NrcXVvdGVcclxuXHJcbj4gPiBTdGFydCBsaW5lIHdpdGggdHdvIFxcPiBjaGFyYWN0ZXJzID0gRG91YmxlIGluZGVudGVkIGJsb2NrcXVvdGVcclxuXHJcbjEuIFN0YXJ0IGVhY2ggbGluZSB3aXRoIGEgbnVtYmVyICsgYSBwZXJpb2QgKyBhIHNwYWNlICsgWW91ciB0ZXh0PSBOdW1iZXJlZCBMaXN0XHJcbjMuIE51bWJlciArIFBlcmlvZCA9ICYjNTA7LiBZb3VyIHRleHRcclxuNC4gKCYjNTI7LikgWW91IGNhbiB1c2UgYW55IG51bWJlciB5b3Ugd2FudFxyXG40LiAoJiM1MjsuKSBNYXJrZG93biB3aWxsIHN0aWxsIHNob3cgdGhlIG5leHQgbnVtYmVyXHJcbjEwLiAoJiM0OTsmIzQ4Oy4pIE1hcmtkb3duIHdpbGwgc3RpbGwgc2hvdyB0aGUgbmV4dCBzZXF1ZW50aWFsIG51bWJlclxyXG5cclxuLSBTdGFydCBlYWNoIGxpbmUgd2l0aCBhIGRhc2ggcGx1cyBhIHNwYWNlID0gQnVsbGV0ZWQgbGlzdFxyXG4tIFN0YXJ0IGVhY2ggbGluZSB3aXRoIGEgZGFzaCBwbHVzIGEgc3BhY2UgPSBCdWxsZXRlZCBsaXN0XHJcbi0gU3RhcnQgZWFjaCBsaW5lIHdpdGggYSBkYXNoIHBsdXMgYSBzcGFjZSA9IEJ1bGxldGVkIGxpc3RcclxuLSBTdGFydCBlYWNoIGxpbmUgd2l0aCBhIGRhc2ggcGx1cyBhIHNwYWNlID0gQnVsbGV0ZWQgbGlzdFxyXG5cclxuXHJcbiYjOTY7ICYjOTY7ICYjOTY7IFxyXG52YXIgY29kZSA9IGZ1bmN0aW9uKCl7XHJcbj4gYWxlcnQoIFwiV3JhcCB5b3UgY29kZSBpbiBhIHBhaXIgb2YgdHJpcGxlIFxcciBiYWNrdGlja3MgdG8gY3JlYXRlIGEgbXVsdGktbGluZSBjb2RlIGJsb2NrXCIgKTsgXFxyXHJcbj4gLy9UbyBpbmRlbnQgbGluZXMgb2YgY29kZSB1c2UgdGFic1xyXG5cclxufTtcclxuXHJcbmNvZGUoKTtcclxuJiM5NjsgJiM5NjsgJiM5NjtcclxuKlJlc3VsdDoqIFxyXG5cXGBcXGBcXGAgXHJcbnZhciBjb2RlID0gZnVuY3Rpb24oKXtcclxuICAgIGFsZXJ0KCBcIldyYXAgeW91IGNvZGUgaW4gYSBwYWlyIG9mIHRyaXBsZSBcclxuICAgIGJhY2t0aWNrcyB0byBjcmVhdGUgYSBtdWx0aS1saW5lIGNvZGUgYmxvY2tcIiApO1xyXG4gICAgLy9UbyBpbmRlbnQgbGluZXMgb2YgY29kZSB1c2UgdGFic1xyXG59O1xyXG5cclxuY29kZSgpO1xyXG5cXGBcXGBcXGBcclxuXHJcblxyXG4mIzMzOyYjOTE7RG8gSSBXb3JrJiM5MzsmIzQwO2h0dHBzOi8vZ29vLmdsL1VteXl0YyYjNDE7XHJcbiFbUmVhY3QgTG9nbyB3LyBUZXh0XShodHRwczovL2dvby5nbC9VbXl5dGMpXHJcblxyXG5cclxufCAgIGhhICAgICAgfCAgIGhiICAgICAgfCAgaGMgICAgICAgfCAgIGhkICAgICAgfFxyXG58LS0tLS0tLS0tLSB8IC0tLS0tLS0tLSB8IC0tLS0tLS0tLSB8IC0tLS0tLS0tLS18XHJcbnwgdGljdGljdGljIHwgdGFjdGFjdGFjIHwgdGljdGljdGljIHwgdGFjdGFjdGFjIHxcclxufCB0b2V0b2V0b2UgfCB0aWN0aWN0aWMgfCB0b2V0b2V0b2UgfCB0YWN0YWN0YWMgfFxyXG4mIzEyNDtcclxuYDtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgICAgaWQ9J2VkaXRvcidcclxuICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17aHRtbFZhbHVlfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3Byb3BzLmNoYW5nZX1cclxuICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgICAgICNlZGl0b3Ige1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogODAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbnB1dDsiXX0= */\n/*@ sourceURL=C:\\Users\\Gabe\\FreeCodeCamp\\FrontEndLibraries\\BuildAMarkdownPreviewer\\components\\input.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (input);

/***/ })

})
//# sourceMappingURL=index.js.9b4e0e0e938f07bc3b6e.hot-update.js.map