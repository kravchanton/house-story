import React from "react";
import rehypeRaw from "rehype-raw";
import ReactMarkdown from "react-markdown";
import { NavLink } from "react-router-dom";

import styles from "./FloorContent.module.scss";

import { MenuButton } from "../MenuButton";

styles.imagesBlock = undefined;
export const FloorContent = ({ data }) => {
  return (
    <div className={styles.section}>
      <img
        className={styles.floorImage}
        src={`${process.env.REACT_APP_UPLOAD_URL}${data.mainPhoto.data?.attributes?.url}`}
        alt="firstFloor"
      />
      <div className={styles.description}>
        <h4 className={styles.descTitle}>{data.title}</h4>
        <p className={styles.text}>
          <ReactMarkdown rehypePlugins={[rehypeRaw]}>
            {data.description}
          </ReactMarkdown>
        </p>
      </div>
      <div className={styles.imagesBlock}>
        <div className={styles.imagesWrapper}>
          <img
            className={styles.smallImage}
            src={`${process.env.REACT_APP_UPLOAD_URL}${data?.media?.data[0]?.attributes?.url}`}
            alt="firstimg"
          />
          <img
            className={styles.smallImage}
            src={`${process.env.REACT_APP_UPLOAD_URL}${data?.media?.data[1]?.attributes?.url}`}
            alt="secondimg"
          />
        </div>
        <NavLink to={data.buttonLink}>
          <MenuButton title={data.buttonTitle} className={styles.btnFloor} />
        </NavLink>
      </div>
    </div>
  );
};
