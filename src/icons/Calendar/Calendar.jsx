import React from "react";
import classNames from "classnames";

import styles from "./Calendar.module.scss";

export const Calendar = ({ className }) => (
  <svg className={classNames(styles.icon, className)}>
    <use href="#calendar"></use>
  </svg>
);
