import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './store';
import Header from './components/header';
import Page from './components/page';

const store = createStore(reducers);

function App() {
  return (
    <Provider store={store}>
      <div className="page-background">
        <nav id="header">
          <Header />
        </nav>
        <div id="app" className="min-h-screen">
          <div>
            <Page />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
