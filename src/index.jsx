import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

import App from './App';
import GlobalStyle from './styles/GlobalStyle';
import store from './redux/config/configStore';
import GlobalFont from './styles/GlobalFont';
import Header from 'layout/Header';

export let persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <GlobalStyle />
        <GlobalFont />
        <Header />
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
