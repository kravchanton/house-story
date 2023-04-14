import React from "react";
import classNames from "classnames";

import styles from "./PlayVariant.module.scss";

export const PlayVariant = ({ className }) => (
  <svg className={classNames(styles.icon, className)}>
    <use href="#playVariant"></use>
  </svg>
);
