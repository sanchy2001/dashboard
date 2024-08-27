import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';

// Get the root element from the DOM
const container = document.getElementById('root');

// Create a root using React 18's createRoot API
const root = createRoot(container);

// Render the application
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
