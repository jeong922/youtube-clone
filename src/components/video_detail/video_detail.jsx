import React, { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import VideoList from '../video_list/video_list';
import styles from './video_detail.module.css';

function VideoDetail({ youtube }) {
  const location = useLocation();
  const id = new URLSearchParams(location.search).get('v');
  const [video, setVideo] = useState();
  const [channelInfo, setChannelInfo] = useState([]);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    youtube
      .getMostPopular() //
      .then((videos) => setVideos(videos));
  }, [youtube]);

  // 비디오 디테일 정보 받아오기
  useEffect(() => {
    youtube
      .getDetail(id) //
      .then((result) => setVideo(result[0]));
  }, []);

  //채널 썸네일 받아오기
  useEffect(() => {
    if (video) {
      const channelId = video.snippet.channelId;
      youtube
        .getChannelInfo(channelId) //
        .then((result) => setChannelInfo(result[0]));
    }
  }, [video]);

  console.log(channelInfo.snippet);

  return (
    <div className={styles.container}>
      {video && (
        <div className={styles.primary}>
          <iframe
            className={styles.video}
            type="text/html"
            title="youtube video player"
            src={`https://www.youtube.com/embed/${video.id}?autoplay=1&mute=0`}
            allow="autoplay"
            frameBorder="0"
            allowFullScreen
          ></iframe>
          <div className={styles.tags}>
            {video.snippet.tags &&
              video.snippet.tags
                .slice(0, 6)
                .map((tag) => (
                  <span key={tag} className={styles.tag}>{`#${tag}`}</span>
                ))}
          </div>

          <div className={styles.contents_info}>
            <span className={styles.title}>{video.snippet.title}</span>
            <div className={styles.info}>
              <div className={styles.info_text}>
                <span className={styles.publishedAt}>
                  {video.snippet.publishedAt.slice(0, 10)}
                </span>
              </div>
              <div className={styles.buttons}>
                <button className={styles.button}>
                  <i className="far fa-thumbs-up"></i>
                  <span className={styles.button_text}>좋아요</span>
                </button>
                <button className={styles.button}>
                  <i className="far fa-thumbs-down"></i>
                  <span className={styles.button_text}>싫어요</span>
                </button>
                <button className={styles.button}>
                  <i className="fas fa-share"></i>
                  <span className={styles.button_text}>공유</span>
                </button>
                <button className={styles.button}>
                  <i className="fas fa-download"></i>
                  <span className={styles.button_text}>오프라인 저장</span>
                </button>
                <button className={styles.button}>
                  <i className="fas fa-cut"></i>
                  <span className={styles.button_text}>클립</span>
                </button>
                <button className={styles.button}>
                  <i className="fas fa-plus"></i>
                  <span className={styles.button_text}>저장</span>
                </button>
                <button className={styles.button}>
                  <i className="fas fa-ellipsis-h"></i>
                  <span className={styles.button_text}></span>
                </button>
              </div>
            </div>
          </div>

          <div className={styles.wrapper}>
            <div className={styles.channel}>
              {/* {channelInfo && (
                <div className={styles.channel_thumbnail}>
                  <img
                    className={styles.channel_thumbnail}
                    src={channelInfo.snippet.thumbnails.default.url}
                    alt="channel thumbnail"
                  />
                </div>
              )} */}
            </div>
            <div className={styles.channel_info}>
              <span className={styles.channel_title}>
                {video.snippet.channelTitle}
              </span>
              <span></span>
              <pre className={styles.description}>
                {video.snippet.description}
              </pre>
            </div>
          </div>
        </div>
      )}
      <div className={styles.secondary}>
        <VideoList videos={videos} youtube={youtube} />
      </div>
    </div>
  );
}

export default React.memo(VideoDetail);
