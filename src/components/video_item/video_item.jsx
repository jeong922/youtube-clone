import styles from './video_item.module.css';

function VideoItem(props) {
  return (
    <li className={styles.video_item}>
      <div className={styles.thumbnail}>
        <img
          className={styles.thumbnail_img}
          src={`https://i.ytimg.com/vi/${props.video.id}/hqdefault.jpg`}
          alt={props.video.snippet.channelTitle}
        />
      </div>
      <div className={styles.details}>
        <span>{props.video.snippet.title}</span>
        <span className="channelTitle">{props.video.snippet.channelTitle}</span>
        <span className="publishedAt">{props.video.snippet.publishedAt}</span>
      </div>
    </li>
  );
}

export default VideoItem;
