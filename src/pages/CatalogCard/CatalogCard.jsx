import React, {useEffect} from "react";
import {NavLink, useParams} from "react-router-dom";
import classNames from "classnames";
import dom from "../../assets/slider_dom 1 (2).jpg";
import cloud from "../../assets/cloud.png";
import cloud1 from "../../assets/cloud1.png";
import kaska from "../../assets/kaska.png";
import styles from "./CatalogCard.module.scss";
import {
  Basic,
  Container,

  MenuButton,

} from "../../components";
import {useDispatch, useSelector} from "react-redux";
import {fetchCatalog} from "../../bll/catalogReducer";
import ReactMarkdown from "react-markdown";
import {SectionCard} from "../../containers/SectionCard";
import {FavouriteHouses} from "../../components/FavouriteHouses";
import {VideoExcursion} from "../../components/VideoExcursion";
import {FloorContent} from "../../components/FloorContent";
import {BuildingHouse} from "../../components/BuildingHouse";

// import ReactPlayer from "react-player";

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

// import ReactPlayer from "react-player";

export const CatalogCard = () => {
  useEffect(() => {
    dispatch(fetchCatalog());
  }, []);

  let idCard = useParams();
  const dispatch = useDispatch();
  let cardData
  let data = useSelector((state) => state.catalog.catalog);
  data?.map(t => (t.attributes.item.filter(item => item.id == idCard.id ? cardData = item : '')))
  console.log(cardData)
  return (
    <section className={styles.catalogCard}>
      {data &&<Container className={styles.container}>
        <h1 className={styles.title}>{cardData.title}</h1>
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
                  <img className={styles.imageView} src={`${process.env.REACT_APP_UPLOAD_URL}${cardData?.photos?.data[0]?.attributes?.url}`} alt="" />
                  <img className={styles.imageView} src={`${process.env.REACT_APP_UPLOAD_URL}${cardData?.photos?.data[1]?.attributes?.url}`} alt="" />
                  <NavLink className={styles.linkImageWrapper}>
                    <img className={styles.imageView} src={`${process.env.REACT_APP_UPLOAD_URL}${cardData?.photos?.data[2]?.attributes?.url}`} alt="" />
                    <p className={styles.linkText}>+ 36 фото</p>
                  </NavLink>
                </div>
              </div>
              <div className={styles.form}>
                <div className={styles.buttonBlock}>
                  <MenuButton
                    title="Хочу похожий дом"
                    className={styles.buttonAction}
                  />
                  <MenuButton
                    title="Пришлите мне смету"
                    className={styles.buttonAction}
                  />
                  <MenuButton
                    title="Посетить объект"
                    className={styles.buttonAction}
                  />
                </div>
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
                  <li className={styles.propertyWrapper}>
                    <p className={styles.text}>Этажи</p>
                    <div></div>
                    <p className={styles.text}>{cardData.floors}</p>
                  </li>
                  <li className={styles.propertyWrapper}>
                    <p className={styles.text}>Комнаты</p>
                    <div></div>
                    <p className={styles.text}>{cardData.rooms}</p>
                  </li>
                  <li className={styles.propertyWrapper}>
                    <p className={styles.text}>Санузлы</p>
                    <div></div>
                    <p className={styles.text}>{cardData.bathrooms}</p>
                  </li>
                  <li className={styles.propertyWrapper}>
                    <p className={styles.text}>Стиль</p>
                    <div></div>
                    <p className={styles.text}>{cardData.style}</p>
                  </li>
                </ul>
                <MenuButton
                  title="Смотреть на карте"
                  className={classNames(styles.btn, styles.btnWhite)}
                />
              </div>
              <div className={styles.descBlock}>
                <h4 className={styles.listTitle}>Описание работ</h4>
                <ul className={styles.list}>
                  {/* eslint-disable-next-line react/no-children-prop */}
                  <div className={styles.listItem}><ReactMarkdown children={cardData.description} /></div>

                </ul>
                <NavLink>
                  <button className={styles.additionalInfo}>
                    См. подробный кейс по ссылке
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
          <SectionCard title="План дома" buttonText={false}>
            {cardData.plans.map((t, index) => <FloorContent key={index} data={t}/>)}
            <div className={styles.section}></div>
          </SectionCard>
          <SectionCard
            title="Видео экскурсия"
            buttonText="Смотреть подробный кейс"
          >
            <VideoExcursion />
          </SectionCard>
          <SectionCard
            title="Как строился дом"
            buttonText="Смотреть больше фото"
          >
            <BuildingHouse data={cardData?.buildings?.photos?.data}/>)
          </SectionCard>
          <SectionCard
            title=" Вам также могут понравиться"
            buttonText="Перейти в каталог"
          >
            <FavouriteHouses />
          </SectionCard>
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
      </Container>}
    </section>
  );
};
