import React, { useEffect } from 'react';
import Loading from '../loading/loading';
import Nav from '../nav/nav';
import VideoList from '../video_list/video_list';
import styles from './search.module.css';

const Search = ({ isLoading, videos, youtube }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  console.log(isLoading);

  return (
    <>
      <Nav />
      {isLoading ? (
        <Loading />
      ) : (
        <VideoList videos={videos} youtube={youtube} />
      )}
    </>
  );
};

export default Search;
