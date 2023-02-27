import Todo from '../Todo';
import ListFooter from '../ListFooter';

import useTodoContext from '../../hooks/use-todo-context';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import './TodoList.css';

const TodoList = () => {
  const { visibleTodos, handleListReOrder } = useTodoContext();

  const handleDragEnd = result => {
    if (!result.destination) {
      return;
    }

    handleListReOrder(result.source.index, result.destination.index);
  };

  return (
    <div className="todo-list">
      <DragDropContext onDragEnd={handleDragEnd}>
        {visibleTodos.length > 0 && (
          <Droppable droppableId="todo-list">
            {provided => (
              <div
                className="todo-items"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {visibleTodos?.map((todo, index) => (
                  <Todo key={todo.id} todo={todo} index={index} />
                ))}

                {provided.placeholder}
              </div>
            )}
          </Droppable>
        )}
      </DragDropContext>
      <ListFooter />
    </div>
  );
};

export default TodoList;
