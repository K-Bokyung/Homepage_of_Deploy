import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App.jsx';

import './assets/css/styles.css';

// -----------------------------------------------------------------------

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.PUBLIC_URL}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
