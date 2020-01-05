webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! marked */ "./node_modules/marked/lib/marked.js");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(marked__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_output__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/output */ "./components/output.js");
/* harmony import */ var _components_markdown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/markdown */ "./components/markdown.js");








var _jsxFileName = "C:\\Users\\Gabe\\FreeCodeCamp\\FrontEndLibraries\\BuildAMarkdownPreviewer\\pages\\index.js";





/*
Give "Markdown" in page header a tooltip with a brief explanation of what markdown is.  
*/

var Home =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Home, _Component);

  function Home() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Home);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Home)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "state", {
      key: "h1",
      input: "# One hashtag = H1"
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "getMarkdown", function () {
      var markdown = marked__WEBPACK_IMPORTED_MODULE_10___default()(_this.state.input, {
        sanitize: true,
        tables: true,
        breaks: true
      });
      return {
        __html: markdown
      };
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleSelect", function (e) {
      var key = e.target.value;
      var newInput = _components_markdown__WEBPACK_IMPORTED_MODULE_12__["default"][key];

      _this.setState({
        key: key,
        input: newInput
      });

      _this.setState({
        input: newInput
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Home, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      //Remove space from url demonstration
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
        input: event
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var items = [];

      var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(_components_markdown__WEBPACK_IMPORTED_MODULE_12__["default"]);

      keys.forEach(function (key) {
        var newKey = key.split("").filter(function (e) {
          return e === "_" ? " " : e;
        }).join("");
        items.push(react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
          key: _components_markdown__WEBPACK_IMPORTED_MODULE_12__["default"][key],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          },
          __self: this
        }, key));
      });
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "jsx-417002664",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h1", {
        className: "jsx-417002664",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, "Markdown Previewer"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "jsx-417002664" + " " + "flexRow",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h4", {
        className: "jsx-417002664",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("strong", {
        className: "jsx-417002664",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, "INPUT:")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("select", {
        id: "select",
        onChange: function onChange(e) {
          return _this2.handleSelect(e);
        },
        className: "jsx-417002664",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, items)), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("textarea", {
        id: "editor",
        value: this.state.input,
        onChange: function onChange(e) {
          return _this2.changeListener(e.target.value);
        },
        className: "jsx-417002664",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_output__WEBPACK_IMPORTED_MODULE_11__["default"], {
        setMarkdown: this.getMarkdown(),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
        id: "417002664",
        __self: this
      }, ".flexRow{width:822px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-webkit-justify-content:start;-ms-flex-pack:start;justify-content:start;margin:0 auto 12px auto;}.flexRow>h4{text-align:left;display:inline;margin:4px 10px 4px 0;}.flexRow>select{width:100%;}textarea{width:800px;height:200px;margin:auto;padding:10px;}div{width:800px;margin:0 auto;text-align:center;font-size:16px;font-family:'Lato';}h1{font-size:5em;font-weight:100;}h2{font-size:4em;font-weight:200;}h3{font-size:3em;font-weight:300;}table{border-collapse:collapse;}td,th{border:4px solid #343434;padding:5px;}code{width:auto;display:inline-block;background:#343434;color:white;line-height:150%;padding:10px;}hr{width:97%;margin-left:0!important;}ul,ol{width:95%;margin:25px 0;}p>img{width:200px;height:auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcR2FiZVxcRnJlZUNvZGVDYW1wXFxGcm9udEVuZExpYnJhcmllc1xcQnVpbGRBTWFya2Rvd25QcmV2aWV3ZXJcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3RXVDLEFBR3lDLEFBT0ksQUFLTCxBQUdDLEFBTUEsQUFPRSxBQUlBLEFBSUEsQUFJVyxBQUlBLEFBSWQsQUFRRCxBQUtBLEFBSUUsVUFSWSxBQUtWLENBakRsQixBQW9DeUIsQ0FoRFIsQUFlQSxBQU1DLEFBNENGLEVBckNJLEFBSUEsQUFJQSxFQTdCRCxRQXVEbkIsQUFJQSxDQWxEZ0IsQUF3QmhCLEFBSWdCLENBdEJNLElBT3RCLEFBSUEsQUFJQSxDQTdCMEIsQ0F5Q0gsRUFRdkIsR0F4Q2lCLEFBNEJqQixPQXRCbUIsTUFMbkIsQ0FnQ2dCLEVBekNoQixNQWV1QixJQTJCSCxlQTFCcEIsRUEyQmlCLE1BbkRNLE9Bb0R2Qiw4REFuRDBCLCtGQUNFLHdCQUM1QiIsImZpbGUiOiJDOlxcVXNlcnNcXEdhYmVcXEZyZWVDb2RlQ2FtcFxcRnJvbnRFbmRMaWJyYXJpZXNcXEJ1aWxkQU1hcmtkb3duUHJldmlld2VyXFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgbWFya2VkIGZyb20gJ21hcmtlZCc7XHJcblxyXG5pbXBvcnQgT3V0cHV0IGZyb20gJy4uL2NvbXBvbmVudHMvb3V0cHV0JztcclxuaW1wb3J0IG1hcmtkb3duIGZyb20gJy4uL2NvbXBvbmVudHMvbWFya2Rvd24nO1xyXG4vKlxyXG5HaXZlIFwiTWFya2Rvd25cIiBpbiBwYWdlIGhlYWRlciBhIHRvb2x0aXAgd2l0aCBhIGJyaWVmIGV4cGxhbmF0aW9uIG9mIHdoYXQgbWFya2Rvd24gaXMuICBcclxuKi9cclxuY2xhc3MgSG9tZSBleHRlbmRzIENvbXBvbmVudHtcclxuICAgIHN0YXRlID0ge1xyXG4gICAgICAgIGtleTogYGgxYCxcclxuICAgICAgICBpbnB1dDogYCMgT25lIGhhc2h0YWcgPSBIMWBcclxuICAgIH07XHJcblxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XHJcbiAgICAgICAgLy9SZW1vdmUgc3BhY2UgZnJvbSB1cmwgZGVtb25zdHJhdGlvblxyXG4gICAgICAgIGlmKCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYVwiKSApe1xyXG4gICAgICAgICAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImFcIikudGV4dENvbnRlbnQ7XHJcbiAgICAgICAgICAgIGNvbnN0IGVkaXRlZExpbmsgPSBsaW5rLnNwbGl0KFwiXCIpLmZpbHRlcihlPT4gZSE9IFwiIFwiKS5qb2luKFwiXCIpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYVwiKS50ZXh0Q29udGVudCA9IGVkaXRlZExpbms7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZUxpc3RlbmVyKGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGlucHV0OiBldmVudFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGdldE1hcmtkb3duID0gKCkgPT57XHJcbiAgICAgICAgY29uc3QgbWFya2Rvd24gPSBtYXJrZWQodGhpcy5zdGF0ZS5pbnB1dCwge3Nhbml0aXplOiB0cnVlLCB0YWJsZXM6IHRydWUsIGJyZWFrczogdHJ1ZX0sICk7XHJcbiAgICAgICAgcmV0dXJuIHtfX2h0bWw6IG1hcmtkb3dufTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVTZWxlY3QgPSAoZSk9PntcclxuICAgICAgICBjb25zdCBrZXkgPSBlLnRhcmdldC52YWx1ZVxyXG4gICAgICAgIGNvbnN0IG5ld0lucHV0ID0gbWFya2Rvd25ba2V5XTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAga2V5OiBrZXksXHJcbiAgICAgICAgICAgIGlucHV0OiBuZXdJbnB1dFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2lucHV0OiBuZXdJbnB1dH0pO1xyXG4gICAgIH07XHJcbiAgICBcclxuICAgIHJlbmRlcigpIHtcclxuICAgIFxyXG4gICAgICAgIGNvbnN0IGl0ZW1zID0gW107XHJcbiAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKG1hcmtkb3duKTtcclxuICAgICAgICBrZXlzLmZvckVhY2goa2V5PT4ge1xyXG4gICAgICAgICAgICB2YXIgbmV3S2V5ID0ga2V5LnNwbGl0KFwiXCIpLmZpbHRlcihlPT4gZSA9PT0gXCJfXCIgPyBcIiBcIiA6IGUpLmpvaW4oXCJcIik7XHJcbiAgICAgICAgICAgIGl0ZW1zLnB1c2goPG9wdGlvbiBrZXk9e21hcmtkb3duW2tleV19PntrZXl9PC9vcHRpb24+KSBcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2ID5cclxuICAgICAgICAgICAgICAgIDxoMT5NYXJrZG93biBQcmV2aWV3ZXI8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQ+PHN0cm9uZz5JTlBVVDo8L3N0cm9uZz48L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cInNlbGVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlPT4gdGhpcy5oYW5kbGVTZWxlY3QoZSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW1zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJlZGl0b3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5pbnB1dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2U9PiB0aGlzLmNoYW5nZUxpc3RlbmVyKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8T3V0cHV0IHNldE1hcmtkb3duPXt0aGlzLmdldE1hcmtkb3duKCl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmZsZXhSb3cge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgyMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG8gMTJweCBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5mbGV4Um93ID4gaDQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogNHB4IDEwcHggNHB4IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLmZsZXhSb3cgPiBzZWxlY3Qge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dGFyZWEge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGl2IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdMYXRvJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDVlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaDIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA0ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMjAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGgzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogM2VtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWJsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDRweCBzb2xpZCAjMzQzNDM0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMzQzNDM0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6MTUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaHIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDk3JTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1bCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2wge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDk1JTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMjVweCAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHAgPiBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lOyJdfQ== */\n/*@ sourceURL=C:\\Users\\Gabe\\FreeCodeCamp\\FrontEndLibraries\\BuildAMarkdownPreviewer\\pages\\index.js */"));
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.f921a60bc0e21f7a6b24.hot-update.js.map