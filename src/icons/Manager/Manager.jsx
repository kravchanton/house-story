import React from "react";
import classNames from "classnames";

import styles from "./Manager.module.scss";

export const Manager = ({ className }) => (
  <svg className={classNames(styles.icon, className)}>
    <use href="#manager"></use>
  </svg>
);
