import React from "react";

import styles from "./CatalogPage.module.scss";
import {
  Container,
  MainForm,
  CatalogContainer,
  NavigationHeader,
  Garanties,
  Excursion,
} from "../../components";

export const CatalogPage = () => {
  return (
    <main className={styles.main}>
      <Container>
        <NavigationHeader />
        <MainForm />
        <CatalogContainer />
        <Garanties />
        <Excursion />
      </Container>
    </main>
  );
};
