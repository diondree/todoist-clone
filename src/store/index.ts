import { combineReducers, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import { todos } from './todos/reducers';
import { menu } from './menu/reducers';
import { Todo } from './todos/types';

export type RootState = {
  readonly todos: Todo[];
  readonly theme?: string;
  isMenuOpen: boolean;
};

const rootReducer = combineReducers({ todos, isMenuOpen: menu });

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const appStore = () => {
  let store = createStore(persistedReducer);
  let persistor = persistStore(store);
  return { store, persistor };
};

export default appStore;
