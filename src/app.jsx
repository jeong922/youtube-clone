import { useCallback, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styles from './app.module.css';
import Header from './components/header/header';
import Home from './components/home_page/home';
import LargeNav from './components/large_nav/large_nav';
import Search from './components/search/search';
import VideoDetail from './components/video_detail/video_detail';

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLarge, setIsLarge] = useState(false);
  const displayType = isLarge ? styles.show : styles.none;

  const search = useCallback(
    (query) => {
      try {
        setIsLoading(true);
        youtube
          .search(query) //
          .then((videos) => {
            setVideos(videos);
          });
        setIsLoading(false);
      } catch (e) {
        // 에러 처리
      }
    },
    [youtube]
  );

  useEffect(() => {
    try {
      setIsLoading(true);
      youtube
        .getMostPopular() //
        .then((videos) => {
          setVideos(videos);
        });
      setIsLoading(false);
    } catch (e) {
      //에러처리
    }
  }, [youtube]);

  const bgClick = () => {
    setIsLarge(false);
  };

  useEffect(() => {
    if (isLarge) {
      document.body.style.cssText = `
    position: fixed;
    top: -${window.pageYOffset}px;
    overflow-y: scroll;
    width: 100%;`;

      return () => {
        const scrollY = document.body.style.top;
        document.body.style.cssText = '';
        window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
      };
    }
  }, [isLarge]);

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className={`${styles.container}`}>
        <Header onSearch={search} setIsLarge={setIsLarge} />
        <div className={styles.content}>
          <Routes>
            <Route
              path="/"
              element={<Home isLoading={isLoading} youtube={youtube} />}
            ></Route>
            <Route
              path="/result"
              element={
                <Search
                  isLoading={isLoading}
                  videos={videos}
                  youtube={youtube}
                />
              }
            ></Route>
            <Route
              path="/watch"
              element={<VideoDetail youtube={youtube} />}
            ></Route>
          </Routes>
        </div>
        {isLarge && <div className={styles.bg} onClick={bgClick}></div>}
        <div className={`${styles.nav} ${displayType}`}>
          <LargeNav setIsLarge={setIsLarge} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
