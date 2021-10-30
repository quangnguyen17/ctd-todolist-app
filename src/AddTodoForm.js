import { useState } from 'react';

function AddTodoForm(props) {
  const [text, setText] = useState(''); // initial value will be an empty string

  const handleAddTodo = (event) => {
    event.preventDefault();

    // method 1: extract text from event (not recommended)
    // console.log(event.target.title.value);
    // invoke the onAddTodo callback prop and pass newTodo as an argument
    // props.onAddTodo(event.target.title.value);
    // clear input text
    // event.target.title.value = '';

    // method 2: store text in a state variable (recommended)
    // console.log(text);
    props.onAddTodo(text);
    setText(''); // set text to an empty string
  };

  return (
    <form onSubmit={handleAddTodo}>
      <label htmlFor="todoTitle">Title</label>
      <input
        id="todoTitle"
        name="title"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

export default AddTodoForm;
