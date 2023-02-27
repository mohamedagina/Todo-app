import TodoFilter from '../TodoFilter';

import useTodoContext from '../../hooks/use-todo-context';

import './ListFooter.css';

const ListFooter = () => {
  const { activeNumber, handleClearCompleted } = useTodoContext();
  return (
    <footer className="list-footer">
      <div className="active-number">
        {activeNumber} {activeNumber === 1 ? 'item' : 'items'} left
      </div>

      <TodoFilter />

      <button
        className="clear-completed"
        type="button"
        onClick={handleClearCompleted}
      >
        Clear Completed
      </button>
    </footer>
  );
};

export default ListFooter;
