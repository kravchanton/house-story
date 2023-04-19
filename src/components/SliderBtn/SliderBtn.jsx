import React from "react";
import { useSwiper } from "swiper/react";

import sliderBtn from "../../assets/sliderBtn.png";

import styles from "./SliderBtn.module.scss";
import { ArrowThin } from "../../icons/ArrowThin";

export const SliderBtn = ({ direction, icon }) => {
  const swiper = useSwiper();
  return (
    <>
      {direction === "next" && icon === null ? (
        <img
          onClick={() => swiper.slideNext()}
          className={styles.sliderBtnNext}
          src={sliderBtn}
          alt="sliderBtn"
        />
      ) : null}
      {icon && direction === "next" ? (
        <button onClick={() => swiper.slidePrev()}>
          {" "}
          <ArrowThin className={styles.prev} />
        </button>
      ) : null}
      {direction === "prev" && icon === null ? (
        <img
          onClick={() => swiper.slidePrev()}
          className={styles.sliderBtnPrev}
          src={sliderBtn}
          alt="sliderBtn"
        />
      ) : null}
      {icon && direction === "prev" ? (
        <button onClick={() => swiper.slideNext()}>
          {" "}
          <ArrowThin />
        </button>
      ) : null}
    </>
  );
};
