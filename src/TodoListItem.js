import React from 'react';

function TodoListItem(props) {
  return (
    <li>
      <span>ID: {props.todo.id}</span>
      <br />
      <span>Title: {props.todo.title}</span>
    </li>
  );
}

export default TodoListItem;
