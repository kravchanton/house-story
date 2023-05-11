import React from "react";

import styles from "./Gratitude.module.scss";

import { ArrowVariant, Calculator, Master } from "../../icons";
import { Excursion, Container, Basic, OurProjects } from "../../components";

export const Gratitude = () => {
  return (
    <section>
      <Container>
        <div className={styles.gratitude}>
          <h1 className={styles.title}>
            Благодарим за участие в опросе! Ваши подарки здесь:
          </h1>
          <div className={styles.content}>
            <div className={styles.textBlock}>
              <p className={styles.text}>
                <Master className={styles.icon} /> Бесплатный выезд мастера на
                объект
              </p>
              <p className={styles.text}>
                <Calculator className={styles.icon} /> Расчет стоимости ремонта
                в 2-3 ценовых вариантах
              </p>
              <p className={styles.smallText}>
                Бонусы будут закреплены за вашим номером телефона в течение 7
                дней.{" "}
              </p>
              <ArrowVariant className={styles.arrow} />
            </div>
            <div className={styles.formWrapper}>
              <p className={styles.textForm}>
                Чтобы получить подарки, заполните пожалуйста форму
              </p>
              <Basic lockText={true} select={true} btnText="Отправить" />
            </div>
          </div>
        </div>
        <OurProjects />
        <Excursion houseImg={true} cloudImg={true} />
      </Container>
    </section>
  );
};
