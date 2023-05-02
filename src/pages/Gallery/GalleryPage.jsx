import React from "react";

import styles from "./GalleryPage.module.scss";
import {Container, Excursion, Garanties, MainForm, NavigationHeader,} from "../../components";
import {GalleryContainer} from "../../components/Gallery/GalleryContainer";
import {TopObject} from "../../components/TopObject/TopObject";
import {BLockArticle} from "../../components/BlockArticle/BlockArticle";
import {BlockVideo} from "../../components/BlockVideo/BlockVideo";

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
        <BLockArticle/>

        <Excursion cloudImg={true} houseImg={true} />
      </Container>
    </main>
  );
};
