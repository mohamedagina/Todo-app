import './TodoFilter.css';

import useTodoContext from '../../hooks/use-todo-context';

const filters = ['all', 'active', 'completed'];

const TodoFilters = () => {
  const { handleChangeFilter, activeFilter } = useTodoContext();

  return (
    <div className="todo-filters">
      {filters.map(filter => (
        <button
          key={filter}
          className={`todo-filter ${filter === activeFilter ? 'active' : ''}`}
          onClick={() => handleChangeFilter(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default TodoFilters;
