import React from "react";
import classNames from "classnames";

import styles from "./Binoculars.module.scss";

export const Binoculars = ({ className }) => (
  <svg className={classNames(styles.icon, className)}>
    <use href="#binoculars"></use>
  </svg>
);
