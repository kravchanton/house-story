import React from "react";
import classNames from "classnames";

import styles from "./Timer.module.scss";

export const Timer = ({ className }) => (
  <svg className={classNames(styles.icon, className)}>
    <use href="#timer"></use>
  </svg>
);
