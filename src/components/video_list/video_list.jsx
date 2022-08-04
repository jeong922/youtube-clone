import styles from './video_list.module.css';
import VideoItem from '../video_item/video_item';

function VideoList({ videos, onVideoClick, display }) {
  return (
    <ul className={styles.videos}>
      {videos.map((video) => (
        <VideoItem key={video.id} video={video} />
      ))}
    </ul>
  );
}

export default VideoList;
