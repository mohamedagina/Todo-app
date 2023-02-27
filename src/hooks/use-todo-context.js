import { useContext } from 'react';
import TodoContext from '../context/TodoContext';

const useTodoContext = () => useContext(TodoContext);

export default useTodoContext;
