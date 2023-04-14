import React from "react";
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import plan from "../../assets/plan.png";
import firstimg from "../../assets/firstFloorimg1.png";
import instagram from "../../assets/inst.png";
import facebook from "../../assets/facebook-logo.png";

import styles from "./GalleryCard.module.scss";

import { Container, MenuButton } from "../../components";
import {
  MailSocials,
  PhoneSocials,
  Telegram,
  Viber,
  WhatsUp,
} from "../../icons";

export const GalleryCard = () => {
  return (
    <section className={styles.galleryCard}>
      <Container>
        <h1 className={styles.title}>План 1 этажа</h1>
        <div className={styles.about}>
          <img className={styles.plan} src={plan} alt="plan" />
          <div className={styles.buttonsBlock}>
            <img className={styles.imageFloor} src={firstimg} alt="firstimg" />
            <MenuButton
              classNameForBtn={styles.btnWrapper}
              className={styles.btn}
              title="План 2 этажа"
            />
            <MenuButton
              classNameForBtn={styles.btnWrapper}
              className={styles.btn}
              title="Как строился дом"
            />
            <MenuButton
              classNameForBtn={styles.btnWrapper}
              className={styles.btnTransparent}
              title="На карте"
            />
            <MenuButton
              classNameForBtn={styles.btnWrapper}
              className={styles.btn}
              title="Смотреть объект"
            />

            <MenuButton
              classNameForBtn={styles.btnWrapper}
              className={styles.btn}
              title="Написать прорабу"
            />
          </div>
        </div>
        <div className={styles.description}>
          <div className={styles.buttonBlock}>
            <MenuButton title="Описание" className={styles.buttonAction} />
            <MenuButton title="Вложения" className={styles.buttonAction} />
            <MenuButton title="Доход" className={styles.buttonAction} />
            <MenuButton title="Документы" className={styles.buttonAction} />
          </div>
          <div className={styles.textBlock}>
            <div>
              <p className={styles.text}>
                Данное предложение обладает высоким инвестиционным потенциалом.
                Его можно рассматривать как для собственного проживания или
                отдыха на берегу Средиземного моря, так и для выгодной
                инвестиции с целью сдачи квартиры в аренду получая при этом
                хороший доход.
              </p>

              <p className={styles.text}>
                Отличное месторасположение и наличие инфраструктуры в комплексе
                – именно тот вариант, который всегда востребован на рынке аренды
                города.
              </p>
              <p className={styles.text}>
                В стоимость апартаментов уже включена полная чистовая отделка,
                укомплектованные санузлы и встроенная мебель в кухонной зоне.
              </p>
            </div>

            <div className={styles.socials}>
              <p className={styles.titleSocials}>
                Напишите в удобный для вас месенжер и мы проконсультируем вас по
                всем вопросам.
              </p>
              <div className={styles.socialsWrapper}>
                <NavLink className={styles.link} to="#">
                  <PhoneSocials />
                  <p>Звонок</p>
                </NavLink>
                <NavLink className={styles.link} to="#">
                  <MailSocials />
                  <p>Почта</p>
                </NavLink>
                <NavLink className={styles.link} to="#">
                  <WhatsUp />
                  <p>WhatsApp</p>
                </NavLink>
                <NavLink className={styles.link} to="#">
                  <Viber />
                  <p>Viber</p>
                </NavLink>
                <NavLink className={styles.link} to="#">
                  <Telegram />
                  <p>Telegram</p>
                </NavLink>
                <NavLink className={styles.link} to="#">
                  <img
                    className={styles.icon}
                    src={instagram}
                    alt="instagram"
                  />
                  <p>Instagram</p>
                </NavLink>
                <NavLink className={styles.link} to="#">
                  <img className={styles.icon} src={facebook} alt="facebook" />
                  <p>Facebook</p>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.photoBlock}>
          <>
            <Swiper
              slidesPerView={6}
              spaceBetween={40}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>Slide 1</SwiperSlide>
              <SwiperSlide>Slide 2</SwiperSlide>
              <SwiperSlide>Slide 3</SwiperSlide>
              <SwiperSlide>Slide 4</SwiperSlide>
              <SwiperSlide>Slide 5</SwiperSlide>
              <SwiperSlide>Slide 6</SwiperSlide>
              <SwiperSlide>Slide 7</SwiperSlide>
              <SwiperSlide>Slide 8</SwiperSlide>
              <SwiperSlide>Slide 9</SwiperSlide>
              <SwiperSlide>Slide 1</SwiperSlide>
              <SwiperSlide>Slide 2</SwiperSlide>
              <SwiperSlide>Slide 3</SwiperSlide>
              <SwiperSlide>Slide 4</SwiperSlide>
              <SwiperSlide>Slide 5</SwiperSlide>
              <SwiperSlide>Slide 6</SwiperSlide>
              <SwiperSlide>Slide 7</SwiperSlide>
              <SwiperSlide>Slide 8</SwiperSlide>
              <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper>
          </>
        </div>
      </Container>
    </section>
  );
};
