import React from 'react';
import TodoListItem from './TodoListItem';

const list = [
  { id: 'id1', title: 'title #1' },
  { id: 'id2', title: 'title #2' },
  { id: 'id3', title: 'title #3' },
];

function TodoList() {
  return (
    <ul>
      {list.map((item) => (
        <TodoListItem key={item.id} todo={item} />
      ))}
    </ul>
  );
}

export default TodoList;
