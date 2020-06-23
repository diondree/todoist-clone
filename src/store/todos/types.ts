export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export type TodoText = string;
export type TodoId = number;

export type TodoState = Todo[];


export type Todo = {
  id: number;
  text: string;
  completed: boolean;
}

export type NewTodo = {
  id: number;
  text: string;
}

interface AddTodoAction {
  type: typeof ADD_TODO;
  payload: NewTodo;

}

interface ToggleTodoAction {
  type: typeof TOGGLE_TODO;
  payload: {
    id: TodoId
  }
}

export type TodoActionTypes = AddTodoAction | ToggleTodoAction;


