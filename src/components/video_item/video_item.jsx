import React from 'react';
import styles from './video_item.module.css';

function VideoItem({ video, onVideoClick, display }) {
  const displayType = display === 'list' ? styles.list : styles.grid;
  return (
    <li
      className={`${styles.container} `}
      onClick={() => {
        onVideoClick(video);
      }}
    >
      <div className={`${styles.video} ${displayType}`}>
        <div className={styles.thumbnail}>
          <img
            className={`${styles.thumbnail_img} ${displayType}`}
            src={video.snippet.thumbnails.medium.url}
            alt="video thumbnail"
          />
        </div>
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
