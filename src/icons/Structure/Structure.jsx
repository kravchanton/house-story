import React from "react";
import classNames from "classnames";

import styles from "./Structure.module.scss";

export const Structure = ({ className }) => (
  <svg className={classNames(styles.icon, className)}>
    <use href="#3d-structure"></use>
  </svg>
);
