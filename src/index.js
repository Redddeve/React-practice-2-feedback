import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyles } from 'styles/GlobalStyles';
import 'modern-normalize';
import { App } from 'App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <GlobalStyles />
  </React.StrictMode>
);
