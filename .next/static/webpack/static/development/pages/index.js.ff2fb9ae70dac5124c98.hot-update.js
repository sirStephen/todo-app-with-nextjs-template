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
        className: "jsx-3499298055" + " " + "todoListContainer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3499298055" + " " + "header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", {
        className: "jsx-3499298055",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, "Todo List App"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("form", {
        onSubmit: this.addTodo,
        className: "jsx-3499298055",
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
        className: "jsx-3499298055",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        type: "submit",
        className: "jsx-3499298055",
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
        id: "3499298055",
        __self: this
      }, ".jsx-3499298055{box-sizing:border-box;}*.jsx-3499298055,*.jsx-3499298055::after,*.jsx-3499298055::before{margin:0;padding:0;box-sizing:inherit;}.todoListContainer.jsx-3499298055{margin:0;background-color:white;height:100vh;}.header.jsx-3499298055{max-width:900px;margin:0 auto;background-color:#f5f5f5;}.todoListContainer.jsx-3499298055 .header.jsx-3499298055 input.jsx-3499298055{padding:10px;fontSize:16px;border:2px solid #fff;width:165px;}.todoListContainer.jsx-3499298055 .header.jsx-3499298055 button.jsx-3499298055{padding:10px;font-size:16px;margin:10px;margin-right:0px;background-color:#0066ff;color:#fff;border:2px solid #0066ff;}.todoListContainer.jsx-3499298055 .header.jsx-3499298055 button.jsx-3499298055:hover{background-color:#003399;border:2px solid #003399;cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Npcl9ncmVnZy9EZXNrdG9wL0dyZWcvUmVwb3NpdG9yaWVzL1Byb2plY3RzL2hlbGxvLW5leHQvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUVxQixBQUtzQixBQUtXLEFBR1gsQUFNTyxBQU1ILEFBT0EsQUFVWSxTQXBDZixBQVFhLElBWVQsQUFPQyxHQWJELEdBYkssR0F1Q3ZCLEdBSDZCLEVBaEJILENBT1YsRUFiYSxFQU5aLE1BUGYsRUEyQm1CLEtBbkJuQixJQVljLENBZ0JHLEtBdEJqQixFQWMyQixJQVAzQixJQWdCQSxpQkFSYSxXQUNjLHlCQUMzQiIsImZpbGUiOiIvaG9tZS9zaXJfZ3JlZ2cvRGVza3RvcC9HcmVnL1JlcG9zaXRvcmllcy9Qcm9qZWN0cy9oZWxsby1uZXh0L3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL015TGF5b3V0JztcblxuLy8gY29uc3QgSW5kZXggPSAoKSA9PiAoXG4vLyAgIDxkaXY+XG4vLyAgICAgPExheW91dCAvPlxuLy8gICAgIDxwPkhlbGxvIE5leHQuanM8L3A+XG4vLyAgIDwvZGl2PlxuLy8gKTtcblxuLy8gZXhwb3J0IGRlZmF1bHQgSW5kZXhcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVG9kb0l0ZW1zIGZyb20gJy4uL2NvbXBvbmVudHMvVG9kb0l0ZW1zJztcblxuY2xhc3MgVG9kb0xpc3QgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB0b2RvczogW11cbiAgICB9O1xuXG4gICAgdGhpcy5hZGRUb2RvID0gdGhpcy5hZGRUb2RvLmJpbmQodGhpcyk7XG4gICAgdGhpcy5kZWxldGVUb2RvID0gdGhpcy5kZWxldGVUb2RvLmJpbmQodGhpcyk7XG4gIH1cblxuICBhZGRUb2RvKGUpIHtcbiAgICBpZiAodGhpcy5pbnB1dEVsZW1lbnQudmFsdWUgIT09IFwiXCIpIHtcbiAgICAgIGxldCBuZXdUb2RvID0ge1xuICAgICAgICB0ZXh0OiB0aGlzLmlucHV0RWxlbWVudC52YWx1ZSxcbiAgICAgICAga2V5OiBEYXRlLm5vdygpXG4gICAgICB9O1xuXG4gICAgICB0aGlzLnNldFN0YXRlKChwcmV2U3RhdGUpID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB0b2RvczogcHJldlN0YXRlLnRvZG9zLmNvbmNhdChuZXdUb2RvKVxuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQudmFsdWUgPSBcIlwiO1xuXG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS50b2Rvcyk7XG5cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICBkZWxldGVUb2RvKGtleSkge1xuICAgIGxldCBmaWx0ZXJlZFRvZG9zID0gdGhpcy5zdGF0ZS50b2Rvcy5maWx0ZXIoKHRvZG8pID0+IHtcbiAgICAgIHJldHVybiAodG9kby5rZXkgIT09IGtleSlcbiAgICB9KTtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdG9kb3M6IGZpbHRlcmVkVG9kb3NcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b2RvTGlzdENvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxuICAgICAgICAgIDxoMT5Ub2RvIExpc3QgQXBwPC9oMT5cbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5hZGRUb2RvfT5cbiAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgcmVmPXsoYSkgPT4gdGhpcy5pbnB1dEVsZW1lbnQgPSBhfVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFRhc2tcIiAvPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+QWRkIFRhc2s8L2J1dHRvbj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8VG9kb0l0ZW1zIGVudHJpZXMgPSB7dGhpcy5zdGF0ZS50b2Rvc30gXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSA9IHt0aGlzLmRlbGV0ZVRvZG99XG4gICAgICAgIC8+XG4gICAgICAgIDxzdHlsZSBqc3g+IHtgXG4gICAgICAgICAgKixcbiAgICAgICAgICAqOjphZnRlcixcbiAgICAgICAgICAqOjpiZWZvcmUge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGluaGVyaXQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblxuICAgICAgICAgIC50b2RvTGlzdENvbnRhaW5lciB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmhlYWRlciB7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDkwMHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC50b2RvTGlzdENvbnRhaW5lciAuaGVhZGVyIGlucHV0IHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICBmb250U2l6ZTogMTZweDtcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XG4gICAgICAgICAgICB3aWR0aDogMTY1cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnRvZG9MaXN0Q29udGFpbmVyIC5oZWFkZXIgYnV0dG9uIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDY2ZmY7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMDY2ZmY7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnRvZG9MaXN0Q29udGFpbmVyIC5oZWFkZXIgYnV0dG9uOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDMzOTk7XG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjMDAzMzk5O1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9kb0xpc3Q7Il19 */\n/*@ sourceURL=/home/sir_gregg/Desktop/Greg/Repositories/Projects/hello-next/pages/index.js */"));
    }
  }]);

  return TodoList;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (TodoList);

/***/ })

})
//# sourceMappingURL=index.js.ff2fb9ae70dac5124c98.hot-update.js.map