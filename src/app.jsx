import { useCallback, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styles from './app.module.css';
import Header from './components/header/header';
import Home from './components/home_page/home';
import Search from './components/search/search';
import VideoDetail from './components/video_detail/video_detail';

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const search = useCallback(
    (query) => {
      setIsLoading(true);
      youtube
        .search(query) //
        .then((videos) => {
          setVideos(videos);
          setIsLoading(false);
        });
    },
    [youtube]
  );

  useEffect(() => {
    setIsLoading(true);
    youtube
      .getMostPopular() //
      .then((videos) => {
        setVideos(videos);
        setIsLoading(false);
      });
  }, [youtube]);

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Header onSearch={search} />
      <div className={styles.content}>
        <Routes>
          <Route
            path="/"
            element={<Home isLoading={isLoading} youtube={youtube} />}
          ></Route>
          <Route
            path="/result"
            element={
              <Search isLoading={isLoading} videos={videos} youtube={youtube} />
            }
          ></Route>
          <Route
            path="/watch"
            element={
              <VideoDetail
                isLoading={isLoading}
                videos={videos}
                youtube={youtube}
              />
            }
          ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
