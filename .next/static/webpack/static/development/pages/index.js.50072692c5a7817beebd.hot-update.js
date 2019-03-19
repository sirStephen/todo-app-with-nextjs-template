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
      }, todo.text), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }));
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
        className: "jsx-3517231010",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "jsx-3517231010" + " " + "theList",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_flip_move__WEBPACK_IMPORTED_MODULE_8__["default"], {
        duration: 250,
        easing: "ease-out",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, listTodos)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "3517231010",
        __self: this
      }, "ul.theList.jsx-3517231010{padding:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Npcl9ncmVnZy9EZXNrdG9wL0dyZWcvUmVwb3NpdG9yaWVzL1Byb2plY3RzL2hlbGxvLW5leHQvY29tcG9uZW50cy9Ub2RvSXRlbXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOENxQixBQUd1QixVQUNaIiwiZmlsZSI6Ii9ob21lL3Npcl9ncmVnZy9EZXNrdG9wL0dyZWcvUmVwb3NpdG9yaWVzL1Byb2plY3RzL2hlbGxvLW5leHQvY29tcG9uZW50cy9Ub2RvSXRlbXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEZsaXBNb3ZlIGZyb20gJ3JlYWN0LWZsaXAtbW92ZSc7XG5cbmNvbnN0IGxpU3R5bGUgPSB7XG4gIGNvbG9yOiAnIzMzMycsXG4gIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgLjUpJyxcbiAgcGFkZGluZzogJzE1cHgnLFxuICBtYXJnaW5Cb3R0b206ICcxNXB4JyxcbiAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcbiAgbGlzdFN0eWxlOiAnbm9uZScsXG5cbiAgdHJhbnNpdGlvbjogJ2JhY2tncm91bmRDb2xvciAuMnMgZWFzZS1vdXQnXG59O1xuXG5jbGFzcyBUb2RvSXRlbXMgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuY3JlYXRlVG9kb3MgPSB0aGlzLmNyZWF0ZVRvZG9zLmJpbmQodGhpcyk7XG4gIH1cblxuICBjcmVhdGVUb2Rvcyh0b2RvKSB7XG4gICAgcmV0dXJuICA8ZGl2PlxuICAgICAgPGxpIG9uQ2xpY2s9eygpID0+IHRoaXMuZGVsZXRlKHRvZG8ua2V5KX0gXG4gICAgICAgIGtleT17dG9kby5rZXl9IHN0eWxlPXtsaVN0eWxlfSBjbGFzc05hbWU9XCJ0ZXN0aW5nXCI+XG4gICAgICAgICAge3RvZG8udGV4dH1cbiAgICAgIDwvbGk+XG4gICAgICA8YnV0dG9uPjwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICB9XG5cbiAgZGVsZXRlKGtleSkge1xuICAgIHRoaXMucHJvcHMuZGVsZXRlKGtleSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHRvZG9FbnRyaWVzID0gdGhpcy5wcm9wcy5lbnRyaWVzO1xuICAgIGxldCBsaXN0VG9kb3MgPSB0b2RvRW50cmllcy5tYXAodGhpcy5jcmVhdGVUb2Rvcyk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cInRoZUxpc3RcIj5cbiAgICAgICAgICA8RmxpcE1vdmUgZHVyYXRpb249ezI1MH0gZWFzaW5nPVwiZWFzZS1vdXRcIj5cbiAgICAgICAgICAgIHtsaXN0VG9kb3N9XG4gICAgICAgICAgPC9GbGlwTW92ZT5cbiAgICAgICAgPC91bD5cbiAgICAgICAgPHN0eWxlIGpzeD4ge2BcbiAgICAgICAgICB1bC50aGVMaXN0IHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUb2RvSXRlbXM7XG4iXX0= */\n/*@ sourceURL=/home/sir_gregg/Desktop/Greg/Repositories/Projects/hello-next/components/TodoItems.js */"));
    }
  }]);

  return TodoItems;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (TodoItems);

/***/ })

})
//# sourceMappingURL=index.js.50072692c5a7817beebd.hot-update.js.map