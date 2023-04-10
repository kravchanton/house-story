import React from "react";
import { useSwiper } from "swiper/react";

import sliderBtn from "../../assets/sliderBtn.png";

import styles from "./SliderBtn.module.scss";

export const SliderBtn = ({ direction }) => {
  const swiper = useSwiper();
  return (
    <>
      {direction === "next" && (
        <img
          onClick={() => swiper.slideNext()}
          className={styles.sliderBtnNext}
          src={sliderBtn}
          alt="sliderBtn"
        />
      )}
      {direction === "prev" && (
        <img
          onClick={() => swiper.slidePrev()}
          className={styles.sliderBtnPrev}
          src={sliderBtn}
          alt="sliderBtn"
        />
      )}
    </>
  );
};
