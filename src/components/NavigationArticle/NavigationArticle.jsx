import React, { useState } from "react";

import styles from "./NavigationArticle.module.scss";
import { MenuButton } from "../MenuButton";

import { ContactForm } from "../ContactForm";
import {NavLink} from "react-router-dom";

export const NavigationArticle = ({cardData, scroll}) => {
  const [search, setSearch] = useState("");
  const changeSearch = (e) => {
    setSearch(e.currentTarget.value);
  };

  console.log(cardData)
  return (
    <div className={styles.nav}>
      <form action="">
        <input
          className={styles.searchInput}
          type="text"
          id="search"
          name="search"
          onChange={(e) => changeSearch(e)}
          placeholder="Поиск"
          value={search}
        />
      </form>
      <div className={styles.navigationButton}>
        <p className={styles.titleNav}>Навигация по статье</p>
       <div onClick={()=> scroll('first')}><MenuButton
          className={styles.btn}
          title={cardData.descrTitle}
        /></div>
          {  cardData.section.map((t,index) => <div key={index} onClick={() => scroll(index)}><MenuButton  className={styles.btn} title={t.title} /></div>)}
      </div>
      <div className={styles.navigationButton}>
        <p className={styles.titleNav}>Статьи по схожим темам</p>
          {cardData.related.map((t, index) => <NavLink key={index} to={t.url}> <MenuButton
              className={styles.btn}
              title={t.title}
          /> </NavLink>)}

      </div>
      <ContactForm text="Оставьте заявку, и я проконсультирую вас по всем вопросам." />
    </div>
  );
};
