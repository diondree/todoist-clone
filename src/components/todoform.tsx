import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelect } from 'downshift';
import { addTodo } from '../store/todos/actions';
import { NewTodo, Todo } from '../store/todos/types';

import TodayIcon from './todayIcon';
import { ReactComponent as TomorrowIcon } from '../svgs/tomorrow.svg';
import { ReactComponent as NextWeekIcon } from '../svgs/next-week.svg';
import { ReactComponent as NoDateIcon } from '../svgs/no-date.svg';

export interface TodoFormProps {
  todo?: NewTodo | Todo;
  onCancel?: Function;
}

const initialTodo = { text: '', dueDate: '' };

const formatDateString = (date: string) => {
  const dateParts = date.split(' ');
  return `${dateParts[1]} ${dateParts[2]}`;
};

const TodoForm: React.FC<TodoFormProps> = ({ todo = initialTodo, onCancel }) => {
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
  };

  const onCancelHandler = () => {
    if (onCancel) {
      onCancel();
    }
  };

  return (
    <form className="todo-editor" onSubmit={addNewToDo}>
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
          Add Task
        </button>
        <button type="button" className="todo-item__cancel" onClick={onCancelHandler}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default TodoForm;

/**
 * <form className="item_editor">
      <div className="item_editor_details">
        <div className="richtextinput item_editor_input">
          <div className="DraftEditor-root">
            <div className="DraftEditor-editorContainer">
              <div
                aria-describedby="placeholder-bge46"
                className="notranslate public-DraftEditor-content"
                contenteditable="true"
                role="textbox"
                spellcheck="true"
                style="outline: none; user-select: text; white-space: pre-wrap; overflow-wrap: break-word;"
              >
                <div data-contents="true">
                  <div
                    className=""
                    data-block="true"
                    data-editor="bge46"
                    data-offset-key="5o1l3-0-0"
                  >
                    <div
                      data-offset-key="5o1l3-0-0"
                      className="public-DraftStyleDefault-block public-DraftStyleDefault-ltr"
                    >
                      <span data-offset-key="5o1l3-0-0">
                        <br data-text="true" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="item_editor_assign">
          <button type="button" className="item_editor_assign_due item_editor_assign_due--has_date">
            Jun 23
          </button>
        </div>
      </div>
      <div className="item_editor_actions">
        <div className="item_actions" data-item-actions-root="" data-item-project-id="2236668498">
          <button
            type="button"
            id="dropdown-select-41"
            aria-owns="dropdown-select-41-popup"
            aria-controls="dropdown-select-41-popup"
            aria-expanded="false"
            aria-haspopup="listbox"
            aria-label="Select a project"
            className="item_action"
            data-reach-tooltip-trigger=""
          >
            <span>
              <svg
                data-svgs-path="sm1/project.svg"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  fill-rule="nonzero"
                  d="M10.5 17h9a.5.5 0 1 1 0 1h-9a.5.5 0 1 1 0-1zm0-6h9a.5.5 0 1 1 0 1h-9a.5.5 0 1 1 0-1zm0-6h9a.5.5 0 1 1 0 1h-9a.5.5 0 1 1 0-1zM5.75 18.75a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm0-6a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm0-6a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z"
                ></path>
              </svg>
            </span>
          </button>
          <button
            type="button"
            aria-label="Add label(s)"
            aria-owns="dropdown-select-42-popup"
            aria-controls="dropdown-select-42-popup"
            aria-expanded="false"
            aria-haspopup="listbox"
            className="item_action"
            data-reach-tooltip-trigger=""
          >
            <span>
              <svg
                data-svgs-path="sm1/label_outline.svg"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  fill-rule="nonzero"
                  d="M3.914 11.086l6.5-6.5A2 2 0 0 1 11.828 4H18a2 2 0 0 1 2 2v6.172a2 2 0 0 1-.586 1.414l-6.5 6.5a2 2 0 0 1-2.828 0l-6.172-6.172a2 2 0 0 1 0-2.828zm.707.707a1 1 0 0 0 0 1.414l6.172 6.172a1 1 0 0 0 1.414 0l6.5-6.5a1 1 0 0 0 .293-.707V6a1 1 0 0 0-1-1h-6.172a1 1 0 0 0-.707.293l-6.5 6.5zM14.75 10.5a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z"
                ></path>
              </svg>
            </span>
          </button>
          <button
            type="button"
            aria-label="Set the priority"
            aria-owns="dropdown-select-44-popup"
            aria-controls="dropdown-select-44-popup"
            aria-expanded="false"
            aria-haspopup="listbox"
            className="item_action item_actions_priority"
            data-reach-tooltip-trigger=""
          >
            <span>
              <svg
                data-svgs-path="sm1/priority_flag.svg"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  fill-rule="nonzero"
                  d="M5 13.777V19.5a.5.5 0 1 1-1 0V5a.5.5 0 0 1 .223-.416C5.313 3.857 6.742 3.5 8.5 3.5c1.113 0 1.92.196 3.658.776C13.796 4.82 14.53 5 15.5 5c1.575 0 2.813-.31 3.723-.916A.5.5 0 0 1 20 4.5V13a.5.5 0 0 1-.223.416c-1.09.727-2.519 1.084-4.277 1.084-1.113 0-1.92-.196-3.658-.776C10.204 13.18 9.47 13 8.5 13c-1.45 0-2.614.262-3.5.777zm0-1.123C5.965 12.216 7.133 12 8.5 12c1.113 0 1.92.196 3.658.776 1.638.545 2.371.724 3.342.724 1.45 0 2.614-.262 3.5-.777V5.346c-.965.438-2.133.654-3.5.654-1.113 0-1.92-.196-3.658-.776C10.204 4.68 9.47 4.5 8.5 4.5c-1.45 0-2.614.262-3.5.777v7.377z"
                ></path>
              </svg>
            </span>
          </button>
          <button
            type="button"
            aria-label="Add reminder(s)"
            className="item_action item_action__reminders"
            data-reach-tooltip-trigger=""
          >
            <span>
              <svg
                data-svgs-path="sm1/reminder.svg"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  fill-rule="nonzero"
                  d="M6.355 17.438a7.5 7.5 0 1 1 11.29 0l1.709 1.708a.5.5 0 0 1-.708.708l-1.708-1.709A7.471 7.471 0 0 1 12 20c-1.891 0-3.619-.7-4.938-1.855l-1.708 1.709a.5.5 0 0 1-.708-.708l1.709-1.708zM12 19a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13zm0-7h2.5a.5.5 0 1 1 0 1h-3a.5.5 0 0 1-.5-.5V8a.5.5 0 1 1 1 0v4zm4.604-6.896a.5.5 0 0 1-.708-.708l.336-.335a2.5 2.5 0 0 1 3.536 0l.671.671a2.5 2.5 0 0 1 0 3.536l-.335.336a.5.5 0 0 1-.708-.708l.336-.335a1.5 1.5 0 0 0 0-2.122l-.671-.671a1.5 1.5 0 0 0-2.122 0l-.335.336zM4.605 7.898a.5.5 0 0 1-.707.707l-.337-.337a2.5 2.5 0 0 1 0-3.536l.671-.671a2.5 2.5 0 0 1 3.536 0l.337.337a.5.5 0 0 1-.707.707l-.337-.337a1.5 1.5 0 0 0-2.122 0l-.671.671a1.5 1.5 0 0 0 0 2.122l.337.337z"
                ></path>
              </svg>
            </span>
          </button>
        </div>
        <button
          type="submit"
          disabled=""
          className="item_editor_submit ist_button ist_button_red"
          aria-disabled="true"
        >
          Add Task
        </button>
        <button type="button" className="cancel">
          Cancel
        </button>
      </div>
    </form>
 */
