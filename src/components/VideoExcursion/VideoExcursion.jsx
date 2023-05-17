import React from "react";

import styles from "./VideoExcursion.module.scss";
import { VideoLink } from "../VideoLink";

export const VideoExcursion = ({ data }) => {
  // eslint-disable-next-line no-debugger
  debugger;
  console.log(data);
  return (
    <div className={styles.videoSection}>
      {data?.slice(0, 2).map((t, index) => (
        <VideoLink
          key={index}
          link={false}
          id={t.id}
          title={t.title}
          author={t.author}
          descr={t.position}
          classNameWrapper={styles.wrapper}
          youtubeLink={t.youtubeLink}
          src={
            t?.video?.data?.attributes?.name &&
            `${process.env.REACT_APP_UPLOAD_URL}${t?.video?.data?.attributes?.url}`
          }
          poster={`${process.env.REACT_APP_UPLOAD_URL}${t?.image?.data?.attributes?.url}`}
        />
      ))}
    </div>
  );
};
