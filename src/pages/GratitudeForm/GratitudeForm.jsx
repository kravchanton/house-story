import React from "react";

import styles from "./GratitudeForm.module.scss";

import { Container, Excursion, OurProjects } from "../../components";

export const GratitudeForm = () => {
  return (
    <section className={styles.wrapper}>
      <Container>
        <OurProjects />
        <Excursion />
      </Container>
    </section>
  );
};
