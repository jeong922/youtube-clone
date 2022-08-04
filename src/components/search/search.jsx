import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './search.module.css';

const Search = ({ youtube }) => {
  const location = useLocation();
  const keyword = new URLSearchParams(location.search).get('search_query');

  return <div>{keyword}</div>;
};

export default Search;
