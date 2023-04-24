import React from "react";

import styles from "./SlideTop.module.scss";
import {MenuButton} from "../MenuButton";
import {NavLink} from "react-router-dom";

export const SlideTop = ({img, data}) => {
    return (
        <>
            <div className={styles.images}>
                <img className={styles.image} src={img} alt="houseTop"/>
                <div className={styles.desc}><h3>{data.title}</h3>
                    <div className={styles.price}>
                        <h4 className={styles.priceText}>{data.square} м²</h4>
                        <h4 className={styles.priceText}>{data.price} руб</h4>
                    </div>
                    <ul className={styles.descHouse}>
                        {data.descr.map((t, index) => <li key={index} className={styles.propertyWrapper}>
                            <p className={styles.text}>{t.title}</p>
                            <div></div>
                            <p className={styles.text}>{t.value}</p>
                        </li>)}
                    </ul>
                    <NavLink to={data.buttonLink}>
                        <MenuButton title={data.buttonTitle} className={styles.btn}/></NavLink></div>

            </div>
        </>
    );
};
