import React from "react";
import classNames from "classnames";

import styles from "./Pause.module.scss";

export const Pause = ({ className }) => (
  <svg className={classNames(styles.icon, className)}>
    <use href="#pause" />
  </svg>
);
