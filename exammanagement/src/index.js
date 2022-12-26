import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import reducer from './reducer';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);
const store = configureStore({
  reducer: reducer,
});

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
