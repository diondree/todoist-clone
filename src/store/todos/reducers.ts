import { TodoActionTypes } from './types';

export const initialTodos = [
  {
    id: 'first',
    text: 'Test',
    completed: false,
  },
];

export const todos = (todos = initialTodos, action: TodoActionTypes) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...todos,
        {
          id: action.payload.id,
          text: action.payload.text,
          completed: false,
        },
      ];
    case 'TOGGLE_TODO':
      return todos.map((todo) =>
        todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return todos;
  }
};

export const FilteredTodos = (todos: any, action: any) => {
  switch (action.type) {
    default:
      return todos;
  }
};
