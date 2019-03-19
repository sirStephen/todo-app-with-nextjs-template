import React, { Component } from 'react';
import TodoItems from '../components/TodoItems';

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: []
    };

    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  addTodo(e) {
    if (this.inputElement.value !== "") {
      let newTodo = {
        text: this.inputElement.value,
        key: Date.now()
      };

      this.setState((prevState) => {
        return {
          todos: prevState.todos.concat(newTodo)
        };
      });
    }

    this.inputElement.value = "";

    console.log(this.state.todos);

    e.preventDefault();
  }

  deleteTodo(key) {
    let filteredTodos = this.state.todos.filter((todo) => {
      return (todo.key !== key)
    });

    this.setState({
      todos: filteredTodos
    });
  }

  render() {
    return (
      <div className="todoListContainer">
        <div className="header">
          <h1>Todo List App</h1>
          <div>
            <form onSubmit={this.addTodo}>
              <input 
                ref={(a) => this.inputElement = a}
                placeholder="Enter Task" />
              <button type="submit">Add Task</button>
            </form>
          </div>
        </div>
        <TodoItems entries = {this.state.todos} 
                    delete = {this.deleteTodo}
        />
        <style jsx> {`
          .todoListContainer {
            margin: 60px auto;
            background-color: #f5f5f5;
            height: 100vh;
            max-width: 900px;
            padding: 20px;
          }

          .header h1 {
            margin: 60px;
            color: #BC845E;
            text-align: center;
          }

          .todoListContainer .header input {
            padding: 15px;
            fontSize: 16px;
            border: 2px solid #BC845E;
            width: 84%;
          }

          .todoListContainer .header button {
            padding: 15px;
            font-size: 16px;
            margin: 10px;
            margin-right: 0px;
            background-color: #BC845E;
            color: #fff;
            border: 2px solid #BC845E;
          }

          .todoListContainer .header button:hover {
            background-color: #704D34;
            border: 2px solid #704D34;
            cursor: pointer;
          }
        `}
        </style>
      </div>
    );
  }
}

export default TodoList;