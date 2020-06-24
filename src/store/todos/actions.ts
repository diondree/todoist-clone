import { TodoId, TodoText, TodoActionTypes } from './types';
let nextId = 0;

export const addTodo = (text: TodoText): TodoActionTypes => ({
  type: 'ADD_TODO',
  payload: {
    id: nextId++,
    text,
  },
});

export const toggleTodo = (id: TodoId): TodoActionTypes => ({
  type: 'TOGGLE_TODO',
  payload: {
    id,
  },
});
