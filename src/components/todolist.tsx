import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Todo } from '../store/todos/types';
import { RootState } from '../store';
import TodoItem from './todo';
import { ReactComponent as PlusIcon } from '../svgs/plus-lg.svg';
import TodoForm from './todoform';

const TodoList: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState('');

  const todos = useSelector((state: RootState) => state.todos);

  const toggleEditing = () => {
    setIsEditing(!isEditing);
  };

  const handleEdit = (id: string) => {
    setSelectedTodo(id);
    setIsEditing(true);
  };

  const handleEditCancel = () => {
    setSelectedTodo('');
    setIsEditing(false);
  };

  return (
    <div>
      <ul>
        {todos.map(
          (todo: Todo) =>
            todo.id !== selectedTodo && (
              <li className="todo-list-item" key={todo.id}>
                <TodoItem todo={todo} onEdit={handleEdit} />
              </li>
            )
        )}
        {isEditing && (
          <li className="todo-form-manager">
            <TodoForm
              {...(selectedTodo !== '' && { todo: todos.find((todo) => todo.id === selectedTodo) })}
              onCancel={handleEditCancel}
            />
          </li>
        )}
        {!isEditing && (
          <li className="todo-actions">
            <button className="plus-add-button" onClick={toggleEditing}>
              <span className="icon-add">
                <PlusIcon height="13" width="13" />
              </span>
              Add Task
            </button>
          </li>
        )}
      </ul>
    </div>
  );
};

export default TodoList;
