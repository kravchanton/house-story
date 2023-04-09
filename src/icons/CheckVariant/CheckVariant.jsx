import React from "react";
import classNames from "classnames";

import styles from "./CheckVariant.module.scss";

export const CheckVariant = ({ className }) => (
  <svg className={classNames(styles.icon, className)}>
    <use href="#check-variant"></use>
  </svg>
);
