import React from "react";
import classNames from "classnames";

import styles from "./SectionCard.module.scss";
import { MenuButton } from "../../components";

export const SectionCard = ({ title, children, buttonText }) => {
  return (
    <section className={styles.section}>
      <h3 className={classNames("titleBlock", styles.titleSection)}>{title}</h3>
      {children}
      {buttonText && <MenuButton className={styles.btn} title={buttonText} />}
    </section>
  );
};
