import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import ReactMarkdown from "react-markdown";
import { Pagination, usePagination } from "pagination-react-js";
import rehypeRaw from 'rehype-raw'

import { fetchCatalog } from "../../bll/reducers/catalogReducer";

import dom from "../../assets/slider_dom 1 (2).jpg";
import cloud from "../../assets/cloud.png";
import cloud1 from "../../assets/cloud1.png";
import kaska from "../../assets/kaska.png";

import styles from "./CatalogCard.module.scss";

import {
  Basic,
  BuildingHouse,
  Container,
  FavouriteHouses,
  MenuButton,
  VideoExcursion,
  FloorContent,
} from "../../components";

import { SectionCard } from "../../containers";

export const CatalogCard = () => {
  const { currentPage, entriesPerPage, entries } = usePagination(1, 1);
  const [folder, setFolder] = useState(0);
  const [floor, setFloor] = useState(0);
  useEffect(() => {
    dispatch(fetchCatalog());
  }, []);

  let idCard = useParams();
  const dispatch = useDispatch();
  let cardData;
  let data = useSelector((state) => state.catalog.catalog);

  data?.map((t) =>
    t.attributes.item.filter((item) =>
      item.id == idCard.id ? (cardData = item) : ""
    )
  );

  return (
    <section className={styles.catalogCard}>
      {data && (
        <Container className={styles.container}>
          <h1 className={styles.title}>{cardData.title}</h1>
          <div className={styles.priceMobile}>
            <h4 className={styles.priceText}>{cardData.square} м²</h4>
            <h4 className={styles.priceText}>{cardData.price} руб</h4>
          </div>
          <article className={styles.content}>
            <div className={styles.about}>
              <div className={styles.mediaBlock}>
                <div className={styles.images}>
                  <img
                    className={styles.mainImage}
                    src={`${process.env.REACT_APP_UPLOAD_URL}${cardData?.mainPhoto?.data?.attributes?.url}`}
                    alt="houseCard"
                  />
                  <div className={styles.tripleImages}>
                    <img
                      className={styles.imageView}
                      src={`${process.env.REACT_APP_UPLOAD_URL}${cardData?.photos?.data[0]?.attributes?.url}`}
                      alt=""
                    />
                    <img
                      className={styles.imageView}
                      src={`${process.env.REACT_APP_UPLOAD_URL}${cardData?.photos?.data[1]?.attributes?.url}`}
                      alt=""
                    />
                    <NavLink className={styles.linkImageWrapper}>
                      <img
                        className={styles.imageView}
                        src={`${process.env.REACT_APP_UPLOAD_URL}${cardData?.photos?.data[2]?.attributes?.url}`}
                        alt=""
                      />
                      <p className={styles.linkText}>+ 36 фото</p>
                    </NavLink>
                  </div>
                </div>
                <div className={styles.imagesMobile}>
                  {cardData?.photos?.data
                    ?.slice(entries.indexOfFirst, entries.indexOfLast)
                    .map((t, index) => (
                      <img
                        key={index}
                        src={`${process.env.REACT_APP_UPLOAD_URL}${t.attributes?.url}`}
                        alt=""
                      />
                    ))}
                  <Pagination
                    entriesPerPage={entriesPerPage.get}
                    totalEntries={cardData?.photos?.data.length}
                    currentPage={{ get: currentPage.get, set: currentPage.set }}
                    offset={1}
                    classNames={{
                      wrapper: "pagination m-auto",
                      item: "pagination-item",
                      itemActive: "pagination-item-active",
                      navPrev: "pagination-item nav-item",
                      navNext: "pagination-item nav-item",
                      navStart: "pagination-item nav-item",
                      navEnd: "pagination-item nav-item",
                      navPrevCustom: "pagination-item",
                      navNextCustom: "pagination-item",
                    }}
                    showFirstNumberAlways={false}
                    showLastNumberAlways={false}
                    navPrev="&#x2039;" // Here you can pass anything (Text, HTML Tag, React Component, ...)
                    navNext="&#x203a;" // Here you can pass anything (Text, HTML Tag, React Component, ...)
                    navPrevCustom={{
                      steps: 6,
                      content:
                        "\u00B7\u00B7\u00B7" /* Here you can pass anything (Text, HTML Tag, React Component, ...) */,
                    }}
                    navNextCustom={{
                      steps: 6,
                      content:
                        "\u00B7\u00B7\u00B7" /* Here you can pass anything (Text, HTML Tag, React Component, ...) */,
                    }}
                  />
                </div>
                <div className={styles.textBlockMobile}>
                  <div className={styles.priceBlock}>
                    <ul className={styles.descHouse}>
                      {cardData.item.map((t, index) => (
                        <li key={index} className={styles.propertyWrapper}>
                          <p className={styles.text}>{t.title}</p>
                          <div></div>
                          <p className={styles.text}>{t.value}</p>
                        </li>
                      ))}
                    </ul>
                    <NavLink to={`/map/${cardData.catalog}/${cardData.id}`}>
                      {" "}
                      <MenuButton
                        title="Смотреть на карте"
                        className={classNames(styles.btn, styles.btnWhite)}
                      />
                    </NavLink>
                  </div>
                  <div className={styles.descBlock}>
                    <h4 className={styles.listTitle}>Описание работ</h4>
                    <ul className={styles.list}>
                      {/* eslint-disable-next-line react/no-children-prop */}
                      <div className={styles.listItem}>
                        <ReactMarkdown rehypePlugins={[rehypeRaw]}>{cardData.description}</ReactMarkdown>
                      </div>
                    </ul>
                    <NavLink>
                      <MenuButton
                        title="См. подробный кейс по ссылке"
                        className={styles.btns}
                      />
                    </NavLink>
                  </div>
                </div>
                <div className={styles.form}>
                  <div className={styles.buttonBlock}>
                    <div onClick={() => setFolder(1)} style={{ width: "100%" }}>
                      <MenuButton
                        title="Хочу похожий дом"
                        className={
                          folder === 1
                            ? `${styles.buttonAction} ${styles.active}`
                            : styles.buttonAction
                        }
                      />
                      <div
                        className={
                          folder === 1 ? styles.visible : styles.hidden
                        }
                      >
                        <Basic
                          select={true}
                          btnText="Отправить"
                          classNameSelect={styles.selectForm}
                          classNameInput={styles.inputForm}
                          classNameForBtn={styles.btnForm}
                          classNameForm={styles.contactForm}
                          lockText={true}
                        />
                      </div>
                    </div>
                    <div onClick={() => setFolder(2)} style={{ width: "100%" }}>
                      <MenuButton
                        title="Пришлите мне смету"
                        className={
                          folder === 2
                            ? `${styles.buttonAction} ${styles.active}`
                            : styles.buttonAction
                        }
                      />
                      <div
                        className={
                          folder === 2 ? styles.visible : styles.hidden
                        }
                      >
                        <Basic
                          select={true}
                          btnText="Отправить"
                          classNameSelect={styles.selectForm}
                          classNameInput={styles.inputForm}
                          classNameForBtn={styles.btnForm}
                          classNameForm={styles.contactForm}
                          lockText={true}
                        />
                      </div>
                    </div>
                    <div style={{ width: "100%" }}>
                      <NavLink to={"/appointment/"}>
                        <MenuButton
                          title="Посетить объект"
                          className={styles.buttonAction}
                        />{" "}
                      </NavLink>{" "}
                    </div>
                  </div>
                  <div className={styles.basic}>
                    {" "}
                    <Basic
                      select={true}
                      btnText="Отправить"
                      classNameSelect={styles.selectForm}
                      classNameInput={styles.inputForm}
                      classNameForBtn={styles.btnForm}
                      classNameForm={styles.contactForm}
                      lockText={true}
                    />
                  </div>
                </div>
              </div>
              <div className={styles.textBlock}>
                <div className={styles.priceBlock}>
                  <div className={styles.price}>
                    <h4 className={styles.priceText}>{cardData.square} м²</h4>
                    <h4 className={styles.priceText}>{cardData.price} руб</h4>
                  </div>
                  <p className={styles.text}>
                    Гарантируем качество и сроки выполненных работ{" "}
                  </p>
                  <MenuButton title="Поэтапная оплата" className={styles.btn} />
                  <ul className={styles.descHouse}>
                    {cardData.item.map((t, index) => (
                      <li key={index} className={styles.propertyWrapper}>
                        <p className={styles.text}>{t.title}</p>
                        <div></div>
                        <p className={styles.text}>{t.value}</p>
                      </li>
                    ))}
                  </ul>
                  <NavLink to={`/map/catalog/${cardData.id}`}>
                    {" "}
                    <MenuButton
                      title="Смотреть на карте"
                      className={classNames(styles.btn, styles.btnWhite)}
                    />
                  </NavLink>
                </div>
                <div className={styles.descBlock}>
                  <h4 className={styles.listTitle}>Описание работ</h4>
                  <ul className={styles.list}>
                    <div className={styles.listItem}>
                      <ReactMarkdown >{cardData.description}</ReactMarkdown>
                    </div>
                  </ul>
                  <NavLink>
                    <button className={styles.additionalInfo}>
                      См. подробный кейс по ссылке
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
            {cardData.section.title && (
              <SectionCard title={cardData.section.title} buttonText={false}>
                {cardData.section.sectionContent.map((t, index) => (
                  <div key={index} className={styles.sectionFloor}>
                    <FloorContent data={t} />
                  </div>
                ))}
                {cardData.section.sectionContent.map((t, index) => (
                  <div
                    key={index}
                    onClick={() => setFloor(index)}
                    className={styles.sectionMobile}
                  >
                    <MenuButton
                      title={t.title}
                      className={
                        floor === index
                          ? `${styles.buttonAction} ${styles.active}`
                          : styles.buttonAction
                      }
                    />
                    <div
                      className={
                        floor === index ? styles.visible : styles.hidden
                      }
                    >
                      <div className={styles.description}>
                        <h4 className={styles.descTitle}>{t.title}</h4>
                        {/* eslint-disable-next-line react/no-children-prop */}
                        <p className={styles.text}>
                          <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                            {t.description}
                          </ReactMarkdown>
                        </p>
                      </div>
                      <div className={styles.imagesBlock}>
                        <img
                          className={styles.floorImage}
                          src={`${process.env.REACT_APP_UPLOAD_URL}${t.mainPhoto.data?.attributes?.url}`}
                          alt="firstFloor"
                        />

                        <div className={styles.imagesWrapper}>
                          <img
                            className={styles.smallImage}
                            src={`${process.env.REACT_APP_UPLOAD_URL}${t?.media?.data[0]?.attributes?.url}`}
                            alt="firstimg"
                          />
                          <img
                            className={styles.smallImage}
                            src={`${process.env.REACT_APP_UPLOAD_URL}${t?.media?.data[1]?.attributes?.url}`}
                            alt="secondimg"
                          />
                        </div>
                        <NavLink to={t.buttonLink}>
                          <MenuButton
                            title={t.buttonTitle}
                            className={styles.btnFloor}
                          />
                        </NavLink>
                      </div>
                    </div>
                  </div>
                ))}
              </SectionCard>
            )}
            {cardData.block[0].title && (
              <SectionCard
                title={cardData.block[0].title}
                buttonText={cardData.block[0].buttonTitle}
                buttonLink={cardData.block[0].buttonLink}
              >
                <VideoExcursion data={cardData.block[0].video} />
              </SectionCard>
            )}
            {cardData.block[1].title && (
              <SectionCard
                title={cardData.block[1].title}
                buttonText={cardData.block[1].buttonTitle}
                buttonLink={cardData.block[1].buttonLink}
              >
                <BuildingHouse data={cardData.block[1].photos?.photos?.data} />
              </SectionCard>
            )}
            {cardData.favourite[0].title && (
              <SectionCard
                title={cardData.favourite[0].title}
                buttonText={cardData.favourite[0].buttonTitle}
                buttonLink={cardData.favourite[0].buttonLink}
              >
                <FavouriteHouses data={cardData.favourite[0].itemCard} />
              </SectionCard>
            )}
            <div className={styles.contacts}>
              <h3 className={classNames("titleBlock", styles.titleForm)}>
                У вас уже есть проект?
              </h3>
              <Basic
                textarea={true}
                file={true}
                classNameForFile={styles.file}
                classNameForBtn={styles.btnFormClass}
                classNameSelect={styles.select}
                classNameInput={styles.input}
                classNameForTitle={styles.titleFormInner}
                classNameForTextarea={styles.textArea}
                titleForm="Пришлите его нам, мы сделаем расчет и свяжемся с вами для консультации"
                lockText={true}
                btnText="Отправить"
              />
              <img className={styles.house} src={dom} alt="dom" />
              <img className={styles.cloud} src={cloud} alt="cloud" />
              <img className={styles.cloud1} src={cloud1} alt="" />
              <img className={styles.kaska} src={kaska} alt="" />
            </div>
            <div></div>
          </article>
        </Container>
      )}
    </section>
  );
};
