import React from "react";

import styles from "./NavigationVideo.module.scss";

import {NavLink} from "react-router-dom";
import {ContactForm, MenuButton} from "../../components";

export const NavigationVideo = ({cardData}) => {


  return (
    <div className={styles.nav}>

      <div className={styles.navigationButton}>
        <p className={styles.titleNav}>Видео по схожим темам</p>
          {cardData?.related?.map((t, index) => <NavLink key={index} to={t.link}> <MenuButton
              className={styles.btn}
              title={t.title}
          /> </NavLink>)}

      </div>
      <ContactForm text="Оставьте заявку, и я проконсультирую вас по всем вопросам." />
    </div>
  );
};
