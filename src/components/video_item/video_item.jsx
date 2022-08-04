import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './video_item.module.css';

function VideoItem({ video }) {
  const navigate = useNavigate();

  const onClick = (id) => {
    navigate(`/watch?v=${id}`);
  };

  return (
    <li
      className={`${styles.container} `}
      onClick={() => {
        // onVideoClick(video);
        onClick(video.id);
      }}
    >
      <div className={`${styles.video}`}>
        {/* <div className={styles.thumbnail}> */}
        <img
          className={`${styles.thumbnail}`}
          src={video.snippet.thumbnails.medium.url}
          alt="video thumbnail"
        />
        {/* </div> */}
        <div className={styles.details}>
          <div className={styles.wrapper}>
            <div className={styles.channel_thumbnail}>
              {/* <img src="" alt="" /> */}
            </div>
          </div>
          <div className={styles.metadata}>
            <span className={styles.title}>
              {video.snippet.title.length > 60
                ? `${video.snippet.title.slice(0, 60)}...`
                : video.snippet.title}
            </span>
            <span className={styles.channel_title}>
              {video.snippet.channelTitle}
            </span>
            <span className={styles.publishedAt}>
              {video.snippet.publishedAt.slice(0, 10)}
            </span>
          </div>
        </div>
      </div>
    </li>
  );
}

export default React.memo(VideoItem);
