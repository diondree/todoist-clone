import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelect } from 'downshift';
import { addTodo, updateTodo } from '../store/todos/actions';
import { NewTodo, Todo } from '../store/todos/types';

import TodayIcon from './todayIcon';
import { ReactComponent as TomorrowIcon } from '../svgs/tomorrow.svg';
import { ReactComponent as NextWeekIcon } from '../svgs/next-week.svg';
import { ReactComponent as NoDateIcon } from '../svgs/no-date.svg';
import { formatDateString } from '../utils';

export interface TodoFormProps {
  todo?: NewTodo | Todo;
  onCancel?: Function;
  /** Event handler function to be called when form is submitted */
  onConfirm?: Function;
}

const initialTodo = { text: '', dueDate: '' };

const TodoForm: React.FC<TodoFormProps> = ({ todo = initialTodo, onCancel, onConfirm }) => {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const nextweek = new Date(today);
  nextweek.setDate(nextweek.getDate() + 7);

  const defaultSelected = { value: today.toDateString(), label: 'Today', icon: <TodayIcon /> };
  const dueDateOptions = [
    defaultSelected,
    {
      value: tomorrow.toDateString(),
      label: 'Tomorrow',
      icon: <TomorrowIcon className="due-date-icon__tomorrow" />,
    },
    {
      value: nextweek.toDateString(),
      label: 'Next Week',
      icon: <NextWeekIcon className="due-date-icon__nextweek" />,
    },
    { value: '', label: 'No Date', icon: <NoDateIcon /> },
  ];

  const {
    isOpen,
    selectedItem,
    getToggleButtonProps,
    getMenuProps,
    highlightedIndex,
    getItemProps,
  } = useSelect({ items: dueDateOptions, initialSelectedItem: defaultSelected });

  const [newTodo, setNewTodo] = useState<NewTodo>({ ...todo });
  const dispatch = useDispatch();
  const inputRef = React.createRef<HTMLInputElement>();

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo({ ...newTodo, text: event.target.value });
  };

  const addNewToDo = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(addTodo({ ...newTodo, dueDate: selectedItem.value }));
    setNewTodo({ ...todo });
    //@ts-ignore
    inputRef.current.focus();
    if (onConfirm) {
      onConfirm('new');
    }
  };

  const updateTodoHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(updateTodo(newTodo as Todo));
    if (onConfirm) {
      onConfirm('update');
    }
  };

  const onCancelHandler = () => {
    if (onCancel) {
      onCancel();
    }
  };

  const handler = todo.text !== '' ? updateTodoHandler : addNewToDo;

  return (
    <form className="todo-editor" onSubmit={handler}>
      <div className="todo-editor-details">
        <div className="todo-editor-input">
          <input
            type="text"
            className="py-2 px-2 w-full"
            value={newTodo.text}
            onChange={onInputChange}
            ref={inputRef}
          />
        </div>
        <div className="todo-editor-assign relative">
          <button
            type="button"
            className={`todo-editor-assign__due px-2 ${
              selectedItem.value !== '' && 'todo-editor-assign__due--has-date'
            }`}
            {...getToggleButtonProps()}
          >
            {selectedItem.value !== '' ? formatDateString(selectedItem.value) : 'Schedule'}
          </button>
          <ul
            {...getMenuProps()}
            className={`todo-editor-assign__dropdown py-1 ${
              !isOpen && 'todo-editor-assign__dropdown--closed'
            }`}
          >
            {isOpen &&
              dueDateOptions.map((item, index) => (
                <button
                  className={`todo-editor-assign__dropdown-item ${
                    highlightedIndex === index && 'todo-editor-assign__dropdown-item-hover'
                  }`}
                  key={`${item.value}${index}`}
                  {...getItemProps({ item, index })}
                >
                  <div className="due-date-icon">{item.icon}</div>
                  {item.label}
                </button>
              ))}
          </ul>
        </div>
      </div>
      <div className="todo-editor-actions">
        <div className="todo-item__actions"></div>
        <button className="todo-item__submit" type="submit" disabled={newTodo.text === ''}>
          {todo.text !== '' ? 'Save' : 'Add Task'}
        </button>
        <button type="button" className="todo-item__cancel" onClick={onCancelHandler}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
