import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styles from './app.module.css';
import Header from './components/header/header';
import Home from './components/home_page/home';
import Search from './components/search/search';
import VideoDetail from './components/video_detail/video_detail';

function App({ youtube }) {
  return (
    <div className={styles.app}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Header />
        <div className={styles.content}>
          <Routes>
            <Route path="/" element={<Home youtube={youtube} />}></Route>
            <Route
              path="/result"
              element={<Search youtube={youtube} />}
            ></Route>
            <Route
              path="/watch"
              element={<VideoDetail youtube={youtube} />}
            ></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
