import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './video_detail.module.css';

function VideoDetail({ youtube }) {
  const location = useLocation();
  const id = new URLSearchParams(location.search).get('v');
  const [video, setVideo] = useState();

  useEffect(() => {
    youtube
      .detail(id) //
      .then((result) => setVideo(result));
  }, [youtube, id]);

  return (
    <>
      {video && (
        <div className={styles.container}>
          <iframe
            className={styles.video}
            type="text/html"
            title="youtube video player"
            src={`https://www.youtube.com/embed/${video[0].id}?autoplay=1&mute=0`}
            allow="autoplay"
            frameBorder="0"
            allowFullScreen
          ></iframe>
          <div className={styles.tags}>
            {video[0].snippet.tags &&
              video[0].snippet.tags
                .slice(0, 6)
                .map((tag) => (
                  <span key={tag} className={styles.tag}>{`#${tag}`}</span>
                ))}
          </div>

          <div className={styles.contents_info}>
            <span className={styles.title}>{video[0].snippet.title}</span>
            <div className={styles.info}>
              <div className={styles.info_text}>
                <span className={styles.publishedAt}>
                  {video[0].snippet.publishedAt.slice(0, 10)}
                </span>
              </div>
              <div className={styles.buttons}>
                <button className={styles.button}>
                  <i className="far fa-thumbs-up"></i>
                  <span className={styles.button_text}>좋아요</span>
                </button>
                <button className={styles.button}>
                  <i className="far fa-thumbs-down"></i>
                  <span className={styles.button_text}>싫어요</span>
                </button>
                <button className={styles.button}>
                  <i className="fas fa-share"></i>
                  <span className={styles.button_text}>공유</span>
                </button>
                <button className={styles.button}>
                  <i className="fas fa-download"></i>
                  <span className={styles.button_text}>오프라인 저장</span>
                </button>
                <button className={styles.button}>
                  <i className="fas fa-cut"></i>
                  <span className={styles.button_text}>클립</span>
                </button>
                <button className={styles.button}>
                  <i className="fas fa-plus"></i>
                  <span className={styles.button_text}>저장</span>
                </button>
                <button className={styles.button}>
                  <i className="fas fa-ellipsis-h"></i>
                  <span className={styles.button_text}></span>
                </button>
              </div>
            </div>
          </div>

          <div className={styles.wrapper}>
            <div className={styles.channel}>
              <div className={styles.channel_thumbnail}>
                {/* <img src="" alt="" /> */}
              </div>
            </div>
            <div className={styles.channel_info}>
              <span className={styles.channel_title}>
                {video[0].snippet.channelTitle}
              </span>
              <span></span>
              <pre className={styles.description}>
                {video[0].snippet.description}
              </pre>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default React.memo(VideoDetail);
