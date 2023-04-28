import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { SlideTop } from "./SlideTop";

import img from "../assets/Rectangle 120.png";
import img1 from "../assets/IMG_1340 1.png";
import { SliderBtn } from "./SliderBtn";

export const TopSlider = () => {
  return (
    <Swiper slidesPerView={1}>
      <SwiperSlide>
        <SlideTop img={img} text="1" />
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <SlideTop img={img1} text="2" />
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <SlideTop text="3" />
      </SwiperSlide>
      <div>
        <SliderBtn direction="next" icon={true} />
        <SliderBtn direction="prev" icon={true} />
      </div>
    </Swiper>
  );
};
