import React, { useEffect, useState } from 'react';
import styles from './home.module.css';
import VideoList from '../video_list/video_list';

const Home = ({ youtube }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    youtube
      .mostPopular() //
      .then((videos) => setVideos(videos));
  }, [youtube]);

  return (
    <div>
      <section className={styles.content}>
        <div className={styles.list}>
          <VideoList videos={videos} />
        </div>
      </section>
    </div>
  );
};

export default Home;
