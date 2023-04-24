import React from "react";
import classNames from "classnames";
import {Swiper, SwiperSlide} from "swiper/react";

import styles from "./FavouriteHouses.module.scss";

import bgFavourite from "../../assets/bgFavourite.png";

import {MenuButton, SliderBtn} from "../../components";
import {NavLink} from "react-router-dom";

export const FavouriteHouses = ({data}) => {
  return (
    <div className={styles.swiperWrapper}>
      <img className={styles.favouriteBg} src={bgFavourite} alt="" />
      <Swiper
        style={{ position: "unset" }}
        loop={true}
        slidesPerView={2}
        spaceBetween={40}
      >
        {  data.map((t, index) => <SwiperSlide key={index}>
          <div className={styles.favouriteCard}>
            <img
              className={styles.favouriteImg}
              src={`${process.env.REACT_APP_UPLOAD_URL}${t?.photo?.data?.attributes?.url}`}
              alt="favouriteHouse"
            />
            <div className={styles.favouriteDesc}>
              <h4 className={styles.descTitle}>{t.title}</h4>
              <div className={styles.price}>
                <h4
                  className={classNames(styles.priceText, styles.favouriteText)}
                >
                    {t.square} м²
                </h4>
                <h4
                  className={classNames(styles.priceText, styles.favouriteText)}
                >
                    {t.price} руб
                </h4>
              </div>

                {t.item.map((i, index) =>  <li key={index} className={styles.propertyWrapper}>
                <p className={styles.text}>{i.title}</p>
                <div></div>
                <p className={styles.text}>{i.value}</p>
              </li>)}
                <NavLink to={t.buttonLink}> <MenuButton className={styles.btnFloor}   title={t.buttonTitle}/></NavLink>
            </div>
          </div>
        </SwiperSlide>)}

        <SliderBtn icon={null} direction="next" />
        <SliderBtn icon={null} direction="prev" />
      </Swiper>
    </div>
  );
};
