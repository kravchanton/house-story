import React from "react";
import classNames from "classnames";

import styles from "./World.module.scss";

export const World = ({ className }) => (
  <svg className={classNames(styles.icon, className)}>
    <use href="#world"></use>
  </svg>
);
