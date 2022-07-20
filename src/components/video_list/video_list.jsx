import styles from './video_list.module.css';
import VideoItem from '../video_item/video_item';

function VideoList(props) {
  return (
    <ul className={styles.ul}>
      {props.videos.map((video) => (
        <VideoItem key={video.id} video={video} />
      ))}
    </ul>
  );
}

export default VideoList;
