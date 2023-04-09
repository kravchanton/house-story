import React from "react";
import classNames from "classnames";

import styles from "./Viber.module.scss";

export const Viber = ({ className }) => (
  <svg className={classNames(styles.icon, className)}>
    <use href="#viber"></use>
  </svg>
);
