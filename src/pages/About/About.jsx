import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";
import ReactMarkdown from "react-markdown";
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

import { fetchAboutData } from "../../bll/reducers/aboutReducer";

import house from "../../assets/img-home-e1581520380712 1.png";
import cloud from "../../assets/1-14781_white-clouds-png-clipart-baby-e-kill-the 17 (1).png";
import cloudVariant from "../../assets/1-14781_white-clouds-png-clipart-baby-e-kill-the 18.png";
import shepki from "../../assets/shepki 4.png";
import bgReviews from "../../assets/00a8246c092185606e122eab3660496a 1.png";
import cloud2 from "../../assets/1-14781_white-clouds-png-clipart-baby-e-kill-the 15.png";

import styles from "./About.module.scss";

import {
  AboutGallery,
  CommonReviewText,
  Container,
  Excursion,
  Garanties,
  MainForm,
  MenuButton,
  SliderBtn,
  VideoLink,
  // ReviewText,
  AboutContentBlock,
  PhotoItemAbout,
} from "../../components";
import {
  CheckVariant,
  House,
  HouseSecond,
  SpinArrow,
  Worker,
  WorkerVariant,
} from "../../icons";

export const About = () => {
  const [isActiveOffice, setIsActiveOffice] = useState(true);
  const [isActiveProduction, setIsActiveProduction] = useState(false);
  const [isActiveStock, setIsActiveStock] = useState(false);
  const [id, setId] = useState(1);
  const [filteredData, setFilteredData] = useState(null);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.aboutData.aboutData.attributes);

  useEffect(() => {
    setFilteredData(
      data?.keyPersons?.persons?.filter((item) => id === item.id)
    );
  }, [data, id]);

  useEffect(() => {
    dispatch(fetchAboutData());
  }, []);

  const handleActiveOffice = () => {
    setIsActiveOffice(true);
    setIsActiveProduction(false);
    setIsActiveStock(false);
  };
  const handleActiveProduction = () => {
    setIsActiveProduction(true);
    setIsActiveOffice(false);
    setIsActiveStock(false);
  };

  const handleActiveStock = () => {
    setIsActiveStock(true);
    setIsActiveOffice(false);
    setIsActiveProduction(false);
  };

  const toggleActiveOffice = () => {
    setIsActiveOffice((prevState) => !prevState);
  };
  const toggleActiveProduction = () => {
    setIsActiveProduction((prevState) => !prevState);
  };
  const toggleActiveStock = () => {
    setIsActiveStock((prevState) => !prevState);
  };

  return (
    <section className={styles.about}>
      {data && (
        <Container className={styles.aboutContainer}>
          <MainForm />
          <div className={styles.history}>
            <h3 className={classNames("titleBlock", styles.title)}>
              {data.title}
            </h3>
            {data.contentBlock.map((item) => {
              return (
                <AboutContentBlock
                  text={item.text}
                  src={item.image.data.attributes.url}
                  reverseContent={item.reverseContent}
                  key={item.id}
                  title={item.title}
                />
              );
            })}
          </div>
          <div className={styles.chronology}>
            <SpinArrow className={styles.iconArrow1} />
            <SpinArrow className={styles.iconArrow2} />
            <SpinArrow className={styles.iconArrow3} />
            <h3 className={styles.titleContent}>
              Хронология развития компании
            </h3>
            <div className={styles.datesContent}>
              <div className={styles.item}>
                <h4 className={styles.year}>2016</h4>
                <div className={styles.desc}>
                  <div>
                    <House />
                  </div>
                  <p className={styles.descText}>
                    <ReactMarkdown>
                      {data.chronology.description1}
                    </ReactMarkdown>
                  </p>
                </div>
              </div>
              <div className={styles.item}>
                <h4 className={styles.year}>2017</h4>
                <div className={styles.desc}>
                  <div>
                    <Worker className={styles.iconWorker} />
                  </div>
                  <p className={styles.descText}>
                    <ReactMarkdown>
                      {data.chronology.description2}
                    </ReactMarkdown>
                  </p>
                </div>
              </div>
              <div className={styles.item}>
                <h4 className={styles.year}>2018</h4>
                <div className={styles.desc}>
                  <div>
                    <WorkerVariant className={styles.iconWorker} />
                  </div>
                  <p className={styles.descText}>
                    <ReactMarkdown>
                      {data.chronology.description3}
                    </ReactMarkdown>
                  </p>
                </div>
              </div>
              <div className={styles.item}>
                <h4 className={styles.year}>2023</h4>
                <div className={styles.desc}>
                  <div>
                    <HouseSecond />
                  </div>
                  <p className={styles.descText}>
                    <ReactMarkdown>
                      {data.chronology.description4}
                    </ReactMarkdown>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.mobilePhotos}>
            <PhotoItemAbout
              isActiveOffice={isActiveOffice}
              buttonLink={data.photos.buttonLink}
              buttonText={data.photos.buttonText}
              title="Наш офис"
              activeOffice={toggleActiveOffice}
            />
          </div>
          <div className={styles.mobilePhotos}>
            <PhotoItemAbout
              isActiveProduction={isActiveProduction}
              buttonLink={data.photos.buttonLink}
              buttonText={data.photos.buttonText}
              title="Производство"
              activeProduction={toggleActiveProduction}
            />
          </div>
          <div className={styles.mobilePhotos}>
            <PhotoItemAbout
              isActiveStock={isActiveStock}
              buttonLink={data.photos.buttonLink}
              buttonText={data.photos.buttonText}
              title="Склад"
              activeStock={toggleActiveStock}
            />
          </div>

          <div className={styles.photos}>
            <div className={styles.tabsBlock}>
              <button
                className={classNames(
                  styles.tab,
                  isActiveOffice && styles.activeTab
                )}
                onClick={handleActiveOffice}
              >
                Наш офис
              </button>
              <button
                className={classNames(
                  styles.tab,
                  isActiveProduction && styles.activeTab
                )}
                onClick={handleActiveProduction}
              >
                Производство
              </button>
              <button
                onClick={handleActiveStock}
                className={classNames(
                  styles.tab,
                  isActiveStock && styles.activeTab
                )}
              >
                Склад
              </button>
            </div>
            <div className={styles.imagesBlock}>
              <div className={styles.images}>
                <AboutGallery
                  isActiveProduction={isActiveProduction}
                  isActiveOffice={isActiveOffice}
                  isActiveStock={isActiveStock}
                />
              </div>
              <NavLink to={data.photos.buttonLink}>
                <MenuButton
                  title={data.photos.buttonText}
                  className={styles.btn}
                />
              </NavLink>
            </div>
          </div>
          <Excursion houseImg={true} />
          <div className={styles.howWeWork}>
            <h3 className={classNames("titleBlock", styles.titleHowWeWork)}>
              Как мы работаем
            </h3>
            <div className={styles.mobileCards}>
              <div className={styles.card}>
                <h4 className={styles.number}>1</h4>
                <div className={styles.cardDescMobile}>
                  <h4 className={styles.textNumber}>
                    {data.howWeWork.card[0].title}
                  </h4>
                  <p className={styles.descNumber}>
                    {data.howWeWork.card[0].description}
                  </p>
                </div>
              </div>
              <div className={styles.card}>
                <h4 className={styles.number}>2</h4>
                <div className={styles.cardDescMobile}>
                  <h4 className={styles.textNumber}>
                    {data.howWeWork.card[1].title}
                  </h4>
                  <p className={styles.descNumber}>
                    {data.howWeWork.card[1].description}
                  </p>
                </div>
              </div>
              <div className={styles.card}>
                <h4 className={styles.number}>3</h4>
                <div className={styles.cardDescMobile}>
                  <h4 className={styles.textNumber}>
                    {data.howWeWork.card[2].title}
                  </h4>
                  <p className={styles.descNumber}>
                    {data.howWeWork.card[2].description}
                  </p>
                </div>
              </div>
              <div className={styles.card}>
                <h4 className={styles.number}>4</h4>
                <div className={styles.cardDescMobile}>
                  <h4 className={styles.textNumber}>
                    {data.howWeWork.card[3].title}
                  </h4>
                  <p className={styles.descNumber}>
                    {data.howWeWork.card[3].description}
                  </p>
                </div>
              </div>
              <div className={styles.card}>
                <h4 className={styles.number}>5</h4>
                <div className={styles.cardDescMobile}>
                  <h4 className={styles.textNumber}>
                    {data.howWeWork.card[4].title}
                  </h4>
                  <p className={styles.descNumber}>
                    {data.howWeWork.card[4].description}
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.cards}>
              <div className={styles.column}>
                <div className={styles.card}>
                  <h4 className={styles.number}>1</h4>
                  <h4 className={styles.textNumber}>
                    {data.howWeWork.card[0].title}
                  </h4>
                  <p className={styles.descNumber}>
                    {data.howWeWork.card[0].description}
                  </p>
                </div>
                <div className={styles.card}>
                  <h4 className={styles.number}>4</h4>
                  <h4 className={styles.textNumber}>
                    {data.howWeWork.card[3].title}
                  </h4>
                  <p className={styles.descNumber}>
                    {data.howWeWork.card[3].description}
                  </p>
                </div>
              </div>
              <div className={classNames(styles.column, styles.middleColumn)}>
                <div className={styles.card}>
                  <h4 className={styles.number}>2</h4>
                  <h4 className={styles.textNumber}>
                    {data.howWeWork.card[1].title}
                  </h4>
                  <p className={styles.descNumber}>
                    {data.howWeWork.card[1].description}
                  </p>
                </div>
                <div>
                  <img src={house} alt="" />
                </div>
              </div>
              <div className={styles.column}>
                <div className={styles.card}>
                  <h4 className={styles.number}>3</h4>
                  <h4 className={styles.textNumber}>
                    {data.howWeWork.card[2].title}
                  </h4>
                  <p className={styles.descNumber}>
                    {data.howWeWork.card[2].description}
                  </p>
                </div>
                <div className={styles.card}>
                  <h4 className={styles.number}>5</h4>
                  <h4 className={styles.textNumber}>
                    {data.howWeWork.card[4].title}
                  </h4>
                  <p className={styles.descNumber}>
                    {data.howWeWork.card[4].description}
                  </p>
                </div>
              </div>
            </div>
            <NavLink className={styles.btnLink} to={data.howWeWork.buttonLink}>
              <MenuButton
                className={styles.btnDark}
                title={data.howWeWork.buttonText}
              />
            </NavLink>
            <img className={styles.cloud} src={cloud} alt="" />
            <img className={styles.shepki} src={shepki} alt="" />
          </div>
          <div className={styles.clients}>
            <h3 className={classNames("titleBlock", styles.title)}>
              Более 117 построенных домов и довольных клиентов
            </h3>
            <p className={styles.subtitle}>
              Работаем на репутацию, поэтому с ответственностью подходим к
              каждому проекту
            </p>
            <div className={styles.clientsContent}>
              <img className={styles.cloudClient} src={cloudVariant} alt="" />
              <div className={styles.imgWrapper}>
                <img
                  className={styles.houseImg}
                  src={`${process.env.REACT_APP_UPLOAD_URL}${data.clients.image.data.attributes.url}`}
                  alt=""
                />
                <NavLink
                  className={styles.btnClientsDesctop}
                  to={data.clients.buttonLink}
                >
                  <MenuButton
                    title={data.clients.buttonText}
                    className={classNames(styles.btn, styles.btnClients)}
                  />
                </NavLink>
              </div>
              <div className={styles.clientsCards}>
                <div className={styles.clientCard}>
                  <p className={styles.cardTitle}>Собственное производство</p>
                  <p className={styles.cardDesc}>
                    На рынке строительных услуг больше <span>30</span> лет{" "}
                  </p>
                </div>
                <div className={styles.clientCard}>
                  <p className={styles.cardTitle}>Маркетинговые услуги</p>
                  <p className={styles.cardDesc}>
                    Опыт работы в строительном маркетинге более <span>10</span>{" "}
                    лет
                  </p>
                </div>
                <div className={styles.clientCard}>
                  <p className={styles.cardTitle}>
                    Возможность закупки материалов по себестоимости
                  </p>
                  <p className={styles.cardDesc}>
                    Вы сможете сэкономить до <span>30%</span> на материалах.
                  </p>
                </div>
                <div className={styles.clientCard}>
                  <p className={styles.cardTitle}>
                    Возможность посетить строящиеся объекты
                  </p>
                  <p className={styles.cardDesc}>
                    Более <span>117</span> построенных домов.
                  </p>
                </div>
                <NavLink
                  className={styles.btnClientsMobile}
                  to={data.clients.buttonLink}
                >
                  <MenuButton
                    title={data.clients.buttonText}
                    className={styles.btn}
                  />
                </NavLink>
              </div>
            </div>
          </div>
          <div className={styles.principles}>
            <h3 className={classNames("titleBlock", styles.title)}>
              За годы существования компании мы сформировали основные принципы
              нашей работы, от которых никогда не отступаем:
            </h3>
            <div className={styles.principlesWrapper}>
              <div className={styles.textWrapper}>
                {data.principles.principle.map((item) => (
                  <div key={item.id} className={styles.itemPrinciples}>
                    <CheckVariant />
                    <p className={styles.itemText}>
                      <ReactMarkdown>{item.description}</ReactMarkdown>
                    </p>
                  </div>
                ))}
              </div>
              <img
                className={styles.principlesImg}
                src={`${process.env.REACT_APP_UPLOAD_URL}${data.principles.image.data.attributes.url}`}
                alt=""
              />
            </div>
          </div>
          <Garanties classNameWrapper={styles.garantiesWrapper} title={true} />
          <div className={styles.gratitude}>
            <img className={styles.bg} src={bgReviews} alt="" />
            <img className={styles.reviewBg} src={cloudVariant} alt="" />
            <img className={styles.reviewCloud} src={cloud2} alt="" />
            <h3 className={classNames("titleBlock", styles.title)}>
              Благодарность клиентов — главная гарантия нашей надежности и
              профессионализма
            </h3>
            <div className={styles.videoReview}>
              <VideoLink
                externalLink={data.reviews.externalLink}
                src={
                  data.reviews.mainVideo.data &&
                  `${process.env.REACT_APP_UPLOAD_URL}${data?.reviews?.mainVideo?.data?.attributes?.url}`
                }
                className={styles.videoPoster}
                classNameWrapper={styles.videoWrapper}
                poster={`${process.env.REACT_APP_UPLOAD_URL}${data.reviews.mainReview.poster.data.attributes.url}`}
                youtubeLink={data.reviews.youtubeLink}
              />
              {/*<ReviewText*/}
              {/*  buttonLink={data.reviews.mainReview.buttonLink}*/}
              {/*  buttonText={data.reviews.mainReview.buttonText}*/}
              {/*  name={data.reviews.mainReview.name}*/}
              {/*  date={data.reviews.mainReview.date}*/}
              {/*  reviewBody={data.reviews.mainReview.reviewBody}*/}
              {/*/>*/}
            </div>
            <div className={styles.reviewSlider}>
              <Swiper
                style={{ position: "unset" }}
                spaceBetween={40}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                }}
              >
                {data.reviews.commonReviews.reviewItem.map((item) => (
                  <SwiperSlide key={item.id}>
                    <div className={styles.sliderCard}>
                      <img
                        className={styles.personImg}
                        src={`${process.env.REACT_APP_UPLOAD_URL}${item.avatar.data.attributes.url}`}
                        alt=""
                      />
                      <CommonReviewText
                        date={item.date}
                        name={item.name}
                        reviewBody={item.reviewBody}
                      />
                    </div>
                  </SwiperSlide>
                ))}
                <SliderBtn icon={null} direction="next" />
                <SliderBtn icon={null} direction="prev" />
              </Swiper>
            </div>
          </div>
          <div className={styles.keyPersons}>
            <h3 className={classNames("titleBlock", styles.title)}>
              Ключевые лица компании, ответственные за результат
            </h3>
            <div className={styles.personsContent}>
              <div className={styles.imgRoman}>
                <img
                  src={
                    filteredData &&
                    `${process.env.REACT_APP_UPLOAD_URL}${filteredData[0].photo.data.attributes.url}`
                  }
                  alt=""
                />
                <h4 className={styles.personName}>
                  {filteredData && filteredData[0].name}
                </h4>
              </div>
              <div className={styles.contentDesc}>
                <h4 className={styles.descTitle}>Основные компетенции</h4>
                <div className={styles.competentions}>
                  {filteredData &&
                    filteredData[0].competention?.map((item) => (
                      <div key={item.id} className={styles.competentionBlock}>
                        <div className={styles.competentionItem}>
                          <h4 className={styles.competentionNumber}>
                            {item.number}
                          </h4>
                          <h4 className={styles.itemTitle}>{item.title}</h4>
                        </div>
                        <div className={styles.competentionDesc}>
                          {item.description}
                        </div>
                      </div>
                    ))}
                </div>
                <div className={styles.swiperWrapper}>
                  <Swiper
                    spaceBetween={32}
                    breakpoints={{
                      320: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                      },
                      768: {
                        slidesPerView: 6,
                      },
                    }}
                  >
                    {data.keyPersons.persons.map((item) => (
                      <SwiperSlide onClick={() => setId(item.id)} key={item.id}>
                        <div className={styles.personCard}>
                          <img
                            className={styles.miniImg}
                            src={`${process.env.REACT_APP_UPLOAD_URL}${item.photo.data.attributes.formats.thumbnail.url}`}
                            alt=""
                          />

                          <h3
                            className={classNames(
                              styles.personJob,
                              id === item.id && styles.activeSlide
                            )}
                          >
                            {item?.department}
                          </h3>
                        </div>
                      </SwiperSlide>
                    ))}
                    <SliderBtn icon={null} direction="next" />
                    <SliderBtn icon={null} direction="prev" />
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
          <Excursion houseImg={true} cloudImg={true} />
        </Container>
      )}
    </section>
  );
};
