import React from "react";
import classNames from "classnames";
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper";

import poster from "../../assets/poster.png";
import house from "../../assets/houseTop.png";

import "swiper/css/effect-fade";

import styles from "./BlockWrapper.module.scss";
import { MenuButton, SliderBtn, VideoLink, SlideTop } from "../../components";
import { HouseVariant } from "../../icons";

export const BlockWrapper = ({
  title,
  subtitle,
  image1,
  nameCard1,
  readingDuration1,
  image2,
  nameCard2,
  readingDuration2,
  image3,
  nameCard3,
  readingDuration3,
  readText,
  btn,
  article,
  video,
  top,
  video1,
  video2,
  video3,
  classNameSection,
}) => {
  return (
    <section className={classNames(styles.section, classNameSection)}>
      <div>
        <h3 className={classNames("titleBlock", styles.title)}>{title}</h3>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>

      <div className={styles.content}>
        {article && (
          <>
            <NavLink className={styles.card} to="#">
              <img className={styles.img} src={image1} alt="" />
              <h4 className={styles.name}>{nameCard1}</h4>
              <p className={styles.duration}>{readingDuration1}</p>
              <p className={styles.read}>{readText}</p>
            </NavLink>
            <NavLink className={styles.card} to="#">
              <img className={styles.img} src={image2} alt="" />
              <h4 className={styles.name}>{nameCard2}</h4>
              <p className={styles.duration}>{readingDuration2}</p>
              <p className={styles.read}>{readText}</p>
            </NavLink>
            <NavLink className={styles.card} to="#">
              <img className={styles.img} src={image3} alt="" />
              <h4 className={styles.name}>{nameCard3}</h4>
              <p className={styles.duration}>{readingDuration3}</p>
              <p className={styles.read}>{readText}</p>
            </NavLink>
          </>
        )}
        {video && (
          <>
            {video1 && (
              <VideoLink
                title={true}
                author={true}
                classNameWrapper={styles.wrapper}
                src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
                poster={poster}
              />
            )}
            {video2 && (
              <VideoLink
                classNameWrapper={styles.wrapper}
                youtubeLink="https://www.youtube.com/embed/ZDsWEApmyZI"
                poster={poster}
              />
            )}
            {video3 && (
              <VideoLink
                title={true}
                author={true}
                classNameWrapper={styles.wrapper}
                src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
                poster={poster}
              />
            )}
          </>
        )}
        {top && (
          <>
            <div className={styles.buttons}>
              <MenuButton
                className={styles.btn}
                title="Дома из оцилиндрованного бруса"
              >
                <HouseVariant className={styles.icon} />
              </MenuButton>
              <MenuButton className={styles.btn} title="Дома из клееного бруса">
                <HouseVariant className={styles.icon} />
              </MenuButton>
              <MenuButton
                className={styles.btn}
                title="Кирпичные/каменные дома"
              >
                <HouseVariant className={styles.icon} />
              </MenuButton>
              <MenuButton className={styles.btn} title="Кейсы по услугам">
                <HouseVariant className={styles.icon} />
              </MenuButton>
            </div>
            <Swiper effect={"fade"} modules={[EffectFade]} slidesPerView={1}>
              <SwiperSlide>
                <SlideTop img={poster} text="sdfsdfsdf" />
              </SwiperSlide>
              <SwiperSlide>
                <SlideTop img={house} text="qqqqqqqqqqqqqqqq" />
              </SwiperSlide>
              <SwiperSlide>
                <SlideTop />
              </SwiperSlide>
              <div className={styles.buttonsBlock}>
                <SliderBtn icon={true} direction="next" />
                <SliderBtn icon={true} direction="prev" />
              </div>
            </Swiper>
          </>
        )}
      </div>

      {btn && (
        <MenuButton className={styles.btnFloor} title="Написать в телеграм" />
      )}
    </section>
  );
};
