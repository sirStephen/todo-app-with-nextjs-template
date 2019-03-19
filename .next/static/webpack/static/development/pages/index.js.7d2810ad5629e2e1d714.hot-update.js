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
        className: "jsx-1046606662",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "jsx-1046606662" + " " + "theList",
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
        id: "1046606662",
        __self: this
      }, "ul.theList.jsx-1046606662{padding:0;}button.jsx-1046606662{text-align:left;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Npcl9ncmVnZy9EZXNrdG9wL0dyZWcvUmVwb3NpdG9yaWVzL1Byb2plY3RzL2hlbGxvLW5leHQvY29tcG9uZW50cy9Ub2RvSXRlbXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0NxQixBQUd1QixBQUtiLFVBSkMsTUFJQSIsImZpbGUiOiIvaG9tZS9zaXJfZ3JlZ2cvRGVza3RvcC9HcmVnL1JlcG9zaXRvcmllcy9Qcm9qZWN0cy9oZWxsby1uZXh0L2NvbXBvbmVudHMvVG9kb0l0ZW1zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBGbGlwTW92ZSBmcm9tICdyZWFjdC1mbGlwLW1vdmUnO1xuXG5jb25zdCBsaVN0eWxlID0ge1xuICBjb2xvcjogJyMzMzMnLFxuICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIC41KScsXG4gIHBhZGRpbmc6ICcxNXB4JyxcbiAgbWFyZ2luQm90dG9tOiAnMTVweCcsXG4gIGJvcmRlclJhZGl1czogJzVweCcsXG4gIGxpc3RTdHlsZTogJ25vbmUnLFxuXG4gIHRyYW5zaXRpb246ICdiYWNrZ3JvdW5kQ29sb3IgLjJzIGVhc2Utb3V0J1xufTtcblxuY2xhc3MgVG9kb0l0ZW1zIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLmNyZWF0ZVRvZG9zID0gdGhpcy5jcmVhdGVUb2Rvcy5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY3JlYXRlVG9kb3ModG9kbykge1xuICAgIHJldHVybiAgPGRpdj5cbiAgICAgIDxsaSBvbkNsaWNrPXsoKSA9PiB0aGlzLmRlbGV0ZSh0b2RvLmtleSl9IFxuICAgICAgICBrZXk9e3RvZG8ua2V5fSBzdHlsZT17bGlTdHlsZX0gY2xhc3NOYW1lPVwidGVzdGluZ1wiPlxuICAgICAgICAgIHt0b2RvLnRleHR9XG4gICAgICAgICAgPGJ1dHRvbj5EZWxldGUgVG9kbzwvYnV0dG9uPlxuICAgICAgPC9saT5cbiAgICAgIFxuICAgIDwvZGl2PlxuICB9XG5cbiAgZGVsZXRlKGtleSkge1xuICAgIHRoaXMucHJvcHMuZGVsZXRlKGtleSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHRvZG9FbnRyaWVzID0gdGhpcy5wcm9wcy5lbnRyaWVzO1xuICAgIGxldCBsaXN0VG9kb3MgPSB0b2RvRW50cmllcy5tYXAodGhpcy5jcmVhdGVUb2Rvcyk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cInRoZUxpc3RcIj5cbiAgICAgICAgICA8RmxpcE1vdmUgZHVyYXRpb249ezI1MH0gZWFzaW5nPVwiZWFzZS1vdXRcIj5cbiAgICAgICAgICAgIHtsaXN0VG9kb3N9XG4gICAgICAgICAgPC9GbGlwTW92ZT5cbiAgICAgICAgPC91bD5cbiAgICAgICAgPHN0eWxlIGpzeD4ge2BcbiAgICAgICAgICB1bC50aGVMaXN0IHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnRcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvZG9JdGVtcztcbiJdfQ== */\n/*@ sourceURL=/home/sir_gregg/Desktop/Greg/Repositories/Projects/hello-next/components/TodoItems.js */"));
    }
  }]);

  return TodoItems;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (TodoItems);

/***/ })

})
//# sourceMappingURL=index.js.7d2810ad5629e2e1d714.hot-update.js.map