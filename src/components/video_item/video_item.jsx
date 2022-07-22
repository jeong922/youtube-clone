import styles from './video_item.module.css';

function VideoItem(props) {
  return (
    <li className={styles.container}>
      <div className={styles.video}>
        <div className={styles.thumbnail}>
          <img
            className={styles.thumbnail_img}
            src={props.video.snippet.thumbnails.medium.url}
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
              {props.video.snippet.title.length > 60
                ? `${props.video.snippet.title.slice(0, 60)}...`
                : props.video.snippet.title}
            </span>
            <span className={styles.channel_title}>
              {props.video.snippet.channelTitle}
            </span>
            <span className={styles.publishedAt}>
              {props.video.snippet.publishedAt.slice(0, 10)}
            </span>
          </div>
        </div>
      </div>
    </li>
  );
}

export default VideoItem;
