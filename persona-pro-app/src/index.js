import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const loadGoogleFont = (fontUrl) => {
  const link = document.createElement('link');
  link.href = fontUrl;
  link.rel = 'stylesheet';
  document.head.appendChild(link);
};

loadGoogleFont('https://fonts.googleapis.com/css2?family=Maven+Pro:wght@400..900&display=swap');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
