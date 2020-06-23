import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './store';

const store = createStore(reducers)

function App() {
  return (
    <Provider store={store}>
      <div>Hello</div>
    </Provider>
  );
}

export default App;
