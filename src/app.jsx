import { useEffect, useState } from 'react';
import './app.css';
import Search from './components/search/search';
import VideoList from './components/video_list/video_list';

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const search = (query) => {
    youtube
      .search(query) //
      .then((videos) => setVideos(videos));
  };

  useEffect(() => {
    youtube
      .mostPopular() //
      .then((videos) => setVideos(videos));
  }, []);

  return (
    <>
      <Search onSearch={search} />
      <VideoList videos={videos} />
    </>
  );
}

export default App;
