import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './store';
import Header from './components/header';

const store = createStore(reducers)

function App() {
  return (
    <Provider store={store}>
      <div className="page-background">
        <div id="header">
          <Header />
        </div>
        <div id="app" className="min-h-screen"></div>
      </div>
    </Provider>
  );
}

export default App;
