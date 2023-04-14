import React from "react";
import classNames from "classnames";

import styles from "./MailSocials.module.scss";

export const MailSocials = ({ className }) => (
  <svg className={classNames(styles.icon, className)}>
    <use href="#mail-icon"></use>
  </svg>
);
