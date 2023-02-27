import AddTodo from '../AddTodo';
import TodoList from '../TodoList';
import TodoFilter from '../TodoFilter';

import { Provider } from '../../context/TodoContext';

import './TodoSection.css';

const TodoSection = () => {
  return (
    <Provider>
      <div className="todo-section">
        <AddTodo />
        <TodoList />
        <TodoFilter />
      </div>
    </Provider>
  );
};

export default TodoSection;
