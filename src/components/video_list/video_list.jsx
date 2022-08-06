import styles from './video_list.module.css';
import VideoItem from '../video_item/video_item';
import { useLocation } from 'react-router-dom';

function VideoList({ videos, youtube }) {
  const location = useLocation();
  const displayType =
    location.pathname === '/watch' ? styles.none : styles.margin;

  return (
    <ul className={`${styles.videos} ${displayType}`}>
      {videos.map((video) => (
        <VideoItem key={video.id} video={video} youtube={youtube} />
      ))}
    </ul>
  );
}

export default VideoList;
