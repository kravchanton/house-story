import React from "react";
import classNames from "classnames";

import styles from "./Clock.module.scss";

export const Clock = ({ className }) => (
  <svg className={classNames(styles.icon, className)}>
    <use href="#clock"></use>
  </svg>
);
