import { createContext, useState, useMemo } from 'react';

const TodoContext = createContext();

const Provider = ({ children }) => {
  const [todoList, setTodoList] = useState([]);
  const [activeFilter, setActiveFilter] = useState(1);

  const filters = useMemo(
    () => [
      { id: 1, title: 'All', filter: () => true },
      { id: 2, title: 'Active', filter: ({ completed }) => !completed },
      { id: 3, title: 'Completed', filter: ({ completed }) => completed }
    ],
    []
  );

  const addTodo = description => {
    const newTodo = {
      id: Math.floor(Math.random() * 9999),
      description,
      completed: false
    };
    setTodoList([...todoList, newTodo]);
  };

  const toggleCompleted = id => {
    const newList = todoList.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodoList(newList);
  };

  const deleteTodo = id => {
    setTodoList(todoList.filter(({ id: todoId }) => todoId !== id));
  };

  const handleChangeFilter = newfilter => setActiveFilter(() => newfilter);

  const visibleTodos = useMemo(() => {
    const filter = filters.find(({ id }) => id === activeFilter).filter;
    return todoList.filter(filter);
  }, [todoList, activeFilter, filters]);

  const handleClearCompleted = () =>
    setTodoList(todoList.filter(({ completed }) => !completed));

  const activeNumber = useMemo(
    () => todoList.filter(({ completed }) => !completed).length,
    [todoList]
  );

  const handleChangeList = newList => setTodoList(newList);

  const sharedObj = {
    todoList,
    activeFilter,
    filters,
    addTodo,
    toggleCompleted,
    deleteTodo,
    handleChangeFilter,
    visibleTodos,
    handleClearCompleted,
    activeNumber,
    handleChangeList
  };
  return (
    <TodoContext.Provider value={sharedObj}>{children}</TodoContext.Provider>
  );
};

export { Provider };

export default TodoContext;
