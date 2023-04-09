import React from "react";
import classNames from "classnames";

import styles from "./Burger.module.scss";

export const Burger = ({ className, activate }) => (
  <svg onClick={activate} className={classNames(styles.icon, className)}>
    <use href="#burger"></use>
  </svg>
);
