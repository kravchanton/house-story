import React from "react";
import { Container, Excursion } from "../../components";

import tree from "../../assets/tree.png";
import cloud from "../../assets/cloud.png";
import rCloud from "../../assets/rCloud.png";

import styles from "./Appointment.module.scss";

import { ArrowVariant } from "../../icons";
import { CalendarComponent } from "../../components/Calendar/Calendar";

export const Appointment = () => {
  return (
    <section className={styles.wrapper}>
      <Container>
        <div className={styles.appointmentBlock}>
          <img className={styles.treeLeft} src={tree} alt="tree" />
          <img className={styles.cloud} src={cloud} alt="cloud" />
          <img className={styles.rCloud} src={rCloud} alt="rCloud" />
          <div className={styles.text}>
            <h1>Запись на онлайн/живую встречу</h1>
            <div className={styles.description}>
              <h3>Есть вопросы?</h3>
              <h3>Запишитесь на встречу в удобное для вас время.</h3>
              <h3>
                Встреча <span>БЕСПЛАТНАЯ,</span> вы получите ответы на
                интересующие вас вопросы.
              </h3>
              <h3>
                Продолжительность встречи <span>30 минут.</span>
              </h3>
            </div>
            <h4>Выберите дату встречи</h4>
            <ArrowVariant className={styles.arrow} />
          </div>

          <CalendarComponent />
        </div>
        <Excursion houseImgVariant={true} descWrapperVariant={true} />
      </Container>
    </section>
  );
};
