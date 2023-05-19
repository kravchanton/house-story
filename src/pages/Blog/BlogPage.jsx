import React from "react";

import styles from "./BlogPage.module.scss";

import { Container, Excursion, Garanties, MainForm } from "../../components";
import { BlogContainer } from "../../components/Blog/BlogContainer";
import { TopObject, BlockArticle, BlockVideo } from "../../components";

export const BlogPage = () => {
  return (
    <main className={styles.main}>
      <Container>
        <MainForm />
        <BlogContainer />
        <TopObject />
        <Garanties title={true} />
        <BlockVideo />
        <BlockArticle />
        <Excursion cloudImg={true} houseImg={true} />
      </Container>
    </main>
  );
};
