import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import configureStore from './store';
import Header from './components/header';
import Page from './components/page';

const { store, persistor } = configureStore();

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
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
      </PersistGate>
    </Provider>
  );
}

export default App;
