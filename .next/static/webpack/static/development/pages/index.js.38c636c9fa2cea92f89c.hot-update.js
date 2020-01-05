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
/* harmony import */ var _components_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/input */ "./components/input.js");
/* harmony import */ var _components_output__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/output */ "./components/output.js");
/* harmony import */ var _components_markdown__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/markdown */ "./components/markdown.js");








var _jsxFileName = "C:\\Users\\Gabe\\FreeCodeCamp\\FrontEndLibraries\\BuildAMarkdownPreviewer\\pages\\index.js";






/*
Change this to have a select statement to choose which Element you want a demo of
When I select one this resets the input and the output

in input.js need to assign value with props.  Then can define value in index.js

Just create an event listener for the dropdown that will set state and input.js props value.  

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
      // console.log(e.target.value, markdown[e.target.value]);
      var key = e.target.value;
      var newInput = _components_markdown__WEBPACK_IMPORTED_MODULE_13__["default"][key]; //  const newState = ({
      //      key: key,
      //      input: markdown[key]
      //  });

      _this.changeListener(newInput);

      _this.setState({
        key: key
      }); //  this.setState({input: markdown[key]});
      //  Input.value = this.state.input;

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
      // event.preventDefault();
      this.setState({
        input: event
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var items = [];

      var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(_components_markdown__WEBPACK_IMPORTED_MODULE_13__["default"]);

      keys.forEach(function (key) {
        items.push(react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
          key: _components_markdown__WEBPACK_IMPORTED_MODULE_13__["default"][key],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 64
          },
          __self: this
        }, key));
      });
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "jsx-4264566443",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h1", {
        className: "jsx-4264566443",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, "Markdown Previewer"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "jsx-4264566443" + " " + "flexRow",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h4", {
        className: "jsx-4264566443",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("strong", {
        className: "jsx-4264566443",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, "INPUT:")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("select", {
        id: "select",
        onChange: function onChange(e) {
          return _this2.handleSelect(e);
        },
        className: "jsx-4264566443",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, items)), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("textarea", {
        id: "editor",
        defaultValue: this.state.input,
        onChange: function onChange(e) {
          return _this2.changeListener(e.target.value);
        },
        className: "jsx-4264566443",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_output__WEBPACK_IMPORTED_MODULE_12__["default"], {
        setMarkdown: this.getMarkdown(),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
        id: "4264566443",
        __self: this
      }, ".flexRow{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-webkit-justify-content:start;-ms-flex-pack:start;justify-content:start;margin-bottom:12px;}.flexRow>h4{text-align:left;display:inline;margin:4px 10px 4px 0;}div{width:800px;margin:0 auto;border;2px solid #343434;text-align:center;font-size:16px;font-family:'Lato';}h1{font-size:5em;font-weight:100;}h2{font-size:4em;font-weight:200;}h3{font-size:3em;font-weight:300;}table{border-collapse:collapse;}td,th{border:4px solid #343434;padding:5px;}code{width:95%;display:inline-block;background:#343434;color:white;line-height:150%;padding:10px;}hr{width:97%;margin-left:0!important;}ul,ol{width:95%;margin:25px 0;}p>img{width:200px;height:auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcR2FiZVxcRnJlZUNvZGVDYW1wXFxGcm9udEVuZExpYnJhcmllc1xcQnVpbGRBTWFya2Rvd25QcmV2aWV3ZXJcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5RnVDLEFBR3dDLEFBT0ssQUFLSixBQVFFLEFBSUEsQUFJQSxBQUlXLEFBSUEsQUFJZixBQVFBLEFBS0EsQUFJRSxVQWhCUyxBQVFHLEFBS1YsQ0FyREQsQ0FZQyxBQTZDRixFQXJDSSxBQUlBLEFBSUEsRUFyQkQsUUErQ25CLEFBSUEsQ0ExQkEsQUFJZ0IsQ0F2Qk4sSUFRVixBQUlBLEFBSUEsQ0FyQjBCLEFBaUNILEVBNUJLLENBb0M1QixHQVpBLGFBS2dCLENBNUJNLEVBTHRCLFNBa0NvQixPQTVCRCxVQTZCRixLQTVCTSxDQWZBLE9BNEN2QixXQTVCQSxtREFmMEIsK0ZBQ0gsbUJBQ3ZCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcR2FiZVxcRnJlZUNvZGVDYW1wXFxGcm9udEVuZExpYnJhcmllc1xcQnVpbGRBTWFya2Rvd25QcmV2aWV3ZXJcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBtYXJrZWQgZnJvbSAnbWFya2VkJztcclxuXHJcbmltcG9ydCBJbnB1dCBmcm9tICcuLi9jb21wb25lbnRzL2lucHV0JztcclxuaW1wb3J0IE91dHB1dCBmcm9tICcuLi9jb21wb25lbnRzL291dHB1dCc7XHJcbmltcG9ydCBtYXJrZG93biBmcm9tICcuLi9jb21wb25lbnRzL21hcmtkb3duJztcclxuLypcclxuQ2hhbmdlIHRoaXMgdG8gaGF2ZSBhIHNlbGVjdCBzdGF0ZW1lbnQgdG8gY2hvb3NlIHdoaWNoIEVsZW1lbnQgeW91IHdhbnQgYSBkZW1vIG9mXHJcbldoZW4gSSBzZWxlY3Qgb25lIHRoaXMgcmVzZXRzIHRoZSBpbnB1dCBhbmQgdGhlIG91dHB1dFxyXG5cclxuaW4gaW5wdXQuanMgbmVlZCB0byBhc3NpZ24gdmFsdWUgd2l0aCBwcm9wcy4gIFRoZW4gY2FuIGRlZmluZSB2YWx1ZSBpbiBpbmRleC5qc1xyXG5cclxuSnVzdCBjcmVhdGUgYW4gZXZlbnQgbGlzdGVuZXIgZm9yIHRoZSBkcm9wZG93biB0aGF0IHdpbGwgc2V0IHN0YXRlIGFuZCBpbnB1dC5qcyBwcm9wcyB2YWx1ZS4gIFxyXG5cclxuR2l2ZSBcIk1hcmtkb3duXCIgaW4gcGFnZSBoZWFkZXIgYSB0b29sdGlwIHdpdGggYSBicmllZiBleHBsYW5hdGlvbiBvZiB3aGF0IG1hcmtkb3duIGlzLiAgXHJcbiovXHJcbmNsYXNzIEhvbWUgZXh0ZW5kcyBDb21wb25lbnR7XHJcbiAgICBzdGF0ZSA9IHtcclxuICAgICAgICBrZXk6IGBoMWAsXHJcbiAgICAgICAgaW5wdXQ6IGAjIE9uZSBoYXNodGFnID0gSDFgXHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xyXG4gICAgICAgIC8vUmVtb3ZlIHNwYWNlIGZyb20gdXJsIGRlbW9uc3RyYXRpb25cclxuICAgICAgICBpZiggZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImFcIikgKXtcclxuICAgICAgICAgICAgY29uc3QgbGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJhXCIpLnRleHRDb250ZW50O1xyXG4gICAgICAgICAgICBjb25zdCBlZGl0ZWRMaW5rID0gbGluay5zcGxpdChcIlwiKS5maWx0ZXIoZT0+IGUhPSBcIiBcIikuam9pbihcIlwiKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImFcIikudGV4dENvbnRlbnQgPSBlZGl0ZWRMaW5rO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VMaXN0ZW5lcihldmVudCkge1xyXG4gICAgICAgIC8vIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGlucHV0OiBldmVudFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGdldE1hcmtkb3duID0gKCkgPT57XHJcbiAgICAgICAgY29uc3QgbWFya2Rvd24gPSBtYXJrZWQodGhpcy5zdGF0ZS5pbnB1dCwge3Nhbml0aXplOiB0cnVlLCB0YWJsZXM6IHRydWUsIGJyZWFrczogdHJ1ZX0sICk7XHJcbiAgICAgICAgcmV0dXJuIHtfX2h0bWw6IG1hcmtkb3dufTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVTZWxlY3QgPSAoZSk9PntcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhlLnRhcmdldC52YWx1ZSwgbWFya2Rvd25bZS50YXJnZXQudmFsdWVdKTtcclxuICAgICAgICBjb25zdCBrZXkgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICBjb25zdCBuZXdJbnB1dCA9IG1hcmtkb3duW2tleV07XHJcbiAgICAgICAgLy8gIGNvbnN0IG5ld1N0YXRlID0gKHtcclxuICAgICAgICAvLyAgICAgIGtleToga2V5LFxyXG4gICAgICAgIC8vICAgICAgaW5wdXQ6IG1hcmtkb3duW2tleV1cclxuICAgICAgICAvLyAgfSk7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VMaXN0ZW5lcihuZXdJbnB1dCk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7a2V5OiBrZXl9KTtcclxuICAgICAgICAvLyAgdGhpcy5zZXRTdGF0ZSh7aW5wdXQ6IG1hcmtkb3duW2tleV19KTtcclxuICAgICAgICAvLyAgSW5wdXQudmFsdWUgPSB0aGlzLnN0YXRlLmlucHV0O1xyXG4gICAgIH07XHJcbiAgICBcclxuICAgIHJlbmRlcigpIHtcclxuICAgIFxyXG4gICAgICAgIGNvbnN0IGl0ZW1zID0gW107XHJcbiAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKG1hcmtkb3duKTtcclxuICAgICAgICBrZXlzLmZvckVhY2goa2V5PT4ge1xyXG4gICAgICAgICAgICBpdGVtcy5wdXNoKDxvcHRpb24ga2V5PXttYXJrZG93bltrZXldfT57a2V5fTwvb3B0aW9uPikgXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiA+XHJcbiAgICAgICAgICAgICAgICA8aDE+TWFya2Rvd24gUHJldmlld2VyPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhSb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0PjxzdHJvbmc+SU5QVVQ6PC9zdHJvbmc+PC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzZWxlY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZT0+IHRoaXMuaGFuZGxlU2VsZWN0KGUpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDxJbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICBjaGFuZ2U9eyhldmVudCkgPT4gdGhpcy5jaGFuZ2VMaXN0ZW5lcihldmVudC50YXJnZXQudmFsdWUpIH0gXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuaW5wdXR9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaW5wdXQ9e3RoaXMuc3RhdGUuaW5wdXR9XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17dGhpcy5vcHRpb25zfS8+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cImVkaXRvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17dGhpcy5zdGF0ZS5pbnB1dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2U9PiB0aGlzLmNoYW5nZUxpc3RlbmVyKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8T3V0cHV0IHNldE1hcmtkb3duPXt0aGlzLmdldE1hcmtkb3duKCl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmZsZXhSb3cge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5mbGV4Um93ID4gaDQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogNHB4IDEwcHggNHB4IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGl2IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOyAycHggc29saWQgIzM0MzQzNDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTGF0byc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaDEge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA1ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGgyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNGVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDNlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFibGUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGgge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiA0cHggc29saWQgIzM0MzQzNDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5NSU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMzQzNDM0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6MTUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaHIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDk3JTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1bCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2wge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDk1JTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMjVweCAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHAgPiBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG5cclxuLypcclxuYFxyXG5cclxuIyMgVHdvIGhhc2h0YWdzID0gSDJcXHJcclxuXHJcbiMjIyBUaHJlZSBoYXNodGFncyA9IEgzXFxyXHJcblxyXG4jIyMjIEZvdXIgaGFzaHRhZ3MgPSBINFxcclxyXG5cclxuIyMjIyMgRml2ZSBoYXNodGFncyA9IEg1XFxyXHJcblxyXG4jIyMjIyMgU2l4IGhhc2h0YWdzID0gSDZcXHJcclxuXHJcblxyXG5cclxuXHJcbldyYXAgdGV4dCBpbiBhc3Rlcmlza3MgPSAqSXRhbGljaXplZCBUZXh0KlxcclxyXG5cclxuV3JhcCB0ZXh0IGluIGRvdWJsZSBhc3Rlcmlza3MgPSAqKkJvbGQgVGV4dCoqXFxyXHJcblxyXG5cclxuXHJcblxyXG5UaHJlZSB1bmRlcnNjb3JlcyBvciBhc3Rlcmlza3Mgb3IgZGFzaGVzID0gXFw8aHJcXD4gKGhvcml6b250YWwgbGluZSlcXHJcclxuKk5vdGU6IHRoZSB0aHJlZSB1bmRlcnNjb3JlcyBvciBhc3Rlcmlza3Mgb3IgZGFzaGVzIG11c3QgYmUgdGhlIG9ubHkgY2hhcmFjdGVycyBvbiB0aGUgbGluZSBmb3IgdGhpcyB0byB3b3JrKlxyXG5cclxuX19fXHJcbioqKlxyXG4tLS1cclxuXHJcblxyXG5cclxuXHJcbldyYXAgdGV4dCBpbiBiYWNrdGlja3MgPSBcXGAgVGV4dCBjb2xvciBhbmQgYmFja2dyb3VuZCBjb2xvciBhcmUgc3dpdGNoZWQgXFxgXFxyXHJcblxyXG5XcmFwIHRleHQgaW4gc3F1YXJlIGJyYWNrZXRzIGZvbGxvd2VkIGJ5IHVybCB3cmFwcGVkIGluIHBhcmVudGhlc2VzID0gW1tsaW5rXSAodXJsKV0oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSHlwZXJsaW5rKVxcclxyXG4qTm90ZTogRG9uJ3QgcHV0IGFueSBzcGFjZSBiZXR3ZWVuIHRoZSBzcXVhcmUgYnJhY2tldHMgYW5kIHRoZSBwYXJlbnRoZXNlcypcXHJcclxuXHJcbj4gU3RhcnQgbGluZSB3aXRoIG9uZSBcXD4gY2hhcmFjdGVyID0gSW5kZW50ZWQgYmxvY2txdW90ZVxyXG5cclxuPiA+IFN0YXJ0IGxpbmUgd2l0aCB0d28gXFw+IGNoYXJhY3RlcnMgPSBEb3VibGUgaW5kZW50ZWQgYmxvY2txdW90ZVxyXG5cclxuXHJcbi0tLVxyXG5cclxuXHJcblxyXG4xLiBTdGFydCBlYWNoIGxpbmUgd2l0aCBhIG51bWJlciArIGEgcGVyaW9kICsgYSBzcGFjZSArIFlvdXIgdGV4dD0gTnVtYmVyZWQgTGlzdFxyXG4zLiBOdW1iZXIgKyBQZXJpb2QgPSAmIzUwOy4gWW91ciB0ZXh0XHJcbjQuICgmIzUyOy4pIFlvdSBjYW4gdXNlIGFueSBudW1iZXIgeW91IHdhbnRcclxuNC4gKCYjNTI7LikgTWFya2Rvd24gd2lsbCBzdGlsbCBzaG93IHRoZSBuZXh0IG51bWJlclxyXG4xMC4gKCYjNDk7JiM0ODsuKSBNYXJrZG93biB3aWxsIHN0aWxsIHNob3cgdGhlIG5leHQgc2VxdWVudGlhbCBudW1iZXJcclxuXHJcbi0gU3RhcnQgZWFjaCBsaW5lIHdpdGggYSBkYXNoIHBsdXMgYSBzcGFjZSA9IEJ1bGxldGVkIGxpc3RcclxuLSBTdGFydCBlYWNoIGxpbmUgd2l0aCBhIGRhc2ggcGx1cyBhIHNwYWNlID0gQnVsbGV0ZWQgbGlzdFxyXG4tIFN0YXJ0IGVhY2ggbGluZSB3aXRoIGEgZGFzaCBwbHVzIGEgc3BhY2UgPSBCdWxsZXRlZCBsaXN0XHJcbi0gU3RhcnQgZWFjaCBsaW5lIHdpdGggYSBkYXNoIHBsdXMgYSBzcGFjZSA9IEJ1bGxldGVkIGxpc3RcclxuXHJcblxyXG5cclxuLS0tXHJcblxyXG5cclxuXHJcbioqSU5QVVQ6KipcclxuXHJcbiYjOTY7ICYjOTY7ICYjOTY7IFxyXG52YXIgY29kZSA9IGZ1bmN0aW9uKCl7XHJcbj4gYWxlcnQoIFwiV3JhcCB5b3UgY29kZSBpbiBhIHBhaXIgb2YgdHJpcGxlIFxcciBiYWNrdGlja3MgdG8gY3JlYXRlIGEgbXVsdGktbGluZSBjb2RlIGJsb2NrXCIgKTsgXFxyXHJcbj4gLy9UbyBpbmRlbnQgbGluZXMgb2YgY29kZSB1c2UgdGFic1xyXG5cclxufTtcclxuXHJcbmNvZGUoKTtcclxuJiM5NjsgJiM5NjsgJiM5NjtcclxuXHJcbioqT1VUUFVUOioqXHJcblxyXG5cXGBcXGBcXGAgXHJcbnZhciBjb2RlID0gZnVuY3Rpb24oKXtcclxuICAgIGFsZXJ0KCBcIldyYXAgeW91IGNvZGUgaW4gYSBwYWlyIG9mIHRyaXBsZSBcclxuICAgIGJhY2t0aWNrcyB0byBjcmVhdGUgYSBtdWx0aS1saW5lIGNvZGUgYmxvY2tcIiApO1xyXG4gICAgLy9UbyBpbmRlbnQgbGluZXMgb2YgY29kZSB1c2UgdGFic1xyXG59O1xyXG5cclxuY29kZSgpO1xyXG5cXGBcXGBcXGBcclxuXHJcblxyXG5cclxuLS0tXHJcblxyXG5cclxuXHJcbioqSU5QVVQ6KipcclxuXHJcbiYjMzM7JiM5MTsgRGVzY3JpcHRpb24gb2YgdGhlIGltYWdlICYjOTM7JiM0MDsgdGhlIGltYWdlIFVSTCAmIzQxO1xyXG5cclxuKipPVVRQVVQ6KipcclxuXHJcbiFbUmVhY3QgTG9nbyB3LyBUZXh0XShodHRwczovL2dvby5nbC9VbXl5dGMpXHJcblxyXG5cclxuXHJcbi0tLVxyXG5cclxuXHJcblxyXG4qKklOUFVUOioqXHJcblxyXG4mIzEyNDsgVG8gQ3JlYXRlICYjMTI0OyBBIFRhYmxlOiAmIzEyNDsgV3JhcCBUZXh0ICYjMTI0OyBJbiBQaXBlIChvciB2ZXJ0aWNhbCBzbGFzaCkgc3ltYm9scyAmIzEyNDtcclxuJiMxMjQ7IC0gJiMxMjQ7LSAmIzEyNDsgLSAmIzEyNDsgLSAmIzEyNDtcclxuJiMxMjQ7IE9uIHRoZSAybmQgbGluZSAmIzEyNDsgVHlwZSBQaXBlICsgRGFzaCAmIzEyNDsgT25jZSBGb3IgRXZlcnkgJiMxMjQ7IFRhYmxlIENlbGwgaW4gdGhlIFJvdyAmIzEyNDtcclxuJiMxMjQ7IEZvciBFdmVyeSAmIzEyNDsgUm93ICYjMTI0OyAgV3JhcCBUZXh0ICYjMTI0OyBJbiBQaXBlcyAmIzEyNDtcclxuJiMxMjQ7IElmIFRoZXJlIEFyZSBMZXNzIENlbGxzICYjMTI0OyBUaGUgVGFibGUgV2lsbCBBdXRvbWF0aWNhbGx5ICYjMTI0OyBGaWxsIEluIEJsYW5rIENlbGxzICYjMTI0O1xyXG5cclxuKipPVVRQVVQ6KipcclxuXHJcbnwgVG8gQ3JlYXRlIHwgQSBUYWJsZTogfCBXcmFwIFRleHQgfCBJbiBQaXBlIChvciB2ZXJ0aWNhbCBzbGFzaCkgc3ltYm9scyB8XHJcbnwtIHwgLSB8IC18IC18XHJcbnwgT24gdGhlIDJuZCBsaW5lIHwgVHlwZSBQaXBlICsgRGFzaCB8IE9uY2UgRm9yIEV2ZXJ5IHwgVGFibGUgQ2VsbCBpbiB0aGUgUm93IHxcclxufCBGb3IgRXZlcnkgfCBSb3cgfCAgV3JhcCBUZXh0IHwgSW4gUGlwZXMgfFxyXG58IElmIFRoZXJlIEFyZSBMZXNzIENlbGxzIHwgVGhlIFRhYmxlIFdpbGwgQXV0b21hdGljYWxseSB8IEZpbGwgSW4gQmxhbmsgQ2VsbHMgfFxyXG5cclxuXHJcblxyXG5cclxuYFxyXG4qLyJdfQ== */\n/*@ sourceURL=C:\\Users\\Gabe\\FreeCodeCamp\\FrontEndLibraries\\BuildAMarkdownPreviewer\\pages\\index.js */"));
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Home);
/*
`

## Two hashtags = H2\r

### Three hashtags = H3\r

#### Four hashtags = H4\r

##### Five hashtags = H5\r

###### Six hashtags = H6\r




Wrap text in asterisks = *Italicized Text*\r

Wrap text in double asterisks = **Bold Text**\r




Three underscores or asterisks or dashes = \<hr\> (horizontal line)\r
*Note: the three underscores or asterisks or dashes must be the only characters on the line for this to work*

___
***
---




Wrap text in backticks = \` Text color and background color are switched \`\r

Wrap text in square brackets followed by url wrapped in parentheses = [[link] (url)](https://en.wikipedia.org/wiki/Hyperlink)\r
*Note: Don't put any space between the square brackets and the parentheses*\r

> Start line with one \> character = Indented blockquote

> > Start line with two \> characters = Double indented blockquote


---



1. Start each line with a number + a period + a space + Your text= Numbered List
3. Number + Period = &#50;. Your text
4. (&#52;.) You can use any number you want
4. (&#52;.) Markdown will still show the next number
10. (&#49;&#48;.) Markdown will still show the next sequential number

- Start each line with a dash plus a space = Bulleted list
- Start each line with a dash plus a space = Bulleted list
- Start each line with a dash plus a space = Bulleted list
- Start each line with a dash plus a space = Bulleted list



---



**INPUT:**

&#96; &#96; &#96; 
var code = function(){
> alert( "Wrap you code in a pair of triple \r backticks to create a multi-line code block" ); \r
> //To indent lines of code use tabs

};

code();
&#96; &#96; &#96;

**OUTPUT:**

\`\`\` 
var code = function(){
    alert( "Wrap you code in a pair of triple 
    backticks to create a multi-line code block" );
    //To indent lines of code use tabs
};

code();
\`\`\`



---



**INPUT:**

&#33;&#91; Description of the image &#93;&#40; the image URL &#41;

**OUTPUT:**

![React Logo w/ Text](https://goo.gl/Umyytc)



---



**INPUT:**

&#124; To Create &#124; A Table: &#124; Wrap Text &#124; In Pipe (or vertical slash) symbols &#124;
&#124; - &#124;- &#124; - &#124; - &#124;
&#124; On the 2nd line &#124; Type Pipe + Dash &#124; Once For Every &#124; Table Cell in the Row &#124;
&#124; For Every &#124; Row &#124;  Wrap Text &#124; In Pipes &#124;
&#124; If There Are Less Cells &#124; The Table Will Automatically &#124; Fill In Blank Cells &#124;

**OUTPUT:**

| To Create | A Table: | Wrap Text | In Pipe (or vertical slash) symbols |
|- | - | -| -|
| On the 2nd line | Type Pipe + Dash | Once For Every | Table Cell in the Row |
| For Every | Row |  Wrap Text | In Pipes |
| If There Are Less Cells | The Table Will Automatically | Fill In Blank Cells |




`
*/

/***/ })

})
//# sourceMappingURL=index.js.38c636c9fa2cea92f89c.hot-update.js.map