import React from "react";
import classNames from "classnames";

import styles from "./CheckShield.module.scss";

export const CheckShield = ({ className }) => (
  <svg className={classNames(styles.icon, className)}>
    <use href="#check-shield"></use>
  </svg>
);
