import React from "react";
import styles from "./GalleryContainer.module.scss";
import {MenuButton} from "../MenuButton";

export const MenuPhoto = ({data, folder, setFolder, search, setSearch}) => {
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
                            title={t.attributes.folder}
                            className={
                                folder === index
                                    ? `${styles.NavigationButton} ${styles.active}`
                                    : styles.NavigationButton
                            }
                        >
                            {t.attributes.icon &&   <svg xmlns="http://www.w3.org/2000/svg" >
                                <image href={`${process.env.REACT_APP_UPLOAD_URL}${t.attributes?.icon?.data?.attributes?.url}`}/>
                            </svg>}

                        </MenuButton>
                    </div>
                );
            })}
        </div>
    );
};
