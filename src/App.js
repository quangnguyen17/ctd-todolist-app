import { useState } from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

const App = () => {
  const [newTodo, setNewTodo] = useState('');

  return (
    <div>
      <h1>TODO</h1>
      <p>{newTodo}</p>
      <AddTodoForm onAddTodo={setNewTodo} />
      <TodoList />
    </div>
  );
};

export default App;
