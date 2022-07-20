import { useEffect, useState } from 'react';
import styles from './contants.module.css';
import VideoList from './video_list/video_list';

const API_KEY = process.env.REACT_APP_API_KEY;

function Contants() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${API_KEY}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log('error', error));
  }, []);

  return (
    <main className={styles.contants}>
      <VideoList videos={videos} />
    </main>
  );
}

export default Contants;
