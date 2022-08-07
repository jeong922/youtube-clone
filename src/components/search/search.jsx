import React from 'react';
import Nav from '../nav/nav';
import VideoList from '../video_list/video_list';
import styles from './search.module.css';

const Search = ({ videos, youtube }) => {
  return (
    <>
      <Nav />
      <VideoList videos={videos} youtube={youtube} />
    </>
  );
};

export default Search;
