import React, { useState } from "react";

import tree from "../../assets/tree.png";
import cloud from "../../assets/cloud.png";
import rCloud from "../../assets/rcloud.png";

import styles from "./Appointment.module.scss";

import {
  Basic,
  Container,
  Excursion,
  MenuButton,
  TimeComponent,
  CalendarComponent,
} from "../../components";
import { ArrowVariant, Calendar, Timer, World } from "../../icons";

const weekDays = [
  "понедельник",
  "вторник",
  "среда",
  "четверг",
  "пятница",
  "суббота",
  "воскресенье",
];

const months = [
  "января",
  "февраля",
  "марта",
  "апреля",
  "мая",
  "июня",
  "июля",
  "августа",
  "сентября",
  "октября",
  "ноября",
  "декабря",
];

export const Appointment = () => {
  const [appointment, setAppointment] = useState({
    date: null,
    time: null,
    name: null,
    phone: null,
    messenger: null,
    callTime: null,
  });
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);

  const handleResetAppointment = () => {
    setAppointment({
      date: null,
      time: null,
      name: null,
      phone: null,
      messenger: null,
      callTime: null,
    });
  };

  return (
    <section className={styles.wrapper}>
      <Container>
        <div className={styles.appointmentBlock}>
          <img className={styles.treeLeft} src={tree} alt="tree" />
          <img className={styles.cloud} src={cloud} alt="cloud" />
          <img className={styles.rCloud} src={rCloud} alt="rCloud" />
          <div className={styles.text}>
            <h1>Запись на онлайн/живую встречу</h1>
            {!appointment.date || !appointment.time ? (
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
            ) : null}
            {appointment.date && appointment.time ? (
              <div className={styles.descriptionFull}>
                <div className={styles.descItem}>
                  <Timer />
                  <p>Продолжительность встречи 30 минут</p>
                </div>
                <div className={styles.descItem}>
                  <Calendar />
                  <p>
                    {`${appointment.time}, ${weekDays.filter(
                      (day, index) => appointment.date.getDay() === index + 1
                    )}, ${appointment.date
                      .toLocaleString()
                      .slice(0, 2)}  ${months.filter(
                      (month, index) => appointment.date.getMonth() === index
                    )} ${appointment.date.getFullYear()} года `}
                  </p>
                </div>
                <div className={styles.descItem}>
                  <World />
                  <p>Время по Минску, Беларусь</p>
                </div>
              </div>
            ) : null}

            {!appointment.date || !appointment.time ? (
              <h4>Выберите дату встречи</h4>
            ) : (
              <button onClick={handleResetAppointment}>
                <MenuButton
                  className={styles.btnReset}
                  title="Выбрать другую дату и время"
                />
              </button>
            )}
            <ArrowVariant className={styles.arrow} />
          </div>
          <div className={styles.calendarWrapper}>
            {!appointment.date && (
              <CalendarComponent
                appointment={appointment}
                setAppointment={setAppointment}
                date={date}
                setDate={setDate}
              />
            )}
            {appointment.date && !appointment.time ? (
              <TimeComponent
                months={months}
                appointment={appointment}
                setAppointment={setAppointment}
                time={time}
                setTime={setTime}
              />
            ) : null}
            {appointment.time && !appointment.name ? (
              <Basic
                weekDays={weekDays}
                months={months}
                appointment={appointment}
                callTime={true}
                classNameForTitle={styles.titleForm}
                lockText={true}
                titleForm="Заполните форму на встречу с МАСТЕРОМ-ПРОРАБОМ И ПОДАРОК!"
                select={true}
              />
            ) : null}
          </div>
        </div>
        <Excursion houseImgVariant={true} descWrapperVariant={true} />
      </Container>
    </section>
  );
};
