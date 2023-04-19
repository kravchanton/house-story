import React from "react";
import classNames from "classnames";

import styles from "./SpinArrow.module.scss";

export const SpinArrow = ({ className }) => (
  <svg className={classNames(styles.icon, className)}>
    <use href="#spin-arrow"></use>
  </svg>
);
