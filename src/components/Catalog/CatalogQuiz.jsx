import React from "react";

import styles from "./Catalog.module.scss";

import { Quiz } from "../Quiz";

export const CatalogQuiz = ({ numberQuiz }) => {
  return (
    <div className={styles.QuizWrapper}>
      <Quiz numberQuiz={numberQuiz} />
    </div>
  );
};
