import React from "react";
import classNames from "classnames";

import styles from "./Close.module.scss";

export const Close = ({ className }) => (
  <svg className={classNames(styles.icon, className)}>
    <use href="#close-icon"></use>
  </svg>
);
