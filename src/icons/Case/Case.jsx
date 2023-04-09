import React from "react";
import classNames from "classnames";

import styles from "./Case.module.scss";

export const Case = ({ className }) => (
  <svg className={classNames(styles.icon, className)}>
    <use href="#case"></use>
  </svg>
);
