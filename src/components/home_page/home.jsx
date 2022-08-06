import React, { useEffect, useState } from 'react';
import styles from './home.module.css';
import VideoList from '../video_list/video_list';
import Nav from '../nav/nav';
import { useLocation } from 'react-router-dom';
import LargeNav from '../large_nav/large_nav';

const Home = ({ youtube }) => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    youtube
      .getMostPopular() //
      .then((videos) => setVideos(videos));
  }, [youtube]);

  return (
    <>
      <Nav />
      <section className={styles.content}>
        <div className={styles.list}>
          <VideoList videos={videos} youtube={youtube} />
        </div>
      </section>
    </>
  );
};

export default Home;
