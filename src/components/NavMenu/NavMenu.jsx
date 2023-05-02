import React from "react";

import styles from "./NavMenu.module.scss";

import { Blog, Catalog, Contacts, Home, Shop, Specialist } from "../../icons";
import classNames from "classnames";

export const NavMenu = ({ black, className }) => {
  return (
    <nav>
      <ul className={classNames(styles.nav, className)}>
        <li className={styles.menuItem}>
          <Home className={black ? styles.iconVariant : styles.icon} />

          <p className={black ? styles.titleVariant : styles.title}>Главная</p>
        </li>
        <li className={styles.menuItem}>
          <Shop className={black ? styles.iconVariant : styles.icon} />

          <p className={black ? styles.titleVariant : styles.title}>
            Каталог готовых объектов
          </p>
        </li>
        <li className={styles.menuItem}>
          <Catalog className={black ? styles.iconVariant : styles.icon} />

          <p className={black ? styles.titleVariant : styles.title}>
            Магазин стройматериалов
          </p>
        </li>
        <li className={styles.menuItem}>
          <Blog className={black ? styles.iconVariant : styles.icon} />

          <p className={black ? styles.titleVariant : styles.title}>Блог</p>
        </li>
        <li className={styles.menuItem}>
          <Specialist className={black ? styles.iconVariant : styles.icon} />

          <p className={black ? styles.titleVariant : styles.title}>
            Выезд специалиста
          </p>
        </li>
        <li className={styles.menuItem}>
          <Contacts className={black ? styles.iconVariant : styles.icon} />

          <p className={black ? styles.titleVariant : styles.title}>Контакты</p>
        </li>
      </ul>
    </nav>
  );
};
