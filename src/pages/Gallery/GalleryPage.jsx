import React from "react";

import styles from "./GalleryPage.module.scss";
import {Container, Excursion, Garanties, MainForm, NavigationHeader,} from "../../components";
import {GalleryContainer} from "../../components/Gallery/GalleryContainer";
import {TopObject} from "../../components/TopObject/TopObject";
import {BlockVideo} from "../../components/BlockVideo/BlockVideo";
import {BlockArticle} from "../../components/BlockArticle/BlockArticle";

export const GalleryPage = () => {
  return (
    <main className={styles.main}>
      <Container>
        <NavigationHeader />
        <MainForm />
        <GalleryContainer />
        <TopObject/>


        <Garanties title={true} />
        <BlockVideo />
        <BlockArticle/>

        <Excursion cloudImg={true} houseImg={true} />
      </Container>
    </main>
  );
};
