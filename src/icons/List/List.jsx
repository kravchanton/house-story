import React from "react";
import classNames from "classnames";

import styles from "./List.module.scss";

export const List = ({ className }) => (
  <svg className={classNames(styles.icon, className)}>
    <use href="#list"></use>
  </svg>
);
