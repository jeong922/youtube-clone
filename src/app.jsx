import { useCallback, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styles from './app.module.css';
import Header from './components/header/header';
import Home from './components/home_page/home';
import Nav from './components/nav/nav';
import Search from './components/search/search';
import VideoDetail from './components/video_detail/video_detail';

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const search = useCallback(
    (query) => {
      // setSelectedVideo(null);
      youtube
        .search(query) //
        .then((videos) => setVideos(videos));
    },
    [youtube]
  );

  return (
    <div className={styles.app}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Header onSearch={search} />
        <Nav />
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
