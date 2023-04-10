import React from "react";
import styles from "./Catalog.module.scss";
import {MenuButton} from "../MenuButton";
import {NavLink} from "react-router-dom";

export const CatalogItem = ({data}) => {
    console.log(data);
    return (
        <div className={styles.catalogItem}>
            <h4>{data.title}</h4>
            <div className={styles.price}>
                <div>{data.square} м<sup>2</sup></div>
                <div>{data.price}₽</div>
            </div>
            <img src={`${process.env.REACT_APP_UPLOAD_URL}${data?.mainPhoto?.data?.attributes?.url}`} alt=""/>
            <NavLink to={`${data.id}`}><MenuButton
                title='Подробнее'
                className={styles.ItemButton}/></NavLink>
        </div>
    );
};
