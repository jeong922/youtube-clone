import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
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

  useEffect(() => {
    if (video) {
      const channelId = video.snippet.channelId;
      youtube
        .getChannelInfo(channelId) //
        .then((result) => setChannelInfo(result[0]));
    }
  }, [youtube, video]);

  const replaceString = (str) => {
    if (str == null) {
      return '';
    }
    return str
      .replaceAll(/&amp;/g, '&')
      .replaceAll(/&lt;/g, '<')
      .replaceAll(/&gt;/g, '>')
      .replaceAll(/&quot;/g, '"')
      .replaceAll(/&#039;/g, "'")
      .replaceAll(/&#39;/g, "'");
  };

  return (
    <li
      className={`${styles.container}`}
      onClick={() => {
        onClick(video.id);
      }}
    >
      <div className={`${styles.video} ${displayType}`}>
        <img
          className={`${styles.thumbnail} ${displayType}`}
          src={video.snippet.thumbnails && video.snippet.thumbnails.medium.url}
          alt="video thumbnail"
        />
        <div className={`${styles.details} ${displayType}`}>
          {channelInfo && (
            <img
              className={`${styles.channelThumbnail} ${displayType}`}
              src={channelInfo.snippet.thumbnails.default.url}
              alt="channel"
            />
          )}

          <div className={styles.metadata}>
            <span className={`${styles.title} ${displayType}`}>
              {replaceString(video.snippet.title)}
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
