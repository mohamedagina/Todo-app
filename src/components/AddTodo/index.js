import { useState } from 'react';
import useTodoContext from '../../hooks/use-todo-context';

import './AddTodo.css';

const AddTodo = () => {
  const [todo, setTodo] = useState('');

  const { addTodo } = useTodoContext();

  const handleSubmit = e => {
    e.preventDefault();

    const trimmedTodo = todo.trim();
    if (!trimmedTodo) return;

    addTodo(trimmedTodo);
    setTodo('');
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
