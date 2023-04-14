import React from "react";

import styles from "./VideoExcursion.module.scss";

import dom1 from "../../assets/dom1.png";
import poster from "../../assets/poster.png";

export const VideoExcursion = () => {
  return (
    <div className={styles.videoSection}>
      <img className={styles.house1} src={dom1} alt="" />
      <video
        poster={poster}
        className={styles.video}
        width="770"
        height="507"
        controls
        src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      />
      <video
        poster={poster}
        className={styles.video}
        width="770"
        height="507"
        controls
        src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      />
      {/*<ReactPlayer url="../../assets/video.mp4" />*/}
    </div>
  );
};
