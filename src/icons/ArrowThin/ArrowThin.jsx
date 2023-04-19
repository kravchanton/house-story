import React from "react";
import classNames from "classnames";

import styles from "./ArrowThin.module.scss";

export const ArrowThin = ({ className }) => (
  <svg className={classNames(styles.icon, className)}>
    <use href="#arrow-thin"></use>
  </svg>
);
