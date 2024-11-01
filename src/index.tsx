import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'https://cdn.jsdelivr.net/npm/daisyui@4.12.14/dist/full.min.css';
document.head.appendChild(link);

const html = document.getElementsByTagName('html')[0];
html.setAttribute('data-theme', 'sunset');

const rootEl = document.getElementById('root');
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}
