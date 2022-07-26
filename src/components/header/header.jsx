import { useCallback, useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { isDark } from '../recoil/atom';
import styles from './header.module.css';

function Header({ onSearch, setIsLarge }) {
  const [showSearch, setShowSearch] = useState(false);
  const inputRef = useRef();
  const navigate = useNavigate();
  const searchType = showSearch ? styles.display : styles.hidden;
  const theme = useRecoilValue(isDark);
  const themeType = theme === 'dark' ? styles.dark : styles.light;
  const handleSearch = (e) => {
    e.preventDefault();
    const value = inputRef.current.value;
    navigate(`/result?search_query=${value}`);
    onSearch(value);
  };

  const headerClick = () => {
    setIsLarge(true);
  };

  const searchClick = useCallback(() => {
    setShowSearch(true);
  }, []);

  const hidden = useCallback(() => {
    setShowSearch(false);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768) {
        setShowSearch(false);
      }
    });
  }, []);

  return (
    <header className={`${styles.header} ${themeType}`}>
      <div className={styles.wrapper}>
        <button className={styles.guideBtn} onClick={headerClick}>
          <svg
            className={`${styles.svg} ${themeType}`}
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
          >
            <path d="M21,6H3V5h18V6z M21,11H3v1h18V11z M21,17H3v1h18V17z"></path>
          </svg>
        </button>
        <Link to="/">
          <div className={`${styles.logo} ${themeType}`} id="logo">
            <img
              className={styles.youtube}
              src={process.env.PUBLIC_URL + '/images/logo.png'}
              alt="logo"
            />
            <h1 className={styles.title}>YouTube</h1>
          </div>
        </Link>
      </div>

      <div className={`${styles.search} ${searchType} ${themeType}`}>
        {showSearch && (
          <button
            className={`${styles.button} ${styles.btn} ${themeType}`}
            onClick={hidden}
          >
            <svg
              className={`${styles.svg} ${themeType}`}
              viewBox="0 0 24 24"
              preserveAspectRatio="xMidYMid meet"
              focusable="false"
            >
              <path d="M21,11v1H5.64l6.72,6.72l-0.71,0.71L3.72,11.5l7.92-7.92l0.71,0.71L5.64,11H21z"></path>
            </svg>
          </button>
        )}
        <form
          className={`${styles.form} ${searchType} ${themeType}`}
          onSubmit={(e) => handleSearch(e)}
        >
          <input
            ref={inputRef}
            className={`${styles.input} ${searchType} ${themeType}`}
            type="text"
            placeholder="검색"
          />
          <button className={styles.searchBtn} type="submit">
            <i className="fas fa-search"></i>
          </button>
        </form>
      </div>

      <div className={styles.buttons}>
        <button
          className={`${styles.button} ${styles.showSearchBtn}`}
          onClick={searchClick}
        >
          <svg
            className={`${styles.svg} ${themeType}`}
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
          >
            <path d="M20.87,20.17l-5.59-5.59C16.35,13.35,17,11.75,17,10c0-3.87-3.13-7-7-7s-7,3.13-7,7s3.13,7,7,7c1.75,0,3.35-0.65,4.58-1.71 l5.59,5.59L20.87,20.17z M10,16c-3.31,0-6-2.69-6-6s2.69-6,6-6s6,2.69,6,6S13.31,16,10,16z"></path>
          </svg>
        </button>
        <button className={styles.button}>
          <svg
            viewBox="0 0 24 24"
            focusable="false"
            className={`${styles.svg} ${themeType}`}
          >
            <path d="M14,13h-3v3H9v-3H6v-2h3V8h2v3h3V13z M17,6H3v12h14v-6.39l4,1.83V8.56l-4,1.83V6 M18,5v3.83L22,7v8l-4-1.83V19H2V5H18L18,5 z"></path>
          </svg>
        </button>
        <button className={styles.button}>
          <svg
            viewBox="0 0 24 24"
            focusable="false"
            className={`${styles.svg} ${themeType}`}
          >
            <path d="M10,20h4c0,1.1-0.9,2-2,2S10,21.1,10,20z M20,17.35V19H4v-1.65l2-1.88v-5.15c0-2.92,1.56-5.22,4-5.98V3.96 c0-1.42,1.49-2.5,2.99-1.76C13.64,2.52,14,3.23,14,3.96l0,0.39c2.44,0.75,4,3.06,4,5.98v5.15L20,17.35z M19,17.77l-2-1.88v-5.47 c0-2.47-1.19-4.36-3.13-5.1c-1.26-0.53-2.64-0.5-3.84,0.03C8.15,6.11,7,7.99,7,10.42v5.47l-2,1.88V18h14V17.77z"></path>
          </svg>
        </button>
        <button
          className={`${styles.button} ${styles.avatar}`}
          onClick={() =>
            window.open('https://github.com/jeong922/youtube-clone', '_blank')
          }
        >
          <img
            className={styles.avatar}
            src="https://avatars.githubusercontent.com/u/93126884?v=4"
            alt="아바타 이미지"
          />
        </button>
      </div>
    </header>
  );
}

export default Header;
