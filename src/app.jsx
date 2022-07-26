import { useCallback, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import styles from './app.module.css';
import Header from './components/header/header';
import Home from './components/home_page/home';
import LargeNav from './components/large_nav/large_nav';
import { isDark } from './components/recoil/atom';
import Search from './components/search/search';
import ThemeButton from './components/theme_button/theme_button';
import VideoDetail from './components/video_detail/video_detail';

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLarge, setIsLarge] = useState(false);
  const displayType = isLarge ? styles.show : styles.none;
  const theme = useRecoilValue(isDark);
  const themeType = theme === 'dark' ? styles.dark : styles.light;

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
      <div className={`${styles.container} ${themeType}`}>
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
        <ThemeButton />
      </div>
    </BrowserRouter>
  );
}

export default App;
