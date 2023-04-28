import React from "react";
import classNames from "classnames";

import styles from "./Worker.module.scss";

export const Worker = ({ className }) => (
  <svg className={classNames(styles.icon, className)}>
    <use href="#worker"></use>
  </svg>
);
