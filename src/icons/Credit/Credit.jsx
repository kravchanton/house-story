import React from "react";
import classNames from "classnames";

import styles from "./Credit.module.scss";

export const Credit = ({ className }) => (
  <svg className={classNames(styles.icon, className)}>
    <use href="#credit"></use>
  </svg>
);
