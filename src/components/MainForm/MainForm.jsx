import React from "react";
import {Basic} from "../Form";
import styles from "./MainForm.module.scss";
import Group1743 from './../../assets/Group1743.png'
import tree from './../../assets/tree.png'
import cloud from './../../assets/cloud.png'
import backgroundHouse from './../../assets/backgroudHouse.png'
import rCloud from './../../assets/rCloud.png'
import tCloud from './../../assets/rCloud.png'

export const MainForm = () => {
    return <div className={styles.mainWrapper}>
        <img className={styles.treeLeft} src={tree} alt="tree"/>
        <img className={styles.cloud} src={cloud} alt="cloud"/>
        <img className={styles.backgroundHouse} src={backgroundHouse} alt="backgroundHouse"/>
        <img className={styles.rCloud} src={rCloud} alt="rCloud"/>
        <img className={styles.tCloud} src={tCloud} alt="tCloud"/>
        <div className={styles.formWrapper}>
            <h2>Личная встреча с мастером-прорабом у вас на объекте всего на 45 минут</h2>
            <h3>По итогам встречи рассчитаем стоимость вашего ремонта в 2-3 вариантах стоимости и исполнения +
                Специальный подарок от нашего Архитектора</h3>
            <div className={styles.buttons}>
                <button className={styles.buttonLeft}>Записаться на встречу</button>
                <button className={styles.buttonRight}>Написать в мессенджер</button>
            </div>
            <div className={styles.form}>
                <div className={styles.titleForm}>Хотите записаться на встречу с Мастером?</div>
                <div className={styles.subTitleForm}>Оставьте заявку и получите расчёт стоимости и помощь в подборе
                    материалов напрямую от производителя в ПОДАРОК <span> ( экономия до 30%)</span></div>
                <Basic
                    classNameForm={styles.contactsForm}
                    classNameInput={styles.contactsFormInput}
                    classNameSelect={styles.contactsFormSelect}
                    classNameForBtn={styles.contactsFormBtn}
                    btnText="Отправить"
                    lockText={true}
                />
            </div>
        </div>
        <div className={styles.videoWrapper}>
            <img src={Group1743} alt="image"/>
        </div>
    </div>
}