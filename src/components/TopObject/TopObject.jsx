import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";
import { Swiper, SwiperSlide } from "swiper/react";

import styles from "./TopObject.module.scss";

import { MenuButton } from "../MenuButton";
// import { HouseVariant } from "../../icons";
import { SlideTop } from "../SlideTop";
import { SliderBtn } from "../SliderBtn";

import { fetchTopObject } from "../../bll/topObjectReducer";

export const TopObject = () => {
  const [folder, setFolder] = useState(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    return document.documentElement.clientWidth < 768
      ? setFolder(null)
      : setFolder(0);
  }, []);

  const handleActiveFolder = (index) => {
    setFolder(index);
    setIsActive(true);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTopObject());
  }, []);
  let data = useSelector((state) => state.topObject.topObject);

  return (
    <section className={classNames(styles.section)}>
      <div>
        <h3 className={classNames("titleBlock", styles.title)}>
          Топ выполненных объектов
        </h3>
        <p className={styles.subtitle}>
          Показываем процесс работы изнутри, делимся результатами, опытом,
          полезными фишками
        </p>
      </div>

      <div className={styles.content}>
        {" "}
        {data && (
          <>
            <div className={styles.buttons}>
              {data.map((t, index) => (
                <Fragment key={index}>
                  <div
                    onClick={() => {
                      handleActiveFolder(index);
                    }}
                  >
                    <MenuButton
                      className={
                        folder === index
                          ? `${styles.NavigationButton} ${styles.active}`
                          : styles.NavigationButton
                      }
                      title={t.attributes.title}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg">
                        <image
                          href={`${process.env.REACT_APP_UPLOAD_URL}${t.attributes.icon.data.attributes.url}`}
                        />
                      </svg>
                    </MenuButton>
                  </div>
                  {isActive && (
                    <div className={styles.mobile}>
                      <Swiper className="mySwiper" slidesPerView={1}>
                        {folder === index &&
                          data[folder].attributes.object.map((t, index) => (
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
                  )}
                </Fragment>
              ))}
            </div>
            <div className={styles.desctop}>
              <Swiper className="mySwiper" slidesPerView={1}>
                {data[folder]?.attributes?.object?.map((t, index) => (
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
          </>
        )}
      </div>
    </section>
  );
};
