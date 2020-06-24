import React from 'react';
import { Todo } from '../store/todos/types';
import { ReactComponent as DragIcon } from '../svgs/drag.svg';
import { ReactComponent as CheckedIcon } from '../svgs/checked.svg';
import { ReactComponent as DotIcon } from '../svgs/dot.svg';
import { ReactComponent as EditIcon } from '../svgs/edit.svg';

export interface TodoItemProps {
  todo: Todo;
  onClick?: React.MouseEvent<HTMLElement>;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onClick }) => {
  return (
    <div className="todo-item">
      <div className="todo-item__drag">
        <span className="todo-item__drag-handle">
          <DragIcon className="inline" />
        </span>
      </div>
      <button role="checkbox" type="button" aria-checked="false" className="todo-item__checkbox">
        <CheckedIcon />
      </button>
      <div className="todo-item__content-holder">
        <div className="todo-item__content">
          <span>{todo.text}</span>
        </div>
        <div className="todo-item__info-tags">
          <span className="todo-item__project">
            <a href="#project/2236668498">
              <span>Inbox</span>
              <DotIcon color="#b8b8b8" height="12" width="12" viewBox="0 0 12 12" />
            </a>
          </span>
        </div>
      </div>
      <div className="todo-item__actions">
        <button type="button" aria-label="Edit">
          <EditIcon />
        </button>
        <button></button>
        <button></button>
        <button></button>
      </div>
    </div>
  );
};

export default TodoItem;
