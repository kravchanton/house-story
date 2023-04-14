import React from "react";
import classNames from "classnames";
import { Swiper, SwiperSlide } from "swiper/react";

import styles from "./FavouriteHouses.module.scss";

import bgFavourite from "../../assets/bgFavourite.png";
import favouriteHouse from "../../assets/favouriteHouse.png";

import { MenuButton, SliderBtn } from "../../components";

export const FavouriteHouses = () => {
  return (
    <>
      <img className={styles.favouriteBg} src={bgFavourite} alt="" />
      <Swiper
        watchSlidesProgress={true}
        loop={true}
        slidesPerView={2}
        spaceBetween={40}
        className={styles.slider}
      >
        <SwiperSlide>
          <div className={styles.favouriteCard}>
            <img
              className={styles.favouriteImg}
              src={favouriteHouse}
              alt="favouriteHouse"
            />
            <div className={styles.favouriteDesc}>
              <h4 className={styles.descTitle}>Дом в Балашихе</h4>
              <div className={styles.price}>
                <h4
                  className={classNames(styles.priceText, styles.favouriteText)}
                >
                  168,8 м²
                </h4>
                <h4
                  className={classNames(styles.priceText, styles.favouriteText)}
                >
                  210000 руб
                </h4>
              </div>

              <li className={styles.propertyWrapper}>
                <p className={styles.text}>Этажи</p>
                <div></div>
                <p className={styles.text}>1</p>
              </li>
              <li className={styles.propertyWrapper}>
                <p className={styles.text}>Комнаты</p>
                <div></div>
                <p className={styles.text}>4</p>
              </li>
              <MenuButton className={styles.btnFloor} title="Смотреть проект" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.favouriteCard}>
            <img
              className={styles.favouriteImg}
              src={favouriteHouse}
              alt="favouriteHouse"
            />
            <div className={styles.favouriteDesc}>
              <h4 className={styles.descTitle}>Дом в Балашихе</h4>
              <div className={styles.price}>
                <h4
                  className={classNames(styles.priceText, styles.favouriteText)}
                >
                  168,8 м²
                </h4>
                <h4
                  className={classNames(styles.priceText, styles.favouriteText)}
                >
                  210000 руб
                </h4>
              </div>

              <li className={styles.propertyWrapper}>
                <p className={styles.text}>Этажи</p>
                <div></div>
                <p className={styles.text}>1</p>
              </li>
              <li className={styles.propertyWrapper}>
                <p className={styles.text}>Комнаты</p>
                <div></div>
                <p className={styles.text}>4</p>
              </li>
              <MenuButton className={styles.btnFloor} title="Смотреть проект" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.favouriteCard}>
            <img
              className={styles.favouriteImg}
              src={favouriteHouse}
              alt="favouriteHouse"
            />
            <div className={styles.favouriteDesc}>
              <h4 className={styles.descTitle}>Дом в Балашихе</h4>
              <div className={styles.price}>
                <h4
                  className={classNames(styles.priceText, styles.favouriteText)}
                >
                  168,8 м²
                </h4>
                <h4
                  className={classNames(styles.priceText, styles.favouriteText)}
                >
                  210000 руб
                </h4>
              </div>

              <li className={styles.propertyWrapper}>
                <p className={styles.text}>Этажи</p>
                <div></div>
                <p className={styles.text}>1</p>
              </li>
              <li className={styles.propertyWrapper}>
                <p className={styles.text}>Комнаты</p>
                <div></div>
                <p className={styles.text}>4</p>
              </li>
              <MenuButton className={styles.btnFloor} title="Смотреть проект" />
            </div>
          </div>
        </SwiperSlide>
        <SliderBtn direction="next" />
        <SliderBtn direction="prev" />
      </Swiper>
    </>
  );
};
