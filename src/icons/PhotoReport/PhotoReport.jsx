import React from "react";
import classNames from "classnames";

import styles from "./PhotoReport.module.scss";

export const PhotoReport = ({ className }) => (
  <svg className={classNames(styles.icon, className)}>
    <use href="#photo-report"></use>
  </svg>
);
