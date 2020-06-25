export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export type TodoText = string;
export type TodoId = string;

export type TodoState = Todo[];

export type Todo = {
  id: string;
  text: string;
  dueDate: string;
  completed: boolean;
};

export type NewTodo = {
  id?: TodoId;
  text: string;
  dueDate: string;
};

interface AddTodoAction {
  type: typeof ADD_TODO;
  payload: NewTodo;
}

interface ToggleTodoAction {
  type: typeof TOGGLE_TODO;
  payload: {
    id: TodoId;
  };
}

export type TodoActionTypes = AddTodoAction | ToggleTodoAction;
