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
        className: "jsx-1400258052" + " " + "todoListContainer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1400258052" + " " + "header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", {
        className: "jsx-1400258052",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, "Todo List App"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("form", {
        onSubmit: this.addTodo,
        className: "jsx-1400258052",
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
        className: "jsx-1400258052",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        type: "submit",
        className: "jsx-1400258052",
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
        id: "1400258052",
        __self: this
      }, ".todoListContainer.jsx-1400258052{margin:0;background-color:cadetblue;height:100vh;}.header.jsx-1400258052{max-width:900px;margin:0 auto;}.todoListContainer.jsx-1400258052 .header.jsx-1400258052 input.jsx-1400258052{padding:10px;fontSize:16px;border:2px solid #fff;width:165px;}.todoListContainer.jsx-1400258052 .header.jsx-1400258052 button.jsx-1400258052{padding:10px;font-size:16px;margin:10px;margin-right:0px;background-color:#0066ff;color:#fff;border:2px solid #0066ff;}.todoListContainer.jsx-1400258052 .header.jsx-1400258052 button.jsx-1400258052:hover{background-color:#003399;border:2px solid #003399;cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Npcl9ncmVnZy9EZXNrdG9wL0dyZWcvUmVwb3NpdG9yaWVzL1Byb2plY3RzL2hlbGxvLW5leHQvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUVxQixBQUdzQixBQU1PLEFBS0gsQUFPQSxBQVVZLFNBM0JFLElBV2IsQUFPQyxHQVpELFNBc0JXLEVBaEJILENBT1YsRUFaZCxNQU5lLElBbUJJLFNBbEJuQixBQVdjLENBZ0JHLE9BUlUsSUFQM0IsSUFnQkEsaUJBUmEsV0FDYyx5QkFDM0IiLCJmaWxlIjoiL2hvbWUvc2lyX2dyZWdnL0Rlc2t0b3AvR3JlZy9SZXBvc2l0b3JpZXMvUHJvamVjdHMvaGVsbG8tbmV4dC9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUxheW91dCc7XG5cbi8vIGNvbnN0IEluZGV4ID0gKCkgPT4gKFxuLy8gICA8ZGl2PlxuLy8gICAgIDxMYXlvdXQgLz5cbi8vICAgICA8cD5IZWxsbyBOZXh0LmpzPC9wPlxuLy8gICA8L2Rpdj5cbi8vICk7XG5cbi8vIGV4cG9ydCBkZWZhdWx0IEluZGV4XG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFRvZG9JdGVtcyBmcm9tICcuLi9jb21wb25lbnRzL1RvZG9JdGVtcyc7XG5cbmNsYXNzIFRvZG9MaXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdG9kb3M6IFtdXG4gICAgfTtcblxuICAgIHRoaXMuYWRkVG9kbyA9IHRoaXMuYWRkVG9kby5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZGVsZXRlVG9kbyA9IHRoaXMuZGVsZXRlVG9kby5iaW5kKHRoaXMpO1xuICB9XG5cbiAgYWRkVG9kbyhlKSB7XG4gICAgaWYgKHRoaXMuaW5wdXRFbGVtZW50LnZhbHVlICE9PSBcIlwiKSB7XG4gICAgICBsZXQgbmV3VG9kbyA9IHtcbiAgICAgICAgdGV4dDogdGhpcy5pbnB1dEVsZW1lbnQudmFsdWUsXG4gICAgICAgIGtleTogRGF0ZS5ub3coKVxuICAgICAgfTtcblxuICAgICAgdGhpcy5zZXRTdGF0ZSgocHJldlN0YXRlKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdG9kb3M6IHByZXZTdGF0ZS50b2Rvcy5jb25jYXQobmV3VG9kbylcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMuaW5wdXRFbGVtZW50LnZhbHVlID0gXCJcIjtcblxuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUudG9kb3MpO1xuXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgZGVsZXRlVG9kbyhrZXkpIHtcbiAgICBsZXQgZmlsdGVyZWRUb2RvcyA9IHRoaXMuc3RhdGUudG9kb3MuZmlsdGVyKCh0b2RvKSA9PiB7XG4gICAgICByZXR1cm4gKHRvZG8ua2V5ICE9PSBrZXkpXG4gICAgfSk7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHRvZG9zOiBmaWx0ZXJlZFRvZG9zXG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9kb0xpc3RDb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cbiAgICAgICAgICA8aDE+VG9kbyBMaXN0IEFwcDwvaDE+XG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuYWRkVG9kb30+XG4gICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgIHJlZj17KGEpID0+IHRoaXMuaW5wdXRFbGVtZW50ID0gYX1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBUYXNrXCIgLz5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkFkZCBUYXNrPC9idXR0b24+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPFRvZG9JdGVtcyBlbnRyaWVzID0ge3RoaXMuc3RhdGUudG9kb3N9IFxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgPSB7dGhpcy5kZWxldGVUb2RvfVxuICAgICAgICAvPlxuICAgICAgICA8c3R5bGUganN4PiB7YFxuICAgICAgICAgIC50b2RvTGlzdENvbnRhaW5lciB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjYWRldGJsdWU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5oZWFkZXIge1xuICAgICAgICAgICAgbWF4LXdpZHRoOiA5MDBweDtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC50b2RvTGlzdENvbnRhaW5lciAuaGVhZGVyIGlucHV0IHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICBmb250U2l6ZTogMTZweDtcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XG4gICAgICAgICAgICB3aWR0aDogMTY1cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnRvZG9MaXN0Q29udGFpbmVyIC5oZWFkZXIgYnV0dG9uIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDY2ZmY7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMDY2ZmY7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnRvZG9MaXN0Q29udGFpbmVyIC5oZWFkZXIgYnV0dG9uOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDMzOTk7XG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjMDAzMzk5O1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9kb0xpc3Q7Il19 */\n/*@ sourceURL=/home/sir_gregg/Desktop/Greg/Repositories/Projects/hello-next/pages/index.js */"));
    }
  }]);

  return TodoList;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (TodoList);

/***/ })

})
//# sourceMappingURL=index.js.6f631cf0dd1ac3a71b39.hot-update.js.map