import React from "react";
import classNames from "classnames";

import styles from "./SmallArrow.module.scss";

export const SmallArrow = ({ className }) => (
  <svg className={classNames(styles.icon, className)}>
    <use href="#small-arrow"></use>
  </svg>
);
