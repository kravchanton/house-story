import React from "react";
import styles from "./Catalog.module.scss";
import {MenuButton} from "../MenuButton";

export const MenuCatalog = ({data, folder, setFolder, search, setSearch}) => {
    const changeFolder = (index) => {
        setFolder(index);
        setSearch('')
    };
    const changeSearch = (e) => {
        setSearch(e.currentTarget.value)
    }
    return (
        <div className={styles.NavigationWrapper}>
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
