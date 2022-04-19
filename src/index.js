import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// we are getting root element from the next line
const root = ReactDOM.createRoot(document.getElementById('root'));

//in root element we are rendering the App component
root.render(
  <React.StrictMode>
    <App />
    {/* < ComponentName /> */}
  </React.StrictMode>
);

