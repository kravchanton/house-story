import React, { useState } from "react";

import logo from "../../assets/logo.svg";
import plant from "../../assets/plant.png";
import phone from "../../assets/phoneContact.png";

import styles from "./Header.module.scss";

import { Burger, SmallArrow, Structure, Viber, WhatsUp } from "../../icons";
import {
  Container,
  MenuButton,
  MenuDropdown,
  PhoneDropdown,
} from "../../components";
import { Telegram } from "../../icons";
import { menu } from "../../mockData/menu";
import { Link, NavLink } from "react-router-dom";

export const Header = () => {
  const [isOpenContacts, setIsOpenContacts] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  return (
    <header className={styles.header}>
      <Container className={styles.container}>
        <div className={styles.info}>
          <NavLink to="/">
            <img src={logo} alt="logo" />
          </NavLink>
          <div className={styles.plantWrapper}>
            <img src={plant} alt="" />
            <h4 className={styles.plantText}>
              Собственное производство строительных материалов и
              метало-конструкций
            </h4>
          </div>
          <div className={styles.structure}>
            <div className={styles.wrapper}>
              <div className={styles.iconWrapper}>
                <Structure />
              </div>
            </div>
            <div>
              <p className={styles.structureText}>Заказать 3D-макет дома</p>
              <div className={styles.socials}>
                <Link to="#">
                  <WhatsUp />
                </Link>
                <Link to="#">
                  <Viber />
                </Link>
                <Link to="#">
                  <Telegram />
                </Link>
              </div>
            </div>
          </div>

          <div
            onClick={() => setIsOpenContacts((prevState) => !prevState)}
            className={styles.phoneWrapper}
          >
            <img src={phone} alt="" />
            <div>
              <h4 className={styles.phone}>
                <span>+7 (915) 168-55-50</span>
                <SmallArrow />
              </h4>
              <p className={styles.text}>Прораб онлайн, звоните!</p>
              {isOpenContacts && <PhoneDropdown />}
            </div>
          </div>

          <button type="button" className={styles.btn}>
            Заказать звонок
          </button>
          <Burger
            activate={() => setIsOpenMenu((prevState) => !prevState)}
            className={styles.burger}
          />
          {isOpenMenu && (
            <MenuDropdown
              closeMenu={() => setIsOpenMenu(false)}
              isOpenMenu={isOpenMenu}
            />
          )}
        </div>
        <div className={styles.greenBlock}>
          <nav className={styles.nav}>
            {menu.map((item) => (
              <NavLink key={item.id} to={item.link}>
                <MenuButton title={item.title} className={styles.menuItem} />
              </NavLink>
            ))}
          </nav>
        </div>
      </Container>
    </header>
  );
};
