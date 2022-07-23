import styles from './video_detail.module.css';

function VideoDetail({ video }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{video.snippet.title}</h1>
    </div>
  );
}

export default VideoDetail;
