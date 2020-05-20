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
  "about markdown": "Markdown is a markup language that uses regular characters to style and format a document.  It is often used in documents such as .readme files to make them more visually appealing.\r\rTo see different examples of markdown effects you can use the dropdown menu to select which example you wish to see.  You can change the text in the input field to preview your own text and explore all the different combinations of effects you can achieve with markdown.\r\r*To read more about the history of markup languages and where the name comes from click [here](https://en.wikipedia.org/wiki/Markup_language).*",
  "blank editor": "",
  "h1": "# Start line with one hashtag followed by text",
  "h2": "## Start line with two hashtags followed by text",
  "h3": "### Start line with three hashtags followed by text",
  "h4": "#### Start line with four hashtags followed by text",
  "h5": "##### Start line with five hashtags followed by text",
  "h6": "###### Start line with six hashtags followed by text",
  "italic": "Wrap text in single *asterisks*",
  "bold": "Wrap text in double asterisks to make **Bold Text**",
  "strikethrough": "Wrap text in tilde symbols ( ~ ) to ~strikethrough~ ",
  "line break": "A line with three underscores with no spaces and no other characters\r\r**Result:**\r___\r\r\rA line with three asterisks with no spaces and no other characters\r\r**Result:**\r***\r\r\rA line with three dashes with no spaces and no other characters\r\r**Result:**\r\r---\r\r\r",
  "inline code": "With code that will fit onto a single line wrap the `code` in backticks\r\r\rIf you have backticks in your code you can `` `escape your backticks in your code` `` by wrapping the code with double backticks instead of single backticks\r\r\r*Make sure to leave a space between the double backticks and the single backtick.  If you don't the markdown editor will interpret this as a triple backtick which is used to mark a multi-line block of code*",
  "multi line code": "To create a multi-line block of code wrap the code in triple backticks\r\r\r**Result:**\r```\rfunction foo(){\r    alert( `foo` ); \r    //To indent lines of code use tabs\r};\r ``` ",
  "links": "To create a link, or [hyperlink](https://en.wikipedia.org/wiki/Hyperlink), wrap the text you want the user to see in square brackets followed by the URL in parentheses\r\r\r",
  "blockquote": ">To create a single indented blockquote start the line with a single greater-than character\r\r\r> >To create a double indented blockquote start the line with two greater than characters",
  "bulleted list": "- Start each line with a dash followed by a space to make a bulleted list\r- Start each line with a dash followed by a space to make a bulleted list\r- Start each line with a dash followed by a space to make a bulleted list\r- Start each line with a dash followed by a space to make a bulleted list\r\r - Or start each line with a space followed by a dash followed by a space to make a open bulleted list\r - Or start each line with a space followed by a dash followed by a space to make a open bulleted list",
  "numbered list": "1. Start each line with a number followed by a period followed by a space followed by text\r3. You can use any number you want\r4. Markdown will still show the next number\r10. Markdown will still show the next sequential number",
  "image": "Start line with an exclamation point followed by a description of the image wrapped in parentheses followed by the url wrapped in square brackets\r\r\r![React Logo](https://goo.gl/Umyytc)",
  "table": "| To make | a table | wrap | text in | pipes | (vertical slashes) |\r|-|-|-|-|-|-|\r| On the second | line place one | dash wrapped | in pipes | for every | table cell |\r| *The first two rows* | *must have the* | *same* | *number* | *of cells* |\r| For Every | Row |  Wrap Text | In Pipes |\r| If There Are Less Cells | The Table Will | Automatically | Fill In Blank Cells |\r| &nbsp; |\r||| You can | place |\r||| text at | the end | of a row|\r||| By placing | extra | pipes | before your text |"
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
          lineNumber: 50,
          columnNumber: 24
        }
      }, key));
    });
    return __jsx("div", {
      className: "jsx-417002664",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 13
      }
    }, __jsx("h1", {
      className: "jsx-417002664",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 17
      }
    }, "Markdown Previewer"), __jsx("div", {
      className: "jsx-417002664" + " " + "flexRow",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 21
      }
    }, __jsx("h4", {
      className: "jsx-417002664",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 25
      }
    }, __jsx("strong", {
      className: "jsx-417002664",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 29
      }
    }, "INPUT:")), __jsx("select", {
      id: "select",
      onChange: e => this.handleSelect(e),
      className: "jsx-417002664",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
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
        lineNumber: 64,
        columnNumber: 21
      }
    }), __jsx(_components_output__WEBPACK_IMPORTED_MODULE_4__["default"], {
      setMarkdown: this.getMarkdown(),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 21
      }
    }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "417002664",
      __self: this
    }, ".flexRow{width:822px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-webkit-justify-content:start;-ms-flex-pack:start;justify-content:start;margin:0 auto 12px auto;}.flexRow>h4{text-align:left;display:inline;margin:4px 10px 4px 0;}.flexRow>select{width:100%;}textarea{width:800px;height:200px;margin:auto;padding:10px;}div{width:800px;margin:0 auto;text-align:center;font-size:16px;font-family:'Lato';}h1{font-size:5em;font-weight:100;}h2{font-size:4em;font-weight:200;}h3{font-size:3em;font-weight:300;}table{border-collapse:collapse;}td,th{border:4px solid #343434;padding:5px;}code{width:auto;display:inline-block;background:#343434;color:white;line-height:150%;padding:10px;}hr{width:97%;margin-left:0!important;}ul,ol{width:95%;margin:25px 0;}p>img{width:200px;height:auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcR2FiZVxcRnJlZUNvZGVDYW1wXFxGcm9udEVuZExpYnJhcmllc1xcQnVpbGRBTWFya2Rvd25QcmV2aWV3ZXJcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzRXVDLEFBR3lDLEFBT0ksQUFLTCxBQUdDLEFBTUEsQUFPRSxBQUlBLEFBSUEsQUFJVyxBQUlBLEFBSWQsQUFRRCxBQUtBLEFBSUUsVUFSWSxBQUtWLENBakRsQixBQW9DeUIsQ0FoRFIsQUFlQSxBQU1DLEFBNENGLEVBckNJLEFBSUEsQUFJQSxFQTdCRCxRQXVEbkIsQUFJQSxDQWxEZ0IsQUF3QmhCLEFBSWdCLENBdEJNLElBT3RCLEFBSUEsQUFJQSxDQTdCMEIsQ0F5Q0gsRUFRdkIsR0F4Q2lCLEFBNEJqQixPQXRCbUIsTUFMbkIsQ0FnQ2dCLEVBekNoQixNQWV1QixJQTJCSCxlQTFCcEIsRUEyQmlCLE1BbkRNLE9Bb0R2Qiw4REFuRDBCLCtGQUNFLHdCQUM1QiIsImZpbGUiOiJDOlxcVXNlcnNcXEdhYmVcXEZyZWVDb2RlQ2FtcFxcRnJvbnRFbmRMaWJyYXJpZXNcXEJ1aWxkQU1hcmtkb3duUHJldmlld2VyXFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgbWFya2VkIGZyb20gJ21hcmtlZCc7XHJcbmltcG9ydCBET01QdXJpZnkgZnJvbSAnZG9tcHVyaWZ5JztcclxuXHJcbmltcG9ydCBPdXRwdXQgZnJvbSAnLi4vY29tcG9uZW50cy9vdXRwdXQnO1xyXG5pbXBvcnQgbWFya2Rvd24gZnJvbSAnLi4vY29tcG9uZW50cy9tYXJrZG93bic7XHJcblxyXG5jbGFzcyBIb21lIGV4dGVuZHMgQ29tcG9uZW50e1xyXG4gICAgc3RhdGUgPSB7XHJcbiAgICAgICAga2V5OiBcIk1hcmtkb3duXCIsXHJcbiAgICAgICAgaW5wdXQ6IFwiTWFya2Rvd24gaXMgYSBtYXJrdXAgbGFuZ3VhZ2UgdGhhdCB1c2VzIHJlZ3VsYXIgY2hhcmFjdGVycyB0byBzdHlsZSBhbmQgZm9ybWF0IGEgZG9jdW1lbnQuICBJdCBpcyBvZnRlbiB1c2VkIGluIGRvY3VtZW50cyBzdWNoIGFzIC5yZWFkbWUgZmlsZXMgdG8gbWFrZSB0aGVtIG1vcmUgdmlzdWFsbHkgYXBwZWFsaW5nLlxcclxcclRvIHNlZSBkaWZmZXJlbnQgZXhhbXBsZXMgb2YgbWFya2Rvd24gZWZmZWN0cyB5b3UgY2FuIHVzZSB0aGUgZHJvcGRvd24gbWVudSB0byBzZWxlY3Qgd2hpY2ggZXhhbXBsZSB5b3Ugd2lzaCB0byBzZWUuICBZb3UgY2FuIGNoYW5nZSB0aGUgdGV4dCBpbiB0aGUgaW5wdXQgZmllbGQgdG8gcHJldmlldyB5b3VyIG93biB0ZXh0IGFuZCBleHBsb3JlIGFsbCB0aGUgZGlmZmVyZW50IGNvbWJpbmF0aW9ucyBvZiBlZmZlY3RzIHlvdSBjYW4gYWNoaWV2ZSB3aXRoIG1hcmtkb3duLlxcclxccipUbyByZWFkIG1vcmUgYWJvdXQgdGhlIGhpc3Rvcnkgb2YgbWFya3VwIGxhbmd1YWdlcyBhbmQgd2hlcmUgdGhlIG5hbWUgY29tZXMgZnJvbSBjbGljayBbaGVyZV0oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvTWFya3VwX2xhbmd1YWdlKS4qXCJcclxuICAgIH07XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcclxuICAgICAgICAvL1JlbW92ZSBzcGFjZSBmcm9tIHVybCBkZW1vbnN0cmF0aW9uXHJcbiAgICAgICAgaWYoIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJhXCIpICl7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYVwiKS50ZXh0Q29udGVudDtcclxuICAgICAgICAgICAgY29uc3QgZWRpdGVkTGluayA9IGxpbmsuc3BsaXQoXCJcIikuZmlsdGVyKGU9PiBlIT0gXCIgXCIpLmpvaW4oXCJcIik7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJhXCIpLnRleHRDb250ZW50ID0gZWRpdGVkTGluaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlTGlzdGVuZXIoZXZlbnQpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgaW5wdXQ6IGV2ZW50XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TWFya2Rvd24gPSAoKSA9PntcclxuICAgICAgICBjb25zdCBtYXJrZG93biA9IG1hcmtlZCh0aGlzLnN0YXRlLmlucHV0LCB7c2FuaXRpemU6IHRydWUsIHRhYmxlczogdHJ1ZSwgYnJlYWtzOiB0cnVlfSwgKTtcclxuICAgICAgICByZXR1cm4ge19faHRtbDogbWFya2Rvd259O1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVNlbGVjdCA9IChlKT0+e1xyXG4gICAgICAgIGNvbnN0IGtleSA9IGUudGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgY29uc3QgbmV3SW5wdXQgPSBtYXJrZG93bltrZXldO1xyXG4gICAgICAgIGNvbnN0IGNsZWFuSW5wdXQgPSBET01QdXJpZnkuc2FuaXRpemUobmV3SW5wdXQpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBrZXk6IGtleSxcclxuICAgICAgICAgICAgaW5wdXQ6IG5ld0lucHV0XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aW5wdXQ6IGNsZWFuSW5wdXR9KTtcclxuICAgICB9O1xyXG4gICAgXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICBcclxuICAgICAgICBjb25zdCBpdGVtcyA9IFtdO1xyXG4gICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhtYXJrZG93bik7XHJcbiAgICAgICAga2V5cy5mb3JFYWNoKGtleT0+IHtcclxuICAgICAgICAgICAgaXRlbXMucHVzaCg8b3B0aW9uIGtleT17bWFya2Rvd25ba2V5XX0+e2tleX08L29wdGlvbj4pIFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgPlxyXG4gICAgICAgICAgICAgICAgPGgxPk1hcmtkb3duIFByZXZpZXdlcjwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4Um93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoND48c3Ryb25nPklOUFVUOjwvc3Ryb25nPjwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwic2VsZWN0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2U9PiB0aGlzLmhhbmRsZVNlbGVjdChlKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cImVkaXRvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmlucHV0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZT0+IHRoaXMuY2hhbmdlTGlzdGVuZXIoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxPdXRwdXQgc2V0TWFya2Rvd249e3RoaXMuZ2V0TWFya2Rvd24oKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZmxleFJvdyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogODIycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0byAxMnB4IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLmZsZXhSb3cgPiBoNCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA0cHggMTBweCA0cHggMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZmxleFJvdyA+IHNlbGVjdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0YXJlYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogODAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXYge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0xhdG8nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGgxIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNWVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDRlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaDMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogNHB4IHNvbGlkICMzNDM0MzQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29kZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMzNDM0MzQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDoxNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBociB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogOTclO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogOTUlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAyNXB4IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcCA+IGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7Il19 */\n/*@ sourceURL=C:\\\\Users\\\\Gabe\\\\FreeCodeCamp\\\\FrontEndLibraries\\\\BuildAMarkdownPreviewer\\\\pages\\\\index.js */"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tYXJrZG93bi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL291dHB1dC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJkb21wdXJpZnlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtYXJrZWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1qc3gvc3R5bGVcIiJdLCJuYW1lcyI6WyJtYXJrZG93biIsIm91dHB1dCIsInByb3BzIiwiY3NzVGVzdCIsInNldE1hcmtkb3duIiwiSG9tZSIsIkNvbXBvbmVudCIsImtleSIsImlucHV0IiwibWFya2VkIiwic3RhdGUiLCJzYW5pdGl6ZSIsInRhYmxlcyIsImJyZWFrcyIsIl9faHRtbCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm5ld0lucHV0IiwiY2xlYW5JbnB1dCIsIkRPTVB1cmlmeSIsInNldFN0YXRlIiwiY29tcG9uZW50RGlkTW91bnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJsaW5rIiwidGV4dENvbnRlbnQiLCJlZGl0ZWRMaW5rIiwic3BsaXQiLCJmaWx0ZXIiLCJqb2luIiwiY2hhbmdlTGlzdGVuZXIiLCJldmVudCIsInJlbmRlciIsIml0ZW1zIiwia2V5cyIsIk9iamVjdCIsImZvckVhY2giLCJwdXNoIiwiaGFuZGxlU2VsZWN0IiwiZ2V0TWFya2Rvd24iXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFD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QTtBQUFBO0FBQUEsT0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQUosQ0FESixFQUVJO0FBQ0EsUUFBRSxFQUFDLFFBREg7QUFFQSxjQUFRLEVBQUVRLENBQUMsSUFBRyxLQUFLd0IsWUFBTCxDQUFrQnhCLENBQWxCLENBRmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BR0ttQixLQUhMLENBRkosQ0FGUixFQVVRO0FBQ0ksUUFBRSxFQUFDLFFBRFA7QUFFSSxXQUFLLEVBQUUsS0FBS3hCLEtBQUwsQ0FBV0YsS0FGdEI7QUFHSSxjQUFRLEVBQUVPLENBQUMsSUFBRyxLQUFLZ0IsY0FBTCxDQUFvQmhCLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUE3QixDQUhsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFWUixFQWdCUSxNQUFDLDBEQUFEO0FBQVEsaUJBQVcsRUFBRSxLQUFLdUIsV0FBTCxFQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BaEJSO0FBQUE7QUFBQTtBQUFBLHlrVEFESjtBQTJGSDs7QUF4SXVCOztBQTJJYm5DLG1FQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEpBLHNDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDZDIiwiZmlsZSI6InN0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA0KTtcbiIsImNvbnN0IG1hcmtkb3duID0ge1xyXG4gICAgXCJhYm91dCBtYXJrZG93blwiOiBcIk1hcmtkb3duIGlzIGEgbWFya3VwIGxhbmd1YWdlIHRoYXQgdXNlcyByZWd1bGFyIGNoYXJhY3RlcnMgdG8gc3R5bGUgYW5kIGZvcm1hdCBhIGRvY3VtZW50LiAgSXQgaXMgb2Z0ZW4gdXNlZCBpbiBkb2N1bWVudHMgc3VjaCBhcyAucmVhZG1lIGZpbGVzIHRvIG1ha2UgdGhlbSBtb3JlIHZpc3VhbGx5IGFwcGVhbGluZy5cXHJcXHJUbyBzZWUgZGlmZmVyZW50IGV4YW1wbGVzIG9mIG1hcmtkb3duIGVmZmVjdHMgeW91IGNhbiB1c2UgdGhlIGRyb3Bkb3duIG1lbnUgdG8gc2VsZWN0IHdoaWNoIGV4YW1wbGUgeW91IHdpc2ggdG8gc2VlLiAgWW91IGNhbiBjaGFuZ2UgdGhlIHRleHQgaW4gdGhlIGlucHV0IGZpZWxkIHRvIHByZXZpZXcgeW91ciBvd24gdGV4dCBhbmQgZXhwbG9yZSBhbGwgdGhlIGRpZmZlcmVudCBjb21iaW5hdGlvbnMgb2YgZWZmZWN0cyB5b3UgY2FuIGFjaGlldmUgd2l0aCBtYXJrZG93bi5cXHJcXHIqVG8gcmVhZCBtb3JlIGFib3V0IHRoZSBoaXN0b3J5IG9mIG1hcmt1cCBsYW5ndWFnZXMgYW5kIHdoZXJlIHRoZSBuYW1lIGNvbWVzIGZyb20gY2xpY2sgW2hlcmVdKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL01hcmt1cF9sYW5ndWFnZSkuKlwiLFxyXG4gICAgXCJibGFuayBlZGl0b3JcIjogXCJcIixcclxuICAgIFwiaDFcIjogXCIjIFN0YXJ0IGxpbmUgd2l0aCBvbmUgaGFzaHRhZyBmb2xsb3dlZCBieSB0ZXh0XCIsXHJcbiAgICBcImgyXCI6IFwiIyMgU3RhcnQgbGluZSB3aXRoIHR3byBoYXNodGFncyBmb2xsb3dlZCBieSB0ZXh0XCIsXHJcbiAgICBcImgzXCI6IFwiIyMjIFN0YXJ0IGxpbmUgd2l0aCB0aHJlZSBoYXNodGFncyBmb2xsb3dlZCBieSB0ZXh0XCIsXHJcbiAgICBcImg0XCI6IFwiIyMjIyBTdGFydCBsaW5lIHdpdGggZm91ciBoYXNodGFncyBmb2xsb3dlZCBieSB0ZXh0XCIsXHJcbiAgICBcImg1XCI6IFwiIyMjIyMgU3RhcnQgbGluZSB3aXRoIGZpdmUgaGFzaHRhZ3MgZm9sbG93ZWQgYnkgdGV4dFwiLFxyXG4gICAgXCJoNlwiOiBcIiMjIyMjIyBTdGFydCBsaW5lIHdpdGggc2l4IGhhc2h0YWdzIGZvbGxvd2VkIGJ5IHRleHRcIixcclxuICAgIFwiaXRhbGljXCI6IFwiV3JhcCB0ZXh0IGluIHNpbmdsZSAqYXN0ZXJpc2tzKlwiLFxyXG4gICAgXCJib2xkXCI6IFwiV3JhcCB0ZXh0IGluIGRvdWJsZSBhc3Rlcmlza3MgdG8gbWFrZSAqKkJvbGQgVGV4dCoqXCIsXHJcbiAgICBcInN0cmlrZXRocm91Z2hcIjogXCJXcmFwIHRleHQgaW4gdGlsZGUgc3ltYm9scyAoIH4gKSB0byB+c3RyaWtldGhyb3VnaH4gXCIsXHJcbiAgICBcImxpbmUgYnJlYWtcIjogXCJBIGxpbmUgd2l0aCB0aHJlZSB1bmRlcnNjb3JlcyB3aXRoIG5vIHNwYWNlcyBhbmQgbm8gb3RoZXIgY2hhcmFjdGVyc1xcclxccioqUmVzdWx0OioqXFxyX19fXFxyXFxyXFxyQSBsaW5lIHdpdGggdGhyZWUgYXN0ZXJpc2tzIHdpdGggbm8gc3BhY2VzIGFuZCBubyBvdGhlciBjaGFyYWN0ZXJzXFxyXFxyKipSZXN1bHQ6KipcXHIqKipcXHJcXHJcXHJBIGxpbmUgd2l0aCB0aHJlZSBkYXNoZXMgd2l0aCBubyBzcGFjZXMgYW5kIG5vIG90aGVyIGNoYXJhY3RlcnNcXHJcXHIqKlJlc3VsdDoqKlxcclxcci0tLVxcclxcclxcclwiLFxyXG4gICAgXCJpbmxpbmUgY29kZVwiOiBcIldpdGggY29kZSB0aGF0IHdpbGwgZml0IG9udG8gYSBzaW5nbGUgbGluZSB3cmFwIHRoZSBgY29kZWAgaW4gYmFja3RpY2tzXFxyXFxyXFxySWYgeW91IGhhdmUgYmFja3RpY2tzIGluIHlvdXIgY29kZSB5b3UgY2FuIGBgIGBlc2NhcGUgeW91ciBiYWNrdGlja3MgaW4geW91ciBjb2RlYCBgYCBieSB3cmFwcGluZyB0aGUgY29kZSB3aXRoIGRvdWJsZSBiYWNrdGlja3MgaW5zdGVhZCBvZiBzaW5nbGUgYmFja3RpY2tzXFxyXFxyXFxyKk1ha2Ugc3VyZSB0byBsZWF2ZSBhIHNwYWNlIGJldHdlZW4gdGhlIGRvdWJsZSBiYWNrdGlja3MgYW5kIHRoZSBzaW5nbGUgYmFja3RpY2suICBJZiB5b3UgZG9uJ3QgdGhlIG1hcmtkb3duIGVkaXRvciB3aWxsIGludGVycHJldCB0aGlzIGFzIGEgdHJpcGxlIGJhY2t0aWNrIHdoaWNoIGlzIHVzZWQgdG8gbWFyayBhIG11bHRpLWxpbmUgYmxvY2sgb2YgY29kZSpcIixcclxuICAgIFwibXVsdGkgbGluZSBjb2RlXCI6IFwiVG8gY3JlYXRlIGEgbXVsdGktbGluZSBibG9jayBvZiBjb2RlIHdyYXAgdGhlIGNvZGUgaW4gdHJpcGxlIGJhY2t0aWNrc1xcclxcclxccioqUmVzdWx0OioqXFxyYGBgXFxyZnVuY3Rpb24gZm9vKCl7XFxyICAgIGFsZXJ0KCBgZm9vYCApOyBcXHIgICAgLy9UbyBpbmRlbnQgbGluZXMgb2YgY29kZSB1c2UgdGFic1xccn07XFxyIGBgYCBcIixcclxuICAgIFwibGlua3NcIjogXCJUbyBjcmVhdGUgYSBsaW5rLCBvciBbaHlwZXJsaW5rXShodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9IeXBlcmxpbmspLCB3cmFwIHRoZSB0ZXh0IHlvdSB3YW50IHRoZSB1c2VyIHRvIHNlZSBpbiBzcXVhcmUgYnJhY2tldHMgZm9sbG93ZWQgYnkgdGhlIFVSTCBpbiBwYXJlbnRoZXNlc1xcclxcclxcclwiLFxyXG4gICAgXCJibG9ja3F1b3RlXCI6IFwiPlRvIGNyZWF0ZSBhIHNpbmdsZSBpbmRlbnRlZCBibG9ja3F1b3RlIHN0YXJ0IHRoZSBsaW5lIHdpdGggYSBzaW5nbGUgZ3JlYXRlci10aGFuIGNoYXJhY3Rlclxcclxcclxccj4gPlRvIGNyZWF0ZSBhIGRvdWJsZSBpbmRlbnRlZCBibG9ja3F1b3RlIHN0YXJ0IHRoZSBsaW5lIHdpdGggdHdvIGdyZWF0ZXIgdGhhbiBjaGFyYWN0ZXJzXCIsXHJcbiAgICBcImJ1bGxldGVkIGxpc3RcIjogXCItIFN0YXJ0IGVhY2ggbGluZSB3aXRoIGEgZGFzaCBmb2xsb3dlZCBieSBhIHNwYWNlIHRvIG1ha2UgYSBidWxsZXRlZCBsaXN0XFxyLSBTdGFydCBlYWNoIGxpbmUgd2l0aCBhIGRhc2ggZm9sbG93ZWQgYnkgYSBzcGFjZSB0byBtYWtlIGEgYnVsbGV0ZWQgbGlzdFxcci0gU3RhcnQgZWFjaCBsaW5lIHdpdGggYSBkYXNoIGZvbGxvd2VkIGJ5IGEgc3BhY2UgdG8gbWFrZSBhIGJ1bGxldGVkIGxpc3RcXHItIFN0YXJ0IGVhY2ggbGluZSB3aXRoIGEgZGFzaCBmb2xsb3dlZCBieSBhIHNwYWNlIHRvIG1ha2UgYSBidWxsZXRlZCBsaXN0XFxyXFxyIC0gT3Igc3RhcnQgZWFjaCBsaW5lIHdpdGggYSBzcGFjZSBmb2xsb3dlZCBieSBhIGRhc2ggZm9sbG93ZWQgYnkgYSBzcGFjZSB0byBtYWtlIGEgb3BlbiBidWxsZXRlZCBsaXN0XFxyIC0gT3Igc3RhcnQgZWFjaCBsaW5lIHdpdGggYSBzcGFjZSBmb2xsb3dlZCBieSBhIGRhc2ggZm9sbG93ZWQgYnkgYSBzcGFjZSB0byBtYWtlIGEgb3BlbiBidWxsZXRlZCBsaXN0XCIsXHJcbiAgICBcIm51bWJlcmVkIGxpc3RcIjogXCIxLiBTdGFydCBlYWNoIGxpbmUgd2l0aCBhIG51bWJlciBmb2xsb3dlZCBieSBhIHBlcmlvZCBmb2xsb3dlZCBieSBhIHNwYWNlIGZvbGxvd2VkIGJ5IHRleHRcXHIzLiBZb3UgY2FuIHVzZSBhbnkgbnVtYmVyIHlvdSB3YW50XFxyNC4gTWFya2Rvd24gd2lsbCBzdGlsbCBzaG93IHRoZSBuZXh0IG51bWJlclxccjEwLiBNYXJrZG93biB3aWxsIHN0aWxsIHNob3cgdGhlIG5leHQgc2VxdWVudGlhbCBudW1iZXJcIixcclxuICAgIFwiaW1hZ2VcIjogXCJTdGFydCBsaW5lIHdpdGggYW4gZXhjbGFtYXRpb24gcG9pbnQgZm9sbG93ZWQgYnkgYSBkZXNjcmlwdGlvbiBvZiB0aGUgaW1hZ2Ugd3JhcHBlZCBpbiBwYXJlbnRoZXNlcyBmb2xsb3dlZCBieSB0aGUgdXJsIHdyYXBwZWQgaW4gc3F1YXJlIGJyYWNrZXRzXFxyXFxyXFxyIVtSZWFjdCBMb2dvXShodHRwczovL2dvby5nbC9VbXl5dGMpXCIsXHJcbiAgICBcInRhYmxlXCI6IFwifCBUbyBtYWtlIHwgYSB0YWJsZSB8IHdyYXAgfCB0ZXh0IGluIHwgcGlwZXMgfCAodmVydGljYWwgc2xhc2hlcykgfFxccnwtfC18LXwtfC18LXxcXHJ8IE9uIHRoZSBzZWNvbmQgfCBsaW5lIHBsYWNlIG9uZSB8IGRhc2ggd3JhcHBlZCB8IGluIHBpcGVzIHwgZm9yIGV2ZXJ5IHwgdGFibGUgY2VsbCB8XFxyfCAqVGhlIGZpcnN0IHR3byByb3dzKiB8ICptdXN0IGhhdmUgdGhlKiB8ICpzYW1lKiB8ICpudW1iZXIqIHwgKm9mIGNlbGxzKiB8XFxyfCBGb3IgRXZlcnkgfCBSb3cgfCAgV3JhcCBUZXh0IHwgSW4gUGlwZXMgfFxccnwgSWYgVGhlcmUgQXJlIExlc3MgQ2VsbHMgfCBUaGUgVGFibGUgV2lsbCB8IEF1dG9tYXRpY2FsbHkgfCBGaWxsIEluIEJsYW5rIENlbGxzIHxcXHJ8ICZuYnNwOyB8XFxyfHx8IFlvdSBjYW4gfCBwbGFjZSB8XFxyfHx8IHRleHQgYXQgfCB0aGUgZW5kIHwgb2YgYSByb3d8XFxyfHx8IEJ5IHBsYWNpbmcgfCBleHRyYSB8IHBpcGVzIHwgYmVmb3JlIHlvdXIgdGV4dCB8XCJcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWFya2Rvd247IiwiY29uc3Qgb3V0cHV0ID0gKHByb3BzLCB7Y3NzVGVzdH0pID0+IHtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgaWQ9XCJvdXRwdXRcIj5cclxuICAgICAgICAgICAgPGg0PjxzdHJvbmc+T1VUUFVUOjwvc3Ryb25nPjwvaDQ+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9J3ByZXZpZXcnIGNsYXNzTmFtZT17Y3NzVGVzdH0gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3Byb3BzLnNldE1hcmtkb3dufT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAjb3V0cHV0ID4gaDQge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxNnB4IDAgMTZweCAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgI3ByZXZpZXd7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDc2MnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvIDUwcHggYXV0bztcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG91dHB1dDsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgbWFya2VkIGZyb20gJ21hcmtlZCc7XHJcbmltcG9ydCBET01QdXJpZnkgZnJvbSAnZG9tcHVyaWZ5JztcclxuXHJcbmltcG9ydCBPdXRwdXQgZnJvbSAnLi4vY29tcG9uZW50cy9vdXRwdXQnO1xyXG5pbXBvcnQgbWFya2Rvd24gZnJvbSAnLi4vY29tcG9uZW50cy9tYXJrZG93bic7XHJcblxyXG5jbGFzcyBIb21lIGV4dGVuZHMgQ29tcG9uZW50e1xyXG4gICAgc3RhdGUgPSB7XHJcbiAgICAgICAga2V5OiBcIk1hcmtkb3duXCIsXHJcbiAgICAgICAgaW5wdXQ6IFwiTWFya2Rvd24gaXMgYSBtYXJrdXAgbGFuZ3VhZ2UgdGhhdCB1c2VzIHJlZ3VsYXIgY2hhcmFjdGVycyB0byBzdHlsZSBhbmQgZm9ybWF0IGEgZG9jdW1lbnQuICBJdCBpcyBvZnRlbiB1c2VkIGluIGRvY3VtZW50cyBzdWNoIGFzIC5yZWFkbWUgZmlsZXMgdG8gbWFrZSB0aGVtIG1vcmUgdmlzdWFsbHkgYXBwZWFsaW5nLlxcclxcclRvIHNlZSBkaWZmZXJlbnQgZXhhbXBsZXMgb2YgbWFya2Rvd24gZWZmZWN0cyB5b3UgY2FuIHVzZSB0aGUgZHJvcGRvd24gbWVudSB0byBzZWxlY3Qgd2hpY2ggZXhhbXBsZSB5b3Ugd2lzaCB0byBzZWUuICBZb3UgY2FuIGNoYW5nZSB0aGUgdGV4dCBpbiB0aGUgaW5wdXQgZmllbGQgdG8gcHJldmlldyB5b3VyIG93biB0ZXh0IGFuZCBleHBsb3JlIGFsbCB0aGUgZGlmZmVyZW50IGNvbWJpbmF0aW9ucyBvZiBlZmZlY3RzIHlvdSBjYW4gYWNoaWV2ZSB3aXRoIG1hcmtkb3duLlxcclxccipUbyByZWFkIG1vcmUgYWJvdXQgdGhlIGhpc3Rvcnkgb2YgbWFya3VwIGxhbmd1YWdlcyBhbmQgd2hlcmUgdGhlIG5hbWUgY29tZXMgZnJvbSBjbGljayBbaGVyZV0oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvTWFya3VwX2xhbmd1YWdlKS4qXCJcclxuICAgIH07XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcclxuICAgICAgICAvL1JlbW92ZSBzcGFjZSBmcm9tIHVybCBkZW1vbnN0cmF0aW9uXHJcbiAgICAgICAgaWYoIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJhXCIpICl7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYVwiKS50ZXh0Q29udGVudDtcclxuICAgICAgICAgICAgY29uc3QgZWRpdGVkTGluayA9IGxpbmsuc3BsaXQoXCJcIikuZmlsdGVyKGU9PiBlIT0gXCIgXCIpLmpvaW4oXCJcIik7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJhXCIpLnRleHRDb250ZW50ID0gZWRpdGVkTGluaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlTGlzdGVuZXIoZXZlbnQpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgaW5wdXQ6IGV2ZW50XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TWFya2Rvd24gPSAoKSA9PntcclxuICAgICAgICBjb25zdCBtYXJrZG93biA9IG1hcmtlZCh0aGlzLnN0YXRlLmlucHV0LCB7c2FuaXRpemU6IHRydWUsIHRhYmxlczogdHJ1ZSwgYnJlYWtzOiB0cnVlfSwgKTtcclxuICAgICAgICByZXR1cm4ge19faHRtbDogbWFya2Rvd259O1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVNlbGVjdCA9IChlKT0+e1xyXG4gICAgICAgIGNvbnN0IGtleSA9IGUudGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgY29uc3QgbmV3SW5wdXQgPSBtYXJrZG93bltrZXldO1xyXG4gICAgICAgIGNvbnN0IGNsZWFuSW5wdXQgPSBET01QdXJpZnkuc2FuaXRpemUobmV3SW5wdXQpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBrZXk6IGtleSxcclxuICAgICAgICAgICAgaW5wdXQ6IG5ld0lucHV0XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aW5wdXQ6IGNsZWFuSW5wdXR9KTtcclxuICAgICB9O1xyXG4gICAgXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICBcclxuICAgICAgICBjb25zdCBpdGVtcyA9IFtdO1xyXG4gICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhtYXJrZG93bik7XHJcbiAgICAgICAga2V5cy5mb3JFYWNoKGtleT0+IHtcclxuICAgICAgICAgICAgaXRlbXMucHVzaCg8b3B0aW9uIGtleT17bWFya2Rvd25ba2V5XX0+e2tleX08L29wdGlvbj4pIFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgPlxyXG4gICAgICAgICAgICAgICAgPGgxPk1hcmtkb3duIFByZXZpZXdlcjwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4Um93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoND48c3Ryb25nPklOUFVUOjwvc3Ryb25nPjwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwic2VsZWN0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2U9PiB0aGlzLmhhbmRsZVNlbGVjdChlKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cImVkaXRvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmlucHV0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZT0+IHRoaXMuY2hhbmdlTGlzdGVuZXIoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxPdXRwdXQgc2V0TWFya2Rvd249e3RoaXMuZ2V0TWFya2Rvd24oKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZmxleFJvdyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogODIycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0byAxMnB4IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLmZsZXhSb3cgPiBoNCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA0cHggMTBweCA0cHggMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZmxleFJvdyA+IHNlbGVjdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0YXJlYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogODAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXYge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0xhdG8nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGgxIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNWVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDRlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaDMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogNHB4IHNvbGlkICMzNDM0MzQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29kZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMzNDM0MzQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDoxNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBociB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogOTclO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogOTUlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAyNXB4IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcCA+IGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZG9tcHVyaWZ5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1hcmtlZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtanN4L3N0eWxlXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=