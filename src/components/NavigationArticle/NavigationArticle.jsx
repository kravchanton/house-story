import React, { useState } from "react";

import styles from "./NavigationArticle.module.scss";
import { MenuButton } from "../MenuButton";

import { ContactForm } from "../ContactForm";

export const NavigationArticle = () => {
  const [search, setSearch] = useState("");
  const changeSearch = (e) => {
    setSearch(e.currentTarget.value);
  };
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
        <MenuButton
          className={styles.btn}
          title="Какие задачи поставил клиент"
        />
        <MenuButton className={styles.btn} title="Этап первый" />
        <MenuButton className={styles.btn} title="Этап второй" />
      </div>
      <div className={styles.navigationButton}>
        <p className={styles.titleNav}>Статьи по схожим темам</p>
        <MenuButton
          className={styles.btn}
          title="Как выбрать недвижимость для инвестиции"
        />
        <MenuButton
          className={styles.btn}
          title="Как сэкономить при строительстве дома и не потерять в качестве?"
        />
        <MenuButton className={styles.btn} title="Ремонт. Основные ошибки." />
      </div>
      <ContactForm text="Оставьте заявку, и я проконсультирую вас по всем вопросам." />
    </div>
  );
};
