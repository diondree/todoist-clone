import React from 'react';
import { Todo } from '../store/todos/types';
import { ReactComponent as DragIcon } from '../svgs/drag.svg';
import { ReactComponent as CheckedIcon } from '../svgs/checked.svg';
import { ReactComponent as DotIcon } from '../svgs/dot.svg';
import { ReactComponent as EditIcon } from '../svgs/edit.svg';
import { ReactComponent as MoreMenuIcon } from '../svgs/more-menu.svg';
import { useDispatch } from 'react-redux';
import { toggleTodo } from '../store/todos/actions';

export interface TodoItemProps {
  todo: Todo;
  onEdit?: Function;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onEdit }) => {
  const dispatch = useDispatch();
  const onEditHandler = () => {
    if (onEdit) {
      onEdit(todo.id);
    }
  };

  const onCheckHandler = () => {
    dispatch(toggleTodo(todo.id));
  };

  return (
    <div className="todo-item">
      <div className="todo-item__drag">
        <span className="todo-item__drag-handle">
          <DragIcon className="inline" />
        </span>
      </div>
      <button
        role="checkbox"
        type="button"
        aria-checked="false"
        className="todo-item__checkbox"
        onClick={onCheckHandler}
      >
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
        <button type="button" aria-label="Edit" onClick={onEditHandler}>
          <EditIcon />
        </button>
        <button type="button" aria-label="More task actions">
          <MoreMenuIcon />
        </button>
        {/* <button type="button"></button>
        <button type="button"></button> */}
      </div>
    </div>
  );
};

export default TodoItem;
