import { combineReducers } from 'redux';
import { todos } from './todos/reducers';
import { menu } from './menu/reducers';
import { Todo } from './todos/types';

export type RootState = {
  readonly todos: Todo[];
  readonly theme?: string;
  isMenuOpen: boolean;
};

export default combineReducers({ todos, isMenuOpen: menu });
