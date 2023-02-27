import './TodoFilter.css';

const TodoFilter = ({ handleChangeFilter, filters, activeFilter }) => {
  return (
    <div className="todo-filters">
      {filters.map(filter => (
        <button
          className={`todo-filter ${
            filter.id === activeFilter ? 'active' : ''
          }`}
          onClick={() => handleChangeFilter(filter.id)}
          key={filter.id}
        >
          {filter.title}
        </button>
      ))}
    </div>
  );
};

export default TodoFilter;
