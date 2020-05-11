module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/markdown.js":
/*!********************************!*\
  !*** ./components/markdown.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const markdown = {
  markdown: "Markdown is a markup language that uses regular characters to style and format a document.  It is often used in documents such as .readme files to make them more visually appealing.\r\rTo see different examples of markdown effects you can use the dropdown menu to select which example you wish to see.  You can change the text in the input field to preview your own text and explore all the different combinations of effects you can achieve with markdown.\r\r*To read more about the history of markup languages and where the name comes from click [here](https://en.wikipedia.org/wiki/Markup_language).*",
  h1: "# Start line with one hashtag followed by text",
  h2: "## Start line with two hashtags followed by text",
  h3: "### Start line with three hashtags followed by text",
  h4: "#### Start line with four hashtags followed by text",
  h5: "##### Start line with five hashtags followed by text",
  h6: "###### Start line with six hashtags followed by text",
  italic: "Wrap text in single *asterisks*",
  bold: "Wrap text in double asterisks to make **Bold Text**",
  strikethrough: "Wrap text in tilde symbols ( ~ ) to ~strikethrough~ ",
  linebreak: "A line with three underscores with no spaces and no other characters\r\r**Result:**\r___\r\r\rA line with three asterisks with no spaces and no other characters\r\r**Result:**\r***\r\r\rA line with three dashes with no spaces and no other characters\r\r**Result:**\r\r---\r\r\r",
  inlineCode: "With code that will fit onto a single line wrap the `code` in backticks\r\r\rIf you have backticks in your code you can `` `escape your backticks in your code` `` by wrapping the code with double backticks instead of single backticks\r\r\r*Make sure to leave a space between the double backticks and the single backtick.  If you don't the markdown editor will interpret this as a triple backtick which is used to mark a multi-line block of code*",
  multiLineCode: "To create a multi-line block of code wrap the code in triple backticks\r\r\r**Result:**\r```\rfunction foo(){\r    alert( `foo` ); \r    //To indent lines of code use tabs\r};\r ``` ",
  links: "To create a link, or [hyperlink](https://en.wikipedia.org/wiki/Hyperlink), wrap the text you want the user to see in square brackets followed by the URL in parentheses\r\r\r",
  blockquote: ">To create a single indented blockquote start the line with a single greater-than character\r\r\r> >To create a double indented blockquote start the line with two greater than characters",
  bulletedList: "- Start each line with a dash followed by a space to make a bulleted list\r- Start each line with a dash followed by a space to make a bulleted list\r- Start each line with a dash followed by a space to make a bulleted list\r- Start each line with a dash followed by a space to make a bulleted list\r\r - Or start each line with a space followed by a dash followed by a space to make a open bulleted list\r - Or start each line with a space followed by a dash followed by a space to make a open bulleted list",
  numberedList: "1. Start each line with a number followed by a period followed by a space followed by text\r3. You can use any number you want\r4. Markdown will still show the next number\r10. Markdown will still show the next sequential number",
  image: "Start line with an exclamation point followed by a description of the image wrapped in parentheses followed by the url wrapped in square brackets\r\r\r![React Logo](https://goo.gl/Umyytc)",
  table: "| To make | a table | wrap | text in | pipes | (vertical slashes) |\r|-|-|-|-|-|-|\r| On the second | line place one | dash wrapped | in pipes | for every | table cell |\r| *The first two rows* | *must have the* | *same* | *number* | *of cells* |\r| For Every | Row |  Wrap Text | In Pipes |\r| If There Are Less Cells | The Table Will | Automatically | Fill In Blank Cells |\r| &nbsp; |\r||| You can | place |\r||| text at | the end | of a row|\r||| By placing | extra | pipes | before your text |"
};
/* harmony default export */ __webpack_exports__["default"] = (markdown);

/***/ }),

/***/ "./components/output.js":
/*!******************************!*\
  !*** ./components/output.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Gabe\\FreeCodeCamp\\FrontEndLibraries\\BuildAMarkdownPreviewer\\components\\output.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const output = (props, {
  cssTest
}) => {
  return __jsx("div", {
    id: "output",
    className: "jsx-3741259759",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 9
    }
  }, __jsx("h4", {
    className: "jsx-3741259759",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 13
    }
  }, __jsx("strong", {
    className: "jsx-3741259759",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 17
    }
  }, "OUTPUT:")), __jsx("div", {
    id: "preview",
    dangerouslySetInnerHTML: props.setMarkdown,
    className: "jsx-3741259759" + " " + (cssTest || ""),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3741259759",
    __self: undefined
  }, "#output.jsx-3741259759>h4.jsx-3741259759{text-align:left;margin:16px 0 16px 0;}#preview.jsx-3741259759{width:762px;margin:0 auto 50px auto;border:5px solid black;text-align:left;padding:25px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcR2FiZVxcRnJlZUNvZGVDYW1wXFxGcm9udEVuZExpYnJhcmllc1xcQnVpbGRBTWFya2Rvd25QcmV2aWV3ZXJcXGNvbXBvbmVudHNcXG91dHB1dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPNEIsQUFHcUMsQUFJSixZQUNZLElBSkgsb0JBS0UsQ0FKM0Isc0JBS29CLGdCQUNILGFBQ2pCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcR2FiZVxcRnJlZUNvZGVDYW1wXFxGcm9udEVuZExpYnJhcmllc1xcQnVpbGRBTWFya2Rvd25QcmV2aWV3ZXJcXGNvbXBvbmVudHNcXG91dHB1dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG91dHB1dCA9IChwcm9wcywge2Nzc1Rlc3R9KSA9PiB7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGlkPVwib3V0cHV0XCI+XHJcbiAgICAgICAgICAgIDxoND48c3Ryb25nPk9VVFBVVDo8L3N0cm9uZz48L2g0PlxyXG4gICAgICAgICAgICA8ZGl2IGlkPSdwcmV2aWV3JyBjbGFzc05hbWU9e2Nzc1Rlc3R9IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXtwcm9wcy5zZXRNYXJrZG93bn0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgI291dHB1dCA+IGg0IHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMTZweCAwIDE2cHggMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICNwcmV2aWV3e1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3NjJweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0byA1MHB4IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBvdXRwdXQ7Il19 */\n/*@ sourceURL=C:\\\\Users\\\\Gabe\\\\FreeCodeCamp\\\\FrontEndLibraries\\\\BuildAMarkdownPreviewer\\\\components\\\\output.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (output);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! marked */ "marked");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(marked__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var dompurify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dompurify */ "dompurify");
/* harmony import */ var dompurify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dompurify__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_output__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/output */ "./components/output.js");
/* harmony import */ var _components_markdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/markdown */ "./components/markdown.js");
var _jsxFileName = "C:\\Users\\Gabe\\FreeCodeCamp\\FrontEndLibraries\\BuildAMarkdownPreviewer\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






/*
Give "Markdown" in page header a tooltip with a brief explanation of what markdown is.  
*/

class Home extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      key: "Markdown",
      input: "Markdown is a markup language that uses regular characters to style and format a document.  It is often used in documents such as .readme files to make them more visually appealing.\r\rTo see different examples of markdown effects you can use the dropdown menu to select which example you wish to see.  You can change the text in the input field to preview your own text and explore all the different combinations of effects you can achieve with markdown.\r\r*To read more about the history of markup languages and where the name comes from click [here](https://en.wikipedia.org/wiki/Markup_language).*"
    });

    _defineProperty(this, "getMarkdown", () => {
      const markdown = marked__WEBPACK_IMPORTED_MODULE_2___default()(this.state.input, {
        sanitize: true,
        tables: true,
        breaks: true
      });
      return {
        __html: markdown
      };
    });

    _defineProperty(this, "handleSelect", e => {
      const key = e.target.value;
      const newInput = _components_markdown__WEBPACK_IMPORTED_MODULE_5__["default"][key];
      const cleanInput = dompurify__WEBPACK_IMPORTED_MODULE_3___default.a.sanitize(newInput);
      this.setState({
        key: key,
        input: newInput
      });
      this.setState({
        input: cleanInput
      });
    });
  }

  componentDidMount() {
    //Remove space from url demonstration
    if (document.querySelector("a")) {
      const link = document.querySelector("a").textContent;
      const editedLink = link.split("").filter(e => e != " ").join("");
      document.querySelector("a").textContent = editedLink;
    }
  }

  changeListener(event) {
    this.setState({
      input: event
    });
  }

  render() {
    const items = [];
    const keys = Object.keys(_components_markdown__WEBPACK_IMPORTED_MODULE_5__["default"]);
    keys.forEach(key => {
      items.push(__jsx("option", {
        key: _components_markdown__WEBPACK_IMPORTED_MODULE_5__["default"][key],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 24
        }
      }, key));
    });
    return __jsx("div", {
      className: "jsx-417002664",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 13
      }
    }, __jsx("h1", {
      className: "jsx-417002664",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 17
      }
    }, "Markdown Previewer"), __jsx("div", {
      className: "jsx-417002664" + " " + "flexRow",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 21
      }
    }, __jsx("h4", {
      className: "jsx-417002664",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 25
      }
    }, __jsx("strong", {
      className: "jsx-417002664",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 29
      }
    }, "INPUT:")), __jsx("select", {
      id: "select",
      onChange: e => this.handleSelect(e),
      className: "jsx-417002664",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 25
      }
    }, items)), __jsx("textarea", {
      id: "editor",
      value: this.state.input,
      onChange: e => this.changeListener(e.target.value),
      className: "jsx-417002664",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 21
      }
    }), __jsx(_components_output__WEBPACK_IMPORTED_MODULE_4__["default"], {
      setMarkdown: this.getMarkdown(),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 21
      }
    }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "417002664",
      __self: this
    }, ".flexRow{width:822px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-webkit-justify-content:start;-ms-flex-pack:start;justify-content:start;margin:0 auto 12px auto;}.flexRow>h4{text-align:left;display:inline;margin:4px 10px 4px 0;}.flexRow>select{width:100%;}textarea{width:800px;height:200px;margin:auto;padding:10px;}div{width:800px;margin:0 auto;text-align:center;font-size:16px;font-family:'Lato';}h1{font-size:5em;font-weight:100;}h2{font-size:4em;font-weight:200;}h3{font-size:3em;font-weight:300;}table{border-collapse:collapse;}td,th{border:4px solid #343434;padding:5px;}code{width:auto;display:inline-block;background:#343434;color:white;line-height:150%;padding:10px;}hr{width:97%;margin-left:0!important;}ul,ol{width:95%;margin:25px 0;}p>img{width:200px;height:auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcR2FiZVxcRnJlZUNvZGVDYW1wXFxGcm9udEVuZExpYnJhcmllc1xcQnVpbGRBTWFya2Rvd25QcmV2aWV3ZXJcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3RXVDLEFBR3lDLEFBT0ksQUFLTCxBQUdDLEFBTUEsQUFPRSxBQUlBLEFBSUEsQUFJVyxBQUlBLEFBSWQsQUFRRCxBQUtBLEFBSUUsVUFSWSxBQUtWLENBakRsQixBQW9DeUIsQ0FoRFIsQUFlQSxBQU1DLEFBNENGLEVBckNJLEFBSUEsQUFJQSxFQTdCRCxRQXVEbkIsQUFJQSxDQWxEZ0IsQUF3QmhCLEFBSWdCLENBdEJNLElBT3RCLEFBSUEsQUFJQSxDQTdCMEIsQ0F5Q0gsRUFRdkIsR0F4Q2lCLEFBNEJqQixPQXRCbUIsTUFMbkIsQ0FnQ2dCLEVBekNoQixNQWV1QixJQTJCSCxlQTFCcEIsRUEyQmlCLE1BbkRNLE9Bb0R2Qiw4REFuRDBCLCtGQUNFLHdCQUM1QiIsImZpbGUiOiJDOlxcVXNlcnNcXEdhYmVcXEZyZWVDb2RlQ2FtcFxcRnJvbnRFbmRMaWJyYXJpZXNcXEJ1aWxkQU1hcmtkb3duUHJldmlld2VyXFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgbWFya2VkIGZyb20gJ21hcmtlZCc7XHJcbmltcG9ydCBET01QdXJpZnkgZnJvbSAnZG9tcHVyaWZ5JztcclxuXHJcbmltcG9ydCBPdXRwdXQgZnJvbSAnLi4vY29tcG9uZW50cy9vdXRwdXQnO1xyXG5pbXBvcnQgbWFya2Rvd24gZnJvbSAnLi4vY29tcG9uZW50cy9tYXJrZG93bic7XHJcbi8qXHJcbkdpdmUgXCJNYXJrZG93blwiIGluIHBhZ2UgaGVhZGVyIGEgdG9vbHRpcCB3aXRoIGEgYnJpZWYgZXhwbGFuYXRpb24gb2Ygd2hhdCBtYXJrZG93biBpcy4gIFxyXG4qL1xyXG5jbGFzcyBIb21lIGV4dGVuZHMgQ29tcG9uZW50e1xyXG4gICAgc3RhdGUgPSB7XHJcbiAgICAgICAga2V5OiBcIk1hcmtkb3duXCIsXHJcbiAgICAgICAgaW5wdXQ6IFwiTWFya2Rvd24gaXMgYSBtYXJrdXAgbGFuZ3VhZ2UgdGhhdCB1c2VzIHJlZ3VsYXIgY2hhcmFjdGVycyB0byBzdHlsZSBhbmQgZm9ybWF0IGEgZG9jdW1lbnQuICBJdCBpcyBvZnRlbiB1c2VkIGluIGRvY3VtZW50cyBzdWNoIGFzIC5yZWFkbWUgZmlsZXMgdG8gbWFrZSB0aGVtIG1vcmUgdmlzdWFsbHkgYXBwZWFsaW5nLlxcclxcclRvIHNlZSBkaWZmZXJlbnQgZXhhbXBsZXMgb2YgbWFya2Rvd24gZWZmZWN0cyB5b3UgY2FuIHVzZSB0aGUgZHJvcGRvd24gbWVudSB0byBzZWxlY3Qgd2hpY2ggZXhhbXBsZSB5b3Ugd2lzaCB0byBzZWUuICBZb3UgY2FuIGNoYW5nZSB0aGUgdGV4dCBpbiB0aGUgaW5wdXQgZmllbGQgdG8gcHJldmlldyB5b3VyIG93biB0ZXh0IGFuZCBleHBsb3JlIGFsbCB0aGUgZGlmZmVyZW50IGNvbWJpbmF0aW9ucyBvZiBlZmZlY3RzIHlvdSBjYW4gYWNoaWV2ZSB3aXRoIG1hcmtkb3duLlxcclxccipUbyByZWFkIG1vcmUgYWJvdXQgdGhlIGhpc3Rvcnkgb2YgbWFya3VwIGxhbmd1YWdlcyBhbmQgd2hlcmUgdGhlIG5hbWUgY29tZXMgZnJvbSBjbGljayBbaGVyZV0oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvTWFya3VwX2xhbmd1YWdlKS4qXCJcclxuICAgIH07XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcclxuICAgICAgICAvL1JlbW92ZSBzcGFjZSBmcm9tIHVybCBkZW1vbnN0cmF0aW9uXHJcbiAgICAgICAgaWYoIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJhXCIpICl7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYVwiKS50ZXh0Q29udGVudDtcclxuICAgICAgICAgICAgY29uc3QgZWRpdGVkTGluayA9IGxpbmsuc3BsaXQoXCJcIikuZmlsdGVyKGU9PiBlIT0gXCIgXCIpLmpvaW4oXCJcIik7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJhXCIpLnRleHRDb250ZW50ID0gZWRpdGVkTGluaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlTGlzdGVuZXIoZXZlbnQpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgaW5wdXQ6IGV2ZW50XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TWFya2Rvd24gPSAoKSA9PntcclxuICAgICAgICBjb25zdCBtYXJrZG93biA9IG1hcmtlZCh0aGlzLnN0YXRlLmlucHV0LCB7c2FuaXRpemU6IHRydWUsIHRhYmxlczogdHJ1ZSwgYnJlYWtzOiB0cnVlfSwgKTtcclxuICAgICAgICByZXR1cm4ge19faHRtbDogbWFya2Rvd259O1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVNlbGVjdCA9IChlKT0+e1xyXG4gICAgICAgIGNvbnN0IGtleSA9IGUudGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgY29uc3QgbmV3SW5wdXQgPSBtYXJrZG93bltrZXldO1xyXG4gICAgICAgIGNvbnN0IGNsZWFuSW5wdXQgPSBET01QdXJpZnkuc2FuaXRpemUobmV3SW5wdXQpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBrZXk6IGtleSxcclxuICAgICAgICAgICAgaW5wdXQ6IG5ld0lucHV0XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aW5wdXQ6IGNsZWFuSW5wdXR9KTtcclxuICAgICB9O1xyXG4gICAgXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICBcclxuICAgICAgICBjb25zdCBpdGVtcyA9IFtdO1xyXG4gICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhtYXJrZG93bik7XHJcbiAgICAgICAga2V5cy5mb3JFYWNoKGtleT0+IHtcclxuICAgICAgICAgICAgaXRlbXMucHVzaCg8b3B0aW9uIGtleT17bWFya2Rvd25ba2V5XX0+e2tleX08L29wdGlvbj4pIFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgPlxyXG4gICAgICAgICAgICAgICAgPGgxPk1hcmtkb3duIFByZXZpZXdlcjwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4Um93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoND48c3Ryb25nPklOUFVUOjwvc3Ryb25nPjwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwic2VsZWN0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2U9PiB0aGlzLmhhbmRsZVNlbGVjdChlKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cImVkaXRvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmlucHV0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZT0+IHRoaXMuY2hhbmdlTGlzdGVuZXIoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxPdXRwdXQgc2V0TWFya2Rvd249e3RoaXMuZ2V0TWFya2Rvd24oKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZmxleFJvdyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogODIycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0byAxMnB4IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLmZsZXhSb3cgPiBoNCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA0cHggMTBweCA0cHggMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZmxleFJvdyA+IHNlbGVjdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0YXJlYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogODAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXYge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0xhdG8nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGgxIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNWVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDRlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaDMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogNHB4IHNvbGlkICMzNDM0MzQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29kZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMzNDM0MzQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDoxNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBociB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogOTclO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogOTUlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAyNXB4IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcCA+IGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7Il19 */\n/*@ sourceURL=C:\\\\Users\\\\Gabe\\\\FreeCodeCamp\\\\FrontEndLibraries\\\\BuildAMarkdownPreviewer\\\\pages\\\\index.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Gabe\FreeCodeCamp\FrontEndLibraries\BuildAMarkdownPreviewer\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "dompurify":
/*!****************************!*\
  !*** external "dompurify" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("dompurify");

/***/ }),

/***/ "marked":
/*!*************************!*\
  !*** external "marked" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("marked");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map