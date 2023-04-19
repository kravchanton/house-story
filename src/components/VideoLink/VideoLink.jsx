import React, { useRef, useState } from "react";

import styles from "./VideoLink.module.scss";
import { Pause, PlayVariant } from "../../icons";
import classNames from "classnames";

const playbackStatus = {
  Stopped: "stopped",
  Playing: "playing",
  Paused: "paused",
};

export const VideoLink = ({
  src,
  poster,
  youtubeLink,
  classNameWrapper,
  title,
  author,
  desc,
}) => {
  const [play, setPlay] = useState(false);
  const [status, setStatus] = useState(playbackStatus.Stopped);
  const videoRef = useRef();

  const handlePlay = () => {
    setStatus(playbackStatus.Playing);
    videoRef.current.play();
  };

  const handlePause = () => {
    setStatus(playbackStatus.Paused);
    videoRef.current.pause();
  };

  return (
    <>
      {src && (
        <div className={classNames(styles.wrapper, classNameWrapper)}>
          {title && (
            <h4
              className={status === "stopped" ? styles.name : styles.nonPoster}
            >
              Как выбрать материал для дома?
            </h4>
          )}
          {author && (
            <p
              className={
                status === "stopped" ? styles.author : styles.nonPoster
              }
            >
              Евгений Иванов
            </p>
          )}
          {desc && (
            <p
              className={status === "stopped" ? styles.desc : styles.nonPoster}
            >
              руководитель строительной бригады
            </p>
          )}

          <div
            className={
              status === "stopped" ? styles.posterWrapper : styles.nonPoster
            }
          >
            <img
              className={
                status === "stopped" ? styles.posterVideo : styles.nonPoster
              }
              src={poster}
              alt=""
            />
          </div>

          {status === "stopped" || status === "paused" ? (
            <button className={styles.playBtn} onClick={handlePlay}>
              <PlayVariant />
            </button>
          ) : (
            <button className={styles.playBtn} onClick={handlePause}>
              <Pause />
            </button>
          )}
          <video className={styles.video} ref={videoRef}>
            <source src={src} type="video/mp4" />
          </video>
        </div>
      )}
      {youtubeLink && (
        <div
          className={classNames(
            play ? styles.wrapperYoutube : styles.wrapperPlay,
            classNameWrapper
          )}
        >
          <h4 className={styles.name}>Как выбрать материал для дома?</h4>
          <p className={styles.author}>Евгений Иванов</p>
          <p className={styles.desc}>руководитель строительной бригады</p>
          <button
            onClick={() => setPlay((prevState) => !prevState)}
            className={styles.play}
          >
            <PlayVariant className={play && styles.nonPoster} />
          </button>
          <img
            onClick={() => setPlay((prevState) => !prevState)}
            className={classNames(
              !play ? styles.poster : styles.nonPoster,
              classNameWrapper
            )}
            src={poster}
            alt=""
          />
          {play && (
            <iframe
              className={styles.videoYoutube}
              src={youtubeLink}
              title="Youtube Player"
              frameBorder="0"
              allowFullScreen
            />
          )}
        </div>
      )}
    </>
  );
};
