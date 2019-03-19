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
      if (this.inputElement.value !== "") {
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
        className: "jsx-2992820882" + " " + "todoListContainer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2992820882" + " " + "header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", {
        className: "jsx-2992820882",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, "Todo List App"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("form", {
        onSubmit: this.addTodo,
        className: "jsx-2992820882",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        ref: function ref(a) {
          return _this2.inputElement = a;
        },
        placeholder: "Enter Task",
        className: "jsx-2992820882",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        type: "submit",
        className: "jsx-2992820882",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, "Add Task"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_TodoItems__WEBPACK_IMPORTED_MODULE_9__["default"], {
        entries: this.state.todos,
        delete: this.deleteTodo,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "2992820882",
        __self: this
      }, ".todoListContainer.jsx-2992820882{margin:0;background-color:cadetblue;height:100vh;}.header.jsx-2992820882{max-width:900px;margin:0 auto;background:white;}.todoListContainer.jsx-2992820882 .header.jsx-2992820882 input.jsx-2992820882{padding:10px;fontSize:16px;border:2px solid #fff;width:165px;}.todoListContainer.jsx-2992820882 .header.jsx-2992820882 button.jsx-2992820882{padding:10px;font-size:16px;margin:10px;margin-right:0px;background-color:#0066ff;color:#fff;border:2px solid #0066ff;}.todoListContainer.jsx-2992820882 .header.jsx-2992820882 button.jsx-2992820882:hover{background-color:#003399;border:2px solid #003399;cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Npcl9ncmVnZy9EZXNrdG9wL0dyZWcvUmVwb3NpdG9yaWVzL1Byb2plY3RzL2hlbGxvLW5leHQvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUVxQixBQUdzQixBQU1PLEFBTUgsQUFPQSxBQVVZLFNBNUJFLElBWWIsQUFPQyxHQWJELFNBdUJXLEVBaEJILENBT1YsRUFiSyxNQU5KLElBb0JJLE9BYm5CLEVBTkEsQUFZYyxDQWdCRyxPQVJVLElBUDNCLElBZ0JBLGlCQVJhLFdBQ2MseUJBQzNCIiwiZmlsZSI6Ii9ob21lL3Npcl9ncmVnZy9EZXNrdG9wL0dyZWcvUmVwb3NpdG9yaWVzL1Byb2plY3RzL2hlbGxvLW5leHQvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTXlMYXlvdXQnO1xuXG4vLyBjb25zdCBJbmRleCA9ICgpID0+IChcbi8vICAgPGRpdj5cbi8vICAgICA8TGF5b3V0IC8+XG4vLyAgICAgPHA+SGVsbG8gTmV4dC5qczwvcD5cbi8vICAgPC9kaXY+XG4vLyApO1xuXG4vLyBleHBvcnQgZGVmYXVsdCBJbmRleFxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUb2RvSXRlbXMgZnJvbSAnLi4vY29tcG9uZW50cy9Ub2RvSXRlbXMnO1xuXG5jbGFzcyBUb2RvTGlzdCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHRvZG9zOiBbXVxuICAgIH07XG5cbiAgICB0aGlzLmFkZFRvZG8gPSB0aGlzLmFkZFRvZG8uYmluZCh0aGlzKTtcbiAgICB0aGlzLmRlbGV0ZVRvZG8gPSB0aGlzLmRlbGV0ZVRvZG8uYmluZCh0aGlzKTtcbiAgfVxuXG4gIGFkZFRvZG8oZSkge1xuICAgIGlmICh0aGlzLmlucHV0RWxlbWVudC52YWx1ZSAhPT0gXCJcIikge1xuICAgICAgbGV0IG5ld1RvZG8gPSB7XG4gICAgICAgIHRleHQ6IHRoaXMuaW5wdXRFbGVtZW50LnZhbHVlLFxuICAgICAgICBrZXk6IERhdGUubm93KClcbiAgICAgIH07XG5cbiAgICAgIHRoaXMuc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHRvZG9zOiBwcmV2U3RhdGUudG9kb3MuY29uY2F0KG5ld1RvZG8pXG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLmlucHV0RWxlbWVudC52YWx1ZSA9IFwiXCI7XG5cbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnRvZG9zKTtcblxuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIGRlbGV0ZVRvZG8oa2V5KSB7XG4gICAgbGV0IGZpbHRlcmVkVG9kb3MgPSB0aGlzLnN0YXRlLnRvZG9zLmZpbHRlcigodG9kbykgPT4ge1xuICAgICAgcmV0dXJuICh0b2RvLmtleSAhPT0ga2V5KVxuICAgIH0pO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB0b2RvczogZmlsdGVyZWRUb2Rvc1xuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvZG9MaXN0Q29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4gICAgICAgICAgPGgxPlRvZG8gTGlzdCBBcHA8L2gxPlxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmFkZFRvZG99PlxuICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICByZWY9eyhhKSA9PiB0aGlzLmlucHV0RWxlbWVudCA9IGF9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgVGFza1wiIC8+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5BZGQgVGFzazwvYnV0dG9uPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxUb2RvSXRlbXMgZW50cmllcyA9IHt0aGlzLnN0YXRlLnRvZG9zfSBcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlID0ge3RoaXMuZGVsZXRlVG9kb31cbiAgICAgICAgLz5cbiAgICAgICAgPHN0eWxlIGpzeD4ge2BcbiAgICAgICAgICAudG9kb0xpc3RDb250YWluZXIge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogY2FkZXRibHVlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuaGVhZGVyIHtcbiAgICAgICAgICAgIG1heC13aWR0aDogOTAwcHg7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC50b2RvTGlzdENvbnRhaW5lciAuaGVhZGVyIGlucHV0IHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICBmb250U2l6ZTogMTZweDtcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XG4gICAgICAgICAgICB3aWR0aDogMTY1cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnRvZG9MaXN0Q29udGFpbmVyIC5oZWFkZXIgYnV0dG9uIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDY2ZmY7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMDY2ZmY7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnRvZG9MaXN0Q29udGFpbmVyIC5oZWFkZXIgYnV0dG9uOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDMzOTk7XG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjMDAzMzk5O1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9kb0xpc3Q7Il19 */\n/*@ sourceURL=/home/sir_gregg/Desktop/Greg/Repositories/Projects/hello-next/pages/index.js */"));
    }
  }]);

  return TodoList;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (TodoList);

/***/ })

})
//# sourceMappingURL=index.js.e7fa65e0c25de60e59c1.hot-update.js.map