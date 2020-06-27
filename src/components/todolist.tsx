import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Todo } from '../store/todos/types';
import { RootState } from '../store';
import TodoItem from './todo';
import { ReactComponent as PlusIcon } from '../svgs/plus-lg.svg';
import TodoForm from './todoform';

type Filter = 'today' | 'upcoming' | undefined;

export interface TodoListProps {
  filter?: Filter;
}

const getFilteredTodos = (filter: Filter, todos: Todo[]): Todo[] => {
  if (filter === 'today') {
    const today = new Date().toDateString();
    return todos.filter((todo) => todo.dueDate === today);
  }
  if (filter === 'upcoming') {
    const today = new Date().toDateString();
    return todos.filter((todo) => todo.dueDate && Date.parse(todo.dueDate) > Date.parse(today));
  }

  return todos;
};
const TodoList: React.FC<TodoListProps> = ({ filter }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState('');

  const todos = useSelector((state: RootState) => state.todos);
  const filteredTodos = getFilteredTodos(filter, todos);

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

  const handleFormSubmit = (submitType: 'update' | 'new') => {
    if (submitType === 'update') {
      setSelectedTodo('');
      setIsEditing(false);
    }
  };

  return (
    <div>
      <ul>
        {filteredTodos.map(
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
              onConfirm={handleFormSubmit}
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
