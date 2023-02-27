import Todo from '../Todo';
import ListFooter from '../ListFooter';

import useTodoContext from '../../hooks/use-todo-context';

import './TodoList.css';

const TodoList = () => {
  const { visibleTodos } = useTodoContext();

  return (
    <div className="todo-list">
      {visibleTodos?.map(todo => (
        <Todo key={todo.id} todo={todo} />
      ))}
      <ListFooter />
    </div>
  );
};

export default TodoList;
