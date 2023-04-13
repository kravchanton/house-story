import React from "react";
import {Quiz} from "../Quiz";
import styles from "./Catalog.module.scss";



export const CatalogQuiz = ({numberQuiz}) => {
    return <div className={styles.QuizWrapper}>
        <h2> Не знаете какой дом хотите построить? <br/> <span>Пройдите тест, и мы подберем для вас проект дома и рассчитаем стоимость строительства!</span></h2>
        <Quiz numberQuiz={numberQuiz} />
    </div>
}


