import React, { useRef, useState } from "react";
import classNames from "classnames";

import styles from "./VideoLink.module.scss";
import { Pause, PlayVariant } from "../../icons";
import { NavLink } from "react-router-dom";

const playbackStatus = {
  Stopped: "stopped",
  Playing: "playing",
  Paused: "paused",
};

export const VideoLink = ({
  src,
  title,
  author,
  descr,
  poster,
  youtubeLink,
  classNameWrapper,
  blurPoster,
  footer,
  link,
  id,
}) => {
  const [play, setPlay] = useState(false);
  const [status, setStatus] = useState(playbackStatus.Stopped);
  const videoRef = useRef();
  console.log(youtubeLink);

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
            <div
              className={classNames(
                styles.poster,
                blurPoster && styles.blurPoster
              )}
            >
              <h3 className={styles.title}>{title}</h3>
              <div>
                {" "}
                <p className={styles.author}>{author}</p>
                <p className={styles.desc}>{descr}</p>
                {link && (
                  <NavLink to={`/video/${id}`}>
                    <p className={styles.link}>Смотреть</p>
                  </NavLink>
                )}
              </div>
              <div>
                <img
                  className={!footer ? styles.image : styles.imageFooter}
                  src={poster}
                  alt=""
                />
              </div>
            </div>
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
            <div
              className={classNames(
                styles.poster,
                blurPoster && styles.blurPoster
              )}
            >
              <h3 className={styles.title}>{title}</h3>
              <div>
                <p className={styles.author}>{author}</p>
                <p className={styles.desc}>{descr}</p>
                {link && (
                  <NavLink to={`/video/${id}`}>
                    <p className={styles.link}>Смотреть</p>
                  </NavLink>
                )}
              </div>
              <img
                className={!footer ? styles.image : styles.imageFooter}
                src={poster}
                alt=""
              />
            </div>
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
