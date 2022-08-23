import styles from './video_list.module.css';
import VideoItem from '../video_item/video_item';
import { useLocation } from 'react-router-dom';

function VideoList({ videos, youtube }) {
  const location = useLocation();
  const displayType =
    location.pathname === '/watch' ? styles.none : styles.margin;

  return (
    <ul className={`${styles.videos} ${displayType}`}>
      {location.pathname !== '/watch' &&
        videos.map((video) => (
          <VideoItem key={video.id} video={video} youtube={youtube} />
        ))}

      {location.pathname === '/watch' &&
        videos
          .slice(0, 20)
          .map((video) => (
            <VideoItem key={video.id} video={video} youtube={youtube} />
          ))}
    </ul>
  );
}

export default VideoList;
