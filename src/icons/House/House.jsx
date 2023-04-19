import React from "react";
import classNames from "classnames";

import styles from "./House.module.scss";

export const House = ({ className }) => (
  <svg className={classNames(styles.icon, className)}>
    <use href="#house"></use>
  </svg>
);
