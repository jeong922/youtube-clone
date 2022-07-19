import styles from './navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo} id="logo">
        <i className="fab fa-youtube"></i>
        <span className={styles.title}>YouTube</span>
      </div>
      <div className={styles.search} id="search">
        <form>
          <input className={styles.input} type="text" placeholder="검색" />
          <button className={styles.search__btn}>
            <i className="fas fa-search"></i>
          </button>
        </form>
      </div>
      <div className={styles.buttons}>
        <button className={styles.button}>
          <svg viewBox="0 0 24 24" focusable="false" className={styles.svg}>
            <path d="M14,13h-3v3H9v-3H6v-2h3V8h2v3h3V13z M17,6H3v12h14v-6.39l4,1.83V8.56l-4,1.83V6 M18,5v3.83L22,7v8l-4-1.83V19H2V5H18L18,5 z"></path>
          </svg>
        </button>
        <button className={styles.button}>
          <svg viewBox="0 0 24 24" focusable="false" className={styles.svg}>
            <path d="M10,20h4c0,1.1-0.9,2-2,2S10,21.1,10,20z M20,17.35V19H4v-1.65l2-1.88v-5.15c0-2.92,1.56-5.22,4-5.98V3.96 c0-1.42,1.49-2.5,2.99-1.76C13.64,2.52,14,3.23,14,3.96l0,0.39c2.44,0.75,4,3.06,4,5.98v5.15L20,17.35z M19,17.77l-2-1.88v-5.47 c0-2.47-1.19-4.36-3.13-5.1c-1.26-0.53-2.64-0.5-3.84,0.03C8.15,6.11,7,7.99,7,10.42v5.47l-2,1.88V18h14V17.77z"></path>
          </svg>
        </button>
        <button className={`${styles.button} ${styles.avatar}`}>
          {/* <img src="" alt="아바타 이미지"/> */}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
