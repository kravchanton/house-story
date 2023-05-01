import React from "react";

import styles from "./Review.module.scss";

import { VideoLink } from "../VideoLink";

export const Review = ({ image, yotubeLink, src, externalLink }) => {
  return (
    <div className={styles.wrapper}>
      {yotubeLink && (
        <VideoLink
          classNameWrapper={styles.videoWrapper}
          poster={image}
          youtubeLink={yotubeLink}
        />
      )}
      {externalLink && <VideoLink poster={image} src={externalLink} />}
      {src && <VideoLink poster={image} src={src} />}
    </div>
  );
};
