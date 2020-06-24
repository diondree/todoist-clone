import React from 'react';
import { Todo } from '../store/todos/types';
export interface TodoItemProps {
  todo: Todo;
  onClick?: React.MouseEvent<HTMLElement>;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onClick }) => {
  return (
    <div>
      <span>Todo</span>
      <p>{todo.text}</p>
    </div>
  );
};

export default TodoItem;
