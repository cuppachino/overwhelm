import.meta.glob('~/@fontsource/m-plus-2/*.css');
import.meta.glob('~/@fontsource/m-plus-1-code/*.css');
import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.css';

import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
