import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '@fortawesome/fontawesome-free/js/all.js';
import App from './app';
import Youtube from './api/youtube';
import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;

const root = ReactDOM.createRoot(document.getElementById('root'));

const httpClient = axios.create({
  baseURL: 'https://youtube.googleapis.com/youtube/v3',
  params: { key: API_KEY },
});

const youtube = new Youtube(httpClient);

root.render(
  <React.StrictMode>
    <App youtube={youtube} />
  </React.StrictMode>
);
