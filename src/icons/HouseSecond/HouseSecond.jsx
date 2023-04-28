import React from "react";
import classNames from "classnames";

import styles from "./HouseSecond.module.scss";

export const HouseSecond = ({ className }) => (
  <svg className={classNames(styles.icon, className)}>
    <use href="#house2"></use>
  </svg>
);
