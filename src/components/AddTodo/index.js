import { useState } from 'react';

import './AddTodo.css';

const AddTodo = ({ addTodo }) => {
  const [todo, setTodo] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (todo.trim()) {
      addTodo(todo);
      setTodo('');
    }
  };

  return (
    <form className="add-todo" onSubmit={handleSubmit}>
      <div className="outline-circle"></div>
      <input
        value={todo}
        onChange={e => setTodo(e.target.value)}
        placeholder="Create a new todo..."
      />
    </form>
  );
};

export default AddTodo;
