import React from "react";

import styles from "./GalleryPage.module.scss";
import {
  Container,
  Excursion,
  Garanties,
  MainForm,
  TopObject,
  BlockVideo,
  BlockArticle,
} from "../../components";
import { GalleryContainer } from "../../components/Gallery/GalleryContainer";

export const GalleryPage = () => {

  return (
    <main className={styles.main}>
      <Container>
        <MainForm />
        <GalleryContainer />
        <TopObject />
        <Garanties title={true} />
        <BlockVideo />
        <BlockArticle />

        <Excursion cloudImg={true} houseImg={true} />
      </Container>
    </main>
  );
};
