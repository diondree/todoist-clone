import React from 'react';
import { Todo } from '../store/todos/types';
import { RootState } from '../store';
import TodoItem from './todo';
import { useSelector } from 'react-redux';

export interface TodoListProps {
  // todos: Todo[];
}

const TodoList: React.FC<TodoListProps> = () => {
  const todos = useSelector((state: RootState) => state.todos);
  return (
    <div>
      <ul>
        {todos.map((todo: Todo) => (
          <li key={todo.id}>
            <TodoItem todo={todo} />
          </li>
        ))}
        <li></li>
      </ul>
    </div>
  );
};

export default TodoList;
