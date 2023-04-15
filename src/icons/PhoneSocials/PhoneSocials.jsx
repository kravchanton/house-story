import React from "react";
import classNames from "classnames";

import styles from "./PhoneSocials.module.scss";

export const PhoneSocials = ({ className }) => (
  <svg className={classNames(styles.icon, className)}>
    <use href="#phone-icon"></use>
  </svg>
);
