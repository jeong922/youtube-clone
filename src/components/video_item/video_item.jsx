import React, { useEffect, useState } from 'react';
import { useLocation, useMatch, useNavigate } from 'react-router-dom';
import styles from './video_item.module.css';

function VideoItem({ video, youtube }) {
  const navigate = useNavigate();
  const [channelInfo, setChannelInfo] = useState();
  const location = useLocation();
  const displayType =
    location.pathname === '/watch' ? styles.row : styles.column;

  const onClick = (id) => {
    navigate(`/watch?v=${id}`);
  };

  console.log(video.snippet.channelId);

  useEffect(() => {
    if (video) {
      youtube
        .getChannelInfo(video.snippet.channelId) //
        .then((result) => setChannelInfo(result[0]));
    }
  }, [youtube, video]);

  return (
    <li
      className={`${styles.container}`}
      onClick={() => {
        onClick(video.id);
      }}
    >
      <div className={`${styles.video} ${displayType}`}>
        {/* <div className={styles.thumbnail}> */}
        <img
          className={`${styles.thumbnail} ${displayType}`}
          src={video.snippet.thumbnails.medium.url}
          alt="video thumbnail"
        />
        {/* </div> */}
        <div className={styles.details}>
          <div className={styles.wrapper}>
            {channelInfo && (
              <img
                className={styles.channel_thumbnail}
                src={channelInfo.snippet.thumbnails.default.url}
                alt="channel"
              />
            )}
          </div>
          <div className={styles.metadata}>
            <span className={`${styles.title} ${displayType}`}>
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
