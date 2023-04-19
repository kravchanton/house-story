import React from "react";

import styles from "./SlideTop.module.scss";

export const SlideTop = ({ img, text }) => {
  return (
    <>
      <div className={styles.images}>
        <img className={styles.image} src={img} alt="houseTop" />
        <div className={styles.desc}>{text}</div>
      </div>
    </>
  );
};
