import { TodoActionTypes } from './types';

export const initialTodos = [
  {
    id: 0,
    text: 'Test',
    completed: false,
  },
];

export const todos = (state = initialTodos, action: TodoActionTypes) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.payload.id,
        text: action.payload.text,
        completed: false,
      };
    case 'TOGGLE_TODO':
      return state.map((todo) =>
        todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return state;
  }
};

export const FilteredTodos = (state: any, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};
