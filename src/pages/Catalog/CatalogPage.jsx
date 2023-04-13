import React from "react";

import styles from "./CatalogPage.module.scss";
import {CatalogContainer, Container, Excursion, Garanties, MainForm, NavigationHeader,} from "../../components";
import {CatalogQuiz} from "../../components/Catalog/CatalogQuiz";

export const CatalogPage = () => {
  return (
    <main className={styles.main}>
      <Container>
        <NavigationHeader />
        <MainForm />
        <CatalogContainer />
        <CatalogQuiz numberQuiz={2}/>
        <Garanties />
        <Excursion />
      </Container>
    </main>
  );
};
