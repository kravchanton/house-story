import React from "react";

import styles from "./Review.module.scss";

import { VideoLink } from "../VideoLink";

export const Review = ({ image, youtubeLink, src, externalLink }) => {
  console.log(youtubeLink);
  console.log(src);
  return (
    <div className={styles.wrapper}>
      {youtubeLink && (
        <VideoLink
          classNameWrapper={styles.videoWrapper}
          poster={image}
          youtubeLink={youtubeLink}
        />
      )}
      {externalLink && <VideoLink poster={image} src={externalLink} />}
      {src && <VideoLink poster={image} src={src} />}
    </div>
  );
};
