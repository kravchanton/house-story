import React from "react";

import styles from "./Footer.module.scss";

// import { footerMenu } from "../../mockData/footerMenu";

import {
  Container,
  MenuButton,
  NavMenu,
  // MenuFooterItem,
  ReviewsSlider,
} from "../../components";
import { Arrow, ArrowRight, LogoVariant } from "../../icons";

export const Footer = ({ socialLinks, reviews }) => {
  console.log(reviews);
  return (
    <footer className={styles.footer}>
      <Container className={styles.container}>
        <div className={styles.left}>
          <div className={styles.reviews}>
            <p className={styles.title}>Видеоотзывы от партнёров</p>
            <ReviewsSlider reviews={reviews} />
          </div>
          <div className={styles.logoBlock}>
            <LogoVariant />
            <p className={styles.text}>
              <span>Alfa Digital Agency</span> – разработка высоко конверсионных
              сайтов
            </p>
          </div>
        </div>
        <NavMenu />
        <div className={styles.info}>
          <div className={styles.textWrapper}>
            <p className={styles.textInfo}>Смотреть все документы</p>
            <ArrowRight />
          </div>
          <MenuButton
            className={styles.buttonFirst}
            title="Политика конфиденциальности"
          >
            <Arrow className={styles.arrow} />
          </MenuButton>
          <MenuButton className={styles.buttonSecond} title="Русский">
            <Arrow className={styles.arrow} />
          </MenuButton>
          <div className={styles.contacts}>
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
          <div className={styles.logoMobile}>
            <LogoVariant />
            <p className={styles.text}>
              <span>Alfa Digital Agency</span> – разработка высоко конверсионных
              сайтов
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};
