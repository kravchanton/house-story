import React, { useEffect, useState } from "react";
import classNames from "classnames";
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

import poster from "../../assets/poster.png";
import "swiper/css";

import styles from "./BlockWrapper.module.scss";
import { MenuButton, SliderBtn, SlideTop, VideoLink } from "../../components";
import { HouseVariant } from "../../icons";
import { useDispatch, useSelector } from "react-redux";
import { fetchTopObject } from "../../bll/topObjectReducer";

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
  const [folder, setFolder] = useState(0);
  const [isActive, setIsActive] = useState(true);
  console.log(isActive);

  useEffect(() => {
    return document.documentElement.clientWidth < 768
      ? setIsActive(false)
      : setIsActive(true);
  });

  const handleActiveFolder = (index) => {
    setFolder(index);
    if (folder) {
      setIsActive((prevState) => !prevState);
    }
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTopObject());
  }, []);
  let data = useSelector((state) => state.topObject.topObject);
  console.log(data);

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
        {top && data && (
          <>
            <div className={styles.buttons}>
              {data.map((t, index) => (
                <div key={index} onClick={() => handleActiveFolder(index)}>
                  <MenuButton
                    className={classNames(styles.btn, [
                      isActive && styles.btnActive,
                    ])}
                    title={t.attributes.title}
                  >
                    <HouseVariant className={styles.icon} />
                  </MenuButton>
                  <div className={styles.topMobile}>
                    <Swiper className="mySwiper" slidesPerView={1}>
                      {data[folder].attributes.object.map((t, index) => (
                        <SwiperSlide key={index}>
                          <SlideTop
                            img={`${process.env.REACT_APP_UPLOAD_URL}${t?.mainPhoto?.data?.attributes?.url}`}
                            data={t}
                          />
                        </SwiperSlide>
                      ))}
                      <div className={styles.buttonsBlock}>
                        <SliderBtn icon={true} direction="next" />
                        <SliderBtn icon={true} direction="prev" />
                      </div>
                    </Swiper>
                  </div>
                </div>
              ))}
            </div>
            <Swiper className="mySwiper" slidesPerView={1}>
              {data[folder].attributes.object.map((t, index) => (
                <SwiperSlide key={index}>
                  <SlideTop
                    img={`${process.env.REACT_APP_UPLOAD_URL}${t?.mainPhoto?.data?.attributes?.url}`}
                    data={t}
                  />
                </SwiperSlide>
              ))}
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
