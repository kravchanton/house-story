import React from "react";

import styles from "./ContactForm.module.scss";

import specialist from "../../assets/specialist.png";

import { Basic } from "../Form";

export const ContactForm = ({ text }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.specialist}>
        <img className={styles.img} src={specialist} alt="specialist" />
        <div className={styles.desc}>
          <p className={styles.name}>Ксения Рыбакова</p>
          <p className={styles.about}>
            Старший менеджер по оказанию строительных услуг
          </p>
        </div>
      </div>
      <p className={styles.text}>{text}</p>
      <Basic select={true} lockText={true} />
    </div>
  );
};
