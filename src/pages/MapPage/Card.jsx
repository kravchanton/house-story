import React from "react";
import { NavLink } from "react-router-dom";
import classNames from "classnames";

import styles from "./MapPage.module.scss";

import { MenuButton } from "../../components/MenuButton";

export const Card = ({ data }) => {
  return (
    <div className={styles.card}>
      <h3>{data.title}</h3>
      <img
        src={`${process.env.REACT_APP_UPLOAD_URL}${data?.mainPhoto?.data?.attributes?.url}`}
        alt="image"
      />
      <div className={styles.textBlock}>
        <div className={styles.priceBlock}>
          <div className={styles.price}>
            <h4 className={styles.priceText}>{data.square} м²</h4>
            <h4 className={styles.priceText}>{data.price} руб</h4>
          </div>
          <p className={styles.text}>
            Гарантируем качество и сроки выполненных работ{" "}
          </p>
          <MenuButton title="Поэтапная оплата" className={styles.btn} />
          <ul className={styles.descHouse}>
            {data.item.map((t, index) => (
              <li key={index} className={styles.propertyWrapper}>
                <p className={styles.text}>{t.title}</p>
                <div></div>
                <p className={styles.text}>{t.value}</p>
              </li>
            ))}
          </ul>
          <NavLink to={`/catalog/1/${data.id}`}>
            {" "}
            <MenuButton
              title="Смотреть  проект"
              className={classNames(styles.btn, styles.btnGreen)}
            />
          </NavLink>
        </div>
      </div>
    </div>
  );
};
