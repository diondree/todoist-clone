import { TodoId, TodoActionTypes, NewTodo } from './types';
import { v4 as uuidv4 } from 'uuid';

export const addTodo = (todo: NewTodo): TodoActionTypes => ({
  type: 'ADD_TODO',
  payload: {
    id: uuidv4(),
    ...todo,
  },
});

export const toggleTodo = (id: TodoId): TodoActionTypes => ({
  type: 'TOGGLE_TODO',
  payload: {
    id,
  },
});
