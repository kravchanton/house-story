import React from "react";
import classNames from "classnames";

import styles from "./WorkerVariant.module.scss";

export const WorkerVariant = ({ className }) => (
  <svg className={classNames(styles.icon, className)}>
    <use href="#worker2"></use>
  </svg>
);
