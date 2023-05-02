import React from "react";

import styles from "./BlogPage.module.scss";
import {Container, Excursion, Garanties, MainForm, NavigationHeader,} from "../../components";
import {BlogContainer} from "../../components/Blog/BlogContainer";
import {TopObject} from "../../components/TopObject/TopObject";
import {BLockArticle} from "../../components/BlockArticle/BlockArticle";
import {BlockVideo} from "../../components/BlockVideo/BlockVideo";

export const BlogPage = () => {
  return (
    <main className={styles.main}>
      <Container>
        <NavigationHeader />
        <MainForm />
        <BlogContainer />
        <TopObject/>


        <Garanties title={true} />
        <BlockVideo />
        <BLockArticle/>
        <Excursion cloudImg={true} houseImg={true} />
      </Container>
    </main>
  );
};
