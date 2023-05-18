import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./NavigationArticle.module.scss";

import { MenuButton, ContactForm } from "../../components";

export const NavigationArticle = ({ cardData, scroll }) => {
  return (
    <div className={styles.nav}>
      <div className={styles.navigationButton}>
        <p className={styles.titleNav}>Навигация по статье</p>
        <div onClick={() => scroll("first")}>
          <MenuButton className={styles.btn} title={cardData.descrTitle} />
        </div>
        {cardData.section.map((t, index) => (
          <div key={index} onClick={() => scroll(index)}>
            <MenuButton className={styles.btn} title={t.title} />
          </div>
        ))}
      </div>
      <div className={styles.navigationButton}>
        <p className={styles.titleNav}>Статьи по схожим темам</p>
        {cardData?.related?.map((t, index) => (
          <NavLink key={index} to={t.url}>
            {" "}
            <MenuButton className={styles.btn} title={t.title} />{" "}
          </NavLink>
        ))}
      </div>
      <ContactForm text="Оставьте заявку, и я проконсультирую вас по всем вопросам." />
    </div>
  );
};
