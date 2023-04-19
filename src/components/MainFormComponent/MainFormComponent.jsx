import React, { useState } from "react";

import styles from "./MainFormComponent.module.scss";
import { NavLink } from "react-router-dom";
import {
  MailSocials,
  PhoneSocials,
  Telegram,
  Viber,
  WhatsUp,
} from "../../icons";
import instagram from "../../assets/inst.png";
import facebook from "../../assets/facebook-logo.png";
import { Basic } from "../Form";

export const MainFormComponent = () => {
  const [isActiveRight, setIsActiveRight] = useState(false);
  const [isActiveLeft, setIsActiveLeft] = useState(true);

  const handleActiveRight = () => {
    setIsActiveRight(true);
    setIsActiveLeft(false);
  };

  const handleActiveLeft = () => {
    setIsActiveLeft(true);
    setIsActiveRight(false);
  };

  return (
    <div>
      <div className={styles.buttons}>
        <button
          onClick={handleActiveLeft}
          className={isActiveLeft ? styles.btnActive : styles.buttonLeft}
        >
          Записаться на встречу
        </button>
        <button
          onClick={handleActiveRight}
          className={isActiveRight ? styles.btnActive : styles.buttonRight}
        >
          Написать в мессенджер
        </button>
      </div>
      <div className={styles.form}>
        <h4 className={styles.titleForm}>Хотите записаться на консультацию?</h4>
        <div className={styles.subTitleForm}>
          Оставьте заявку и получите расчёт стоимости и помощь в подборе
          материалов напрямую от производителя в ПОДАРОК{" "}
          <span> ( экономия до 30%)</span>
        </div>
        {isActiveLeft ? (
          <Basic
            select={true}
            classNameForm={styles.contactsForm}
            classNameInput={styles.contactsFormInput}
            classNameSelect={styles.contactsFormSelect}
            classNameForBtn={styles.contactsFormBtn}
            btnText="Отправить"
            lockText={true}
          />
        ) : (
          <div className={styles.socialsWrapper}>
            <NavLink className={styles.link} to="#">
              <PhoneSocials />
              <p>Звонок</p>
            </NavLink>
            <NavLink className={styles.link} to="#">
              <MailSocials />
              <p>Почта</p>
            </NavLink>
            <NavLink className={styles.link} to="#">
              <WhatsUp />
              <p>WhatsApp</p>
            </NavLink>
            <NavLink className={styles.link} to="#">
              <Viber />
              <p>Viber</p>
            </NavLink>
            <NavLink className={styles.link} to="#">
              <Telegram />
              <p>Telegram</p>
            </NavLink>
            <NavLink className={styles.link} to="#">
              <img className={styles.icon} src={instagram} alt="instagram" />
              <p>Instagram</p>
            </NavLink>
            <NavLink className={styles.link} to="#">
              <img className={styles.icon} src={facebook} alt="facebook" />
              <p>Facebook</p>
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};
