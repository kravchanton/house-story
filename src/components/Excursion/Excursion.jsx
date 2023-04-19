import React from "react";
import classNames from "classnames";

import styles from "./Excursion.module.scss";
import dom from "../../assets/dom.png";
import cloud from "../../assets/cloud.png";

import { CheckVariant } from "../../icons";
import { Basic } from "../Form";

export const Excursion = ({ houseImg, cloudImg }) => {
  return (
    <article className={styles.wrapper}>
      <h3 className={classNames("titleBlock", styles.titleBlock)}>
        <span>Хотите увидеть в живую</span> строящиеся объекты
      </h3>
      <div className={styles.descWrapper}>
        <div className={styles.descWrapperText}>
          <h4 className={styles.descTitle}>
            <span>Мы стремимся к полной прозрачности в работе,</span> поэтому мы
            показываем каждый этап работ.
          </h4>
          <ul className={styles.descList}>
            <h4 className={classNames(styles.descTitle, styles.listTitle)}>
              <span>Экскурсия позволит Вам</span>
            </h4>
            <div className={styles.listItem}>
              <CheckVariant />
              <li>Увидеть процесс строительства своими глазами</li>
            </div>
            <div className={styles.listItem}>
              <CheckVariant />
              <li>Увидеть процесс строительства своими глазами</li>
            </div>
            <div className={styles.listItem}>
              <CheckVariant />
              <li>Увидеть процесс строительства своими глазами</li>
            </div>
          </ul>
        </div>
        <Basic
          className={styles.form}
          lockText={true}
          inputVariant={false}
          date={true}
          btnText="Записаться на экскурсию"
        />
        {houseImg && <img className={styles.imageHouse} src={dom} alt="" />}
        {cloudImg && <img className={styles.imageCloud} src={cloud} alt="" />}
      </div>
    </article>
  );
};
