import { TodoActionTypes } from "./types";
import { State } from "..";

export const initialState: State = {
  todos: [{
    "id": 0,
    "text": "Test",
    "completed": false
  }]
}

export const todosReducer = (state = initialState.todos, action: TodoActionTypes) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.payload.id,
        text: action.payload.text,
        completed: false
      }
    case 'TOGGLE_TODO':
      return state.map((todo) => (todo.id === action.payload.id) ? { ...todo, completed: !todo.completed } : todo);
    default:
      return state;
  }
}



