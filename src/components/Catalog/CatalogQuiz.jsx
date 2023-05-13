import React from "react";
import {Quiz} from "../Quiz";
import styles from "./Catalog.module.scss";



export const CatalogQuiz = ({numberQuiz}) => {
    return <div className={styles.QuizWrapper}>
        <Quiz numberQuiz={numberQuiz} />
    </div>
}


