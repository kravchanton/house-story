import React, { useRef, useState } from "react";

import styles from "./VideoLink.module.scss";
import { Pause, PlayVariant } from "../../icons";
import classNames from "classnames";
import { Poster } from "../Poster";

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
  className,
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
          {status === "stopped" ? (
            <Poster className={className} src={poster} />
          ) : null}
          {status === "stopped" || status === "paused" ? (
            <button className={styles.playBtn} onClick={handlePlay}>
              <PlayVariant />
            </button>
          ) : (
            <button className={styles.playBtn} onClick={handlePause}>
              <Pause />
            </button>
          )}
          <video
            controls={status === "playing" && true}
            className={styles.video}
            ref={videoRef}
          >
            <source src={src} type="video/mp4" />
          </video>
        </div>
      )}
      {youtubeLink && (
        <div className={classNames(styles.wrapper, classNameWrapper)}>
          {status === "stopped" ? (
            <Poster className={className} src={poster} />
          ) : null}
          <button
            onClick={() => setPlay((prevState) => !prevState)}
            className={styles.play}
          >
            <PlayVariant className={play && styles.nonPoster} />
          </button>
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
