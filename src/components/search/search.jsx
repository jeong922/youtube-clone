import React, { useCallback, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Nav from '../nav/nav';
import VideoList from '../video_list/video_list';
import styles from './search.module.css';

const Search = ({ youtube }) => {
  const location = useLocation();
  const keyword = new URLSearchParams(location.search).get('search_query');
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    youtube
      .search(keyword) //
      .then((result) => setVideos(result));
  }, [youtube, keyword]);

  return (
    <div>
      <Nav />
      <VideoList videos={videos} youtube={youtube} />
    </div>
  );
};

export default Search;
