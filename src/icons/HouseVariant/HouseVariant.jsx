import React from "react";
import classNames from "classnames";

import styles from "./HouseVariant.module.scss";

export const HouseVariant = ({ className }) => (
  <svg className={classNames(styles.icon, className)}>
    <use href="#house-variant"></use>
  </svg>
);
