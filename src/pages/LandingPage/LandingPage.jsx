import React from "react";

import styles from "./LandingPage.module.scss";

import { Container, Excursion, MainFormVariant, Quiz } from "../../components";

export const LandingPage = () => {
  return (
    <section className={styles.wrapper}>
      <Container>
        <MainFormVariant />
        <Quiz numberQuiz={1} />
        <Excursion houseImgVariant={true} descWrapperVariant={true} />
      </Container>
    </section>
  );
};
