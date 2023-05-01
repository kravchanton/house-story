import React, { useState } from "react";
import classNames from "classnames";
import { NavLink } from "react-router-dom";

import styles from "./ReviewText.module.scss";

import { SmallArrow } from "../../icons";

import { MenuButton } from "../MenuButton";

export const ReviewText = ({
  date,
  name,
  reviewBody,
  buttonText,
  buttonLink,
}) => {
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
      <NavLink to={buttonLink}>
        <MenuButton className={styles.btnReview} title={buttonText} />
      </NavLink>
    </div>
  );
};
