import React from "react";
import classNames from "classnames";
import { NavLink } from "react-router-dom";

import styles from "./BlockWrapper.module.scss";

import img1 from "../../assets/Rectangle 122.png";

export const BlockWrapper = ({ title, subtitle }) => {
  return (
    <section className={styles.section}>
      <h3 className={classNames("titleBlock", styles.title)}>{title}</h3>
      <p className={styles.subtitle}>{subtitle}</p>
      {/*sdf*/}
      <div className={styles.content}>
        <NavLink className={styles.card} to="#">
          <img className={styles.img} src={img1} alt="" />
          <h4 className={styles.name}>Как выбрать материал для дома?</h4>
          <p className={styles.duration}>Время на чтение: 3 минуты</p>
          <p className={styles.read}>Читать</p>
        </NavLink>
      </div>
    </section>
  );
};
