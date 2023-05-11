import React, { useState } from "react";

import plant from "../../assets/plant.png";
import phone from "../../assets/phoneContact.png";

import styles from "./Header.module.scss";

import { Burger, Logo, SmallArrow, Structure } from "../../icons";
import {
  Container,
  MenuButton,
  MenuDropdown,
  PhoneDropdown,
} from "../../components";

import { menu } from "../../mockData/menu";
import { NavLink } from "react-router-dom";

export const Header = ({
  buttonText,
  buttonLink,
  socialLinks,
  contactItems,
  mainPhone,
  mainContact,
}) => {
  const [isOpenContacts, setIsOpenContacts] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  return (
    <header className={styles.header}>
      <Container className={styles.container}>
        <div className={styles.info}>
          <NavLink className={styles.logo} to="/">
            <Logo />
            <p>Общестроительная компания</p>
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
                {socialLinks.map((item) => (
                  <a
                    key={item.id}
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={`${process.env.REACT_APP_UPLOAD_URL}${item.icon.data.attributes.url}`}
                      alt=""
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.phoneWrapper}>
            <img src={phone} alt="" />
            <div>
              <h4 className={styles.phone}>
                <a className={styles.phoneNumber} href={`tel: ${mainPhone}`}>
                  {mainPhone}
                </a>
                <button
                  className={styles.btnArrow}
                  onClick={() => setIsOpenContacts((prevState) => !prevState)}
                >
                  <SmallArrow />
                </button>
              </h4>
              <p className={styles.text}>{mainContact}</p>
              {isOpenContacts && <PhoneDropdown contactItems={contactItems} />}
            </div>
          </div>
          <button
            className={styles.phoneBurger}
            onClick={() => setIsOpenMenu(true)}
          >
            <Burger />
          </button>

          <NavLink className={styles.btnLink} to={buttonLink}>
            <button type="button" className={styles.btn}>
              {buttonText}
            </button>
          </NavLink>
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
