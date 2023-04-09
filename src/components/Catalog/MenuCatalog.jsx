import React from "react";
import styles from "./Catalog.module.scss";
import { MenuButton } from "../MenuButton";

export const MenuCatalog = ({ data, folder, setFolder }) => {
  const changeFolder = (index) => {
    setFolder(index);
  };

  return (
    <div className={styles.NavigationWrapper}>
      <form action="">
        <input
          className={styles.searchInput}
          type="text"
          id="search"
          name="search"
          onChange={(e) => e}
          placeholder="Поиск"
        />
      </form>
      {data?.map((t, index) => {
        return (
          <div key={index} onClick={() => changeFolder(index)}>
            <MenuButton
              title={t.attributes.title}
              className={
                folder === index
                  ? `${styles.NavigationButton} ${styles.active}`
                  : styles.NavigationButton
              }
            />
          </div>
        );
      })}
    </div>
  );
};
