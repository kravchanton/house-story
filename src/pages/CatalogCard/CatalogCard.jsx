import React from "react";
import { NavLink } from "react-router-dom";
import classNames from "classnames";

import houseCard from "../../assets/houseCard.png";
import view1 from "../../assets/view1.png";
import view2 from "../../assets/view2.png";
import view3 from "../../assets/view3.png";
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

// import ReactPlayer from "react-player";

export const CatalogCard = () => {
  return (
    <section className={styles.catalogCard}>
      <Container className={styles.container}>
        <h1 className={styles.title}>Проект Дмитров</h1>
        <article className={styles.content}>
          <div className={styles.about}>
            <div className={styles.mediaBlock}>
              <div className={styles.images}>
                <img
                  className={styles.mainImage}
                  src={houseCard}
                  alt="houseCard"
                />
                <div className={styles.tripleImages}>
                  <img className={styles.imageView} src={view1} alt="" />
                  <img className={styles.imageView} src={view2} alt="" />
                  <NavLink className={styles.linkImageWrapper}>
                    <img className={styles.imageView} src={view3} alt="" />
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
                  <h4 className={styles.priceText}>168,8 м²</h4>
                  <h4 className={styles.priceText}>210000 руб</h4>
                </div>
                <p className={styles.text}>
                  Гарантируем качество и сроки выполненных работ{" "}
                </p>
                <MenuButton title="Поэтапная оплата" className={styles.btn} />
                <ul className={styles.descHouse}>
                  <li className={styles.propertyWrapper}>
                    <p className={styles.text}>Этажи</p>
                    <div></div>
                    <p className={styles.text}>1</p>
                  </li>
                  <li className={styles.propertyWrapper}>
                    <p className={styles.text}>Комнаты</p>
                    <div></div>
                    <p className={styles.text}>4</p>
                  </li>
                  <li className={styles.propertyWrapper}>
                    <p className={styles.text}>Санузлы</p>
                    <div></div>
                    <p className={styles.text}>2</p>
                  </li>
                  <li className={styles.propertyWrapper}>
                    <p className={styles.text}>Стиль</p>
                    <div></div>
                    <p className={styles.text}>европейский</p>
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
                  <li className={styles.listItem}>
                    Залили свайно-ростверковый фундамент
                  </li>
                  <li className={styles.listItem}>
                    Доставили весь материал (бревно из Кирова)
                  </li>
                  <li className={styles.listItem}>
                    Собрали сруб (коробка дома)
                  </li>
                  <li className={styles.listItem}>Смонтировали кровлю</li>
                  <li className={styles.listItem}>
                    Произвели шлифовку оцилиндрованного бревна на следующий год
                    (отшлифовали торцы)
                  </li>
                  <li className={styles.listItem}>
                    Обработали неомидом, покрасили
                  </li>
                  <li className={styles.listItem}>
                    Также на следующий год утеплили крышу и полы (положили
                    фанеру с обрешёткой)
                  </li>
                  <li className={styles.listItem}>Потолок зашили вагонкой</li>
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
            <FloorContent />
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
            <BuildingHouse />
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
      </Container>
    </section>
  );
};
