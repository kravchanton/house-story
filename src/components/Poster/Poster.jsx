import React from "react";
import classNames from "classnames";

import styles from "./Poster.module.scss";

export const Poster = ({ src, title, author, desc, className }) => {
  return (
    <div className={classNames(styles.poster, className)}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.author}>{author}</p>
      <p className={styles.desc}>{desc}</p>
      <img className={styles.image} src={src} alt="" />
    </div>
  );
};
