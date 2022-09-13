import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '@fortawesome/fontawesome-free/js/all.js';
import App from './app';
import Youtube from './api/youtube';
import axios from 'axios';
import { RecoilRoot } from 'recoil';

const API_KEY = process.env.REACT_APP_API_KEY;

const root = ReactDOM.createRoot(document.getElementById('root'));

const httpClient = axios.create({
  baseURL: 'https://youtube.googleapis.com/youtube/v3',
  params: { key: API_KEY },
});

const youtube = new Youtube(httpClient);

root.render(
  <React.StrictMode>
    <RecoilRoot>
      <App youtube={youtube} />
    </RecoilRoot>
  </React.StrictMode>
);
