import React, { useEffect, useState } from 'react';
import styles from './home.module.css';
import VideoList from '../video_list/video_list';
import Nav from '../nav/nav';
import Loading from '../loading/loading';

const Home = ({ youtube }) => {
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [videos]);

  useEffect(() => {
    setIsLoading(true);
    youtube
      .getMostPopular() //
      .then((videos) => {
        setVideos(videos);
        setIsLoading(false);
      });
  }, [youtube]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Nav />
          <section className={styles.content}>
            <div className={styles.list}>
              <VideoList videos={videos} youtube={youtube} />
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default Home;
