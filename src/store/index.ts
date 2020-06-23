import { combineReducers } from 'redux';
import { todosReducer } from './todos/reducers'
import { Todo } from './todos/types';


export type State = {
  readonly todos: Todo[];
  readonly theme?: string;
}


export default combineReducers({ todosReducer });