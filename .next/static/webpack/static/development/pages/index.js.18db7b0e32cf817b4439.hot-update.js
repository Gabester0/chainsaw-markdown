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
    className: "jsx-3748001935",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    class: "flexRow",
    className: "jsx-3748001935",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
    className: "jsx-3748001935",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
    className: "jsx-3748001935",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, "INPUT:")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
    className: "jsx-3748001935",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
    className: "jsx-3748001935",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, "Select Me"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("textarea", {
    id: "editor",
    defaultValue: htmlValue,
    onChange: props.change,
    className: "jsx-3748001935",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3748001935",
    __self: this
  }, ".flexRow.jsx-3748001935{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-webkit-justify-content:start;-ms-flex-pack:start;justify-content:start;}.flexRow.jsx-3748001935>h4.jsx-3748001935{text-align:left;display:inline-block!important;}#input.jsx-3748001935>textarea.jsx-3748001935{width:800px;height:200px;margin:auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcR2FiZVxcRnJlZUNvZGVDYW1wXFxGcm9udEVuZExpYnJhcmllc1xcQnVpbGRBTWFya2Rvd25QcmV2aWV3ZXJcXGNvbXBvbmVudHNcXGlucHV0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtKaUIsQUFHb0MsQUFNSyxBQUlKLFdBVEMsQ0FVQSxJQUprQixTQUtuQixZQUNoQixVQUxBLHNDQU51QixxRUFDRywrRkFDMUIiLCJmaWxlIjoiQzpcXFVzZXJzXFxHYWJlXFxGcmVlQ29kZUNhbXBcXEZyb250RW5kTGlicmFyaWVzXFxCdWlsZEFNYXJrZG93blByZXZpZXdlclxcY29tcG9uZW50c1xcaW5wdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbWFya2VkIGZyb20gJ21hcmtlZCc7XHJcblxyXG5mdW5jdGlvbiBpbnB1dChwcm9wcyl7XHJcblxyXG4gICAgY29uc3QgaHRtbFZhbHVlID0gYCMgT25lIGhhc2h0YWcgPSBIMVxcclxyXG5cclxuIyMgVHdvIGhhc2h0YWdzID0gSDJcXHJcclxuXHJcbiMjIyBUaHJlZSBoYXNodGFncyA9IEgzXFxyXHJcblxyXG4jIyMjIEZvdXIgaGFzaHRhZ3MgPSBINFxcclxyXG5cclxuIyMjIyMgRml2ZSBoYXNodGFncyA9IEg1XFxyXHJcblxyXG4jIyMjIyMgU2l4IGhhc2h0YWdzID0gSDZcXHJcclxuXHJcblxyXG5cclxuXHJcbldyYXAgdGV4dCBpbiBhc3Rlcmlza3MgPSAqSXRhbGljaXplZCBUZXh0KlxcclxyXG5cclxuV3JhcCB0ZXh0IGluIGRvdWJsZSBhc3Rlcmlza3MgPSAqKkJvbGQgVGV4dCoqXFxyXHJcblxyXG5cclxuXHJcblxyXG5UaHJlZSB1bmRlcnNjb3JlcyBvciBhc3Rlcmlza3Mgb3IgZGFzaGVzID0gXFw8aHJcXD4gKGhvcml6b250YWwgbGluZSlcXHJcclxuKk5vdGU6IHRoZSB0aHJlZSB1bmRlcnNjb3JlcyBvciBhc3Rlcmlza3Mgb3IgZGFzaGVzIG11c3QgYmUgdGhlIG9ubHkgY2hhcmFjdGVycyBvbiB0aGUgbGluZSBmb3IgdGhpcyB0byB3b3JrKlxyXG5cclxuX19fXHJcbioqKlxyXG4tLS1cclxuXHJcblxyXG5cclxuXHJcbldyYXAgdGV4dCBpbiBiYWNrdGlja3MgPSBcXGAgVGV4dCBjb2xvciBhbmQgYmFja2dyb3VuZCBjb2xvciBhcmUgc3dpdGNoZWQgXFxgXFxyXHJcblxyXG5XcmFwIHRleHQgaW4gc3F1YXJlIGJyYWNrZXRzIGZvbGxvd2VkIGJ5IHVybCB3cmFwcGVkIGluIHBhcmVudGhlc2VzID0gW1tsaW5rXSAodXJsKV0oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSHlwZXJsaW5rKVxcclxyXG4qTm90ZTogRG9uJ3QgcHV0IGFueSBzcGFjZSBiZXR3ZWVuIHRoZSBzcXVhcmUgYnJhY2tldHMgYW5kIHRoZSBwYXJlbnRoZXNlcypcXHJcclxuXHJcbj4gU3RhcnQgbGluZSB3aXRoIG9uZSBcXD4gY2hhcmFjdGVyID0gSW5kZW50ZWQgYmxvY2txdW90ZVxyXG5cclxuPiA+IFN0YXJ0IGxpbmUgd2l0aCB0d28gXFw+IGNoYXJhY3RlcnMgPSBEb3VibGUgaW5kZW50ZWQgYmxvY2txdW90ZVxyXG5cclxuXHJcbi0tLVxyXG5cclxuXHJcblxyXG4xLiBTdGFydCBlYWNoIGxpbmUgd2l0aCBhIG51bWJlciArIGEgcGVyaW9kICsgYSBzcGFjZSArIFlvdXIgdGV4dD0gTnVtYmVyZWQgTGlzdFxyXG4zLiBOdW1iZXIgKyBQZXJpb2QgPSAmIzUwOy4gWW91ciB0ZXh0XHJcbjQuICgmIzUyOy4pIFlvdSBjYW4gdXNlIGFueSBudW1iZXIgeW91IHdhbnRcclxuNC4gKCYjNTI7LikgTWFya2Rvd24gd2lsbCBzdGlsbCBzaG93IHRoZSBuZXh0IG51bWJlclxyXG4xMC4gKCYjNDk7JiM0ODsuKSBNYXJrZG93biB3aWxsIHN0aWxsIHNob3cgdGhlIG5leHQgc2VxdWVudGlhbCBudW1iZXJcclxuXHJcbi0gU3RhcnQgZWFjaCBsaW5lIHdpdGggYSBkYXNoIHBsdXMgYSBzcGFjZSA9IEJ1bGxldGVkIGxpc3RcclxuLSBTdGFydCBlYWNoIGxpbmUgd2l0aCBhIGRhc2ggcGx1cyBhIHNwYWNlID0gQnVsbGV0ZWQgbGlzdFxyXG4tIFN0YXJ0IGVhY2ggbGluZSB3aXRoIGEgZGFzaCBwbHVzIGEgc3BhY2UgPSBCdWxsZXRlZCBsaXN0XHJcbi0gU3RhcnQgZWFjaCBsaW5lIHdpdGggYSBkYXNoIHBsdXMgYSBzcGFjZSA9IEJ1bGxldGVkIGxpc3RcclxuXHJcblxyXG5cclxuLS0tXHJcblxyXG5cclxuXHJcbioqSU5QVVQ6KipcclxuXHJcbiYjOTY7ICYjOTY7ICYjOTY7IFxyXG52YXIgY29kZSA9IGZ1bmN0aW9uKCl7XHJcbj4gYWxlcnQoIFwiV3JhcCB5b3UgY29kZSBpbiBhIHBhaXIgb2YgdHJpcGxlIFxcciBiYWNrdGlja3MgdG8gY3JlYXRlIGEgbXVsdGktbGluZSBjb2RlIGJsb2NrXCIgKTsgXFxyXHJcbj4gLy9UbyBpbmRlbnQgbGluZXMgb2YgY29kZSB1c2UgdGFic1xyXG5cclxufTtcclxuXHJcbmNvZGUoKTtcclxuJiM5NjsgJiM5NjsgJiM5NjtcclxuXHJcbioqT1VUUFVUOioqXHJcblxyXG5cXGBcXGBcXGAgXHJcbnZhciBjb2RlID0gZnVuY3Rpb24oKXtcclxuICAgIGFsZXJ0KCBcIldyYXAgeW91IGNvZGUgaW4gYSBwYWlyIG9mIHRyaXBsZSBcclxuICAgIGJhY2t0aWNrcyB0byBjcmVhdGUgYSBtdWx0aS1saW5lIGNvZGUgYmxvY2tcIiApO1xyXG4gICAgLy9UbyBpbmRlbnQgbGluZXMgb2YgY29kZSB1c2UgdGFic1xyXG59O1xyXG5cclxuY29kZSgpO1xyXG5cXGBcXGBcXGBcclxuXHJcblxyXG5cclxuLS0tXHJcblxyXG5cclxuXHJcbioqSU5QVVQ6KipcclxuXHJcbiYjMzM7JiM5MTsgRGVzY3JpcHRpb24gb2YgdGhlIGltYWdlICYjOTM7JiM0MDsgdGhlIGltYWdlIFVSTCAmIzQxO1xyXG5cclxuKipPVVRQVVQ6KipcclxuXHJcbiFbUmVhY3QgTG9nbyB3LyBUZXh0XShodHRwczovL2dvby5nbC9VbXl5dGMpXHJcblxyXG5cclxuXHJcbi0tLVxyXG5cclxuXHJcblxyXG4qKklOUFVUOioqXHJcblxyXG4mIzEyNDsgVG8gQ3JlYXRlICYjMTI0OyBBIFRhYmxlOiAmIzEyNDsgV3JhcCBUZXh0ICYjMTI0OyBJbiBQaXBlIChvciB2ZXJ0aWNhbCBzbGFzaCkgc3ltYm9scyAmIzEyNDtcclxuJiMxMjQ7IC0gJiMxMjQ7LSAmIzEyNDsgLSAmIzEyNDsgLSAmIzEyNDtcclxuJiMxMjQ7IE9uIHRoZSAybmQgbGluZSAmIzEyNDsgVHlwZSBQaXBlICsgRGFzaCAmIzEyNDsgT25jZSBGb3IgRXZlcnkgJiMxMjQ7IFRhYmxlIENlbGwgaW4gdGhlIFJvdyAmIzEyNDtcclxuJiMxMjQ7IEZvciBFdmVyeSAmIzEyNDsgUm93ICYjMTI0OyAgV3JhcCBUZXh0ICYjMTI0OyBJbiBQaXBlcyAmIzEyNDtcclxuJiMxMjQ7IElmIFRoZXJlIEFyZSBMZXNzIENlbGxzICYjMTI0OyBUaGUgVGFibGUgV2lsbCBBdXRvbWF0aWNhbGx5ICYjMTI0OyBGaWxsIEluIEJsYW5rIENlbGxzICYjMTI0O1xyXG5cclxuKipPVVRQVVQ6KipcclxuXHJcbnwgVG8gQ3JlYXRlIHwgQSBUYWJsZTogfCBXcmFwIFRleHQgfCBJbiBQaXBlIChvciB2ZXJ0aWNhbCBzbGFzaCkgc3ltYm9scyB8XHJcbnwtIHwgLSB8IC18IC18XHJcbnwgT24gdGhlIDJuZCBsaW5lIHwgVHlwZSBQaXBlICsgRGFzaCB8IE9uY2UgRm9yIEV2ZXJ5IHwgVGFibGUgQ2VsbCBpbiB0aGUgUm93IHxcclxufCBGb3IgRXZlcnkgfCBSb3cgfCAgV3JhcCBUZXh0IHwgSW4gUGlwZXMgfFxyXG58IElmIFRoZXJlIEFyZSBMZXNzIENlbGxzIHwgVGhlIFRhYmxlIFdpbGwgQXV0b21hdGljYWxseSB8IEZpbGwgSW4gQmxhbmsgQ2VsbHMgfFxyXG5cclxuXHJcblxyXG5cclxuYDtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgaWQ9J2lucHV0Jz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXhSb3dcIj5cclxuICAgICAgICAgICAgICAgIDxoND48c3Ryb25nPklOUFVUOjwvc3Ryb25nPjwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8c2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24+U2VsZWN0IE1lPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgICAgaWQ9XCJlZGl0b3JcIlxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtodG1sVmFsdWV9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17cHJvcHMuY2hhbmdlfVxyXG4gICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAgLmZsZXhSb3cge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmZsZXhSb3cgPiBoNCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jayFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICNpbnB1dCA+IHRleHRhcmVhIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5wdXQ7Il19 */\n/*@ sourceURL=C:\\Users\\Gabe\\FreeCodeCamp\\FrontEndLibraries\\BuildAMarkdownPreviewer\\components\\input.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (input);

/***/ })

})
//# sourceMappingURL=index.js.18db7b0e32cf817b4439.hot-update.js.map