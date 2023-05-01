import React, { useState } from "react";
import classNames from "classnames";

import styles from "./CommonReviewText.module.scss";

import { SmallArrow } from "../../icons";

export const CommonReviewText = ({ date, name, reviewBody }) => {
  const [isCollapsible, setIsCollapsible] = useState(false);

  const collapseContent = () => {
    setIsCollapsible((prevState) => !prevState);
  };

  return (
    <div className={styles.reviewText}>
      <p className={styles.date}>{date}</p>
      <h4 className={styles.name}>{name}</h4>
      <p
        className={classNames(
          styles.reviewDesc,
          isCollapsible && styles.collapsible
        )}
      >
        {reviewBody}
      </p>
      <button onClick={collapseContent} className={styles.readMore}>
        <p className={styles.btnText}>Читать дальше</p>
        <SmallArrow className={isCollapsible && styles.iconArrow} />
      </button>
    </div>
  );
};
