import { createContext, useState, useMemo } from 'react';

export const filters = ['all', 'active', 'completed'];

const TodoContext = createContext();

const Provider = ({ children }) => {
  const [todoList, setTodoList] = useState([]);
  const [activeFilter, setActiveFilter] = useState('all');

  // const filters = useMemo(
  //   () => [
  //     { id: 1, title: 'All', filter: () => true },
  //     { id: 2, title: 'Active', filter: ({ completed }) => !completed },
  //     { id: 3, title: 'Completed', filter: ({ completed }) => completed },
  //     { id: 3, title: 'Completed', filter: ({ completed }) => completed },
  //   ],
  //   []
  // );

  const addTodo = description => {
    const newTodo = {
      id: getID(),
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
    setTodoList(todoList.filter(todo => todo.id !== id));
  };

  const handleChangeFilter = newFilter => setActiveFilter(newFilter);

  const visibleTodos = useMemo(() => {
    if (activeFilter === 'all') return todoList;

    return todoList.filter(todo => {
      switch (activeFilter) {
        case 'active':
          return !todo.completed;
        case 'completed':
          return todo.completed;
        default:
          return true;
      }
    });
  }, [todoList, activeFilter]);

  const handleClearCompleted = () =>
    setTodoList(todoList.filter(({ completed }) => !completed));

  const activeNumber = useMemo(
    () => todoList.filter(({ completed }) => !completed).length,
    [todoList]
  );

  const handleListReOrder = (source, destination) => {
    const indexOne = todoList.findIndex(
      todo => todo.id === visibleTodos[source].id
    );
    const indexTwo = todoList.findIndex(
      todo => todo.id === visibleTodos[destination].id
    );

    const newOrder = [...todoList];
    const firstItem = newOrder[indexOne];
    newOrder.splice(indexOne, 1);
    newOrder.splice(indexTwo, 0, firstItem);
    setTodoList(newOrder);
  };

  const sharedObj = {
    todoList,
    activeFilter,
    addTodo,
    toggleCompleted,
    deleteTodo,
    handleChangeFilter,
    visibleTodos,
    handleClearCompleted,
    activeNumber,
    handleListReOrder
  };

  return (
    <TodoContext.Provider value={sharedObj}>{children}</TodoContext.Provider>
  );
};

const getID = () => Math.floor(Math.random() * 9999);

export { Provider };

export default TodoContext;
