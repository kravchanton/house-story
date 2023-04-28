import React, { useEffect, useState } from "react";
import classNames from "classnames";
import { Swiper, SwiperSlide } from "swiper/react";

import house from "../../assets/img-home-e1581520380712 1.png";
import cloud from "../../assets/1-14781_white-clouds-png-clipart-baby-e-kill-the 17 (1).png";
import cloudVariant from "../../assets/1-14781_white-clouds-png-clipart-baby-e-kill-the 18.png";
import shepki from "../../assets/shepki 4.png";
import review from "../../assets/photo_2022-01-13_15-52-04 2.png";
import personImg from "../../assets/personImg.png";
import bgReviews from "../../assets/00a8246c092185606e122eab3660496a 1.png";
import cloud2 from "../../assets/1-14781_white-clouds-png-clipart-baby-e-kill-the 15.png";

import styles from "./About.module.scss";

import {
  AboutGallery,
  Container,
  Excursion,
  Garanties,
  MainForm,
  MenuButton,
  SliderBtn,
  VideoLink,
} from "../../components";
import {
  CheckVariant,
  House,
  HouseSecond,
  SmallArrow,
  SpinArrow,
  Worker,
  WorkerVariant,
} from "../../icons";
import { useDispatch, useSelector } from "react-redux";
import { fetchAboutData } from "../../bll/aboutReducer";
import ReactMarkdown from "react-markdown";
import { NavLink } from "react-router-dom";

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
  console.log(filteredData);

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

  return (
    <section className={styles.about}>
      <Container>
        <MainForm />
        <div className={styles.history}>
          <h3 className={classNames("titleBlock", styles.title)}>
            {data?.title}
          </h3>
          {data?.contentBlock?.map((item) => {
            return (
              <>
                {item.reverseContent ? (
                  <div key={item.id} className={styles.content}>
                    <img
                      className={styles.img}
                      src={`${process.env.REACT_APP_UPLOAD_URL}${item?.image?.data?.attributes?.url}`}
                      alt=""
                    />
                    <div className={styles.text}>
                      <h4 className={styles.titleContent}>{item.title}</h4>
                      <p className={styles.text}>
                        <ReactMarkdown>{item.text}</ReactMarkdown>
                      </p>
                    </div>
                  </div>
                ) : (
                  <div key={item.id} className={styles.content}>
                    <div className={styles.text}>
                      <h4 className={styles.titleContent}>{item.title}</h4>
                      <p className={styles.text}>
                        <ReactMarkdown>{item.text}</ReactMarkdown>
                      </p>
                    </div>
                    <img
                      className={styles.img}
                      src={`${process.env.REACT_APP_UPLOAD_URL}${item?.image?.data?.attributes?.url}`}
                      alt=""
                    />
                  </div>
                )}
              </>
            );
          })}
        </div>
        <div className={styles.chronology}>
          <SpinArrow className={styles.iconArrow1} />
          <SpinArrow className={styles.iconArrow2} />
          <SpinArrow className={styles.iconArrow3} />
          <h3 className={styles.titleContent}>Хронология развития компании</h3>
          <div className={styles.datesContent}>
            <div className={styles.item}>
              <h4 className={styles.year}>2016</h4>
              <div className={styles.desc}>
                <div>
                  <House />
                </div>

                <p className={styles.descText}>
                  {data?.chronology?.description1}
                </p>
              </div>
            </div>
            <div className={styles.item}>
              <h4 className={styles.year}>2017</h4>
              <div className={styles.desc}>
                <div>
                  <Worker />
                </div>

                <p className={styles.descText}>
                  {data?.chronology?.description2}
                </p>
              </div>
            </div>
            <div className={styles.item}>
              <h4 className={styles.year}>2018</h4>
              <div className={styles.desc}>
                <div>
                  <WorkerVariant />
                </div>

                <p className={styles.descText}>
                  {data?.chronology?.description3}
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
                  {data?.chronology?.description4}
                </p>
              </div>
            </div>
          </div>
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
            <NavLink to={data?.photos?.buttonLink}>
              <MenuButton
                title={data?.photos?.buttonText}
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
          <div className={styles.cards}>
            <div className={styles.column}>
              <div className={styles.card}>
                <h4 className={styles.number}>1</h4>
                <h4 className={styles.textNumber}>
                  {data?.howWeWork?.card[0]?.title}
                </h4>
                <p className={styles.descNumber}>
                  {data?.howWeWork?.card[0]?.description}
                </p>
              </div>
              <div className={styles.card}>
                <h4 className={styles.number}>4</h4>
                <h4 className={styles.textNumber}>
                  {data?.howWeWork?.card[3]?.title}
                </h4>
                <p className={styles.descNumber}>
                  {data?.howWeWork?.card[3]?.description}
                </p>
              </div>
            </div>
            <div className={classNames(styles.column, styles.middleColumn)}>
              <div className={styles.card}>
                <h4 className={styles.number}>2</h4>
                <h4 className={styles.textNumber}>
                  {data?.howWeWork?.card[1]?.title}
                </h4>
                <p className={styles.descNumber}>
                  {data?.howWeWork?.card[1]?.description}
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
                  {data?.howWeWork?.card[2]?.title}
                </h4>
                <p className={styles.descNumber}>
                  {data?.howWeWork?.card[2]?.description}
                </p>
              </div>
              <div className={styles.card}>
                <h4 className={styles.number}>5</h4>
                <h4 className={styles.textNumber}>
                  {data?.howWeWork?.card[4]?.title}
                </h4>
                <p className={styles.descNumber}>
                  {data?.howWeWork?.card[4]?.description}
                </p>
              </div>
            </div>
          </div>
          <NavLink to={data?.howWeWork?.buttonLink}>
            <MenuButton
              className={styles.btnDark}
              title={data?.howWeWork?.buttonText}
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
            Работаем на репутацию, поэтому с ответственностью подходим к каждому
            проекту
          </p>
          <div className={styles.clientsContent}>
            <img className={styles.cloudClient} src={cloudVariant} alt="" />
            <div className={styles.imgWrapper}>
              <img
                className={styles.houseImg}
                src={`${process.env.REACT_APP_UPLOAD_URL}${data?.clients?.image?.data?.attributes?.url}`}
                alt=""
              />
              <NavLink to={data?.clients?.buttonLink}>
                <MenuButton
                  title={data?.clients?.buttonText}
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
              {data?.principles?.principle?.map((item) => (
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
              src={`${process.env.REACT_APP_UPLOAD_URL}${data?.principles?.image?.data?.attributes?.url}`}
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
            {data?.reviews?.youtubeLink && (
              <VideoLink
                className={styles.videoPoster}
                classNameWrapper={styles.videoWrapper}
                poster={review}
                youtubeLink={data?.reviews?.youtubeLink}
                // src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
              />
            )}
            {data?.reviews?.externalLink && (
              <VideoLink
                className={styles.videoPoster}
                classNameWrapper={styles.videoWrapper}
                poster={review}
                src={data?.reviews?.externalLink}
                // src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
              />
            )}
            {data?.reviews?.mainVideo?.data?.attributes?.url && (
              <VideoLink
                className={styles.videoPoster}
                classNameWrapper={styles.videoWrapper}
                poster={review}
                src={`${process.env.REACT_APP_UPLOAD_URL}${data?.reviews?.mainVideo?.data?.attributes?.url}`}
                // src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
              />
            )}

            <div className={styles.reviewText}>
              <p className={styles.date}>{data?.reviews?.mainReview?.date}</p>
              <h4 className={styles.name}>{data?.reviews?.mainReview?.name}</h4>
              <p className={styles.reviewDesc}>
                {data?.reviews?.mainReview?.reviewBody}
              </p>
              <button className={styles.readMore}>
                <p className={styles.btnText}>Читать дальше</p>
                <SmallArrow className={styles.iconArrow} />
              </button>
              <NavLink to={data?.reviews?.mainReview?.buttonLink}>
                <MenuButton
                  className={styles.btnReview}
                  title={data?.reviews?.mainReview?.buttonText}
                />
              </NavLink>
            </div>
          </div>
          <div className={styles.reviewSlider}>
            <Swiper
              style={{ position: "unset" }}
              slidesPerView={2}
              spaceBetween={40}
            >
              {data?.reviews?.commonReviews?.reviewItem?.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className={styles.sliderCard}>
                    <img className={styles.personImg} src={personImg} alt="" />
                    <div className={styles.reviewText}>
                      <p className={styles.date}>{item.date}</p>
                      <h4 className={styles.name}>{item.name}</h4>
                      <p className={styles.reviewDesc}>{item.reviewBody}</p>
                      <button className={styles.readMore}>
                        <p className={styles.btnText}>Читать дальше</p>
                        <SmallArrow className={styles.iconArrow} />
                      </button>
                    </div>
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
                  `${process.env.REACT_APP_UPLOAD_URL}${filteredData[0]?.photo?.data?.attributes?.url}`
                }
                alt=""
              />
              <h4 className={styles.personName}>{filteredData?.name}</h4>
            </div>
            <div className={styles.contentDesc}>
              <h4 className={styles.descTitle}>Основные компетенции</h4>
              <div className={styles.competentions}>
                {filteredData &&
                  filteredData[0]?.competention?.map((item) => (
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
                <Swiper slidesPerView={4} spaceBetween={32}>
                  {data?.keyPersons?.persons?.map((item) => (
                    <SwiperSlide onClick={() => setId(item.id)} key={item.id}>
                      <div className={styles.personCard}>
                        <div className={styles.imageCardWrapper}>
                          <img
                            className={styles.miniImg}
                            src={`${process.env.REACT_APP_UPLOAD_URL}${item?.photo?.data?.attributes?.formats?.thumbnail?.url}`}
                            alt=""
                          />
                        </div>

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
    </section>
  );
};
