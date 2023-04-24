import React from "react";
import classNames from "classnames";

import styles from "./SectionCard.module.scss";
import { MenuButton } from "../../components";
import {NavLink} from "react-router-dom";

export const SectionCard = ({ title, children, buttonText, buttonLink }) => {
  return (
    <section className={styles.section}>
      <h3 className={classNames("titleBlock", styles.titleSection)}>{title}</h3>
      {children}
      {buttonText && <NavLink to={buttonLink}> <MenuButton className={styles.btn} title={buttonText} /></NavLink>}
    </section>
  );
};
