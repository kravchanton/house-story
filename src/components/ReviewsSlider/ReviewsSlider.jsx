import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/swiper-bundle.min.css";
import "swiper/css/pagination";

import "./ReviewsSlider.scss";

import { VideoLink } from "../VideoLink";

import styles from "../Review/Review.module.scss";

export const ReviewsSlider = ({ reviews }) => {
  return (
    <>
      {reviews && (
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
                <VideoLink
                  footer={true}
                  src={
                    item?.video?.data?.attributes?.url &&
                    `${process.env.REACT_APP_UPLOAD_URL}${item?.video?.data?.attributes?.url}`
                  }
                  classNameWrapper={styles.videoWrapper}
                  poster={`${process.env.REACT_APP_UPLOAD_URL}${item.posterImage.data.attributes.url}`}
                  youtubeLink={item?.youtubeLink}
                />
                
              </SwiperSlide>
            ))}
          </>
        </Swiper>
      )}
    </>
  );
};
