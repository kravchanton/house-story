import React from "react";

import styles from "./NavMenu.module.scss";
import { Icon } from "../Icon";
import { Blog, Catalog, Contacts, Home, Shop, Specialist } from "../../icons";
import classNames from "classnames";

export const NavMenu = ({ black, className }) => {
  return (
    <nav>
      <ul className={classNames(styles.nav, className)}>
        <li className={styles.menuItem}>
          <Icon>
            <Home className={black ? styles.iconVariant : styles.icon} />
          </Icon>
          <p className={black ? styles.titleVariant : styles.title}>Главная</p>
        </li>
        <li className={styles.menuItem}>
          <Icon>
            <Shop className={black ? styles.iconVariant : styles.icon} />
          </Icon>
          <p className={black ? styles.titleVariant : styles.title}>
            Каталог готовых объектов
          </p>
        </li>
        <li className={styles.menuItem}>
          <Icon>
            <Catalog className={black ? styles.iconVariant : styles.icon} />
          </Icon>
          <p className={black ? styles.titleVariant : styles.title}>
            Магазин стройматериалов
          </p>
        </li>
        <li className={styles.menuItem}>
          <Icon>
            <Blog className={black ? styles.iconVariant : styles.icon} />
          </Icon>
          <p className={black ? styles.titleVariant : styles.title}>Блог</p>
        </li>
        <li className={styles.menuItem}>
          <Icon>
            <Specialist className={black ? styles.iconVariant : styles.icon} />
          </Icon>
          <p className={black ? styles.titleVariant : styles.title}>
            Выезд специалиста
          </p>
        </li>
        <li className={styles.menuItem}>
          <Icon>
            <Contacts className={black ? styles.iconVariant : styles.icon} />
          </Icon>
          <p className={black ? styles.titleVariant : styles.title}>Контакты</p>
        </li>
      </ul>
    </nav>
  );
};
