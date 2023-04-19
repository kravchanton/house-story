import React from "react";

import styles from "./Popup.module.scss";

import popupImg from "../../assets/popup.png";
import { Basic } from "../Form";
import { Close } from "../../icons";
import { Timer } from "../Timer";

export const Popup = ({ setIsOpen, handleClose }) => {
  return (
    <section className={styles.popup}>
      <button onClick={() => setIsOpen(false)}>
        <Close className={styles.close} />
      </button>
      <h3 className={styles.alert}>Не спешите уходить</h3>
      <p className={styles.desc}>
        Вы забыли записаться на <span>БЕСПЛАТНЫЙ выезд прораба</span> на ваш
        объект, с <span>БЕСПЛАТНЫМ расчётом</span> стоимости в 2 вариантах.
      </p>
      <div className={styles.contactForm}>
        <div className={styles.topBlock}>
          <div>
            <p className={styles.desc}>
              Оставьте заявку в форме ниже, пока не закончился обратный отсчет!
            </p>
            <Timer handleClose={handleClose} />
          </div>
          <img className={styles.img} src={popupImg} alt="popupImg" />
        </div>
        <Basic titleForm="Введите ваши данные" lockText={true} select={true} />
      </div>
    </section>
  );
};
