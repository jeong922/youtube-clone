import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '@fortawesome/fontawesome-free/js/all.js';
import App from './app';
import Youtube from './api/youtube';

const API_KEY = process.env.REACT_APP_API_KEY;
const root = ReactDOM.createRoot(document.getElementById('root'));
const youtube = new Youtube(API_KEY);
root.render(
  <React.StrictMode>
    <App youtube={youtube} />
  </React.StrictMode>
);
