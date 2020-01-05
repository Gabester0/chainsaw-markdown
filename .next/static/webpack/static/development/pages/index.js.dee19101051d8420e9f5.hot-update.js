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

      var addSpace = function addSpace(e) {
        return e === "_" ? " " : e;
      };

      var items = [];

      var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(_components_markdown__WEBPACK_IMPORTED_MODULE_12__["default"]);

      keys.forEach(function (key) {
        var newKey = key.split("").filter(function (e) {
          return addSpace(e);
        });
        console.log(newKey);
        items.push(react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
          key: _components_markdown__WEBPACK_IMPORTED_MODULE_12__["default"][key],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          },
          __self: this
        }, key));
      });
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "jsx-417002664",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h1", {
        className: "jsx-417002664",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, "Markdown Previewer"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "jsx-417002664" + " " + "flexRow",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h4", {
        className: "jsx-417002664",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("strong", {
        className: "jsx-417002664",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
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
          lineNumber: 62
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
          lineNumber: 68
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_output__WEBPACK_IMPORTED_MODULE_11__["default"], {
        setMarkdown: this.getMarkdown(),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
        id: "417002664",
        __self: this
      }, ".flexRow{width:822px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-webkit-justify-content:start;-ms-flex-pack:start;justify-content:start;margin:0 auto 12px auto;}.flexRow>h4{text-align:left;display:inline;margin:4px 10px 4px 0;}.flexRow>select{width:100%;}textarea{width:800px;height:200px;margin:auto;padding:10px;}div{width:800px;margin:0 auto;text-align:center;font-size:16px;font-family:'Lato';}h1{font-size:5em;font-weight:100;}h2{font-size:4em;font-weight:200;}h3{font-size:3em;font-weight:300;}table{border-collapse:collapse;}td,th{border:4px solid #343434;padding:5px;}code{width:auto;display:inline-block;background:#343434;color:white;line-height:150%;padding:10px;}hr{width:97%;margin-left:0!important;}ul,ol{width:95%;margin:25px 0;}p>img{width:200px;height:auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcR2FiZVxcRnJlZUNvZGVDYW1wXFxGcm9udEVuZExpYnJhcmllc1xcQnVpbGRBTWFya2Rvd25QcmV2aWV3ZXJcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwRXVDLEFBR3lDLEFBT0ksQUFLTCxBQUdDLEFBTUEsQUFPRSxBQUlBLEFBSUEsQUFJVyxBQUlBLEFBSWQsQUFRRCxBQUtBLEFBSUUsVUFSWSxBQUtWLENBakRsQixBQW9DeUIsQ0FoRFIsQUFlQSxBQU1DLEFBNENGLEVBckNJLEFBSUEsQUFJQSxFQTdCRCxRQXVEbkIsQUFJQSxDQWxEZ0IsQUF3QmhCLEFBSWdCLENBdEJNLElBT3RCLEFBSUEsQUFJQSxDQTdCMEIsQ0F5Q0gsRUFRdkIsR0F4Q2lCLEFBNEJqQixPQXRCbUIsTUFMbkIsQ0FnQ2dCLEVBekNoQixNQWV1QixJQTJCSCxlQTFCcEIsRUEyQmlCLE1BbkRNLE9Bb0R2Qiw4REFuRDBCLCtGQUNFLHdCQUM1QiIsImZpbGUiOiJDOlxcVXNlcnNcXEdhYmVcXEZyZWVDb2RlQ2FtcFxcRnJvbnRFbmRMaWJyYXJpZXNcXEJ1aWxkQU1hcmtkb3duUHJldmlld2VyXFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgbWFya2VkIGZyb20gJ21hcmtlZCc7XHJcblxyXG5pbXBvcnQgT3V0cHV0IGZyb20gJy4uL2NvbXBvbmVudHMvb3V0cHV0JztcclxuaW1wb3J0IG1hcmtkb3duIGZyb20gJy4uL2NvbXBvbmVudHMvbWFya2Rvd24nO1xyXG4vKlxyXG5HaXZlIFwiTWFya2Rvd25cIiBpbiBwYWdlIGhlYWRlciBhIHRvb2x0aXAgd2l0aCBhIGJyaWVmIGV4cGxhbmF0aW9uIG9mIHdoYXQgbWFya2Rvd24gaXMuICBcclxuKi9cclxuY2xhc3MgSG9tZSBleHRlbmRzIENvbXBvbmVudHtcclxuICAgIHN0YXRlID0ge1xyXG4gICAgICAgIGtleTogYGgxYCxcclxuICAgICAgICBpbnB1dDogYCMgT25lIGhhc2h0YWcgPSBIMWBcclxuICAgIH07XHJcblxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XHJcbiAgICAgICAgLy9SZW1vdmUgc3BhY2UgZnJvbSB1cmwgZGVtb25zdHJhdGlvblxyXG4gICAgICAgIGlmKCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYVwiKSApe1xyXG4gICAgICAgICAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImFcIikudGV4dENvbnRlbnQ7XHJcbiAgICAgICAgICAgIGNvbnN0IGVkaXRlZExpbmsgPSBsaW5rLnNwbGl0KFwiXCIpLmZpbHRlcihlPT4gZSE9IFwiIFwiKS5qb2luKFwiXCIpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYVwiKS50ZXh0Q29udGVudCA9IGVkaXRlZExpbms7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZUxpc3RlbmVyKGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGlucHV0OiBldmVudFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGdldE1hcmtkb3duID0gKCkgPT57XHJcbiAgICAgICAgY29uc3QgbWFya2Rvd24gPSBtYXJrZWQodGhpcy5zdGF0ZS5pbnB1dCwge3Nhbml0aXplOiB0cnVlLCB0YWJsZXM6IHRydWUsIGJyZWFrczogdHJ1ZX0sICk7XHJcbiAgICAgICAgcmV0dXJuIHtfX2h0bWw6IG1hcmtkb3dufTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVTZWxlY3QgPSAoZSk9PntcclxuICAgICAgICBjb25zdCBrZXkgPSBlLnRhcmdldC52YWx1ZVxyXG4gICAgICAgIGNvbnN0IG5ld0lucHV0ID0gbWFya2Rvd25ba2V5XTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAga2V5OiBrZXksXHJcbiAgICAgICAgICAgIGlucHV0OiBuZXdJbnB1dFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2lucHV0OiBuZXdJbnB1dH0pO1xyXG4gICAgIH07XHJcbiAgICBcclxuICAgIHJlbmRlcigpIHtcclxuICAgIFxyXG4gICAgICAgIGNvbnN0IGFkZFNwYWNlID0gKGU9PiBlID09PSBcIl9cIiA/IFwiIFwiIDogZSlcclxuICAgICAgICBjb25zdCBpdGVtcyA9IFtdO1xyXG4gICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhtYXJrZG93bik7XHJcbiAgICAgICAga2V5cy5mb3JFYWNoKGtleT0+IHtcclxuICAgICAgICAgICAgY29uc3QgbmV3S2V5ID0ga2V5LnNwbGl0KFwiXCIpLmZpbHRlcihlPT4gYWRkU3BhY2UoZSkgKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cobmV3S2V5KTtcclxuICAgICAgICAgICAgaXRlbXMucHVzaCg8b3B0aW9uIGtleT17bWFya2Rvd25ba2V5XX0+e2tleX08L29wdGlvbj4pIFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgPlxyXG4gICAgICAgICAgICAgICAgPGgxPk1hcmtkb3duIFByZXZpZXdlcjwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4Um93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoND48c3Ryb25nPklOUFVUOjwvc3Ryb25nPjwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwic2VsZWN0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2U9PiB0aGlzLmhhbmRsZVNlbGVjdChlKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cImVkaXRvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmlucHV0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZT0+IHRoaXMuY2hhbmdlTGlzdGVuZXIoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxPdXRwdXQgc2V0TWFya2Rvd249e3RoaXMuZ2V0TWFya2Rvd24oKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZmxleFJvdyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogODIycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0byAxMnB4IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLmZsZXhSb3cgPiBoNCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA0cHggMTBweCA0cHggMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZmxleFJvdyA+IHNlbGVjdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0YXJlYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogODAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXYge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0xhdG8nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGgxIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNWVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDRlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaDMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogNHB4IHNvbGlkICMzNDM0MzQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29kZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMzNDM0MzQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDoxNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBociB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogOTclO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogOTUlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAyNXB4IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcCA+IGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7Il19 */\n/*@ sourceURL=C:\\Users\\Gabe\\FreeCodeCamp\\FrontEndLibraries\\BuildAMarkdownPreviewer\\pages\\index.js */"));
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.dee19101051d8420e9f5.hot-update.js.map