import React, { Component } from 'react';
import FlipMove from 'react-flip-move';

const liStyle = {
  color: '#333',
  backgroundColor: 'rgba(255, 255, 255, .5)',
  padding: '15px',
  marginBottom: '15px',
  borderRadius: '5px',
  listStyle: 'none',

  transition: 'backgroundColor .2s ease-out'
};

class TodoItems extends Component {
  constructor(props) {
    super(props);

    this.createTodos = this.createTodos.bind(this);
  }

  createTodos(todo) {
    return  <div>
      <li onClick={() => this.delete(todo.key)} 
        key={todo.key} style={liStyle} className="testing">
          {todo.text}
          <button>Delete Todo</button>
      </li>
      
    </div>
  }

  delete(key) {
    this.props.delete(key);
  }

  render() {
    let todoEntries = this.props.entries;
    let listTodos = todoEntries.map(this.createTodos);

    return (
      <div>
        <ul className="theList">
          <FlipMove duration={250} easing="ease-out">
            {listTodos}
          </FlipMove>
        </ul>
        <style jsx> {`
          ul.theList {
            padding: 0;
          }

          button {
            text-align: right;
          }
        `}
        </style>
      </div>
    );
  }
}

export default TodoItems;
