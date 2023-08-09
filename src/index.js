import React from 'react';
import ReactDOM from 'react-dom/client';
import './stylesheets/Index.css';
import App from './App';

fetch('https://dummyjson.com/users')
  .then(res => res.json())
  .then(res => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
      <React.StrictMode>
        <App users={res.users} />
      </React.StrictMode>
    );
  })



