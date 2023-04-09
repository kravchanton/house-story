import React from "react";
import classNames from "classnames";

import styles from "./Payment.module.scss";

export const Payment = ({ className }) => (
  <svg className={classNames(styles.icon, className)}>
    <use href="#payment"></use>
  </svg>
);
