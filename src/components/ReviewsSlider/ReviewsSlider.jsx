import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/swiper-bundle.min.css";
import "swiper/css/pagination";

import "./ReviewsSlider.scss";

import { Review } from "../Review";

export const ReviewsSlider = ({ reviews }) => {
  console.log(reviews);
  return (
    <div className="wrapper">
      <Swiper
        loop={true}
        slidesPerView={3}
        spaceBetween={30}
        pagination={{ clickable: true }}
        modules={[Pagination]}
      >
        <>
          {reviews.map((item) => (
            <SwiperSlide key={item.id}>
              <Review
                externalLink={item.externalLink}
                yotubeLink={item.youtubeLink}
                src={`${process.env.REACT_APP_UPLOAD_URL}${item?.video?.data?.attributes?.url}`}
                image={`${process.env.REACT_APP_UPLOAD_URL}${item.posterImage.data.attributes.url}`}
              />
            </SwiperSlide>
          ))}
        </>
      </Swiper>
    </div>
  );
};
