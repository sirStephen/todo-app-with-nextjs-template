webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/date/now */ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_TodoItems__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/TodoItems */ "./components/TodoItems.js");







var _jsxFileName = "/home/sir_gregg/Desktop/Greg/Repositories/Projects/hello-next/pages/index.js";

// import Layout from '../components/MyLayout';
// const Index = () => (
//   <div>
//     <Layout />
//     <p>Hello Next.js</p>
//   </div>
// );
// export default Index



var TodoList =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(TodoList, _Component);

  function TodoList(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, TodoList);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(TodoList).call(this, props));
    _this.state = {
      todos: []
    };
    _this.addTodo = _this.addTodo.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.deleteTodo = _this.deleteTodo.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(TodoList, [{
    key: "addTodo",
    value: function addTodo(e) {
      if (this.inputElement.value !== "" && typeof this.inputElement.value === 'string') {
        var newTodo = {
          text: this.inputElement.value,
          key: _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default()()
        };
        this.setState(function (prevState) {
          return {
            todos: prevState.todos.concat(newTodo)
          };
        });
      }

      this.inputElement.value = "";
      console.log(this.state.todos);
      e.preventDefault();
    }
  }, {
    key: "deleteTodo",
    value: function deleteTodo(key) {
      var filteredTodos = this.state.todos.filter(function (todo) {
        return todo.key !== key;
      });
      this.setState({
        todos: filteredTodos
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3845416114" + " " + "todoListContainer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3845416114" + " " + "header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("form", {
        onSubmit: this.addTodo,
        className: "jsx-3845416114",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        ref: function ref(a) {
          return _this2.inputElement = a;
        },
        placeholder: "Enter Task",
        className: "jsx-3845416114",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        type: "submit",
        className: "jsx-3845416114",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, "Add Task"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_TodoItems__WEBPACK_IMPORTED_MODULE_9__["default"], {
        entries: this.state.todos,
        delete: this.deleteTodo,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "3845416114",
        __self: this
      }, ".todoListContainer.jsx-3845416114{background-color:skyblue;}.todoListContainer.jsx-3845416114 .header.jsx-3845416114 input.jsx-3845416114{padding:10px;fontSize:16px;border:2px solid #fff;width:165px;}.todoListContainer.jsx-3845416114 .header.jsx-3845416114 button.jsx-3845416114{padding:10px;font-size:16px;margin:10px;margin-right:0px;background-color:#0066ff;color:#fff;border:2px solid #0066ff;}.todoListContainer.jsx-3845416114 .header.jsx-3845416114 button.jsx-3845416114:hover{background-color:#003399;border:2px solid #003399;cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Npcl9ncmVnZy9EZXNrdG9wL0dyZWcvUmVwb3NpdG9yaWVzL1Byb2plY3RzL2hlbGxvLW5leHQvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0VxQixBQUdzQyxBQUlaLEFBT0EsQUFVWSxhQWhCWCxBQU9DLFlBWGpCLEFBcUIyQixFQWhCSCxDQU9WLFlBQ0ssU0FQTCxDQWdCRyxPQVJVLElBUDNCLElBZ0JBLGlCQVJhLFdBQ2MseUJBQzNCIiwiZmlsZSI6Ii9ob21lL3Npcl9ncmVnZy9EZXNrdG9wL0dyZWcvUmVwb3NpdG9yaWVzL1Byb2plY3RzL2hlbGxvLW5leHQvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTXlMYXlvdXQnO1xuXG4vLyBjb25zdCBJbmRleCA9ICgpID0+IChcbi8vICAgPGRpdj5cbi8vICAgICA8TGF5b3V0IC8+XG4vLyAgICAgPHA+SGVsbG8gTmV4dC5qczwvcD5cbi8vICAgPC9kaXY+XG4vLyApO1xuXG4vLyBleHBvcnQgZGVmYXVsdCBJbmRleFxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUb2RvSXRlbXMgZnJvbSAnLi4vY29tcG9uZW50cy9Ub2RvSXRlbXMnO1xuXG5jbGFzcyBUb2RvTGlzdCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHRvZG9zOiBbXVxuICAgIH07XG5cbiAgICB0aGlzLmFkZFRvZG8gPSB0aGlzLmFkZFRvZG8uYmluZCh0aGlzKTtcbiAgICB0aGlzLmRlbGV0ZVRvZG8gPSB0aGlzLmRlbGV0ZVRvZG8uYmluZCh0aGlzKTtcbiAgfVxuXG4gIGFkZFRvZG8oZSkge1xuICAgIGlmICh0aGlzLmlucHV0RWxlbWVudC52YWx1ZSAhPT0gXCJcIiAmJiB0eXBlb2YgdGhpcy5pbnB1dEVsZW1lbnQudmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICBsZXQgbmV3VG9kbyA9IHtcbiAgICAgICAgdGV4dDogdGhpcy5pbnB1dEVsZW1lbnQudmFsdWUsXG4gICAgICAgIGtleTogRGF0ZS5ub3coKVxuICAgICAgfTtcblxuICAgICAgdGhpcy5zZXRTdGF0ZSgocHJldlN0YXRlKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdG9kb3M6IHByZXZTdGF0ZS50b2Rvcy5jb25jYXQobmV3VG9kbylcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMuaW5wdXRFbGVtZW50LnZhbHVlID0gXCJcIjtcblxuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUudG9kb3MpO1xuXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgZGVsZXRlVG9kbyhrZXkpIHtcbiAgICBsZXQgZmlsdGVyZWRUb2RvcyA9IHRoaXMuc3RhdGUudG9kb3MuZmlsdGVyKCh0b2RvKSA9PiB7XG4gICAgICByZXR1cm4gKHRvZG8ua2V5ICE9PSBrZXkpXG4gICAgfSk7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHRvZG9zOiBmaWx0ZXJlZFRvZG9zXG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9kb0xpc3RDb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5hZGRUb2RvfT5cbiAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgcmVmPXsoYSkgPT4gdGhpcy5pbnB1dEVsZW1lbnQgPSBhfVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFRhc2tcIiAvPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+QWRkIFRhc2s8L2J1dHRvbj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8VG9kb0l0ZW1zIGVudHJpZXMgPSB7dGhpcy5zdGF0ZS50b2Rvc30gXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSA9IHt0aGlzLmRlbGV0ZVRvZG99XG4gICAgICAgIC8+XG4gICAgICAgIDxzdHlsZSBqc3g+IHtgXG4gICAgICAgICAgLnRvZG9MaXN0Q29udGFpbmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHNreWJsdWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnRvZG9MaXN0Q29udGFpbmVyIC5oZWFkZXIgaW5wdXQge1xuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgIGZvbnRTaXplOiAxNnB4O1xuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcbiAgICAgICAgICAgIHdpZHRoOiAxNjVweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudG9kb0xpc3RDb250YWluZXIgLmhlYWRlciBidXR0b24ge1xuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNjZmZjtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzAwNjZmZjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudG9kb0xpc3RDb250YWluZXIgLmhlYWRlciBidXR0b246aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMzM5OTtcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMDMzOTk7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUb2RvTGlzdDsiXX0= */\n/*@ sourceURL=/home/sir_gregg/Desktop/Greg/Repositories/Projects/hello-next/pages/index.js */"));
    }
  }]);

  return TodoList;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (TodoList);

/***/ })

})
//# sourceMappingURL=index.js.4975e4d86f5043f6de8e.hot-update.js.map