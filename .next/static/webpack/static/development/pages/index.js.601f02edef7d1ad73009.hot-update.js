webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/TodoItems.js":
/*!*********************************!*\
  !*** ./components/TodoItems.js ***!
  \*********************************/
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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_flip_move__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-flip-move */ "./node_modules/react-flip-move/dist/react-flip-move.es.js");






var _jsxFileName = "/home/sir_gregg/Desktop/Greg/Repositories/Projects/hello-next/components/TodoItems.js";



var liStyle = {
  color: '#333',
  backgroundColor: 'rgba(255, 255, 255, .5)',
  padding: '15px',
  marginBottom: '15px',
  borderRadius: '5px',
  listStyle: 'none',
  transition: 'backgroundColor .2s ease-out'
};

var TodoItems =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(TodoItems, _Component);

  function TodoItems(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TodoItems);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(TodoItems).call(this, props));
    _this.createTodos = _this.createTodos.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(TodoItems, [{
    key: "createTodos",
    value: function createTodos(todo) {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        onClick: function onClick() {
          return _this2.delete(todo.key);
        },
        key: todo.key,
        style: liStyle,
        className: "testing",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, todo.text, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, "Delete Todo")));
    }
  }, {
    key: "delete",
    value: function _delete(key) {
      this.props.delete(key);
    }
  }, {
    key: "render",
    value: function render() {
      var todoEntries = this.props.entries;
      var listTodos = todoEntries.map(this.createTodos);
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-3419755028",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "jsx-3419755028" + " " + "theList",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_flip_move__WEBPACK_IMPORTED_MODULE_8__["default"], {
        duration: 250,
        easing: "ease-out",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, listTodos)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "3419755028",
        __self: this
      }, "ul.theList.jsx-3419755028{padding:0;}button.jsx-3419755028{text-align:left;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Npcl9ncmVnZy9EZXNrdG9wL0dyZWcvUmVwb3NpdG9yaWVzL1Byb2plY3RzL2hlbGxvLW5leHQvY29tcG9uZW50cy9Ub2RvSXRlbXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0NxQixBQUd1QixBQUlNLFVBSGxCLE1BSUEiLCJmaWxlIjoiL2hvbWUvc2lyX2dyZWdnL0Rlc2t0b3AvR3JlZy9SZXBvc2l0b3JpZXMvUHJvamVjdHMvaGVsbG8tbmV4dC9jb21wb25lbnRzL1RvZG9JdGVtcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRmxpcE1vdmUgZnJvbSAncmVhY3QtZmxpcC1tb3ZlJztcblxuY29uc3QgbGlTdHlsZSA9IHtcbiAgY29sb3I6ICcjMzMzJyxcbiAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAuNSknLFxuICBwYWRkaW5nOiAnMTVweCcsXG4gIG1hcmdpbkJvdHRvbTogJzE1cHgnLFxuICBib3JkZXJSYWRpdXM6ICc1cHgnLFxuICBsaXN0U3R5bGU6ICdub25lJyxcblxuICB0cmFuc2l0aW9uOiAnYmFja2dyb3VuZENvbG9yIC4ycyBlYXNlLW91dCdcbn07XG5cbmNsYXNzIFRvZG9JdGVtcyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5jcmVhdGVUb2RvcyA9IHRoaXMuY3JlYXRlVG9kb3MuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNyZWF0ZVRvZG9zKHRvZG8pIHtcbiAgICByZXR1cm4gIDxkaXY+XG4gICAgICA8bGkgb25DbGljaz17KCkgPT4gdGhpcy5kZWxldGUodG9kby5rZXkpfSBcbiAgICAgICAga2V5PXt0b2RvLmtleX0gc3R5bGU9e2xpU3R5bGV9IGNsYXNzTmFtZT1cInRlc3RpbmdcIj5cbiAgICAgICAgICB7dG9kby50ZXh0fVxuICAgICAgICAgIDxidXR0b24+RGVsZXRlIFRvZG88L2J1dHRvbj5cbiAgICAgIDwvbGk+XG4gICAgICBcbiAgICA8L2Rpdj5cbiAgfVxuXG4gIGRlbGV0ZShrZXkpIHtcbiAgICB0aGlzLnByb3BzLmRlbGV0ZShrZXkpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB0b2RvRW50cmllcyA9IHRoaXMucHJvcHMuZW50cmllcztcbiAgICBsZXQgbGlzdFRvZG9zID0gdG9kb0VudHJpZXMubWFwKHRoaXMuY3JlYXRlVG9kb3MpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJ0aGVMaXN0XCI+XG4gICAgICAgICAgPEZsaXBNb3ZlIGR1cmF0aW9uPXsyNTB9IGVhc2luZz1cImVhc2Utb3V0XCI+XG4gICAgICAgICAgICB7bGlzdFRvZG9zfVxuICAgICAgICAgIDwvRmxpcE1vdmU+XG4gICAgICAgIDwvdWw+XG4gICAgICAgIDxzdHlsZSBqc3g+IHtgXG4gICAgICAgICAgdWwudGhlTGlzdCB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9kb0l0ZW1zO1xuIl19 */\n/*@ sourceURL=/home/sir_gregg/Desktop/Greg/Repositories/Projects/hello-next/components/TodoItems.js */"));
    }
  }]);

  return TodoItems;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (TodoItems);

/***/ })

})
//# sourceMappingURL=index.js.601f02edef7d1ad73009.hot-update.js.map