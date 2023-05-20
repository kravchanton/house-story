import React from "react";
import { NavLink } from "react-router-dom";
import classNames from "classnames";

import styles from "./NavMenu.module.scss";

import { Blog, Catalog, Contacts, Home, Shop, Specialist } from "../../icons";

export const NavMenu = ({ black, className, closeMenu }) => {
  return (
    <nav>
      <ul className={classNames(styles.nav, className)}>
        <NavLink to="">
          <li onClick={closeMenu} className={styles.menuItem}>
            <Home className={black ? styles.iconVariant : styles.icon} />

            <p className={black ? styles.titleVariant : styles.title}>
              Главная
            </p>
          </li>
        </NavLink>

        <NavLink to="/catalog/1/">
          {" "}
          <li onClick={closeMenu} className={styles.menuItem}>
            <Catalog className={black ? styles.iconVariant : styles.icon} />

            <p className={black ? styles.titleVariant : styles.title}>
              Каталог готовых объектов
            </p>
          </li>
        </NavLink>
        <NavLink to="/gallery-card/1">
          {" "}
          <li onClick={closeMenu} className={styles.menuItem}>
            <Shop className={black ? styles.iconVariant : styles.icon} />

            <p className={black ? styles.titleVariant : styles.title}>
              Фотогалерея
            </p>
          </li>
        </NavLink>
        <NavLink to="/blog/1">
          {" "}
          <li onClick={closeMenu} className={styles.menuItem}>
            <Blog className={black ? styles.iconVariant : styles.icon} />

            <p className={black ? styles.titleVariant : styles.title}>Блог</p>
          </li>
        </NavLink>
        <NavLink to="meeting">
          <li onClick={closeMenu} className={styles.menuItem}>
            <Specialist className={black ? styles.iconVariant : styles.icon} />

            <p className={black ? styles.titleVariant : styles.title}>
              Выезд специалиста
            </p>
          </li>
        </NavLink>
        <NavLink to="contacts">
          {" "}
          <li onClick={closeMenu} className={styles.menuItem}>
            <Contacts className={black ? styles.iconVariant : styles.icon} />

            <p className={black ? styles.titleVariant : styles.title}>
              Контакты
            </p>
          </li>
        </NavLink>
        <NavLink to="about">
          {" "}
          <li onClick={closeMenu} className={styles.menuItem}>
            <Shop className={black ? styles.iconVariant : styles.icon} />

            <p className={black ? styles.titleVariant : styles.title}>
              О нас
            </p>
          </li>
        </NavLink>
      </ul>
    </nav>
  );
};
