import React from 'react';

import { PersistGate } from 'redux-persist/es/integration/react';

import { Provider } from 'react-redux';

// import './config/ReactotronConfig';

import { store, persistor } from './store';

import App from './app/';

function Index() {
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </>
  );
}

export default Index;
